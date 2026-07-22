'use client'

/**
 * FadeIn — envoltorio genérico que anima su contenido (fade + desplazamiento
 * leve) la primera vez que entra en el viewport al hacer scroll.
 * Se usa en Editorial, Gallery, Hero, HomeInstagram, ImageText y Newsletter
 * para dar el efecto de aparición progresiva típico de las páginas internas.
 *
 * Uso: <FadeIn delay={200} direction="left">...</FadeIn>
 * - delay: milisegundos de espera antes de animar (para escalonar varios
 *   elementos, ej. items de una grilla con delay={i * 60}).
 * - direction: desde dónde "entra" el contenido (arriba/izquierda/derecha/
 *   sin desplazamiento, solo fade).
 */
import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  style?: CSSProperties
  className?: string
}

export default function FadeIn({ children, delay = 0, direction = 'up', style, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Posición inicial (oculto) según la dirección pedida.
    const translateMap = {
      up: 'translateY(28px)',
      left: 'translateX(-28px)',
      right: 'translateX(28px)',
      none: 'none',
    }

    el.style.opacity = '0'
    el.style.transform = translateMap[direction]
    el.style.transition = `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`

    // IntersectionObserver: dispara la animación solo la primera vez que el
    // elemento entra al viewport (10% visible), y luego deja de observar.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
