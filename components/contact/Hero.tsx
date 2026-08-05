import MenuButton from '@/components/shared/MenuButton';
import SearchButton from '@/components/shared/SearchButton';

export default function Hero() {
  return (
    <section className="cnhero">
      <img className="cnhero__img" src="/images/contact/hero.webp" alt="Ivy growing on a terracotta brick wall" />
      <div className="cnhero__navband" />
      <div className="cnhero__shade" />

      <div className="cnhero__content">
        <MenuButton className="cnhero__menu" />
        <a className="cnhero__logo" href="/" aria-label="CB Hali home">
          <img className="cnhero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
        </a>
        <SearchButton className="cnhero__search" />

        <img className="cnhero__map only-m" src="/images/icons/contact/icono1-movil.png" alt="" aria-hidden="true" />
        <h1 className="cnhero__title">Contact &amp; Dealers</h1>
        <img className="cnhero__globe only-d" src="/images/icons/contact/icono1.png" alt="" aria-hidden="true" />
        <div className="cnhero__pin" aria-hidden="true">
          <svg viewBox="0 0 32 40" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16,38C16,38,29,24.5,29,15A13,13,0,1,0,3,15C3,24.5,16,38,16,38Z" />
            <circle cx="16" cy="15" r="4.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
