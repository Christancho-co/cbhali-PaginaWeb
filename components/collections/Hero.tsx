import type { ReactNode } from 'react';
import Link from 'next/link';
import MenuButton from '@/components/shared/MenuButton';
import SearchButton from '@/components/shared/SearchButton';
import CyclingDots from '@/components/collections/CyclingDots';
import { COLLECTIONS } from '@/lib/products';

function CollectionLink({ slug, label }: { slug: string; label: ReactNode }) {
  const collection = COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) return <>{label}</>;
  return <Link href={`/collections/${slug}/${collection.skus[0].code}`}>{label}</Link>;
}

export default function Hero() {
  return (
    <section className="chero">
      <img className="chero__img" src="/images/collections/hero-rolls.webp" alt="Rolled CB Hali rugs" />
      <div className="chero__navband" />
      <div className="chero__shade" />

      <div className="chero__content">
        <MenuButton className="chero__menu" />
        <a className="chero__logo" href="/" aria-label="CB Hali home">
          <img className="chero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
        </a>
        <SearchButton className="chero__search" />

        <h1 className="chero__title">Collections.</h1>
        <p className="chero__subtitle">Available Now / Ready to Ship</p>

        <p className="chero__tags">
          <CollectionLink slug="equus" label="EQUUS" /> - <CollectionLink slug="soma" label="SOMA" /> -{' '}
          <CollectionLink slug="manchaha" label={<strong>MANCHAHA</strong>} /> -{' '}
          <CollectionLink slug="amhara" label="AMHARA" /> - <CollectionLink slug="arya" label="ARYA" /> -{' '}
          <CollectionLink slug="maori" label="MAORI" /> - NUMU
          <br />
          SERENUS - SOLATIUM - MINOS - FORA - <CollectionLink slug="helios" label="HELIOS" /> - VINTAGE
        </p>

        <div className="chero__icons" aria-hidden="true">
          <span className="chero__icons-row">
            <img className="chero__icon" src="/images/icons/collections/icono2.png" alt="" />
            <img className="chero__icon" src="/images/icons/collections/icono1.png" alt="" />
          </span>
          <span className="chero__icons-row">
            <img className="chero__icon" src="/images/icons/collections/icono3.png" alt="" />
            <img className="chero__icon" src="/images/icons/collections/icono4.png" alt="" />
            <img className="chero__icon" src="/images/icons/collections/icono5.png" alt="" />
          </span>
        </div>

        <CyclingDots />
      </div>
    </section>
  );
}
