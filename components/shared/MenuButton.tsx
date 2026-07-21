'use client';

import { useMenu } from './MenuContext';

export default function MenuButton({ className }: { className: string }) {
  const { open } = useMenu();
  return (
    <button className={className} aria-label="Open menu" onClick={open}>
      <span />
      <span />
      <span />
    </button>
  );
}
