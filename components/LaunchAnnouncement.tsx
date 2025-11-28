'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './LaunchAnnouncement.module.css'

export default function LaunchAnnouncement() {
  return (
    <div className={styles.announcement}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>Now Live</span>
            <span className={styles.pulse}></span>
          </div>
          <div className={styles.textContent}>
            <p className={styles.headline}>
              <strong>India&apos;s First Zero-Discharge Public Toilet</strong> is operational at Lumbini Park, Hyderabad
            </p>
            <p className={styles.subtext}>
              Gates Foundation India delegates witnessed the historic B-CRT Unit #1 launch
            </p>
          </div>
          <Link href="#launch-gallery" className={styles.ctaButton}>
            View Gallery
            <svg className={styles.arrow} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className={styles.imagePreview}>
          <Image
            src="/images/launch-lumbini-park/lumbini-launch-02.jpg"
            alt="B-CRT Unit at Lumbini Park"
            width={120}
            height={80}
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>
      </div>
    </div>
  )
}
