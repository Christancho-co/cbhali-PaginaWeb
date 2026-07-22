'use client'

/**
 * AboutHero — banner de cabecera de la página /about.
 * Se usa en app/about/page.tsx como primer bloque de la página.
 * Foto de fondo fija + título "About Us" centrado y anillos decorativos
 * a la derecha (mismo patrón .hero-deco-right que otras heroes internas).
 * Título cambia con useLanguage().
 */
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function AboutHero() {
  const { lang } = useLanguage()
  const t = getTranslations(lang).aboutHero

  return (
    <section className="inner-hero inner-hero--about">
      <Image src="/images/team-photo.webp" alt="About CB HaLi" fill priority sizes="100vw" className="inner-hero__bg" />
      <div className="inner-hero__overlay" />

      {/* Decoración editorial con anillos para mantener coherencia visual. */}
      <div className="hero-deco-right" aria-hidden="true">
        <div className="deco-stack">
          <span className="deco-ring" />
          <span className="deco-ring" />
          <span className="deco-dot" />
        </div>
      </div>

      <div className="inner-hero__content inner-hero__content--center">
        <p>{t.kicker}</p>
        <h1>{t.title}</h1>
      </div>
    </section>
  )
}
