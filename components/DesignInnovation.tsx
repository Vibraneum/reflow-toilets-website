import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import styles from './DesignInnovation.module.css'

export default function DesignInnovation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.spacer} style={{ height: '16px' }}></div>

        <div className={styles.contentGrid}>
          <ScrollReveal delay={0}>
            <div className={styles.imageColumn}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732615/reflow-assets/units/reflow-mini.jpg"
                alt="ReFlow Toilets Design"
                width={305}
                height={458}
                className={styles.designImage}
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className={styles.textColumn}>
              <h3 className={`${styles.heading} text-h2`}>
                Design & Innovation in public toilets that's revolutionized WASH
              </h3>

              <p className={`${styles.description} text-body-lg`}>
                Designed to end open defecation, uplift streets, communities, engage employment, prevent urban waste and change the narrative around public toilets.
                <br /><br />
                ReFlow Toilets is not only self sustainable, but leaves <strong>almost no waste into the earth</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.spacer} style={{ height: '48px' }}></div>
      </div>
    </section>
  )
}

