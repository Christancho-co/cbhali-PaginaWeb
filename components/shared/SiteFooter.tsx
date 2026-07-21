import './SiteFooter.css';

export default function SiteFooter({ bgImage }: { bgImage: string }) {
  return (
    <footer className="sfoot">
      <div className="sfoot__imgwrap">
        <img className="sfoot__rug" src={bgImage} alt="" />
        <div className="sfoot__fade" />
        <div className="sfoot__lockup">
          <img className="sfoot__banner" src="/images/brand/banner-footer.png" alt="CB HaLi — Crafted for visionaries" />
        </div>
      </div>

      <div className="sfoot__body">
        <nav className="sfoot__nav sfoot__nav--a">
          <a href="/">Home</a>
          <a href="/collections">Collections</a>
          <a href="/custom">Custom</a>
          <a href="/contract">Contract</a>
        </nav>
        <nav className="sfoot__nav sfoot__nav--b">
          <a href="/about">About Us</a>
          <a href="/blog">Blog &amp; Inspiration</a>
          <a href="/contact">Contact &amp; Dealers</a>
        </nav>
        <img className="sfoot__social" src="/svg/icons-social.svg" alt="YouTube, LinkedIn, Instagram and Facebook" />

        <img className="sfoot__mono-m" src="/svg/logo-mark-black.svg" alt="CB Hali" />
        <div className="sfoot__row-m">
          <nav className="sfoot__nav-m">
            <a href="/">Home</a>
            <a href="/collections">Collections</a>
            <a href="/custom">Custom</a>
            <a href="/contract">Contract</a>
            <a href="/about">About Us</a>
            <a href="/blog">Blog [CB Atelier]</a>
            <a href="/contact">Contact &amp; Dealers</a>
          </nav>
          <img className="sfoot__social-m" src="/svg/icons-social-mobile.svg" alt="YouTube, LinkedIn, Instagram and Facebook" />
        </div>

        <p className="sfoot__legal">
          Product catalog - Terms &amp; Conditions - Comercial Terms - Care &amp; maintenance -
          Partner Program
        </p>
        <p className="sfoot__rights">© 2026 CB HALI. All Rights Reserved.</p>
        <p className="sfoot__credit">
          designed by <strong>@_Pargo</strong> - Santa Marta / Colombia 2026.
        </p>
      </div>
    </footer>
  );
}
