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
                src="https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5Axc1dNHexVjdcakE9HdMbj6v_wash-innovation-hub-logo.jpg"
                alt="WASH Innovation Hub"
                width={79}
                height={79}
                className={styles.partnerLogo}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className={styles.partnerItem}>
              <Image
                src="https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5AzsIiHb6TQz65ECr8RBVG7q7_asci-logo.jpg"
                alt="ASCI Logo"
                width={113}
                height={113}
                className={styles.partnerLogo}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className={styles.partnerItem}>
              <Image
                src="https://api.typedream.com/v0/document/public/4201e856-7d19-451a-97b5-9ce53fe83ce2/2w5B0bt7KZh8S0A1Xj1e42yLwIq_gates-foundation-logo.png"
                alt="Gates Foundation"
                width={186}
                height={38}
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

