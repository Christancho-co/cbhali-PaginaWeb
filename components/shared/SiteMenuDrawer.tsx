'use client';

import { usePathname } from 'next/navigation';
import { useMenu } from './MenuContext';
import './SiteMenuDrawer.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/custom', label: 'Custom' },
  { href: '/contract', label: 'Contract' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog [CB Atelier]' },
  { href: '/contact', label: 'Contact & Dealers' },
];

const SWATCHES = ['#c0833e', '#e3d0bc', '#87402b', '#134d80', '#b3b3b3', '#8c9789', '#384920'];

export default function SiteMenuDrawer() {
  const { isOpen, close } = useMenu();
  const pathname = usePathname();

  return (
    <>
      <div className={`smenu__backdrop ${isOpen ? 'is-open' : ''}`} onClick={close} aria-hidden="true" />

      <aside className={`smenu__panel ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <button className="smenu__close" aria-label="Close menu" onClick={close}>
          <span />
          <span />
        </button>

        <img className="smenu__waves" src="/images/brand/menu-waves.png" alt="" aria-hidden="true" />

        <img className="smenu__mark" src="/svg/logo-mark-black.svg" alt="" />

        <nav className="smenu__nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={pathname === l.href ? 'is-current' : ''}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="smenu__swatches" aria-hidden="true">
          {SWATCHES.map((c) => (
            <span key={c} style={{ background: c }} />
          ))}
        </div>
      </aside>
    </>
  );
}
