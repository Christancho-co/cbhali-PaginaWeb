// Procesa las fotos reales de las 8 colecciones nuevas (ALUNA, AMHARA, ARYA,
// EQUUS, HELIOS, LATTICE, MANCHAHA, SOMA) a public/images/products/<slug>/<sku>/
// Elige una foto "completa" como principal y hasta 3 más para miniaturas.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = 'C:/Users/Crist/Downloads/Material CB Hali/Material CB Hali/new colleccion';
const OUT = 'public/images/products';

const COLLECTIONS = [
  { slug: 'aluna', dir: 'ALUNA-20260715T135254Z-1-001/ALUNA' },
  { slug: 'amhara', dir: 'AMHARA-20260721T181125Z-1-001/AMHARA' },
  { slug: 'arya', dir: 'ARYA-20260715T135256Z-1-001/ARYA' },
  { slug: 'equus', dir: 'EQUUS-20260721T181128Z-1-001/EQUUS' },
  { slug: 'helios', dir: 'HELIOS-20260721T181132Z-1-001/HELIOS' },
  { slug: 'lattice', dir: 'LATTICE-20260715T135257Z-1-001/LATTICE' },
  { slug: 'manchaha', dir: 'MANCHAHA-20260715T135259Z-1-001/MANCHAHA' },
  { slug: 'soma', dir: 'SOMA-20260721T181316Z-1-001/SOMA' },
];

const IMG_RE = /\.(jpe?g|png)$/i;

function walkImages(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walkImages(full));
    else if (IMG_RE.test(entry.name)) out.push(full);
  }
  return out;
}

function pickMain(files) {
  const main = files.find((f) => /completa|complete/i.test(path.basename(f)));
  return main || files[0];
}

function pickThumbs(files, main, n) {
  const rest = files.filter((f) => f !== main);
  const zooms = rest.filter((f) => /zoom/i.test(path.basename(f)));
  const others = rest.filter((f) => !/zoom/i.test(path.basename(f)));
  return [...zooms, ...others].slice(0, n);
}

const manifest = {};

for (const col of COLLECTIONS) {
  const colPath = path.join(ROOT, col.dir);
  const skuDirs = fs.readdirSync(colPath, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  manifest[col.slug] = [];

  for (const skuDirName of skuDirs) {
    const skuFull = path.join(colPath, skuDirName);
    const files = walkImages(skuFull);
    if (files.length === 0) {
      console.log('SIN FOTOS:', col.slug, skuDirName);
      continue;
    }
    // código SKU limpio (ej "031-0010  - Verde Olivo" -> "031-0010", "Verde Olivo")
    const m = skuDirName.match(/^(\d{3}-\d{4})\s*(?:-\s*(.+))?$/);
    const code = m ? m[1] : skuDirName;
    const colorName = m && m[2] ? m[2].trim() : null;

    const main = pickMain(files);
    const thumbs = pickThumbs(files, main, 3);

    const outDir = path.join(OUT, col.slug, code);
    fs.mkdirSync(outDir, { recursive: true });

    await sharp(main).resize({ width: 1400 }).webp({ quality: 84 }).toFile(path.join(outDir, 'main.webp'));
    const thumbNames = [];
    for (let i = 0; i < thumbs.length; i++) {
      const name = `thumb-${i + 1}.webp`;
      await sharp(thumbs[i]).resize({ width: 500 }).webp({ quality: 82 }).toFile(path.join(outDir, name));
      thumbNames.push(name);
    }

    manifest[col.slug].push({ code, colorName, thumbCount: thumbNames.length });
    console.log(col.slug, code, colorName || '', '-> main + ' + thumbNames.length + ' thumbs');
  }
}

fs.writeFileSync('docs/products-manifest.json', JSON.stringify(manifest, null, 2));
console.log('\nListo. Manifiesto en docs/products-manifest.json');
