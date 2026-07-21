'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollRow from './ScrollRow';
import type { CollectionData, Sku } from '@/lib/products';

type Item = CollectionData & { cover: Sku };

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function ExploreMore({ all }: { all: Item[] }) {
  const [items, setItems] = useState(() => all.slice(0, 4));

  useEffect(() => {
    setItems(shuffle(all).slice(0, 4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="pmore">
      <h2>Explore more collections</h2>
      <ScrollRow className="pmore__row">
        {items.map((c) => (
          <Link key={c.slug} href={`/collections/${c.slug}/${c.cover.code}`} className="pmore__item">
            <img src={`/images/products/${c.slug}/${c.cover.code}/main.webp`} alt={c.name} />
            <span>
              {c.name} {c.number}
              {c.cover.colorName ? (
                <>
                  <br />
                  {c.cover.colorName}
                </>
              ) : null}
            </span>
          </Link>
        ))}
      </ScrollRow>
    </section>
  );
}
