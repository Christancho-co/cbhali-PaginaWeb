import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import { MenuProvider } from '@/components/shared/MenuContext';
import SiteMenuDrawer from '@/components/shared/SiteMenuDrawer';
import './globals.css';

// Sustituta temporal de "The Seasons" (Adobe Fonts). Cuando exista el Web
// Project en fonts.adobe.com, añadir aquí su kit y listo: la familia
// 'the-seasons' tiene prioridad en --font-seasons (globals.css), así que
// sustituirá a Cormorant automáticamente. Ejemplo:
//   <link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css" />
const seasonsFallback = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-seasons-fallback',
});

export const metadata: Metadata = {
  title: 'CB Hali',
  description: 'Handmade rugs — CB Hali',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={seasonsFallback.variable}>
      <body>
        <MenuProvider>
          {children}
          <SiteMenuDrawer />
        </MenuProvider>
      </body>
    </html>
  );
}
