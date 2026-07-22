'use client'

/**
 * ContractHero — banner de cabecera de /contract.
 * Se usa en app/contract/page.tsx como primer bloque.
 * Foto de fondo + título editorial en varias líneas + subtítulo en
 * cursiva entre corchetes ("[From start to finish.]"). Cambia con
 * useLanguage().
 */
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function ContractHero() {
  const { lang } = useLanguage()
  const t = getTranslations(lang).contractHero

  return (
    <section className="inner-hero inner-hero--contract">
      <Image
        src="/images/Contract/Versus/IMG_5206.webp"
        alt="Contract hero"
        fill
        priority
        sizes="100vw"
        className="inner-hero__bg"
      />
      <div className="inner-hero__overlay" />

      {/* Deco badge top-right */}
      <div className="hero-deco-right" aria-hidden="true">
        <div className="deco-stack">
          <span className="deco-badge" />
          <span className="deco-badge" />
          <span className="deco-dot" />
        </div>
      </div>

      <div className="inner-hero__content">
        <p>{t.kicker}</p>
        <h1>{t.title[0]}<br />{t.title[1]}<br />{t.title[2]}</h1>
        <p className="inner-hero__sub"><em>{t.sub}</em></p>
      </div>
    </section>
  )
}