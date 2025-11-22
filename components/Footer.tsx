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
              src="/images/logos/reflow toilets png.png"
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

          {/* Products */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Products</h3>
            <Link href="/products" className={styles.link}>ReFlow Mini</Link>
            <Link href="/products" className={styles.link}>ReFlow Standard</Link>
            <Link href="/b-crt" className={styles.link}>40ft B-CRT</Link>
            <Link href="/innovation" className={styles.link}>Innovation</Link>
          </div>

          {/* Company */}
          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>Company</h3>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/design" className={styles.link}>Design</Link>
            <Link href="/tech" className={styles.link}>Technology</Link>
            <Link href="/knowledge" className={styles.link}>Knowledge Hub</Link>
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
        </div>
      </div>
    </footer>
  )
}
