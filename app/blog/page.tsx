import './blog.css';
import Hero from '@/components/blog/Hero';
import PostsGrid from '@/components/blog/PostsGrid';
import NewsletterContact from '@/components/blog/NewsletterContact';
import SiteFooterExpanded from '@/components/shared/SiteFooterExpanded';

export default function BlogPage() {
  return (
    <main className="blpage">
      <Hero />
      <PostsGrid />
      <NewsletterContact />
      <SiteFooterExpanded bgImage="/images/blog/footer-bg.webp" />
    </main>
  );
}
