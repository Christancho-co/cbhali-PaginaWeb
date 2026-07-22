'use client'

/**
 * CustomHero — banner de cabecera de /custom.
 * Se usa en app/custom/page.tsx como primer bloque.
 * Foto de fondo + decoración de bombillo (ícono "idea/diseño a medida") +
 * título "Designed by experts. Crafted with precision." Cambia con
 * useLanguage().
 */
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function CustomHero() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)

  return (
    <section className="inner-hero inner-hero--custom">
      <Image
        src="/images/Custom/Projects/Panama/IMG_7719.webp"
        alt="Custom rug hero"
        fill
        priority
        sizes="100vw"
        className="inner-hero__bg"
      />
      <div className="inner-hero__overlay" />

      {/* Decoración tipo bombillo + círculos para replicar el lenguaje visual de custom. */}
      <div className="hero-deco-right" aria-hidden="true">
        <div className="deco-stack">
          <span className="deco-bulb" />
          <span className="deco-ring" />
          <span className="deco-dot" />
        </div>
      </div>

      <div className="inner-hero__content">
        <p>{t.customHero.kicker}</p>
        <h1>{t.customHero.title}</h1>
      </div>
    </section>
  )
}
