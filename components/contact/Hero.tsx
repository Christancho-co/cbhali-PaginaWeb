export default function Hero() {
  return (
    <section className="cnhero">
      <img className="cnhero__img" src="/images/contact/hero.webp" alt="Ivy growing on a terracotta brick wall" />
      <div className="cnhero__shade" />

      <button className="cnhero__menu" aria-label="Open menu"><span /><span /><span /></button>
      <a className="cnhero__logo" href="/" aria-label="CB Hali home">
        <img className="cnhero__logo-mark" src="/svg/logo-mark.svg" alt="" />
        <span className="cnhero__logo-text">HaLi</span>
      </a>
      <button className="cnhero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" /><line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="cnhero__title">Contact &amp; Dealers</h1>
      <span className="cnhero__globe" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none" stroke="#fff" strokeWidth="1.2">
          <circle cx="30" cy="30" r="28" />
          <ellipse cx="30" cy="30" rx="12" ry="28" />
          <path d="M2 30h56M6 16h48M6 44h48" />
        </svg>
      </span>
      <div className="cnhero__chevrons" aria-hidden="true">
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
      </div>
    </section>
  );
}
