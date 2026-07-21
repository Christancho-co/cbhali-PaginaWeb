'use client';

import { useState } from 'react';

export default function Accordion({ items }: { items: { title: string; body: React.ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="paccordion">
      {items.map((item, i) => (
        <div className="paccordion__item" key={item.title}>
          <button className="paccordion__head" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.title}</span>
            <span className="paccordion__toggle">{open === i ? '–' : '+'}</span>
          </button>
          {open === i && <div className="paccordion__body">{item.body}</div>}
        </div>
      ))}
    </div>
  );
}
