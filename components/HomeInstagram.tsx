/**
 * HomeInstagram — grid de 6 fotos de Instagram con hover en zoom.
 *
 * ⚠️ NO se usa actualmente en ninguna página (no aparece importado en
 * app/page.tsx). Es una versión anterior de la sección de Instagram de la
 * home; se reemplazó por el mockup de teléfono de HomeCollage.tsx. Se deja
 * el archivo por si se quiere retomar este formato de grid más adelante,
 * pero las imágenes en /public/instagram/ig1.webp..ig6.webp deben existir
 * para que funcione.
 */
import FadeIn from './FadeIn'

const instagramPosts = [
  { id: 1, image: '/instagram/ig1.webp', alt: 'CB HaLi rug in a living room' },
  { id: 2, image: '/instagram/ig2.webp', alt: 'Artisan weaving detail' },
  { id: 3, image: '/instagram/ig3.webp', alt: 'MAORI collection close-up' },
  { id: 4, image: '/instagram/ig4.webp', alt: 'Interior design with CB HaLi rug' },
  { id: 5, image: '/instagram/ig5.webp', alt: 'Texture and color detail' },
  { id: 6, image: '/instagram/ig6.webp', alt: 'CB HaLi showroom Barranquilla' },
]

export default function HomeInstagram() {
  return (
    <section style={{
      backgroundColor: 'var(--color-parchment)',
      paddingBlock: 'clamp(4rem, 7vw, 7rem)',
    }}>
      <FadeIn>
        <div style={{
          textAlign: 'center',
          paddingInline: 'var(--space-6)',
          marginBottom: '2.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-taupe)',
            marginBottom: '0.5rem',
          }}>@cbhali</p>
          <a
            href="https://instagram.com/cbhali"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--color-charcoal)',
            }}
          >
            Follow on Instagram
          </a>
        </div>
      </FadeIn>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '0.25rem',
        overflow: 'hidden',
      }}>
        {instagramPosts.map((post, i) => (
          <FadeIn key={post.id} delay={i * 60}>
            <a
              href="https://instagram.com/cbhali"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                aspectRatio: '1',
                overflow: 'hidden',
              }}
              className="ig-item"
            >
              <img
                src={post.image}
                alt={post.alt}
                width={300}
                height={300}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 600ms var(--ease)',
                }}
                className="ig-img"
              />
            </a>
          </FadeIn>
        ))}
      </div>
      <style>{`.ig-item:hover .ig-img { transform: scale(1.07); }`}</style>
    </section>
  )
}
