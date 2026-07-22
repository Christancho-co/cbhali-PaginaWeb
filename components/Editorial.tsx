/**
 * Editorial — dos secciones genéricas de tipo "revista": una intro con
 * texto + imagen (colección Minos) y una grilla de 4 colecciones
 * (Helios, Amhara, Maori, Manchaha) con link a cada una.
 *
 * ⚠️ NO se usa actualmente en ninguna página, y las imágenes que pide
 * (editorial-minos.webp, col-helios.webp, col-amhara.webp, col-maori.webp,
 * col-manchaha.webp) tampoco existen en /public/images. Parece un
 * componente de una versión anterior del sitio.
 */
import FadeIn from './FadeIn'
import Link from 'next/link'

export default function Editorial() {
  return (
    <>
      {/* Seccion: Construido sobre la tradicion */}
      <section style={{
        background: 'var(--color-cream)',
        paddingBlock: 'clamp(4rem, 10vw, 8rem)',
        paddingInline: 'clamp(1.5rem, 5vw, 6rem)',
      }}>
        <div style={{
          maxWidth: 'var(--content-wide)',
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>
          <FadeIn>
            <div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-taupe)',
                marginBottom: 'var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block' }} />
                Construido sobre la tradición
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--color-charcoal)',
                marginBottom: 'var(--space-6)',
              }}>
                Consideramos<br />cada detalle.
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.9,
                color: 'var(--color-taupe)',
                marginBottom: 'var(--space-8)',
                maxWidth: '50ch',
              }}>
                Construido sobre la tradición, diseñado para el aquí y el ahora: CB Hali se inspira en la constante reinvención del hogar.
              </p>
              <Link href="/collections/minos" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                border: '1px solid var(--color-charcoal)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-charcoal)',
                textDecoration: 'none',
              }}>Colección Minos</Link>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            {/* IMAGE PLACEHOLDER */}
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              background: 'var(--color-sand)',
              backgroundImage: 'url(/images/editorial-minos.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </FadeIn>
        </div>
      </section>

      {/* Seccion: Una alfombra unica */}
      <section style={{
        background: 'var(--color-cream)',
        paddingBlock: 'clamp(4rem, 10vw, 8rem)',
        paddingInline: 'clamp(1.5rem, 5vw, 6rem)',
        borderTop: '1px solid var(--color-sand)',
      }}>
        <div style={{ maxWidth: 'var(--content-wide)', marginInline: 'auto' }}>
          <FadeIn>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 400,
              textAlign: 'center',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
              color: 'var(--color-charcoal)',
            }}>
              Una alfombra única para cada espacio
            </h2>
          </FadeIn>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}>
            {[
              { slug: 'helios', name: 'Helios', img: '/images/col-helios.webp' },
              { slug: 'amhara', name: 'Amhara', img: '/images/col-amhara.webp' },
              { slug: 'maori', name: 'Maori', img: '/images/col-maori.webp' },
              { slug: 'manchaha', name: 'Manchaha', img: '/images/col-manchaha.webp' },
            ].map((col) => (
              <FadeIn key={col.slug}>
                <div>
                  <div style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    background: 'var(--color-sand)',
                    backgroundImage: `url(${col.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: '1rem',
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 400,
                    textAlign: 'center',
                    marginBottom: '0.75rem',
                  }}>{col.name}</p>
                  <div style={{ textAlign: 'center' }}>
                    <Link href={`/collections/${col.slug}`} style={{
                      display: 'inline-block',
                      padding: '0.5rem 1.5rem',
                      border: '1px solid var(--color-charcoal)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-charcoal)',
                      textDecoration: 'none',
                    }}>Ver Diseños</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
