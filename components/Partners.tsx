import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import styles from './Partners.module.css'

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.spacer} style={{ height: '16px' }}></div>
        
        <p className={`${styles.partnersTitle} slide-in-up`}>
          In Collaboration With Leading Partners
        </p>
        
        <div className={styles.partnersGrid}>
          <ScrollReveal delay={0}>
            <div className={styles.partnerItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1764067931/loocafe-assets/awards/gates_foundation.png"
                alt="Gates Foundation"
                width={186}
                height={38}
                className={styles.partnerLogo}
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.partnerItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1764067931/loocafe-assets/awards/undp.png"
                alt="UNDP"
                width={100}
                height={100}
                className={styles.partnerLogo}
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.partnerItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1764067930/loocafe-assets/awards/swachh_bharat.png"
                alt="Swachh Bharat Mission"
                width={100}
                height={100}
                className={styles.partnerLogo}
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className={styles.partnerItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1764067929/loocafe-assets/awards/british_council.png"
                alt="British Council"
                width={100}
                height={100}
                className={styles.partnerLogo}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
        
        <div className={styles.spacer} style={{ height: '16px' }}></div>
      </div>
    </section>
  )
}

