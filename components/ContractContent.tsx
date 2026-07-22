'use client'

/**
 * ContractContent — cuerpo de /contract, debajo de ContractHero.
 * Se usa en app/contract/page.tsx.
 *
 * Cinco secciones, todo el texto viene de t.contractContent
 * (lib/translations.ts) y cambia con useLanguage(). El bloque "overlay"
 * (Diseñamos alfombras.../Concepto/Adaptabilidad...) está en español en la
 * versión EN por diseño original — mismo patrón, solo cambia de idioma.
 * 1. Intro clara "Where design meets performance" con marca "C B HaLi".
 * 2. Overlay oscuro con foto + tags + 2 tarjetas numeradas de conceptos.
 * 3. Proceso creativo (services) — lista numerada 01-05.
 * 4. Galería de proyectos (gallery), la primera imagen lleva caption.
 * 5. Franja final con el lema en dos líneas.
 */
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

// Fotos de proyectos entregados; la primera (índice 0) se muestra más
// grande y con caption (ver "contract-gallery__item--feature" abajo).
// 8 fotos = 9 celdas en el grid de 3 columnas (la feature ocupa 2), llena
// las 3 filas completas sin dejar huecos negros al final.
const gallery = [
  '/images/Contract/Versus/IMG_5201.webp',
  '/images/Contract/Versus/IMG_5193.webp',
  '/images/Contract/Versus/IMG_5183.webp',
  '/images/Contract/Versus/IMG_5172.webp',
  '/images/Contract/Versus/IMG_5166.webp',
  '/images/Contract/Versus/IMG_5206.webp',
  '/images/Contract/Calle Flora/DSC_0256.webp',
  '/images/Contract/Calle Flora/DSC_0229.webp',
]

export default function ContractContent() {
  const { lang } = useLanguage()
  const t = getTranslations(lang).contractContent

  return (
    <>
      {/* --- INTRO: WHERE DESIGN MEETS PERFORMANCE ---
          Referencia (contract.png) es fondo blanco con texto azul/negro,
          no oscuro — antes esta sección estaba invertida (fondo negro). */}
      <section className="contract-content--dark">
        <div className="contract-intro__topbar" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M4 30V12l9-6 9 6v18M4 18h22M13 6v24M22 12v18" />
          </svg>
          <span className="contract-intro__scroll">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="1.3"/><path d="M1 10l7 7 7-7" stroke="currentColor" strokeWidth="1.3"/></svg>
          </span>
        </div>
        <div className="contract-intro">
          <div className="contract-intro__mark" aria-hidden="true">
            <span className="contract-intro__mark-cb">C</span>
            <span className="contract-intro__mark-b">B</span>
            <span className="contract-intro__mark-hali">HaLi</span>
          </div>
          <div className="contract-intro__body">
            <p className="contract-content__label">{t.label}</p>
            <h2>{t.heading}</h2>
            <p className="contract-intro__caption">{t.caption}</p>
            <p className="contract-intro__desc">{t.desc0}</p>
            <p className="contract-intro__desc">{t.desc1}</p>
            <p className="contract-intro__desc">{t.desc2}</p>
          </div>
        </div>
      </section>

      {/* --- DARK OVERLAY: CONTRACT CONCEPTS --- */}
      <section className="contract-overlay">
        <div className="contract-overlay__bg-wrap">
          <Image
            src="/images/Contract/Versus/IMG_5201.webp"
            alt="Contract project"
            fill
            className="contract-overlay__bg"
          />
          <div className="contract-overlay__dim" />
        </div>
        <div className="contract-overlay__content">
          <div className="contract-overlay__header">
            <p className="contract-overlay__label">{t.label.toUpperCase()}</p>
            <div className="contract-overlay__cb" aria-hidden="true">CB</div>
          </div>
          <p className="contract-overlay__subtitle">{t.overlaySubtitle}</p>
          <div className="contract-overlay__tags">
            {t.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="contract-overlay__cards">
            <div className="contract-overlay__card">
              <span className="contract-overlay__card-num">1</span>
              <div>
                <h4>{t.card1Title}</h4>
                <p>{t.card1Desc}</p>
              </div>
            </div>
            <div className="contract-overlay__card">
              <span className="contract-overlay__card-num">2</span>
              <div>
                <h4>{t.card2Title}</h4>
                <p>{t.card2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS: THE CB CREATIVE PROCESS --- */}
      <section className="contract-content--process">
        <div className="contract-process__left">
          <h2 className="contract-process__title">
            {t.processTitle[0]}{' '}
            {/* Monograma CB vía CSS mask (mismo patrón que Navbar/HomeIdentity); antes
                apuntaba a /images/cbhali-logo-mark.webp, un archivo que no existe. */}
            <span className="contract-process__title-mark" aria-hidden="true" />{' '}{t.processTitle[1]}<br />{t.processTitle[2]}
          </h2>
          <aside className="contract-process__aside">
            {t.processAside.map((line, i) => <span key={i}>{line}<br /></span>)}
          </aside>
          <div className="contract-process__truck" aria-hidden="true">
            <span className="deco-truck" />
          </div>
        </div>
        <div className="contract-process__right">
          <ul className="contract-process__list">
            {t.services.map((service, index) => (
              <li key={service.title} className="contract-process__item">
                <div className="contract-process__item-head">
                  <span className="contract-process__num">{String(index + 1).padStart(2, '0')} —</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="contract-content--gallery">
        <div className="contract-gallery">
          {gallery.map((image, i) => (
            <div key={image} className={`contract-gallery__item${i === 0 ? ' contract-gallery__item--feature' : ''}`}>
              <Image
                src={image}
                alt="Contract project"
                width={720}
                height={520}
                className="contract-gallery__image"
              />
              {i === 0 && (
                <div className="contract-gallery__caption">
                  <p>{t.galleryCaptionTitle}</p>
                  <p>{t.galleryCaptionSub}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- TAGLINE BAND --- */}
      <section className="contract-tagline">
        <p>{t.tagline[0]}</p>
        <p>{t.tagline[1]}</p>
      </section>
    </>
  )
}