import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'ReFlow Hub - Mobility + Sanitation + Services',
  description: 'ReFlow Hub combines EV charging stations, advanced public toilets with B-CRT technology, and food service in one integrated community infrastructure solution.',
  openGraph: {
    title: 'ReFlow Hub - The Complete Community Infrastructure',
    description: 'Mobility, sanitation, and services combined in one modular, prefabricated solution',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/v1763732619/reflow-assets/bcrt/main-bcrt.jpg'],
  },
}

export default function ReFlowHubPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>Flagship Innovation</div>
          <h1 className={styles.title}>
            ReFlow Hub
          </h1>
          <p className={styles.subtitle}>
            The complete community infrastructure combining mobility, sanitation, and services in one integrated prefabricated solution
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatIcon}>⚡</span>
              <span className={styles.heroStatLabel}>EV Charging</span>
            </div>
            <div className={styles.heroStatDivider}>+</div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatIcon}>🚻</span>
              <span className={styles.heroStatLabel}>Smart Toilets</span>
            </div>
            <div className={styles.heroStatDivider}>+</div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatIcon}>☕</span>
              <span className={styles.heroStatLabel}>Food Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is ReFlow Hub */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2 className={styles.sectionTitle}>What is ReFlow Hub?</h2>
              <p className={styles.overviewText}>
                ReFlow Hub represents the evolution of public infrastructure. It&apos;s not just a toilet or a charging station - it&apos;s a <strong>community anchor</strong> that serves multiple essential needs in one compact, prefabricated unit.
              </p>
              <p className={styles.overviewText}>
                Imagine a location where an EV driver can charge their vehicle, use a world-class ISO 30500 compliant restroom, and grab a coffee or snack - all while supporting a self-sustaining, zero-discharge infrastructure that benefits the community.
              </p>
              <div className={styles.overviewHighlight}>
                <span className={styles.highlightIcon}>💡</span>
                <p>The Hub model maximizes utility per square foot while creating multiple revenue streams that fund 24/7 maintenance and operations.</p>
              </div>
            </div>
            <div className={styles.overviewImage}>
              <div className={styles.conceptDiagram}>
                <div className={styles.diagramCenter}>
                  <div className={styles.diagramHub}>ReFlow Hub</div>
                </div>
                <div className={styles.diagramSpoke} style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
                  <div className={styles.spokeIcon}>⚡</div>
                  <span>EV Charging</span>
                </div>
                <div className={styles.diagramSpoke} style={{ top: '50%', right: '5%', transform: 'translateY(-50%)' }}>
                  <div className={styles.spokeIcon}>🚻</div>
                  <span>B-CRT Toilets</span>
                </div>
                <div className={styles.diagramSpoke} style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
                  <div className={styles.spokeIcon}>☕</div>
                  <span>Cafe/PoS</span>
                </div>
                <div className={styles.diagramSpoke} style={{ top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
                  <div className={styles.spokeIcon}>📱</div>
                  <span>IoT Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Three Pillars</h2>
            <p className={styles.sectionSubtitle}>Every ReFlow Hub integrates these three essential components</p>
          </div>

          <div className={styles.pillarsGrid}>
            {/* Pillar 1: Mobility */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>⚡</div>
              <h3 className={styles.pillarTitle}>Mobility Hub</h3>
              <p className={styles.pillarSubtitle}>EV Charging Infrastructure</p>
              <ul className={styles.pillarList}>
                <li>
                  <strong>DC Fast Charging</strong>
                  <span>50-150kW chargers for quick top-ups</span>
                </li>
                <li>
                  <strong>AC Level 2 Charging</strong>
                  <span>7-22kW for longer parking durations</span>
                </li>
                <li>
                  <strong>E-Rickshaw/E-Bike Stations</strong>
                  <span>Supporting last-mile electrification</span>
                </li>
                <li>
                  <strong>Battery Swap Points</strong>
                  <span>For commercial delivery fleets</span>
                </li>
              </ul>
              <div className={styles.pillarStat}>
                <span className={styles.pillarStatValue}>24/7</span>
                <span className={styles.pillarStatLabel}>Availability</span>
              </div>
            </div>

            {/* Pillar 2: Sanitation */}
            <div className={`${styles.pillarCard} ${styles.pillarCardFeatured}`}>
              <div className={styles.pillarIcon}>🚻</div>
              <h3 className={styles.pillarTitle}>Smart Sanitation</h3>
              <p className={styles.pillarSubtitle}>B-CRT Public Toilets</p>
              <ul className={styles.pillarList}>
                <li>
                  <strong>ISO 30500 Certified</strong>
                  <span>Internationally compliant effluent quality</span>
                </li>
                <li>
                  <strong>95% Water Recycling</strong>
                  <span>Closed-loop water treatment</span>
                </li>
                <li>
                  <strong>Inclusive Design</strong>
                  <span>Wheelchair accessible, family-friendly</span>
                </li>
                <li>
                  <strong>IoT Monitoring</strong>
                  <span>Real-time cleanliness & maintenance alerts</span>
                </li>
              </ul>
              <div className={styles.pillarStat}>
                <span className={styles.pillarStatValue}>Zero</span>
                <span className={styles.pillarStatLabel}>Discharge to Environment</span>
              </div>
            </div>

            {/* Pillar 3: Services */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>☕</div>
              <h3 className={styles.pillarTitle}>Community Services</h3>
              <p className={styles.pillarSubtitle}>Food & Retail Point of Sale</p>
              <ul className={styles.pillarList}>
                <li>
                  <strong>Cafe Counter</strong>
                  <span>Tea, coffee, snacks & beverages</span>
                </li>
                <li>
                  <strong>Convenience Store</strong>
                  <span>Essential items & travel needs</span>
                </li>
                <li>
                  <strong>Digital Kiosk</strong>
                  <span>Bill payments, mobile recharge, services</span>
                </li>
                <li>
                  <strong>Advertisement Panels</strong>
                  <span>Revenue-generating display spaces</span>
                </li>
              </ul>
              <div className={styles.pillarStat}>
                <span className={styles.pillarStatValue}>4+</span>
                <span className={styles.pillarStatLabel}>Revenue Streams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ReFlow Product Range</h2>
            <p className={styles.sectionSubtitle}>From compact deployments to full-scale community hubs</p>
          </div>

          <div className={styles.productsGrid}>
            {/* ReFlow Mini */}
            <div className={styles.productCard}>
              <div className={styles.productHeader}>
                <h3 className={styles.productTitle}>ReFlow Mini</h3>
                <span className={styles.productSize}>8x8 ft</span>
              </div>
              <div className={styles.productFeatures}>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Compact 8x8 ft footprint</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>2 side-attached toilet cubicles</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Cost-effective deployment</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Grassroot level distribution</span>
                </div>
              </div>
              <div className={styles.productUseCase}>
                <strong>Best for:</strong> Dense urban areas, street corners, small communities
              </div>
            </div>

            {/* ReFlow Standard */}
            <div className={styles.productCard}>
              <div className={styles.productHeader}>
                <h3 className={styles.productTitle}>ReFlow Standard</h3>
                <span className={styles.productSize}>20 ft</span>
              </div>
              <div className={styles.productFeatures}>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>3 toilet units attached</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Customizable fittings & paneling</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Integrated advanced technology</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Point of Sale integrated</span>
                </div>
              </div>
              <div className={styles.productUseCase}>
                <strong>Best for:</strong> Bus stops, markets, tourist areas
              </div>
            </div>

            {/* ReFlow Large */}
            <div className={styles.productCard}>
              <div className={styles.productHeader}>
                <h3 className={styles.productTitle}>ReFlow Large</h3>
                <span className={styles.productSize}>40 ft</span>
              </div>
              <div className={styles.productFeatures}>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>6 toilet cubicles</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>40ft B-CRT treatment system</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Ground-level accessibility</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>Strong branded aesthetic</span>
                </div>
              </div>
              <div className={styles.productUseCase}>
                <strong>Best for:</strong> Transit hubs, parks, event venues
              </div>
            </div>

            {/* ReFlow Hub */}
            <div className={`${styles.productCard} ${styles.productCardFeatured}`}>
              <div className={styles.productBadge}>Flagship</div>
              <div className={styles.productHeader}>
                <h3 className={styles.productTitle}>ReFlow Hub</h3>
                <span className={styles.productSize}>40+ ft</span>
              </div>
              <div className={styles.productFeatures}>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>⚡</span>
                  <span>EV charging stations integrated</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>🚻</span>
                  <span>Full B-CRT sanitation system</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>☕</span>
                  <span>Cafe/PoS service counter</span>
                </div>
                <div className={styles.productFeature}>
                  <span className={styles.featureIcon}>☀️</span>
                  <span>Solar-powered off-grid capable</span>
                </div>
              </div>
              <div className={styles.productUseCase}>
                <strong>Best for:</strong> Highway rest stops, major intersections, smart city deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prefab Advantage */}
      <section className={styles.prefab}>
        <div className={styles.container}>
          <div className={styles.prefabGrid}>
            <div className={styles.prefabContent}>
              <div className={styles.badge}>Prefabricated Excellence</div>
              <h2 className={styles.sectionTitle}>Built to Deploy, Not to Construct</h2>
              <p className={styles.prefabText}>
                ReFlow Hub units are manufactured in controlled factory environments and delivered ready for installation. This approach eliminates the unpredictability, delays, and quality issues of traditional on-site construction.
              </p>

              <div className={styles.prefabStats}>
                <div className={styles.prefabStat}>
                  <span className={styles.prefabStatValue}>15+ Cr</span>
                  <span className={styles.prefabStatLabel}>Projects executed in prefab & container structures</span>
                </div>
                <div className={styles.prefabStat}>
                  <span className={styles.prefabStatValue}>2-4 Weeks</span>
                  <span className={styles.prefabStatLabel}>From delivery to operational</span>
                </div>
                <div className={styles.prefabStat}>
                  <span className={styles.prefabStatValue}>100%</span>
                  <span className={styles.prefabStatLabel}>Relocatable if needed</span>
                </div>
              </div>
            </div>
            <div className={styles.prefabBenefits}>
              <h4>Prefab Advantages</h4>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>🏗️</span>
                  <div>
                    <strong>Factory Quality Control</strong>
                    <p>Consistent quality with controlled manufacturing</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>⏱️</span>
                  <div>
                    <strong>Rapid Deployment</strong>
                    <p>Weeks instead of months for installation</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>🔧</span>
                  <div>
                    <strong>Easy Maintenance</strong>
                    <p>Modular components for quick repairs</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>🚛</span>
                  <div>
                    <strong>Relocatable</strong>
                    <p>Can be moved to new locations as needed</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>📏</span>
                  <div>
                    <strong>Scalable</strong>
                    <p>Add units as demand grows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className={styles.revenue}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Self-Sustaining Revenue Model</h2>
            <p className={styles.sectionSubtitle}>Multiple revenue streams ensure operational sustainability</p>
          </div>

          <div className={styles.revenueGrid}>
            <div className={styles.revenueCard}>
              <div className={styles.revenueIcon}>⚡</div>
              <h4>EV Charging</h4>
              <p>Per-kWh charging fees from electric vehicle users</p>
            </div>
            <div className={styles.revenueCard}>
              <div className={styles.revenueIcon}>☕</div>
              <h4>Cafe/PoS Sales</h4>
              <p>Food, beverages, and convenience items revenue</p>
            </div>
            <div className={styles.revenueCard}>
              <div className={styles.revenueIcon}>📺</div>
              <h4>Advertisement</h4>
              <p>All 4 sides plus interior panels for advertisers</p>
            </div>
            <div className={styles.revenueCard}>
              <div className={styles.revenueIcon}>🤝</div>
              <h4>Partnership Fees</h4>
              <p>Franchise model with local operators</p>
            </div>
            <div className={styles.revenueCard}>
              <div className={styles.revenueIcon}>📱</div>
              <h4>Digital Services</h4>
              <p>Bill payments, mobile recharge commissions</p>
            </div>
            <div className={styles.revenueCard}>
              <div className={styles.revenueIcon}>♻️</div>
              <h4>Resource Recovery</h4>
              <p>Biosolids fertilizer and treated water reuse</p>
            </div>
          </div>

          <div className={styles.revenueSummary}>
            <p>With the patented LooCafe model, ReFlow Hub units are designed to be <strong>operationally profitable</strong> while providing free or low-cost public toilet access.</p>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className={styles.tech}>
        <div className={styles.container}>
          <div className={styles.techGrid}>
            <div className={styles.techContent}>
              <h2 className={styles.sectionTitle}>Smart Technology Integration</h2>
              <p className={styles.techText}>
                Every ReFlow Hub is equipped with IoT sensors and our proprietary facility management platform for real-time monitoring and management.
              </p>

              <div className={styles.techFeatures}>
                <div className={styles.techFeature}>
                  <span className={styles.techFeatureIcon}>📍</span>
                  <div>
                    <strong>Live Location Tracking</strong>
                    <p>Users can locate nearest ReFlow Hub via app</p>
                  </div>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techFeatureIcon}>👃</span>
                  <div>
                    <strong>Stink Sensors</strong>
                    <p>Automatic alerts for cleaning requirements</p>
                  </div>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techFeatureIcon}>📊</span>
                  <div>
                    <strong>Usage Analytics</strong>
                    <p>Track footfall, peak hours, and maintenance needs</p>
                  </div>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techFeatureIcon}>🔋</span>
                  <div>
                    <strong>Energy Monitoring</strong>
                    <p>Solar generation and consumption tracking</p>
                  </div>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techFeatureIcon}>💧</span>
                  <div>
                    <strong>Water Quality</strong>
                    <p>Real-time effluent monitoring for compliance</p>
                  </div>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techFeatureIcon}>🤖</span>
                  <div>
                    <strong>AI Operations</strong>
                    <p>Predictive maintenance and inventory management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.techVisual}>
              <div className={styles.appMockup}>
                <div className={styles.appScreen}>
                  <div className={styles.appHeader}>ReFlow App</div>
                  <div className={styles.appContent}>
                    <div className={styles.appStat}>
                      <span className={styles.appStatLabel}>Nearby Hub</span>
                      <span className={styles.appStatValue}>350m</span>
                    </div>
                    <div className={styles.appStat}>
                      <span className={styles.appStatLabel}>Cleanliness</span>
                      <span className={styles.appStatValue}>98%</span>
                    </div>
                    <div className={styles.appStat}>
                      <span className={styles.appStatLabel}>EV Chargers</span>
                      <span className={styles.appStatValue}>2 Free</span>
                    </div>
                    <div className={styles.appStat}>
                      <span className={styles.appStatLabel}>Wait Time</span>
                      <span className={styles.appStatValue}>None</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.useCases}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ideal Deployment Locations</h2>
            <p className={styles.sectionSubtitle}>Where ReFlow Hub creates maximum impact</p>
          </div>

          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🛣️</div>
              <h4>Highway Rest Stops</h4>
              <p>EV charging + restrooms + cafe for long-distance travelers</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🚌</div>
              <h4>Bus & Transit Hubs</h4>
              <p>High-traffic public transit locations</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🏛️</div>
              <h4>Government Complexes</h4>
              <p>Smart city deployments near public buildings</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🏪</div>
              <h4>Markets & Commercial</h4>
              <p>High-footfall shopping and commercial areas</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🎡</div>
              <h4>Tourist Destinations</h4>
              <p>Heritage sites, parks, and tourist areas</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🏭</div>
              <h4>Industrial Zones</h4>
              <p>Worker welfare in manufacturing clusters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Deploy ReFlow Hub in Your District</h2>
            <p className={styles.ctaText}>
              Transform your public infrastructure with integrated mobility, sanitation, and services. Let&apos;s discuss how ReFlow Hub can serve your community.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                Schedule Discussion
              </a>
              <Link href="/roi-calculator" className={styles.ctaSecondary}>
                Calculate ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
