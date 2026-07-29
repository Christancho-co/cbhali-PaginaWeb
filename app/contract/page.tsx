import './contract.css';
import Hero from '@/components/contract/Hero';
import QuoteBand from '@/components/contract/QuoteBand';
import WhatsappSlide from '@/components/contract/WhatsappSlide';
import Intro from '@/components/contract/Intro';
import Process from '@/components/contract/Process';
import Gallery from '@/components/contract/Gallery';
import Tagline from '@/components/contract/Tagline';
import SiteFooter from '@/components/shared/SiteFooter';

export default function ContractPage() {
  return (
    <main className="ctpage">
      <Hero />
      <div className="page-scale">
        <QuoteBand />
        <WhatsappSlide />
        <Intro />
        <Process />
        <Gallery />
        <Tagline />
      </div>
      <SiteFooter bgImage="/images/contract/footer-bg.webp" />
    </main>
  );
}
