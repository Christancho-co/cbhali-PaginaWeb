'use client'

/**
 * CollectionDetailContent — cuerpo de /collections/[slug], separado de
 * app/collections/[slug]/page.tsx porque ese archivo exporta
 * generateMetadata (requiere ser Server Component) y este contenido
 * necesita 'use client' para useLanguage(). Recibe la colección ya resuelta
 * como prop (getCollectionBySlug se llama en el Server Component padre).
 *
 * Página de producto tipo e-commerce (galería + selector de color/talla +
 * acordeones), calcada de las plantillas WEB-PLANTILLA que entregó el
 * cliente para Aluna/Arya/Lattice/Manchaha. Las colecciones que todavía no
 * tienen ese material (Maori, Soma, Equus, Amhara, Helios) usan el mismo
 * layout con un solo "variant" — el selector de color se oculta solo y las
 * tallas se muestran sin etiqueta de stock (collection.customSizing).
 */
import { useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { CollectionItem, StockStatus } from '../lib/collections'
import { collectionItems } from '../lib/collections'
import { useLanguage } from '../lib/LanguageContext'
import { getTranslations } from '../lib/translations'
import DetailIcon from './ProductDetailIcons'

const stockKey: Record<StockStatus, 'stockInStock' | 'stockComingSoon' | 'stockOutOfStock'> = {
  'in-stock': 'stockInStock',
  'coming-soon': 'stockComingSoon',
  'out-of-stock': 'stockOutOfStock',
}

type SectionKey = 'about' | 'specs' | 'care' | 'shipping' | 'downloads'

export default function CollectionDetailContent({ collection }: { collection: CollectionItem }) {
  const { lang } = useLanguage()
  const t = getTranslations(lang)
  const pd = t.productDetail
  const isEs = lang === 'es'

  const [variantIndex, setVariantIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [openSection, setOpenSection] = useState<SectionKey | null>('about')
  const swatchTrack = useRef<HTMLDivElement>(null)

  const variant = collection.variants[variantIndex]
  const gallery = [variant.hero, ...variant.gallery]
  const hasColorPicker = collection.variants.length > 1

  const selectVariant = (index: number) => {
    setVariantIndex(index)
    setActiveImage(0)
  }

  const scrollSwatches = (dir: 1 | -1) => {
    swatchTrack.current?.scrollBy({ left: dir * 160, behavior: 'smooth' })
  }

  const toggleSection = (key: SectionKey) => {
    setOpenSection((current) => (current === key ? null : key))
  }

  const otherCollections = collectionItems.filter((item) => item.slug !== collection.slug).slice(0, 4)

  const requestSubject = encodeURIComponent(`${collection.name} — ${variant.code}`)

  return (
    <main className="product-detail">
      <div className="product-detail__wrap">
        <div className="product-detail__gallery">
          <div className="product-detail__main-image">
            <Image
              key={gallery[activeImage]}
              src={gallery[activeImage]}
              alt={`${collection.name} ${variant.code}`}
              width={1100}
              height={1100}
              priority
              className="product-detail__main-img"
            />
          </div>
          <div className="product-detail__thumbs">
            <button type="button" className="product-detail__thumb-arrow" aria-label="Previous" onClick={() => setActiveImage((i) => (i - 1 + gallery.length) % gallery.length)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {gallery.map((img, i) => (
              <button
                key={img}
                type="button"
                className={`product-detail__thumb${i === activeImage ? ' is-active' : ''}`}
                onClick={() => setActiveImage(i)}
                aria-label={`${collection.name} view ${i + 1}`}
              >
                <Image src={img} alt="" width={140} height={140} />
              </button>
            ))}
            <button type="button" className="product-detail__thumb-arrow" aria-label="Next" onClick={() => setActiveImage((i) => (i + 1) % gallery.length)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div className="product-detail__info">
          <h1 className="product-detail__title">
            {collection.name}
            {!collection.customSizing && <span> - {collection.itemCode}</span>}
          </h1>
          {!collection.customSizing && <p className="product-detail__item-code">{pd.itemCode}: {variant.code}</p>}

          {hasColorPicker && (
            <div className="product-detail__block">
              <h2 className="product-detail__block-title">{pd.chooseColor}</h2>
              <div className="product-detail__swatch-row">
                <button type="button" className="product-detail__swatch-arrow" aria-label="Previous colors" onClick={() => scrollSwatches(-1)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <div className="product-detail__swatch-track" ref={swatchTrack}>
                  {collection.variants.map((v, i) => (
                    <button
                      key={v.code}
                      type="button"
                      className={`product-detail__swatch${i === variantIndex ? ' is-active' : ''}`}
                      onClick={() => selectVariant(i)}
                    >
                      <span className="product-detail__swatch-img">
                        <Image src={v.hero} alt={v.code} width={120} height={120} />
                      </span>
                      <span className="product-detail__swatch-label">
                        {collection.name} {v.code}
                        {v.colorName && <><br />{isEs ? v.colorNameEs : v.colorName}</>}
                      </span>
                    </button>
                  ))}
                </div>
                <button type="button" className="product-detail__swatch-arrow" aria-label="Next colors" onClick={() => scrollSwatches(1)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          )}

          <div className="product-detail__block">
            <h2 className="product-detail__block-title">{pd.size}</h2>
            <div className="product-detail__sizes">
              {collection.sizes.map((size) => (
                <div className="product-detail__size" key={size.label}>
                  <span className="product-detail__size-label">{size.label}</span>
                  {size.status && <span className={`product-detail__size-status product-detail__size-status--${size.status}`}>{pd[stockKey[size.status]]}</span>}
                </div>
              ))}
            </div>
            {collection.customSizing && <p className="product-detail__custom-sizing-note">{pd.customSizingNote}</p>}
          </div>

          <div className="product-detail__block">
            <h2 className="product-detail__block-title">{pd.details}</h2>
            <div className="product-detail__details-grid">
              {collection.detailIcons.map((icon) => (
                <div className="product-detail__detail" key={icon}>
                  <DetailIcon icon={icon} />
                  <span>{pd.detailLabels[icon]}</span>
                </div>
              ))}
            </div>
          </div>

          <a className="product-detail__need-help" href={`mailto:info@cbhali.com?subject=${requestSubject}`}>
            <strong>{pd.needHelp}</strong> {pd.needHelpBody}
            <svg width="16" height="12" viewBox="0 0 24 18" fill="none" aria-hidden="true"><rect x="1" y="1" width="22" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M2 2.5 12 11l10-8.5" stroke="currentColor" strokeWidth="1.4" /></svg>
          </a>

          <div className="product-detail__accordion">
            <AccordionRow title={pd.aboutThisDesign} isOpen={openSection === 'about'} onToggle={() => toggleSection('about')}>
              <h3>{collection.name}</h3>
              {(isEs ? collection.aboutBodyEs : collection.aboutBody).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </AccordionRow>

            <AccordionRow title={pd.productDetails} isOpen={openSection === 'specs'} onToggle={() => toggleSection('specs')}>
              <ul className="product-detail__specs">
                <li>{pd.specMaterial}: {isEs ? collection.specs.materialEs : collection.specs.material}</li>
                {collection.specs.pileHeight && <li>{pd.specPileHeight}: {collection.specs.pileHeight}</li>}
                <li>{pd.specTexture}: {isEs ? collection.specs.textureEs : collection.specs.texture}</li>
                <li>{pd.specShape}: {isEs ? collection.specs.shapeEs : collection.specs.shape}</li>
                {collection.specs.backing && <li>{pd.specBacking}: {isEs ? collection.specs.backingEs : collection.specs.backing}</li>}
              </ul>
            </AccordionRow>

            <AccordionRow title={pd.washingCare} isOpen={openSection === 'care'} onToggle={() => toggleSection('care')}>
              <p>{pd.washingCareBody}</p>
            </AccordionRow>

            <AccordionRow title={pd.shippingWarranty} isOpen={openSection === 'shipping'} onToggle={() => toggleSection('shipping')}>
              <p>{pd.shippingWarrantyBody}</p>
            </AccordionRow>

            <AccordionRow title={pd.downloads} isOpen={openSection === 'downloads'} onToggle={() => toggleSection('downloads')}>
              <div className="product-detail__downloads">
                <a href={`mailto:info@cbhali.com?subject=${encodeURIComponent(pd.downloadTechnicalSheet + ' — ' + collection.name)}`}>{pd.downloadTechnicalSheet}</a>
                <a href={`mailto:info@cbhali.com?subject=${encodeURIComponent(pd.download2DCad + ' — ' + collection.name)}`}>{pd.download2DCad}</a>
                <a href={`mailto:info@cbhali.com?subject=${encodeURIComponent(pd.downloadCommercialTerms + ' — ' + collection.name)}`}>{pd.downloadCommercialTerms}</a>
              </div>
            </AccordionRow>
          </div>

          <div className="product-detail__actions">
            <a href={`mailto:info@cbhali.com?subject=${requestSubject}`}>{pd.requestThisRug}</a>
          </div>
        </div>
      </div>

      <section className="product-detail__more">
        <h2>{pd.exploreMore}</h2>
        <div className="product-detail__more-grid">
          {otherCollections.map((item) => (
            <Link key={item.slug} href={`/collections/${item.slug}`} className="product-detail__more-item">
              <Image src={item.cover} alt={item.name} width={480} height={600} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

function AccordionRow({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}) {
  return (
    <div className={`product-detail__row${isOpen ? ' is-open' : ''}`}>
      <button type="button" className="product-detail__row-head" onClick={onToggle} aria-expanded={isOpen}>
        <span>{title}</span>
        <span className="product-detail__row-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="product-detail__row-body">{children}</div>}
    </div>
  )
}
