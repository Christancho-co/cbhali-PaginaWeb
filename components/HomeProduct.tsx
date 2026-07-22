"use client"; // 👈 Este componente se ejecuta en el cliente (necesario para hooks y window)

/**
 * HomeProduct — sección de producto de la home (tapetes enrollados + foto
 * de ambiente con CTA). Se usa en app/page.tsx, entre HomeIdentity y
 * HomeManifesto.
 *
 * Estructura: ícono decorativo → imagen del tapete con marco/orb dorado →
 * foto de ambiente con botón "Explore Our Catalog" (link a /collections) →
 * segundo marco decorativo abajo a la izquierda.
 */
import Image from "next/image"; // 👈 Optimización automática de imágenes
import Link from "next/link"; // 👈 Navegación sin recargar página
import { useLanguage } from "../lib/LanguageContext";
import { getTranslations } from "../lib/translations";

export default function HomeProduct() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  // Sube al inicio de la página al hacer click en el ícono de casa.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="hp">
      {/* ───────────────────────────── */}
      {/* 🏠 MARCA DECORATIVA (click = volver arriba) */}
      {/* ───────────────────────────── */}
      <button
        type="button"
        className="hp__intro-mark"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="34" height="41" viewBox="0 0 96 116" aria-hidden="true">
          {/* Techo: triángulo sólido apuntando hacia arriba (pico en y=2, base en y=44). */}
          <path d="M2 44 L94 44 L48 2 Z" fill="var(--color-gold)" />
          {/* Cuerpo de la casa: sólido, con la puerta como hueco (color de fondo) en vez de contorno. */}
          <rect x="24" y="44" width="48" height="54" fill="var(--color-gold)" />
          <rect x="42" y="76" width="12" height="22" fill="#f8f6f2" />
        </svg>
      </button>

      {/* ───────────────────────────── */}
      {/* 🎯 SECCIÓN PRINCIPAL (PRODUCTO) */}
      {/* ───────────────────────────── */}
      <div className="hp__feature">

        {/* Imagen principal */}
        <div className="hp__centerpiece">
          <img
            src="/images/tapete.webp" // 👈 Imagen del producto
            alt="CB HaLi rug collection"
            width={920}
            height={1080}
            loading="lazy" // 👈 Carga diferida (mejora performance)
          />
        </div>

        {/* Elemento decorativo (frame + orb) */}
        <div className="hp__frame" aria-hidden="true">
          <div className="hp__frame-orb" /> {/* 👈 Elemento visual tipo glow */}
          <img
            src="/images/Asset 8-100.png"
            alt=""
            width={120}
            height={92}
          />
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* 🏡 ESCENA / CONTEXTO VISUAL */}
      {/* ───────────────────────────── */}
      <div className="hp__scene">

        {/* Imagen de ambiente */}
        <img
          src="/images/Asset 10-102.webp"
          alt="Interior scene with CB HaLi textile"
          width={1600}
          height={980}
          loading="lazy"
        />

        {/* CTA → ir al catálogo */}
        <Link href="/collections" className="hp__cta">
          {t.common.exploreCatalog}
          <span aria-hidden="true">{">>"}</span>
        </Link>

        {/* Logo flotante decorativo */}
        <div className="hp__scene-mark" aria-hidden="true">
          <Image
            src="/images/CB-Hali Logo2.png"
            alt="CB Hali"
            width={50}
            height={50}
            style={{
              // 👈 Sombra para que el logo destaque sobre la imagen
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* ✨ FRAME DECORATIVO INFERIOR */}
      {/* ───────────────────────────── */}
      <div
        className="hp__frame hp__frame--bottom-left"
        aria-hidden="true"
      >
        <div className="hp__frame-orb" />
        <img
          src="/images/Asset 8-102-blob.png"
          alt=""
          width={120}
          height={92}
        />
      </div>
    </section>
  );
}