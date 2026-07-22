'use client'
/**
 * LanguageContext — guarda el idioma activo del sitio ('es' | 'en') en
 * memoria (no persiste en localStorage/cookies: al recargar la página
 * vuelve a 'es'). <LanguageProvider> envuelve todo el sitio en
 * app/layout.tsx; cualquier componente cliente puede leer/cambiar el
 * idioma con el hook useLanguage() (ver LanguageSwitcher.tsx para el botón
 * que lo dispara, y lib/translations.ts para los textos por idioma).
 */
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'es' | 'en'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  // Actualiza el atributo lang del <html> al cambiar idioma
  // Esto es crítico para lectores de pantalla y SEO
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
