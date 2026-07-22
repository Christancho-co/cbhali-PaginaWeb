'use client'

/**
 * Hero — carrusel genérico de colecciones (Equus, Maori, Helios, Manchaha)
 * con flechas, dots y autoplay cada 5s. Cada slide enlaza a su colección
 * en /collections/[slug].
 *
 * ⚠️ NO se usa actualmente en ninguna página del sitio. Las imágenes que
 * pide (hero-equus.webp, hero-maori.webp, hero-helios.webp,
 * hero-manchaha.webp) tampoco existen hoy en /public/images. Parece un
 * componente preparado para un futuro hero de /collections con rotación
 * de colecciones, distinto del que usa CollectionsHero.tsx actualmente.
 * El import de FadeIn no se usa dentro del archivo.
 */
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import FadeIn from './FadeIn'

const slides = [
  {
    slug: 'equus',
    name: 'Equus',
    title: 'Colección Equus',
    subtitle: 'Potencia controlada, ritmo constante, elegancia estructural.',
    image: '/images/hero-equus.webp',
    bg: '#d4cfc8',
  },
  {
    slug: 'maori',
    name: 'Maori',
    title: 'Colección Maori',
    subtitle: 'La fuerza silenciosa de los materiales naturales.',
    image: '/images/hero-maori.webp',
    bg: '#c8c4bc',
  },
  {
    slug: 'helios',
    name: 'Helios',
    title: 'Colección Helios',
    subtitle: 'La luz como protagonista. La sombra como complemento.',
    image: '/images/hero-helios.webp',
    bg: '#b8b4ac',
  },
  {
    slug: 'manchaha',
    name: 'Manchaha',
    title: 'Colección Manchaha',
    subtitle: 'Intencional. Preciso. Inevitable.',
    image: '/images/hero-manchaha.webp',
    bg: '#ccc8c0',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setTransitioning(false)
    }, 400)
  }, [transitioning])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current])

  const slide = slides[current]

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100dvh',
      minHeight: 600,
      overflow: 'hidden',
      background: slide.bg,
      transition: 'background 600ms ease',
    }}>
      {/* Background image */}
      {slides.map((s, i) => (
        <div key={s.slug} style={{
          position: 'absolute',
          inset: 0,
          opacity: i === current ? (transitioning ? 0 : 1) : 0,
          transition: 'opacity 600ms ease',
          backgroundImage: `url(${s.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,8,5,0.15) 0%, rgba(10,8,5,0.55) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 'clamp(3rem, 8vw, 7rem)',
        textAlign: 'center',
        padding: '0 1.5rem clamp(3rem, 8vw, 7rem)',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          fontWeight: 400,
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          marginBottom: '1rem',
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 400ms ease',
        }}>{slide.title}</p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '2rem',
          maxWidth: 500,
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 400ms ease 100ms',
        }}>{slide.subtitle}</p>
        <Link href={`/collections/${slide.slug}`} style={{
          display: 'inline-block',
          padding: '0.75rem 2.5rem',
          border: '1px solid rgba(255,255,255,0.8)',
          color: '#fff',
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'all 300ms ease',
          background: 'transparent',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.15)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
        }}
        >Descubrir</Link>
      </div>

      {/* Arrows */}
      <button onClick={prev} aria-label="Anterior" style={{
        position: 'absolute', left: 'clamp(1rem, 3vw, 2.5rem)',
        top: '50%', transform: 'translateY(-50%)',
        zIndex: 3, background: 'none', border: 'none',
        color: '#fff', fontSize: '2rem', cursor: 'pointer',
        opacity: 0.8, padding: '0.5rem',
      }}>&#8249;</button>
      <button onClick={next} aria-label="Siguiente" style={{
        position: 'absolute', right: 'clamp(1rem, 3vw, 2.5rem)',
        top: '50%', transform: 'translateY(-50%)',
        zIndex: 3, background: 'none', border: 'none',
        color: '#fff', fontSize: '2rem', cursor: 'pointer',
        opacity: 0.8, padding: '0.5rem',
      }}>&#8250;</button>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 3,
        display: 'flex', gap: '0.5rem',
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} style={{
            width: i === current ? 24 : 8,
            height: 8, borderRadius: 4,
            background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
            border: 'none', cursor: 'pointer',
            transition: 'all 300ms ease', padding: 0,
          }} />
        ))}
      </div>
    </section>
  )
}
