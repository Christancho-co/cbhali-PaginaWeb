// Extrae las imágenes embebidas (base64) de un SVG gigante por streaming
// y las guarda como archivos, luego las optimiza a WebP.
// Uso: node scripts/svg-extract-images.mjs <entrada.svg> <dirSalida>
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const [src, outDir] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });

const MARK = 'base64,';
const rs = fs.createReadStream(src, { encoding: 'utf8', highWaterMark: 1 << 22 });

let inB64 = false;
let carry = '';
let b64buf = '';
let idx = 0;
let currentFile = null;

function flushB64(final = false) {
  // decodificar en múltiplos de 4 caracteres
  const usable = final ? b64buf.length : b64buf.length - (b64buf.length % 4);
  if (usable > 0) {
    currentFile.write(Buffer.from(b64buf.slice(0, usable), 'base64'));
    b64buf = b64buf.slice(usable);
  }
}

const done = [];

rs.on('data', (chunk) => {
  const data = carry + chunk;
  carry = '';
  let i = 0;
  while (i < data.length) {
    if (inB64) {
      const q = data.indexOf('"', i);
      if (q === -1) {
        b64buf += data.slice(i);
        flushB64();
        i = data.length;
      } else {
        b64buf += data.slice(i, q);
        flushB64(true);
        currentFile.end();
        inB64 = false;
        i = q;
      }
    } else {
      const m = data.indexOf(MARK, i);
      if (m === -1) {
        i = Math.max(i, data.length - MARK.length);
        carry = data.slice(i);
        i = data.length;
      } else {
        const name = path.join(outDir, `embed-${String(idx).padStart(2, '0')}.png`);
        currentFile = fs.createWriteStream(name);
        done.push(name);
        idx += 1;
        i = m + MARK.length;
        inB64 = true;
        b64buf = '';
      }
    }
  }
});

rs.on('end', async () => {
  console.log(`Extraídas ${idx} imágenes. Optimizando a WebP...`);
  for (const f of done) {
    const meta = await sharp(f).metadata();
    const target = f.replace(/\.png$/, '.webp');
    const width = Math.min(meta.width, 2200);
    await sharp(f).resize({ width }).webp({ quality: 82 }).toFile(target);
    const kb = Math.round(fs.statSync(target).size / 1024);
    console.log(`${path.basename(target)}: ${meta.width}x${meta.height} -> ${width}px, ${kb} KB`);
  }
});
