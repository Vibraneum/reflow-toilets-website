'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './TrustBadges.module.css'

interface Badge {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  details: string
  color: string
}

const badges: Badge[] = [
  {
    id: 'gates',
    title: 'Gates Foundation',
    subtitle: 'Reinvented Toilet Challenge',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    details: 'Part of the $1 billion Reinvent the Toilet Challenge. Contributing to the global mission to transform sanitation for billions of people.',
    color: '#FF6B35'
  },
  {
    id: 'iso',
    title: 'ISO30500 Certified',
    subtitle: 'International Water Quality Standard',
    icon: (
      <div style={{ width: '40px', height: '40px', position: 'relative' }}>
        <Image
          src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732620/reflow-assets/logos/iso.jpg"
          alt="ISO 30500"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    details: 'Output water meets ISO30500 standards - almost drinking water quality. Independently tested and verified for safety and compliance.',
    color: '#4ECDC4'
  },
  {
    id: 'gazette',
    title: 'Gazette Compliant',
    subtitle: '50 Government-Approved Locations',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    details: 'Full compliance with Government of India Gazette CG DL-E-08102024-257748. Operating 50 locations under Liquid Waste Management Rules 2024.',
    color: '#FFB84D'
  },
  {
    id: 'telangana',
    title: 'Telangana Rising',
    subtitle: 'Government Partner',
    icon: (
      <div style={{ width: '40px', height: '40px', position: 'relative' }}>
        <Image
          src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732622/reflow-assets/logos/telangana.png"
          alt="Telangana Government"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    details: 'Official partnership with Telangana Rising initiative. Supporting state government infrastructure modernization programs.',
    color: '#9B59B6'
  },
  {
    id: 'wash',
    title: 'WASH Innovation Hub',
    subtitle: 'Global Innovation Network',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: 'Member of the Water, Sanitation and Hygiene (WASH) Innovation Hub, connecting with global sanitation technology leaders.',
    color: '#3498DB'
  },
]

export default function TrustBadges() {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null)

  return (
    <section className={styles.trustBadges}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Trusted by Governments & Global Leaders</h2>
          <p className={styles.subtitle}>
            Certified, compliant, and recognized for excellence in sanitation infrastructure
          </p>
        </div>

        <div className={styles.badgesGrid}>
          {badges.map((badge, index) => (
            <div
              key={badge.id}
              className={`${styles.badgeCard} ${styles[`badge-${index}`]}`}
              onClick={() => setSelectedBadge(badge.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedBadge(badge.id)
                }
              }}
            >
              <div className={styles.badgeIcon} style={{ color: badge.color }}>
                {badge.icon}
              </div>
              <div className={styles.badgeContent}>
                <h3 className={styles.badgeTitle}>{badge.title}</h3>
                <p className={styles.badgeSubtitle}>{badge.subtitle}</p>
              </div>
              <div className={styles.learnMore}>Learn More →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for badge details */}
      {selectedBadge && (
        <div
          className={styles.modal}
          onClick={() => setSelectedBadge(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedBadge(null)}
              aria-label="Close"
            >
              ×
            </button>
            {badges
              .filter((b) => b.id === selectedBadge)
              .map((badge) => (
                <div key={badge.id} className={styles.modalBody}>
                  <div className={styles.modalIcon} style={{ color: badge.color }}>
                    {badge.icon}
                  </div>
                  <h3 className={styles.modalTitle}>{badge.title}</h3>
                  <p className={styles.modalSubtitle}>{badge.subtitle}</p>
                  <p className={styles.modalDetails}>{badge.details}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  )
}
