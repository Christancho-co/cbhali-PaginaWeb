import './SiteFooter.css';

// Redes reales de CB Hali.
const SOCIALS: { label: string; href: string | null; icon: string }[] = [
  { label: 'YouTube', href: 'https://www.youtube.com/@cb_hali', icon: 'youtube' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cbhali/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/cb_hali/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/alfombras.cbrugs.1/', icon: 'facebook' },
];

function SocialLinks({ variant }: { variant: 'd' | 'm' }) {
  const prefix = variant === 'd' ? '/svg/social-' : '/svg/social-m-';
  return (
    <>
      {SOCIALS.map((s) =>
        s.href ? (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            <img src={`${prefix}${s.icon}.svg`} alt="" />
          </a>
        ) : (
          <img key={s.label} src={`${prefix}${s.icon}.svg`} alt={s.label} />
        ),
      )}
    </>
  );
}

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
        <div className="sfoot__social">
          <SocialLinks variant="d" />
        </div>

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
          <div className="sfoot__social-m">
            <SocialLinks variant="m" />
          </div>
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
