// Inventario de formas vectoriales del esqueleto SVG: tipo, clase, fill,
// bbox aproximado (números del atributo d/points + translate del transform).
// Uso: node scripts/svg-shapes.mjs docs/home-skeleton.svg [xMin xMax yMin yMax]
import fs from 'fs';

const [src, xMin, xMax, yMin, yMax] = process.argv.slice(2);
const svg = fs.readFileSync(src, 'utf8');
const filter = xMin !== undefined;

const els = [];
for (const m of svg.matchAll(/<(path|rect|circle|ellipse|polygon|line|polyline)\b([^>]*)\/?>(?!<\/)/g)) {
  const [, tag, attrs] = m;
  const get = (a) => attrs.match(new RegExp(`${a}="([^"]*)"`))?.[1];
  const cls = get('class') ?? '';
  const transform = get('transform') ?? '';
  const t = transform.match(/translate\(([-\d.]+)[ ,]+([-\d.]+)\)/);
  const tx = t ? +t[1] : 0;
  const ty = t ? +t[2] : 0;
  let bb = null;
  if (tag === 'rect') {
    const x = +(get('x') ?? 0), y = +(get('y') ?? 0), w = +(get('width') ?? 0), h = +(get('height') ?? 0);
    bb = [x, x + w, y, y + h];
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
  if (!bb) continue;
  const box = [bb[0] + tx, bb[1] + tx, bb[2] + ty, bb[3] + ty].map((n) => Math.round(n));
  if (filter && (box[1] < +xMin || box[0] > +xMax || box[3] < +yMin || box[2] > +yMax)) continue;
  els.push({ tag, cls, box, offset: m.index });
}
for (const e of els) {
  console.log(`${e.tag}\t[${e.box.join(',')}]\t${e.cls}\t@${e.offset}`);
}
console.log('total:', els.length);
