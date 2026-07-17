export default function Catalog() {
  return (
    <>
      <img className="catalog__img" src="/images/home/catalog-drape.webp" alt="Black and white rug draped over a ledge" />
      <div className="catalog__fade" />

      <a className="catalog__btn" href="/collections">
        <span>Explore Our Catalog</span>
        <svg viewBox="0 0 33 33" fill="none" stroke="#00565e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16.5" cy="16.5" r="15.5" />
          <polyline points="13.5,9.5 21,16.5 13.5,23.5" />
        </svg>
      </a>

      <img className="catalog__frame only-d" src="/svg/frame-identity.svg" alt="" />
      <img className="catalog__frame catalog__frame--m only-m" src="/svg/frame-identity-mobile.svg" alt="" />
      <img className="catalog__badge" src="/svg/badge-oval.svg" alt="" />
    </>
  );
}
