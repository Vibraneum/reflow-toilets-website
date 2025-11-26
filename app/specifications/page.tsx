import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Technical Specifications - B-CRT & ReFlow Units | ReFlow Toilets',
  description: 'Complete technical specifications for B-CRT (Blackwater-Circular Reinvented Toilet) systems. ISO30500 certified, 8-stage treatment process, solar power, IoT monitoring. Gates Foundation award-winning technology.',
  keywords: ['B-CRT specifications', 'ISO30500', 'water treatment', 'solar toilet', 'off-grid sanitation', 'technical specs', 'reinvented toilet'],
  openGraph: {
    title: 'Technical Specifications - B-CRT & ReFlow Units',
    description: 'Complete technical documentation for ReFlow sanitation systems',
    images: ['/images/bcrt/main-bcrt-image.png'],
  },
}

export default function SpecificationsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>ISO30500-2018 Certified</div>
          <h1 className={styles.title}>Technical Specifications</h1>
          <p className={styles.subtitle}>
            Complete engineering documentation for B-CRT and ReFlow sanitation systems.
            Gates Foundation award-winning technology deployed globally.
          </p>
        </div>
      </section>

      {/* B-CRT Overview */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2 className={styles.sectionTitle}>B-CRT: Blackwater-Circular Reinvented Toilet</h2>
              <p className={styles.overviewText}>
                The B-CRT represents the most advanced implementation of the Gates Foundation's 
                "Reinvent the Toilet" initiative globally. This containerized sanitation solution 
                integrates complete water treatment, solar power generation, and IoT monitoring 
                into a single deployable unit.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>8-Stage</span>
                  <span className={styles.highlightLabel}>Treatment Process</span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>ISO30500</span>
                  <span className={styles.highlightLabel}>Water Quality</span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>72+ Hours</span>
                  <span className={styles.highlightLabel}>Off-Grid Operation</span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>35+</span>
                  <span className={styles.highlightLabel}>IoT Sensors</span>
                </div>
              </div>
            </div>
            <div className={styles.overviewImage}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png"
                alt="B-CRT 40-foot container unit"
                width={600}
                height={400}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unit Specifications */}
      <section className={styles.specsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Unit Specifications</h2>
          
          <div className={styles.specsGrid}>
            {/* 40ft B-CRT */}
            <div className={styles.specsCard}>
              <h3 className={styles.cardTitle}>40ft B-CRT Container</h3>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <td>Container Size</td>
                    <td>40-foot ISO standard shipping container</td>
                  </tr>
                  <tr>
                    <td>Toilet Cubicles</td>
                    <td>6 individual units</td>
                  </tr>
                  <tr>
                    <td>Daily Capacity</td>
                    <td>300+ users per day</td>
                  </tr>
                  <tr>
                    <td>Treatment Capacity</td>
                    <td>2,000-3,000L wastewater daily</td>
                  </tr>
                  <tr>
                    <td>Initial Water Charge</td>
                    <td>10,000 liters (lasts years)</td>
                  </tr>
                  <tr>
                    <td>Water Recovery Rate</td>
                    <td>95-98% efficiency</td>
                  </tr>
                  <tr>
                    <td>Annual Water Savings</td>
                    <td>420,000-600,000 liters per unit</td>
                  </tr>
                  <tr>
                    <td>Deployment Time</td>
                    <td>1-3 months (including site prep)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 20ft Variant */}
            <div className={styles.specsCard}>
              <h3 className={styles.cardTitle}>20ft B-CRT Compact</h3>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <td>Container Size</td>
                    <td>20-foot ISO standard shipping container</td>
                  </tr>
                  <tr>
                    <td>Toilet Cubicles</td>
                    <td>3 individual units</td>
                  </tr>
                  <tr>
                    <td>Daily Capacity</td>
                    <td>150+ users per day</td>
                  </tr>
                  <tr>
                    <td>Treatment Capacity</td>
                    <td>1,000-1,500L wastewater daily</td>
                  </tr>
                  <tr>
                    <td>Best For</td>
                    <td>Space-constrained areas</td>
                  </tr>
                  <tr>
                    <td>Water Recovery Rate</td>
                    <td>95-98% efficiency</td>
                  </tr>
                  <tr>
                    <td>Deployment Time</td>
                    <td>2-4 weeks</td>
                  </tr>
                  <tr>
                    <td>Same Technology</td>
                    <td>Full 8-stage treatment system</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ReFlow Mini */}
            <div className={styles.specsCard}>
              <h3 className={styles.cardTitle}>ReFlow Mini</h3>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <td>Footprint</td>
                    <td>8×8 ft (64 sq ft)</td>
                  </tr>
                  <tr>
                    <td>Toilet Cubicles</td>
                    <td>2 side-attached units</td>
                  </tr>
                  <tr>
                    <td>Daily Capacity</td>
                    <td>500-1,000 users per day</td>
                  </tr>
                  <tr>
                    <td>Power</td>
                    <td>Solar/Grid hybrid</td>
                  </tr>
                  <tr>
                    <td>Treatment</td>
                    <td>Basic on-site treatment</td>
                  </tr>
                  <tr>
                    <td>Best For</td>
                    <td>Urban streets, bus stops, parks</td>
                  </tr>
                  <tr>
                    <td>Deployment Time</td>
                    <td>2-3 days</td>
                  </tr>
                  <tr>
                    <td>Cost-Effectiveness</td>
                    <td>Grassroot level distribution</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ReFlow Standard */}
            <div className={styles.specsCard}>
              <h3 className={styles.cardTitle}>ReFlow Standard</h3>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <td>Footprint</td>
                    <td>~15×10 ft (150 sq ft)</td>
                  </tr>
                  <tr>
                    <td>Toilet Cubicles</td>
                    <td>3 units (including 1 accessible)</td>
                  </tr>
                  <tr>
                    <td>Daily Capacity</td>
                    <td>1,000-2,000 users per day</td>
                  </tr>
                  <tr>
                    <td>Power</td>
                    <td>Solar primary with grid backup</td>
                  </tr>
                  <tr>
                    <td>Treatment</td>
                    <td>Intermediate on-site treatment</td>
                  </tr>
                  <tr>
                    <td>Best For</td>
                    <td>Tourist locations, parks, events</td>
                  </tr>
                  <tr>
                    <td>Deployment Time</td>
                    <td>1-2 weeks</td>
                  </tr>
                  <tr>
                    <td>Customization</td>
                    <td>Full architectural finish available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Stage Treatment Process */}
      <section className={styles.treatmentSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>8-Stage Water Treatment Process</h2>
          <p className={styles.sectionIntro}>
            Complete wastewater treatment achieving ISO30500-2018 water quality standards. 
            All treatment occurs within the container unit with no external sewage connection required.
          </p>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Pre-Treatment</h3>
              <p className={styles.stepDesc}>2mm screening and solids separation to remove large particulates before biological treatment.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Primary Anaerobic Digestion</h3>
              <p className={styles.stepDesc}>2,000L bioreactor for initial organic matter breakdown in oxygen-free environment. Large molecules decompose into smaller compounds.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Secondary Aerobic Treatment</h3>
              <p className={styles.stepDesc}>Fine-bubble diffusion aeration for biological oxygen demand (BOD) reduction. Aerobic bacteria further process organic matter.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Membrane Filtration</h3>
              <p className={styles.stepDesc}>0.04 micron ultrafiltration removes suspended solids, bacteria, and most pathogens from the water stream.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3 className={styles.stepTitle}>Advanced Oxidation</h3>
              <p className={styles.stepDesc}>UV-C disinfection at 254nm wavelength destroys remaining microorganisms and breaks down trace contaminants.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>6</div>
              <h3 className={styles.stepTitle}>Activated Carbon Filtration</h3>
              <p className={styles.stepDesc}>Removes trace organic contaminants, odors, and improves water clarity through adsorption process.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>7</div>
              <h3 className={styles.stepTitle}>Mineralization & pH Stabilization</h3>
              <p className={styles.stepDesc}>pH adjustment to 6.8-7.2 range and mineral balancing for safe reuse or discharge applications.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>8</div>
              <h3 className={styles.stepTitle}>Final Disinfection & Monitoring</h3>
              <p className={styles.stepDesc}>Final treatment stage with continuous real-time quality monitoring sensors tracking all key parameters.</p>
            </div>
          </div>

          <div className={styles.standardsBox}>
            <h3 className={styles.standardsTitle}>Water Quality Standards Achieved</h3>
            <div className={styles.standardsGrid}>
              <div className={styles.standard}>
                <strong>ISO30500-2018</strong>
                <span>International non-sewered sanitation standard</span>
              </div>
              <div className={styles.standard}>
                <strong>GB/T18920-2020</strong>
                <span>Urban wastewater recycling standard (China)</span>
              </div>
              <div className={styles.standard}>
                <strong>TUV SUD Certified</strong>
                <span>World's first ISO30500 certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Power System */}
      <section className={styles.powerSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Solar Power System</h2>
          
          <div className={styles.powerGrid}>
            <div className={styles.powerCard}>
              <h3 className={styles.cardTitle}>Generation Capacity</h3>
              <ul className={styles.powerList}>
                <li><strong>Solar Panels:</strong> 9 panels × 450W = 4.05kWp total capacity</li>
                <li><strong>Daily Generation:</strong> 16-20kWh maximum yield</li>
                <li><strong>Panel Type:</strong> High-efficiency monocrystalline</li>
                <li><strong>Mounting:</strong> Container roof-integrated system</li>
              </ul>
            </div>

            <div className={styles.powerCard}>
              <h3 className={styles.cardTitle}>Energy Storage</h3>
              <ul className={styles.powerList}>
                <li><strong>Battery Type:</strong> Lithium Iron Phosphate (LiFePO4)</li>
                <li><strong>Battery Systems:</strong> 6 battery modules</li>
                <li><strong>Total Capacity:</strong> 20kWh storage</li>
                <li><strong>Off-Grid Duration:</strong> 72+ hours continuous operation</li>
                <li><strong>Cycle Life:</strong> 3,000+ charge cycles</li>
              </ul>
            </div>

            <div className={styles.powerCard}>
              <h3 className={styles.cardTitle}>Power Management</h3>
              <ul className={styles.powerList}>
                <li><strong>Daily Consumption:</strong> 12-15kWh under normal operation</li>
                <li><strong>Grid Connection:</strong> Automatic switchover capability</li>
                <li><strong>Load Management:</strong> Prioritization algorithms for critical functions</li>
                <li><strong>Energy Efficiency:</strong> 65% reduction vs conventional systems</li>
              </ul>
            </div>

            <div className={styles.powerCard}>
              <h3 className={styles.cardTitle}>Off-Grid Capabilities</h3>
              <ul className={styles.powerList}>
                <li><strong>Complete Independence:</strong> No external power required</li>
                <li><strong>Disaster Ready:</strong> Immediate deployment to crisis zones</li>
                <li><strong>Remote Locations:</strong> Rural and off-grid deployment</li>
                <li><strong>Backup Systems:</strong> Critical function protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IoT & Monitoring */}
      <section className={styles.iotSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>IoT Monitoring System</h2>
          
          <div className={styles.iotGrid}>
            <div className={styles.iotCard}>
              <h3 className={styles.cardTitle}>Sensor Network</h3>
              <ul className={styles.iotList}>
                <li><strong>35+ Monitoring Points</strong> per unit</li>
                <li><strong>Water Quality:</strong> pH, TDS, turbidity, BOD, COD</li>
                <li><strong>Power Monitoring:</strong> Battery level, generation, consumption</li>
                <li><strong>Treatment Monitoring:</strong> Flow rates, pressure, temperature</li>
                <li><strong>Occupancy:</strong> Infrared motion detection</li>
                <li><strong>Usage Tracking:</strong> Entry counters, duration monitoring</li>
              </ul>
            </div>

            <div className={styles.iotCard}>
              <h3 className={styles.cardTitle}>Connectivity</h3>
              <ul className={styles.iotList}>
                <li><strong>Primary:</strong> Multi-redundant 4G/LTE</li>
                <li><strong>Backup:</strong> LoRaWAN for remote areas</li>
                <li><strong>Edge Computing:</strong> Industrial-grade with redundant storage</li>
                <li><strong>Offline Buffer:</strong> 24-hour local data storage</li>
                <li><strong>Security:</strong> End-to-end encryption (TLS 1.3)</li>
                <li><strong>Access Control:</strong> Role-based permissions</li>
              </ul>
            </div>

            <div className={styles.iotCard}>
              <h3 className={styles.cardTitle}>Dashboard System</h3>
              <ul className={styles.iotList}>
                <li><strong>Area Executives:</strong> City-wide monitoring and KPI tracking</li>
                <li><strong>Operations Managers:</strong> Performance analytics, resource optimization</li>
                <li><strong>Unit Operators:</strong> Day-to-day maintenance, cleanliness verification</li>
                <li><strong>Public Users:</strong> Location finder, availability status</li>
              </ul>
            </div>

            <div className={styles.iotCard}>
              <h3 className={styles.cardTitle}>AI Capabilities</h3>
              <ul className={styles.iotList}>
                <li><strong>Google Gemini 2.5:</strong> Image analysis and reporting</li>
                <li><strong>Predictive Maintenance:</strong> Equipment failure forecasting</li>
                <li><strong>Automated Reporting:</strong> Daily operational summaries</li>
                <li><strong>Anomaly Detection:</strong> Unusual pattern alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sludge Treatment */}
      <section className={styles.sludgeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sludge Treatment System</h2>
          
          <div className={styles.sludgeGrid}>
            <div className={styles.sludgeContent}>
              <h3 className={styles.cardTitle}>Sludge Harmless Disinfection Device</h3>
              <p className={styles.sludgeText}>
                State-of-the-art machine for sludge treatment in the sedimentation process.
                Processes accumulated sludge after months or years of B-CRT usage.
              </p>
              <ul className={styles.sludgeList}>
                <li><strong>Volume Reduction:</strong> &gt;90% compared to conventional systems</li>
                <li><strong>Treatment Process:</strong> Enzymatic pre-treatment with thermal disinfection (70°C)</li>
                <li><strong>End Product:</strong> Class A Biosolids per EPA standards</li>
                <li><strong>Maintenance Cycle:</strong> Extraction required only once every 9-12 months</li>
                <li><strong>Zero Discharge:</strong> Complete elimination of sewage system dependencies</li>
              </ul>
            </div>
            <div className={styles.sludgeStats}>
              <div className={styles.sludgeStat}>
                <span className={styles.sludgeValue}>&gt;90%</span>
                <span className={styles.sludgeLabel}>Volume Reduction</span>
              </div>
              <div className={styles.sludgeStat}>
                <span className={styles.sludgeValue}>9-12</span>
                <span className={styles.sludgeLabel}>Months Between Service</span>
              </div>
              <div className={styles.sludgeStat}>
                <span className={styles.sludgeValue}>Class A</span>
                <span className={styles.sludgeLabel}>EPA Biosolids Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className={styles.revenueSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sustainability & Revenue Model</h2>
          <p className={styles.sectionIntro}>
            Each B-CRT integrates multiple revenue streams ensuring long-term financial sustainability 
            while maintaining circular economy principles.
          </p>

          <div className={styles.revenueGrid}>
            <div className={styles.revenueCard}>
              <h3 className={styles.revenueTitle}>Point-of-Sale Partnership</h3>
              <p className={styles.revenueDesc}>6.5m² commercial space generating ₹15,000-25,000 monthly</p>
            </div>
            <div className={styles.revenueCard}>
              <h3 className={styles.revenueTitle}>Advertisement Panels</h3>
              <p className={styles.revenueDesc}>16m² of premium advertising space across all 4 unit sides plus interior walls</p>
            </div>
            <div className={styles.revenueCard}>
              <h3 className={styles.revenueTitle}>Technology Licensing</h3>
              <p className={styles.revenueDesc}>Management system extendable to existing infrastructure</p>
            </div>
            <div className={styles.revenueCard}>
              <h3 className={styles.revenueTitle}>Usage Fees</h3>
              <p className={styles.revenueDesc}>Optional micropayment system with digital processing</p>
            </div>
          </div>

          <div className={styles.circularBox}>
            <h3 className={styles.circularTitle}>Circular Economy Principles</h3>
            <div className={styles.circularGrid}>
              <div className={styles.circularItem}>
                <strong>Water Reclamation</strong>
                <span>Near-complete water recycling with minimal makeup</span>
              </div>
              <div className={styles.circularItem}>
                <strong>Energy Efficiency</strong>
                <span>65% reduction compared to conventional systems</span>
              </div>
              <div className={styles.circularItem}>
                <strong>Material Selection</strong>
                <span>Minimum 25% recycled content in structural components</span>
              </div>
              <div className={styles.circularItem}>
                <strong>End-of-Life Planning</strong>
                <span>85% of components designed for reuse or recycling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className={styles.complianceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Certifications & Compliance</h2>
          
          <div className={styles.complianceGrid}>
            <div className={styles.complianceCard}>
              <div className={styles.complianceBadge}>ISO30500</div>
              <h3>ISO30500-2018</h3>
              <p>International standard for non-sewered sanitation systems - first in the world to achieve certification</p>
            </div>
            <div className={styles.complianceCard}>
              <div className={styles.complianceBadge}>GB/T18920</div>
              <h3>GB/T18920-2020</h3>
              <p>Urban wastewater recycling and urban miscellaneous water quality standard (China)</p>
            </div>
            <div className={styles.complianceCard}>
              <div className={styles.complianceBadge}>TUV SUD</div>
              <h3>TUV SUD Certified</h3>
              <p>Independent third-party certification of water treatment performance</p>
            </div>
            <div className={styles.complianceCard}>
              <div className={styles.complianceBadge}>Gazette</div>
              <h3>Liquid Waste Management Rules 2024</h3>
              <p>Compliant with Gazette CG DL-E-08102024-257748 dated October 8, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Request Detailed Specifications</h2>
            <p className={styles.ctaText}>
              Get complete engineering documentation, CAD drawings, and deployment planning 
              support for your sanitation infrastructure project.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact?subject=Technical%20Specifications%20Request" className={styles.ctaPrimary}>
                Request Spec Sheet
              </Link>
              <a
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                Schedule Technical Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


