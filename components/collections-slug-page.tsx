// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ ARCHIVO NO USADO: la ruta real /collections/[slug] vive en
// app/collections/[slug]/page.tsx, que tiene su PROPIA implementación y lee
// los datos de lib/collections.ts (collectionItems / getCollectionBySlug),
// no del objeto `collectionData` de aquí abajo.
//
// Este componente parece una versión anterior/alternativa de esa misma
// página (con textos y estructura de datos distintos). Se deja documentado
// por si sirve de referencia, pero hoy no se importa desde ningún lado —
// si se elimina, no rompe nada.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── Datos de las colecciones ─────────────────────────────────────────────────
// En producción, esto vendría de un CMS (Contentful, Sanity, etc.) o una API.
// Por ahora es un objeto estático keyed por slug.
const collectionData: Record<
  string,
  {
    name: string;
    tagline: string;
    description: string;
    heroImage: string;
    galleryImages: string[];
    details: { label: string; value: string }[];
  }
> = {
  maori: {
    name: "MAORI",
    tagline: "A grounded collection with soft geometry and natural depth.",
    description:
      "MAORI draws from the geometry of the earth — concentric forms, sediment layers, and the quiet logic of natural patterns. Each piece grounds a space with tactile richness and measured composition.",
    heroImage: "/images/tapete.webp",
    galleryImages: [
      "/images/tapete.webp",
      "/images/Asset 10-102.webp",
      "/images/bg-Explore-catalogo.webp",
    ],
    details: [
      { label: "Material", value: "New Zealand Wool / Viscose" },
      { label: "Construction", value: "Hand-tufted" },
      { label: "Lead time", value: "8–12 weeks" },
      { label: "Available in", value: "Custom sizes and colorways" },
    ],
  },
  soma: {
    name: "SOMA",
    tagline: "Calm rhythm, subtle pattern and refined warmth.",
    description:
      "SOMA is quiet confidence in textile form. Its rhythm is measured, its palette drawn from warm neutrals that hold a room without demanding attention. A piece that belongs.",
    heroImage: "/images/bg-Explore-catalogo.webp",
    galleryImages: [
      "/images/bg-Explore-catalogo.webp",
      "/images/tapete.webp",
      "/images/hero-home.webp",
    ],
    details: [
      { label: "Material", value: "Wool / Cotton blend" },
      { label: "Construction", value: "Hand-knotted" },
      { label: "Lead time", value: "10–14 weeks" },
      { label: "Available in", value: "Custom sizes and colorways" },
    ],
  },
  equus: {
    name: "EQUUS",
    tagline: "Structure, line and movement brought into balance.",
    description:
      "EQUUS channels the tension between structure and movement. Linear patterns with organic interruptions — a collection for spaces that value discipline without rigidity.",
    heroImage: "/images/Asset 10-102.webp",
    galleryImages: [
      "/images/Asset 10-102.webp",
      "/images/Asset 10-101.webp",
      "/images/tapete.webp",
    ],
    details: [
      { label: "Material", value: "New Zealand Wool" },
      { label: "Construction", value: "Hand-tufted" },
      { label: "Lead time", value: "8–12 weeks" },
      { label: "Available in", value: "Custom sizes and colorways" },
    ],
  },
  amhara: {
    name: "AMHARA",
    tagline: "Soft relief and enveloping tactility for quieter interiors.",
    description:
      "AMHARA is the collection of quieter rooms — spaces where the texture itself is the conversation. Relief patterns that cast soft shadow and invite touch.",
    heroImage: "/images/hero-home.webp",
    galleryImages: [
      "/images/hero-home.webp",
      "/images/bg-Explore-catalogo.webp",
      "/images/team-photo.webp",
    ],
    details: [
      { label: "Material", value: "Silk / Wool blend" },
      { label: "Construction", value: "Hand-knotted" },
      { label: "Lead time", value: "12–16 weeks" },
      { label: "Available in", value: "Custom sizes and colorways" },
    ],
  },
  helios: {
    name: "HELIOS",
    tagline: "A brighter expression of texture and ordered repetition.",
    description:
      "HELIOS brings light into the weave — lighter colorways, ordered repetition, a geometry that catches and disperses. Rooms that face the sun deserve HELIOS.",
    heroImage: "/images/Asset 10-101.webp",
    galleryImages: [
      "/images/Asset 10-101.webp",
      "/images/tapete.webp",
      "/images/bg-Explore-catalogo.webp",
    ],
    details: [
      { label: "Material", value: "Bamboo Silk / Wool" },
      { label: "Construction", value: "Hand-tufted" },
      { label: "Lead time", value: "8–12 weeks" },
      { label: "Available in", value: "Custom sizes and colorways" },
    ],
  },
  manchaha: {
    name: "MANCHAHA",
    tagline: "Organic contrast and graphic softness in one field.",
    description:
      "MANCHAHA holds two forces in productive tension: the graphic and the organic, the defined and the diffuse. A single field that carries the energy of the entire Caribbean coast.",
    heroImage: "/images/team-photo.webp",
    galleryImages: [
      "/images/team-photo.webp",
      "/images/Asset 10-102.webp",
      "/images/hero-home.webp",
    ],
    details: [
      { label: "Material", value: "New Zealand Wool / Cotton" },
      { label: "Construction", value: "Hand-knotted" },
      { label: "Lead time", value: "10–14 weeks" },
      { label: "Available in", value: "Custom sizes and colorways" },
    ],
  },
};

// ─── generateStaticParams ─────────────────────────────────────────────────────
// Dice a Next.js qué slugs pre-generar en el build (Static Site Generation).
// Sin esto, las páginas se generarán on-demand en el servidor (también válido).
export async function generateStaticParams() {
  return Object.keys(collectionData).map((slug) => ({ slug }));
}

// ─── generateMetadata ─────────────────────────────────────────────────────────
// Genera los metadatos <title> y <meta description> dinámicamente por colección.
// Next.js llama a esta función antes de renderizar la página.
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const collection = collectionData[params.slug];
  if (!collection) return { title: "Collection Not Found - CB HaLi" };

  return {
    title: `${collection.name} Collection - CB HaLi`,
    description: collection.tagline,
  };
}

// ─── Componente de página ─────────────────────────────────────────────────────
export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  // Busca la colección por slug
  const collection = collectionData[params.slug];

  // Si el slug no existe → 404
  // notFound() de Next.js muestra la página de error 404 automáticamente
  if (!collection) {
    notFound();
  }

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "72dvh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "#1a1410",
        }}
      >
        {/* Imagen hero de la colección */}
        <img
          src={collection.heroImage}
          alt={collection.name}
          width={1600}
          height={900}
          loading="eager"
          // priority en Next.js Image haría LCP más rápido, pero usamos <img> aquí
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Overlay gradiente para que el texto sea legible sobre la imagen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,16,12,0.15), rgba(20,16,12,0.78))",
          }}
        />

        {/* Contenido del hero */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            padding: "0 1.5rem 3.5rem",
          }}
        >
          <div style={{ maxWidth: 1160, margin: "0 auto", color: "#fff" }}>
            {/* Breadcrumb de navegación: Collections > NOMBRE */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-ui)",
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                opacity: 0.72,
                marginBottom: "1.25rem",
              }}
            >
              <Link href="/collections" style={{ color: "inherit" }}>
                Collections
              </Link>
              <span>›</span>
              <span>{collection.name}</span>
            </nav>

            {/* Nombre de la colección */}
            <h1
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 300,
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}
            >
              {collection.name}
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                color: "rgba(255,255,255,0.82)",
                maxWidth: "55ch",
                lineHeight: 1.6,
              }}
            >
              {collection.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ══ CONTENIDO PRINCIPAL ════════════════════════════════════════════════ */}
      <section
        style={{ background: "#fbf8f3", padding: "4rem 1.5rem 5rem" }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr minmax(280px, 380px)",
            gap: "4rem",
            alignItems: "start",
          }}
          className="collection-layout"
        >
          {/* ── GALERÍA IZQUIERDA ── */}
          <div style={{ display: "grid", gap: "1rem" }}>
            {/* Imagen principal grande */}
            <img
              src={collection.galleryImages[0]}
              alt={`${collection.name} main`}
              width={900}
              height={700}
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
            {/* Dos imágenes secundarias en grilla de 2 columnas */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {collection.galleryImages.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${collection.name} detail ${i + 2}`}
                  width={440}
                  height={360}
                  loading="lazy"
                  style={{
                    width: "100%",
                    aspectRatio: "5/4",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── INFORMACIÓN DERECHA ── */}
          <div
            style={{
              display: "grid",
              gap: "2rem",
              position: "sticky",
              // sticky: el panel de info se queda fijo mientras haces scroll en la galería
              top: "100px",
            }}
          >
            {/* Etiqueta de colección */}
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}
            >
              CB HaLi Collection
            </p>

            {/* Nombre grande */}
            <h2
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#1a1410",
                lineHeight: 1.05,
              }}
            >
              {collection.name}
            </h2>

            {/* Descripción larga */}
            <p
              style={{
                color: "#7f756d",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              {collection.description}
            </p>

            {/* Separador */}
            <div
              style={{
                height: "1px",
                background: "rgba(199,148,67,0.3)",
              }}
            />

            {/* Detalles técnicos: material, construcción, etc. */}
            <dl
              style={{
                display: "grid",
                gap: "0.85rem",
              }}
            >
              {collection.details.map((detail) => (
                <div
                  key={detail.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: "0.5rem",
                  }}
                >
                  <dt
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#b9b0a8",
                    }}
                  >
                    {detail.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.95rem",
                      color: "#4a4038",
                    }}
                  >
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {/* CTA principal: ir a contacto para solicitar */}
              <Link
                href="/contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.9rem 1.5rem",
                  background: "var(--color-gold)",
                  color: "#fff",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  borderRadius: "999px",
                  textDecoration: "none",
                  transition: "opacity 200ms ease",
                }}
              >
                Request This Collection
              </Link>

              {/* CTA secundario: ir a Custom */}
              <Link
                href="/custom"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.9rem 1.5rem",
                  border: "1px solid rgba(42,37,32,0.3)",
                  color: "#4a4038",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  borderRadius: "999px",
                  textDecoration: "none",
                }}
              >
                Customize This Design
              </Link>
            </div>

            {/* Link para volver a todas las colecciones */}
            <Link
              href="/collections"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--color-gold)",
                fontFamily: "var(--font-ui)",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              ← All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ══ RESPONSIVE STYLES ══════════════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 768px) {
          .collection-layout {
            grid-template-columns: 1fr !important;
          }

          /* En móvil, el panel sticky deja de ser sticky */
          .collection-layout > div:last-child {
            position: static !important;
          }
        }
      `}</style>
    </>
  );
}
