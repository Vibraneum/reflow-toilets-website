import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Design',
  description: 'ReFlow Toilets design philosophy - Prefabricated recycled material based public toilets. Made in house with all certifications and quality standards met. ISO certificates available.',
  keywords: ['toilet design', 'prefabricated toilets', 'sustainable design', 'public toilet design', 'WASH design', 'ISO certified toilets'],
  openGraph: {
    title: 'Design - ReFlow Toilets',
    description: 'Prefabricated recycled material based public toilets with ISO certifications',
    images: ['/images/units/reflow mini.png'],
  },
}

export default function DesignPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>Design Excellence</h1>
          <p className={styles.subtitle}>
            Sustainable, innovative, and certified public toilet solutions
          </p>
        </div>
        
        <div className={styles.introSection}>
          <p className={styles.introText}>
            Our design philosophy focuses on <strong>sustainability</strong>, <strong>quality</strong>, and <strong>innovation</strong>.
            Every ReFlow toilet is engineered to meet the highest standards while contributing to a circular economy.
          </p>
          <p className={styles.introText} style={{ marginTop: '15px', fontWeight: '600' }}>
            Manufactured in-house and maintained by <a href="https://www.ixoragroup.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Ixora Group</a> facilities teams, ensuring consistent quality from production to daily operations.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.textColumn}>
            <h2 className={styles.heading}>Our Design Principles</h2>
            <ul className={styles.featuresList}>
              <li>
                <strong>Prefabricated & Recycled Materials:</strong> Our toilets are built using prefabricated recycled materials, 
                reducing waste and environmental impact while ensuring durability and quality.
              </li>
              <li>
                <strong>In-House Manufacturing & Certifications:</strong> All units are manufactured in-house with complete 
                quality control. We maintain ISO certifications and meet all quality standards for public infrastructure.
              </li>
              <li>
                <strong>Versatile Design Expertise:</strong> While specializing in public toilets, our design team has extensive 
                experience in prefabricated structures including police stations, hospitals, bus stops, and various other 
                infrastructure projects.
              </li>
            </ul>
            
            <div className={styles.certificationsSection}>
              <h3 className={styles.certTitle}>Quality Certifications</h3>
              <p className={styles.certText}>
                All ReFlow toilet designs meet international standards including ISO30500 for non-sewered sanitation systems. 
                Our manufacturing processes are certified and regularly audited to ensure consistent quality.
              </p>
            </div>
          </div>
          
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <Image
                src="/images/units/reflow mini.png"
                alt="ReFlow Toilets Design Concept - Prefabricated Public Toilet"
                width={305}
                height={458}
                className={styles.designImage}
                priority
              />
              <p className={styles.imageCaption}>
                ReFlow Toilets Design Concept - Sustainable prefabricated structure
              </p>
            </div>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>♻️</div>
            <h3 className={styles.featureTitle}>Sustainable Materials</h3>
            <p className={styles.featureText}>
              Built with recycled and eco-friendly materials, reducing environmental footprint
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏭</div>
            <h3 className={styles.featureTitle}>In-House Manufacturing</h3>
            <p className={styles.featureText}>
              Complete control over quality and production standards
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✅</div>
            <h3 className={styles.featureTitle}>ISO Certified</h3>
            <p className={styles.featureText}>
              Meeting international quality and safety standards
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏗️</div>
            <h3 className={styles.featureTitle}>Prefabricated</h3>
            <p className={styles.featureText}>
              Quick installation and deployment with modular design
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Interested in Our Design Solutions?</h2>
          <p className={styles.ctaText}>
            Contact us to learn more about our design capabilities and how we can help with your infrastructure needs.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

