export type Sku = { code: string; colorName: string | null; thumbCount: number };

export type CollectionData = {
  slug: string;
  name: string;
  number: string;
  description: string[];
  specs: { material: string; pileHeight: string; texture: string; shape: string; backing: string };
  details: string[];
  sizes: { size: string; status: string }[];
  skus: Sku[];
};

export const COLLECTIONS: CollectionData[] = [
  {
    slug: 'maori',
    name: 'MAORI',
    number: '024',
    description: [
      'Maori is born from the union of pattern, texture, and balance. Its open design brings visual lightness and a natural sense of harmony, creating pieces that are serene, functional, and sophisticated.',
      'The collection explores the beauty of simplicity through a light, clean, and thoughtfully composed aesthetic. Each piece creates a subtle connection between space and material, bringing a sense of calm, openness, and contemporary presence, where functionality is transformed into balance and serenity.',
    ],
    specs: { material: 'Hand Loom', pileHeight: '8mm', texture: 'Rugged', shape: 'Rectangle', backing: 'Yes' },
    details: ['Hypoallergenic', 'Durable', 'Stain Resistant', 'Handcrafted'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.50x3.50m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
    ],
    skus: [
      { code: '024-0026', colorName: null, thumbCount: 2 },
      { code: '024-0027', colorName: null, thumbCount: 2 },
      { code: '024-0028', colorName: null, thumbCount: 2 },
      { code: '024-0030', colorName: null, thumbCount: 3 },
      { code: '024-0031', colorName: null, thumbCount: 3 },
      { code: '024-0032', colorName: null, thumbCount: 2 },
      { code: '024-0033', colorName: null, thumbCount: 3 },
    ],
  },
  {
    slug: 'aluna',
    name: 'ALUNA',
    number: '043',
    description: [
      'Aluna is born from the exploration of geometry, balance, and artistic expression. Its clean lines and abstract compositions create a serene visual presence, where each form engages in a subtle and sophisticated dialogue with the surrounding space.',
      'The collection combines contemporary minimalism with handcrafted details, resulting in pieces of timeless character and refined elegance. Expertly hand-tufted from 100% wool, each rug features carefully sculpted textures and subtle reliefs that bring depth, warmth, and a rich tactile experience.',
    ],
    specs: { material: 'Nz Wool', pileHeight: '10-12mm', texture: 'Rugged', shape: 'Rectangle', backing: 'Yes' },
    details: ['Softness', 'Handmade', 'Stain Resistance', 'Durability'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.50x3.50m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
      { size: '4.00x5.00m', status: 'out stock' },
    ],
    skus: [
      { code: '043-0001', colorName: null, thumbCount: 3 },
      { code: '043-0002', colorName: null, thumbCount: 3 },
      { code: '043-0003', colorName: null, thumbCount: 3 },
      { code: '043-0004', colorName: null, thumbCount: 2 },
      { code: '043-0005', colorName: null, thumbCount: 3 },
    ],
  },
  {
    slug: 'soma',
    name: 'SOMA',
    number: '030',
    description: [
      'Soma is born from the calm of simple surfaces and the subtle beauty of materiality. Its clean design highlights texture and natural luster, creating pieces that feel soft, light, and serene.',
      'The collection invites us to experience spaces through comfort and tranquility, transforming the essential into an expression of freshness, balance, and contemporary sophistication.',
    ],
    specs: { material: '100% Tencel', pileHeight: '10-12mm', texture: 'Rugged', shape: 'Rectangle', backing: 'Yes' },
    details: ['Biodegradable', 'Handmade', 'Resistant', 'Hypoallergenic'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.40x3.40m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
      { size: '4.00x5.00m', status: 'Coming Soon' },
    ],
    skus: [
      { code: '030-0009', colorName: null, thumbCount: 2 },
      { code: '030-0010', colorName: null, thumbCount: 3 },
      { code: '030-0011', colorName: null, thumbCount: 2 },
      { code: '030-0012', colorName: null, thumbCount: 2 },
      { code: '030-0013', colorName: null, thumbCount: 2 },
    ],
  },
  {
    slug: 'arya',
    name: 'ARYA',
    number: '037',
    description: [
      'Born from the elegance of simple lines and the richness of texture, this collection features a ribbed design that creates a subtle, sophisticated visual rhythm, bringing depth, softness, and a natural sense of harmony to any space.',
      'It invites warm, contemporary interiors where each piece complements its surroundings with understated elegance, balance, and character. Its light presence transforms simplicity into an expression of comfort, subtle luster, and timeless serenity.',
    ],
    specs: { material: 'Hand Loom', pileHeight: '10mm', texture: 'Flat / Loop', shape: 'Rectangle', backing: 'No' },
    details: ['Biodegradable', 'Resistant', 'Softness & Luster', 'Handmade'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.40x3.40m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
      { size: '4.00x5.00m', status: 'In stock' },
    ],
    skus: [
      { code: '037-0001', colorName: null, thumbCount: 3 },
      { code: '037-0002', colorName: null, thumbCount: 3 },
      { code: '037-0003', colorName: null, thumbCount: 3 },
      { code: '037-0004', colorName: null, thumbCount: 2 },
    ],
  },
  {
    slug: 'equus',
    name: 'EQUUS',
    number: '041',
    description: [
      'Equus is born from the elegance of linear strokes and the quiet strength of geometry. Its grid design, subtly defined across a textured surface, creates an orderly, warm, and timeless composition.',
      'The collection evokes balance and structure without sacrificing softness, making it the perfect visual foundation for contemporary, natural, and sophisticated spaces. Its carved lines add depth and rhythm, while its neutral tones allow it to blend harmoniously into a wide range of interiors.',
    ],
    specs: { material: '100% Tencel', pileHeight: '12mm', texture: 'Flat', shape: 'Rectangle', backing: 'No' },
    details: ['Biodegradable', 'Handmade', 'Resistant', 'Hypoallergenic'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.40x3.40m', status: 'Coming Soon' },
    ],
    skus: [
      { code: '041-0001', colorName: null, thumbCount: 3 },
      { code: '041-0002', colorName: null, thumbCount: 2 },
      { code: '041-0003', colorName: null, thumbCount: 2 },
      { code: '041-0004', colorName: null, thumbCount: 2 },
      { code: '041-0005', colorName: null, thumbCount: 3 },
      { code: '041-0006', colorName: null, thumbCount: 2 },
      { code: '041-0007', colorName: null, thumbCount: 2 },
      { code: '041-0008', colorName: null, thumbCount: 2 },
      { code: '041-0009', colorName: null, thumbCount: 2 },
      { code: '041-0010', colorName: null, thumbCount: 2 },
      { code: '041-0011', colorName: null, thumbCount: 3 },
      { code: '041-0012', colorName: null, thumbCount: 1 },
      { code: '041-0013', colorName: null, thumbCount: 2 },
      { code: '041-0014', colorName: null, thumbCount: 2 },
    ],
  },
  {
    slug: 'helios',
    name: 'HELIOS',
    number: '038',
    description: [
      'Helios is born from the exploration of light, texture, and nature. Inspired by the warmth of the sun and the beauty of outdoor living, this collection creates durable, soft, and sophisticated pieces designed to transform outdoor spaces with character and serenity.',
      'Hand loomed from 100% recycled P.E.T., Helios combines durability with contemporary design and artisanal craftsmanship, creating depth, warmth, and a unique tactile experience.',
    ],
    specs: { material: '100% P.E.T', pileHeight: '10-12mm', texture: 'Rugged', shape: 'Rectangle', backing: 'Yes' },
    details: ['Biodegradable', 'Handmade', 'Resistant', 'Softness'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.40x3.40m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
    ],
    skus: [
      { code: '038-0001', colorName: null, thumbCount: 3 },
      { code: '038-0002', colorName: null, thumbCount: 3 },
    ],
  },
  {
    slug: 'lattice',
    name: 'LATTICE',
    number: '031',
    description: [
      'Inspired by the idea of a mesh, matrix, or interconnected weave. Its design evokes harmony between order, calm, and depth. Lattice expresses a subtle visual balance, with an enveloping presence that brings serenity and sophistication to any space.',
      'Hand-tufted in 100% wool, it features bouclé details that add dimension and tactile richness, creating a natural, warm, and refined feel.',
    ],
    specs: { material: 'Wool', pileHeight: '10mm', texture: 'Rugged', shape: 'Rectangle', backing: 'Yes' },
    details: ['Softness', 'Handmade', 'Stain Resistance', 'Durability'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.50x3.50m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
    ],
    skus: [
      { code: '031-0008', colorName: 'Terracotta', thumbCount: 3 },
      { code: '031-0009', colorName: 'Amarillo Mostaza', thumbCount: 3 },
      { code: '031-0010', colorName: 'Verde Olivo', thumbCount: 3 },
      { code: '031-0011', colorName: 'Azul Noche', thumbCount: 2 },
    ],
  },
  {
    slug: 'manchaha',
    name: 'MANCHAHA',
    number: '040',
    description: [
      'Born from creative freedom and the intuitive expression of form, its design combines organic lines, subtle contrasts, and carefully crafted textures to create a fluid visual composition in which each element seems to find its own rhythm within the space.',
      'The collection explores a serene, contemporary aesthetic, enriched by the softness and natural sheen of Tencel. Each piece transforms the rug into a sensory surface where texture, movement, and balance come together to bring warmth, depth, and an artistic presence to the home.',
    ],
    specs: { material: '80% Tencel - 20% Algodón', pileHeight: '12mm', texture: 'Flat', shape: 'Rectangle', backing: 'Yes' },
    details: ['Biodegradable', 'Handmade', 'Resistant', 'Hypoallergenic'],
    sizes: [
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.40x3.40m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
      { size: '4.00x5.00m', status: 'Coming Soon' },
    ],
    skus: [
      { code: '040-0001', colorName: null, thumbCount: 3 },
      { code: '040-0002', colorName: null, thumbCount: 3 },
      { code: '040-0003', colorName: null, thumbCount: 3 },
      { code: '040-0004', colorName: null, thumbCount: 3 },
      { code: '040-0005', colorName: null, thumbCount: 3 },
    ],
  },
  {
    slug: 'amhara',
    name: 'AMHARA',
    number: '039',
    description: [
      'Amhara explores the beauty of simplicity through a clean and warm visual language. Its interwoven linear pattern creates a sense of natural balance, adding subtle depth and movement.',
      'Designed for spaces that seek serenity and character, the collection blends an honest aesthetic with a welcoming presence. Each piece enhances its surroundings with softness, order, and a quiet elegance that stands the test of time.',
    ],
    specs: { material: 'Hand Loom', pileHeight: '10mm', texture: 'Rugged', shape: 'Rectangle', backing: 'No' },
    details: ['Softness', 'Handmade', 'Stain Resistance', 'Durability'],
    sizes: [
      { size: '2.44x3.07m', status: 'In stock' },
      { size: '2.74x3.68m', status: 'Coming Soon' },
      { size: '3.05x4.29m', status: 'out stock' },
      { size: '2.00x3.00m', status: 'In stock' },
      { size: '2.40x3.40m', status: 'Coming Soon' },
      { size: '3.00x4.00m', status: 'out stock' },
    ],
    skus: [
      { code: '039-0001', colorName: null, thumbCount: 3 },
      { code: '039-0005', colorName: null, thumbCount: 3 },
      { code: '039-0006', colorName: null, thumbCount: 3 },
      { code: '039-0007', colorName: null, thumbCount: 3 },
      { code: '039-0008', colorName: null, thumbCount: 3 },
      { code: '039-0009', colorName: null, thumbCount: 3 },
      { code: '039-0010', colorName: null, thumbCount: 2 },
      { code: '039-0011', colorName: null, thumbCount: 2 },
      { code: '039-0012', colorName: null, thumbCount: 3 },
      { code: '039-0013', colorName: null, thumbCount: 3 },
      { code: '039-0014', colorName: null, thumbCount: 2 },
      { code: '039-0015', colorName: null, thumbCount: 3 },
    ],
  },
];

export function getCollection(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getProduct(slug: string, code: string) {
  const collection = getCollection(slug);
  const sku = collection?.skus.find((s) => s.code === code);
  if (!collection || !sku) return null;
  return { collection, sku };
}

export function otherCollections(slug: string, count = 4) {
  const others = COLLECTIONS.filter((c) => c.slug !== slug);
  return others.slice(0, count).map((c) => ({ ...c, cover: c.skus[0] }));
}
