import './blog.css';
import Hero from '@/components/blog/Hero';
import PostsGrid from '@/components/blog/PostsGrid';
import NewsletterContact from '@/components/blog/NewsletterContact';
import SiteFooter from '@/components/shared/SiteFooter';

export default function BlogPage() {
  return (
    <main className="blpage">
      <Hero />
      <PostsGrid />
      <NewsletterContact />
      <SiteFooter bgImage="/images/blog/footer-bg.webp" />
    </main>
  );
}
