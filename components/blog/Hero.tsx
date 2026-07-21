import MenuButton from '@/components/shared/MenuButton';

export default function Hero() {
  return (
    <section className="blhero">
      <img className="blhero__img" src="/images/blog/hero.webp" alt="Detail of a dark fringed rug on a patterned tile floor" />
      <div className="blhero__shade" />

      <MenuButton className="blhero__menu" />
      <a className="blhero__logo" href="/" aria-label="CB Hali home">
        <img className="blhero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
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

      <img className="blhero__brand" src="/images/icons/blog/icono1.png" alt="The CB Atelier" />
      <img className="blhero__chevrons" src="/images/icons/blog/icono2.png" alt="" aria-hidden="true" />
    </section>
  );
}
