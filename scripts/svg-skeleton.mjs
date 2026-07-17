// Lee un SVG gigante exportado de Illustrator por streaming y elimina los
// payloads base64 de las imágenes embebidas, dejando un "esqueleto" pequeño
// con toda la geometría, textos y estilos para poder analizarlo.
// Uso: node scripts/svg-skeleton.mjs <entrada.svg> <salida.svg>
import fs from 'fs';

const [src, out] = process.argv.slice(2);
if (!src || !out) {
  console.error('Uso: node svg-skeleton.mjs <entrada.svg> <salida.svg>');
  process.exit(1);
}

const MARK = 'base64,';
const rs = fs.createReadStream(src, { encoding: 'utf8', highWaterMark: 1 << 22 });
const ws = fs.createWriteStream(out);
let inB64 = false;
let carry = '';
let imgCount = 0;

rs.on('data', (chunk) => {
  const data = carry + chunk;
  carry = '';
  let outStr = '';
  let i = 0;
  while (i < data.length) {
    if (inB64) {
      const q = data.indexOf('"', i);
      if (q === -1) {
        i = data.length; // seguimos dentro del base64: descartar
      } else {
        inB64 = false;
        i = q; // conservar la comilla de cierre
      }
    } else {
      const m = data.indexOf(MARK, i);
      if (m === -1) {
        const keep = Math.max(i, data.length - MARK.length);
        outStr += data.slice(i, keep);
        carry = data.slice(keep);
        i = data.length;
      } else {
        outStr += data.slice(i, m + MARK.length) + `__IMG_${imgCount}__`;
        imgCount += 1;
        i = m + MARK.length;
        inB64 = true;
      }
    }
  }
  ws.write(outStr);
});

rs.on('end', () => {
  ws.write(carry);
  ws.end(() => console.log(`Listo. Imágenes embebidas encontradas: ${imgCount}`));
});
