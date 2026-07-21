import { notFound } from 'next/navigation';
import Link from 'next/link';
import './product.css';
import { COLLECTIONS, getProduct, otherCollections } from '@/lib/products';
import Gallery from '@/components/product/Gallery';
import Accordion from '@/components/product/Accordion';
import DetailIcon from '@/components/product/DetailIcon';
import ScrollRow from '@/components/product/ScrollRow';
import ExploreMore from '@/components/product/ExploreMore';
import SiteFooter from '@/components/shared/SiteFooter';

export function generateStaticParams() {
  return COLLECTIONS.flatMap((c) => c.skus.map((s) => ({ slug: c.slug, code: s.code })));
}

export default function ProductPage({ params }: { params: { slug: string; code: string } }) {
  const result = getProduct(params.slug, params.code);
  if (!result) notFound();
  const { collection, sku } = result;
  const basePath = `/images/products/${collection.slug}/${sku.code}`;
  const siblings = collection.skus.filter((s) => s.code !== sku.code);
  const others = otherCollections(collection.slug);

  return (
    <main className="ppage">
      <nav className="pbreadcrumb">
        <Link href="/collections">Collections</Link> / <span>{collection.name}</span>
      </nav>

      <section className="ptop">
        <Gallery basePath={basePath} thumbCount={sku.thumbCount} alt={`${collection.name} ${sku.code}`} />

        <div className="pinfo">
          <h1 className="pinfo__title">
            {collection.name} <span>- {collection.number}</span>
          </h1>
          <p className="pinfo__code">
            Item Code: {sku.code}
            {sku.colorName ? ` | ${sku.colorName}` : ''}
          </p>

          <h2 className="pinfo__label">Choose a color</h2>
          <ScrollRow className="pcolors">
            {siblings.map((s) => (
              <Link key={s.code} href={`/collections/${collection.slug}/${s.code}`} className="pcolors__item">
                <img src={`/images/products/${collection.slug}/${s.code}/main.webp`} alt={`${collection.name} ${s.code}`} />
                <span>
                  {collection.name} {s.code}
                  {s.colorName && <><br />{s.colorName}</>}
                </span>
              </Link>
            ))}
          </ScrollRow>

          <h2 className="pinfo__label">Size</h2>
          <div className="psizes">
            {collection.sizes.map((s) => (
              <div className="psizes__item" key={s.size}>
                <span className="psizes__size">{s.size}</span>
                <span className="psizes__status">{s.status}</span>
              </div>
            ))}
          </div>

          <h2 className="pinfo__label">Details</h2>
          <div className="pdetails">
            {collection.details.map((d) => (
              <div className="pdetails__item" key={d}>
                <span className="pdetails__icon"><DetailIcon label={d} /></span>
                {d}
              </div>
            ))}
          </div>

          <p className="pinfo__help">
            <strong>Need Help?</strong> <em>Contact one of our team members</em>
          </p>
        </div>
      </section>

      <Accordion
        items={[
          {
            title: 'About This Design',
            body: (
              <>
                <h3>{collection.name}</h3>
                {collection.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </>
            ),
          },
          {
            title: 'Product Details',
            body: (
              <p className="pspecs">
                Material: {collection.specs.material}
                <br />
                Pile Height: {collection.specs.pileHeight}
                <br />
                Texture: {collection.specs.texture}
                <br />
                Shape: {collection.specs.shape}
                <br />
                Backing: {collection.specs.backing}
              </p>
            ),
          },
          {
            title: 'Washing & care',
            body: (
              <p>
                Our rugs are handcrafted using premium natural fibers. It is normal for new rugs to shed lightly during
                the first few weeks of use. Vacuum regularly using a vacuum cleaner without a brush, always following
                the direction of the pile, and rotate the rug periodically to ensure even wear. Professional dry
                cleaning is recommended whenever needed. In the event of spills, blot immediately with a clean white
                cloth and avoid rubbing or using excessive moisture. Do not use robotic vacuum cleaners, and avoid
                prolonged exposure to moisture, pet accidents, and direct contact between heavy furniture and the rug.
                We recommend using protective pads under furniture legs to prevent indentations or deformation. With
                proper care, your rug will retain its beauty, texture, and quality for years to come.
              </p>
            ),
          },
          {
            title: 'Shipping & Warranty',
            body: <p>Contact one of our team members for shipping times and warranty terms for this piece.</p>,
          },
          {
            title: 'Downloads',
            body: (
              <div className="pdownloads">
                <button type="button">Technical Sheet</button>
                <button type="button">2D CADS</button>
                <button type="button">Comercial terms</button>
              </div>
            ),
          },
        ]}
      />

      <ExploreMore all={others} />

      <SiteFooter bgImage="/images/collections/footer-bg.webp" />
    </main>
  );
}
