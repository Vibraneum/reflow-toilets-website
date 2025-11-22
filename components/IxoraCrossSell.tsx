import styles from './IxoraCrossSell.module.css'

interface Service {
  id: number
  icon: React.ReactNode
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
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
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
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
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
          <div className={styles.bundleIcon}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
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
            <div className={styles.propIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4>Single Vendor Accountability</h4>
            <p>One point of contact for all infrastructure services - sanitation, security, and facility management.</p>
          </div>
          <div className={styles.valueProp}>
            <div className={styles.propIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4>Cost Optimization</h4>
            <p>Bundled pricing reduces procurement complexity and lowers total cost of ownership by 15-25%.</p>
          </div>
          <div className={styles.valueProp}>
            <div className={styles.propIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4>Unified Reporting</h4>
            <p>Consolidated dashboards for all services - track performance, compliance, and costs in one place.</p>
          </div>
        </div>

        {/* Testimonial removed as per request */}
      </div>
    </section>
  )
}
