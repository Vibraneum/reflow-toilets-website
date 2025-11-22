import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import LuxuryButton from './LuxuryButton'
import LuxuryCard from './LuxuryCard'
import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <LuxuryCard variant="elevated" hover className={styles.ctaCard}>
          <div className={styles.ctaBackground}>
            <div className={styles.ctaOverlay}></div>
          </div>
          
          <div className={styles.ctaContent}>
            <div className={styles.spacer} style={{ height: '48px' }}></div>
            
            <ScrollReveal delay={0}>
              <div className={styles.logoContainer}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/logos/reflow-toilets-logo.png"
                  alt="ReFlow Toilets Logo"
                  width={50}
                  height={50}
                  className={styles.ctaLogo}
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h2 className={`${styles.ctaTitle} text-h2`}>
                Partner with us to deploy district-wide sanitation infrastructure - <em>proven at 270+ locations.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <LuxuryButton
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                variant="primary"
                size="lg"
              >
                Schedule Infrastructure Consultation
              </LuxuryButton>
            </ScrollReveal>
            
            <div className={styles.spacer} style={{ height: '24px' }}></div>
          </div>
        </LuxuryCard>
      </div>
    </section>
  )
}

