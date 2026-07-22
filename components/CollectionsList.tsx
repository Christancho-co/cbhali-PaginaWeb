'use client'

/**
 * CollectionsList — cuerpo de /collections, debajo de CollectionsHero.
 * Se usa en app/collections/page.tsx.
 *
 * Intro corta (con ícono de camión + señal de scroll) + un bloque por cada
 * colección de collectionItems (lib/collections.ts): quote en banner
 * centrado ("linea 1 /// linea 2"), imagen cuadrada con el nombre
 * superpuesto arriba y abajo, y statement en texto monoespaciado. Todo el
 * bloque es un único Link a /collections/[slug] (sin CTA visible, igual a
 * la referencia de diseño). Kicker/heading/intro y quote/statement por
 * colección cambian con useLanguage() (quoteEs/statementEs en collections.ts).
 */
import Link from 'next/link'
import Image from 'next/image'
import { collectionItems } from '../lib/collections'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'

export default function CollectionsList() {
  const { lang } = useLanguage()
  const t = getTranslations(lang)

  return (
    <section className="collections-editorial">
      <div className="collections-intro">
        <div>
          <p className="collections-kicker">{t.collectionsList.kicker}</p>
        </div>

        {/* Ícono decorativo tipo carro/camión para reforzar el bloque de "delivery". */}
        <div className="collections-intro__logo-wrap" aria-hidden="true" style={{ color: '#bc8757' }}>
          <span className="deco-truck" />
        </div>

        <div className="collections-intro__body">
          <h2>{t.collectionsList.heading}</h2>
          <p>{t.collectionsList.intro}</p>
        </div>
      </div>

      {/* Señal de scroll (doble chevron), centrada, como en la referencia. */}
      <span className="collections-scroll-cue" aria-hidden="true">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M1 1l8 8 8-8" stroke="currentColor" strokeWidth="1.4"/><path d="M1 11l8 8 8-8" stroke="currentColor" strokeWidth="1.4"/></svg>
      </span>

      <div className="collections-flow">
        {collectionItems.map((item) => {
          const quote = lang === 'es' ? item.quoteEs : item.quote
          const statement = lang === 'es' ? item.statementEs : item.statement
          const [quoteLine1, quoteLine2] = quote.split('. ').map((part, i, arr) => (i === 0 && arr.length > 1 ? `${part}.` : part))

          return (
            <article className="collection-row" key={item.slug}>
              <p className="collection-row__quote">
                <span>{quoteLine1}</span>
                <span className="collection-row__quote-divider" aria-hidden="true">///</span>
                <span>{quoteLine2 ?? ''}</span>
              </p>
              <Link href={`/collections/${item.slug}`} className="collection-row__body" aria-label={`View ${item.name} collection`}>
                <span className="collection-row__image-link">
                  <Image src={item.cover} alt={item.name} width={780} height={780} className="collection-row__image" />
                  <span className="collection-row__name collection-row__name--top">{item.name}</span>
                  <span className="collection-row__name collection-row__name--bottom">{item.name}</span>
                </span>
                <p className="collection-row__copy">{statement}</p>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
