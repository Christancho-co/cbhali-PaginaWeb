import './SiteFooterExpanded.css';

export default function SiteFooterExpanded({ bgImage }: { bgImage: string }) {
  return (
    <footer className="xfoot">
      <img className="xfoot__bg" src={bgImage} alt="" />
      <div className="xfoot__fade" />

      <div className="xfoot__inner">
        <div className="xfoot__lockup">
          <img className="xfoot__mark" src="/svg/logo-mark-white.svg" alt="" />
          <span className="xfoot__hali">HaLi</span>
          <span className="xfoot__reg">®</span>
          <span className="xfoot__tagline">CRAFTED FOR VISIONARIES</span>
        </div>
      </div>

      <div className="xfoot__panel">
        <div className="xfoot__socials">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.24.07 1.6.07 4.81 0 3.22 0 3.58-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.24.06-1.6.07-4.85.07-3.2 0-3.6 0-4.81-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.24-.07-1.6-.07-4.81 0-3.22 0-3.58.07-4.81.15-3.23 1.67-4.77 4.92-4.92C8.4 2.2 8.8 2.2 12 2.2Zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 10.56a4.16 4.16 0 1 1 0-8.32 4.16 4.16 0 0 1 0 8.32Zm6.66-10.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M13.5 21v-8h2.7l.4-3.14h-3.1V7.9c0-.9.25-1.52 1.55-1.52h1.65V3.6c-.28-.04-1.26-.12-2.4-.12-2.38 0-4 1.45-4 4.11v2.27H7.6V13h2.9v8h3Z" /></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M21.6 7.6a2.9 2.9 0 0 0-2-2.05C17.9 5.1 12 5.1 12 5.1s-5.9 0-7.6.45a2.9 2.9 0 0 0-2 2.05C2 9.3 2 12 2 12s0 2.7.4 4.4a2.9 2.9 0 0 0 2 2.05c1.7.45 7.6.45 7.6.45s5.9 0 7.6-.45a2.9 2.9 0 0 0 2-2.05c.4-1.7.4-4.4.4-4.4s0-2.7-.4-4.4ZM10 15.2V8.8L15.8 12 10 15.2Z" /></svg>
          </a>
        </div>

        <nav className="xfoot__col">
          <a href="/">Home</a>
          <a href="/collections">Collections</a>
          <a href="/custom">Custom</a>
          <a href="/contract">Contract</a>
        </nav>
        <nav className="xfoot__col xfoot__col--muted">
          <a href="/">Intro &amp; featured</a>
          <a href="/collections">Product catalog</a>
          <a href="/custom">For Professionals</a>
          <a href="/contract">From beginning to end</a>
        </nav>
        <nav className="xfoot__col">
          <a href="/about">About Us</a>
          <a href="/blog">Blog &amp; Inspiration</a>
          <a href="/contact">Contact &amp; Dealers</a>
        </nav>
        <nav className="xfoot__col xfoot__col--muted">
          <a href="/about">Our story</a>
          <a href="/blog">Blog &amp; Inspiration</a>
          <a href="/contact">Authorized preferred partners</a>
        </nav>

        <p className="xfoot__credit">
          designed by <strong>@_Pargo</strong> - Santa Marta / Colombia 2026.
        </p>
      </div>
    </footer>
  );
}
