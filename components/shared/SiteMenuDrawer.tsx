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

        <svg className="smenu__waves" viewBox="0 0 40 22" aria-hidden="true">
          <path
            d="M0 4c3.5-3 7-3 10.5 0s7 3 10.5 0 7-3 10.5 0M0 11c3.5-3 7-3 10.5 0s7 3 10.5 0 7-3 10.5 0M0 18c3.5-3 7-3 10.5 0s7 3 10.5 0 7-3 10.5 0"
            fill="none"
            stroke="#c0833e"
            strokeWidth="1.8"
          />
          <rect x="38" y="0" width="2" height="22" fill="#c0833e" />
        </svg>

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
