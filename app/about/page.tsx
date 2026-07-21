import './about.css';
import Hero from '@/components/about/Hero';
import StoryBand from '@/components/about/StoryBand';
import Story from '@/components/about/Story';
import Values from '@/components/about/Values';
import Team from '@/components/about/Team';
import SiteFooterExpanded from '@/components/shared/SiteFooterExpanded';

export default function AboutPage() {
  return (
    <main className="abpage">
      <Hero />
      <StoryBand />
      <Story />
      <Values />
      <Team />
      <SiteFooterExpanded bgImage="/images/about/footer-bg.webp" />
    </main>
  );
}
