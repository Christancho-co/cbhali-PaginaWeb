'use client'
/**
 * LanguageSwitcher — botón "ES/EN" del navbar que alterna el idioma global
 * del sitio. Se usa dentro de Navbar.tsx.
 *
 * Todo el estado vive en LanguageContext (lib/LanguageContext.tsx); este
 * componente solo lee el idioma actual (lang) y muestra la otra opción
 * como texto del botón (si estás en 'es' muestra "EN", y viceversa).
 */
import { useLanguage } from '../lib/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage()
  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Espanol'}
      style={{
        background: 'none',
        border: '1px solid currentColor',
        color: 'inherit',
        cursor: 'pointer',
        fontSize: '0.7rem',
        fontFamily: 'var(--font-satoshi)',
        letterSpacing: '0.12em',
        padding: '3px 8px',
        borderRadius: '2px',
        opacity: 0.75,
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
