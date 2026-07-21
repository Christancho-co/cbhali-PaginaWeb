import MenuButton from '@/components/shared/MenuButton';

export default function Hero() {
  return (
    <section className="chero">
      <img className="chero__img" src="/images/collections/hero-rolls.webp" alt="Rolled CB Hali rugs" />
      <div className="chero__shade" />

      <MenuButton className="chero__menu" />
      <a className="chero__logo" href="/" aria-label="CB Hali home">
        <img className="chero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
      </a>
      <button className="chero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" />
          <line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="chero__title">Collections.</h1>
      <p className="chero__subtitle">Available Now / Ready to Ship</p>

      <p className="chero__tags">
        EQUUS - SOMA - <strong>MANCHAHA</strong> - AMHARA - ARYA - MAORI - NUMU
        <br />
        SERENUS - SOLATIUM - MINOS - FORA - HELIOS - VINTAGE
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

      <div className="chero__dots" aria-hidden="true">
        <span className="is-active" />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
