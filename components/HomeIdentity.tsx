'use client'

/**
 * HomeIdentity — sección "manifiesto de marca" justo debajo del hero.
 * Se usa en app/page.tsx; su id="home-identity" es el destino del botón
 * de scroll del HomeHero.
 *
 * Muestra el wordmark de la marca (monograma "CB" + "HaLi®", ver
 * .hi__wordmark-mark en home.css, que dibuja el logo con CSS mask a partir
 * de /images/logo.svg) seguido de una frase corta (caption), un titular
 * (tagline) y dos párrafos de texto — todo traducido vía lib/translations.ts.
 */
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function HomeIdentity() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)

  return (
    <section id="home-identity" className="hi">
      <div className="hi__inner">
        {/* Wordmark: monograma CB (mask CSS) + "HaLi®" en tipografía display. */}
        <div className="hi__wordmark" aria-label="CB HaLi">
          <span className="hi__wordmark-mark" aria-hidden="true" />
          <span className="hi__wordmark-hali">HaLi<sup>®</sup></span>
        </div>
        <p className="hi__caption">{t.homeIdentity.caption}</p>
        <h2 className="hi__tagline">{t.homeIdentity.tagline}</h2>
        <div className="hi__copy">
          <p>{t.homeIdentity.p1}</p>
          <p>{t.homeIdentity.p2}</p>
        </div>
      </div>
    </section>
  )
}
