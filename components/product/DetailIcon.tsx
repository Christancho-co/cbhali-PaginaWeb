const ICONS: Record<string, JSX.Element> = {
  Softness: (
    <path d="M12 3c-4 2-7 6-7 10a7 7 0 0 0 14 0c0-2-1-3-2-3 .5 2-.5 4-2 4-2 0-3-2-3-4 0-2 1-4 0-7Z" />
  ),
  'Softness & Luster': (
    <path d="M12 3c-4 2-7 6-7 10a7 7 0 0 0 14 0c0-2-1-3-2-3 .5 2-.5 4-2 4-2 0-3-2-3-4 0-2 1-4 0-7Z" />
  ),
  Handmade: (
    <path d="M4 13c2-2 4-2 6 0l1 1M4 13l7 7c1 1 2 1 3 0l6-6c1-1 1-2 0-3l-1-1c-1-1-2-1-3 0l-3 3M9 9l3-3c1-1 2-1 3 0l1 1" />
  ),
  'Stain Resistance': <path d="M12 3 5 10a7 7 0 1 0 14 0l-7-7Zm0 15v-6m-3 3h6" />,
  Resistant: <path d="M12 3 5 10a7 7 0 1 0 14 0l-7-7Zm0 15v-6m-3 3h6" />,
  Durability: <path d="M12 3 4 6v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V6l-8-3Z" />,
  Biodegradable: (
    <path d="M5 19c8 1 12-3 13-11-8 0-12 3-13 11Zm0 0c1-4 3-6 6-7" />
  ),
  Hypoallergenic: (
    <path d="M12 3a4 4 0 0 1 4 4c0 2-1 3-2 4l3 1a3 3 0 0 1 0 6H7a3 3 0 0 1 0-6l3-1c-1-1-2-2-2-4a4 4 0 0 1 4-4Z" />
  ),
};

export default function DetailIcon({ label }: { label: string }) {
  const path = ICONS[label] ?? <circle cx="12" cy="12" r="8" />;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );
}
