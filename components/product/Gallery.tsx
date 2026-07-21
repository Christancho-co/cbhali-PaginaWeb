'use client';

import { useState } from 'react';

export default function Gallery({ basePath, thumbCount, alt }: { basePath: string; thumbCount: number; alt: string }) {
  const images = [basePath + '/main.webp', ...Array.from({ length: thumbCount }, (_, i) => `${basePath}/thumb-${i + 1}.webp`)];
  const [active, setActive] = useState(0);

  return (
    <div className="pgallery">
      <div className="pgallery__main">
        <img src={images[active]} alt={alt} />
      </div>
      <div className="pgallery__thumbs">
        <button
          className="pgallery__nav"
          aria-label="Previous image"
          onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15,4 7,12 15,20" /></svg>
        </button>

        {images.map((src, i) => (
          <button
            key={src}
            className={`pgallery__thumb ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}

        <button
          className="pgallery__nav"
          aria-label="Next image"
          onClick={() => setActive((a) => (a + 1) % images.length)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9,4 17,12 9,20" /></svg>
        </button>
      </div>
    </div>
  );
}
