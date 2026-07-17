# CB Hali — sitio web (v2)

Reconstrucción desde cero del sitio de CB Hali, fiel al paquete de diseño de Illustrator
(`Material CB Hali/Web Package`). Cada página se construye a partir de su SVG exportado
(geometría, tipografía y colores exactos) y sus renders de referencia.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Estructura

- `app/` — rutas de Next.js (App Router). `app/page.tsx` es el Home.
- `components/home/` — un componente por sección del Home.
- `public/fonts/` — fuentes del paquete de diseño (Satoshi, Brigend Signature, Open Sans, Helvetica).
- `public/images/home/` — imágenes del Home extraídas del SVG del diseño y optimizadas a WebP.
- `docs/` — mapa de assets y especificaciones extraídas del diseño.
- `scripts/` — utilidades (extracción de specs del SVG, optimización de imágenes).

## Tipografía de titulares ("The Seasons")

Los titulares usan **The Seasons** (Adobe Fonts). Se integra con un Web Project de
fonts.adobe.com (`<link>` del kit en `app/layout.tsx`). La variable CSS `--font-seasons`
en `app/globals.css` es el único punto a tocar.
