import Link from 'next/link'
import styles from './EcosystemShowcase.module.css'

export default function EcosystemShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Ixora Ecosystem</h2>
          <p className={styles.subtitle}>
            Complete infrastructure solutions—from sanitation to security, facilities management to social impact
          </p>
        </div>

        <div className={styles.brandsGrid}>
          {/* ReFlow Toilets */}
          <div className={styles.brandCard}>
            <div className={styles.brandIcon}>🚽</div>
            <h3 className={styles.brandName}>ReFlow Toilets</h3>
            <p className={styles.brandDescription}>
              Smart sanitation infrastructure with ISO30500 certification, zero discharge, and 100% solar power
            </p>
            <div className={styles.brandStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>Product Lines</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Solar</span>
              </div>
            </div>
          </div>

          {/* Ixora Group */}
          <div className={styles.brandCard}>
            <div className={styles.brandIcon}>🏢</div>
            <h3 className={styles.brandName}>Ixora Group</h3>
            <p className={styles.brandDescription}>
              15+ years of facilities management expertise—operating and maintaining all ReFlow deployments
            </p>
            <div className={styles.brandStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Years</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
            </div>
            <a href="https://www.ixoragroup.com" target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
              Visit →
            </a>
          </div>

          {/* Ixora Security */}
          <div className={styles.brandCard}>
            <div className={styles.brandIcon}>🔒</div>
            <h3 className={styles.brandName}>Ixora Security</h3>
            <p className={styles.brandDescription}>
              24/7 IoT monitoring, CCTV surveillance, and rapid emergency response for all installations
            </p>
            <div className={styles.brandStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Monitoring</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>IoT</span>
                <span className={styles.statLabel}>Enabled</span>
              </div>
            </div>
            <a href="https://www.ixorasecurity.com" target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
              Visit →
            </a>
          </div>

          {/* LooCafe */}
          <div className={styles.brandCard}>
            <div className={styles.brandIcon}>☕</div>
            <h3 className={styles.brandName}>LooCafe</h3>
            <p className={styles.brandDescription}>
              India's largest public toilet network—270+ locations proving the ReFlow model at scale
            </p>
            <div className={styles.brandStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>270+</span>
                <span className={styles.statLabel}>Locations</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>HYD</span>
                <span className={styles.statLabel}>Citywide</span>
              </div>
            </div>
            <a href="https://www.loocafe.com" target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
              Visit →
            </a>
          </div>

          {/* DRNF */}
          <div className={styles.brandCard}>
            <div className={styles.brandIcon}>❤️</div>
            <h3 className={styles.brandName}>DRNF</h3>
            <p className={styles.brandDescription}>
              Social impact foundation—116,800+ chai served, 70+ jobs created, education support for students
            </p>
            <div className={styles.brandStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>70+</span>
                <span className={styles.statLabel}>Jobs</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>116K+</span>
                <span className={styles.statLabel}>Chai</span>
              </div>
            </div>
            <a href="https://www.drnf.org" target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
              Visit →
            </a>
          </div>
        </div>

        <div className={styles.ecosystemValue}>
          <h3 className={styles.valueTitle}>Why the Ecosystem Matters</h3>
          <p className={styles.valueText}>
            When you deploy ReFlow, you get more than toilets—you get a complete solution with built-in operations
            (Ixora Group), 24/7 security (Ixora Security), proven deployment model (LooCafe's 270+ locations),
            and measurable social impact (DRNF). One ecosystem, complete accountability, zero vendor coordination headaches.
          </p>
          <Link href="/ecosystem" className={styles.ecosystemButton}>
            Explore the Complete Ecosystem →
          </Link>
        </div>
      </div>
    </section>
  )
}
