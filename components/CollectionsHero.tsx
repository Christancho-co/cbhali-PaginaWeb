'use client'

/**
 * CollectionsHero — banner de cabecera de /collections.
 * Se usa en app/collections/page.tsx como primer bloque.
 * Foto de fondo + título "Collections." + nav de acceso rápido que lista
 * cada colección (collectionItems, definido en lib/collections.ts) y
 * enlaza a /collections/[slug]. Título/subtítulo cambian con useLanguage().
 */
import Link from 'next/link'
import Image from 'next/image'
import { collectionItems } from '../lib/collections'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function CollectionsHero() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)

  return (
    <section className="collections-hero">
      <Image
        src="/images/Collections/Manchaha/CB-Hali-099.webp"
        alt="Collections hero"
        fill
        priority
        sizes="100vw"
        className="collections-hero__bg"
      />
      <div className="collections-hero__overlay" />

      {/* Decoración lateral con cuadros y anillos como en las referencias. */}
      <div className="hero-deco-right">
        <div className="deco-stack" aria-hidden="true">
          <span className="deco-badge" />
          <span className="deco-ring" />
          <span className="deco-dot" />
        </div>
      </div>

      <div className="collections-hero__content">
        <h1>{t.collectionsHero.title}</h1>
        <p>{t.collectionsHero.available}</p>
        <nav aria-label="Collection quick links" className="collections-hero__links">
          {collectionItems.map((item) => (
            <Link key={item.slug} href={`/collections/${item.slug}`}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
