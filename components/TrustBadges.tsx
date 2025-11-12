'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './TrustBadges.module.css'

interface Badge {
  id: string
  title: string
  subtitle: string
  icon: string
  details: string
  color: string
}

const badges: Badge[] = [
  {
    id: 'gates',
    title: 'Gates Foundation',
    subtitle: 'Reinvented Toilet Challenge',
    icon: '🏆',
    details: 'Part of the $1 billion Reinvent the Toilet Challenge. Contributing to the global mission to transform sanitation for billions of people.',
    color: '#FF6B35'
  },
  {
    id: 'iso',
    title: 'ISO30500 Certified',
    subtitle: 'International Water Quality Standard',
    icon: '✓',
    details: 'Output water meets ISO30500 standards - almost drinking water quality. Independently tested and verified for safety and compliance.',
    color: '#4ECDC4'
  },
  {
    id: 'gazette',
    title: 'Gazette Compliant',
    subtitle: '50 Government-Approved Locations',
    icon: '📜',
    details: 'Full compliance with Government of India Gazette CG DL-E-08102024-257748. Operating 50 locations under Liquid Waste Management Rules 2024.',
    color: '#FFB84D'
  },
  {
    id: 'telangana',
    title: 'Telangana Rising',
    subtitle: 'Government Partner',
    icon: '🤝',
    details: 'Official partnership with Telangana Rising initiative. Supporting state government infrastructure modernization programs.',
    color: '#9B59B6'
  },
  {
    id: 'wash',
    title: 'WASH Innovation Hub',
    subtitle: 'Global Innovation Network',
    icon: '🌍',
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
