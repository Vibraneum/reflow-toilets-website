'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './StickyCtaBar.module.css'

export default function StickyCtaBar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  // Don't show on contact page since it's already the CTA destination
  if (pathname === '/contact') {
    return null
  }

  return (
    <>
      {/* Desktop CTA Bar - Bottom Sticky */}
      <div className={styles.desktopBar}>
        <div className={styles.barContent}>
          <div className={styles.barLeft}>
            <div className={styles.indicator}></div>
            <div>
              <p className={styles.barTitle}>
                Ready to deploy ReFlow in your district?
              </p>
              <p className={styles.barSubtitle}>
                <strong>Limited slots:</strong> Q1 2026 deployments filling fast • Free district assessment available
              </p>
            </div>
          </div>

          <div className={styles.barRight}>
            {/* Phone Number Display */}
            <a
              href="tel:+919494330442"
              className={styles.phoneLink}
            >
              <svg className={styles.phoneIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className={styles.phoneText}>+91 94943 30442</span>
            </a>

            {/* Primary CTA Button */}
            <Link
              href="/contact"
              className={styles.ctaButton}
            >
              <span>Request District Proposal</span>
              <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Floating CTA Button - Simplified for better UX */}
      <div className={styles.mobileButton}>
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className={styles.mobileButtonMain}
          >
            <span>Get ReFlow</span>
            <svg className={styles.chevronIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        ) : (
          <div className={styles.mobileExpanded}>
            <div className={styles.mobileHeader}>
              <h3 className={styles.mobileTitle}>Quick Contact</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className={styles.mobileClose}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>


            <div className={styles.mobileActions}>
              {/* Contact Form Button */}
              <Link
                href="/contact"
                className={styles.contactButton}
                style={{ width: '100%' }}
                onClick={() => setIsExpanded(false)}
              >
                <svg className={styles.formIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className={styles.buttonText}>
                  <div className={styles.buttonTitle}>District Inquiry Form</div>
                  <div className={styles.buttonSubtitle}>Detailed request</div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}






