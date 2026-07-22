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

      <img className="cnhero__map only-m" src="/images/icons/contact/icono1-movil.png" alt="" aria-hidden="true" />
      <h1 className="cnhero__title">Contact &amp; Dealers</h1>
      <img className="cnhero__globe only-d" src="/images/icons/contact/icono1.png" alt="" aria-hidden="true" />
      <div className="cnhero__pin" aria-hidden="true">
        <svg viewBox="0 0 32 40" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16,38C16,38,29,24.5,29,15A13,13,0,1,0,3,15C3,24.5,16,38,16,38Z" />
          <circle cx="16" cy="15" r="4.5" />
        </svg>
      </div>
    </section>
  );
}
