import styles from './IxoraCrossSell.module.css'

interface Service {
  id: number
  icon: string
  title: string
  description: string
  benefits: string[]
  cta: {
    text: string
    link: string
  }
}

const services: Service[] = [
  {
    id: 1,
    icon: '🛡️',
    title: 'Ixora Security Services',
    description: 'Protect your sanitation infrastructure investment with professional 24/7 security monitoring and access control.',
    benefits: [
      'CCTV surveillance integration',
      'Access control systems',
      '24/7 monitoring and response',
      'Vandalism prevention',
    ],
    cta: {
      text: 'Explore Security Solutions',
      link: 'https://ixorasecurity.com',
    },
  },
  {
    id: 2,
    icon: '🔧',
    title: 'Ixora Facility Management',
    description: 'Comprehensive facility management for your entire public infrastructure - not just sanitation.',
    benefits: [
      'Multi-site maintenance coordination',
      'Cleaning and housekeeping',
      'Technical services (HVAC, electrical)',
      'Integrated vendor management',
    ],
    cta: {
      text: 'Learn About Facility Services',
      link: 'https://ixoragroup.com',
    },
  },
]

export default function IxoraCrossSell() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Complete Infrastructure Solutions</span>
          <h2 className={styles.title}>
            Maximize Your Infrastructure Investment
          </h2>
          <p className={styles.subtitle}>
            Beyond sanitation: Ixora Group offers integrated security and facility management
            services to protect and optimize your entire public infrastructure ecosystem.
          </p>
        </div>

        <div className={styles.bundleHighlight}>
          <div className={styles.bundleIcon}>📦</div>
          <div className={styles.bundleContent}>
            <h3>Bundled Infrastructure Package</h3>
            <p>
              Deploy ReFlow toilets + Ixora Security + Facility Management together
              and save <strong>15-25%</strong> on total infrastructure costs.
            </p>
          </div>
          <div className={styles.bundleCta}>
            <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" className={styles.bundleButton}>
              Request Bundle Quote
            </a>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.benefits}>
                <h4>Key Benefits:</h4>
                <ul>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className={styles.checkIcon}>✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={service.cta.link} className={styles.serviceCta} target="_blank" rel="noopener noreferrer">
                {service.cta.text}
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.valueProps}>
          <div className={styles.valueProp}>
            <div className={styles.propIcon}>🤝</div>
            <h4>Single Vendor Accountability</h4>
            <p>One point of contact for all infrastructure services - sanitation, security, and facility management.</p>
          </div>
          <div className={styles.valueProp}>
            <div className={styles.propIcon}>💰</div>
            <h4>Cost Optimization</h4>
            <p>Bundled pricing reduces procurement complexity and lowers total cost of ownership by 15-25%.</p>
          </div>
          <div className={styles.valueProp}>
            <div className={styles.propIcon}>📊</div>
            <h4>Unified Reporting</h4>
            <p>Consolidated dashboards for all services - track performance, compliance, and costs in one place.</p>
          </div>
        </div>

        <div className={styles.testimonial}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quote}>
            Partnering with Ixora Group for our entire infrastructure stack simplified procurement
            and reduced administrative overhead by 40%. Their integrated approach means fewer vendor
            meetings and faster issue resolution.
          </p>
          <div className={styles.author}>
            <p className={styles.authorName}>— Municipal Commissioner</p>
            <p className={styles.authorTitle}>Tier-1 Metropolitan Corporation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
