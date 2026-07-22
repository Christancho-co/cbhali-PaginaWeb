'use client'

/**
 * ContactContent — cuerpo de /contact, debajo de ContactHero.
 * Se usa en app/contact/page.tsx.
 *
 * Cuatro secciones, todo con datos fijos (sin CMS todavía):
 * 1. Formulario de contacto (contact-form-section) — solo de front-end:
 *    onSubmit hace preventDefault y muestra un mensaje de éxito (`sent`),
 *    NO envía el mensaje a ningún servidor/API todavía.
 * 2. Bloque de info/dirección con decoración de globo y "olas".
 * 3. Dealers (dealers) agrupados por ciudad.
 * 4. Brand developers (developers) con foto, nombre, ciudad y teléfono.
 */
import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

// Distribuidores autorizados agrupados por ciudad — transcrito directamente
// de la referencia de diseño (Contact escritorio.png), que traía nombres,
// direcciones y teléfonos distintos a los que había antes en este archivo.
const dealers: Record<string, { name: string; address: string }[]> = {
  'Medellín': [
    { name: 'MM INTERIOR', address: 'Cra 25a # 1 – 31' },
    { name: 'GALERÍA MATIZ', address: 'Av. Nutibara # 71 – 69, Laureles Estadio' },
    { name: 'COSSE', address: 'Cra 43a Cl La Sur # 175 Local 120' },
    { name: 'ZIENTTE', address: 'Cra 43a # 1 – 164 Local 164 San Fernando Plaza' },
    { name: 'FORJA', address: 'Cra 32 # 2 Sur – 85 Mixy Mall La Inferior' },
    { name: 'LA HABITACIÓN', address: 'Cra 32 # 1 – 52 Oficina 524' },
  ],
  'Bogotá': [
    { name: 'ZIENTTE', address: 'Cl 81 # 9 – 09 / Cra 17 # 108 – 52' },
    { name: 'CASA SOLERO', address: 'Cl 79a # 8 – 55' },
    { name: 'SUPLEX HOME', address: 'Cl 81 # 8 – 29' },
  ],
  'Cali': [
    { name: 'ZIENTTE', address: 'Av. 6a Nte. # 28 – 59' },
  ],
  'Barranquilla': [
    { name: 'SUPELLEX HOME', address: 'Cl 76 # 74 – 34' },
    { name: 'ZIENTTE', address: 'Cra 52 # 79 – 92' },
    { name: 'STUARIO DESIGN LAB', address: 'Cl 77 # 62 – 05' },
    { name: 'ANA MARIA ROIG – VIURE', address: 'Cra 51 # 76 – 168' },
  ],
  'Bucaramanga': [
    { name: 'B HOUSE S.A.S', address: 'Cra 36 # 35 – 25' },
    { name: 'AMBIENTA STUDIO', address: 'Cra 36 # 35 – 25' },
    { name: 'B HOUSE S.A.S', address: 'Cra 36 # 35 25' },
    { name: 'AMBIENTA STUDIO', address: 'Cl 42 # 33 – 31' },
  ],
}

// Desarrolladores de marca (representantes regionales) — mismo transcrito.
const developers = [
  { name: 'Ana Maria Zulluaga', location: 'Bogotá · Medellín · Cali', phone: '+57 310 237 3864', image: '/images/team/ana.png' },
  { name: 'Juan Pablo Romero', location: 'Miami, Fl', phone: '+1 305 907 4600', image: '/images/team/juan.png' },
  { name: 'Francella Caballero Rojas', location: 'Costa Rica', phone: '+50 683 362 084', image: '/images/team/francella.png' },
  { name: 'Andres Felipe & Jorge Bateman', location: 'Orlando, Fl', phone: '+1 786 978 1295', image: '/images/team/andresyjorge.png' },
]

export default function ContactContent() {
  const [sent, setSent] = useState(false)
  const { lang } = useLanguage()
  const t = getTranslations(lang).contactContentFull

  return (
    <>
      {/* FORM SECTION */}
      <section className="contact-form-section">
        <div className="contact-form-section__bg">
          <Image src="/images/Asset 10-101.webp" alt="Contact bg" fill sizes="100vw" className="contact-form-section__img" />
          <div className="contact-form-section__overlay" />
        </div>
        <div className="contact-form-card">
          <h2 className="contact-form-card__title">{t.getInTouch}</h2>
          {sent ? (
            <p className="contact-form-card__success">{t.success}</p>
          ) : (
            <form
              className="contact-form-card__form"
              // TODO: aquí falta conectar con un backend/API real de envío
              // de correo; por ahora solo simula el éxito en pantalla.
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            >
              <input placeholder={t.formName} required />
              <input type="email" placeholder={t.formEmail} required />
              <input placeholder={t.formSubject} />
              <input placeholder={t.formProduct} />
              <textarea placeholder={t.formMessage} rows={4} />
              <button type="submit">{t.send}</button>
            </form>
          )}
        </div>
        <div className="contact-form-section__cb" aria-hidden="true">
          <span>CB</span>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="contact-info">
        <div className="contact-info__deco" aria-hidden="true">
          <svg className="contact-info__globe" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="26" stroke="#c49a45" strokeWidth="2"/>
            <ellipse cx="28" cy="28" rx="11" ry="26" stroke="#c49a45" strokeWidth="2"/>
            <line x1="2" y1="28" x2="54" y2="28" stroke="#c49a45" strokeWidth="2"/>
            <path d="M4 18h48M4 38h48" stroke="#c49a45" strokeWidth="2"/>
          </svg>
          <div className="contact-info__waves">
            {[0,1,2].map(i => (
              <svg key={i} viewBox="0 0 120 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9 Q15 0 30 9 Q45 18 60 9 Q75 0 90 9 Q105 18 120 9" stroke="#c49a45" strokeWidth="2" fill="none"/>
              </svg>
            ))}
          </div>
          <div className="contact-info__cbmark">CB</div>
        </div>

        <div className="contact-info__address">
          <p className="contact-info__label">{t.addressLabel}</p>
          <p className="contact-info__line">CB Hali</p>
          <p className="contact-info__line">info@cbhali.com</p>
          <p className="contact-info__line">Carrera 49c #79-183</p>
          <p className="contact-info__line contact-info__line--upper">{t.addressCity}</p>
          <p className="contact-info__line contact-info__line--italic">{t.addressVisits}</p>
        </div>
      </section>

      {/* DEALERS — nombres/direcciones/teléfonos no se traducen (son datos
          reales de distribuidores), solo los títulos de sección. */}
      <section className="contact-dealers">
        <h2 className="contact-dealers__title">{t.dealersTitle}</h2>
        <div className="contact-dealers__grid">
          {Object.entries(dealers).map(([city, list]) => (
            <div key={city} className="contact-dealers__city">
              <h3 className="contact-dealers__city-name">{city}</h3>
              {list.map((d, i) => (
                <div key={i} className="contact-dealers__item">
                  <p className="contact-dealers__name">{d.name}</p>
                  <p className="contact-dealers__address">{d.address}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* BRAND DEVELOPERS */}
      <section className="contact-developers">
        <h2 className="contact-developers__title">{t.brandDevelopers}</h2>
        <div className="contact-developers__grid">
          {developers.map((dev) => (
            <div key={dev.name} className="contact-developers__item">
              <div className="contact-developers__info">
                <p className="contact-developers__name">{dev.name}</p>
                <p className="contact-developers__location">{dev.location}</p>
                <p className="contact-developers__phone">{dev.phone}</p>
              </div>
              <div className="contact-developers__photo">
                <Image src={dev.image} alt={dev.name} width={64} height={64} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
