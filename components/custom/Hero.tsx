import MenuButton from '@/components/shared/MenuButton';

export default function Hero() {
  return (
    <section className="cshero">
      <img className="cshero__img" src="/images/custom/hero.webp" alt="Wave-pattern custom rug on a coastal wall" />
      <div className="cshero__shade" />

      <MenuButton className="cshero__menu" />
      <a className="cshero__logo" href="/" aria-label="CB Hali home">
        <img className="cshero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
      </a>
      <button className="cshero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" />
          <line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="cshero__title">CUSTOM</h1>
      <p className="cshero__subtitle">
        Designed by Experts,
        <br />
        Crafted with Precision.
      </p>

      <img className="cshero__zoom" src="/images/icons/custom/icono1.png" alt="" aria-hidden="true" />
    </section>
  );
}
