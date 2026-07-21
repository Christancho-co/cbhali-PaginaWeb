import MenuButton from '@/components/shared/MenuButton';

export default function Hero() {
  return (
    <section className="chero">
      <img className="chero__img" src="/images/collections/hero-rolls.webp" alt="Rolled CB Hali rugs" />
      <div className="chero__shade" />

      <MenuButton className="chero__menu" />
      <a className="chero__logo" href="/" aria-label="CB Hali home">
        <img className="chero__logo-mark" src="/svg/logo-mark.svg" alt="" />
        <span className="chero__logo-text">HaLi</span>
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
          <span className="chero__icon">
            <svg viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="1.5">
              <circle cx="28" cy="10" r="2.6" />
              <path d="M14 16v18M20 16v18M26 16v18" />
            </svg>
          </span>
          <span className="chero__icon">
            <svg viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="1.5">
              <path d="M12 6v28M20 6v28M28 6v28" />
            </svg>
          </span>
        </span>
        <span className="chero__icons-row">
          <span className="chero__icon">
            <svg viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="1.5">
              <path d="M6 12c3-4 6-4 9 0s6 4 9 0 6-4 9 0M6 20c3-4 6-4 9 0s6 4 9 0 6-4 9 0M6 28c3-4 6-4 9 0s6 4 9 0 6-4 9 0" />
            </svg>
          </span>
          <span className="chero__icon">
            <svg viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="1.5">
              <circle cx="20" cy="20" r="5" fill="#fff" />
            </svg>
          </span>
          <span className="chero__icon">
            <svg viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="1.5">
              <path d="M8 8c2.6 3 5.2 3 7.8 0s5.2-3 7.8 0 5.2 3 7.8 0M8 16c2.6 3 5.2 3 7.8 0s5.2-3 7.8 0 5.2 3 7.8 0M8 24c2.6 3 5.2 3 7.8 0s5.2-3 7.8 0 5.2 3 7.8 0M8 32c2.6 3 5.2 3 7.8 0s5.2-3 7.8 0 5.2 3 7.8 0" />
            </svg>
          </span>
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
