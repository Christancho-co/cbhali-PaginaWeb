export default function Instagram() {
  return (
    <>
      <div className="page__bg page__bg--warm" />
      <img className="insta__stairs" src="/images/home/stairs-rug.webp" alt="CB Hali rug on curved stairs" />
      <img className="insta__waves only-d" src="/svg/icon-waves.svg" alt="" />
      <img className="insta__waves insta__waves--m only-m" src="/svg/icon-waves-mobile.svg" alt="" />

      {/* Capturas reales de @cb_hali que paso el cliente, apiladas:
          header de perfil arriba, grid de posts abajo. */}
      <a
        className="insta__phone"
        href="https://www.instagram.com/cb_hali/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open CB Hali on Instagram"
      >
        <div className="insta__phone__screen">
          <img className="insta__phone__shot insta__phone__shot--header" src="/images/home/insta-profile-header.webp" alt="CB Hali Instagram profile" />
          <img className="insta__phone__shot insta__phone__shot--grid" src="/images/home/insta-profile-grid.webp" alt="CB Hali Instagram posts" />
        </div>
      </a>
    </>
  );
}
