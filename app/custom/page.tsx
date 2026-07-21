import './custom.css';
import Hero from '@/components/custom/Hero';
import Intro from '@/components/custom/Intro';
import Choose from '@/components/custom/Choose';
import Journey from '@/components/custom/Journey';
import Author from '@/components/custom/Author';
import Believe from '@/components/custom/Believe';
import SketchBand from '@/components/custom/SketchBand';
import SiteFooterExpanded from '@/components/shared/SiteFooterExpanded';

export default function CustomPage() {
  return (
    <main className="cspage">
      <Hero />
      <Intro />
      <Choose />
      <Journey />
      <Author />
      <Believe />
      <SketchBand />
      <SiteFooterExpanded bgImage="/images/custom/footer-bg.webp" />
    </main>
  );
}
