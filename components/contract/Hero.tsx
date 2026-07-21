import MenuButton from '@/components/shared/MenuButton';

export default function Hero() {
  return (
    <section className="cthero">
      <img className="cthero__img" src="/images/contract/hero.webp" alt="Living room with a custom contract rug" />
      <div className="cthero__shade" />

      <MenuButton className="cthero__menu" />
      <a className="cthero__logo" href="/" aria-label="CB Hali home">
        <img className="cthero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
      </a>
      <button className="cthero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" /><line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="cthero__title">CONTRACT</h1>
      <img className="cthero__doc" src="/images/icons/contract/icono1.png" alt="" aria-hidden="true" />
      <p className="cthero__tag">[From start to finish]</p>
    </section>
  );
}
