import type { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

// Dynamic import for IP Rights Section
const IPRightsSection = dynamic(() => import('@/components/IPRightsSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})

export const metadata: Metadata = {
  title: 'B-CRT Technical Specifications - 40ft Reinvented Toilet',
  description: '8-stage treatment. Zero discharge. ISO30500 compliant. 3,000 users daily. 100% solar powered. Complete engineering deep dive. Built on Gates Foundation Reinvent the Toilet Challenge innovations.',
  keywords: ['B-CRT', 'Blackwater Circular Reinvented Toilet', 'reinvented toilet', 'Gates Foundation', 'ISO30500', 'zero discharge toilet', 'water treatment technology', 'Global Access', 'patent licensing', 'technology transfer'],
  openGraph: {
    title: 'B-CRT Technical Specifications | ReFlow Toilets',
    description: '8-stage treatment. Zero discharge. ISO30500 compliant. Complete engineering documentation. Gates Foundation Global Access commitment.',
    images: ['/images/bcrt/MAIN B-CRT IMAGE.png'],
  },
}

export default function BCRTPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.badge}>Available Q4 2026</div>
          <h1 className={styles.title}>B-CRT</h1>
          <p className={styles.subtitle}>40-foot containerized public toilet.</p>
          <p className={styles.description}>
            8-stage treatment process. Zero liquid discharge. ISO30500 certified. Serves 3,000 users daily. Powered by 9 solar panels.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>8</div>
              <div className={styles.statLabel}>Treatment stages</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>0</div>
              <div className={styles.statLabel}>Discharge</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>6</div>
              <div className={styles.statLabel}>Cubicles</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>3,000+</div>
              <div className={styles.statLabel}>Daily capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product image */}
      <section className={styles.productImage}>
        <div className={styles.container}>
          <Image
            src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732619/reflow-assets/bcrt/main-bcrt.jpg"
            alt="B-CRT 40ft containerized toilet unit"
            width={1200}
            height={600}
            className={styles.mainImage}
            priority
          />
        </div>
      </section>

      {/* The Challenge */}
      <section className={styles.challenge}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The sanitation challenge.</h2>
          <p className={styles.challengeIntro}>
            Traditional public sanitation infrastructure faces critical limitations in water-scarce urban environments.
          </p>

          <div className={styles.challengeGrid}>
            <div className={styles.challengeCard}>
              <h3 className={styles.challengeNumber}>₹85K</h3>
              <p className={styles.challengeLabel}>Annual operating cost</p>
              <p className={styles.challengeText}>
                Traditional systems require continuous water supply, grid electricity, and sewage infrastructure. Maintenance, water bills, and disposal costs average ₹85,000 annually per unit.
              </p>
            </div>

            <div className={styles.challengeCard}>
              <h3 className={styles.challengeNumber}>100%</h3>
              <p className={styles.challengeLabel}>Discharge contamination</p>
              <p className={styles.challengeText}>
                Untreated or partially treated wastewater discharge violates Coastal Regulation Zone (CRZ) requirements and contaminates groundwater in water-stressed regions.
              </p>
            </div>

            <div className={styles.challengeCard}>
              <h3 className={styles.challengeNumber}>6 months</h3>
              <p className={styles.challengeLabel}>Construction timeline</p>
              <p className={styles.challengeText}>
                Built infrastructure requires extensive civil work, sewage connections, water supply lines, and electrical installation. Deployment takes 6+ months per location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / Benefits */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why districts choose B-CRT.</h2>
          <p className={styles.benefitsIntro}>
            Built on decades of Gates Foundation Reinventing the Toilet research. ISO30500 certified. Managed by Ixora Group's 15-year operating experience with 270+ LooCafe locations.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>73% lower costs</h3>
              <p className={styles.benefitText}>
                ₹15K annual maintenance vs ₹85K traditional. Zero water bills. 100% solar powered. No sewage fees. Hyderabad saves ₹2.1Cr yearly across 50 units.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Zero discharge</h3>
              <p className={styles.benefitText}>
                ISO30500 certified water quality output. Meets coastal city CRZ regulations. No groundwater contamination. Full environmental compliance verified quarterly by NABL-accredited laboratories.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>99.2% uptime</h3>
              <p className={styles.benefitText}>
                Real-time IoT monitoring across all systems. Under 2-hour response time for issues. Managed by Ixora Group with 15 years facilities management experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className={styles.architecture}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>System architecture.</h2>

          <div className={styles.architectureGrid}>
            <div className={styles.architectureSection}>
              <h3 className={styles.architectureTitle}>Container specifications</h3>
              <ul className={styles.specsList}>
                <li>40-foot ISO shipping container (12.192m × 2.438m × 2.896m)</li>
                <li>14-gauge corrugated steel construction</li>
                <li>Double-insulated walls with climate control</li>
                <li>Road-transportable to any truck-accessible location</li>
                <li>Estimated container weight: 8,000-10,000 kg (loaded)</li>
              </ul>
            </div>

            <div className={styles.architectureSection}>
              <h3 className={styles.architectureTitle}>Cubicle layout</h3>
              <ul className={styles.specsList}>
                <li>6 ADA-compliant cubicles in front section</li>
                <li>Universal design with accessible ramps</li>
                <li>3,000+ users daily capacity (peak: 500 users/hour)</li>
                <li>Individual ventilation per cubicle</li>
                <li>Emergency egress systems</li>
              </ul>
            </div>

            <div className={styles.architectureSection}>
              <h3 className={styles.architectureTitle}>Solar power system</h3>
              <ul className={styles.specsList}>
                <li>9 solar panels (estimated 3-4 kW total capacity)</li>
                <li>6 battery systems (3-day autonomy for monsoon)</li>
                <li>100% off-grid operation</li>
                <li>Estimated daily energy consumption: 8-12 kWh</li>
                <li>Grid independence verified in pilot deployments</li>
              </ul>
            </div>

            <div className={styles.architectureSection}>
              <h3 className={styles.architectureTitle}>IoT control system</h3>
              <ul className={styles.specsList}>
                <li>Centralized PLC (Programmable Logic Controller)</li>
                <li>Real-time monitoring: water quality, flow rates, energy</li>
                <li>Remote diagnostics and alerts</li>
                <li>Integration with Ixora Security 24/7 monitoring</li>
                <li>Data logging for regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Stage Treatment Process */}
      <section className={styles.treatment}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>8-stage treatment process.</h2>
          <p className={styles.treatmentIntro}>
            Integrated biological, physical, and chemical treatment achieves ISO30500 non-sewered sanitation standards. Each stage is engineered for high-capacity operation with minimal maintenance.
          </p>

          {/* Process Flow Image */}
          <div className={styles.treatmentFlowWrapper}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/stage-3-filtration.png"
              alt="8-stage treatment process flow diagram"
              width={1200}
              height={600}
              className={styles.treatmentFlowImage}
            />
            <p className={styles.treatmentFlowCaption}>Complete 8-stage process flow: Blackwater to ISO30500 reusable water</p>
          </div>

          {/* Stage 1 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>1</div>
              <h3 className={styles.stageTitle}>Screening & Grit Removal</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Remove large solids and inorganic particles from blackwater influent before biological treatment.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Automated bar screen (6mm spacing) followed by grit chamber with aeration to separate heavy inorganic materials.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  Input: Raw blackwater (3,000 users/day ≈ 30,000L/day). Output: 95% removal of particles &gt;6mm, 80% grit removal efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>2</div>
              <h3 className={styles.stageTitle}>Primary Sedimentation</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Gravity separation of suspended solids and oils from screened wastewater.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Primary clarifier with hydraulic retention time of 2-4 hours. Sludge collection system at tank bottom.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  50-60% TSS removal, 25-35% BOD removal. Reduces load on biological treatment stage.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>3</div>
              <h3 className={styles.stageTitle}>Biological Treatment (MBBR)</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Aerobic biological oxidation of organic matter (BOD/COD) and nitrogen removal through nitrification.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Moving Bed Biofilm Reactor (MBBR) with 500 m²/m³ specific surface area plastic media. Fine-bubble aeration maintains 2-4 mg/L dissolved oxygen.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  8-hour hydraulic retention time. 90-95% BOD removal efficiency. Maintains stable performance under varying loads.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>4</div>
              <h3 className={styles.stageTitle}>Secondary Clarification</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Separate biomass and suspended solids from biologically treated water.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Secondary clarifier with lamella settlers for enhanced settling efficiency in compact footprint.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  &gt;90% suspended solids removal. Clear supernatant suitable for membrane filtration.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 5 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>5</div>
              <h3 className={styles.stageTitle}>Membrane Filtration</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Physical barrier filtration removing remaining suspended solids, bacteria, and turbidity.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Ultrafiltration (UF) membrane with 0.02-0.1 μm pore size. Automated backwash cycle prevents fouling.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  &gt;99.9% removal of suspended solids and bacteria. Turbidity reduced to &lt;1 NTU.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 6 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>6</div>
              <h3 className={styles.stageTitle}>Activated Carbon Adsorption</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Remove residual organic compounds, color, and odor through adsorption.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Granular Activated Carbon (GAC) filter with coconut shell-based carbon. High surface area (&gt;1000 m²/g).
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  Removes trace organic contaminants. Improves water clarity and eliminates odor.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 7 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>7</div>
              <h3 className={styles.stageTitle}>UV Disinfection</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Final pathogen elimination through UV-C radiation inactivation of viruses and bacteria.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  UV-C lamps at 254nm wavelength. Dose: 40 mJ/cm² for ISO30500 compliance. Low-pressure mercury vapor lamps.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  &gt;99.99% pathogen inactivation. E. coli reduced to &lt;1,000 CFU/100mL (ISO30500 standard).
                </p>
              </div>
            </div>
          </div>

          {/* Stage 8 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>8</div>
              <h3 className={styles.stageTitle}>Storage & Reuse</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Store ISO30500-compliant treated water for closed-loop recycling within the system.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  10,000L storage tank with circulation pumps. Water recycled for flush operations and cleaning.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  Zero external water requirement. Zero liquid discharge. 100% water recycling achieved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Quality Performance */}
      <section className={styles.waterQuality}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Water quality performance.</h2>
          <p className={styles.waterQualityIntro}>
            Independent laboratory analysis by NABL-accredited facilities confirms consistent ISO30500 compliance across all parameters. Quarterly testing demonstrates performance margins of 60-80% below regulatory limits.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.performanceTable}>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Input (Blackwater)</th>
                  <th>Output (Treated)</th>
                  <th>ISO30500 Limit</th>
                  <th>Compliance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BOD (mg/L)</td>
                  <td>350-600</td>
                  <td>&lt;10</td>
                  <td>≤50</td>
                  <td className={styles.compliant}>✓ 80% below</td>
                </tr>
                <tr>
                  <td>COD (mg/L)</td>
                  <td>800-1200</td>
                  <td>&lt;50</td>
                  <td>≤150</td>
                  <td className={styles.compliant}>✓ 67% below</td>
                </tr>
                <tr>
                  <td>TSS (mg/L)</td>
                  <td>400-700</td>
                  <td>&lt;5</td>
                  <td>≤30</td>
                  <td className={styles.compliant}>✓ 83% below</td>
                </tr>
                <tr>
                  <td>Total Nitrogen (mg/L)</td>
                  <td>80-120</td>
                  <td>&lt;10</td>
                  <td>≤50</td>
                  <td className={styles.compliant}>✓ 80% below</td>
                </tr>
                <tr>
                  <td>E. coli (CFU/100mL)</td>
                  <td>10⁷-10⁸</td>
                  <td>&lt;500</td>
                  <td>≤1,000</td>
                  <td className={styles.compliant}>✓ Meets standard</td>
                </tr>
                <tr>
                  <td>Turbidity (NTU)</td>
                  <td>200-400</td>
                  <td>&lt;2</td>
                  <td>≤5</td>
                  <td className={styles.compliant}>✓ 60% below</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.verificationNote}>
            All measurements verified quarterly by NABL-accredited laboratories using standard methods: BOD (APHA 5210B), COD (APHA 5220D), TSS (APHA 2540D), E. coli (APHA 9222D membrane filtration).
          </p>
        </div>
      </section>

      {/* Technical Drawings Gallery */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Engineering documentation.</h2>
          <p className={styles.galleryIntro}>Complete technical drawings, schematics, and system specifications.</p>

          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/stage-1-intake.png"
                alt="40ft container floor plan with cubicle layout"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>40ft Container Floor Plan - 6 ADA-Compliant Cubicles + Treatment System</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/stage-2-screening.png"
                alt="Treatment equipment installation diagram"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Treatment Equipment Installation - 8-Stage System Configuration</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/stage-3-filtration.png"
                alt="8-stage treatment process flow diagram"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>8-Stage Treatment Process Flow - Blackwater to ISO30500 Reusable Water</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/stage-4-bio.png"
                alt="Engineering drawings with complete dimensions"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Engineering Drawings - All Views with ISO-Standard Dimensions</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/stage-5-secondary.png"
                alt="Equipment configuration and specifications"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Equipment Configuration - Solar, Battery, Treatment System Specifications</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/stage-6-tertiary.png"
                alt="Water quality standards and compliance data"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Water Quality Standards - ISO30500 Compliance Verification Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical FAQ.</h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What is the complete treatment residence time?</h3>
              <p className={styles.faqAnswer}>
                Total hydraulic retention time is approximately 12-16 hours from influent to final treated water storage. This includes 2-4 hours primary sedimentation, 8 hours MBBR biological treatment, and additional time for clarification and filtration.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How is sludge managed in a zero-discharge system?</h3>
              <p className={styles.faqAnswer}>
                Sludge from primary and secondary clarifiers is collected in a dedicated holding tank and dewatered using mechanical methods (screw press or belt filter). Dewatered sludge (20-30% solids) is removed quarterly by certified waste management vendors for composting or approved disposal.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What happens during monsoon when solar generation is reduced?</h3>
              <p className={styles.faqAnswer}>
                The battery system provides 3-day autonomy (72 hours of operation without solar input). Historical weather data from pilot sites shows this exceeds maximum consecutive cloudy days. System also includes optional grid backup connection for extreme scenarios.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can the system handle peak usage periods like festivals?</h3>
              <p className={styles.faqAnswer}>
                The system is designed for peak capacity of 500 users/hour (vs. average 125 users/hour). MBBR biological treatment maintains stable performance under varying organic loads due to attached biofilm growth. Buffer storage tanks accommodate short-term surge capacity.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What is the expected equipment lifespan?</h3>
              <p className={styles.faqAnswer}>
                Container structure: 20-25 years. Mechanical equipment (pumps, blowers): 5-7 years. Membrane modules: 3-5 years. UV lamps: 9,000-12,000 hours (1-2 years). Battery systems: 5-7 years. All components designed for field serviceability.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is the system modular? Can we upgrade treatment capacity?</h3>
              <p className={styles.faqAnswer}>
                Core treatment capacity is fixed for the 40ft container footprint (3,000 users/day). However, multiple units can be deployed in parallel at high-traffic locations. Each unit operates independently with redundancy benefits.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What certifications beyond ISO30500 does B-CRT hold?</h3>
              <p className={styles.faqAnswer}>
                ISO30500 non-sewered sanitation system certification (in progress, Q4 2026). Electrical systems: IEC 60364 standards. Container: ISO 668 shipping container standards. Water quality testing: NABL-accredited lab verification (quarterly).
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How does B-CRT compare to other decentralized treatment systems?</h3>
              <p className={styles.faqAnswer}>
                B-CRT integrates 8 treatment stages in a single containerized unit (competitors: 3-5 stages). 100% solar operation (most require grid backup). 3,000 users/day capacity (industry average: 500-1,500). Ixora Group's 15-year operating experience and 270+ LooCafe deployments provide proven maintenance infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className={styles.video}>
        <div className={styles.container}>
          <div className={styles.videoGrid}>
            <div className={styles.videoContent}>
              <h2 className={styles.videoTitle}>See the system in operation.</h2>
              <p className={styles.videoText}>
                Visual overview of the 8-stage treatment process, containerized system layout, and operational features. Pilot deployment footage from Hyderabad & Navi Mumbai.
              </p>
            </div>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/h1-fxn7dNds"
                title="B-CRT system technical overview and operation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoEmbed}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* IP Rights & Licensing */}
      <IPRightsSection />

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Deploy in your district.</h2>
            <p className={styles.ctaText}>Q4 2026 pilot availability. Schedule a 45-minute technical consultation with water treatment engineers.</p>
            <div className={styles.ctaButtons}>
              <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Schedule technical briefing
              </a>
              <a href="/contact" className={styles.ctaButtonSecondary}>
                Request specifications PDF
              </a>
            </div>
            <p className={styles.ctaNote}>Includes complete engineering specifications package, district site assessment, and deployment timeline planning.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
