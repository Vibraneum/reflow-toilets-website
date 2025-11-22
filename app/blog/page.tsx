import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blogPosts';
import styles from './Blog.module.css';

export const metadata: Metadata = {
  title: 'Blog - ReFlow Toilets',
  description: 'Expert insights on decentralized sanitation, water conservation, IoT-enabled toilets, and sustainable infrastructure. Technical guides, case studies, and industry analysis.',
  keywords: ['sanitation blog', 'water conservation', 'zero discharge toilets', 'IoT toilets', 'smart sanitation', 'public health'],
  openGraph: {
    title: 'ReFlow Blog - Sanitation Technology & Sustainability',
    description: 'Expert insights on decentralized sanitation, water conservation, and smart toilet technology',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <main className={styles.blogPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Insights & Research</h1>
          <p className={styles.heroSubtitle}>
            Expert perspectives on sustainable sanitation, water technology, and urban infrastructure
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Featured Post */}
            {posts.length > 0 && (
              <article className={styles.featuredPost}>
                <Link href={`/blog/${posts[0].slug}`} className={styles.featuredLink}>
                  <div className={styles.featuredImageWrapper}>
                    <div className={styles.featuredImagePlaceholder}>
                      {posts[0].category}
                    </div>
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.featuredMeta}>
                      <span className={styles.category}>{posts[0].category}</span>
                      <span className={styles.readingTime}>{posts[0].readingTime}</span>
                    </div>
                    <h2 className={styles.featuredTitle}>{posts[0].title}</h2>
                    <p className={styles.featuredExcerpt}>{posts[0].excerpt}</p>
                    <div className={styles.featuredFooter}>
                      <div className={styles.author}>
                        <div className={styles.authorAvatar}>
                          {posts[0].author.name.charAt(0)}
                        </div>
                        <div className={styles.authorInfo}>
                          <div className={styles.authorName}>{posts[0].author.name}</div>
                          <div className={styles.authorRole}>{posts[0].author.role}</div>
                        </div>
                      </div>
                      <time className={styles.date}>
                        {new Date(posts[0].publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* Blog Grid */}
            <div className={styles.blogGrid}>
              {posts.slice(1).map((post) => (
                <article key={post.slug} className={styles.blogCard}>
                  <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                    <div className={styles.cardImageWrapper}>
                      <div className={styles.cardImagePlaceholder}>
                        {post.category}
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <span className={styles.category}>{post.category}</span>
                        <span className={styles.readingTime}>{post.readingTime}</span>
                      </div>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <div className={styles.cardFooter}>
                        <div className={styles.author}>
                          <div className={styles.authorAvatar}>
                            {post.author.name.charAt(0)}
                          </div>
                          <div className={styles.authorInfo}>
                            <div className={styles.authorName}>{post.author.name}</div>
                          </div>
                        </div>
                        <time className={styles.date}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Categories */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Categories</h3>
              <div className={styles.categoryList}>
                {categories.map((category) => (
                  <button key={category} className={styles.categoryTag}>
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Topics</h3>
              <div className={styles.tagCloud}>
                {tags.map((tag) => (
                  <button key={tag} className={styles.tag}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={styles.sidebarSection}>
              <div className={styles.newsletter}>
                <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                <p className={styles.newsletterText}>
                  Get the latest insights on sustainable sanitation delivered to your inbox.
                </p>
                <form className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className={styles.newsletterInput}
                    required
                  />
                  <button type="submit" className={styles.newsletterButton}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Resources */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Resources</h3>
              <nav className={styles.resourcesList}>
                <Link href="/b-crt" className={styles.resourceLink}>
                  B-CRT Technology
                </Link>
                <Link href="/tech" className={styles.resourceLink}>
                  Technical Details
                </Link>
                <Link href="/roi" className={styles.resourceLink}>
                  ROI Calculator
                </Link>
                <Link href="/contact" className={styles.resourceLink}>
                  Contact Us
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Sanitation Infrastructure?</h2>
          <p className={styles.ctaText}>
            Schedule a consultation to discuss how ReFlow's zero-discharge systems can benefit your municipality.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButtonPrimary}>
              Get Started
            </Link>
            <a
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonSecondary}
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
