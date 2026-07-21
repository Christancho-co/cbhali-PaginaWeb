import MenuButton from '@/components/shared/MenuButton';

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src="/images/home/hero-corridor-wide.webp" alt="CB Hali rug in a warm corridor" />
      <div className="hero__navband only-m" />
      <span className="hero__spark only-d" aria-hidden="true" />
      <div className="hero__shade hero__shade--top" />
      <div className="hero__shade hero__shade--bottom" />

      <MenuButton className="hero__menu" />

      <a className="hero__logo" href="/" aria-label="CB Hali home">
        <img className="hero__logo-mark" src="/svg/logo-mark.svg" alt="" />
        <span className="hero__logo-text">HaLi</span>
      </a>

      <button className="hero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" />
          <line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="hero__title only-d">
        Uncover <em>The Art</em>
        <br />
        Beneath Your Feet.
      </h1>
      <h1 className="hero__title hero__title--m only-m">
        <span>Uncover</span>
        <span className="hero__title-line2"><em>The Art</em></span>
        <span>Beneath</span>
        <span>Your Feet.</span>
      </h1>

      <div className="hero__dots" role="presentation">
        <span className="is-active" />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero__chevrons" role="presentation">
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
      </div>
    </section>
  );
}
