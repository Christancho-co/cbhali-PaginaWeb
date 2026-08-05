import MenuButton from '@/components/shared/MenuButton';
import SearchButton from '@/components/shared/SearchButton';

export default function Hero() {
  return (
    <section className="abhero">
      <img className="abhero__img" src="/images/about/hero.webp" alt="Hands working with wool yarn, black and white" />
      <div className="abhero__navband" />
      <div className="abhero__shade" />

      <div className="abhero__content">
        <MenuButton className="abhero__menu" />
        <a className="abhero__logo" href="/" aria-label="CB Hali home">
          <img className="abhero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
        </a>
        <SearchButton className="abhero__search" />

        <img className="abhero__mark" src="/images/icons/about/icono1.png" alt="" aria-hidden="true" />
        <h1 className="abhero__title">About Us</h1>
      </div>
    </section>
  );
}
