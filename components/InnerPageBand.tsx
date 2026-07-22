/**
 * InnerPageBand — franja de foto + wordmark que aparece justo antes del
 * footer en TODAS las páginas (se renderiza una sola vez en
 * app/layout.tsx, entre <main> y <Footer />).
 *
 * Por defecto usa la foto /images/Asset 10-101.webp, pero cualquier página
 * puede pasarle otra imagen vía la prop `image` si se necesita variar el
 * fondo (actualmente ninguna página lo hace, todas usan la de por defecto).
 * El wordmark (monograma "CB" + "HaLi®" + "Crafted for Visionaries") usa
 * el mismo patrón de CSS mask que HomeIdentity, en blanco sobre la foto.
 */
import Image from 'next/image'

type InnerPageBandProps = {
  image?: string
}

export default function InnerPageBand({ image = '/images/Asset 10-101.webp' }: InnerPageBandProps) {
  return (
    <section className="inner-page-band" aria-label="CB HaLi signature band">
      {/* Imagen principal de la franja previa al footer. */}
      <Image src={image} alt="CB HaLi" fill sizes="100vw" className="inner-page-band__bg" />

      {/* Capa de contraste suave para que el logo siempre sea legible. */}
      <div className="inner-page-band__overlay" />

      {/* Wordmark centrado: debe verse tanto en desktop como en móvil. */}
      <div className="inner-page-band__content">
        <div className="inner-page-band__wordmark" aria-label="CB HaLi">
          <span className="inner-page-band__wordmark-mark" aria-hidden="true" />
          <strong>HaLi<sup>®</sup></strong>
        </div>
        <p className="inner-page-band__caption">Crafted for Visionaries</p>
      </div>
    </section>
  )
}
