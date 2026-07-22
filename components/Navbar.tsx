'use client'

/**
 * Navbar — barra de navegación fija, presente en todas las páginas
 * (se renderiza una sola vez en app/layout.tsx, fuera de <main>).
 *
 * Agrupa tres piezas de UI que comparten estado:
 * 1. Header fijo (logo + botón de menú + selector de idioma + buscador).
 *    Cambia a versión "clara" (site-nav--light) al hacer scroll o con
 *    algún overlay abierto, para mantener contraste sobre fondos oscuros.
 * 2. Panel de menú lateral (site-menu-panel) con los links de navLinks.
 * 3. Overlay de búsqueda (site-search) que filtra navLinks por texto.
 */
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

// Keywords de búsqueda por ruta (fijos, no se traducen — el buscador filtra
// por label traducido + estas keywords en ambos idiomas para que funcione
// sin importar el idioma activo).
const navKeywords: Record<string, string[]> = {
  '/': ['inicio', 'home', 'cb hali'],
  '/collections': ['colecciones', 'collections', 'rugs', 'catalog', 'catalogo'],
  '/custom': ['custom', 'personalizado', 'bespoke', 'made to order', 'a la medida'],
  '/contract': ['contract', 'contrato', 'hospitality', 'retail'],
  '/about': ['about', 'nosotros', 'story', 'historia', 'brand'],
  '/blog': ['blog', 'atelier', 'inspiration', 'inspiracion'],
  '/contact': ['contact', 'contacto', 'dealers', 'distribuidores', 'barranquilla'],
}

// Paleta visual inferior del menú desplegable.
const menuPalette = ['#bf8739', '#e0c79e', '#8f432d', '#1e5a8e', '#c6c2bf', '#8c8e87', '#5c7641', '#3e4f20']

export default function Navbar() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)

  // Links principales del sitio que se muestran en el menú — el label
  // cambia con el idioma activo (t.nav.*), las keywords de búsqueda no.
  const navLinks = [
    { href: '/', label: t.nav.home, keywords: navKeywords['/'] },
    { href: '/collections', label: t.nav.collections, keywords: navKeywords['/collections'] },
    { href: '/custom', label: t.nav.custom, keywords: navKeywords['/custom'] },
    { href: '/contract', label: t.nav.contract, keywords: navKeywords['/contract'] },
    { href: '/about', label: t.nav.about, keywords: navKeywords['/about'] },
    { href: '/blog', label: t.nav.blog, keywords: navKeywords['/blog'] },
    { href: '/contact', label: t.nav.contact, keywords: navKeywords['/contact'] },
  ]

  // Estado para cambiar chrome del navbar al hacer scroll.
  const [scrolled, setScrolled] = useState(false)
  // Estado del panel de menú lateral.
  const [menuOpen, setMenuOpen] = useState(false)
  // Estado del overlay de búsqueda.
  const [searchOpen, setSearchOpen] = useState(false)
  // Texto actual del input de búsqueda.
  const [searchQuery, setSearchQuery] = useState('')

  const pathname = usePathname()
  const router = useRouter()

  // Si el usuario hace scroll, activamos versión clara del navbar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea scroll del body cuando hay overlays abiertos.
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  // Cuando cambia de ruta, cerramos overlays para evitar estados colgados.
  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
    setSearchQuery('')
  }, [pathname])

  // Soporte tecla Escape para cerrar overlays.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Resultados filtrados del buscador interno.
  const filteredLinks = useMemo(() => {
    const term = searchQuery.trim().toLowerCase()
    if (!term) return navLinks

    return navLinks.filter((link) => {
      const haystack = [link.label, ...link.keywords].join(' ').toLowerCase()
      return haystack.includes(term)
    })
  }, [searchQuery])

  // Estilo claro cuando hay scroll o overlays.
  const isLight = scrolled || menuOpen || searchOpen

  // Navega al resultado elegido desde el buscador.
  const handleSearchSubmit = (href?: string) => {
    const target = href ?? filteredLinks[0]?.href
    if (!target) return

    setSearchOpen(false)
    setSearchQuery('')
    router.push(target)
  }

  return (
    <>
      <header className={`site-nav ${isLight ? 'site-nav--light' : ''}`}>
        <button
          className="site-nav__menu-btn"
          aria-label={t.common.openMenu}
          onClick={() => {
            setSearchOpen(false)
            setMenuOpen(true)
          }}
        >
          ≡
        </button>

        <Link href="/" className="site-nav__brand" aria-label="Go to Home">
          <span className="site-nav__brand-mark" aria-hidden="true" />
          <span className="site-nav__brand-text">HaLi</span>
        </Link>

        <div className="site-nav__actions">
          <div className="site-nav__lang-wrap">
            <LanguageSwitcher />
          </div>
          <button className="site-nav__search-btn" aria-label={t.common.openSearch} onClick={() => setSearchOpen(true)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
        </div>
      </header>

      {/* Backdrop para cerrar el menú cuando el usuario hace click afuera. */}
      <div className={`site-menu-backdrop ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />

      {/* Panel principal del menú. En móvil ocupa casi toda la pantalla; en desktop queda panel lateral. */}
      <aside className={`site-menu-panel ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="site-menu-panel__top">
          <button className="site-menu-panel__close" aria-label={t.common.closeMenu} onClick={() => setMenuOpen(false)}>
            ×
          </button>
          <Image src="/images/Asset 8-100.png" alt="decorative icon" width={22} height={16} className="site-menu-panel__mini-icon" />
        </div>

        <div className="site-menu-panel__center-mark" aria-hidden="true">
          <Image src="/images/logo.png" alt="CB" width={86} height={86} />
        </div>

        <nav className="site-menu-panel__nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link key={link.href} href={link.href} className={`site-menu-panel__link ${isActive ? 'is-active' : ''}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="site-menu-panel__palette" aria-hidden="true">
          {menuPalette.map((color) => (
            <span key={color} style={{ background: color }} />
          ))}
        </div>
      </aside>

      {/* Overlay de búsqueda global. */}
      <div className={`site-search ${searchOpen ? 'is-open' : ''}`}>
        <button className="site-search__close" aria-label={t.common.closeSearch} onClick={() => setSearchOpen(false)}>
          ×
        </button>

        <p className="site-search__label">{t.common.searchLabel}</p>
        <h2 className="site-search__title">{t.common.findAPage}</h2>

        <form
          className="site-search__form"
          onSubmit={(event) => {
            event.preventDefault()
            handleSearchSubmit()
          }}
        >
          <input
            autoFocus
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={t.common.searchPlaceholder}
          />

          {filteredLinks.length ? (
            filteredLinks.map((link) => (
              <button key={link.href} type="button" className="site-search__result" onClick={() => handleSearchSubmit(link.href)}>
                <strong>{link.label}</strong>
                <span>{link.href}</span>
              </button>
            ))
          ) : (
            <p className="site-search__empty">{t.common.noResults}</p>
          )}
        </form>
      </div>
    </>
  )
}
