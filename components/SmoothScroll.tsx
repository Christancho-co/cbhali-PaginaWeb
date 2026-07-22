'use client'

/**
 * SmoothScroll — activaría scroll suave en toda la página usando la
 * librería "lenis" (rueda del mouse con inercia en vez del scroll nativo).
 *
 * ⚠️ NO se usa actualmente: no está importado en app/layout.tsx ni en
 * ninguna página, así que hoy no tiene ningún efecto. Para activarlo
 * habría que renderizar <SmoothScroll /> una vez en el layout raíz.
 */
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Crea la instancia de Lenis y engancha su loop al de rAF del navegador
    // para que la inercia del scroll se actualice en cada frame.
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null // no renderiza nada, solo engancha el efecto de scroll
}
