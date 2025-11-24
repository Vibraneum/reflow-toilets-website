import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Technology Platform - 4-in-1 Management System',
  description: 'Integrated sanitation infrastructure management platform. AI-powered monitoring with Google Gemini AI, IoT sensors, mobile apps for public users, operators, executives, and managers. Proven at 270+ LooCafe locations.',
  keywords: ['IoT toilets', 'smart sanitation', 'AI monitoring', 'toilet management system', 'ReFlow platform', 'public toilet technology', '4-in-1 platform', 'Google Gemini AI'],
  openGraph: {
    title: 'Technology Platform - 4-in-1 Management System | ReFlow Toilets',
    description: 'Complete sanitation infrastructure management - from public users to operations executives',
    images: ['/images/tech/reflow dashboard.png'],
  },
}

export default function TechPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.badge}>Proven at 270+ locations</div>
          <h1 className={styles.title}>4-in-1 Management Platform</h1>
          <p className={styles.subtitle}>Complete sanitation infrastructure management.</p>
          <p className={styles.description}>
            Integrated system connecting public users, unit operators, area executives, and operations managers through AI-powered monitoring and IoT sensors. Deployed at 270+ LooCafe locations in Hyderabad.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>270+</div>
              <div className={styles.statLabel}>Deployments</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>4</div>
              <div className={styles.statLabel}>User roles</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>99.9%</div>
              <div className={styles.statLabel}>Uptime</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>60%</div>
              <div className={styles.statLabel}>Team reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Image */}
      <section className={styles.dashboardImage}>
        <div className={styles.container}>
          <Image
            src="https://res.cloudinary.com/dhupieu4x/image/upload/v1732432120/reflow-assets/tech/monitoring-dashboard.png"
            alt="ReFlow operations dashboard showing real-time unit monitoring"
            width={1100}
            height={733}
            className={styles.mainImage}
            priority
          />
          <p className={styles.imageCaption}>Operations Dashboard - Real-time monitoring across all deployed units</p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className={styles.platform}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Four connected applications.</h2>
          <p className={styles.platformIntro}>
            Single platform serving four distinct user roles - from public sanitation access to district-wide operations management. All data synchronized in real-time through cloud infrastructure.
          </p>

          <div className={styles.platformGrid}>
            {/* Public User App */}
            <div className={styles.platformCard}>
              <div className={styles.platformHeader}>
                <div className={styles.platformIcon}>👥</div>
                <h3 className={styles.platformTitle}>Public User</h3>
              </div>
              <p className={styles.platformDescription}>
                Mobile app for locating and accessing ReFlow units with real-time availability status.
              </p>
              <ul className={styles.featureList}>
                <li>GPS location finder with Google Maps integration</li>
                <li>Live occupancy status (occupied/vacant)</li>
                <li>Cleanliness score (0-100 scale)</li>
                <li>Accessibility features indicator (ADA compliance)</li>
                <li>Issue reporting with photo upload</li>
                <li>Offline mode with cached location data</li>
              </ul>
              <div className={styles.techNote}>
                <strong>Tech:</strong> React Native, Google Maps API, PWA for offline access
              </div>
            </div>

            {/* Unit Operator App */}
            <div className={styles.platformCard}>
              <div className={styles.platformHeader}>
                <div className={styles.platformIcon}>🔧</div>
                <h3 className={styles.platformTitle}>Unit Operator</h3>
              </div>
              <p className={styles.platformDescription}>
                Daily operations management for on-ground staff managing individual units.
              </p>
              <ul className={styles.featureList}>
                <li>Daily checklist (8 cleaning tasks, 12 maintenance checks)</li>
                <li>Photo documentation (before/after with timestamp)</li>
                <li>Consumables inventory (soap, paper, sanitizer)</li>
                <li>Maintenance issue logging with priority levels</li>
                <li>Revenue tracking (ads, recycling, sustainability income)</li>
                <li>Shift handover notes and communication</li>
              </ul>
              <div className={styles.techNote}>
                <strong>Tech:</strong> Mobile-first PWA, offline-capable, image compression
              </div>
            </div>

            {/* Area Executive App */}
            <div className={styles.platformCard}>
              <div className={styles.platformHeader}>
                <div className={styles.platformIcon}>📊</div>
                <h3 className={styles.platformTitle}>Area Executive</h3>
              </div>
              <p className={styles.platformDescription}>
                Field supervision for managing 10-50 units across a district with AI assistance.
              </p>
              <ul className={styles.featureList}>
                <li>Multi-unit oversight dashboard (up to 50 units)</li>
                <li>AI image analysis with Google Gemini AI</li>
                <li>Damage cost tracking (automated from photos)</li>
                <li>Performance metrics per unit (uptime, cleanliness)</li>
                <li>Team coordination and task dispatch</li>
                <li>Route optimization for field visits</li>
              </ul>
              <div className={styles.techNote}>
                <strong>Tech:</strong> Google Gemini AI API, image recognition, geolocation
              </div>
            </div>

            {/* Operations Manager Dashboard */}
            <div className={styles.platformCard}>
              <div className={styles.platformHeader}>
                <div className={styles.platformIcon}>🎯</div>
                <h3 className={styles.platformTitle}>Operations Manager</h3>
              </div>
              <p className={styles.platformDescription}>
                District-wide management with AI summaries and historical analytics.
              </p>
              <ul className={styles.featureList}>
                <li>District-wide dashboard (1-1,000+ units)</li>
                <li>AI-powered daily summaries (Google Gemini AI)</li>
                <li>Multi-year historical data (3+ years stored)</li>
                <li>Budget tracking (maintenance, consumables, labor)</li>
                <li>Predictive maintenance alerts</li>
                <li>Strategic planning insights and recommendations</li>
              </ul>
              <div className={styles.techNote}>
                <strong>Tech:</strong> Cloud analytics, Gemini API, time-series database
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why ReFlow Technology?</h2>
          <p className={styles.platformIntro}>
            Comparing traditional public toilet management with the ReFlow AI-driven approach.
          </p>
          <div className={styles.tableContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Traditional Public Toilets</th>
                  <th>ReFlow Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monitoring</td>
                  <td>Manual, sporadic inspections</td>
                  <td>24/7 Real-time IoT Sensors</td>
                </tr>
                <tr>
                  <td>Maintenance Response</td>
                  <td>Reactive (days/weeks)</td>
                  <td>Proactive (&lt; 2 hours)</td>
                </tr>
                <tr>
                  <td>Cleanliness Verification</td>
                  <td>Paper checklists (unreliable)</td>
                  <td>AI Photo Analysis & Digital Logs</td>
                </tr>
                <tr>
                  <td>User Feedback</td>
                  <td>Rarely collected</td>
                  <td>In-app Reporting & Rating</td>
                </tr>
                <tr>
                  <td>Data & Analytics</td>
                  <td>None</td>
                  <td>Full Historical & Predictive Data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI & Analytics */}
      <section className={styles.aiAnalytics}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>AI-powered monitoring.</h2>

          <div className={styles.aiGrid}>
            <div className={styles.aiContent}>
              <h3 className={styles.aiSubtitle}>Google Gemini AI Integration</h3>
              <p className={styles.aiDescription}>
                Google's advanced Gemini AI model analyzes daily operational photos, generates summaries, and provides predictive insights for maintenance and performance optimization.
              </p>
              <ul className={styles.aiFeatureList}>
                <li><strong>Image Analysis:</strong> Automated cleanliness scoring (0-100 scale) from daily photos</li>
                <li><strong>Damage Detection:</strong> Identifies broken fixtures, vandalism, wear with cost estimates</li>
                <li><strong>Anomaly Alerts:</strong> Detects unusual patterns (occupancy spikes, supply shortages)</li>
                <li><strong>Daily Summaries:</strong> Natural language reports generated automatically</li>
                <li><strong>Predictive Maintenance:</strong> Forecasts equipment failures based on historical data</li>
              </ul>
            </div>
            <div className={styles.aiImage}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-dashboard2.png"
                alt="AI-powered unit status dashboard with Gemini analysis"
                width={430}
                height={430}
                className={styles.aiDashboardImage}
              />
              <p className={styles.aiImageCaption}>AI Dashboard - Gemini AI analyzes unit photos and generates actionable insights</p>
            </div>
          </div>

          <div className={styles.aiMetrics}>
            <h3 className={styles.metricsTitle}>AI Performance Impact</h3>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>95%</div>
                <div className={styles.metricLabel}>Accuracy in damage detection</div>
                <p className={styles.metricNote}>Compared to manual inspection (92% agreement with human supervisors)</p>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>4 hours</div>
                <div className={styles.metricLabel}>Saved per supervisor daily</div>
                <p className={styles.metricNote}>Automated photo analysis eliminates manual unit inspections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Infrastructure */}
      <section className={styles.iot}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>IoT sensor infrastructure.</h2>

          <div className={styles.iotGrid}>
            <div className={styles.iotImage}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-dashboard.png"
                alt="IoT sensor dashboard showing real-time data from deployed units"
                width={727}
                height={485}
                className={styles.iotDashboardImage}
              />
              <p className={styles.iotImageCaption}>IoT Dashboard - Real-time sensor data from all units worldwide</p>
            </div>
            <div className={styles.iotContent}>
              <h3 className={styles.iotSubtitle}>Real-time sensor network</h3>
              <p className={styles.iotDescription}>
                Integrated with <a href="https://www.ixorasecurity.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Ixora Security</a> for 24/7 monitoring and under 2-hour response to alerts across all deployed units.
              </p>
              <ul className={styles.iotFeatureList}>
                <li><strong>Occupancy Sensors:</strong> Infrared motion detection, real-time availability updates</li>
                <li><strong>Usage Tracking:</strong> Entry counters, duration monitoring, peak hour analysis</li>
                <li><strong>Water Quality:</strong> pH, TDS, turbidity sensors (B-CRT units)</li>
                <li><strong>Solar Power:</strong> Battery level, generation rate, consumption tracking</li>
                <li><strong>Maintenance Alerts:</strong> Low consumables, equipment failures, anomalies</li>
                <li><strong>Security Integration:</strong> 24/7 monitoring via Ixora Security platform</li>
              </ul>
              <div className={styles.iotTechSpec}>
                <strong>Connectivity:</strong> 4G LTE primary, Wi-Fi backup, offline buffer (24-hour local storage)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className={styles.architecture}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>System architecture.</h2>

          <div className={styles.architectureGrid}>
            <div className={styles.architectureCard}>
              <h3 className={styles.architectureTitle}>Cloud Infrastructure</h3>
              <ul className={styles.specsList}>
                <li>Multi-region deployment (Asia-Pacific, Europe, North America)</li>
                <li>99.9% uptime SLA with automatic failover</li>
                <li>Scalable from 1 to 10,000+ units without performance degradation</li>
                <li>Edge caching for low-latency mobile app response (&lt;200ms)</li>
                <li>Encrypted data transmission (TLS 1.3) and at-rest (AES-256)</li>
              </ul>
            </div>

            <div className={styles.architectureCard}>
              <h3 className={styles.architectureTitle}>Data Storage</h3>
              <ul className={styles.specsList}>
                <li>Time-series database for sensor data (1-minute intervals)</li>
                <li>Multi-year historical storage (3+ years, compressed)</li>
                <li>Image storage with automatic compression (WebP, 60% size reduction)</li>
                <li>Redundant backups (3 geographic regions)</li>
                <li>GDPR-compliant data handling and user privacy controls</li>
              </ul>
            </div>

            <div className={styles.architectureCard}>
              <h3 className={styles.architectureTitle}>Mobile Applications</h3>
              <ul className={styles.specsList}>
                <li>Progressive Web Apps (PWA) for iOS and Android</li>
                <li>Offline-first architecture with sync when connected</li>
                <li>Native camera integration for photo documentation</li>
                <li>Push notifications for alerts and task reminders</li>
                <li>Automatic updates (no app store delays)</li>
              </ul>
            </div>

            <div className={styles.architectureCard}>
              <h3 className={styles.architectureTitle}>Integration APIs</h3>
              <ul className={styles.specsList}>
                <li>RESTful APIs for government system integration</li>
                <li>Webhook support for real-time event notifications</li>
                <li>Custom reporting endpoints for ministry dashboards</li>
                <li>Data export (CSV, JSON, Excel) for compliance reporting</li>
                <li>Single Sign-On (SSO) support for enterprise deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & ROI */}
      <section className={styles.performance}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Proven results from real-world deployment.</h2>
          <p className={styles.performanceIntro}>
            Operational data from 270+ LooCafe locations in Hyderabad, managed by Ixora Group since 2018. The platform delivers measurable cost savings while improving service quality across all facilities.
          </p>

          <div className={styles.performanceGrid}>
            <div className={styles.performanceCard}>
              <div className={styles.performanceMetric}>60%</div>
              <h3 className={styles.performanceTitle}>Operations Team Reduction</h3>
              <p className={styles.performanceText}>
                AI monitoring enables 1 area executive to manage 50 units (previously 20). Districts reduce field staff from 15 supervisors to 6 for 300 units.
              </p>
              <div className={styles.performanceCalc}>
                <strong>Annual Savings:</strong> ₹54 lakh (9 supervisor salaries @ ₹6 lakh/year)
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceMetric}>99.9%</div>
              <h3 className={styles.performanceTitle}>Platform Uptime</h3>
              <p className={styles.performanceText}>
                Real-time IoT alerts and predictive maintenance ensure continuous availability. Issues resolved in under 2 hours via Ixora Security integration.
              </p>
              <div className={styles.performanceCalc}>
                <strong>Response Time:</strong> Average under 2 hours for critical alerts (vs. 24+ hours industry standard)
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceMetric}>3 years</div>
              <h3 className={styles.performanceTitle}>Historical Data</h3>
              <p className={styles.performanceText}>
                Platform stores 3+ years of operational data per unit. Enables trend analysis, budget forecasting, and strategic infrastructure planning.
              </p>
              <div className={styles.performanceCalc}>
                <strong>Data Points:</strong> 500K+ sensor readings per unit annually
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceMetric}>₹25K</div>
              <h3 className={styles.performanceTitle}>Annual Platform Cost</h3>
              <p className={styles.performanceText}>
                Cloud hosting, AI processing, mobile apps, and support included. ₹25K per unit annually (vs. ₹90K for manual supervision equivalent).
              </p>
              <div className={styles.performanceCalc}>
                <strong>ROI:</strong> 72% cost reduction, 8-month payback period
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B-CRT Integration */}
      <section className={styles.bcrtIntegration}>
        <div className={styles.container}>
          <div className={styles.bcrtGrid}>
            <div className={styles.bcrtContent}>
              <h2 className={styles.bcrtTitle}>B-CRT unit control</h2>
              <p className={styles.bcrtDescription}>
                B-CRT 8-stage water treatment system controlled remotely via browser interface. Operators adjust flow rates, monitor treatment stages, and manage water recycling from the operations dashboard.
              </p>
              <ul className={styles.bcrtFeatureList}>
                <li>Remote valve control for all 8 treatment stages</li>
                <li>Real-time water quality monitoring (BOD, COD, TSS, pH)</li>
                <li>Flow rate adjustment (10,000L daily capacity management)</li>
                <li>Treatment efficiency tracking and alerts</li>
                <li>Energy consumption optimization (solar power integration)</li>
              </ul>
              <Link href="/b-crt" className={styles.bcrtButton}>
                B-CRT Technical Specifications
              </Link>
            </div>
            <div className={styles.bcrtImage}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/wiring-system.jpg"
                alt="B-CRT control interface showing treatment system management"
                width={214}
                height={463}
                className={styles.bcrtControlImage}
              />
              <p className={styles.bcrtImageCaption}>B-CRT Control Interface - Remote treatment system management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={styles.techStack}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technology stack.</h2>

          <div className={styles.stackGrid}>
            <div className={styles.stackCategory}>
              <h3 className={styles.stackCategoryTitle}>AI & Machine Learning</h3>
              <ul className={styles.stackList}>
                <li><strong>Google Gemini AI:</strong> Image analysis, damage detection, daily summaries</li>
                <li><strong>Predictive Models:</strong> Maintenance forecasting, usage pattern analysis</li>
                <li><strong>NLP Processing:</strong> Issue report categorization, sentiment analysis</li>
              </ul>
            </div>

            <div className={styles.stackCategory}>
              <h3 className={styles.stackCategoryTitle}>Backend Infrastructure</h3>
              <ul className={styles.stackList}>
                <li><strong>Cloud Platform:</strong> Multi-region deployment with auto-scaling</li>
                <li><strong>Database:</strong> Time-series DB for sensor data, SQL for relational data</li>
                <li><strong>API Gateway:</strong> RESTful APIs with rate limiting, authentication</li>
              </ul>
            </div>

            <div className={styles.stackCategory}>
              <h3 className={styles.stackCategoryTitle}>Frontend Applications</h3>
              <ul className={styles.stackList}>
                <li><strong>Mobile Apps:</strong> React Native PWA (iOS, Android, web)</li>
                <li><strong>Dashboard:</strong> Real-time data visualization, responsive design</li>
                <li><strong>Offline Support:</strong> Service workers, local storage, sync queue</li>
              </ul>
            </div>

            <div className={styles.stackCategory}>
              <h3 className={styles.stackCategoryTitle}>IoT & Hardware</h3>
              <ul className={styles.stackList}>
                <li><strong>Sensors:</strong> Occupancy (IR), water quality, solar monitoring</li>
                <li><strong>Connectivity:</strong> 4G LTE, Wi-Fi, offline buffer (24-hour capacity)</li>
                <li><strong>Edge Processing:</strong> Local data aggregation before cloud transmission</li>
              </ul>
            </div>

            <div className={styles.stackCategory}>
              <h3 className={styles.stackCategoryTitle}>Security & Compliance</h3>
              <ul className={styles.stackList}>
                <li><strong>Encryption:</strong> TLS 1.3 in transit, AES-256 at rest</li>
                <li><strong>Authentication:</strong> OAuth 2.0, SSO support, role-based access</li>
                <li><strong>Compliance:</strong> GDPR-compliant data handling, audit logs</li>
              </ul>
            </div>

            <div className={styles.stackCategory}>
              <h3 className={styles.stackCategoryTitle}>Integration & APIs</h3>
              <ul className={styles.stackList}>
                <li><strong>Government Systems:</strong> Open APIs for ministry dashboard integration</li>
                <li><strong>Webhooks:</strong> Real-time event notifications for external systems</li>
                <li><strong>Data Export:</strong> CSV, JSON, Excel for compliance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className={styles.appShowcase}>
        <div className={styles.container}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseImages}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-app.png"
                alt="Area Executive mobile app interface"
                width={245}
                height={436}
                className={styles.showcaseAppImage}
              />
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-app-2-1.png"
                alt="Operations Manager dashboard interface"
                width={241}
                height={429}
                className={styles.showcaseAppImage}
              />
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-unit-app-1.png"
                alt="Unit Operator mobile app interface"
                width={237}
                height={421}
                className={styles.showcaseAppImage}
              />
            </div>
            <div className={styles.showcaseContent}>
              <h2 className={styles.showcaseTitle}>Mobile-first operations</h2>
              <p className={styles.showcaseDescription}>
                All four user roles access the platform via mobile apps with offline capability. Field staff document operations without internet connectivity - data syncs automatically when connection is restored.
              </p>
              <div className={styles.showcaseFeatures}>
                <div className={styles.showcaseFeature}>
                  <div className={styles.showcaseFeatureIcon}>📱</div>
                  <div>
                    <h4 className={styles.showcaseFeatureTitle}>Progressive Web Apps</h4>
                    <p className={styles.showcaseFeatureText}>Works on any device - iOS, Android, desktop. No app store approval delays for updates.</p>
                  </div>
                </div>
                <div className={styles.showcaseFeature}>
                  <div className={styles.showcaseFeatureIcon}>📶</div>
                  <div>
                    <h4 className={styles.showcaseFeatureTitle}>Offline-First Architecture</h4>
                    <p className={styles.showcaseFeatureText}>24-hour local storage buffer. Operations continue without internet - syncs when connected.</p>
                  </div>
                </div>
                <div className={styles.showcaseFeature}>
                  <div className={styles.showcaseFeatureIcon}>📸</div>
                  <div>
                    <h4 className={styles.showcaseFeatureTitle}>Native Camera Integration</h4>
                    <p className={styles.showcaseFeatureText}>Photo documentation with automatic compression (60% size reduction) and geotag metadata.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Deploy district-wide management</h2>
            <p className={styles.ctaText}>
              Schedule a 45-minute technical demonstration. Review the platform with our operations team, discuss government system integration requirements, and plan deployment timeline.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Schedule technical demo
              </a>
              <Link href="/contact" className={styles.ctaButtonSecondary}>
                Request integration details <span style={{ fontSize: '0.9em' }}>&gt;</span>
              </Link>
            </div>
            <p className={styles.ctaNote}>
              Includes live dashboard walkthrough, API documentation, and deployment planning for your district.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
