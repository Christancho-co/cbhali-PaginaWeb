// Extrae una región del esqueleto SVG como SVG independiente (solo formas
// vectoriales, sin <text> ni <image>), con viewBox ajustado a la región.
// Uso: node scripts/svg-crop.mjs <skeleton.svg> <salida.svg> <x> <y> <w> <h>
import fs from 'fs';

const [src, out, X, Y, W, H] = process.argv.slice(2);
const [x0, y0, w, h] = [+X, +Y, +W, +H];
const svg = fs.readFileSync(src, 'utf8');

const style = svg.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? '';
const kept = [];

for (const m of svg.matchAll(/<(path|rect|circle|ellipse|polygon|line|polyline)\b[^>]*\/?>/g)) {
  const el = m[0];
  const get = (a) => el.match(new RegExp(`${a}="([^"]*)"`))?.[1];
  const t = (get('transform') ?? '').match(/translate\(([-\d.]+)[ ,]+([-\d.]+)\)/);
  const tx = t ? +t[1] : 0;
  const ty = t ? +t[2] : 0;
  let bb = null;
  const tag = m[1];
  if (tag === 'rect') {
    const x = +(get('x') ?? 0), y = +(get('y') ?? 0), rw = +(get('width') ?? 0), rh = +(get('height') ?? 0);
    bb = [x, x + rw, y, y + rh];
  } else if (tag === 'circle' || tag === 'ellipse') {
    const cx = +(get('cx') ?? 0), cy = +(get('cy') ?? 0);
    const rx = +(get('rx') ?? get('r') ?? 0), ry = +(get('ry') ?? get('r') ?? 0);
    bb = [cx - rx, cx + rx, cy - ry, cy + ry];
  } else {
    const d = get('d') ?? get('points') ?? '';
    const nums = [...d.matchAll(/-?\d+\.?\d*/g)].map((n) => +n[0]);
    if (nums.length >= 2) {
      const xs = nums.filter((_, i) => i % 2 === 0);
      const ys = nums.filter((_, i) => i % 2 === 1);
      bb = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    }
  }
  // ancla: primer par de números del d/points (el M inicial siempre es absoluto)
  let anchor = null;
  if (tag === 'rect') anchor = [+(get('x') ?? 0) + tx, +(get('y') ?? 0) + ty];
  else if (tag === 'circle' || tag === 'ellipse') anchor = [+(get('cx') ?? 0) + tx, +(get('cy') ?? 0) + ty];
  else {
    const d = get('d') ?? get('points') ?? '';
    const nums = [...d.matchAll(/-?\d+\.?\d*/g)].map((n) => +n[0]);
    if (nums.length >= 2) anchor = [nums[0] + tx, nums[1] + ty];
  }
  if (!anchor) continue;
  const pad = 60;
  const anchorIn = anchor[0] >= x0 - pad && anchor[0] <= x0 + w + pad && anchor[1] >= y0 - pad && anchor[1] <= y0 + h + pad;
  let bboxIn = false;
  if (bb) {
    const box = [bb[0] + tx, bb[1] + tx, bb[2] + ty, bb[3] + ty];
    const margin = Math.max(w, h);
    const contained = box[0] >= x0 - margin && box[1] <= x0 + w + margin && box[2] >= y0 - margin && box[3] <= y0 + h + margin;
    const intersects = box[1] >= x0 && box[0] <= x0 + w && box[3] >= y0 && box[2] <= y0 + h;
    bboxIn = contained && intersects;
  }
  if (!anchorIn && !bboxIn) continue;
  kept.push(el);
}

// estilo mínimo: solo las clases que usan los elementos conservados
const used = new Set();
for (const el of kept) {
  const cls = el.match(/class="([^"]*)"/)?.[1];
  if (cls) cls.split(/\s+/).forEach((c) => used.add(c));
}
const classMap = {};
for (const m of style.matchAll(/((?:\.[\w-]+\s*,?\s*)+)\{([^}]*)\}/g)) {
  for (const cm of m[1].matchAll(/\.([\w-]+)/g)) {
    classMap[cm[1]] = (classMap[cm[1]] ?? '') + m[2].trim();
  }
}
const minStyle = [...used].map((c) => `.${c}{${classMap[c] ?? ''}}`).join('\n');

const result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x0} ${y0} ${w} ${h}">\n<defs><style>${minStyle}</style></defs>\n${kept.join('\n')}\n</svg>\n`;
fs.writeFileSync(out, result);
console.log(`${out}: ${kept.length} elementos, ${Math.round(result.length / 1024)} KB`);
