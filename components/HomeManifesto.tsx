'use client'

/**
 * HomeManifesto — sección "WE DON'T CREATE OBJECTS. WE CREATE PRESENCE."
 * Se usa en app/page.tsx, entre HomeProduct y HomeCollage.
 *
 * Dos columnas (desktop): letras decorativas | contenido a ancho completo.
 * 1. hm__letters: las letras "C B · H a L i" decorativas a la izquierda,
 *    estiradas a toda la altura de la sección (solo visibles desde 1024px).
 * 2. hm__content: titular (a ancho completo) + párrafo (a ancho completo) +
 *    hm__media-row (video de YouTube + foto del equipo, lado a lado) +
 *    icono decorativo de "ola".
 */
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function HomeManifesto() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)
  // El texto viene como "LINEA 1\nLINEA 2"; lo partimos para renderizar con <br />.
  const lines = t.homeManifesto.statement.split('\n')

  return (
    <section className="hm-wrap">
      <div className="hm">
        {/* Letras decorativas "C B H a L i" (solo desktop, ver home.css). */}
        <div className="hm__letters" aria-hidden="true">
          <span>C</span>
          <span>B</span>
          <span className="hm__line" />
          <span>H</span>
          <span>a</span>
          <span>L</span>
          <span>i</span>
        </div>

        <div className="hm__content">
          <h2 className="hm__statement">
            {lines[0]}<br />{lines[1]}
          </h2>
          <p className="hm__body">{t.homeManifesto.body}</p>

          {/* Fila inferior: tarjeta de video (izquierda) + foto del equipo
              (derecha), lado a lado, como en la referencia. El video no es
              un embed real de YouTube, es una imagen + overlay CSS que
              simula el reproductor y enlaza al canal. */}
          <div className="hm__media-row">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hm__video"
              aria-label={t.homeManifesto.videoTitle}
            >
              <img src="/images/hero-home.webp" alt="" className="hm__video-thumb" loading="lazy" />
              <span className="hm__video-bar">
                <span className="hm__video-avatar" aria-hidden="true">
                  <img src="/images/CB-Hali Logo2.png" alt="" />
                </span>
                <span className="hm__video-title">{t.homeManifesto.videoTitle}</span>
                <span className="hm__video-share" aria-hidden="true">↗ Share</span>
              </span>
              <span className="hm__video-play" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
                YouTube
              </span>
            </a>

            <div className="hm__team-side">
              <span className="hm__team-line" aria-hidden="true" />
              <img
                src="/images/team-photo.webp"
                alt="CB HaLi team"
                className="hm__team-photo"
                width={430}
                height={320}
                loading="lazy"
              />
            </div>
          </div>

          <div className="hm__logo-wave">
            <img
              src="/images/Asset 8-100.png"
              alt="logo agua"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
