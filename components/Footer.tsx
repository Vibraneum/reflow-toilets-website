import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to transform your district?</h2>
          <p className={styles.ctaText}>
            Deploy advanced sanitation infrastructure with zero upfront cost through our Build-Operate-Transfer model.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Schedule a Call
            </a>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.companySection}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/logos/reflow-toilets-logo.png"
              alt="ReFlow Toilets Logo"
              width={120}
              height={120}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              India's most advanced public toilet system. Solar-powered. Zero discharge. ISO30500 compliant.
            </p>
            <div className={styles.contact}>
              <p className={styles.contactLabel}>Contact</p>
              <a href="tel:+919494330442" className={styles.phone}>+91 9494330442</a>
              <p className={styles.hours}>10am–5pm, Mon–Fri</p>
            </div>
          </div>

          {/* Technology */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Technology</h3>
            <Link href="/b-crt" className={styles.link}>B-CRT Technology</Link>
            <Link href="/tech" className={styles.link}>Technical Specs</Link>
            <Link href="/innovation" className={styles.link}>Innovation</Link>
            <Link href="/design" className={styles.link}>Design Solutions</Link>
            <Link href="/products" className={styles.link}>Products</Link>
            <Link href="/compare" className={styles.link}>Compare Options</Link>
          </div>

          {/* Solutions */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Solutions</h3>
            <Link href="/government-framework" className={styles.link}>Decision Framework</Link>
            <Link href="/roi-calculator" className={styles.link}>ROI Calculator</Link>
            <Link href="/configure-bundle" className={styles.link}>Configure Bundle</Link>
            <Link href="/partners" className={styles.link}>Partner Program</Link>
            <Link href="/configure" className={styles.link}>Custom Configuration</Link>
          </div>

          {/* Resources */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Resources</h3>
            <Link href="/knowledge" className={styles.link}>Knowledge Hub</Link>
            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/events" className={styles.link}>Events & Milestones</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
            <Link href="/hiring" className={styles.link}>Careers</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          {/* Ecosystem */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Ixora Ecosystem</h3>
            <a
              href="https://www.ixoragroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ixora Group →
            </a>
            <a
              href="https://www.loocafe.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LooCafe →
            </a>
            <a
              href="https://www.ixorasecurity.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ixora Security →
            </a>
            <a
              href="https://drnf.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              DRNF Foundation →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              © 2025 iRise Toilets Pvt. Ltd. All rights reserved.
            </p>
            <Link href="/tos" className={styles.legal}>Terms of Service</Link>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/company/reflow-toilets"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://twitter.com/reflowtoilets"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X/Twitter
            </a>
            <a
              href="https://www.youtube.com/@reflowtoilets"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
