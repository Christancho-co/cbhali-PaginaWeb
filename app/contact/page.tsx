import './contact.css';
import Hero from '@/components/contact/Hero';
import ContactForm from '@/components/contact/ContactForm';
import Dealers from '@/components/contact/Dealers';
import SiteFooter from '@/components/shared/SiteFooter';

export default function ContactPage() {
  return (
    <main className="cnpage">
      <Hero />
      <ContactForm />
      <Dealers />
      <SiteFooter bgImage="/images/contact/footer-bg.webp" />
    </main>
  );
}
