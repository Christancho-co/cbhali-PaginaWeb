import { COLLECTIONS } from './products';

export type SearchEntry = {
  title: string;
  category: string;
  href: string;
  keywords?: string[];
};

const PAGES: SearchEntry[] = [
  { title: 'Home', category: 'Page', href: '/', keywords: ['inicio', 'rugs', 'tapetes'] },
  { title: 'Collections', category: 'Page', href: '/collections', keywords: ['products', 'catalog', 'catalogo', 'colecciones'] },
  { title: 'Custom', category: 'Page', href: '/custom', keywords: ['for professionals', 'a medida', 'personalizado'] },
  { title: 'Contract', category: 'Page', href: '/contract', keywords: ['from start to finish', 'proyectos', 'hospitality'] },
  { title: 'About Us', category: 'Page', href: '/about', keywords: ['our story', 'nosotros', 'historia', 'valores'] },
  { title: 'Blog', category: 'Page', href: '/blog', keywords: ['cb atelier', 'inspiration', 'noticias', 'news'] },
  { title: 'Contact & Dealers', category: 'Page', href: '/contact', keywords: ['contacto', 'distribuidores', 'dealers'] },
];

const COLLECTION_ENTRIES: SearchEntry[] = COLLECTIONS.map((c) => ({
  title: c.name,
  category: 'Collection',
  href: `/collections/${c.slug}/${c.skus[0].code}`,
  keywords: [c.slug, c.number, ...c.details],
}));

export const SEARCH_INDEX: SearchEntry[] = [...PAGES, ...COLLECTION_ENTRIES];

export function searchSite(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return SEARCH_INDEX.filter((entry) => {
    if (entry.title.toLowerCase().includes(q)) return true;
    if (entry.category.toLowerCase().includes(q)) return true;
    return entry.keywords?.some((k) => k.toLowerCase().includes(q)) ?? false;
  });
}
