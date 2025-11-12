import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'The Ixora Ecosystem - Integrated Solutions for Smart Cities',
  description: 'Complete infrastructure solutions through the Ixora Ecosystem: ReFlow Toilets (sanitation), Ixora Group (facilities management), Ixora Security (24/7 monitoring), LooCafe (270+ locations), and DRNF (social impact).',
  keywords: ['Ixora ecosystem', 'integrated solutions', 'smart city infrastructure', 'facilities management', 'public sanitation', 'security services', 'LooCafe network'],
  openGraph: {
    title: 'The Ixora Ecosystem - Integrated Solutions for Smart Cities',
    description: 'Complete infrastructure solutions: Sanitation, Facilities Management, Security & Social Impact',
    images: ['/images/bcrt/MAIN B-CRT IMAGE.png'],
  },
}

export default function EcosystemPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.title}>The Ixora Ecosystem</h1>
          <p className={styles.subtitle}>
            Complete infrastructure solutions for smart cities—from sanitation to security, facilities management to social impact
          </p>
        </div>

        {/* Value Proposition */}
        <div className={styles.valueSection}>
          <h2 className={styles.sectionTitle}>One Ecosystem, Complete Solutions</h2>
          <p className={styles.valueText}>
            The Ixora Ecosystem brings together five specialized brands to deliver integrated infrastructure solutions.
            When you work with ReFlow, you gain access to a complete support system—facilities management, 24/7 security monitoring,
            proven deployment networks, and social impact initiatives.
          </p>
          <div className={styles.statsBanner}>
            <div className={styles.stat}>
              <div className={styles.statValue}>270+</div>
              <div className={styles.statLabel}>Active Locations</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>5</div>
              <div className={styles.statLabel}>Integrated Brands</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Operations Support</div>
            </div>
          </div>
        </div>

        {/* Ecosystem Brands */}
        <div className={styles.brandsSection}>
          <h2 className={styles.sectionTitle}>Our Integrated Brands</h2>

          {/* ReFlow Toilets */}
          <div className={styles.brandCard}>
            <div className={styles.brandHeader}>
              <div className={styles.brandIcon}>🚽</div>
              <div>
                <h3 className={styles.brandName}>ReFlow Toilets</h3>
                <p className={styles.brandTagline}>Smart Sanitation Infrastructure</p>
              </div>
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                ISO30500-compliant, zero-discharge public toilet systems. From compact ReFlow Mini units (8×8 ft)
                to advanced 40ft B-CRT containers with AI-powered management. Solar-powered, IoT-enabled, and designed
                for government-grade deployment.
              </p>
              <div className={styles.brandFeatures}>
                <div className={styles.feature}>✓ 3 Product Lines (Mini, Standard, B-CRT)</div>
                <div className={styles.feature}>✓ Gates Foundation Innovation</div>
                <div className={styles.feature}>✓ ISO30500 Certified</div>
                <div className={styles.feature}>✓ 100% Solar Powered</div>
              </div>
              <div className={styles.brandCTA}>
                <Link href="/products" className={styles.ctaButton}>View Products</Link>
                <Link href="/b-crt" className={styles.ctaButtonSecondary}>B-CRT Technology</Link>
              </div>
            </div>
          </div>

          {/* Ixora Group */}
          <div className={styles.brandCard}>
            <div className={styles.brandHeader}>
              <div className={styles.brandIcon}>🏢</div>
              <div>
                <h3 className={styles.brandName}>Ixora Group</h3>
                <p className={styles.brandTagline}>Facilities Management Excellence</p>
              </div>
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                15+ years of facilities management expertise across India. Ixora Group operates and maintains all ReFlow
                deployments, ensuring consistent quality standards. From daily cleaning to technical maintenance, we handle
                every aspect of sanitation infrastructure operations.
              </p>
              <div className={styles.brandFeatures}>
                <div className={styles.feature}>✓ 15+ Years Experience</div>
                <div className={styles.feature}>✓ Multi-Sector Expertise (Aviation, Commercial, Government)</div>
                <div className={styles.feature}>✓ ISO-Certified Operations</div>
                <div className={styles.feature}>✓ Trained Facilities Teams</div>
              </div>
              <div className={styles.brandCTA}>
                <a href="https://www.ixoragroup.com" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  Visit Ixora Group →
                </a>
              </div>
            </div>
          </div>

          {/* Ixora Security */}
          <div className={styles.brandCard}>
            <div className={styles.brandHeader}>
              <div className={styles.brandIcon}>🔒</div>
              <div>
                <h3 className={styles.brandName}>Ixora Security</h3>
                <p className={styles.brandTagline}>24/7 Monitoring & Rapid Response</p>
              </div>
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                Advanced security solutions integrated into every ReFlow deployment. Real-time IoT monitoring, CCTV surveillance,
                emergency response systems, and preventive security measures ensure safe, secure public toilet operations 24/7.
              </p>
              <div className={styles.brandFeatures}>
                <div className={styles.feature}>✓ 24/7 Security Monitoring</div>
                <div className={styles.feature}>✓ IoT Integration</div>
                <div className={styles.feature}>✓ CCTV Surveillance</div>
                <div className={styles.feature}>✓ Emergency Response</div>
              </div>
              <div className={styles.brandCTA}>
                <a href="https://www.ixorasecurity.com" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  Visit Ixora Security →
                </a>
              </div>
            </div>
          </div>

          {/* LooCafe */}
          <div className={styles.brandCard}>
            <div className={styles.brandHeader}>
              <div className={styles.brandIcon}>☕</div>
              <div>
                <h3 className={styles.brandName}>LooCafe</h3>
                <p className={styles.brandTagline}>India's Largest Public Toilet Network</p>
              </div>
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                270+ operational locations across Hyderabad—India's largest public toilet network backed by Gates Foundation
                innovation. LooCafe proves the ReFlow model at scale, demonstrating sustainable operations, circular economy
                principles, and community impact.
              </p>
              <div className={styles.brandFeatures}>
                <div className={styles.feature}>✓ 270+ Active Locations</div>
                <div className={styles.feature}>✓ Hyderabad-Wide Coverage</div>
                <div className={styles.feature}>✓ Gates Foundation Backed</div>
                <div className={styles.feature}>✓ Proven Business Model</div>
              </div>
              <div className={styles.brandCTA}>
                <a href="https://www.loocafe.com" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  Visit LooCafe →
                </a>
              </div>
            </div>
          </div>

          {/* DRNF */}
          <div className={styles.brandCard}>
            <div className={styles.brandHeader}>
              <div className={styles.brandIcon}>❤️</div>
              <div>
                <h3 className={styles.brandName}>Dr. Rabinder Nath Foundation</h3>
                <p className={styles.brandTagline}>Social Impact & Community Service</p>
              </div>
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                Founded in 2020, DRNF operates free chai counters at LooCafe locations, serving 116,800+ cups to the homeless
                and underprivileged. Our sanitation infrastructure creates employment (70+ jobs), supports education (70+ students),
                and drives environmental conservation initiatives.
              </p>
              <div className={styles.brandFeatures}>
                <div className={styles.feature}>✓ 116,800+ Chai Served</div>
                <div className={styles.feature}>✓ 70+ Jobs Created</div>
                <div className={styles.feature}>✓ 70+ Students Supported</div>
                <div className={styles.feature}>✓ Community Development</div>
              </div>
              <div className={styles.brandCTA}>
                <a href="https://www.drnf.org" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  Visit DRNF →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className={styles.integrationSection}>
          <h2 className={styles.sectionTitle}>Why the Ecosystem Matters</h2>
          <p className={styles.integrationIntro}>
            When you deploy ReFlow, you're not just getting toilets—you're getting a complete infrastructure solution
            with built-in operations, security, and social impact.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔧</div>
              <h3 className={styles.benefitTitle}>Turnkey Operations</h3>
              <p className={styles.benefitText}>
                Ixora Group handles installation, daily maintenance, cleaning, and technical support—you get operational
                toilets from day one, no hiring needed.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🛡️</div>
              <h3 className={styles.benefitTitle}>Built-in Security</h3>
              <p className={styles.benefitText}>
                Ixora Security provides 24/7 monitoring, emergency response, and preventive measures—ensuring safe public
                spaces without additional contracts.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📊</div>
              <h3 className={styles.benefitTitle}>Proven at Scale</h3>
              <p className={styles.benefitText}>
                LooCafe's 270+ locations demonstrate real-world viability—proven operations, sustainable revenue models,
                and community acceptance across diverse urban environments.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌱</div>
              <h3 className={styles.benefitTitle}>Social Impact</h3>
              <p className={styles.benefitText}>
                DRNF integration brings community benefits—job creation, education support, and social services—making
                your sanitation project a catalyst for broader development.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💰</div>
              <h3 className={styles.benefitTitle}>Risk-Free Deployment</h3>
              <p className={styles.benefitText}>
                Build-Operate-Transfer (BoT) model available—we handle capital investment, operations, and maintenance;
                you get functioning infrastructure with zero upfront cost.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3 className={styles.benefitTitle}>Single Accountability</h3>
              <p className={styles.benefitText}>
                One ecosystem, one contact point—no juggling multiple vendors for toilets, maintenance, security, and
                operations. We handle coordination internally.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study: How It Works */}
        <div className={styles.caseStudySection}>
          <h2 className={styles.sectionTitle}>How the Ecosystem Works Together</h2>
          <div className={styles.caseStudy}>
            <div className={styles.caseStudyHeader}>
              <h3 className={styles.caseStudyTitle}>Example: District-Wide Deployment in Hyderabad</h3>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>1</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>ReFlow Provides Technology</h4>
                  <p className={styles.timelineText}>
                    270 ReFlow Mini units deployed across Hyderabad footpaths. Solar-powered, IoT-enabled, zero-discharge systems.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>2</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>Ixora Group Operates</h4>
                  <p className={styles.timelineText}>
                    Trained facilities teams handle daily cleaning, maintenance, technical support, and user experience management.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>3</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>Ixora Security Monitors</h4>
                  <p className={styles.timelineText}>
                    24/7 IoT monitoring, CCTV surveillance, and rapid response to maintenance alerts ensure safety and uptime.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>4</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>LooCafe Proves Model</h4>
                  <p className={styles.timelineText}>
                    270+ locations demonstrate sustainable operations, circular economy revenue (chai sales offset costs), community acceptance.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>5</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>DRNF Creates Impact</h4>
                  <p className={styles.timelineText}>
                    70+ jobs created for local residents, 116,800+ free chai served to homeless, education support for 70+ students.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.caseStudyResults}>
              <h4 className={styles.resultsTitle}>Results:</h4>
              <ul className={styles.resultsList}>
                <li>✓ India's largest public toilet network</li>
                <li>✓ 99.9% operational uptime</li>
                <li>✓ Self-sustaining revenue model</li>
                <li>✓ Measurable social impact (jobs, education, community service)</li>
                <li>✓ Government recognition (Telangana State endorsement)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Deploy the Complete Ecosystem in Your District</h2>
          <p className={styles.ctaText}>
            Get integrated sanitation infrastructure with built-in operations, security, proven deployment model, and social impact—all from one ecosystem.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Request District Deployment Plan
            </Link>
            <Link href="/products" className={styles.ctaSecondary}>
              View Product Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
