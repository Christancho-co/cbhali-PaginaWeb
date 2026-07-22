/**
 * Set de íconos de línea para el bloque "Details" de la página de
 * producto (CollectionDetailContent). Interpretación propia en el mismo
 * estilo delgado/orgánico de la referencia del cliente — no son un
 * calco pixel a pixel de sus íconos, que no vinieron como asset vectorial.
 */
import type { ReactNode } from 'react'
import type { DetailIconKey } from '../lib/collections'

const common = {
  width: 28,
  height: 28,
  viewBox: '0 0 28 28',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const icons: Record<DetailIconKey, ReactNode> = {
  softness: (
    <svg {...common}>
      <path d="M20.5 6.5c0 7-5.5 12.5-12.5 12.5-1 0-2-.1-3-.3.6-6.9 5.9-12.2 12.5-12.5.2 0 .3 1 .3 1.3z" />
      <path d="M8 19c2-4 5-7.5 9.5-10.5" />
    </svg>
  ),
  handmade: (
    <svg {...common}>
      <path d="M9 15.5V8.2a1.4 1.4 0 0 1 2.8 0v4.8" />
      <path d="M11.8 12.6V6.8a1.4 1.4 0 0 1 2.8 0v6" />
      <path d="M14.6 12.8V7.6a1.4 1.4 0 0 1 2.8 0v6.4" />
      <path d="M17.4 13.6v-3a1.4 1.4 0 0 1 2.8 0v6.4c0 3.3-2.4 5.8-6 5.8-2.4 0-3.8-.8-5.4-2.6l-3.4-3.8a1.3 1.3 0 0 1 1.9-1.8l2.1 1.9" />
    </svg>
  ),
  stainResistance: (
    <svg {...common}>
      <path d="M14 4.5c2.8 3.6 5 6.9 5 9.7a5 5 0 0 1-10 0c0-2.8 2.2-6.1 5-9.7z" />
      <path d="M6 22 22 6" />
    </svg>
  ),
  durability: (
    <svg {...common}>
      <path d="M14 4.5 21.5 7v6.2c0 5-3.4 8.4-7.5 10.3-4.1-1.9-7.5-5.3-7.5-10.3V7L14 4.5z" />
      <path d="m10.8 14 2.2 2.2 4.2-4.4" />
    </svg>
  ),
  biodegradable: (
    <svg {...common}>
      <path d="M20.5 6.5c0 7-5.5 12.5-12.5 12.5-1 0-2-.1-3-.3.6-6.9 5.9-12.2 12.5-12.5.2 0 .3 1 .3 1.3z" />
      <path d="M8 19c2-4 5-7.5 9.5-10.5" />
      <path d="M11 12.5c1.3-.6 2.6-.6 3.8 0" />
    </svg>
  ),
  resistant: (
    <svg {...common}>
      <path d="M14 4.5 21.5 7v6.2c0 5-3.4 8.4-7.5 10.3-4.1-1.9-7.5-5.3-7.5-10.3V7L14 4.5z" />
      <path d="M14 9v9" />
      <path d="M10.5 14h7" />
    </svg>
  ),
  softnessLuster: (
    <svg {...common}>
      <path d="M9 4.5c.5 2.2 2.2 3.9 4.4 4.4-2.2.5-3.9 2.2-4.4 4.4-.5-2.2-2.2-3.9-4.4-4.4C6.8 8.4 8.5 6.7 9 4.5z" />
      <path d="M19 12c.7 3 3 5.3 6 6-3 .7-5.3 3-6 6-.7-3-3-5.3-6-6 3-.7 5.3-3 6-6z" />
    </svg>
  ),
  hypoallergenic: (
    <svg {...common}>
      <circle cx="14" cy="14" r="3.2" />
      <path d="M14 4.5c1.8 0 3.2 1.9 3.2 4.2 0 1.4-.6 2.6-1.4 3.4M14 4.5c-1.8 0-3.2 1.9-3.2 4.2 0 1.4.6 2.6 1.4 3.4" />
      <path d="M23.5 14c0 1.8-1.9 3.2-4.2 3.2-1.4 0-2.6-.6-3.4-1.4M23.5 14c0-1.8-1.9-3.2-4.2-3.2-1.4 0-2.6.6-3.4 1.4" />
      <path d="M14 23.5c-1.8 0-3.2-1.9-3.2-4.2 0-1.4.6-2.6 1.4-3.4M14 23.5c1.8 0 3.2-1.9 3.2-4.2 0-1.4-.6-2.6-1.4-3.4" />
      <path d="M4.5 14c0-1.8 1.9-3.2 4.2-3.2 1.4 0 2.6.6 3.4 1.4M4.5 14c0 1.8 1.9 3.2 4.2 3.2 1.4 0 2.6-.6 3.4-1.4" />
    </svg>
  ),
}

export default function DetailIcon({ icon }: { icon: DetailIconKey }) {
  return icons[icon] ?? null
}
