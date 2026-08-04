# Graph Report - E:/Repositorios/cbhali-web-v2  (2026-07-30)

## Corpus Check
- 108 files · ~333,841 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 312 nodes · 511 edges · 22 communities (19 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 56,655 input · 0 output

## Community Hubs (Navigation)
- Shared Page Content Components
- Contact Page & Root Layout
- Blog & Collections Listing
- Product Detail Page
- Collection Detail Logic
- Home Page Sections
- Home Design Asset Pipeline
- Custom Page Sections
- Home Editorial & Gallery
- Contract Page Sections
- About Page Sections
- SVG Crop Script
- SVG Specs Extraction Script
- Instagram Feed Integration
- Product Photo Processing Script
- Collection Slug Route
- SVG Image Extraction Script
- SVG Shapes Script
- SVG Skeleton Script
- Inner Page Band Component

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 41 edges
2. `getTranslations()` - 39 edges
3. `Mapa de assets del Home (docs/asset-map.md)` - 16 edges
4. `Sistema de coordenadas SVG (escritorio/móvil)` - 12 edges
5. `MenuButton()` - 10 edges
6. `SiteFooter()` - 9 edges
7. `FadeIn()` - 7 edges
8. `useMenu()` - 5 edges
9. `collectionItems` - 4 edges
10. `getProduct()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `AboutContent()` --calls--> `useLanguage()`  [EXTRACTED]
  components/AboutContent.tsx → lib/LanguageContext.tsx
- `AboutContent()` --calls--> `getTranslations()`  [EXTRACTED]
  components/AboutContent.tsx → lib/translations.ts
- `AboutHero()` --calls--> `useLanguage()`  [EXTRACTED]
  components/AboutHero.tsx → lib/LanguageContext.tsx
- `AboutHero()` --calls--> `getTranslations()`  [EXTRACTED]
  components/AboutHero.tsx → lib/translations.ts
- `BlogPageContent()` --calls--> `useLanguage()`  [EXTRACTED]
  components/BlogPageContent.tsx → lib/LanguageContext.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Variantes de imagen del hero (slideshow)** — docs_asset_map_hero_corridor_webp, docs_asset_map_hero_corridor_wide_webp, docs_asset_map_hero_3days_webp [INFERRED 0.75]
- **Pipeline de extracción SVG a WebP** — docs_asset_map_home_intro_svg, docs_asset_map_svg_extract_images_script, docs_asset_map_document [EXTRACTED 1.00]
- **Pipeline de generación de specs (textos/tipografía/colores)** — docs_asset_map_home_skeleton_svg, docs_asset_map_svg_specs_script, docs_asset_map_home_specs_json [EXTRACTED 1.00]

## Communities (22 total, 3 thin omitted)

### Community 0 - "Shared Page Content Components"
Cohesion: 0.08
Nodes (39): AboutContent(), teamMembers, AboutHero(), BlogPageContent(), postIds, postImages, CollectionDetailContent(), CollectionsHero() (+31 more)

### Community 1 - "Contact Page & Root Layout"
Cohesion: 0.11
Nodes (15): metadata, seasonsFallback, ContactForm(), CITIES, Dealers(), DEVELOPERS, OTHER_CITIES, Hero() (+7 more)

### Community 2 - "Blog & Collections Listing"
Cohesion: 0.12
Nodes (10): Hero(), NewsletterContact(), POSTS, PostsGrid(), CollectionRow(), Hero(), Intro(), Quote() (+2 more)

### Community 3 - "Product Detail Page"
Cohesion: 0.15
Nodes (15): ProductPage(), Accordion(), DetailIcon(), ICONS, ExploreMore(), Item, shuffle(), Gallery() (+7 more)

### Community 4 - "Collection Detail Logic"
Cohesion: 0.12
Nodes (16): SectionKey, stockKey, common, DetailIcon(), icons, CollectionItem, collectionItems, CollectionSlug (+8 more)

### Community 5 - "Home Page Sections"
Cohesion: 0.14
Nodes (10): Catalog(), Hero(), SLIDES, Instagram(), Manifesto(), Product(), Showcase(), Statement() (+2 more)

### Community 6 - "Home Design Asset Pipeline"
Cohesion: 0.17
Nodes (20): brick-rug.webp, catalog-drape.webp, Sistema de coordenadas SVG (escritorio/móvil), Mapa de assets del Home (docs/asset-map.md), footer-rug.webp, hero-3days.webp, hero-corridor.webp, hero-corridor-wide.webp (+12 more)

### Community 7 - "Custom Page Sections"
Cohesion: 0.16
Nodes (9): Author(), Believe(), Choose(), Hero(), Intro(), Journey(), STEPS, SketchBand() (+1 more)

### Community 8 - "Home Editorial & Gallery"
Cohesion: 0.15
Nodes (5): FadeIn(), FadeInProps, galleryItems, slides, instagramPosts

### Community 9 - "Contract Page Sections"
Cohesion: 0.16
Nodes (9): Gallery(), PHOTOS, Hero(), Intro(), Process(), STEPS, QuoteBand(), Tagline() (+1 more)

### Community 10 - "About Page Sections"
Cohesion: 0.24
Nodes (5): Hero(), Story(), StoryBand(), Team, Values

### Community 11 - "SVG Crop Script"
Cohesion: 0.25
Nodes (7): classMap, kept, minStyle, [src, out, X, Y, W, H], svg, used, [x0, y0, w, h]

### Community 12 - "SVG Specs Extraction Script"
Cohesion: 0.29
Nodes (5): classMap, colors, [src, out], svg, texts

### Community 13 - "Instagram Feed Integration"
Cohesion: 0.47
Nodes (5): fallbackPosts, getInstagramFeed(), getInstagramMediaUrl(), getMediaSource(), InstagramMediaItem

### Community 16 - "SVG Image Extraction Script"
Cohesion: 0.40
Nodes (3): done, rs, [src, outDir]

### Community 17 - "SVG Shapes Script"
Cohesion: 0.50
Nodes (3): els, [src, xMin, xMax, yMin, yMax], svg

### Community 18 - "SVG Skeleton Script"
Cohesion: 0.50
Nodes (3): rs, [src, out], ws

## Knowledge Gaps
- **78 isolated node(s):** `teamMembers`, `postImages`, `postIds`, `stockKey`, `SectionKey` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SiteFooter()` connect `Blog & Collections Listing` to `Contact Page & Root Layout`, `Product Detail Page`, `Home Page Sections`, `Custom Page Sections`, `Contract Page Sections`, `About Page Sections`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `useLanguage()` connect `Shared Page Content Components` to `Collection Detail Logic`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `getTranslations()` connect `Shared Page Content Components` to `Collection Detail Logic`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `Sistema de coordenadas SVG (escritorio/móvil)` (e.g. with `brick-rug.webp` and `catalog-drape.webp`) actually correct?**
  _`Sistema de coordenadas SVG (escritorio/móvil)` has 11 INFERRED edges - model-reasoned connections that need verification._
- **What connects `teamMembers`, `postImages`, `postIds` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Shared Page Content Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08249603384452671 - nodes in this community are weakly interconnected._
- **Should `Contact Page & Root Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.11384615384615385 - nodes in this community are weakly interconnected._