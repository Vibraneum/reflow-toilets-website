'use client'

import Image from 'next/image'
import styles from './GatesComparison.module.css'

export default function GatesComparison() {
  const projects = [
    {
      name: 'B-CRT (Yixing/ReFlow)',
      origin: 'China → India',
      method: '8-stage biological',
      status: 'Commercial',
      statusColor: '#34c759',
      waterRecovery: '98%',
      highlight: true,
    },
    {
      name: 'Caltech Solar Toilet',
      origin: 'USA',
      method: 'Electrochemical',
      status: 'Pilot',
      statusColor: '#ff9f0a',
      waterRecovery: '~85%',
      highlight: false,
    },
    {
      name: 'Cranfield Nano Membrane',
      origin: 'UK',
      method: 'Membrane + gasification',
      status: 'Prototype',
      statusColor: '#ff9f0a',
      waterRecovery: '~90%',
      highlight: false,
    },
    {
      name: 'Duke Supercritical Water',
      origin: 'USA',
      method: 'Supercritical oxidation',
      status: 'Research',
      statusColor: '#a1a1a6',
      waterRecovery: 'Limited',
      highlight: false,
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Gates Foundation Portfolio</div>
          <h2 className={styles.title}>Reinvent the Toilet Challenge.</h2>
          <p className={styles.subtitle}>
            Since 2011, the Bill &amp; Melinda Gates Foundation has invested $200M+ in next-generation toilet technology.
            B-CRT represents the commercial realization of this vision.
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${project.highlight ? styles.highlighted : ''}`}
            >
              {project.highlight && <div className={styles.highlightBadge}>ReFlow Technology</div>}
              <h3 className={styles.projectName}>{project.name}</h3>
              <div className={styles.projectDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Origin</span>
                  <span className={styles.detailValue}>{project.origin}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Treatment</span>
                  <span className={styles.detailValue}>{project.method}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Water Recovery</span>
                  <span className={styles.detailValue}>{project.waterRecovery}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Status</span>
                  <span
                    className={styles.statusBadge}
                    style={{ backgroundColor: `${project.statusColor}20`, color: project.statusColor }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoIcon}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/v1764067931/loocafe-assets/awards/gates_foundation.png"
              alt="Gates Foundation"
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>800+ Units Deployed in China</h4>
            <p className={styles.infoText}>
              The B-CRT technology was developed by Yixing Eco-Sanitary Manufacturing as part of the Gates Foundation&apos;s
              Reinvent the Toilet Challenge. With 800+ successful deployments in China, ReFlow is bringing this
              proven technology to India through exclusive licensing partnership.
            </p>
          </div>
        </div>

        <div className={styles.certifications}>
          <div className={styles.certItem}>
            <span className={styles.certIcon}>✓</span>
            <span className={styles.certText}>ISO 30500 Certified</span>
          </div>
          <div className={styles.certItem}>
            <span className={styles.certIcon}>✓</span>
            <span className={styles.certText}>Georgia Tech Verified</span>
          </div>
          <div className={styles.certItem}>
            <span className={styles.certIcon}>✓</span>
            <span className={styles.certText}>Gates Foundation Reviewed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
