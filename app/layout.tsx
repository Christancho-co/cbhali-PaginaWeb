import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CB Hali',
  description: 'Handmade rugs — CB Hali',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
