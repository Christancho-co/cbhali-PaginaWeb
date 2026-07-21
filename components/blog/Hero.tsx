export default function Hero() {
  return (
    <section className="blhero">
      <img className="blhero__img" src="/images/blog/hero.webp" alt="Detail of a dark fringed rug on a patterned tile floor" />
      <div className="blhero__shade" />

      <button className="blhero__menu" aria-label="Open menu"><span /><span /><span /></button>
      <a className="blhero__logo" href="/" aria-label="CB Hali home">
        <img className="blhero__logo-mark" src="/svg/logo-mark.svg" alt="" />
        <span className="blhero__logo-text">HaLi</span>
      </a>
      <button className="blhero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" /><line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="blhero__title">
        Blog &amp;
        <br />
        Inspiration
      </h1>
      <span className="blhero__icon" aria-hidden="true">
        <svg viewBox="0 0 40 34" fill="none" stroke="#fff" strokeWidth="1.6">
          <rect x="1" y="1" width="24" height="32" rx="2" />
          <path d="M8 9h10M8 15h10M8 21h6" />
          <path d="M17 27a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
        </svg>
      </span>

      <p className="blhero__brand">
        <span className="blhero__brand-mark">CB</span> The <em>Atelier</em>
      </p>
      <div className="blhero__chevrons" aria-hidden="true">
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
      </div>
    </section>
  );
}
