import type { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

// Dynamic import for IP Rights Section
const IPRightsSection = dynamic(() => import('@/components/IPRightsSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})

export const metadata: Metadata = {
  title: 'B-CRT Technical Specifications - Blackwater Circular Reinvented Toilet',
  description: '8-stage treatment. Zero discharge. ISO30500 compliant. 98% water recovery. 4.05kWp solar capacity. 72+ hours off-grid. Gates Foundation technology. Georgia Tech verified.',
  keywords: ['B-CRT', 'Blackwater Circular Reinvented Toilet', 'reinvented toilet', 'Gates Foundation', 'ISO30500', 'zero discharge toilet', 'water treatment technology', 'Georgia Tech', 'containerized toilet', 'off-grid sanitation'],
  openGraph: {
    title: 'B-CRT Technical Specifications | ReFlow Toilets',
    description: '8-stage treatment. Zero discharge. ISO30500 compliant. 98% water recovery. Gates Foundation technology verified by Georgia Tech.',
    images: ['/images/bcrt/MAIN B-CRT IMAGE.png'],
  },
}

export default function BCRTPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.badge}>Pilot Unit Live in Hyderabad</div>
          <h1 className={styles.title}>B-CRT</h1>
          <p className={styles.subtitle}>Blackwater Circular Reinvented Toilet.</p>
          <p className={styles.description}>
            8-stage treatment. Zero discharge. ISO30500 compliant. 4.05kWp solar capacity. 72+ hours off-grid autonomy. Gates Foundation technology.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>8</div>
              <div className={styles.statLabel}>Treatment stages</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>Water recovery</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>6</div>
              <div className={styles.statLabel}>Cubicles</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>4.05kWp</div>
              <div className={styles.statLabel}>Solar capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product image */}
      <section className={styles.productImage}>
        <div className={styles.container}>
          <Image
            src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png"
            alt="B-CRT 40ft containerized toilet unit"
            width={1200}
            height={600}
            className={styles.mainImage}
            priority
          />
        </div>
      </section>

      {/* Video Demo Section */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>See B-CRT in action.</h2>
          <p className={styles.videoIntro}>
            Watch how our 8-stage treatment process transforms waste into safe water - all within a 40-foot container.
          </p>
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/c9999G5DJEY"
              title="B-CRT Technology Demo - How Zero-Discharge Toilets Work"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ borderRadius: '16px' }}
            />
          </div>
          <p className={styles.videoCaption}>
            4-minute overview of the complete B-CRT treatment process
          </p>
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
            Built on Gates Foundation "Reinvent the Toilet" initiative. ISO30500 compliant. Verified by Georgia Tech Research Institute. Managed by Ixora Group's 15-year operating experience with 270+ LooCafe locations.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>98% water reduction</h3>
              <p className={styles.benefitText}>
                Near-complete water recycling after initial 10,000L charge. Annual savings: 420,000-600,000 liters per unit. 65% energy reduction vs conventional systems.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>55% lower operating costs</h3>
              <p className={styles.benefitText}>
                Solar-powered operation. Zero sewage fees. Sludge extraction only every 9-12 months. Class A Biosolids end product per EPA standards.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Zero discharge</h3>
              <p className={styles.benefitText}>
                Complete elimination of sewage system dependencies. Meets coastal city CRZ regulations. No groundwater contamination. ISO30500 water quality output.
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
                <li>40-foot ISO shipping container (20-foot variant available)</li>
                <li>304 stainless steel internal components (1.5mm thickness)</li>
                <li>Road-transportable to any truck-accessible location</li>
                <li>Installation: 72 hours from site preparation to commissioning</li>
                <li>Fully operational within 96 hours of installation</li>
              </ul>
            </div>

            <div className={styles.architectureSection}>
              <h3 className={styles.architectureTitle}>Cubicle layout</h3>
              <ul className={styles.specsList}>
                <li>6 individual toilet cubicles serving 300+ users daily</li>
                <li>Universal design with accessible features</li>
                <li>Individual ventilation per cubicle</li>
                <li>6.5m² commercial space for point-of-sale partnership</li>
                <li>16m² advertising panel space across unit surfaces</li>
              </ul>
            </div>

            <div className={styles.architectureSection}>
              <h3 className={styles.architectureTitle}>Solar power system</h3>
              <ul className={styles.specsList}>
                <li>9 solar panels × 450W each = 4.05kWp total capacity</li>
                <li>Maximum daily yield: 16-20kWh</li>
                <li>6 battery systems = 20kWh lithium iron phosphate storage</li>
                <li>72+ hours off-grid autonomy (monsoon resilience)</li>
                <li>Daily consumption: 12-15kWh under normal operation</li>
                <li>Automatic grid switchover for critical systems (optional)</li>
              </ul>
            </div>

            <div className={styles.architectureSection}>
              <h3 className={styles.architectureTitle}>IoT control system</h3>
              <ul className={styles.specsList}>
                <li>35+ monitoring points across all systems</li>
                <li>Industrial-grade edge computing with redundant storage</li>
                <li>Multi-redundant 4G/LTE with LoRaWAN backup</li>
                <li>Three-tiered dashboard: Area executives, Operations, Unit operators</li>
                <li>Gemini 2.5 AI integration for automated reporting</li>
                <li>End-to-end encryption with role-based access controls</li>
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
            Integrated biological, physical, and chemical treatment achieves ISO30500 non-sewered sanitation standards. 95-98% water recovery efficiency. Processing capacity: 2,000-3,000L wastewater daily.
          </p>

          {/* Process Flow Image */}
          <div className={styles.treatmentFlowWrapper}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
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
              <h3 className={styles.stageTitle}>Pre-treatment & Screening</h3>
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
                  2mm fine screening with automated solids separation. Prevents downstream equipment damage and improves treatment efficiency.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  Removes debris &gt;2mm. Protects pumps and membranes. First line of defense in the treatment chain.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>2</div>
              <h3 className={styles.stageTitle}>Primary Anaerobic Digestion</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Break down organic matter in oxygen-free environment. Reduces BOD load and stabilizes waste.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  2,000L bioreactor with controlled anaerobic environment. Enzymatic pre-treatment accelerates decomposition.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  &gt;90% sludge volume reduction vs conventional systems. Sludge extraction required only every 9-12 months.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>3</div>
              <h3 className={styles.stageTitle}>Secondary Aerobic Treatment</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Aerobic biological oxidation of remaining organic matter (BOD/COD) and nitrogen removal through nitrification.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Fine-bubble diffusion system maintains optimal dissolved oxygen levels. High-efficiency biofilm media for microbial attachment.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  90-95% BOD removal efficiency. Stable performance under varying organic loads.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>4</div>
              <h3 className={styles.stageTitle}>Membrane Ultrafiltration</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Physical barrier filtration removing suspended solids, bacteria, and turbidity.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  0.04 micron ultrafiltration membrane. Automated backwash cycle prevents fouling and extends membrane life.
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

          {/* Stage 5 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>5</div>
              <h3 className={styles.stageTitle}>UV-C Advanced Oxidation</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Pathogen elimination through UV-C radiation inactivation of viruses and bacteria.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  UV-C lamps at 254nm wavelength. Optimal dose for ISO30500 compliance. Chemical-free disinfection.
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

          {/* Stage 6 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>6</div>
              <h3 className={styles.stageTitle}>Activated Carbon Filtration</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Remove trace organic contaminants, color, and odor through adsorption.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Granular Activated Carbon (GAC) filter. High surface area media captures micropollutants and improves aesthetics.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  Removes trace organic contaminants. Crystal-clear water with no residual odor.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 7 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>7</div>
              <h3 className={styles.stageTitle}>Mineralization & pH Stabilization</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Balance water chemistry for safe reuse and prevent pipe corrosion.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  Automated pH adjustment and mineral dosing system. Targets pH 6.8-7.2 range for optimal reuse compatibility.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  Consistent pH 6.8-7.2 output. Water chemistry optimized for toilet flushing and cleaning applications.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 8 */}
          <div className={styles.treatmentStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageNumber}>8</div>
              <h3 className={styles.stageTitle}>Final Disinfection & Storage</h3>
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Purpose</h4>
                <p className={styles.stageDetailText}>
                  Final quality verification and storage for closed-loop recycling within the system.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Technology</h4>
                <p className={styles.stageDetailText}>
                  10,000L storage tank with real-time quality monitoring. Circulation pumps maintain water freshness. Continuous sensor feedback.
                </p>
              </div>
              <div className={styles.stageDetail}>
                <h4 className={styles.stageDetailLabel}>Performance</h4>
                <p className={styles.stageDetailText}>
                  95-98% water recovery. Zero external water requirement after initial 10,000L charge. Zero liquid discharge.
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
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                alt="40ft container floor plan with cubicle layout"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>40ft Container Floor Plan - 6 ADA-Compliant Cubicles + Treatment System</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                alt="Treatment equipment installation diagram"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Treatment Equipment Installation - 8-Stage System Configuration</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                alt="8-stage treatment process flow diagram"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>8-Stage Treatment Process Flow - Blackwater to ISO30500 Reusable Water</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                alt="Engineering drawings with complete dimensions"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Engineering Drawings - All Views with ISO-Standard Dimensions</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
                alt="Equipment configuration and specifications"
                width={600}
                height={400}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>Equipment Configuration - Solar, Battery, Treatment System Specifications</p>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/screenshot-2025-04-03-011136.png"
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
                The system processes 2,000-3,000L of wastewater daily. The biological treatment maintains stable performance under varying organic loads due to attached biofilm growth. Buffer storage tanks accommodate short-term surge capacity.
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
                Core treatment capacity is fixed per container (300+ users daily, processing 2,000-3,000L wastewater). 20-foot variant available for space-constrained areas. Multiple units can be deployed in parallel at high-traffic locations. Each unit operates independently with redundancy benefits.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What certifications and validations does B-CRT have?</h3>
              <p className={styles.faqAnswer}>
                ISO30500 non-sewered sanitation compliance. Georgia Tech Research Institute independent performance verification. Gates Foundation technical review and comprehensive evaluation. Field testing in challenging environments (China). Electrical systems: IEC 60364 standards. Container: ISO 668 shipping container standards.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How does B-CRT compare to other decentralized treatment systems?</h3>
              <p className={styles.faqAnswer}>
                B-CRT integrates 8 treatment stages in a single containerized unit (competitors: 3-5 stages). 98% water consumption reduction vs conventional. 65% energy reduction. 55% lower operational costs. Ixora Group's 15-year operating experience and 270+ LooCafe deployments provide proven maintenance infrastructure.
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
            <p className={styles.ctaText}>Pilot unit operational in Hyderabad. Scaling to 50 units by December 2025. Schedule a 45-minute technical consultation with our water treatment engineers.</p>
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
