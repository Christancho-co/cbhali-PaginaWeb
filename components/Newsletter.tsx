'use client'

/**
 * Newsletter — sección completa (fondo oscuro + logo + título + form de
 * email) para suscripción al newsletter. Solo hace validación de front-end
 * (si el email no está vacío, muestra mensaje de éxito) — no envía a
 * ningún servicio real todavía.
 *
 * ⚠️ NO se usa actualmente en ninguna página. Distinto de
 * NewsletterForm.tsx, que es solo el formulario (sin la sección
 * alrededor) y sí se usa dentro de HomeCollage.
 */
import { useState } from 'react'
import FadeIn from './FadeIn'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSent(true)
      setEmail('')
    }
  }

  return (
    <section style={{
      backgroundColor: 'var(--color-charcoal)',
      paddingBlock: 'clamp(4rem, 8vw, 8rem)',
      paddingInline: 'clamp(1.5rem, 5vw, 4rem)',
    }}>
      <div style={{
        maxWidth: '600px',
        marginInline: 'auto',
        textAlign: 'center',
      }}>
        <FadeIn>
          {/* CB logo */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-label="CB HaLi" style={{ margin: '0 auto 2rem' }}>
            <text x="2" y="36" fontFamily="Georgia, serif" fontSize="34" fontWeight="400" fill="var(--color-cream)" letterSpacing="-2">CB</text>
          </svg>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 400,
            color: 'var(--color-cream)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>Subscribe to Our Newsletter</h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'rgba(245,241,235,0.6)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '42ch',
            marginInline: 'auto',
          }}>
            Stay connected with our latest collections, collaborations, and design stories.
          </p>

          {sent ? (
            <p style={{
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              letterSpacing: '0.1em',
            }}>Thank you — welcome to CB HaLi. ✦</p>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '0',
              maxWidth: '440px',
              marginInline: 'auto',
              border: '1px solid rgba(245,241,235,0.25)',
            }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  padding: '0.85rem 1.25rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-cream)',
                  outline: 'none',
                  minWidth: 0,
                }}
              />
              <button type="submit" style={{
                background: 'var(--color-gold)',
                border: 'none',
                padding: '0.85rem 1.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-charcoal)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background var(--transition)',
              }}>
                Subscribe
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
