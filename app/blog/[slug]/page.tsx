import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { marked } from 'marked';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blogPosts';
import styles from './BlogPost.module.css';

// Configure marked for safe HTML rendering
marked.setOptions({
  gfm: true,
  breaks: true,
});

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  // Generate JSON-LD structured data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ReFlow Toilets',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/logos/reflow-favicon.png',
      },
    },
    keywords: post.tags.join(', '),
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.reflowtoilets.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.reflowtoilets.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.reflowtoilets.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <main className={styles.blogPost}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <Link href="/blog">Blog</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{post.category}</span>
        </nav>

        {/* Article Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.readingTime}>{post.readingTime}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.authorSection}>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>
                {post.author.name.charAt(0)}
              </div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{post.author.name}</div>
                <div className={styles.authorRole}>{post.author.role}</div>
              </div>
            </div>
            <time className={styles.publishedDate}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          {post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className={styles.featuredImage}>
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            priority
          />
          <p className={styles.imageCaption}>{post.imageAlt}</p>
        </div>

        {/* Article Content */}
        <article className={styles.content}>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content) as string }}
          />
        </article>

        {/* Share Buttons */}
        <div className={styles.shareSection}>
          <h3 className={styles.shareTitle}>Share this article</h3>
          <div className={styles.shareButtons}>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://www.reflowtoilets.com/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.reflowtoilets.com/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
            >
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.reflowtoilets.com/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
            >
              Facebook
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=https://www.reflowtoilets.com/blog/${post.slug}`}
              className={styles.shareButton}
            >
              Email
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedPosts}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className={styles.relatedCard}>
                  <Link href={`/blog/${relatedPost.slug}`} className={styles.relatedLink}>
                    <div className={styles.relatedImageWrapper}>
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.imageAlt}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.relatedContent}>
                      <span className={styles.relatedCategory}>{relatedPost.category}</span>
                      <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                      <p className={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Interested in ReFlow Technology?</h2>
            <p className={styles.ctaText}>
              Learn how our zero-discharge toilet systems can transform your sanitation infrastructure.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Contact Us
              </Link>
              <Link href="/b-crt" className={styles.ctaButtonSecondary}>
                Explore B-CRT
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3 className={styles.newsletterTitle}>Stay informed on sanitation innovation</h3>
            <p className={styles.newsletterText}>
              Subscribe to receive the latest research, case studies, and technical insights.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
