'use client'

/**
 * HomeCollage — sección "Instagram + Newsletter" de la home.
 * Se usa en app/page.tsx, después de HomeManifesto y antes de HomeSignature.
 *
 * - hc__top: mockup de teléfono que enlaza al Instagram de la marca (@cbhali).
 * - hc__bottom: foto grande de fondo con la tarjeta de newsletter (NewsletterForm)
 *   superpuesta encima.
 *
 * En móvil ambos bloques se apilan uno debajo del otro (ver .hc en home.css).
 * Desde 1024px se muestran lado a lado con CSS grid (42% / 58%).
 */
import NewsletterForm from './NewsletterForm'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function HomeCollage() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)

  return (
    <section className="hc">
      {/* ================= TOP — INSTAGRAM ================= */}
      <div className="hc__top">
        <a
          href="https://www.instagram.com/cbhali/"
          target="_blank"
          rel="noreferrer"
          className="hc__phone"
        >
          <div className="hc__phone-screen">
            <img
              src="/images/ig-preview.png"
              alt="Instagram CB HaLi"
              className="hc__phone-full"
            />
          </div>
        </a>
      </div>

      {/* ================= BOTTOM — IMAGE + NEWSLETTER ================= */}
      <div className="hc__bottom">
        <img
          src="/images/bg-Explore-catalogo.webp"
          className="hc__bg"
          alt=""
          aria-hidden="true"
        />
        <div className="hc__newsletter-card">
          <p className="hc__newsletter-title">{t.homeCollage.newsletter}</p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}
