'use client'

/**
 * NewsletterForm — formulario "Name + Email + Subscribe" usado dentro de
 * la tarjeta de newsletter de HomeCollage.tsx (sección Instagram/rug de
 * la home).
 *
 * ⚠️ El submit hace preventDefault y no hace nada más: no hay validación,
 * ni envío a un backend/servicio de email todavía. Falta conectarlo.
 */
export default function NewsletterForm() {
  return (
    <form className="hc__nl-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" className="hc__nl-input" aria-label="Name for newsletter" />
      <input type="email" placeholder="Email Address" className="hc__nl-input" aria-label="Email for newsletter" />
      <button type="submit" className="hc__nl-btn">
        Subscribe
      </button>
    </form>
  )
}
