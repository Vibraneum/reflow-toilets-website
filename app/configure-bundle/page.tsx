import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Configure Your ReFlow Bundle | Sanitation Solutions for Districts',
  description: 'Build your custom ReFlow sanitation package. Choose toilet units, service levels, IoT monitoring, and financing options tailored for your district needs.',
  openGraph: {
    title: 'Configure Your ReFlow Bundle | District Sanitation Solutions',
    description: 'Interactive bundle builder for district sanitation deployments. Customize units, services, and financing.',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png'],
  },
}

const bundles = [
  {
    name: 'Pilot Program',
    description: 'Start small, prove the concept',
    units: '1-3 units',
    ideal: 'Testing in 1-2 locations before larger rollout',
    features: [
      'Full B-CRT specification units',
      '6-month pilot evaluation period',
      'Basic IoT monitoring dashboard',
      'Quarterly maintenance visits',
      'Performance reporting',
      'Training for local staff',
    ],
    pricing: 'Starting ₹18L/unit',
    highlight: false,
  },
  {
    name: 'District Standard',
    description: 'Full district coverage solution',
    units: '10-25 units',
    ideal: 'Complete coverage for district headquarters and major towns',
    features: [
      'Full B-CRT specification units',
      'Advanced IoT monitoring with alerts',
      'Monthly maintenance + emergency response',
      'Dedicated district dashboard',
      'Quarterly performance reviews',
      'Staff training program',
      'Spare parts inventory',
      'SLA-backed 99.2% uptime guarantee',
    ],
    pricing: 'Starting ₹15L/unit',
    highlight: true,
  },
  {
    name: 'Municipal Scale',
    description: 'City-wide transformation',
    units: '50+ units',
    ideal: 'Municipal corporations and large urban areas',
    features: [
      'Full B-CRT specification units',
      'Enterprise IoT platform integration',
      'Weekly maintenance + 2-hour emergency response',
      'Real-time analytics dashboard',
      'Monthly performance reviews',
      'Comprehensive staff training',
      'On-site spare parts depot',
      'Dedicated account manager',
      'Custom branding options',
      'Revenue sharing opportunities',
    ],
    pricing: 'Custom pricing',
    highlight: false,
  },
]

const addOns = [
  {
    name: 'Solar Power Upgrade',
    description: 'Enhanced solar capacity for extended autonomy during monsoon',
    icon: '☀️',
  },
  {
    name: 'Accessibility Package',
    description: 'Additional ADA features, wheelchair ramps, and emergency systems',
    icon: '♿',
  },
  {
    name: 'Women Safety Module',
    description: 'Panic buttons, CCTV integration, and direct police connectivity',
    icon: '🛡️',
  },
  {
    name: 'Revenue Collection System',
    description: 'Automated payment kiosk with UPI, card, and cash collection',
    icon: '💳',
  },
  {
    name: 'Branding & Signage',
    description: 'Custom exterior design, district branding, and wayfinding signage',
    icon: '🎨',
  },
  {
    name: 'Water ATM Integration',
    description: 'Purified drinking water dispensing from treated water output',
    icon: '💧',
  },
]

const financingOptions = [
  {
    name: 'Outright Purchase',
    description: 'Full ownership from day one',
    details: 'Complete asset ownership with standard warranty and maintenance contracts',
    icon: '🏢',
  },
  {
    name: 'PPP Model',
    description: 'Public-Private Partnership',
    details: 'District provides land, ReFlow invests in infrastructure. Revenue sharing model for 10-15 years.',
    icon: '🤝',
  },
  {
    name: 'Lease-to-Own',
    description: 'Pay over time, own at the end',
    details: '5-7 year lease with ownership transfer. Includes maintenance and monitoring throughout.',
    icon: '📅',
  },
  {
    name: 'Grant-Supported',
    description: 'Leverage government schemes',
    details: 'We help navigate SBM 2.0, CSR funding, and state sanitation grants to reduce upfront costs.',
    icon: '🏛️',
  },
]

const governmentSchemes = [
  {
    name: 'Swachh Bharat Mission 2.0',
    focus: 'Urban sanitation infrastructure',
    relevance: 'B-CRT qualifies for community toilet funding under urban sanitation guidelines',
  },
  {
    name: 'AMRUT 2.0',
    focus: 'Water and sewage in 500 cities',
    relevance: 'Zero-discharge technology aligns with AMRUT water conservation mandates',
  },
  {
    name: 'Smart Cities Mission',
    focus: 'Technology-enabled urban services',
    relevance: 'IoT monitoring and data analytics meet smart city sanitation requirements',
  },
  {
    name: 'Corporate CSR',
    focus: 'Sanitation as eligible CSR activity',
    relevance: 'Public toilet installation qualifies under Schedule VII of Companies Act',
  },
]

export default function ConfigureBundlePage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Bundle Builder</span>
          <h1 className={styles.title}>Configure Your District Solution</h1>
          <p className={styles.subtitle}>
            From pilot programs to city-wide deployments — build a sanitation package that fits your scale and budget.
          </p>
        </div>
      </section>

      {/* Bundle Options */}
      <section className={styles.bundles}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Choose Your Deployment Scale</h2>
          <p className={styles.sectionIntro}>
            Select a bundle that matches your initial needs. All packages can be scaled up as you expand.
          </p>

          <div className={styles.bundleGrid}>
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className={`${styles.bundleCard} ${bundle.highlight ? styles.bundleHighlight : ''}`}
              >
                {bundle.highlight && <div className={styles.bundleBadge}>Most Popular</div>}
                <h3 className={styles.bundleName}>{bundle.name}</h3>
                <p className={styles.bundleDesc}>{bundle.description}</p>
                <div className={styles.bundleUnits}>{bundle.units}</div>
                <p className={styles.bundleIdeal}>{bundle.ideal}</p>

                <ul className={styles.bundleFeatures}>
                  {bundle.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className={styles.bundlePricing}>{bundle.pricing}</div>
                <Link href="/contact" className={styles.bundleCta}>
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className={styles.addOns}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Customize with Add-Ons</h2>
          <p className={styles.sectionIntro}>
            Enhance your deployment with optional modules tailored to your district's specific requirements.
          </p>

          <div className={styles.addOnsGrid}>
            {addOns.map((addOn, index) => (
              <div key={index} className={styles.addOnCard}>
                <span className={styles.addOnIcon}>{addOn.icon}</span>
                <h3 className={styles.addOnName}>{addOn.name}</h3>
                <p className={styles.addOnDesc}>{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className={styles.financing}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Financing Options</h2>
          <p className={styles.sectionIntro}>
            Multiple procurement and financing models to fit your budget cycle and procurement rules.
          </p>

          <div className={styles.financingGrid}>
            {financingOptions.map((option, index) => (
              <div key={index} className={styles.financingCard}>
                <span className={styles.financingIcon}>{option.icon}</span>
                <h3 className={styles.financingName}>{option.name}</h3>
                <p className={styles.financingDesc}>{option.description}</p>
                <p className={styles.financingDetails}>{option.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className={styles.schemes}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Leverage Government Schemes</h2>
          <p className={styles.sectionIntro}>
            B-CRT technology qualifies for multiple central and state government funding schemes.
          </p>

          <div className={styles.schemesGrid}>
            {governmentSchemes.map((scheme, index) => (
              <div key={index} className={styles.schemeCard}>
                <h3 className={styles.schemeName}>{scheme.name}</h3>
                <p className={styles.schemeFocus}>{scheme.focus}</p>
                <p className={styles.schemeRelevance}>{scheme.relevance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionIntro}>
            From initial consultation to deployment — here's what to expect.
          </p>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3 className={styles.processTitle}>Consultation</h3>
              <p className={styles.processText}>
                45-minute call with our team. Discuss your requirements, locations, and constraints.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3 className={styles.processTitle}>Site Assessment</h3>
              <p className={styles.processText}>
                Our engineers visit proposed locations. Assess ground conditions, access, and utilities.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3 className={styles.processTitle}>Proposal</h3>
              <p className={styles.processText}>
                Detailed proposal with specifications, pricing, timeline, and financing options.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3 className={styles.processTitle}>Manufacturing</h3>
              <p className={styles.processText}>
                8-12 week manufacturing period. Units built to your specifications at our facility.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>5</div>
              <h3 className={styles.processTitle}>Deployment</h3>
              <p className={styles.processText}>
                Transport, installation, and commissioning. Operational within 48 hours of arrival.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>6</div>
              <h3 className={styles.processTitle}>Operations</h3>
              <p className={styles.processText}>
                Ongoing maintenance, monitoring, and support. 99.2% uptime guaranteed by SLA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Package?</h2>
          <p className={styles.ctaText}>
            Schedule a 45-minute consultation with our district solutions team. We'll help you design the right bundle for your needs and budget.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Schedule Consultation
            </a>
            <Link href="/roi-calculator" className={styles.ctaButtonSecondary}>
              Calculate ROI First
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
