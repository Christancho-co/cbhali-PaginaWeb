'use client'

/**
 * BlogPageContent — todo el markup de /blog, separado de app/blog/page.tsx
 * porque ese archivo exporta `metadata` (requiere ser Server Component) y
 * este contenido necesita 'use client' para poder usar useLanguage().
 *
 * Hero con marca de agua "1. The / 2. CB / 3. Atelier", grilla de posts
 * (posts, datos estáticos) y una sección de newsletter con formulario que
 * todavía no envía datos a ningún lado (no tiene onSubmit). Todo el texto
 * viene de t.blogContent (lib/translations.ts) y cambia con useLanguage().
 */
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

// Imágenes de los posts de ejemplo — datos estáticos, no vienen de un CMS todavía.
// El post 0002 ("Care & Cleaning" / "Cuidado y Limpieza") usa una foto de
// tapetes de colores (antes tenía una foto de interior que no correspondía
// al tema del post ni a la referencia, que muestra telas apiladas).
const postImages = [
  '/images/Asset 10-102.webp',
  '/images/tapete.webp',
  '/images/Contract/Versus/IMG_5183.webp',
  '/images/Collections/Manchaha/CB-Hali-099.webp',
]
const postIds = ['0004', '0003', '0002', '0001']

export default function BlogPageContent() {
  const { lang } = useLanguage()
  const t = getTranslations(lang).blogContent

  return (
    <main>
      {/* HERO */}
      <section className="blog-hero">
        <Image src="/images/bg-Explore-catalogo.webp" alt="Blog hero" fill priority sizes="100vw" className="blog-hero__img" />
        <div className="blog-hero__overlay" />

        {/* Decoracion lateral derecha */}
        <div className="hero-deco-right" aria-hidden="true">
          <div className="deco-stack">
            <span className="deco-badge" />
            <span className="deco-badge" />
            <span className="deco-ring" />
          </div>
        </div>

        {/* Title bottom-left */}
        <div className="blog-hero__content">
          <h1 className="blog-hero__title">{t.heroTitle}</h1>
          <span className="blog-hero__icon" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="24" height="28" rx="2" stroke="white" strokeWidth="2"/>
              <path d="M8 12h12M8 17h12M8 22h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <rect x="18" y="18" width="14" height="14" rx="2" fill="#2D4A3E" stroke="white" strokeWidth="1.5"/>
              <path d="M22 25h6M22 28h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        </div>

        {/* CB Atelier watermark bottom-right: "1. The / 2. CB / 3. Atelier"
            (Atelier gira 90°), igual a la referencia. */}
        <div className="blog-hero__watermark" aria-hidden="true">
          <span className="blog-hero__watermark-num blog-hero__watermark-num--1">1.</span>
          <span className="blog-hero__watermark-the">{t.atelierPrefix}</span>
          <span className="blog-hero__watermark-num blog-hero__watermark-num--2">2.</span>
          <span className="blog-hero__watermark-cb" />
          <span className="blog-hero__watermark-num blog-hero__watermark-num--3">3.</span>
          <span className="blog-hero__watermark-atelier">{t.atelierSuffix}</span>
        </div>

        {/* Scroll indicator */}
        <div className="blog-hero__scroll" aria-hidden="true">
          <span /><span /><span />
        </div>
      </section>

      {/* POSTS SECTION */}
      <section className="blog-posts">
        <div className="blog-posts__header">
          <span className="blog-posts__header-side">{t.latestNews}</span>
          <span className="blog-posts__header-center">
            {t.atelierPrefix} <b className="blog-posts__header-cb">CB</b> {t.atelierSuffix}
          </span>
          <span className="blog-posts__header-side">{t.upcomingEvents}</span>
        </div>

        <div className="blog-grid">
          {t.posts.map((post, index) => (
            <article key={postIds[index]} className="blog-card">
              <div className="blog-card__img-wrap">
                <Image src={postImages[index]} alt={post.title} width={880} height={640} className="blog-card__img" />
                <div className="blog-card__title-wrap">
                  <p className="blog-card__category">{post.category}</p>
                  <h3>{post.title}</h3>
                </div>
              </div>
              <div className="blog-card__meta">
                <span>{postIds[index]}</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-posts__footer">
          {/* Sello circular decorativo (faltaba por completo); el texto gira
              alrededor del borde vía <textPath>, con una flecha hacia abajo
              en el centro como señal de "sigue bajando / lee más". */}
          <div className="blog-posts__badge" aria-hidden="true">
            <svg viewBox="0 0 100 100" width="64" height="64">
              <defs>
                <path id="blog-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="38" fill="none" stroke="#2D4A3E" strokeWidth="1" strokeDasharray="2 3" />
              <text fontSize="7.2" fill="#2D4A3E" letterSpacing="1.5">
                <textPath href="#blog-badge-circle" startOffset="0%">{t.badgeText}</textPath>
              </text>
              <path d="M50 40v18M43 51l7 7 7-7" stroke="#2D4A3E" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <Link href="/collections" className="blog-catalog-cta">
            {t.exploreCatalog}
            <span className="blog-catalog-cta__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"/><path d="M10 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="blog-newsletter">
        <p className="blog-newsletter__mark">CB</p>
        <form>
          <h3>{t.newsletterHeading}</h3>
          <input placeholder={t.formName} />
          <input type="email" placeholder={t.formEmail} />
          <button type="submit">{t.subscribe}</button>
        </form>

        {/* Tarjeta "Contact Details" flotante (faltaba por completo). */}
        <div className="blog-newsletter__contact-card">
          <p className="blog-newsletter__contact-title">{t.contactDetailsTitle}</p>
          {t.contactDetailsLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>
    </main>
  )
}
