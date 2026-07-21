import './contact.css';
import Hero from '@/components/contact/Hero';
import ContactForm from '@/components/contact/ContactForm';
import Dealers from '@/components/contact/Dealers';
import SiteFooterExpanded from '@/components/shared/SiteFooterExpanded';

export default function ContactPage() {
  return (
    <main className="cnpage">
      <Hero />
      <ContactForm />
      <Dealers />
      <SiteFooterExpanded bgImage="/images/contact/footer-bg.webp" />
    </main>
  );
}
