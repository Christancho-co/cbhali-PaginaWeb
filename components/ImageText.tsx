/**
 * ImageText — dos bloques genéricos: 1) foto full-width con texto
 * superpuesto y link a /about, 2) sección "Custom Made" texto+foto con
 * link a /custom.
 *
 * ⚠️ NO se usa actualmente en ninguna página, y las imágenes que pide
 * (artisan-workshop.webp, custom-made.webp) tampoco existen en
 * /public/images.
 */
import FadeIn from './FadeIn'
import Link from 'next/link'

export default function ImageText() {
  return (
    <section style={{
      background: 'var(--color-cream)',
      borderTop: '1px solid var(--color-sand)',
    }}>
      {/* Imagen grande full-width con texto superpuesto */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(400px, 60vw, 700px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        {/* IMAGE PLACEHOLDER — /images/artisan-workshop.webp */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/artisan-workshop.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(17,16,9,0.7) 0%, rgba(17,16,9,0.1) 60%, transparent 100%)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 5vw, 6rem)',
          maxWidth: 700,
        }}>
          <FadeIn>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 'var(--space-6)',
            }}>
              Artesanos que tejen<br />historia y emociones.
            </p>
            <Link href="/about" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              border: '1px solid rgba(255,255,255,0.7)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Nuestra Historia</Link>
          </FadeIn>
        </div>
      </div>

      {/* Seccion Custom Made */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 0,
        borderTop: '1px solid var(--color-sand)',
      }}>
        <FadeIn>
          <div style={{
            padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 6rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'var(--space-6)',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-taupe)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block' }} />
              Custom Made
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--color-charcoal)',
            }}>
              Tu espacio,<br />tu alfombra.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              lineHeight: 1.9,
              color: 'var(--color-taupe)',
              maxWidth: '45ch',
            }}>
              Diseñamos y fabricamos alfombras a medida adaptadas a tus necesidades de espacio, paleta de color y estilo personal. Cada pieza es única.
            </p>
            <Link href="/custom" style={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              padding: '0.75rem 2rem',
              border: '1px solid var(--color-charcoal)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-charcoal)',
              textDecoration: 'none',
            }}>Explorar Custom</Link>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div style={{
            minHeight: 400,
            backgroundImage: 'url(/images/custom-made.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </FadeIn>
      </div>
    </section>
  )
}
