import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import styles from './KeyFeatures.module.css'

const features = [
  {
    icon: 'https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5FpxRDLjSDvc3ihAPKpmNCp9i_4.png',
    title: 'No sewage system',
    description: 'Treated on site in the ReFlow unit'
  },
  {
    icon: 'https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5Du1cJgNB30JiFirmC9IImOWg_1.png',
    title: 'Off‑Grid',
    description: 'Self‑Sustaining\nRuns entirely on-site with solar power'
  },
  {
    icon: 'https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5Ev5RyX0jIdURYfpofXqxFOuv_6.png',
    title: 'Modular & Scalable',
    description: 'Prefabricated units snap together seamlessly to expand capacity as needed.'
  },
  {
    icon: 'https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5FdBfSbAJgMj12urSK0iqcUo5_2.png',
    title: 'No water released into drainage systems',
    description: 'All waste treated on site, and reused'
  },
  {
    icon: 'https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5G0hahH5PMqH9sdReM2l1cClv_3.png',
    title: 'Circular economy system',
    description: 'All waste processed in house'
  },
  {
    icon: 'https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5G5kXKjl5msJ4DTEYwTbnRtw0_7.png',
    title: 'Revenue Generating - Self sustainable',
    description: 'With patents of the LooCafe model circular economised'
  },
  {
    icon: 'https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5Fuki6An0r8d0fe8jYcxIifTj_5.png',
    title: 'Treatment system in unit',
    description: 'No extra water required'
  }
]

export default function KeyFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} text-h2`}>Key Features of ReFlow Toilets</h2>
        
        <div className={styles.featuresGrid}>
          {features.slice(0, 4).map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={82}
                    height={82}
                  />
                </div>
                <p className={styles.featureText}>
                  <strong>{feature.title}</strong>
                  <br />
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.featuresGridSecond}>
          {features.slice(4).map((feature, index) => (
            <ScrollReveal key={index + 4} delay={index * 100}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={82}
                    height={82}
                  />
                </div>
                <p className={styles.featureText}>
                  <strong>{feature.title}</strong>
                  <br />
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

