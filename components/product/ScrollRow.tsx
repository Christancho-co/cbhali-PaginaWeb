'use client';

import { useRef } from 'react';

export default function ScrollRow({ className, children }: { className: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 260, behavior: 'smooth' });

  return (
    <div className={`${className} scrollrow`}>
      <button className="scrollrow__nav scrollrow__nav--prev" aria-label="Scroll left" onClick={() => scroll(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15,4 7,12 15,20" /></svg>
      </button>
      <div className="scrollrow__track" ref={ref}>
        {children}
      </div>
      <button className="scrollrow__nav scrollrow__nav--next" aria-label="Scroll right" onClick={() => scroll(1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9,4 17,12 9,20" /></svg>
      </button>
    </div>
  );
}
