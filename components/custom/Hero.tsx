import MenuButton from '@/components/shared/MenuButton';
import SearchButton from '@/components/shared/SearchButton';

export default function Hero() {
  return (
    <section className="cshero">
      <img className="cshero__img" src="/images/custom/hero.webp" alt="Wave-pattern custom rug on a coastal wall" />
      <div className="cshero__navband" />
      <div className="cshero__shade" />

      <div className="cshero__content">
        <MenuButton className="cshero__menu" />
        <a className="cshero__logo" href="/" aria-label="CB Hali home">
          <img className="cshero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
        </a>
        <SearchButton className="cshero__search" />

        <h1 className="cshero__title">CUSTOM</h1>
        <p className="cshero__subtitle">
          Designed by Experts,
          <br />
          Crafted with Precision.
        </p>

        <img className="cshero__zoom" src="/images/icons/custom/icono1.png" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
