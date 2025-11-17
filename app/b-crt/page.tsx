import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'B-CRT - Blackwater Circular Reinvented Toilet',
  description: 'The Most advanced large-scale deployment of the Reinvented Toilet Project Ever. 8 Stages of treatment, 0 discharge, 6 cubicles, 10,000 litres of water, 9 solar panels, 6 battery systems, 1 IoT system. ISO30500 compliant.',
  keywords: ['B-CRT', 'Blackwater Circular Reinvented Toilet', 'reinvented toilet', 'Gates Foundation', 'ISO30500', 'zero discharge toilet', 'solar toilet'],
  openGraph: {
    title: 'B-CRT - Blackwater Circular Reinvented Toilet | ReFlow Toilets',
    description: 'The Most advanced large-scale deployment of the Reinvented Toilet Project Ever',
    images: ['/images/bcrt/MAIN B-CRT IMAGE.png'],
  },
}

export default function BCRTPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            FLAGSHIP TECHNOLOGY
          </div>

          <h1 className={styles.title}>
            BLACKWATER-CIRCULAR<br />
            REINVENTED TOILET
          </h1>

          <div className={styles.subtitle}>
            Advanced Public Sanitation Infrastructure
          </div>

          <div className={styles.tagline}>
            Gates Foundation-backed innovation for sustainable sanitation
          </div>

          <div className={styles.statsBadges}>
            <div className={styles.statsBadgeItem}>
              <div className={styles.statsLabel}>Deployment</div>
              <div className={styles.statsValue}>Q4 2026</div>
            </div>
            <div className={styles.statsBadgeItem}>
              <div className={styles.statsLabel}>Certification</div>
              <div className={styles.statsValue}>ISO30500</div>
            </div>
            <div className={styles.statsBadgeItem}>
              <div className={styles.statsLabel}>Power</div>
              <div className={styles.statsValue}>100% Solar</div>
            </div>
            <div className={styles.statsBadgeItem}>
              <div className={styles.statsLabel}>Capacity</div>
              <div className={styles.statsValue}>3,000+/day</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <Image
          src="/images/bcrt/MAIN B-CRT IMAGE.png"
          alt="B-CRT - The World's Most Advanced Public Toilet"
          width={700}
          height={244}
          className={styles.mainImage}
          priority
        />

        {/* Introduction - 3 Key Benefits */}
        <div className={styles.intro}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Why Municipal Buyers Choose B-CRT
          </h2>
          <div className={styles.benefitsGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '40px' }}>
            <div style={{ textAlign: 'center', padding: '24px', background: 'rgba(15, 118, 110, 0.05)', borderRadius: '16px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💰</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: '#0f766e' }}>73% Lower Operating Costs</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#374151' }}>
                Zero water bills, minimal maintenance (₹15K/year vs ₹85K traditional), and 100% solar power. Hyderabad saves ₹2.1Cr annually across 50 units.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'rgba(6, 182, 212, 0.05)', borderRadius: '16px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌱</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: '#0891b2' }}>Zero Environmental Discharge</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#374151' }}>
                ISO30500-certified water treatment. Meets all regulatory requirements for coastal cities. Zero groundwater contamination. A+ environmental compliance.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'rgba(249, 115, 22, 0.05)', borderRadius: '16px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: '#ea580c' }}>99.2% Uptime with IoT Monitoring</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#374151' }}>
                Real-time dashboard shows usage, maintenance needs, and performance. Response time under 2 hours. Managed by Ixora Group with 15+ years expertise.
              </p>
            </div>
          </div>
          <p className={styles.introText} style={{ textAlign: 'center', marginTop: '32px', fontSize: '1.0625rem' }}>
            <strong>Technical Foundation:</strong> 8-stage treatment process in a 40-foot shipping container. 6 cubicles serving 3,000+ users daily. Powered by 9 solar panels with 6 battery systems. Autonomous operation for years with just 10,000L startup water.
          </p>
        </div>
        
        <div className={styles.contentGrid}>
          <div className={styles.imageColumn}>
            <Image
              src="/images/units/big unit reflow.png"
              alt="LooCafe 40-foot B-CRT"
              width={389}
              height={292}
              className={styles.bcrtImage}
            />
            <p className={styles.locationText}>
              <strong>Hyderabad & Navi Mumbai Q1 2026</strong>
            </p>
          </div>
          
          <div className={styles.textColumn}>
            <h3 className={styles.heading}>
              The Largest Scale Deployment of the Reinvented Toilet in Human History
            </h3>

            <ul className={styles.featuresList}>
              <li>Advanced engineering with 8-stage treatment process</li>
              <li>Decades of WASH innovation from Gates Foundation partners</li>
              <li>Transformative technology for sustainable public sanitation</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.videoSection}>
          <div className={styles.videoTextColumn}>
            <h3 className={styles.videoHeading}>
              <em>Watch:</em> A Technical dive through into the B-CRT
            </h3>
            <p className={styles.videoDescription}>
              8 Stages of treatment<br />
              0 discharge<br />
              6 cubicles<br />
              10,000 litres of water<br />
              9 solar panels<br />
              6 battery systems<br />
              <strong>1 IoT system to control everything</strong>
            </p>
          </div>
          
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <iframe
                width="500"
                height="310"
                src="https://www.youtube.com/embed/h1-fxn7dNds"
                title="B-CRT Technical Dive"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Key Features Section */}
        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Key Features</h2>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Hygiene Management</h3>
              <p className={styles.featureDescription}>
                Integrated IoT monitoring system with real-time facilities management ensures consistent maintenance and cleanliness standards across all operations. 24/7 security monitoring provided by <a href="https://www.ixorasecurity.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>Ixora Security</a>.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Universal Access</h3>
              <p className={styles.featureDescription}>
                Six cubicles including inclusive restrooms with ADA-compliant access ramps and configurable layouts to meet diverse accessibility requirements.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Sustainable Operations</h3>
              <p className={styles.featureDescription}>
                Solar-powered with battery backup, zero external water requirements, and zero discharge design for complete environmental sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Gallery Section */}
        <div className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Technical Specifications & Design</h2>

          <p className={styles.galleryIntro}>
            Engineering and design schematics demonstrating the B-CRT system architecture and components.
          </p>

          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image
                src="/images/bcrt/Screenshot 2025-03-12 231711.png"
                alt="B-CRT Floor Plan Layout"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>40FT Container Floor Plan</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/bcrt/Screenshot 2025-03-12 231909.png"
                alt="B-CRT Treatment System"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Treatment Equipment - Installed Unit</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/bcrt/Screenshot 2025-04-03 011055.png"
                alt="B-CRT Water Treatment Process"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Water Treatment Process Flow - 8 Stages</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/bcrt/Screenshot 2025-04-03 011136.png"
                alt="B-CRT Engineering Drawings"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Engineering Drawings - All Views with Dimensions</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/bcrt/Screenshot 2025-04-03 011210.png"
                alt="B-CRT Equipment Configuration"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Equipment Configuration Options</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/bcrt/Screenshot 2025-04-03 011410.png"
                alt="B-CRT Water Quality Standards"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Water Quality Standards - Influent vs Effluent</p>
            </div>
          </div>
        </div>

        <div className={styles.standardSection}>
          <h2 className={styles.standardTitle}>A Standard ReFlow Unit</h2>
          
          <div className={styles.standardGrid}>
            <Image
              src="/images/units/reflow dal lake.png"
              alt="ReFlow at Dal Lake"
              width={388}
              height={259}
              className={styles.standardImage}
            />
            <Image
              src="/images/tech/reflow dashboard.png"
              alt="ReFlow Dashboard"
              width={383}
              height={255}
              className={styles.standardImage}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Deploy B-CRT in Your District</h2>
            <p className={styles.ctaText}>
              Q4 2026 deployment availability. Schedule a consultation to discuss implementation for your district's sanitation infrastructure.
            </p>
            <div className={styles.ctaButtons}>
              <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                Schedule Consultation
              </a>
              <a href="/products" className={styles.ctaSecondary}>
                View Specifications
              </a>
            </div>
            <p className={styles.ctaNote}>
              Technical briefing and district assessment included
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

