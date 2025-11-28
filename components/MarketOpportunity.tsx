'use client'

import styles from './MarketOpportunity.module.css'

export default function MarketOpportunity() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.badge}>Market Intelligence</div>
        <h2 className={styles.title}>A $2.46 billion opportunity.</h2>
        <p className={styles.subtitle}>
          India&apos;s decentralized wastewater treatment market is growing at 10.8% CAGR.
          B-CRT is positioned at the intersection of government mandates and market demand.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>$1.33B</div>
            <div className={styles.statLabel}>2024 Market Size</div>
            <div className={styles.statGrowth}>→ $2.46B by 2030</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>500K+</div>
            <div className={styles.statLabel}>Public Toilets in India</div>
            <div className={styles.statGrowth}>100K+ need technology upgrade</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>300+</div>
            <div className={styles.statLabel}>AMRUT Cities</div>
            <div className={styles.statGrowth}>Need decentralized solutions</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>₹57B</div>
            <div className={styles.statLabel}>Combined Budget</div>
            <div className={styles.statGrowth}>SBM 2.0 + AMRUT 2.0 + Smart Cities</div>
          </div>
        </div>

        <div className={styles.programsSection}>
          <h3 className={styles.programsTitle}>Government Program Alignment</h3>
          <div className={styles.programsGrid}>
            <div className={styles.programCard}>
              <div className={styles.programHeader}>
                <span className={styles.programBadge}>SBM 2.0</span>
                <span className={styles.programBudget}>₹1.41L Cr</span>
              </div>
              <h4 className={styles.programName}>Swachh Bharat Mission</h4>
              <p className={styles.programDesc}>
                Focus on sustainable sanitation technology and faecal sludge management.
                B-CRT meets all sustainable tech requirements.
              </p>
              <div className={styles.programFit}>High Alignment</div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programHeader}>
                <span className={styles.programBadge}>AMRUT 2.0</span>
                <span className={styles.programBudget}>₹2.87L Cr</span>
              </div>
              <h4 className={styles.programName}>Urban Water & Sewerage</h4>
              <p className={styles.programDesc}>
                300+ cities need decentralized treatment solutions where sewerage is incomplete.
                B-CRT explicitly encouraged.
              </p>
              <div className={styles.programFit}>High Alignment</div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programHeader}>
                <span className={styles.programBadge}>Smart Cities</span>
                <span className={styles.programBudget}>₹48K Cr</span>
              </div>
              <h4 className={styles.programName}>IoT-Enabled Infrastructure</h4>
              <p className={styles.programDesc}>
                Requires IoT monitoring, real-time tracking, digital payments.
                B-CRT&apos;s 35+ sensors meet all mandates.
              </p>
              <div className={styles.programFit}>High Alignment</div>
            </div>
          </div>
        </div>

        <div className={styles.ctaRow}>
          <a href="/government-framework" className={styles.ctaLink}>
            View Government Framework Guide →
          </a>
        </div>
      </div>
    </section>
  )
}
