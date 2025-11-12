import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Tech',
  description: 'Integrated business dashboard system with AI-powered toilet data tracking, IoT monitoring, and mobile applications for operations management. ReFlow technology platform.',
  keywords: ['IoT toilets', 'smart toilets', 'AI sanitation', 'toilet management system', 'ReFlow dashboard', 'public toilet technology'],
  openGraph: {
    title: 'Tech - ReFlow Toilets',
    description: 'Integrated business dashboard system with AI-powered toilet data tracking, IoT monitoring, and mobile applications',
    images: ['/images/tech/reflow dashboard.png'],
  },
}

export default function TechPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Tech</h1>
        
        <div className={styles.heroSection}>
          <Image
            src="/images/tech/reflow dashboard.png"
            alt="ReFlow Dashboard"
            width={1100}
            height={733}
            className={styles.heroImage}
            priority
          />
          <h2 className={styles.heroTitle}>Integrated business dashboard system</h2>
          <p className={styles.heroDescription}>
            All data, with Gemini 2.5 Flash Summaries. <strong>AI in toilets data.</strong>
          </p>
        </div>

        <div className={styles.appsSection}>
          <div className={styles.appCard}>
            <Image
              src="/images/tech/Reflow app.png"
              alt="Area Executive App"
              width={245}
              height={436}
              className={styles.appImage}
            />
            <h3 className={styles.appTitle}>Area Executive</h3>
            <p className={styles.appDescription}>
              A lean operations team of a few area executives, tracking all units across the city through a simple mobile app.
              {'>'} AI remembers, tracks & interprets daily images - while accounting for each $ damages & inefficients.
            </p>
          </div>

          <div className={styles.appCard}>
            <Image
              src="/images/tech/Reflow app 2 (1).png"
              alt="Operations Manager App"
              width={241}
              height={429}
              className={styles.appImage}
            />
            <h3 className={styles.appTitle}>Operations Manager</h3>
            <p className={styles.appDescription}>
              Integrated dashboard to show sustainability of the unit. Data gathered over years.
            </p>
          </div>

          <div className={styles.appCard}>
            <Image
              src="/images/tech/Reflow unit app (1).png"
              alt="Unit Operator App"
              width={237}
              height={421}
              className={styles.appImage}
            />
            <h3 className={styles.appTitle}>Unit Operator</h3>
            <p className={styles.appDescription}>
              Our unit partner stays on sync for operations, assets, cleanliness, storage management & technology integration. All activity documented and sustainability revenue also tracked for better growth.
            </p>
          </div>
        </div>

        <div className={styles.iotSection}>
          <div className={styles.iotImageColumn}>
            <Image
              src="/images/tech/Screenshot 2025-04-18 172042.png"
              alt="IoT Dashboard"
              width={727}
              height={485}
              className={styles.iotImage}
            />
          </div>
          <div className={styles.iotTextColumn}>
            <h2 className={styles.iotTitle}>
              <span className={styles.gradientText}>Upgradable IoT</span>
            </h2>
            <ul className={styles.iotList}>
              <li>Track Usage</li>
              <li>Maintenance</li>
              <li>Visits</li>
              <li>Locate units</li>
              <li>Daily images onto a single screen - worldwide.</li>
            </ul>
            <p style={{ marginTop: '20px', fontSize: '0.95em', lineHeight: '1.6' }}>
              Integrated with <a href="https://www.ixorasecurity.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>Ixora Security</a> for 24/7 monitoring and rapid response to maintenance alerts across all deployed units.
            </p>
          </div>
        </div>

        <div className={styles.aiSection}>
          <div className={styles.aiTextColumn}>
            <h2 className={styles.aiTitle}>
              <span className={styles.gradientTextGreen}>Integrate AI into unit status tracking</span>
            </h2>
            <p className={styles.aiDescription}>
              Understand everything there is with a particular unit.
            </p>
            <ul className={styles.aiList}>
              <li>Hold the right stakeholders accountable.</li>
              <li>Know when units open, close, perform</li>
              <li>Cleanliness score.</li>
              <li>Unit visit records historically tracked for years.</li>
            </ul>
          </div>
          <div className={styles.aiImageColumn}>
            <Image
              src="/images/tech/Screenshot 2025-04-18 172328.png"
              alt="AI Unit Status Dashboard"
              width={430}
              height={430}
              className={styles.aiImage}
            />
          </div>
        </div>

        <div className={styles.controlSection}>
          <div className={styles.controlTextColumn}>
            <h2 className={styles.controlTitle}>One screen to control the flow</h2>
            <p className={styles.controlDescription}>
              The B-CRT unit's water flow through the treatments systems can be controlled via a browser.
            </p>
            <Link href="/b-crt" className={styles.controlButton}>
              B-CRT - ReFlow
            </Link>
          </div>
          <div className={styles.controlImageColumn}>
            <Image
              src="/images/tech/wiring system.jpg"
              alt="Control Interface"
              width={214}
              height={463}
              className={styles.controlImage}
            />
          </div>
        </div>

        <div className={styles.appShowcaseSection}>
          <h2 className={styles.showcaseTitle}>
            "Revolutionizing <strong>Public Sanitation with the ReFlow App"</strong>
          </h2>
          <p className={styles.showcaseDescription}>
            Empowering hygiene and accessibility with cutting-edge technology.
            Seamlessly locate, access, and experience free, sustainable public restrooms designed for modern urban needs.
            {'>'} From real-time navigation to smart maintenance features, the LooCafe app ensures safety, cleanliness, and convenience at your fingertips.
          </p>

          <div className={styles.appShowcaseGrid}>
            <div className={styles.showcaseImageColumn}>
              <Image
                src="/images/tech/Reflow unit app (1).png"
                alt="ReFlow App Interface"
                width={228}
                height={342}
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseTextColumn}>
              <h3 className={styles.showcaseSubtitle}>Front-Facing, User interface</h3>
              <p className={styles.showcaseText}>
                <strong>"Find Nearby ReFlow Units with Ease!"</strong>
                <br />
                Discover clean and accessible public restrooms near you with our intuitive map interface. Search for ReFlow locations on the go, powered by Google Maps integration. Navigate seamlessly and enjoy hygiene at your fingertips.
              </p>
            </div>
          </div>

          <div className={styles.fourInOneSection}>
            <h1 className={styles.fourInOneTitle}>
              A <span className={styles.grayText}>4-in-1</span> Application
            </h1>
            <p className={styles.fourInOneSubtitle}>
              Complete sanitation infrastructure management - from public users to operations executives, all connected through one intelligent platform.
            </p>
            <Image
              src="/images/tech/reflow dashboard2.png"
              alt="4-in-1 Application"
              width={702}
              height={702}
              className={styles.fourInOneImage}
            />

            <div className={styles.platformGrid}>
              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>👥</div>
                <h3 className={styles.platformCardTitle}>Public User App</h3>
                <p className={styles.platformCardDescription}>
                  Locate nearby ReFlow units with real-time availability, Google Maps navigation, cleanliness ratings, and accessibility information. Free, clean, and always accessible public sanitation.
                </p>
                <ul className={styles.platformFeaturesList}>
                  <li>Real-time unit locator with GPS</li>
                  <li>Live occupancy status</li>
                  <li>Cleanliness scores & reviews</li>
                  <li>Accessibility features indicator</li>
                  <li>Report issues instantly</li>
                </ul>
              </div>

              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>🔧</div>
                <h3 className={styles.platformCardTitle}>Unit Operator App</h3>
                <p className={styles.platformCardDescription}>
                  Daily operations management for on-ground staff. Track cleaning schedules, consumables inventory, maintenance tasks, and sustainability revenue with complete activity documentation.
                </p>
                <ul className={styles.platformFeaturesList}>
                  <li>Daily checklist & task management</li>
                  <li>Photo documentation (before/after)</li>
                  <li>Consumables tracking (soap, paper)</li>
                  <li>Maintenance issue logging</li>
                  <li>Revenue tracking (ads, recycling)</li>
                </ul>
              </div>

              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>📊</div>
                <h3 className={styles.platformCardTitle}>Area Executive App</h3>
                <p className={styles.platformCardDescription}>
                  Field supervision made lean and efficient. AI-powered daily image analysis tracks all units across the district through a simple mobile interface, accounting for damages and operational efficiency.
                </p>
                <ul className={styles.platformFeaturesList}>
                  <li>Multi-unit oversight dashboard</li>
                  <li>AI image analysis & insights</li>
                  <li>Damage cost tracking</li>
                  <li>Performance metrics per unit</li>
                  <li>Team coordination & dispatch</li>
                </ul>
              </div>

              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>🎯</div>
                <h3 className={styles.platformCardTitle}>Operations Manager Dashboard</h3>
                <p className={styles.platformCardDescription}>
                  Centralized district-wide management with Gemini 2.5 Flash AI summaries. Years of historical data, sustainability metrics, and predictive analytics for strategic decision-making.
                </p>
                <ul className={styles.platformFeaturesList}>
                  <li>District-wide analytics dashboard</li>
                  <li>AI-powered summaries & predictions</li>
                  <li>Historical performance trends</li>
                  <li>Budget & sustainability tracking</li>
                  <li>Strategic planning insights</li>
                </ul>
              </div>
            </div>

            <div className={styles.platformBenefits}>
              <h3 className={styles.benefitsTitle}>Why the 4-in-1 Platform Matters for Governments</h3>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>⚡</div>
                  <h4>Operational Efficiency</h4>
                  <p>Reduce operations team size by 60% through AI-powered monitoring and lean mobile-first workflows</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>💰</div>
                  <h4>Cost Transparency</h4>
                  <p>Track every rupee spent on maintenance, damages, and consumables with automated accounting</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>📈</div>
                  <h4>Data-Driven Decisions</h4>
                  <p>Years of historical data and AI insights enable evidence-based infrastructure planning</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🌍</div>
                  <h4>Scalable Management</h4>
                  <p>Manage 1 unit or 1,000 units with the same platform - proven at 270+ <a href="https://www.loocafe.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>LooCafe</a> locations in Hyderabad</p>
                </div>
              </div>
            </div>

            <div className={styles.techStack}>
              <h3 className={styles.techStackTitle}>Technology Stack</h3>
              <div className={styles.techStackGrid}>
                <div className={styles.techStackItem}>
                  <strong>AI/ML:</strong> Google Gemini 2.5 Flash for image analysis, predictive maintenance, and automated reporting
                </div>
                <div className={styles.techStackItem}>
                  <strong>IoT Sensors:</strong> Real-time occupancy detection, water quality monitoring, solar power tracking
                </div>
                <div className={styles.techStackItem}>
                  <strong>Cloud Infrastructure:</strong> Scalable cloud deployment for worldwide access with 99.9% uptime
                </div>
                <div className={styles.techStackItem}>
                  <strong>Mobile Apps:</strong> Native iOS & Android apps for all user types with offline capability
                </div>
                <div className={styles.techStackItem}>
                  <strong>Analytics Engine:</strong> Multi-year historical data storage with advanced visualization
                </div>
                <div className={styles.techStackItem}>
                  <strong>Integration APIs:</strong> Open APIs for government systems integration and custom workflows
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              For a detailed technical demonstration and district deployment planning
            </p>
            <a
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Schedule Technical Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

