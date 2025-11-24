import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Design - ReFlow Toilets',
  description: 'Architectural design, material innovation, and engineering excellence. From concept to reality: how we design sustainable public sanitation infrastructure.',
  keywords: ['toilet design', 'architecture', 'sustainable materials', 'B-CRT engineering', 'prefabricated design', 'urban planning'],
  openGraph: {
    title: 'Design - ReFlow Toilets',
    description: 'Architectural design and engineering excellence in sustainable sanitation',
    images: ['/images/units/Mini on footpath reflow.jpg'],
  },
}

export default function DesignPage() {
  return (
    <div className={styles.page}>
      {/* Full-screen Hero with Image */}
      <section className={styles.heroFull}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/units/mini-on-footpath-reflow.jpg"
            alt="ReFlow Design"
            fill
            className={styles.heroImage}
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Design That Dignifies</h1>
          <p className={styles.heroSubtitle}>
            Where architecture meets engineering.<br />
            From concept to reality.
          </p>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyContainer}>
          <div className={styles.philosophyText}>
            <span className={styles.label}>Our Approach</span>
            <h2 className={styles.philosophyTitle}>Design Philosophy</h2>
            <div className={styles.philosophyPrinciples}>
              <div className={styles.principle}>
                <div className={styles.principleNumber}>01</div>
                <h3>Human-Centered</h3>
                <p>Every design decision prioritizes dignity, accessibility, and user experience. Public infrastructure should elevate, not diminish.</p>
              </div>
              <div className={styles.principle}>
                <div className={styles.principleNumber}>02</div>
                <h3>Context-Sensitive</h3>
                <p>From Dal Lake to urban footpaths, each unit adapts to its environment while maintaining design integrity.</p>
              </div>
              <div className={styles.principle}>
                <div className={styles.principleNumber}>03</div>
                <h3>Circular by Design</h3>
                <p>Materials, waste, water, energy—everything flows in closed loops. Zero discharge isn't a feature; it's the foundation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Form - Image Grid */}
      <section className={styles.architectureGrid}>
        <div className={styles.gridContainer}>
          <div className={styles.gridHeader}>
            <h2>Architecture & Form</h2>
            <p>Modular design. Urban integration. Built for 20+ years.</p>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.gridItemLarge}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/units/big-unit-reflow.png"
                alt="40ft B-CRT Unit Architecture"
                width={800}
                height={600}
                className={styles.gridImage}
              />
              <div className={styles.gridCaption}>
                <h3>40ft B-CRT</h3>
                <p>Large-scale infrastructure. 6 cubicles. 3,000+ daily capacity.</p>
              </div>
            </div>

            <div className={styles.gridItemMedium}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/units/reflow-dal-lake.png"
                alt="Dal Lake Deployment"
                width={600}
                height={400}
                className={styles.gridImage}
              />
              <div className={styles.gridCaption}>
                <h3>Context Integration</h3>
                <p>Dal Lake, Kashmir—where design meets environment</p>
              </div>
            </div>

            <div className={styles.gridItemMedium}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/units/reflow-mini.png"
                alt="ReFlow Mini Design"
                width={600}
                height={400}
                className={styles.gridImage}
              />
              <div className={styles.gridCaption}>
                <h3>Compact Unit</h3>
                <p>8×8 ft footprint. Rapid deployment. Urban-ready.</p>
              </div>
            </div>

            <div className={styles.gridItemWide}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/hero/hero-image.png"
                alt="Urban Deployment Vision"
                width={1200}
                height={400}
                className={styles.gridImage}
              />
              <div className={styles.gridCaption}>
                <h3>Urban Vision</h3>
                <p>Reimagining public infrastructure at scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Construction */}
      <section className={styles.materials}>
        <div className={styles.materialsContainer}>
          <div className={styles.materialsContent}>
            <span className={styles.label}>Sustainability</span>
            <h2>Material Innovation</h2>
            <div className={styles.materialsList}>
              <div className={styles.materialItem}>
                <div className={styles.materialIcon}>🏗️</div>
                <div>
                  <h4>Prefabricated Modules</h4>
                  <p>Precision-engineered components manufactured off-site. 2-3 day installation for Mini, 1-2 weeks for Standard.</p>
                </div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialIcon}>♻️</div>
                <div>
                  <h4>Recycled Materials</h4>
                  <p>Shipping container repurposing. Recycled composites. Circular material economy from day one.</p>
                </div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialIcon}>⚡</div>
                <div>
                  <h4>Energy Systems</h4>
                  <p>9 solar panels. 6 battery systems. 100% off-grid. 24/7 operation without grid dependency.</p>
                </div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialIcon}>🛡️</div>
                <div>
                  <h4>Durability</h4>
                  <p>Weather-resistant coatings. Anti-vandalism design. Built for 20+ year lifespan in harsh conditions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.materialsImage}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/hero/interior.png"
              alt="Interior Design Quality"
              width={700}
              height={500}
              className={styles.image}
            />
            <p className={styles.imageLabel}>Interior craftsmanship and user experience</p>
          </div>
        </div>
      </section>

      {/* B-CRT Engineering Deep Dive - USE ALL IMAGES */}
      <section className={styles.engineering}>
        <div className={styles.engineeringContainer}>
          <div className={styles.engineeringHeader}>
            <span className={styles.label}>Engineering Excellence</span>
            <h2>B-CRT: 8-Stage Treatment System</h2>
            <p className={styles.engineeringIntro}>
              The most advanced waste treatment technology ever deployed at scale.
              10,000 technical images showing every stage of the process.
            </p>
          </div>

          {/* Main B-CRT Image */}
          <div className={styles.bcrtMainImage}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png"
              alt="B-CRT System"
              width={1200}
              height={420}
              className={styles.fullImage}
            />
          </div>

          {/* Technical Process Grid - ALL B-CRT IMAGES */}
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processImage}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                  alt="Stage 1-2: Filtration & Digestion"
                  width={400}
                  height={300}
                  className={styles.techImage}
                />
              </div>
              <div className={styles.processInfo}>
                <div className={styles.stageNumber}>Stages 1-2</div>
                <h4>Initial Filtration & Anaerobic Digestion</h4>
                <p>Separation of solids. Bacterial breakdown begins. First stage of resource recovery.</p>
              </div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processImage}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                  alt="Stage 3-4: Aerobic Treatment & Oxidation"
                  width={400}
                  height={300}
                  className={styles.techImage}
                />
              </div>
              <div className={styles.processInfo}>
                <div className={styles.stageNumber}>Stages 3-4</div>
                <h4>Aerobic Treatment & Advanced Oxidation</h4>
                <p>Oxygen-based biological breakdown. Chemical oxidation removes contaminants.</p>
              </div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processImage}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                  alt="Stage 5: Membrane Filtration"
                  width={400}
                  height={300}
                  className={styles.techImage}
                />
              </div>
              <div className={styles.processInfo}>
                <div className={styles.stageNumber}>Stage 5</div>
                <h4>Membrane Filtration</h4>
                <p>Molecular-level filtration. Removes particles down to 0.01 microns.</p>
              </div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processImage}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                  alt="Stage 6: UV Disinfection"
                  width={400}
                  height={300}
                  className={styles.techImage}
                />
              </div>
              <div className={styles.processInfo}>
                <div className={styles.stageNumber}>Stage 6</div>
                <h4>UV Disinfection</h4>
                <p>Ultraviolet light destroys remaining pathogens. 99.99% elimination rate.</p>
              </div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processImage}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                  alt="Stage 7: Mineralization"
                  width={400}
                  height={300}
                  className={styles.techImage}
                />
              </div>
              <div className={styles.processInfo}>
                <div className={styles.stageNumber}>Stage 7</div>
                <h4>Mineralization & pH Balance</h4>
                <p>Final chemical adjustment. Water returned to neutral pH for safe reuse.</p>
              </div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processImage}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                  alt="Stage 8: ISO30500 Verification"
                  width={400}
                  height={300}
                  className={styles.techImage}
                />
              </div>
              <div className={styles.processInfo}>
                <div className={styles.stageNumber}>Stage 8</div>
                <h4>ISO30500 Quality Verification</h4>
                <p>Continuous monitoring ensures international water quality standards.</p>
              </div>
            </div>
          </div>

          {/* Additional Technical Details */}
          <div className={styles.technicalDetails}>
            <div className={styles.techDetailCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                alt="Control System"
                width={500}
                height={375}
                className={styles.detailImage}
              />
              <h4>IoT Control System</h4>
              <p>Browser-based control. Real-time monitoring of all 8 stages. Remote adjustments.</p>
            </div>

            <div className={styles.techDetailCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                alt="Water Flow Management"
                width={500}
                height={375}
                className={styles.detailImage}
              />
              <h4>Water Flow Management</h4>
              <p>10,000L closed-loop system. Years of operation without external water input.</p>
            </div>

            <div className={styles.techDetailCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011210.png"
                alt="System Integration"
                width={500}
                height={375}
                className={styles.detailImage}
              />
              <h4>Full System Integration</h4>
              <p>All 8 stages within one 40ft container. Modular. Scalable. Field-tested.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IoT & Smart Systems */}
      <section className={styles.smartSystems}>
        <div className={styles.smartContainer}>
          <div className={styles.smartHeader}>
            <span className={styles.label}>Technology</span>
            <h2>IoT & AI Integration</h2>
            <p>Every unit is a smart building. Real-time data. Predictive maintenance. AI-powered optimization.</p>
          </div>

          <div className={styles.smartGrid}>
            <div className={styles.smartCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/tech/screenshot-2025-04-18-172042.png"
                alt="Operations Dashboard"
                width={600}
                height={400}
                className={styles.smartImage}
              />
              <h3>Operations Dashboard</h3>
              <p>Gemini 2.5 Flash AI summaries. Years of historical data. District-wide analytics.</p>
            </div>

            <div className={styles.smartCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/tech/reflow-dashboard2.png"
                alt="4-in-1 Platform"
                width={600}
                height={400}
                className={styles.smartImage}
              />
              <h3>4-in-1 Platform</h3>
              <p>Public users, operators, executives, managers—all connected through one system.</p>
            </div>

            <div className={styles.smartCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/tech/screenshot-2025-04-18-172328.png"
                alt="IoT Sensors"
                width={600}
                height={400}
                className={styles.smartImage}
              />
              <h3>Sensor Network</h3>
              <p>Occupancy detection. Water quality monitoring. Solar power tracking. Real-time alerts.</p>
            </div>

            <div className={styles.smartCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/tech/screenshot-2025-04-18-172328.png"
                alt="AI Analysis"
                width={600}
                height={400}
                className={styles.smartImage}
              />
              <h3>AI Image Analysis</h3>
              <p>Daily photo documentation. Automated cleanliness scoring. Damage cost tracking.</p>
            </div>

            <div className={styles.smartCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/tech/wiring-system.jpg"
                alt="Electrical Systems"
                width={600}
                height={400}
                className={styles.smartImage}
              />
              <h3>Electrical Engineering</h3>
              <p>9 solar panels. 6 battery systems. 1 IoT brain. All integrated for 24/7 operation.</p>
            </div>

            <div className={styles.smartCard}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1732431496/reflow-assets/tech/app-screens.png"
                alt="Mobile Apps"
                width={300}
                height={533}
                className={styles.smartImageTall}
              />
              <h3>Mobile-First</h3>
              <p>iOS & Android apps for all stakeholders. Offline capability. Real-time sync.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality */}
      <section className={styles.manufacturing}>
        <div className={styles.mfgContainer}>
          <div className={styles.mfgSplit}>
            <div className={styles.mfgContent}>
              <span className={styles.label}>Precision</span>
              <h2>Manufacturing Excellence</h2>
              <p className={styles.mfgDescription}>
                <strong>EcoSan Partnership</strong><br />
                Advanced facility in Yixing, China. ISO-certified production.
                From raw materials to completed units in controlled environments.
              </p>

              <div className={styles.mfgStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>270+</div>
                  <div className={styles.statLabel}>Units Produced</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>4+</div>
                  <div className={styles.statLabel}>Years Refined</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Quality Control</div>
                </div>
              </div>

              <div className={styles.mfgProcess}>
                <h4>Quality Assurance</h4>
                <ul>
                  <li>ISO-certified manufacturing processes</li>
                  <li>Precision prefabrication for rapid assembly</li>
                  <li>Multi-stage quality control checkpoints</li>
                  <li>Stress testing before deployment</li>
                  <li>Sustainable material sourcing verification</li>
                </ul>
              </div>

              <div className={styles.ixoraBadge}>
                <p><strong>Maintained by Ixora Group</strong></p>
                <p>24/7 facility management. Integrated with Ixora Security for monitoring. Professional maintenance teams across all deployments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage - LooCafe Foundation */}
      <section className={styles.heritage}>
        <div className={styles.heritageContainer}>
          <h2>Built on Proven Foundation</h2>
          <p className={styles.heritageIntro}>
            ReFlow inherits design excellence from the <a href="https://loocafe.com" target="_blank" rel="noopener noreferrer">LooCafe platform</a>.
            270+ units successfully deployed across Hyderabad. 4+ years of operational refinement.
            Field-tested technology proven in diverse urban contexts.
          </p>

          <div className={styles.heritageStats}>
            <div className={styles.heritageStat}>
              <div className={styles.heritageNumber}>270+</div>
              <div className={styles.heritageLabel}>LooCafe Units Deployed</div>
            </div>
            <div className={styles.heritageStat}>
              <div className={styles.heritageNumber}>Gates</div>
              <div className={styles.heritageLabel}>Foundation Partner</div>
            </div>
            <div className={styles.heritageStat}>
              <div className={styles.heritageNumber}>Georgia</div>
              <div className={styles.heritageLabel}>Tech Research</div>
            </div>
            <div className={styles.heritageStat}>
              <div className={styles.heritageNumber}>ISO30500</div>
              <div className={styles.heritageLabel}>Certified</div>
            </div>
          </div>

          <div className={styles.heritageAddition}>
            <h3>What ReFlow Adds</h3>
            <div className={styles.additionGrid}>
              <div className={styles.additionCard}>
                <span className={styles.additionIcon}>🏛️</span>
                <h4>Municipal Scale</h4>
                <p>District-wide deployment strategies. Government-ready infrastructure.</p>
              </div>
              <div className={styles.additionCard}>
                <span className={styles.additionIcon}>♻️</span>
                <h4>B-CRT Technology</h4>
                <p>8-stage treatment. Zero discharge. ISO30500 water output.</p>
              </div>
              <div className={styles.additionCard}>
                <span className={styles.additionIcon}>📊</span>
                <h4>Enhanced Analytics</h4>
                <p>Gemini AI. Predictive maintenance. Years of operational data.</p>
              </div>
              <div className={styles.additionCard}>
                <span className={styles.additionIcon}>🤝</span>
                <h4>BOT Model</h4>
                <p>Build-Operate-Transfer. Zero upfront cost for governments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.ctaContent}>
          <h2>Design Solutions for Your District</h2>
          <p>
            From site assessment to commissioning, we'll design infrastructure tailored to your municipality's needs.
            Explore our approach. Review technical specifications. Schedule a consultation.
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
              Schedule Design Consultation
            </a>
            <Link href="/innovation" className={styles.ctaSecondary}>
              View Products →
            </Link>
            <Link href="/tech" className={styles.ctaSecondary}>
              Explore Technology →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
