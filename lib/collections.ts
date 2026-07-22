/**
 * Fuente de verdad de las colecciones de tapetes (nombre, fotos, textos,
 * variantes/tallas/stock para la página de producto). La usan
 * CollectionsHero, CollectionsList y app/collections/[slug]/page.tsx
 * (vía getCollectionBySlug) para no repetir esta información en cada
 * componente. Para agregar/editar una colección, es aquí donde se hace.
 *
 * Aluna, Arya, Lattice y Manchaha tienen datos reales de producto
 * (variantes de color = SKUs distintos, tallas con disponibilidad real,
 * ficha técnica) transcritos de las plantillas WEB-PLANTILLA que entregó
 * el cliente. Maori, Soma, Equus, Amhara y Helios todavía no tienen ese
 * material fotográfico/de inventario, así que usan un solo "variant"
 * (su foto de portada actual) y `customSizing: true`, que hace que la
 * página de producto muestre las tallas sin etiqueta de stock inventada
 * y una nota de "medida a la carta" en su lugar.
 */
export type CollectionSlug = 'maori' | 'soma' | 'equus' | 'amhara' | 'helios' | 'manchaha' | 'aluna' | 'arya' | 'lattice'

export type StockStatus = 'in-stock' | 'coming-soon' | 'out-of-stock'

export type ProductSize = {
  label: string
  status?: StockStatus
}

export type DetailIconKey =
  | 'softness'
  | 'handmade'
  | 'stainResistance'
  | 'durability'
  | 'biodegradable'
  | 'resistant'
  | 'softnessLuster'
  | 'hypoallergenic'

export type ProductVariant = {
  code: string
  colorName?: string
  colorNameEs?: string
  hero: string
  gallery: string[]
}

export type ProductSpecs = {
  material: string
  materialEs: string
  pileHeight?: string
  texture: string
  textureEs: string
  shape: string
  shapeEs: string
  backing?: string
  backingEs?: string
}

export type CollectionItem = {
  slug: CollectionSlug
  name: string
  subtitle: string
  statement: string
  statementEs: string
  cover: string
  quote: string
  quoteEs: string
  images: string[]
  itemCode: string
  variants: ProductVariant[]
  sizes: ProductSize[]
  detailIcons: DetailIconKey[]
  specs: ProductSpecs
  aboutBody: string[]
  aboutBodyEs: string[]
  customSizing?: boolean
}

// Tallas estándar y ficha técnica reutilizadas por las colecciones que
// todavía no tienen inventario/medidas propias confirmadas por el cliente.
const legacySizes: ProductSize[] = [
  { label: '2,00 x 3,00 m' },
  { label: '2,50 x 3,50 m' },
  { label: '3,00 x 4,00 m' },
  { label: '4,00 x 5,00 m' },
]

const legacySpecs: ProductSpecs = {
  material: '100% Wool',
  materialEs: '100% Lana',
  texture: 'Hand-tufted',
  textureEs: 'Anudado a mano',
  shape: 'Rectangle',
  shapeEs: 'Rectangular',
}

const legacyDetailIcons: DetailIconKey[] = ['softness', 'handmade', 'stainResistance', 'durability']

export const collectionItems: CollectionItem[] = [
  {
    slug: 'aluna',
    name: 'ALUNA',
    subtitle: 'It is not about symmetry. It is about balance.',
    statement: 'Geometric clarity and abstract composition in a hand-tufted wool rug that brings serene, sculptural balance to any room.',
    statementEs: 'Claridad geométrica y composición abstracta en una alfombra de lana anudada a mano que aporta un equilibrio sereno y escultural a cualquier espacio.',
    cover: '/images/Collections/Aluna/043-0001-hero.webp',
    quote: 'It is not about symmetry. It is about balance.',
    quoteEs: 'No se trata de simetría. Se trata de equilibrio.',
    images: [
      '/images/Collections/Aluna/043-0001-hero.webp',
      '/images/Collections/Aluna/043-0002-hero.webp',
      '/images/Collections/Aluna/043-0003-hero.webp',
      '/images/Collections/Aluna/043-0005-hero.webp',
    ],
    itemCode: '043',
    variants: [
      {
        code: '043-0001',
        hero: '/images/Collections/Aluna/043-0001-hero.webp',
        gallery: [
          '/images/Collections/Aluna/043-0001-zoom-1.webp',
          '/images/Collections/Aluna/043-0001-zoom-2.webp',
          '/images/Collections/Aluna/043-0001-ambiente.webp',
        ],
      },
      {
        code: '043-0002',
        hero: '/images/Collections/Aluna/043-0002-hero.webp',
        gallery: [
          '/images/Collections/Aluna/043-0002-zoom-1.webp',
          '/images/Collections/Aluna/043-0002-zoom-2.webp',
          '/images/Collections/Aluna/043-0002-ambiente.webp',
        ],
      },
      {
        code: '043-0003',
        hero: '/images/Collections/Aluna/043-0003-hero.webp',
        gallery: [
          '/images/Collections/Aluna/043-0003-zoom-1.webp',
          '/images/Collections/Aluna/043-0003-zoom-2.webp',
          '/images/Collections/Aluna/043-0003-zoom-3.webp',
        ],
      },
      {
        code: '043-0004',
        hero: '/images/Collections/Aluna/043-0004-hero.webp',
        gallery: ['/images/Collections/Aluna/043-0004-ambiente.webp'],
      },
      {
        code: '043-0005',
        hero: '/images/Collections/Aluna/043-0005-hero.webp',
        gallery: [
          '/images/Collections/Aluna/043-0005-zoom-1.webp',
          '/images/Collections/Aluna/043-0005-zoom-2.webp',
          '/images/Collections/Aluna/043-0005-zoom-3.webp',
        ],
      },
    ],
    sizes: [
      { label: '2,00 x 3,00 m', status: 'in-stock' },
      { label: '2,50 x 3,50 m', status: 'coming-soon' },
      { label: '3,00 x 4,00 m', status: 'out-of-stock' },
      { label: '4,00 x 5,00 m', status: 'out-of-stock' },
    ],
    detailIcons: ['softness', 'handmade', 'stainResistance', 'durability'],
    specs: {
      material: 'NZ Wool',
      materialEs: 'Lana de Nueva Zelanda',
      pileHeight: '10–12 mm',
      texture: 'Rugged',
      textureEs: 'Texturizado',
      shape: 'Rectangle',
      shapeEs: 'Rectangular',
      backing: 'Yes',
      backingEs: 'Sí',
    },
    aboutBody: [
      'Aluna is born from the exploration of geometry, balance, and artistic expression. Its clean lines and abstract compositions create a serene visual presence, where each element engages in a subtle and sophisticated dialogue with the surrounding space.',
      'The collection combines contemporary minimalism with handcrafted details, resulting in pieces of timeless character and refined elegance. Expertly hand-tufted from 100% wool, each rug features carefully sculpted textures and subtle reliefs that bring depth, warmth, and a rich tactile experience.',
    ],
    aboutBodyEs: [
      'Aluna nace de la exploración de la geometría, el equilibrio y la expresión artística. Sus líneas limpias y composiciones abstractas crean una presencia visual serena, donde cada elemento entabla un diálogo sutil y sofisticado con el espacio que lo rodea.',
      'La colección combina el minimalismo contemporáneo con detalles hechos a mano, dando como resultado piezas de carácter atemporal y elegancia refinada. Anudada a mano en 100% lana, cada alfombra presenta texturas cuidadosamente esculpidas y relieves sutiles que aportan profundidad, calidez y una rica experiencia táctil.',
    ],
  },
  {
    slug: 'arya',
    name: 'ARYA',
    subtitle: 'It is not about texture. It is about rhythm.',
    statement: 'Ribbed texture and quiet luster woven into a hand-loomed rug that brings understated rhythm and warmth to contemporary interiors.',
    statementEs: 'Textura acanalada y brillo sutil tejidos en una alfombra de telar manual que aporta ritmo discreto y calidez a interiores contemporáneos.',
    cover: '/images/Collections/Arya/037-0001-hero.webp',
    quote: 'It is not about texture. It is about rhythm.',
    quoteEs: 'No se trata de textura. Se trata de ritmo.',
    images: [
      '/images/Collections/Arya/037-0001-hero.webp',
      '/images/Collections/Arya/037-0002-hero.webp',
      '/images/Collections/Arya/037-0003-hero.webp',
      '/images/Collections/Arya/037-0004-hero.webp',
    ],
    itemCode: '037',
    variants: [
      {
        code: '037-0001',
        hero: '/images/Collections/Arya/037-0001-hero.webp',
        gallery: [
          '/images/Collections/Arya/037-0001-zoom-1.webp',
          '/images/Collections/Arya/037-0001-zoom-2.webp',
          '/images/Collections/Arya/037-0001-ambiente.webp',
        ],
      },
      {
        code: '037-0002',
        hero: '/images/Collections/Arya/037-0002-hero.webp',
        gallery: [
          '/images/Collections/Arya/037-0002-zoom-1.webp',
          '/images/Collections/Arya/037-0002-zoom-2.webp',
          '/images/Collections/Arya/037-0002-zoom-3.webp',
        ],
      },
      {
        code: '037-0003',
        hero: '/images/Collections/Arya/037-0003-hero.webp',
        gallery: [
          '/images/Collections/Arya/037-0003-zoom-1.webp',
          '/images/Collections/Arya/037-0003-zoom-2.webp',
          '/images/Collections/Arya/037-0003-zoom-3.webp',
        ],
      },
      {
        code: '037-0004',
        hero: '/images/Collections/Arya/037-0004-hero.webp',
        gallery: [
          '/images/Collections/Arya/037-0004-zoom-1.webp',
          '/images/Collections/Arya/037-0004-zoom-2.webp',
        ],
      },
    ],
    sizes: [
      { label: '2,00 x 3,00 m', status: 'in-stock' },
      { label: '2,40 x 3,40 m', status: 'coming-soon' },
      { label: '3,00 x 4,00 m', status: 'out-of-stock' },
      { label: '4,00 x 5,00 m', status: 'in-stock' },
    ],
    detailIcons: ['biodegradable', 'resistant', 'softnessLuster', 'handmade'],
    specs: {
      material: 'Hand Loom',
      materialEs: 'Telar manual',
      pileHeight: '10 mm',
      texture: 'Flat / Loop',
      textureEs: 'Plano / Rizado',
      shape: 'Rectangle',
      shapeEs: 'Rectangular',
      backing: 'No',
      backingEs: 'No',
    },
    aboutBody: [
      'Born from the elegance of simple lines and the richness of texture, this collection features a ribbed design that creates a subtle, sophisticated visual rhythm, bringing depth, softness, and a natural sense of harmony to any space.',
      'It invites warm, contemporary interiors where each piece complements its surroundings with understated elegance, balance, and character. Its light presence transforms simplicity into an expression of comfort, subtle luster, and timeless serenity.',
    ],
    aboutBodyEs: [
      'Nace de la elegancia de las líneas simples y la riqueza de la textura; esta colección presenta un diseño acanalado que crea un ritmo visual sutil y sofisticado, aportando profundidad, suavidad y una sensación natural de armonía a cualquier espacio.',
      'Invita a interiores contemporáneos y cálidos, donde cada pieza complementa su entorno con elegancia discreta, equilibrio y carácter. Su presencia ligera transforma la simplicidad en una expresión de confort, brillo sutil y serenidad atemporal.',
    ],
  },
  {
    slug: 'lattice',
    name: 'LATTICE',
    subtitle: 'It is not about pattern. It is about structure.',
    statement: 'An interconnected weave of bouclé wool that reads as quiet structure — order, calm and depth for considered spaces.',
    statementEs: 'Un tejido interconectado de lana bouclé que se lee como estructura serena: orden, calma y profundidad para espacios con intención.',
    cover: '/images/Collections/LATTICE/031-0008-hero.webp',
    quote: 'It is not about pattern. It is about structure.',
    quoteEs: 'No se trata de patrón. Se trata de estructura.',
    images: [
      '/images/Collections/LATTICE/031-0008-hero.webp',
      '/images/Collections/LATTICE/031-0009-hero.webp',
      '/images/Collections/LATTICE/031-0010-hero.webp',
      '/images/Collections/LATTICE/031-0011-hero.webp',
    ],
    itemCode: '031',
    variants: [
      {
        code: '031-0008',
        colorName: 'Terracotta',
        colorNameEs: 'Terracota',
        hero: '/images/Collections/LATTICE/031-0008-hero.webp',
        gallery: [
          '/images/Collections/LATTICE/031-0008-zoom-1.webp',
          '/images/Collections/LATTICE/031-0008-ambiente-1.webp',
          '/images/Collections/LATTICE/031-0008-ambiente-2.webp',
        ],
      },
      {
        code: '031-0009',
        colorName: 'Mustard Yellow',
        colorNameEs: 'Amarillo Mostaza',
        hero: '/images/Collections/LATTICE/031-0009-hero.webp',
        gallery: ['/images/Collections/LATTICE/031-0009-zoom-1.webp'],
      },
      {
        code: '031-0010',
        colorName: 'Olive Green',
        colorNameEs: 'Verde Olivo',
        hero: '/images/Collections/LATTICE/031-0010-hero.webp',
        gallery: ['/images/Collections/LATTICE/031-0010-ambiente.webp'],
      },
      {
        code: '031-0011',
        colorName: 'Midnight Blue',
        colorNameEs: 'Azul Noche',
        hero: '/images/Collections/LATTICE/031-0011-hero.webp',
        gallery: [
          '/images/Collections/LATTICE/031-0011-zoom-1.webp',
          '/images/Collections/LATTICE/031-0011-zoom-2.webp',
        ],
      },
    ],
    sizes: [
      { label: '2,00 x 3,00 m', status: 'in-stock' },
      { label: '2,50 x 3,50 m', status: 'coming-soon' },
      { label: '3,00 x 4,00 m', status: 'out-of-stock' },
    ],
    detailIcons: ['softness', 'handmade', 'stainResistance', 'durability'],
    specs: {
      material: 'Wool',
      materialEs: 'Lana',
      pileHeight: '10 mm',
      texture: 'Rugged',
      textureEs: 'Texturizado',
      shape: 'Rectangle',
      shapeEs: 'Rectangular',
      backing: 'Yes',
      backingEs: 'Sí',
    },
    aboutBody: [
      'Inspired by the idea of a mesh, matrix, or interconnected weave. Its design evokes harmony between order, calm, and depth. Lattice expresses a subtle visual balance, with an enveloping presence that brings serenity and sophistication to any space.',
      'Hand-tufted in 100% wool, it features bouclé details that add dimension and tactile richness, creating a natural, warm, and refined feel.',
    ],
    aboutBodyEs: [
      'Inspirada en la idea de una malla, una matriz o un tejido interconectado, su diseño evoca armonía entre el orden, la calma y la profundidad. Lattice expresa un equilibrio visual sutil, con una presencia envolvente que aporta serenidad y sofisticación a cualquier espacio.',
      'Anudada a mano en 100% lana, presenta detalles bouclé que suman dimensión y riqueza táctil, creando una sensación natural, cálida y refinada.',
    ],
  },
  {
    slug: 'maori',
    name: 'MAORI',
    subtitle: 'It is not about silence. It is about substance.',
    statement: 'A grounded composition of soft geometry and mineral tones that gives rooms visual calm with tangible depth.',
    statementEs: 'Una composición equilibrada de geometría suave y tonos minerales que le da a las habitaciones calma visual con profundidad tangible.',
    cover: '/images/Collections/MAORI/CB-Atelier-052.webp',
    quote: 'It is not about silence. It is about substance.',
    quoteEs: 'No se trata de silencio. Se trata de sustancia.',
    images: [
      '/images/Collections/MAORI/CB-Atelier-052.webp',
      '/images/Collections/MAORI/CB-haliPuerto-019BAG.webp',
      '/images/Collections/MAORI/CB-haliPuerto-028BAG.webp',
      '/images/Collections/MAORI/CB-haliPuerto-049BAG.webp',
      '/images/Collections/MAORI/CB-haliPuerto-071BAG.webp',
    ],
    itemCode: 'MAORI',
    variants: [
      {
        code: 'MAORI',
        hero: '/images/Collections/MAORI/CB-Atelier-052.webp',
        gallery: [
          '/images/Collections/MAORI/CB-haliPuerto-019BAG.webp',
          '/images/Collections/MAORI/CB-haliPuerto-028BAG.webp',
          '/images/Collections/MAORI/CB-haliPuerto-049BAG.webp',
          '/images/Collections/MAORI/CB-haliPuerto-071BAG.webp',
        ],
      },
    ],
    sizes: legacySizes,
    detailIcons: legacyDetailIcons,
    specs: legacySpecs,
    aboutBody: ['A grounded composition of soft geometry and mineral tones that gives rooms visual calm with tangible depth.'],
    aboutBodyEs: ['Una composición equilibrada de geometría suave y tonos minerales que le da a las habitaciones calma visual con profundidad tangible.'],
    customSizing: true,
  },
  {
    slug: 'soma',
    name: 'SOMA',
    subtitle: 'It is not about movement. It is about presence.',
    statement: 'Tropical rhythm, refined neutrals and a tactile surface that settles into architecture with quiet confidence.',
    statementEs: 'Ritmo tropical, neutros refinados y una superficie táctil que se asienta en la arquitectura con serena confianza.',
    cover: '/images/Collections/SOMA/CBHALI-18.webp',
    quote: 'It is not about movement. It is about presence.',
    quoteEs: 'No se trata de movimiento. Se trata de presencia.',
    images: [
      '/images/Collections/SOMA/CBHALI-18.webp',
      '/images/Collections/SOMA/CBHALI-17.webp',
      '/images/Collections/SOMA/CB-haliPuerto-136BAG.webp',
      '/images/Collections/SOMA/CB-haliPuerto-111BAG.webp',
      '/images/Collections/SOMA/CB-haliPuerto-080BAG.webp',
    ],
    itemCode: 'SOMA',
    variants: [
      {
        code: 'SOMA',
        hero: '/images/Collections/SOMA/CBHALI-18.webp',
        gallery: [
          '/images/Collections/SOMA/CBHALI-17.webp',
          '/images/Collections/SOMA/CB-haliPuerto-136BAG.webp',
          '/images/Collections/SOMA/CB-haliPuerto-111BAG.webp',
          '/images/Collections/SOMA/CB-haliPuerto-080BAG.webp',
        ],
      },
    ],
    sizes: legacySizes,
    detailIcons: legacyDetailIcons,
    specs: legacySpecs,
    aboutBody: ['Tropical rhythm, refined neutrals and a tactile surface that settles into architecture with quiet confidence.'],
    aboutBodyEs: ['Ritmo tropical, neutros refinados y una superficie táctil que se asienta en la arquitectura con serena confianza.'],
    customSizing: true,
  },
  {
    slug: 'equus',
    name: 'EQUUS',
    subtitle: 'It is not about decoration. It is about order.',
    statement: 'Linear language and bold contrasts composed for interiors that need graphic structure and warmth at once.',
    statementEs: 'Lenguaje lineal y contrastes marcados compuestos para interiores que necesitan estructura gráfica y calidez a la vez.',
    cover: '/images/Collections/Equus/CBHALI-10.webp',
    quote: 'It is not about decoration. It is about order.',
    quoteEs: 'No se trata de decoración. Se trata de orden.',
    images: [
      '/images/Collections/Equus/CBHALI-10.webp',
      '/images/Collections/Equus/CB-haliPuerto-160BAG.webp',
      '/images/Collections/Equus/CB-haliPuerto-145BAG.webp',
      '/images/Collections/Equus/CB-haliPuerto-128BAG.webp',
      '/images/Collections/Equus/CB-haliPuerto-088BAG.webp',
    ],
    itemCode: 'EQUUS',
    variants: [
      {
        code: 'EQUUS',
        hero: '/images/Collections/Equus/CBHALI-10.webp',
        gallery: [
          '/images/Collections/Equus/CB-haliPuerto-160BAG.webp',
          '/images/Collections/Equus/CB-haliPuerto-145BAG.webp',
          '/images/Collections/Equus/CB-haliPuerto-128BAG.webp',
          '/images/Collections/Equus/CB-haliPuerto-088BAG.webp',
        ],
      },
    ],
    sizes: legacySizes,
    detailIcons: legacyDetailIcons,
    specs: legacySpecs,
    aboutBody: ['Linear language and bold contrasts composed for interiors that need graphic structure and warmth at once.'],
    aboutBodyEs: ['Lenguaje lineal y contrastes marcados compuestos para interiores que necesitan estructura gráfica y calidez a la vez.'],
    customSizing: true,
  },
  {
    slug: 'amhara',
    name: 'AMHARA',
    subtitle: 'It is a sense of calm confidence.',
    statement: 'Soft relief and generous hand feel for spaces where materiality needs to be felt before it is explained.',
    statementEs: 'Relieve suave y una mano generosa para espacios donde la materialidad necesita sentirse antes de ser explicada.',
    cover: '/images/Collections/Amhara/Post1-100.webp',
    quote: 'A soft field that welcomes, a structure that endures.',
    quoteEs: 'Un campo suave que da la bienvenida, una estructura que perdura.',
    images: [
      '/images/Collections/Amhara/Post1-100.webp',
      '/images/Collections/Amhara/Post2-100.webp',
      '/images/Collections/Amhara/CB-Hali-130.webp',
      '/images/Collections/Amhara/CB-Hali-119.webp',
      '/images/Collections/Amhara/CB-Hali-095.webp',
    ],
    itemCode: 'AMHARA',
    variants: [
      {
        code: 'AMHARA',
        hero: '/images/Collections/Amhara/Post1-100.webp',
        gallery: [
          '/images/Collections/Amhara/Post2-100.webp',
          '/images/Collections/Amhara/CB-Hali-130.webp',
          '/images/Collections/Amhara/CB-Hali-119.webp',
          '/images/Collections/Amhara/CB-Hali-095.webp',
        ],
      },
    ],
    sizes: legacySizes,
    detailIcons: legacyDetailIcons,
    specs: legacySpecs,
    aboutBody: ['Soft relief and generous hand feel for spaces where materiality needs to be felt before it is explained.'],
    aboutBodyEs: ['Relieve suave y una mano generosa para espacios donde la materialidad necesita sentirse antes de ser explicada.'],
    customSizing: true,
  },
  {
    slug: 'helios',
    name: 'HELIOS',
    subtitle: 'Does not retrace. Does lead.',
    statement: 'A brighter weave system with layered textures and directional patterning designed for sunlit atmospheres.',
    statementEs: 'Un sistema de tejido más luminoso con texturas superpuestas y patrones direccionales diseñados para atmósferas soleadas.',
    cover: '/images/Collections/Helios/DSC_0590.webp',
    quote: 'Does not retrace. Does lead.',
    quoteEs: 'No repite el camino. Lo traza.',
    images: [
      '/images/Collections/Helios/DSC_0590.webp',
      '/images/Collections/Helios/DSC_0469.webp',
      '/images/Collections/Helios/CB-Hali-155.webp',
      '/images/Collections/Helios/CB-Hali-118.webp',
      '/images/Collections/Helios/CB-Atelier-129.webp',
    ],
    itemCode: 'HELIOS',
    variants: [
      {
        code: 'HELIOS',
        hero: '/images/Collections/Helios/DSC_0590.webp',
        gallery: [
          '/images/Collections/Helios/DSC_0469.webp',
          '/images/Collections/Helios/CB-Hali-155.webp',
          '/images/Collections/Helios/CB-Hali-118.webp',
          '/images/Collections/Helios/CB-Atelier-129.webp',
        ],
      },
    ],
    sizes: legacySizes,
    detailIcons: legacyDetailIcons,
    specs: legacySpecs,
    aboutBody: ['A brighter weave system with layered textures and directional patterning designed for sunlit atmospheres.'],
    aboutBodyEs: ['Un sistema de tejido más luminoso con texturas superpuestas y patrones direccionales diseñados para atmósferas soleadas.'],
    customSizing: true,
  },
  {
    slug: 'manchaha',
    name: 'MANCHAHA',
    subtitle: 'It is not accidental. It is intentional.',
    statement: 'Organic gesture and hand-crafted contrast. A collection born from artistic freedom and exacting technique.',
    statementEs: 'Gesto orgánico y contraste hecho a mano. Una colección nacida de la libertad artística y la técnica precisa.',
    cover: '/images/Collections/Manchaha/sku-040-0001-hero.webp',
    quote: 'It is not accidental. It is intentional.',
    quoteEs: 'No es accidental. Es intencional.',
    images: [
      '/images/Collections/Manchaha/sku-040-0001-hero.webp',
      '/images/Collections/Manchaha/sku-040-0002-hero.webp',
      '/images/Collections/Manchaha/sku-040-0003-hero.webp',
      '/images/Collections/Manchaha/sku-040-0005-hero.webp',
    ],
    itemCode: '040',
    variants: [
      {
        code: '040-0001',
        hero: '/images/Collections/Manchaha/sku-040-0001-hero.webp',
        gallery: [
          '/images/Collections/Manchaha/sku-040-0001-zoom-1.webp',
          '/images/Collections/Manchaha/sku-040-0001-ambiente-1.webp',
          '/images/Collections/Manchaha/sku-040-0001-ambiente-2.webp',
        ],
      },
      {
        code: '040-0002',
        hero: '/images/Collections/Manchaha/sku-040-0002-hero.webp',
        gallery: [
          '/images/Collections/Manchaha/sku-040-0002-zoom-1.webp',
          '/images/Collections/Manchaha/sku-040-0002-zoom-2.webp',
          '/images/Collections/Manchaha/sku-040-0002-ambiente.webp',
        ],
      },
      {
        code: '040-0003',
        hero: '/images/Collections/Manchaha/sku-040-0003-hero.webp',
        gallery: [
          '/images/Collections/Manchaha/sku-040-0003-zoom-1.webp',
          '/images/Collections/Manchaha/sku-040-0003-zoom-2.webp',
        ],
      },
      {
        code: '040-0004',
        hero: '/images/Collections/Manchaha/sku-040-0004-hero.webp',
        gallery: [
          '/images/Collections/Manchaha/sku-040-0004-zoom-1.webp',
          '/images/Collections/Manchaha/sku-040-0004-zoom-2.webp',
        ],
      },
      {
        code: '040-0005',
        hero: '/images/Collections/Manchaha/sku-040-0005-hero.webp',
        gallery: [
          '/images/Collections/Manchaha/sku-040-0005-zoom-1.webp',
          '/images/Collections/Manchaha/sku-040-0005-zoom-2.webp',
        ],
      },
    ],
    sizes: [
      { label: '2,00 x 3,00 m', status: 'in-stock' },
      { label: '2,40 x 3,40 m', status: 'coming-soon' },
      { label: '3,00 x 4,00 m', status: 'out-of-stock' },
      { label: '4,00 x 5,00 m', status: 'coming-soon' },
    ],
    detailIcons: ['biodegradable', 'handmade', 'resistant', 'hypoallergenic'],
    specs: {
      material: '80% Tencel – 20% Cotton',
      materialEs: '80% Tencel – 20% Algodón',
      pileHeight: '12 mm',
      texture: 'Flat',
      textureEs: 'Plano',
      shape: 'Rectangle',
      shapeEs: 'Rectangular',
      backing: 'Yes',
      backingEs: 'Sí',
    },
    aboutBody: [
      'Born from creative freedom and the intuitive expression of form, its design combines organic lines, subtle contrasts, and carefully crafted textures to create a fluid visual composition in which each element seems to find its own rhythm within the space.',
      'The collection explores a serene, contemporary aesthetic, enriched by the softness and natural sheen of Tencel. Each piece transforms the rug into a sensory surface where texture, movement, and balance come together to bring warmth, depth, and an artistic presence to the home.',
    ],
    aboutBodyEs: [
      'Nace de la libertad creativa y la expresión intuitiva de la forma; su diseño combina líneas orgánicas, contrastes sutiles y texturas cuidadosamente elaboradas para crear una composición visual fluida en la que cada elemento parece encontrar su propio ritmo dentro del espacio.',
      'La colección explora una estética serena y contemporánea, enriquecida por la suavidad y el brillo natural del Tencel. Cada pieza transforma la alfombra en una superficie sensorial donde textura, movimiento y equilibrio se combinan para aportar calidez, profundidad y una presencia artística al hogar.',
    ],
  },
]

// Busca una colección por su slug de URL; devuelve undefined si no existe
// (la página de detalle usa eso para mostrar un 404 con notFound()).
export function getCollectionBySlug(slug: string) {
  return collectionItems.find((item) => item.slug === slug)
}
