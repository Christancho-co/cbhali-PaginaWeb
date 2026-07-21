export default function Hero() {
  return (
    <section className="cthero">
      <img className="cthero__img" src="/images/contract/hero.webp" alt="Living room with a custom contract rug" />
      <div className="cthero__shade" />

      <button className="cthero__menu" aria-label="Open menu"><span /><span /><span /></button>
      <a className="cthero__logo" href="/" aria-label="CB Hali home">
        <img className="cthero__logo-mark" src="/svg/logo-mark.svg" alt="" />
        <span className="cthero__logo-text">HaLi</span>
      </a>
      <button className="cthero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" /><line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="cthero__title">CONTRACT</h1>
      <span className="cthero__doc" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none" stroke="#fff" strokeWidth="1.5">
          <rect x="10" y="6" width="34" height="46" rx="2" />
          <path d="M18 18h18M18 26h18M18 34h10" />
          <path d="M38 40l10 10M44 38l6 6" strokeLinecap="round" />
        </svg>
      </span>
      <p className="cthero__tag">[From start to finish]</p>
    </section>
  );
}
