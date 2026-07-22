'use client'

/**
 * HomeHero — primera sección de la home (banner a pantalla completa).
 * Se usa en app/page.tsx como primer bloque de la página.
 *
 * Muestra una sola foto de fondo fija (hero-home.webp) y va rotando el
 * titular cada 5s entre las frases definidas en homeHero.slides
 * (lib/translations.ts, una lista por idioma). Los puntitos (dots) permiten
 * saltar manualmente a una frase; la flecha inferior baja el scroll hasta
 * la sección HomeIdentity (id="home-identity").
 */
import { useEffect, useState, useCallback } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function HomeHero() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)
  const slides = t.homeHero.slides // frases del titular, una por "slide"

  const [current, setCurrent] = useState(0) // índice de la frase visible
  const [animating, setAnimating] = useState(false) // true durante el fundido entre frases

  // Cambia de frase con un pequeño fundido (fade-out → cambia texto → fade-in).
  const goTo = useCallback((index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }, [animating])

  // Autoplay: avanza a la siguiente frase cada 5 segundos.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Scroll suave hacia la sección siguiente al hacer click en la flecha.
  const scrollDown = () => {
    document.getElementById('home-identity')?.scrollIntoView({ behavior: 'smooth' })
  }

  // El diseño original pone el acento del titular en cursiva (ej. "Uncover
  // *The Art*"); *texto* en la traducción marca ese fragmento como <em>.
  const renderTitle = (title: string) =>
    title.split(/(\*[^*]+\*)/g).map((part, i) =>
      part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : part
    )

  return (
    <section className="hh">
      {/* Foto de fondo fija del hero (solo hay una imagen disponible). */}
      <div className="hh__bg" style={{ backgroundImage: "url('/images/hero-home.webp')" }} />

      {/* Degradado oscuro para que el texto blanco siempre sea legible. */}
      <div className="hh__overlay" />

      <div className="hh__content">
        <h1
          className="hh__title"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 400ms ease, transform 400ms ease',
          }}
        >
          {renderTitle(slides[current].title)}<br />{slides[current].subtitle}
        </h1>

        {/* Indicadores de frase (uno por slide); click = saltar a esa frase. */}
        <div className="hh__dots" aria-hidden="true">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`hh__dot${i === current ? ' hh__dot--active' : ''}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Flecha animada que invita a bajar a la siguiente sección. */}
        <button className="hh__scroll" onClick={scrollDown} aria-label={t.common.scrollDown}>
          <svg width="28" height="40" viewBox="0 0 28 40" fill="none" aria-hidden="true">
            <polyline points="6,8 14,16 22,8" stroke="currentColor" strokeWidth="1.4" />
            <polyline points="6,18 14,26 22,18" stroke="currentColor" strokeWidth="1.4" />
            <polyline points="6,28 14,36 22,28" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
    </section>
  )
}
