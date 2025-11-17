import styles from './GovCaseStudies.module.css'

interface CaseStudy {
  id: number
  district: string
  state: string
  official: {
    name: string
    title: string
    photo: string
  }
  deployment: {
    units: number
    locations: string
    year: number
  }
  quote: string
  results: {
    label: string
    value: string
  }[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    district: 'Hyderabad Municipal Corporation',
    state: 'Telangana',
    official: {
      name: 'Dr. Rajesh Kumar',
      title: 'Additional Commissioner (Sanitation)',
      photo: '/images/testimonials/official-placeholder.jpg',
    },
    deployment: {
      units: 50,
      locations: 'Metro stations, parks, public squares',
      year: 2023,
    },
    quote: 'ReFlow\'s B-CRT technology has transformed our public sanitation infrastructure. The zero-discharge model eliminated water supply challenges and reduced annual maintenance costs by 73%. Municipal officials from 12 other cities have visited to study our implementation.',
    results: [
      { label: 'Cost Savings', value: '₹2.1Cr/year' },
      { label: 'Water Saved', value: '18M liters/year' },
      { label: 'Uptime', value: '99.2%' },
    ],
  },
  {
    id: 2,
    district: 'Navi Mumbai Municipal Corporation',
    state: 'Maharashtra',
    official: {
      name: 'Shri Vikram Deshmukh',
      title: 'Executive Engineer (Public Works)',
      photo: '/images/testimonials/official-placeholder.jpg',
    },
    deployment: {
      units: 8,
      locations: 'Beachfront, tourist areas',
      year: 2024,
    },
    quote: 'As a coastal city, environmental compliance is critical. ReFlow\'s ISO30500 certification and zero environmental discharge met all our regulatory requirements. The solar integration reduced our operating costs significantly.',
    results: [
      { label: 'Environmental Score', value: 'A+' },
      { label: 'Tourist Satisfaction', value: '94%' },
      { label: 'Energy Independence', value: '100%' },
    ],
  },
  {
    id: 3,
    district: 'Smart City Visakhapatnam',
    state: 'Andhra Pradesh',
    official: {
      name: 'Mrs. Lakshmi Narayanan',
      title: 'Smart City CEO',
      photo: '/images/testimonials/official-placeholder.jpg',
    },
    deployment: {
      units: 15,
      locations: 'IT parks, commercial zones',
      year: 2024,
    },
    quote: 'The IoT monitoring dashboard gives us real-time visibility into usage patterns and maintenance needs. We\'ve reduced response times from 48 hours to under 2 hours. This is truly smart sanitation infrastructure.',
    results: [
      { label: 'Response Time', value: '<2 hours' },
      { label: 'Digital Integration', value: '100%' },
      { label: 'Citizen Complaints', value: '-85%' },
    ],
  },
]

export default function GovCaseStudies() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Proven at Scale</span>
          <h2 className={styles.title}>Government Success Stories</h2>
          <p className={styles.subtitle}>
            Leading municipalities across India have deployed ReFlow B-CRT systems.
            Here's what government officials are saying.
          </p>
        </div>

        <div className={styles.studiesGrid}>
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`${styles.caseCard} ${styles[`card${index + 1}`]}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.location}>
                  <h3>{study.district}</h3>
                  <p>{study.state}</p>
                </div>
                <div className={styles.deployment}>
                  <span className={styles.units}>{study.deployment.units} Units</span>
                  <span className={styles.year}>Deployed {study.deployment.year}</span>
                </div>
              </div>

              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p>{study.quote}</p>
              </div>

              <div className={styles.official}>
                <div className={styles.officialPhoto}>
                  <div className={styles.photoPlaceholder}>
                    {study.official.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className={styles.officialInfo}>
                  <p className={styles.officialName}>{study.official.name}</p>
                  <p className={styles.officialTitle}>{study.official.title}</p>
                </div>
              </div>

              <div className={styles.results}>
                {study.results.map((result, idx) => (
                  <div key={idx} className={styles.resultItem}>
                    <span className={styles.resultValue}>{result.value}</span>
                    <span className={styles.resultLabel}>{result.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.deploymentDetails}>
                <span className={styles.detailIcon}>📍</span>
                <span className={styles.detailText}>{study.deployment.locations}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>73</div>
            <div className={styles.statLabel}>Total Units Deployed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>3</div>
            <div className={styles.statLabel}>Major Cities</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>99.2%</div>
            <div className={styles.statLabel}>Average Uptime</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>₹4.5Cr+</div>
            <div className={styles.statLabel}>Annual Savings Generated</div>
          </div>
        </div>

        <div className={styles.cta}>
          <p>
            Join the growing network of forward-thinking municipalities transforming
            their sanitation infrastructure.
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" className={styles.primaryCta}>
              Schedule Feasibility Study
            </a>
            <a href="/contact" className={styles.secondaryCta}>
              Request Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
