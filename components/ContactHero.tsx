'use client'

/**
 * ContactHero — banner de cabecera de /contact.
 * Se usa en app/contact/page.tsx como primer bloque.
 * Foto de fondo + ícono de globo terráqueo (esquina sup. derecha, SVG a
 * mano) + título "Contact & Dealers" con ícono de pin de ubicación.
 * Título cambia con useLanguage().
 */
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function ContactHero() {
  const { lang } = useLanguage()
  const t = getTranslations(lang).contactHero

  return (
    <section className="contact-hero">
      <Image
        src="/images/Asset 10-102.webp"
        alt="Contact and dealers"
        fill
        priority
        sizes="100vw"
        className="contact-hero__bg"
      />
      <div className="contact-hero__overlay" />

      {/* Globe icon top-right */}
      <div className="contact-hero__globe" aria-hidden="true">
        <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="28" cy="28" rx="11" ry="26" stroke="white" strokeWidth="1.5"/>
          <line x1="2" y1="28" x2="54" y2="28" stroke="white" strokeWidth="1.5"/>
          <path d="M4 18h48M4 38h48" stroke="white" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Title bottom-left */}
      <div className="contact-hero__content">
        <h1 className="contact-hero__title">{t.title}</h1>
        <span className="contact-hero__pin" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="white" strokeWidth="1.5" fill="none"/>
            <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="1.5"/>
          </svg>
        </span>
      </div>
    </section>
  )
}
