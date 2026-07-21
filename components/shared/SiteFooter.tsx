import './SiteFooter.css';

export default function SiteFooter({ bgImage }: { bgImage: string }) {
  return (
    <footer className="sfoot">
      <img className="sfoot__bg" src={bgImage} alt="" />
      <div className="sfoot__fade" />

      <div className="sfoot__inner">
        <div className="sfoot__lockup">
          <img className="sfoot__mark" src="/svg/logo-mark-white.svg" alt="" />
          <span className="sfoot__hali">HaLi</span>
          <span className="sfoot__reg">®</span>
          <span className="sfoot__tagline">CRAFTED FOR VISIONARIES</span>
        </div>

        <div className="sfoot__row">
          <nav className="sfoot__nav">
            <a href="/">Home</a>
            <a href="/collections">Collections</a>
            <a href="/custom">Custom</a>
            <a href="/contract">Contract</a>
          </nav>
          <nav className="sfoot__nav">
            <a href="/about">About Us</a>
            <a href="/blog">Blog &amp; Inspiration</a>
            <a href="/contact">Contact &amp; Dealers</a>
          </nav>
          <img className="sfoot__social" src="/svg/icons-social.svg" alt="YouTube, LinkedIn, Instagram and Facebook" />
        </div>

        <div className="sfoot__bottom">
          <p className="sfoot__legal">
            Product catalog - Terms &amp; Conditions - Comercial Terms - Care &amp; maintenance -
            Partner Program
          </p>
          <p className="sfoot__credit">
            designed by <strong>@_Pargo</strong> - Santa Marta / Colombia 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
