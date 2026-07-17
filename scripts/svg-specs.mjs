// Extrae del esqueleto SVG las especificaciones de diseño:
// - mapa de clases CSS -> estilos (font, size, tracking, fill)
// - cada <text> con su posición (transform), clases y contenido
// Uso: node scripts/svg-specs.mjs docs/home-skeleton.svg docs/home-specs.json
import fs from 'fs';

const [src, out] = process.argv.slice(2);
const svg = fs.readFileSync(src, 'utf8');

// ---- 1. Mapa de clases del <style> ----
const styleBlock = svg.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? '';
const classMap = {};
for (const m of styleBlock.matchAll(/\.([\w-]+)(?:\s*,\s*\.[\w-]+)*\s*\{([^}]*)\}/g)) {
  // una regla puede aplicar a varias clases: .cls-1, .cls-2 { ... }
  const selector = m[0].slice(0, m[0].indexOf('{'));
  const body = m[2].trim();
  const props = {};
  for (const p of body.split(';')) {
    const [k, v] = p.split(':').map((s) => s && s.trim());
    if (k && v) props[k] = v;
  }
  for (const cls of selector.matchAll(/\.([\w-]+)/g)) {
    classMap[cls[1]] = { ...(classMap[cls[1]] ?? {}), ...props };
  }
}

// ---- 2. Textos ----
function resolveStyle(classes) {
  const style = {};
  for (const c of classes) Object.assign(style, classMap[c] ?? {});
  return style;
}

const texts = [];
for (const m of svg.matchAll(/<text([^>]*)>([\s\S]*?)<\/text>/g)) {
  const attrs = m[1];
  const inner = m[2];
  const cls = (attrs.match(/class="([^"]*)"/)?.[1] ?? '').split(/\s+/).filter(Boolean);
  const transform = attrs.match(/transform="([^"]*)"/)?.[1] ?? '';
  const t = transform.match(/translate\(([-\d.]+)[ ,]+([-\d.]+)\)/);
  const scale = transform.match(/scale\(([-\d.]+)(?:[ ,]+([-\d.]+))?\)/);
  // contenido: concatenar tspans, conservando saltos de línea aproximados
  const lines = [];
  let current = '';
  for (const tm of inner.matchAll(/<tspan([^>]*)>([\s\S]*?)<\/tspan>|([^<>]+)/g)) {
    const chunk = (tm[2] ?? tm[3] ?? '').replace(/\s+/g, ' ');
    const tspanAttrs = tm[1] ?? '';
    if (/\bx="/.test(tspanAttrs) && /\by="/.test(tspanAttrs) && current) {
      lines.push(current);
      current = chunk;
    } else {
      current += chunk;
    }
  }
  if (current.trim()) lines.push(current);
  const style = resolveStyle(cls);
  texts.push({
    x: t ? +t[1] : null,
    y: t ? +t[2] : null,
    scale: scale ? +scale[1] : 1,
    fontFamily: style['font-family'] ?? null,
    fontSize: style['font-size'] ?? null,
    fontWeight: style['font-weight'] ?? null,
    letterSpacing: style['letter-spacing'] ?? null,
    fill: style.fill ?? null,
    classes: cls,
    text: lines.map((l) => l.trim()).filter(Boolean),
  });
}

// ---- 3. Colores usados (fills de todas las clases) ----
const colors = [...new Set(Object.values(classMap).map((s) => s.fill).filter(Boolean))];

fs.writeFileSync(out, JSON.stringify({ classMap, colors, texts }, null, 2));
console.log(`Clases: ${Object.keys(classMap).length}, textos: ${texts.length}, colores: ${colors.length}`);
console.log('Colores:', colors.join(' '));
