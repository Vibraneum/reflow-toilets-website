import Link from 'next/link'
import styles from './TurnkeySolutionShowcase.module.css'

export default function TurnkeySolutionShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header with Trust Positioning */}
        <div className={styles.header}>
          <div className={styles.badge}>Complete Turnkey Solution</div>
          <h2 className={styles.title}>
            One Contract. Complete Accountability. Zero Coordination Hassles.
          </h2>
          <p className={styles.subtitle}>
            When you choose ReFlow, you're not just buying toilets—you're partnering with a proven ecosystem
            of specialists who've successfully deployed and operated 270+ sanitation facilities across India.
          </p>
        </div>

        {/* The Core Value Prop */}
        <div className={styles.valueSection}>
          <div className={styles.valueProp}>
            <div className={styles.valueIcon}>⚡</div>
            <div className={styles.valueContent}>
              <h3 className={styles.valueTitle}>The ReFlow Advantage</h3>
              <p className={styles.valueText}>
                Most sanitation projects fail because you need to coordinate 5+ separate vendors:
                manufacturers, operators, security, maintenance, and social impact consultants.
                <strong> We're all of them—integrated, accountable, and battle-tested.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* The Ecosystem as Proof Points */}
        <div className={styles.expertsGrid}>
          <h3 className={styles.sectionTitle}>Meet the Experts Behind Every ReFlow Deployment</h3>

          {/* ReFlow Toilets - Technology */}
          <div className={styles.expertCard}>
            <div className={styles.cardHeader}>
              <div className={styles.expertIcon}>🚽</div>
              <div className={styles.headerContent}>
                <h4 className={styles.expertName}>ReFlow Toilets</h4>
                <div className={styles.expertRole}>Technology & Manufacturing</div>
              </div>
              <div className={styles.expertBadge}>Core Product</div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.expertDescription}>
                ISO30500-certified B-CRT technology with 8-stage treatment, zero discharge, 100% solar power.
                Gates Foundation-backed innovation proven at scale.
              </p>
              <div className={styles.expertProof}>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>ISO30500 water standard compliance</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Zero discharge, 80% water savings</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>100% solar-powered off-grid operation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ixora Group - Operations */}
          <div className={styles.expertCard}>
            <div className={styles.cardHeader}>
              <div className={styles.expertIcon}>🏢</div>
              <div className={styles.headerContent}>
                <h4 className={styles.expertName}>Ixora Group</h4>
                <div className={styles.expertRole}>Operations & Facilities Management</div>
              </div>
              <div className={styles.expertBadge}>15+ Years Experience</div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.expertDescription}>
                Your dedicated facilities management partner. We operate and maintain all ReFlow installations with
                professionally trained teams, 24/7 support, and proven track record across 100+ enterprise clients.
              </p>
              <div className={styles.expertProof}>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Trained maintenance teams deployed from day one</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Daily cleaning, restocking, technical support</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>15+ years managing large-scale infrastructure</span>
                </div>
              </div>
              <a
                href="https://www.ixoragroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.expertLink}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'turnkey_ecosystem_click', {
                      partner_name: 'Ixora Group',
                      partner_role: 'Operations & Facilities Management',
                      destination_url: 'https://www.ixoragroup.com',
                      source_site: 'reflow_toilets',
                      event_category: 'turnkey_solution',
                      event_label: 'Ixora Group credentials'
                    });
                  }
                }}
              >
                View Ixora Group credentials →
              </a>
            </div>
          </div>

          {/* Ixora Security - Monitoring */}
          <div className={styles.expertCard}>
            <div className={styles.cardHeader}>
              <div className={styles.expertIcon}>🔒</div>
              <div className={styles.headerContent}>
                <h4 className={styles.expertName}>Ixora Security</h4>
                <div className={styles.expertRole}>24/7 Monitoring & Safety</div>
              </div>
              <div className={styles.expertBadge}>IoT-Enabled</div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.expertDescription}>
                Integrated security monitoring built into every ReFlow unit. Real-time IoT tracking, CCTV surveillance,
                vandalism prevention, and rapid emergency response—no separate contracts needed.
              </p>
              <div className={styles.expertProof}>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>24/7 remote monitoring with IoT sensors</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>CCTV integration and access control</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Emergency response teams on standby</span>
                </div>
              </div>
              <a
                href="https://www.ixorasecurity.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.expertLink}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'turnkey_ecosystem_click', {
                      partner_name: 'Ixora Security',
                      partner_role: '24/7 Monitoring & Safety',
                      destination_url: 'https://www.ixorasecurity.com',
                      source_site: 'reflow_toilets',
                      event_category: 'turnkey_solution',
                      event_label: 'Ixora Security capabilities'
                    });
                  }
                }}
              >
                Explore security capabilities →
              </a>
            </div>
          </div>

          {/* LooCafe - Proven Track Record */}
          <div className={styles.expertCard}>
            <div className={styles.cardHeader}>
              <div className={styles.expertIcon}>☕</div>
              <div className={styles.headerContent}>
                <h4 className={styles.expertName}>LooCafe Network</h4>
                <div className={styles.expertRole}>Proof of Concept at Scale</div>
              </div>
              <div className={styles.expertBadge}>270+ Locations</div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.expertDescription}>
                Don't take our word for it—visit any of our 270+ LooCafe locations operating across Hyderabad.
                See the same technology, operations, and security working seamlessly every single day.
              </p>
              <div className={styles.expertProof}>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>270+ facilities operational citywide</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Gates Foundation exclusive partner</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Self-sustaining business model proven</span>
                </div>
              </div>
              <a
                href="https://www.loocafe.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.expertLink}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'turnkey_ecosystem_click', {
                      partner_name: 'LooCafe Network',
                      partner_role: 'Proof of Concept at Scale',
                      destination_url: 'https://www.loocafe.com',
                      source_site: 'reflow_toilets',
                      event_category: 'turnkey_solution',
                      event_label: 'LooCafe locations'
                    });
                  }
                }}
              >
                Visit LooCafe locations →
              </a>
            </div>
          </div>

          {/* DRNF - Social Impact */}
          <div className={styles.expertCard}>
            <div className={styles.cardHeader}>
              <div className={styles.expertIcon}>❤️</div>
              <div className={styles.headerContent}>
                <h4 className={styles.expertName}>Dr. Rabinder Nath Foundation</h4>
                <div className={styles.expertRole}>Community Development & Impact</div>
              </div>
              <div className={styles.expertBadge}>Social Impact Partner</div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.expertDescription}>
                Every ReFlow deployment creates measurable social impact through DRNF. Job creation, community programs,
                and development initiatives—turn sanitation infrastructure into a catalyst for economic growth.
              </p>
              <div className={styles.expertProof}>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>70+ jobs created across operations</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Community engagement programs included</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofIcon}>✓</span>
                  <span>Education and skill development support</span>
                </div>
              </div>
              <a
                href="https://www.drnf.org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.expertLink}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'turnkey_ecosystem_click', {
                      partner_name: 'Dr. Rabinder Nath Foundation',
                      partner_role: 'Community Development & Impact',
                      destination_url: 'https://www.drnf.org',
                      source_site: 'reflow_toilets',
                      event_category: 'turnkey_solution',
                      event_label: 'DRNF social impact'
                    });
                  }
                }}
              >
                See our social impact →
              </a>
            </div>
          </div>
        </div>

        {/* The Bundle CTA - This is key! */}
        <div className={styles.bundleCTA}>
          <div className={styles.bundleContent}>
            <h3 className={styles.bundleTitle}>Ready for a Complete Turnkey Deployment?</h3>
            <p className={styles.bundleDescription}>
              Get everything in one package: ReFlow toilets + operations (Ixora Group) + security monitoring
              (Ixora Security) + proven deployment model (LooCafe) + social impact reporting (DRNF).
              <strong> One contract. One point of accountability. Zero vendor coordination.</strong>
            </p>

            <div className={styles.bundleOptions}>
              <Link href="/contact" className={styles.primaryButton}>
                Request Turnkey Proposal
              </Link>
              <Link href="/ecosystem" className={styles.secondaryButton}>
                Explore Full Ecosystem →
              </Link>
            </div>

            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🏆</span>
                <span className={styles.trustText}>Gates Foundation Partner</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span className={styles.trustText}>270+ Facilities Operating</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>📊</span>
                <span className={styles.trustText}>15+ Years Experience</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🔒</span>
                <span className={styles.trustText}>ISO-Certified Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className={styles.whySection}>
          <h3 className={styles.whyTitle}>Why Bundled Solutions Win</h3>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <div className={styles.comparisonHeader}>
                <span className={styles.comparisonIcon}>❌</span>
                <h4 className={styles.comparisonTitle}>Traditional Approach</h4>
              </div>
              <ul className={styles.comparisonList}>
                <li>5+ separate vendor contracts</li>
                <li>Endless coordination meetings</li>
                <li>Blame-shifting when things break</li>
                <li>90-180 days to full operations</li>
                <li>No single point of accountability</li>
              </ul>
            </div>

            <div className={styles.comparisonCard + ' ' + styles.highlighted}>
              <div className={styles.comparisonHeader}>
                <span className={styles.comparisonIcon}>✓</span>
                <h4 className={styles.comparisonTitle}>ReFlow Turnkey</h4>
              </div>
              <ul className={styles.comparisonList}>
                <li>One integrated ecosystem contract</li>
                <li>We handle all coordination internally</li>
                <li>Single point of accountability (us)</li>
                <li>Operational from day one of installation</li>
                <li>Proven at 270+ locations already</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
