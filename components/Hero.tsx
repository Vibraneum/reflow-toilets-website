import Image from 'next/image'
import LuxuryButton from './LuxuryButton'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.spacer} style={{ height: '16px' }}></div>

        <div className={styles.heroCard}>
          <div className={styles.heroBackground}>
            <Image
              src="/images/hero/Hero image.png"
              alt="ReFlow Toilets Hero"
              fill
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.spacer} style={{ height: '48px' }}></div>

            <h1 className={`${styles.heroTitle} slide-in-up`}>
              Government-Grade Sanitation Infrastructure for Smart Cities
            </h1>

            <p className={`${styles.heroSubtitle} slide-in-up`}>
              ISO30500-certified, zero-discharge systems. 50+ locations operating under India's 2024 WASH standards.
            </p>

            <div className={styles.spacer} style={{ height: '16px' }}></div>

            <LuxuryButton
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              variant="primary"
              size="lg"
              className={styles.heroButton}
            >
              Request Implementation Consultation
            </LuxuryButton>

            <div className={styles.spacer} style={{ height: '16px' }}></div>
          </div>
        </div>

        <div className={styles.spacer} style={{ height: '24px' }}></div>
      </div>
    </section>
  )
}

