/**
 * Gallery — grilla tipo "masonry" (3 columnas, algunas celdas más anchas
 * o más altas vía `span`) con 6 colecciones y CTA final a /collections.
 *
 * ⚠️ NO se usa actualmente en ninguna página, y las imágenes que pide
 * (col-equus.webp, col-soma.webp, col-maori.webp, col-manchaha.webp,
 * col-helios.webp, col-amhara.webp) tampoco existen en /public/images.
 * Nota: el CSS de abajo referencia `.gallery-grid` para el responsive,
 * pero el grid real no tiene esa clase (usa estilos inline) — otro indicio
 * de que quedó a medio terminar.
 */
import FadeIn from './FadeIn'
import Link from 'next/link'

const galleryItems = [
  { slug: 'equus', label: 'Equus', span: 'col', img: '/images/col-equus.webp' },
  { slug: 'soma', label: 'Soma', span: 'row', img: '/images/col-soma.webp' },
  { slug: 'maori', label: 'Maori', span: '', img: '/images/col-maori.webp' },
  { slug: 'manchaha', label: 'Manchaha', span: 'col', img: '/images/col-manchaha.webp' },
  { slug: 'helios', label: 'Helios', span: '', img: '/images/col-helios.webp' },
  { slug: 'amhara', label: 'Amhara', span: 'row', img: '/images/col-amhara.webp' },
]

export default function Gallery() {
  return (
    <section style={{
      background: 'var(--color-cream)',
      paddingBlock: 'clamp(4rem, 8vw, 7rem)',
      paddingInline: 'clamp(1.5rem, 5vw, 6rem)',
      borderTop: '1px solid var(--color-sand)',
    }}>
      <div style={{ maxWidth: 'var(--content-wide)', marginInline: 'auto' }}>

        {/* Header */}
        <FadeIn>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              color: 'var(--color-charcoal)',
            }}>Galería de colecciones</h2>
            <Link href="/collections" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-taupe)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-sand)',
              paddingBottom: '2px',
            }}>Ver todas</Link>
          </div>
        </FadeIn>

        {/* Grid masonry */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '280px',
          gap: '1rem',
        }}>
          {galleryItems.map((item, i) => (
            <FadeIn key={item.slug} delay={i * 80}>
              <Link href={`/collections/${item.slug}`} style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                gridColumn: item.span === 'col' ? 'span 2' : 'span 1',
                gridRow: item.span === 'row' ? 'span 2' : 'span 1',
                height: '100%',
                minHeight: item.span === 'row' ? 560 : 280,
              }}>
                {/* Placeholder imagen */}
                <div
                  className="gallery-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--color-sand)',
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 700ms cubic-bezier(.16,1,.3,1)',
                  }}
                />
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17,14,10,0.6) 0%, transparent 50%)',
                  transition: 'opacity 300ms ease',
                }} />
                {/* Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  zIndex: 2,
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    fontWeight: 400,
                    color: '#fff',
                    letterSpacing: '0.05em',
                  }}>{item.label}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Link href="/collections" style={{
              display: 'inline-block',
              padding: '0.875rem 3rem',
              border: '1px solid var(--color-charcoal)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-charcoal)',
              textDecoration: 'none',
            }}>Explorar todas las colecciones</Link>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .gallery-img { transform: scale(1); }
        a:hover .gallery-img { transform: scale(1.04); }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
