export default function Instagram() {
  return (
    <>
      <div className="page__bg page__bg--warm" />
      <img className="insta__stairs" src="/images/home/stairs-rug.webp" alt="CB Hali rug on curved stairs" />
      <img className="insta__waves only-d" src="/svg/icon-waves.svg" alt="" />
      <img className="insta__waves insta__waves--m only-m" src="/svg/icon-waves-mobile.svg" alt="" />
      <a className="insta__phone" href="https://www.instagram.com/cb_hali/" target="_blank" rel="noopener noreferrer" aria-label="Open CB Hali on Instagram">
        <img src="/images/home/insta-phone.webp" alt="CB Hali Instagram profile" />
      </a>
    </>
  );
}
