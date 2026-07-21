import MenuButton from '@/components/shared/MenuButton';

export default function Hero() {
  return (
    <section className="cnhero">
      <img className="cnhero__img" src="/images/contact/hero.webp" alt="Ivy growing on a terracotta brick wall" />
      <div className="cnhero__shade" />

      <MenuButton className="cnhero__menu" />
      <a className="cnhero__logo" href="/" aria-label="CB Hali home">
        <img className="cnhero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
      </a>
      <button className="cnhero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" /><line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="cnhero__title">Contact &amp; Dealers</h1>
      <img className="cnhero__globe" src="/images/icons/contact/icono1.png" alt="" aria-hidden="true" />
      <div className="cnhero__chevrons" aria-hidden="true">
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
      </div>
    </section>
  );
}
