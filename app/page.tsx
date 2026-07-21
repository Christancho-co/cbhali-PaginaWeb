import './home.css';
import Hero from '@/components/home/Hero';
import Manifesto from '@/components/home/Manifesto';
import Product from '@/components/home/Product';
import Catalog from '@/components/home/Catalog';
import Statement from '@/components/home/Statement';
import Studio from '@/components/home/Studio';
import Instagram from '@/components/home/Instagram';
import Showcase from '@/components/home/Showcase';
import SiteFooterExpanded from '@/components/shared/SiteFooterExpanded';

export default function HomePage() {
  return (
    <>
      <main className="page">
        <Hero />
        <Manifesto />
        <Product />
        <Catalog />
        <Statement />
        <Studio />
        <Instagram />
        <Showcase />
      </main>
      <SiteFooterExpanded bgImage="/images/home/footer-rug.webp" />
    </>
  );
}
