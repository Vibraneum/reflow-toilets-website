import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sanitation Bundles - Turnkey Infrastructure Solutions | ReFlow',
  description: 'Select from our pre-configured sanitation bundles: ReFlow Mini, Standard, and B-CRT Hub. Complete turnkey solutions with IoT, maintenance, and ISO30500 compliance included.',
  keywords: ['Sanitation bundles', 'turnkey toilets', 'ReFlow Mini', 'ReFlow Standard', 'B-CRT Hub', 'infrastructure packages', 'smart city sanitation'],
}

interface ProductSpec {
  name: string
  tagline: string
  image: string
  size: string
  capacity: string
  cubicles: string
  deployment: string
  treatment: string
  power: string
  technology: string
  bestFor: string[]
  dailyUsers: string
  costRange: string
  features: string[]
  deploymentTime: string
  maintenance: string
  customization: string
}

const products: ProductSpec[] = [
  {
    name: 'ReFlow Mini Bundle',
    tagline: 'Rapid Urban Deployment Kit',
    image: 'https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/products/mini-unit.jpg',
    size: '8×8 ft (64 sq ft)',
    capacity: '2 toilet cubicles',
    cubicles: '2 cubicles',
    deployment: 'Rapid (2-3 Days)',
    treatment: 'Basic on-site',
    power: 'Solar/Grid hybrid',
    technology: 'Standard IoT Suite',
    bestFor: [
      'Urban streets & sidewalks',
      'High pedestrian traffic areas',
      'Bus stops & transit hubs',
      'Parks & recreational areas',
      'Rapid deployment needs',
    ],
    dailyUsers: '500-1,000 users/day',
    costRange: '₹ (Entry Level)',
    features: [
      'Pre-fabricated modular unit',
      'Plug-and-play installation',
      'Basic IoT monitoring sensors',
      'Anti-vandalism fittings',
      'Auto-cleaning functionality',
      'Advertising display panels',
    ],
    deploymentTime: '2-3 days',
    maintenance: 'Low',
    customization: 'Branding Wrap',
  },
  {
    name: 'ReFlow Standard Bundle',
    tagline: 'Complete Community Solution',
    image: 'https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/products/standard-unit.png',
    size: '~15×10 ft (150 sq ft)',
    capacity: '3 toilet units',
    cubicles: '3 cubicles',
    deployment: 'Standard (1-2 Weeks)',
    treatment: 'Intermediate on-site',
    power: 'Solar primary',
    technology: 'Advanced IoT + AI',
    bestFor: [
      'Tourist locations & attractions',
      'District parks & gardens',
      'Educational institutions',
      'Event venues',
      'Municipal facilities',
    ],
    dailyUsers: '1,000-2,000 users/day',
    costRange: '₹₹ (Mid-range)',
    features: [
      'Custom architectural finish',
      'Full AI-monitoring suite',
      'Touchless automation',
      'Recycled water flushing',
      'LooCafe-patented design',
      'Digital ad revenue system',
    ],
    deploymentTime: '1-2 weeks',
    maintenance: 'Medium',
    customization: 'Full Architectural',
  },
  {
    name: '40ft B-CRT Hub',
    tagline: 'District Sanitation Center',
    image: 'https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/products/bcrt-container.png',
    size: '40ft container (320 sq ft)',
    capacity: '6 cubicles + urinals + special access',
    cubicles: '6+ cubicles + urinals',
    deployment: 'Infrastructure (1-3 Months)',
    treatment: 'ISO30500 Advanced',
    power: '100% Solar Off-grid',
    technology: 'Enterprise AI (Gemini)',
    bestFor: [
      'Smart city infrastructure',
      'Airport & transit terminals',
      'Government facilities',
      'Commercial complexes',
      'District-scale deployments',
    ],
    dailyUsers: '3,000+ users/day',
    costRange: '₹₹₹ (Premium)',
    features: [
      'ISO30500 water treatment plant',
      'Zero-sewage discharge',
      '10,000L daily recycling capacity',
      'Command center capability',
      'Complete circular economy',
      'Disaster relief ready',
    ],
    deploymentTime: '1-3 months',
    maintenance: 'Comprehensive',
    customization: 'Infrastructure Grade',
  },
]

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Turnkey Sanitation Bundles</h1>
          <p className={styles.subtitle}>
            Complete infrastructure packages designed for rapid deployment and immediate impact.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>ISO30500 Certified</span>
            <span className={styles.badge}>Gates Foundation Technology</span>
            <span className={styles.badge}>Government-Approved</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Product Cards */}
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.productHeader}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productTagline}>{product.tagline}</p>
              </div>

              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>

              <div className={styles.productSpecs}>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Size:</span>
                  <span className={styles.specValue}>{product.size}</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Capacity:</span>
                  <span className={styles.specValue}>{product.capacity}</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Daily Users:</span>
                  <span className={styles.specValue}>{product.dailyUsers}</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Deployment:</span>
                  <span className={styles.specValue}>{product.deploymentTime}</span>
                </div>
              </div>

              <div className={styles.bestFor}>
                <h3 className={styles.bestForTitle}>Best For:</h3>
                <ul className={styles.bestForList}>
                  {product.bestFor.map((use, i) => (
                    <li key={i}>{use}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.productCTA}>
                <a
                  href="/configure"
                  className={styles.ctaButton}
                >
                  Configure This Bundle
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <h2 className={styles.sectionTitle}>Detailed Comparison</h2>

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>ReFlow Mini</th>
                  <th>ReFlow Standard</th>
                  <th>40ft B-CRT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Footprint</strong></td>
                  <td>64 sq ft</td>
                  <td>150 sq ft</td>
                  <td>320 sq ft</td>
                </tr>
                <tr>
                  <td><strong>Capacity</strong></td>
                  <td>2 cubicles</td>
                  <td>3 cubicles</td>
                  <td>6+ cubicles + urinals</td>
                </tr>
                <tr>
                  <td><strong>Daily Users</strong></td>
                  <td>500-1,000</td>
                  <td>1,000-2,000</td>
                  <td>3,000+</td>
                </tr>
                <tr>
                  <td><strong>Deployment Time</strong></td>
                  <td>2-3 days</td>
                  <td>1-2 weeks</td>
                  <td>1-3 months</td>
                </tr>
                <tr>
                  <td><strong>Treatment Level</strong></td>
                  <td>Basic</td>
                  <td>Intermediate</td>
                  <td>ISO30500 Advanced</td>
                </tr>
                <tr>
                  <td><strong>Power Source</strong></td>
                  <td>Solar/Grid hybrid</td>
                  <td>Solar primary</td>
                  <td>100% Solar</td>
                </tr>
                <tr>
                  <td><strong>IoT Technology</strong></td>
                  <td>Standard</td>
                  <td>Advanced</td>
                  <td>AI-powered (Gemini 2.5)</td>
                </tr>
                <tr>
                  <td><strong>Customization</strong></td>
                  <td>Limited</td>
                  <td>Full</td>
                  <td>Full + Tech Integration</td>
                </tr>
                <tr>
                  <td><strong>Cost Range</strong></td>
                  <td>₹ (Most affordable)</td>
                  <td>₹₹ (Mid-range)</td>
                  <td>₹₹₹ (Premium)</td>
                </tr>
                <tr>
                  <td><strong>Ideal For</strong></td>
                  <td>Urban rapid deployment</td>
                  <td>Parks & tourist areas</td>
                  <td>Government & smart cities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost Comparison Section */}
        <section className={styles.costComparisonSection}>
          <h2 className={styles.sectionTitle}>Cost Comparison: ReFlow vs Traditional Infrastructure</h2>
          <p className={styles.costDescription}>
            Traditional sanitation infrastructure comes with hidden costs that municipalities bear for decades.
            ReFlow eliminates these through intelligent design and operational efficiency.
          </p>

          <div className={styles.costComparisonGrid}>
            <div className={styles.costColumn}>
              <h3 className={styles.costColumnTitle}>
                <span className={styles.costIcon}>🏛️</span>
                Traditional Public Toilets
              </h3>

              <div className={styles.costBreakdown}>
                <h4 className={styles.costBreakdownTitle}>Initial Costs</h4>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Construction (brick & mortar):</span>
                  <span className={styles.costValue}>₹15-25 lakhs</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Plumbing & sewerage connection:</span>
                  <span className={styles.costValue}>₹5-8 lakhs</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Land acquisition/lease:</span>
                  <span className={styles.costValue}>₹10-50 lakhs</span>
                </div>
                <div className={styles.costTotal}>
                  <strong>Total Initial:</strong> ₹30-83 lakhs
                </div>
              </div>

              <div className={styles.costBreakdown}>
                <h4 className={styles.costBreakdownTitle}>Annual Operating Costs</h4>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Water supply:</span>
                  <span className={styles.costValue}>₹2.5 lakhs/year</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Electricity:</span>
                  <span className={styles.costValue}>₹1.8 lakhs/year</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Sewerage treatment/disposal:</span>
                  <span className={styles.costValue}>₹3.2 lakhs/year</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Maintenance staff (3-4 people):</span>
                  <span className={styles.costValue}>₹6-8 lakhs/year</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Repairs & maintenance:</span>
                  <span className={styles.costValue}>₹2-3 lakhs/year</span>
                </div>
                <div className={styles.costTotal}>
                  <strong>Annual Operating:</strong> ₹15.5-19.5 lakhs/year
                </div>
              </div>

              <div className={styles.costBreakdown}>
                <h4 className={styles.costBreakdownTitle}>Hidden Costs</h4>
                <ul className={styles.hiddenCostsList}>
                  <li>Environmental damage (sewage leakage)</li>
                  <li>Health hazards from poor maintenance</li>
                  <li>Frequent breakdowns (no monitoring)</li>
                  <li>Manual oversight inefficiency</li>
                  <li>No revenue generation potential</li>
                </ul>
              </div>

              <div className={styles.fiveYearTCO}>
                <strong>5-Year TCO:</strong> ₹1.08-1.80 crores
              </div>
            </div>

            <div className={styles.costColumn + ' ' + styles.costColumnHighlight}>
              <div className={styles.savingsBadge}>Save 40-60%</div>
              <h3 className={styles.costColumnTitle}>
                <span className={styles.costIcon}>🌿</span>
                ReFlow Toilets
              </h3>

              <div className={styles.costBreakdown}>
                <h4 className={styles.costBreakdownTitle}>Initial Costs</h4>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Unit + Installation (turnkey):</span>
                  <span className={styles.costValue}>₹12-35 lakhs*</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>No sewerage connection needed:</span>
                  <span className={styles.costValue}>₹0</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Minimal land (64-320 sq ft):</span>
                  <span className={styles.costValue}>₹2-5 lakhs</span>
                </div>
                <div className={styles.costTotal}>
                  <strong>Total Initial:</strong> ₹14-40 lakhs
                </div>
                <p className={styles.costNote}>*Varies by model: Mini (₹12L), Standard (₹22L), B-CRT (₹35L)</p>
              </div>

              <div className={styles.costBreakdown}>
                <h4 className={styles.costBreakdownTitle}>Annual Operating Costs</h4>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Water (recycled 90%):</span>
                  <span className={styles.costValue}>₹0.3 lakhs/year</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Electricity (100% solar):</span>
                  <span className={styles.costValue}>₹0</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Zero discharge (no sewage):</span>
                  <span className={styles.costValue}>₹0</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Operations (IoT-monitored, 1 person):</span>
                  <span className={styles.costValue}>₹2-3 lakhs/year</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Minimal maintenance (AI alerts):</span>
                  <span className={styles.costValue}>₹0.5-1 lakh/year</span>
                </div>
                <div className={styles.costTotal}>
                  <strong>Annual Operating:</strong> ₹2.8-4.3 lakhs/year
                </div>
              </div>

              <div className={styles.costBreakdown}>
                <h4 className={styles.costBreakdownTitle}>Value-Add Benefits</h4>
                <ul className={styles.hiddenCostsList}>
                  <li>✓ Revenue from advertisements (₹50k-2L/year)</li>
                  <li>✓ Water recycling value (saves ₹2.2L/year)</li>
                  <li>✓ Zero environmental impact</li>
                  <li>✓ Real-time IoT monitoring (99.9% uptime)</li>
                  <li>✓ Scalable across entire district</li>
                </ul>
              </div>

              <div className={styles.fiveYearTCO + ' ' + styles.fiveYearTCOHighlight}>
                <strong>5-Year TCO:</strong> ₹28-62 lakhs
              </div>
            </div>
          </div>

          <div className={styles.costSummary}>
            <h3 className={styles.costSummaryTitle}>The Math is Clear</h3>
            <div className={styles.costSummaryGrid}>
              <div className={styles.costSummaryItem}>
                <div className={styles.costSummaryIcon}>💰</div>
                <h4>40-60% Lower TCO</h4>
                <p>Save ₹50 lakhs - ₹1.18 crores per unit over 5 years</p>
              </div>
              <div className={styles.costSummaryItem}>
                <div className={styles.costSummaryIcon}>⚡</div>
                <h4>82% Lower Operations</h4>
                <p>Annual costs drop from ₹15.5L to ₹2.8L through automation</p>
              </div>
              <div className={styles.costSummaryItem}>
                <div className={styles.costSummaryIcon}>🌍</div>
                <h4>Zero Environmental Cost</h4>
                <p>No sewage discharge, 100% solar, water recycling</p>
              </div>
              <div className={styles.costSummaryItem}>
                <div className={styles.costSummaryIcon}>📈</div>
                <h4>Revenue Generation</h4>
                <p>Offset 15-50% of operating costs through ads & recycling</p>
              </div>
            </div>
          </div>

          <div className={styles.costCTA}>
            <h3>Calculate Savings for Your District</h3>
            <p>Our team can provide a customized ROI analysis based on your specific requirements and scale</p>
            <a
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.costCTAButton}
            >
              Get Custom ROI Analysis
            </a>
          </div>
        </section>

        {/* ISO30500 Procurement Guidance Section */}
        <section className={styles.procurementSection}>
          <h2 className={styles.sectionTitle}>ISO30500 Procurement Guidance for Government Bodies</h2>
          <p className={styles.procurementIntro}>
            India's Liquid Waste Management Rules 2024 mandate ISO30500-compliant systems for non-sewered sanitation.
            Here's your complete guide to procuring ReFlow units within government frameworks.
          </p>

          <div className={styles.procurementTimeline}>
            <h3 className={styles.procurementTimelineTitle}>Procurement Process (4-8 weeks)</h3>

            <div className={styles.timelineSteps}>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h4>Needs Assessment & Site Survey</h4>
                  <p><strong>Duration:</strong> 1-2 weeks</p>
                  <ul>
                    <li>Identify deployment locations (footfall analysis)</li>
                    <li>Assess accessibility requirements</li>
                    <li>Determine model selection (Mini/Standard/B-CRT)</li>
                    <li>Calculate district-wide unit requirements</li>
                  </ul>
                  <p className={styles.timelineNote}>
                    <strong>ReFlow Support:</strong> Free site assessment and deployment planning
                  </p>
                </div>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h4>Budget Approval & Tender Preparation</h4>
                  <p><strong>Duration:</strong> 2-3 weeks</p>
                  <ul>
                    <li>Prepare technical specifications (ISO30500 compliance mandatory)</li>
                    <li>Include BoT model terms (if applicable)</li>
                    <li>Reference Government Gazette: CG DL-E-08102024-257748</li>
                    <li>Align with Liquid Waste Management Rules 2024</li>
                    <li>Secure departmental budget allocation</li>
                  </ul>
                  <p className={styles.timelineNote}>
                    <strong>ReFlow Support:</strong> Pre-qualified vendor documentation and compliance certificates
                  </p>
                </div>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h4>Vendor Selection & Contracting</h4>
                  <p><strong>Duration:</strong> 1-2 weeks</p>
                  <ul>
                    <li>Issue tender/RFP with ISO30500 requirement</li>
                    <li>Evaluate vendors on compliance + experience</li>
                    <li>Verify 270+ existing installations (Hyderabad proof)</li>
                    <li>Award contract (Outright purchase or BoT)</li>
                  </ul>
                  <p className={styles.timelineNote}>
                    <strong>ReFlow Status:</strong> Pre-qualified vendor for 50+ government locations
                  </p>
                </div>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>4</div>
                <div className={styles.timelineContent}>
                  <h4>Deployment & Handover</h4>
                  <p><strong>Duration:</strong> Variable (2 days - 3 months)</p>
                  <ul>
                    <li><strong>Mini:</strong> 2-3 days per unit</li>
                    <li><strong>Standard:</strong> 1-2 weeks per unit</li>
                    <li><strong>B-CRT:</strong> 1-3 months (Q4 2026)</li>
                    <li>Training for municipal staff</li>
                    <li>IoT platform access & dashboard setup</li>
                  </ul>
                  <p className={styles.timelineNote}>
                    <strong>BoT Option:</strong> We operate for agreed period, then transfer with trained staff
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.procurementRequirements}>
            <h3 className={styles.procurementRequirementsTitle}>Key Procurement Requirements</h3>

            <div className={styles.requirementsGrid}>
              <div className={styles.requirementCard}>
                <h4>📋 Technical Specifications</h4>
                <ul>
                  <li><strong>ISO30500 Compliance:</strong> Water quality certification (mandatory)</li>
                  <li><strong>Zero Discharge:</strong> No sewage connection required</li>
                  <li><strong>Solar Powered:</strong> 100% off-grid capability</li>
                  <li><strong>IoT Monitoring:</strong> Real-time tracking & AI alerts</li>
                  <li><strong>Modular Design:</strong> Relocatable & scalable</li>
                </ul>
              </div>

              <div className={styles.requirementCard}>
                <h4>📜 Compliance Documentation</h4>
                <ul>
                  <li><strong>Gazette Approval:</strong> CG DL-E-08102024-257748</li>
                  <li><strong>LWM Rules 2024:</strong> Compliance certificate</li>
                  <li><strong>Gates Foundation:</strong> Technology partnership proof</li>
                  <li><strong>Existing Deployments:</strong> 270+ location references</li>
                  <li><strong>Quality Certifications:</strong> ISO30500 test reports</li>
                </ul>
              </div>

              <div className={styles.requirementCard}>
                <h4>💰 Financial Terms</h4>
                <ul>
                  <li><strong>Payment Options:</strong> Outright purchase or BoT leasing</li>
                  <li><strong>BoT Terms:</strong> 3-5 year operation periods</li>
                  <li><strong>Warranty:</strong> 5-year structural, 2-year electrical</li>
                  <li><strong>AMC Available:</strong> Annual maintenance contracts</li>
                  <li><strong>Funding Support:</strong> AMRUT, Smart City schemes eligible</li>
                </ul>
              </div>

              <div className={styles.requirementCard}>
                <h4>🏆 Vendor Credentials</h4>
                <ul>
                  <li><strong>Experience:</strong> 270+ units operational in Hyderabad</li>
                  <li><strong>Capacity:</strong> 50M+ uses served</li>
                  <li><strong>Technology:</strong> Gates Foundation-backed innovation</li>
                  <li><strong>Scalability:</strong> District-wide deployment proven</li>
                  <li><strong>Support:</strong> 24/7 IoT monitoring + on-ground team</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.procurementFunding}>
            <h3 className={styles.procurementFundingTitle}>Eligible Government Funding Schemes</h3>
            <div className={styles.fundingGrid}>
              <div className={styles.fundingItem}>
                <div className={styles.fundingIcon}>🏛️</div>
                <h4>AMRUT 2.0</h4>
                <p>Atal Mission for Rejuvenation and Urban Transformation - covers sanitation infrastructure for ULBs</p>
              </div>
              <div className={styles.fundingItem}>
                <div className={styles.fundingIcon}>🌆</div>
                <h4>Smart Cities Mission</h4>
                <p>Smart city proposals can include IoT-enabled public sanitation under urban infrastructure</p>
              </div>
              <div className={styles.fundingItem}>
                <div className={styles.fundingIcon}>🚰</div>
                <h4>Swachh Bharat Mission-U 2.0</h4>
                <p>Focus on ODF++ and ODF+++ cities - ISO30500 compliant systems eligible</p>
              </div>
              <div className={styles.fundingItem}>
                <div className={styles.fundingIcon}>💧</div>
                <h4>Jal Jeevan Mission (Urban)</h4>
                <p>Water recycling and conservation components qualify under circular water economy</p>
              </div>
            </div>
          </div>

          <div className={styles.procurementCTA}>
            <h3>Need Help with Procurement?</h3>
            <p>Our government relations team can assist with tender preparation, compliance documentation, and funding scheme alignment</p>
            <a
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.procurementCTAButton}
            >
              Schedule Procurement Consultation
            </a>
          </div>
        </section>

        {/* Build-Operate-Transfer Section */}
        <section className={styles.botSection}>
          <h2 className={styles.sectionTitle}>Build-Operate-Transfer (BoT) Model</h2>
          <p className={styles.botDescription}>
            All ReFlow units can be deployed on a Build-Operate-Transfer basis, de-risking deployment
            for government agencies and ensuring operational excellence from day one.
          </p>

          <div className={styles.botSteps}>
            <div className={styles.botStep}>
              <div className={styles.botIcon}>🏗️</div>
              <h3>Build</h3>
              <p>We construct and install the complete unit with all infrastructure</p>
            </div>
            <div className={styles.botStep}>
              <div className={styles.botIcon}>⚙️</div>
              <h3>Operate</h3>
              <p>We manage operations for agreed period with trained staff</p>
            </div>
            <div className={styles.botStep}>
              <div className={styles.botIcon}>🤝</div>
              <h3>Transfer</h3>
              <p>Full ownership transfers to municipality with training completed</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.finalCTA}>
          <h2>Not Sure Which Model is Right for Your District?</h2>
          <p>Schedule a consultation with our infrastructure planning team</p>
          <a
            href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButtonLarge}
          >
            Schedule Infrastructure Consultation
          </a>
        </section>
      </div>
    </div>
  )
}
