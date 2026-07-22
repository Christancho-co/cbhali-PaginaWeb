'use client'

/**
 * CustomProcess — cuerpo de /custom, debajo de CustomHero.
 * Se usa en app/custom/page.tsx.
 *
 * Seis secciones:
 * 1. Intro oscura con el titular + logo pequeño.
 * 2. "Our custom collaborative journey" — lista numerada (steps) + foto
 *    grande destacada al lado.
 * 3. "Author" — párrafo sobre el programa de colaboración creativa + foto
 *    con CTA + franja con el tagline (sección que faltaba por completo).
 * 4. Frase-statement centrada.
 * 5. Grilla de fotos de proyectos (customGallery) + caption final.
 *
 * Todo el texto (steps, author, statement, tagline) viene de
 * t.customContent (lib/translations.ts) y cambia con useLanguage().
 */
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

const customGallery = [
  '/images/Custom/Projects/PANTA/CB-haliPuerto-155BAG.webp',
  '/images/Custom/Projects/PANTA/CB-haliPuerto-114BAG.webp',
  '/images/Custom/Projects/PANTA/CB-haliPuerto-102BAG.webp',
  '/images/Custom/Projects/PANTA/CB-haliPuerto-098BAG.webp',
  '/images/Custom/Projects/PANTA/CB-haliPuerto-066BAG.webp',
  '/images/Custom/Projects/PANTA/CB-haliPuerto-058BAG.webp',
]

export default function CustomProcess() {
  const { lang } = useLanguage()
  const t = getTranslations(lang).customContent

  return (
    <>
      <section className="custom-process custom-process--dark">
        <div className="custom-process__header">
          <h2>{t.introHeading}</h2>
          <Image src="/images/logo.png" alt="CB" width={48} height={48} />
        </div>
        <p className="custom-process__lead">{t.introLead}</p>
      </section>

      <section className="custom-process custom-process--steps">
        <div className="custom-steps">
          <h3>{t.journeyTitle}</h3>
          <p className="custom-steps__subtitle">{t.journeySubtitle}</p>
          <ol>
            {t.steps.map((step, index) => (
              <li key={step.title}>
                <div className="custom-steps__item-head">
                  <span>{String(index + 1).padStart(2, '0')} —</span>
                  <h4>{step.title}</h4>
                </div>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="custom-steps__feature">
          <Image
            src="/images/Custom/Projects/PANTA/CB-haliPuerto-113BAG.webp"
            alt="Custom process"
            width={920}
            height={1120}
            className="custom-steps__image"
          />
        </div>
      </section>

      {/* --- AUTHOR: programa de colaboración creativa --- */}
      <section className="custom-process custom-process--author">
        <div className="custom-author__copy">
          <p>{t.authorP1}</p>
          <p>{t.authorP2}</p>
          <p className="custom-author__short">{t.authorShort}</p>
        </div>
        <div className="custom-author__banner">
          <Image
            src="/images/Custom/Projects/Marcela Cure/IMG_1082.webp"
            alt="Author collaboration project"
            width={1600}
            height={760}
            className="custom-author__image"
          />
          <Link href="/collections" className="custom-author__cta">
            {t.authorCta}
            <span aria-hidden="true">{'›'}</span>
          </Link>
        </div>
        <p className="custom-author__tagline">{t.authorTagline}</p>
      </section>

      <section className="custom-process custom-process--statement">
        <p>
          {t.statement[0]}<br />
          {t.statement[1]}<br />
          <span className="custom-process--statement__dash" aria-hidden="true">—</span> {t.statement[2]}
        </p>
      </section>

      <section className="custom-process custom-process--grid">
        <div className="custom-grid">
          {customGallery.map((image) => (
            <Image key={image} src={image} alt="Custom gallery" width={640} height={640} className="custom-grid__image" />
          ))}
        </div>
        <p className="custom-grid__caption">{t.galleryCaption}</p>
      </section>
    </>
  )
}

