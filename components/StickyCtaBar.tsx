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
              {/* WhatsApp Button - Primary Action */}
              <a
                href="https://wa.me/919494330442?text=Hello%2C%20I%20would%20like%20to%20discuss%20ReFlow%20Toilets%20for%20my%20district."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
                onClick={() => setIsExpanded(false)}
              >
                <svg className={styles.whatsappIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className={styles.buttonText}>
                  <div className={styles.buttonTitle}>WhatsApp Chat</div>
                  <div className={styles.buttonSubtitle}>Fastest response</div>
                </div>
              </a>

              {/* Contact Form Button */}
              <Link
                href="/contact"
                className={styles.contactButton}
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




