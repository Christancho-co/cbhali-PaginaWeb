'use client'

/**
 * Footer — pie de página, presente en todas las páginas (se renderiza una
 * sola vez en app/layout.tsx, después de InnerPageBand).
 *
 * Dos columnas de links (primaryLinks / secondaryLinks, labels desde
 * t.nav), los íconos de redes sociales (socials, con el path SVG de cada
 * logo escrito a mano) y la línea legal inferior (t.footer). Cambia con
 * useLanguage().
 */
import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

// Redes sociales con íconos SVG para mantener mismo look en todos los tamaños.
const socials = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: 'M23.5 6.2a2.96 2.96 0 0 0-2.08-2.1C19.59 3.6 12 3.6 12 3.6s-7.59 0-9.42.5A2.96 2.96 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 2.96 2.96 0 0 0 2.08 2.1c1.83.5 9.42.5 9.42.5s7.59 0 9.42-.5a2.96 2.96 0 0 0 2.08-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.7V8.3L16 12l-6.4 3.7Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cbhali/',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838A6.162 6.162 0 1 0 12 18.16 6.162 6.162 0 0 0 12 5.838Zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: 'M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.626h-3.12V24h6.116C23.408 24 24 23.408 24 22.676V1.325C24 .592 23.408 0 22.675 0Z',
  },
]

export default function Footer() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)

  const primaryLinks = [
    { href: '/', label: t.nav.home },
    { href: '/collections', label: t.nav.collections },
    { href: '/custom', label: t.nav.custom },
    { href: '/contract', label: t.nav.contract },
  ]

  const secondaryLinks = [
    { href: '/about', label: t.nav.about },
    { href: '/blog', label: t.footer.blogLabel },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <nav className="site-footer__links" aria-label="Footer navigation">
            <div className="site-footer__col">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="site-footer__link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="site-footer__col">
              {secondaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="site-footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="site-footer__socials" aria-label="Social links">
            {socials.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="site-footer__social-link" aria-label={label}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Línea legal y créditos exactamente separados como en el diseño. */}
        <div className="site-footer__bottom">
          <p>{t.footer.legal}</p>
          <p>{t.footer.copyright}</p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  )
}
