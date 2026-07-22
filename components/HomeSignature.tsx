'use client'

/**
 * HomeSignature — última sección de la home antes del footer.
 * Se usa en app/page.tsx, después de HomeCollage.
 *
 * Es solo una foto grande con la frase-firma de la marca superpuesta en
 * letra script (fuente Brigend). A propósito NO usa lib/translations: la
 * frase "Crafted for Visionaries!" debe verse igual sin importar el idioma
 * del sitio (es un lema de marca, no contenido traducible).
 */
export default function HomeSignature() {
  return (
    <section className="hs">
      <div className="hs__hero">
        <img
          src="/images/Asset 10-101.webp"
          alt="CB HaLi final signature scene"
          className="hs__hero-image"
          width={1600}
          height={920}
          loading="lazy"
        />
        {/* Frase de marca: siempre en inglés, no se traduce. */}
        <p className="hs__script">Crafted for Visionaries!</p>
      </div>
    </section>
  )
}
