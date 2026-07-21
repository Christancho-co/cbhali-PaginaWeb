'use client';

import { useEffect, useState } from 'react';
import MenuButton from '@/components/shared/MenuButton';

const SLIDES = [
  { src: '/images/home/hero-corridor-wide.webp', alt: 'CB Hali rug in a warm corridor' },
  { src: '/images/home/stairs-rug.webp', alt: 'CB Hali rug rolls on a sunlit staircase' },
  { src: '/images/home/brick-rug.webp', alt: 'CB Hali rug draped against a brick wall' },
  { src: '/images/home/catalog-drape.webp', alt: 'CB Hali rug detail draped on a chair' },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          className="hero__img"
          src={slide.src}
          alt={slide.alt}
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
      <div className="hero__navband only-m" />
      <span className="hero__spark only-d" aria-hidden="true" />
      <div className="hero__shade hero__shade--top" />
      <div className="hero__shade hero__shade--bottom" />

      <MenuButton className="hero__menu" />

      <a className="hero__logo" href="/" aria-label="CB Hali home">
        <img className="hero__logo-img" src="/images/brand/logo-banner.png" alt="CB HaLi" />
      </a>

      <button className="hero__search" aria-label="Search">
        <svg viewBox="0 0 44 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <circle cx="20" cy="19.5" r="12" />
          <line x1="28.8" y1="28.5" x2="38" y2="38" />
        </svg>
      </button>

      <h1 className="hero__title only-d">
        Uncover <em>The Art</em>
        <br />
        Beneath Your Feet.
      </h1>
      <h1 className="hero__title hero__title--m only-m">
        <span>Uncover</span>
        <span className="hero__title-line2"><em>The Art</em></span>
        <span>Beneath</span>
        <span>Your Feet.</span>
      </h1>

      <div className="hero__dots" role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-label={`Show slide ${i + 1}`}
            aria-selected={i === active}
            className={i === active ? 'is-active' : ''}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      <div className="hero__chevrons" role="presentation">
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
        <svg viewBox="0 0 60 32"><polyline points="4,4 30,26 56,4" /></svg>
      </div>
    </section>
  );
}
