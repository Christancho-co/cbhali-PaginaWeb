export default function Footer() {
  return (
    <footer>
      <img className="foot__rug" src="/images/home/footer-rug.webp" alt="" />
      <div className="foot__fade" />

      <div className="foot__lockup">
        <img className="foot__mark" src="/svg/logo-mark.svg" alt="" />
        <span className="foot__hali">HaLi</span>
        <span className="foot__reg">®</span>
        <span className="foot__tagline">CRAFTED FOR VISIONARIES</span>
      </div>

      <div className="page__bg page__bg--footer" />

      <nav className="foot__nav foot__nav--a">
        <a href="/">Home</a>
        <a href="/collections">Collections</a>
        <a href="/custom">Custom</a>
        <a href="/contract">Contract</a>
      </nav>
      <nav className="foot__nav foot__nav--b">
        <a href="/about">About Us</a>
        <a href="/blog">Blog &amp; Inspiration</a>
        <a href="/contact">Contact &amp; Dealers</a>
      </nav>

      <img className="foot__social" src="/svg/icons-social.svg" alt="YouTube, LinkedIn, Instagram and Facebook" />

      <p className="foot__legal">
        Product catalog - Terms &amp; Conditions - Comercial Terms - Care &amp; maintenance -
        Partner Program
      </p>
      <p className="foot__credit">
        designed by <strong>@_Pargo</strong> - Santa Marta / Colombia 2026.
      </p>
    </footer>
  );
}
