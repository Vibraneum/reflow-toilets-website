'use client'

import styles from './CompetitiveAdvantage.module.css'

export default function CompetitiveAdvantage() {
  const advantages = [
    {
      title: '8 Treatment Stages',
      description: 'Most systems use 3-5 stages. Our comprehensive 8-stage biological process achieves superior output quality.',
      comparison: 'vs industry standard 3-5 stages',
      icon: '🔬',
    },
    {
      title: '98% Water Recovery',
      description: 'Leading systems recover 70-85% at best. B-CRT\'s 98% recovery rate means virtually zero water waste.',
      comparison: 'vs typical 70-85% recovery',
      icon: '💧',
    },
    {
      title: 'True Off-Grid (72+ hours)',
      description: 'Grid-dependent systems fail during outages. Our solar + LiFePO4 battery system provides 72+ hours autonomy.',
      comparison: 'vs grid-dependent systems',
      icon: '⚡',
    },
    {
      title: 'ISO 30500 Certified',
      description: 'Only 3 systems globally have achieved certification. Most competitors are still pending or pursuing lesser standards.',
      comparison: 'vs pending/no certification',
      icon: '✓',
    },
    {
      title: 'Compact 15-30 sqm Footprint',
      description: 'Conventional systems require 50-100+ sqm. Container design enables deployment where others can\'t fit.',
      comparison: 'vs 50-100+ sqm typical',
      icon: '📦',
    },
    {
      title: '2-4 Week Installation',
      description: 'Built infrastructure takes 3-6 months. Pre-fabricated B-CRT deploys in weeks, not months.',
      comparison: 'vs 3-6 month construction',
      icon: '🚀',
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Why B-CRT</div>
          <h2 className={styles.title}>Built different. Built better.</h2>
          <p className={styles.subtitle}>
            Every specification designed to exceed industry standards.
            Here&apos;s how B-CRT outperforms conventional treatment systems.
          </p>
        </div>

        <div className={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.advantageCard}>
              <div className={styles.advantageIcon}>{advantage.icon}</div>
              <h3 className={styles.advantageTitle}>{advantage.title}</h3>
              <p className={styles.advantageDescription}>{advantage.description}</p>
              <div className={styles.comparisonTag}>{advantage.comparison}</div>
            </div>
          ))}
        </div>

        <div className={styles.summaryBox}>
          <div className={styles.summaryContent}>
            <h4 className={styles.summaryTitle}>The Bottom Line</h4>
            <p className={styles.summaryText}>
              B-CRT delivers <strong>40% more water recovery</strong>, <strong>60% smaller footprint</strong>,
              and <strong>75% faster deployment</strong> than conventional decentralized treatment systems —
              with the only ISO 30500 certification in commercial operation in India.
            </p>
          </div>
          <a href="/b-crt" className={styles.summaryCta}>
            View Full Specifications →
          </a>
        </div>
      </div>
    </section>
  )
}
