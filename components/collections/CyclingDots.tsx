'use client';

import { useEffect, useState } from 'react';

export default function CyclingDots({ count = 5, intervalMs = 1600 }: { count?: number; intervalMs?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  return (
    <div className="chero__dots" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={i === active ? 'is-active' : ''} />
      ))}
    </div>
  );
}
