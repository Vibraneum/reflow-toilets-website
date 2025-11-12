import Link from 'next/link'
import styles from './CrossSellCTA.module.css'

interface CrossSellCTAProps {
  brand: 'ixoragroup' | 'ixorasecurity' | 'loocafe' | 'drnf'
  context?: string
}

const brandData = {
  ixoragroup: {
    icon: '🏢',
    name: 'Ixora Group',
    tagline: 'Need Facilities Management?',
    description: 'Get 15+ years of facilities management expertise with your ReFlow deployment. We handle operations, maintenance, and cleaning—you get operational toilets from day one.',
    features: [
      'Trained facilities teams included',
      'Daily cleaning & maintenance',
      'Technical support 24/7',
      'No hiring needed'
    ],
    link: 'https://www.ixoragroup.com',
    linkText: 'Explore Ixora Group Services',
  },
  ixorasecurity: {
    icon: '🔒',
    name: 'Ixora Security',
    tagline: 'Want 24/7 Monitoring?',
    description: 'All ReFlow deployments include integrated security through Ixora Security. Real-time IoT monitoring, CCTV surveillance, and rapid emergency response—no additional contracts.',
    features: [
      '24/7 security monitoring',
      'IoT-enabled tracking',
      'Emergency response system',
      'CCTV integration'
    ],
    link: 'https://www.ixorasecurity.com',
    linkText: 'Learn About Security Integration',
  },
  loocafe: {
    icon: '☕',
    name: 'LooCafe',
    tagline: 'See It Working at Scale?',
    description: '270+ LooCafe locations across Hyderabad prove the ReFlow model works. Visit any location to see operations, community acceptance, and sustainable revenue in action.',
    features: [
      '270+ operational units',
      'Citywide coverage (Hyderabad)',
      'Proven business model',
      'Self-sustaining operations'
    ],
    link: 'https://www.loocafe.com',
    linkText: 'Visit LooCafe Network',
  },
  drnf: {
    icon: '❤️',
    name: 'Dr. Rabinder Nath Foundation',
    tagline: 'Want Social Impact Built-In?',
    description: 'Every ReFlow deployment creates community impact through DRNF. Free chai counters, job creation, education support—sanitation infrastructure becomes a catalyst for development.',
    features: [
      '116,800+ chai served',
      '70+ jobs created',
      'Education support programs',
      'Community development'
    ],
    link: 'https://www.drnf.org',
    linkText: 'Explore Social Impact Programs',
  },
}

export default function CrossSellCTA({ brand, context }: CrossSellCTAProps) {
  const data = brandData[brand]

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.icon}>{data.icon}</div>
          <div>
            <h3 className={styles.tagline}>{data.tagline}</h3>
            <div className={styles.brandName}>{data.name}</div>
          </div>
        </div>

        <p className={styles.description}>{data.description}</p>

        <ul className={styles.featuresList}>
          {data.features.map((feature, idx) => (
            <li key={idx} className={styles.feature}>
              <span className={styles.checkmark}>✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className={styles.ctaRow}>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {data.linkText} →
          </a>
          <Link href="/ecosystem" className={styles.ecosystemLink}>
            See Full Ecosystem
          </Link>
        </div>
      </div>
    </div>
  )
}
