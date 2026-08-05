'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearch } from './SearchContext';
import { SEARCH_INDEX, searchSite } from '@/lib/search';
import './SiteSearchOverlay.css';

export default function SiteSearchOverlay() {
  const { isOpen, close } = useSearch();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  const results = query.trim() ? searchSite(query) : SEARCH_INDEX;

  return (
    <div className={`ssearch ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="ssearch__backdrop" onClick={close} aria-hidden="true" />

      <div className="ssearch__panel">
        <button className="ssearch__close" aria-label="Close search" onClick={close}>
          <span />
          <span />
        </button>

        <label className="ssearch__field">
          <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <circle cx="20" cy="19.5" r="12" />
            <line x1="28.8" y1="28.5" x2="38" y2="38" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </label>

        <p className="ssearch__meta">
          {results.length} result{results.length === 1 ? '' : 's'}
        </p>

        <ul className="ssearch__results">
          {results.map((r) => (
            <li key={r.href}>
              <Link href={r.href} onClick={close}>
                <span className="ssearch__eyebrow">{r.category}</span>
                <span className="ssearch__title">{r.title}</span>
              </Link>
            </li>
          ))}
          {results.length === 0 && <li className="ssearch__empty">No results for &ldquo;{query}&rdquo;</li>}
        </ul>
      </div>
    </div>
  );
}
