'use client'

/**
 * AboutContent — cuerpo de la página /about (todo excepto el hero).
 * Se usa en app/about/page.tsx, debajo de AboutHero.
 *
 * Cuatro secciones, todo el texto viene de t.aboutContent
 * (lib/translations.ts) y cambia con useLanguage():
 * 1. "The [CB] Story" — título con el monograma inline + tira de 3 fotos.
 * 2. "Where heritage meets design" — dos columnas de texto largo.
 * 3. "Our Values" — lista numerada de 3 valores de marca.
 * 4. Equipo — párrafo con todos los nombres/cargos + grilla de 6 fotos.
 *    La firma final "Crafted For Visionaries!" queda fija en inglés
 *    (mismo criterio que HomeSignature).
 */
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

const teamMembers = [
  '/images/team/Asset 1.png',
  '/images/team/Asset 2.png',
  '/images/team/Asset 3.png',
  '/images/team/Asset 4.png',
  '/images/team/Asset 5.png',
  '/images/team/Asset 6.png',
]

export default function AboutContent() {
  const { lang } = useLanguage()
  const t = getTranslations(lang).aboutContent

  return (
    <>
      {/* --- THE CB STORY: heading + 3-image strip --- */}
      <section className="about-content about-content--intro">
        <h2 className="about-story-title">
          {t.storyPrefix}{' '}
          {/* Monograma CB vía CSS mask (mismo patrón que Navbar/HomeIdentity); antes
              apuntaba a /images/cbhali-logo-mark.webp, un archivo que no existe. */}
          <span className="about-story-title__mark" aria-hidden="true" />{' '}{t.storySuffix}
        </h2>
        <div className="about-strip">
          <Image src="/images/team/Asset 1.png" alt="CB HaLi story panel 1" width={900} height={360} className="about-strip__img" />
          <Image src="/images/team/Asset 2.png" alt="CB HaLi story panel 2" width={900} height={360} className="about-strip__img" />
          <Image src="/images/team/Asset 3.png" alt="CB HaLi story panel 3" width={900} height={360} className="about-strip__img" />
        </div>
      </section>

      {/* --- WHERE HERITAGE MEETS DESIGN --- */}
      <section className="about-content about-content--body">
        <h3 className="about-body__headline">
          {t.bodyHeadingLine1}<br />{t.bodyHeadingLine2} <span className="about-body__plus" aria-hidden="true">+</span> {t.bodyHeadingLine3}
        </h3>
        <div className="about-body__cols">
          <div>
            <p className="about-body__label">{t.designStoryLabel}</p>
            <p>{t.designStoryP}</p>
          </div>
          <div>
            <p className="about-body__label">{t.globalVisionLabel}</p>
            <p>{t.globalVisionP}</p>
          </div>
        </div>
      </section>

      {/* --- OUR VALUES --- */}
      <section className="about-content about-content--values">
        <div className="about-values__header">
          <span className="about-values__cb about-values__cb-mark" aria-hidden="true" />
          <h3>{t.valuesPrefix}<br />{t.valuesSuffix}</h3>
        </div>
        <ol className="about-values__list">
          {t.values.map((value, index) => (
            <li key={value.title}>
              <strong>{index + 1}. {value.title}:</strong> {value.desc}
            </li>
          ))}
        </ol>
      </section>

      {/* --- TEAM NAMES RUN-ON + PHOTOS --- */}
      <section className="about-content about-content--team">
        <p className="about-team__names">
          Cristina Borelly: CEO &amp; Founder / Ray Herrera: International Operations Manager &amp; Contract Projects / Isabella Feliz: Sales &amp; Marketing Director / Karoline Perez: Professionals Coordinator / Margarita Nuñez: Retail Coordinator / Ronald: Product Designer / Misael Nuñez: Designer / Sandra Padilla: Supply Chain / Angelica: Accounting Assistant / Yison Cassares: Head of Logistics / Luis Moliel: Logistics Ana Maria Zuluga – Brand Developer Bogotá / Juan David Gomez: Brand Developer Medellín / Vanessa Borelly: Brand Developer Cali / Andres Yanett &amp; Jorge Bataña: Brand Developer Miami
        </p>
        <div className="about-team-grid about-team-grid--six">
          {teamMembers.map((asset, index) => (
            <article key={asset}>
              <Image
                src={asset}
                alt={`CB HaLi team portrait ${index + 1}`}
                width={260}
                height={260}
                className="about-team__photo"
              />
            </article>
          ))}
        </div>
        {/* Firma fija en inglés, mismo criterio que HomeSignature — no se traduce. */}
        <p className="about-signature">Crafted For Visionaries!</p>
      </section>
    </>
  )
}