# Mapa de assets del Home

Origen: imágenes embebidas en `Web Package/diseno pagina svg/1. Home [Intro].svg`,
extraídas con `scripts/svg-extract-images.mjs` y optimizadas a WebP (máx. 2200 px).

Sistema de coordenadas: el SVG (viewBox 7285×15972) contiene dos artboards:

- **Escritorio**: origen (832, 690), 1920 px de ancho. El mockup incluye el chrome de
  Safari (≈99.5 px); el contenido real de la página empieza en y≈789.5.
  → coordenada de página = (x − 832, y − 789.5).
- **Móvil**: origen (5105, 0), 1125 px de ancho, 15966 px de alto.

| Archivo | Uso | Posición escritorio (página, px) | Tamaño mostrado |
|---|---|---|---|
| `hero-corridor.webp` | Hero (slide visible) | (0, 0) | 1983×1254 (bleed) |
| `hero-corridor-wide.webp` | Hero móvil (misma foto, encuadre ancho) | móvil (−800, 300) | 2980×1911 |
| `hero-3days.webp` | Slide alternativo del hero ("3 Days of Design") | oculto tras slide 1 | 1908×1239 |
| `product-rolls.webp` | Rollos de tapete, sección producto | (448, 2820) | 1087×1471 |
| `catalog-drape.webp` | Imagen full-width "Explore Our Catalog" | (27, 4290) | 1927×1368 |
| `video-thumb.webp` | Captura del video de YouTube "CB RUGS — Making of" | (231, 6873) | 994×601 |
| `team.webp` | Foto B/N del equipo | (1281, 7068) | 670×578 |
| `insta-phone.webp` | Captura Instagram para mockup de teléfono | (278, 8357) | 539×1132 |
| `stairs-rug.webp` | Tapete en escaleras (columna derecha Instagram) | (761, 7644) | 1188×1595 |
| `brick-rug.webp` | Full-bleed tapete colgado / pared de ladrillo | (30, 8953) | 1921×3030 |
| `footer-rug.webp` | Detalle de tapete tras el logo del footer | (30, 10925) | 1923×2997 |

Textos, tamaños tipográficos, tracking y colores exactos: `docs/home-specs.json`
(generado con `scripts/svg-specs.mjs` desde `docs/home-skeleton.svg`).

Referencias visuales completas:
`Web Package/1. Home [Intro]_Folder/1x/home escriotori.png` (1921×13290, incluye chrome)
y `home movl.png` (1126×15967).
