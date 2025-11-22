import Image from 'next/image'
import styles from './LooCafeComparison.module.css'

export default function LooCafeComparison() {
  return (
    <section className={styles.comparison}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>Sister Company Partnership</p>
          <h2 className={styles.title}>LooCafe vs ReFlow</h2>
          <p className={styles.subtitle}>
            Two models solving different sanitation challenges. Same mission: transforming public health infrastructure.
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className={styles.overviewGrid}>
          <div className={styles.overviewCard}>
            <div className={styles.logoContainer}>
              <h3 className={styles.brandName}>LooCafe</h3>
            </div>
            <p className={styles.overviewTagline}>Pay-per-use public toilet network</p>
            <div className={styles.overviewStat}>
              <span className={styles.overviewNumber}>270+</span>
              <span className={styles.overviewLabel}>Units deployed</span>
            </div>
          </div>

          <div className={styles.overviewCard}>
            <div className={styles.logoContainer}>
              <h3 className={styles.brandName}>ReFlow</h3>
            </div>
            <p className={styles.overviewTagline}>B2G district infrastructure</p>
            <div className={styles.overviewStat}>
              <span className={styles.overviewNumber}>3-5</span>
              <span className={styles.overviewLabel}>Year contracts</span>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCategory}>Category</th>
                <th className={styles.thBrand}>LooCafe</th>
                <th className={styles.thBrand}>ReFlow</th>
              </tr>
            </thead>
            <tbody>
              {/* Business Model */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>💼</div>
                  <span>Business Model</span>
                </td>
                <td className={styles.tdData}>
                  <strong>Public-Private Partnership (PPP)</strong>
                  <p>Revenue from café/PoS funds free public toilets</p>
                </td>
                <td className={styles.tdData}>
                  <strong>Build-Operate-Transfer (BOT)</strong>
                  <p>Government contracts for district-wide infrastructure</p>
                </td>
              </tr>

              {/* Target Customer */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>🎯</div>
                  <span>Target Customer</span>
                </td>
                <td className={styles.tdData}>
                  <strong>Municipal Governments (GHMC, etc.)</strong>
                  <p>Urban areas with high foot traffic</p>
                </td>
                <td className={styles.tdData}>
                  <strong>District/State Governments</strong>
                  <p>Large-scale district sanitation programs</p>
                </td>
              </tr>

              {/* Pricing */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>💰</div>
                  <span>User Pricing</span>
                </td>
                <td className={styles.tdData}>
                  <strong>Free for users</strong>
                  <p>Sustained by café revenue, advertising, partnership fees</p>
                </td>
                <td className={styles.tdData}>
                  <strong>Free for users</strong>
                  <p>Government-funded via contract fees</p>
                </td>
              </tr>

              {/* Setup Cost */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>🏗️</div>
                  <span>Setup Cost</span>
                </td>
                <td className={styles.tdData}>
                  <strong>₹15-20 lakhs per unit</strong>
                  <p>Includes café, toilet, solar, sewage connections</p>
                </td>
                <td className={styles.tdData}>
                  <strong>Zero upfront for government</strong>
                  <p>ReFlow invests, operates, then transfers ownership</p>
                </td>
              </tr>

              {/* Deployment Scale */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>📍</div>
                  <span>Deployment Scale</span>
                </td>
                <td className={styles.tdData}>
                  <strong>270+ units (as of 2024)</strong>
                  <p>Hyderabad, Chennai, Jammu & Kashmir, Tamil Nadu, Telangana</p>
                </td>
                <td className={styles.tdData}>
                  <strong>District-level contracts</strong>
                  <p>10-100+ units per district contract</p>
                </td>
              </tr>

              {/* Technology */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>⚙️</div>
                  <span>Technology</span>
                </td>
                <td className={styles.tdData}>
                  <strong>IoT + Solar</strong>
                  <p>Live hygiene tracking, water sensors, shipping containers</p>
                </td>
                <td className={styles.tdData}>
                  <strong>B-CRT + ISO30500</strong>
                  <p>Zero discharge, 100% solar, advanced waste processing</p>
                </td>
              </tr>

              {/* Setup Time */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>⏱️</div>
                  <span>Setup Time</span>
                </td>
                <td className={styles.tdData}>
                  <strong>2-4 weeks</strong>
                  <p>Rapid deployment with prefabricated shipping containers</p>
                </td>
                <td className={styles.tdData}>
                  <strong>2 days - 2 weeks</strong>
                  <p>Mini: 2-3 days, Standard: 1-2 weeks, B-CRT: custom</p>
                </td>
              </tr>

              {/* Capacity */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>👥</div>
                  <span>Daily Capacity</span>
                </td>
                <td className={styles.tdData}>
                  <strong>500-1,500 users/day</strong>
                  <p>Varies by unit size and location</p>
                </td>
                <td className={styles.tdData}>
                  <strong>500-3,000+ users/day</strong>
                  <p>Mini: 500-1,000, Standard: 1,000-2,000, B-CRT: 3,000+</p>
                </td>
              </tr>

              {/* Revenue Streams */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>💵</div>
                  <span>Revenue Streams</span>
                </td>
                <td className={styles.tdData}>
                  <strong>4 streams</strong>
                  <p>Café sales, partnership fees, advertising, franchising</p>
                </td>
                <td className={styles.tdData}>
                  <strong>2 streams</strong>
                  <p>Government contracts, maintenance agreements</p>
                </td>
              </tr>

              {/* Partnership */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>🤝</div>
                  <span>Key Partnerships</span>
                </td>
                <td className={styles.tdData}>
                  <strong>Gates Foundation (G2RT)</strong>
                  <p>Exclusive partner for Gen-2 Reinvented Toilets, launching 2025</p>
                </td>
                <td className={styles.tdData}>
                  <strong>Georgia Tech + EcoSan</strong>
                  <p>Research partnership, ISO-certified manufacturing in Yixing, China</p>
                </td>
              </tr>

              {/* Financial Performance */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>📊</div>
                  <span>Financial Performance</span>
                </td>
                <td className={styles.tdData}>
                  <strong>₹21.5 Cr annual revenue (FY2023)</strong>
                  <p>15-year payback period per unit, bootstrapped (no VC funding)</p>
                </td>
                <td className={styles.tdData}>
                  <strong>Contract-based revenue</strong>
                  <p>3-5 year government contracts with maintenance agreements</p>
                </td>
              </tr>

              {/* Expansion Goals */}
              <tr>
                <td className={styles.tdCategory}>
                  <div className={styles.categoryIcon}>🚀</div>
                  <span>Expansion Goals (2024-2025)</span>
                </td>
                <td className={styles.tdData}>
                  <strong>1,000-2,000 units</strong>
                  <p>New states + G2RT rollout in 2025</p>
                </td>
                <td className={styles.tdData}>
                  <strong>Multi-district contracts</strong>
                  <p>B-CRT launch Q4 2026, targeting state-level agreements</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key Differences Summary */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>LooCafe Ideal For:</h3>
            <ul className={styles.summaryList}>
              <li>High foot-traffic urban areas</li>
              <li>Municipal government partnerships</li>
              <li>Rapid deployment (2-4 weeks)</li>
              <li>Revenue-generating café model</li>
              <li>Urban hawker formalization</li>
              <li>Cities with existing sewage infrastructure</li>
            </ul>
          </div>

          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>ReFlow Ideal For:</h3>
            <ul className={styles.summaryList}>
              <li>District-wide sanitation programs</li>
              <li>Zero upfront cost for government</li>
              <li>Off-grid locations (100% solar)</li>
              <li>ISO30500 compliance required</li>
              <li>Zero liquid discharge mandate</li>
              <li>Multi-year infrastructure contracts</li>
            </ul>
          </div>
        </div>

        {/* Partnership Note */}
        <div className={styles.partnership}>
          <div className={styles.partnershipIcon}>🤝</div>
          <div className={styles.partnershipContent}>
            <h3 className={styles.partnershipTitle}>Sister Companies Under Ixora Group</h3>
            <p className={styles.partnershipText}>
              LooCafe and ReFlow both operate under the Ixora Group umbrella, founded by Abhishek Nath.
              LooCafe's proven deployment of 270+ units demonstrates the scalability of next-generation
              sanitation infrastructure, while ReFlow focuses on advanced B-CRT technology for large-scale
              government contracts.
            </p>
            <div className={styles.partnershipLinks}>
              <a
                href="https://loocafe.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnershipLink}
              >
                Visit LooCafe →
              </a>
              <a
                href="/contact"
                className={styles.partnershipLink}
              >
                Partner with ReFlow →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
