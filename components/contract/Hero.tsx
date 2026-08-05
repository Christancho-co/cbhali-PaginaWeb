import MenuButton from '@/components/shared/MenuButton';
import SearchButton from '@/components/shared/SearchButton';

export default function Hero() {
  return (
    <section className="cthero">
      <img className="cthero__img" src="/images/contract/hero.webp" alt="Living room with a custom contract rug" />
      <div className="cthero__navband" />
      <div className="cthero__shade" />

      <div className="cthero__content">
        <MenuButton className="cthero__menu" />
        <a className="cthero__logo" href="/" aria-label="CB Hali home">
          <img className="cthero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
        </a>
        <SearchButton className="cthero__search" />

        <h1 className="cthero__title">CONTRACT</h1>
        <img className="cthero__doc" src="/images/icons/contract/icono1.png" alt="" aria-hidden="true" />
        <p className="cthero__tag">[From start to finish]</p>
      </div>
    </section>
  );
}
