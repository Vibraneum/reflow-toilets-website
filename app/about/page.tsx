import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About ReFlow Toilets | From LooCafe to District-Scale Sanitation',
  description: 'ReFlow Toilets is born from 15 years of LooCafe experience. Learn about our journey from urban transit toilets to district-scale B-CRT technology.',
  openGraph: {
    title: 'About ReFlow Toilets | Our Story',
    description: 'From LooCafe to ReFlow - 15 years of sanitation innovation leading to B-CRT technology.',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png'],
  },
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Our Story</span>
          <h1 className={styles.title}>From LooCafe to ReFlow</h1>
          <p className={styles.subtitle}>
            15 years of sanitation expertise. 270+ toilets deployed. One mission: dignified sanitation for all.
          </p>
        </div>
      </section>

      {/* Fork Diagram */}
      <section className={styles.forkSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Evolution</h2>
          <p className={styles.sectionIntro}>
            ReFlow is not a startup — it's a strategic evolution. Built on LooCafe's proven operations, Ixora Group's 15-year facilities management experience, and cutting-edge sanitation R&D.
          </p>

          <div className={styles.forkDiagram}>
            <Image
              src="/images/diagrams/loocafe-reflow-fork.svg"
              alt="LooCafe to ReFlow technology fork diagram showing 15 years of evolution"
              width={800}
              height={500}
              className={styles.forkImage}
            />
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className={styles.origin}>
        <div className={styles.container}>
          <div className={styles.originGrid}>
            <div className={styles.originContent}>
              <h2 className={styles.originTitle}>The LooCafe Foundation</h2>
              <p className={styles.originText}>
                In 2010, LooCafe launched in Hyderabad with a simple premise: public toilets can be clean, free, and sustainable through advertising revenue.
              </p>
              <p className={styles.originText}>
                Today, 270+ LooCafe units serve millions across India's busiest transit hubs — bus stations, metro stops, and railway platforms.
              </p>
              <p className={styles.originText}>
                This 15-year operational track record — 24/7 maintenance, real-time IoT monitoring, government partnerships — became the foundation for something bigger.
              </p>

              <div className={styles.originStats}>
                <div className={styles.originStat}>
                  <span className={styles.originStatValue}>270+</span>
                  <span className={styles.originStatLabel}>LooCafe Units</span>
                </div>
                <div className={styles.originStat}>
                  <span className={styles.originStatValue}>15</span>
                  <span className={styles.originStatLabel}>Years Operating</span>
                </div>
                <div className={styles.originStat}>
                  <span className={styles.originStatValue}>24/7</span>
                  <span className={styles.originStatLabel}>Monitoring</span>
                </div>
              </div>
            </div>

            <div className={styles.originVisual}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/loocafe/loocafe-unit.png"
                alt="LooCafe public toilet unit"
                width={500}
                height={400}
                className={styles.originImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Fork */}
      <section className={styles.fork}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Fork: Why ReFlow?</h2>
          <p className={styles.sectionIntro}>
            LooCafe works brilliantly for urban transit locations with sewage connections. But what about:
          </p>

          <div className={styles.challengeGrid}>
            <div className={styles.challengeCard}>
              <span className={styles.challengeIcon}>🏝️</span>
              <h3 className={styles.challengeTitle}>Coastal Areas</h3>
              <p className={styles.challengeText}>
                CRZ regulations prohibit sewage discharge. No sewer connection possible.
              </p>
            </div>
            <div className={styles.challengeCard}>
              <span className={styles.challengeIcon}>🏜️</span>
              <h3 className={styles.challengeTitle}>Water-Stressed Regions</h3>
              <p className={styles.challengeText}>
                Traditional flush toilets waste 6-15 liters per use. Unsustainable in drought-prone areas.
              </p>
            </div>
            <div className={styles.challengeCard}>
              <span className={styles.challengeIcon}>🔌</span>
              <h3 className={styles.challengeTitle}>Off-Grid Locations</h3>
              <p className={styles.challengeText}>
                Remote areas lack electricity and water supply infrastructure.
              </p>
            </div>
            <div className={styles.challengeCard}>
              <span className={styles.challengeIcon}>🏛️</span>
              <h3 className={styles.challengeTitle}>District Scale</h3>
              <p className={styles.challengeText}>
                Government buyers need standardized, deployable units — not custom construction.
              </p>
            </div>
          </div>

          <p className={styles.forkConclusion}>
            ReFlow was created to solve these challenges. Same operational excellence as LooCafe.
            Completely different technology: zero discharge, solar powered, ISO 30500 certified.
          </p>
        </div>
      </section>

      {/* What We Share */}
      <section className={styles.shared}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What ReFlow Inherits from LooCafe</h2>

          <div className={styles.sharedGrid}>
            <div className={styles.sharedCard}>
              <h3 className={styles.sharedTitle}>Ixora Group Operations</h3>
              <p className={styles.sharedText}>
                Both LooCafe and ReFlow are operated by Ixora Group — 15 years of facilities management across 5 service lines, serving airports, data centers, and government facilities.
              </p>
            </div>
            <div className={styles.sharedCard}>
              <h3 className={styles.sharedTitle}>24/7 Maintenance Network</h3>
              <p className={styles.sharedText}>
                Same maintenance teams, same rapid response protocols, same SLA-backed uptime guarantees. ReFlow units get LooCafe-level service.
              </p>
            </div>
            <div className={styles.sharedCard}>
              <h3 className={styles.sharedTitle}>IoT Monitoring Platform</h3>
              <p className={styles.sharedText}>
                Real-time dashboards built for LooCafe now power ReFlow monitoring. Track water quality, energy, usage — all from a central platform.
              </p>
            </div>
            <div className={styles.sharedCard}>
              <h3 className={styles.sharedTitle}>Government Relationships</h3>
              <p className={styles.sharedText}>
                Established partnerships with municipal corporations, transit authorities, and district administrations. ReFlow builds on this trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's New */}
      <section className={styles.newTech}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What's New in ReFlow</h2>

          <div className={styles.newGrid}>
            <div className={styles.newCard}>
              <span className={styles.newIcon}>🔬</span>
              <h3 className={styles.newTitle}>B-CRT Technology</h3>
              <p className={styles.newText}>
                8-stage treatment process developed through Gates Foundation Reinvent the Toilet research. Zero liquid discharge, ISO 30500 certified.
              </p>
            </div>
            <div className={styles.newCard}>
              <span className={styles.newIcon}>☀️</span>
              <h3 className={styles.newTitle}>100% Solar Power</h3>
              <p className={styles.newText}>
                9 solar panels + 6 battery systems = complete off-grid operation. 3-day autonomy during monsoon.
              </p>
            </div>
            <div className={styles.newCard}>
              <span className={styles.newIcon}>♻️</span>
              <h3 className={styles.newTitle}>Water Recycling</h3>
              <p className={styles.newText}>
                Treated water recycled for flushing. Zero freshwater withdrawal after initial fill. Perfect for water-stressed regions.
              </p>
            </div>
            <div className={styles.newCard}>
              <span className={styles.newIcon}>📦</span>
              <h3 className={styles.newTitle}>Containerized Deployment</h3>
              <p className={styles.newText}>
                40ft ISO containers. Factory-built, road-transportable, operational within 48 hours of arrival. No construction required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leadership}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Leadership</h2>

          <div className={styles.leaderCard}>
            <div className={styles.leaderInfo}>
              <h3 className={styles.leaderName}>Abhishek Nath</h3>
              <p className={styles.leaderRole}>Founder & CEO, Ixora Group</p>
              <p className={styles.leaderBio}>
                Abhishek founded Ixora Group in 2010, building it into a multi-service facilities management company with operations across India. He launched LooCafe to address Hyderabad's public sanitation gap, and now leads ReFlow to bring next-generation sanitation technology to districts nationwide.
              </p>
              <p className={styles.leaderBio}>
                Under his leadership, Ixora Group manages 5 service lines: cleaning, security, hard services, pest control, and payroll — serving clients from airports to data centers to government facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Partner?</h2>
          <p className={styles.ctaText}>
            Learn how ReFlow's B-CRT technology can solve your district's sanitation challenges.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/b-crt" className={styles.ctaButton}>
              Explore B-CRT Technology
            </Link>
            <Link href="/contact" className={styles.ctaButtonSecondary}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
