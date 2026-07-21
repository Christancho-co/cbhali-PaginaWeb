export default function Hero() {
  return (
    <section className="abhero">
      <img className="abhero__img" src="/images/about/hero.webp" alt="Hands working with wool yarn, black and white" />
      <div className="abhero__shade" />

      <button className="abhero__menu" aria-label="Open menu"><span /><span /><span /></button>
      <a className="abhero__logo" href="/" aria-label="CB Hali home">
        <img className="abhero__logo-mark" src="/svg/logo-mark.svg" alt="" />
        <span className="abhero__logo-text">HaLi</span>
      </a>
      <button className="abhero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" /><line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <p className="abhero__mark">CB</p>
      <h1 className="abhero__title">About Us</h1>
    </section>
  );
}
