'use client';

import { useSearch } from './SearchContext';

export default function SearchButton({ className }: { className: string }) {
  const { open } = useSearch();
  return (
    <button className={className} aria-label="Search" onClick={open}>
      <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
        <circle cx="20" cy="19.5" r="12" />
        <line x1="28.8" y1="28.5" x2="38" y2="38" />
      </svg>
    </button>
  );
}
