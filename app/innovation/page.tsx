import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Innovation - ReFlow Toilets',
  description: 'Revolutionary sanitation infrastructure. Solar-powered. Zero discharge. ISO30500 compliant.',
  keywords: ['toilet innovation', 'WASH innovation', 'Gates Foundation', 'reinvented toilet', 'sanitation innovation'],
  openGraph: {
    title: 'Innovation - ReFlow Toilets',
    description: 'Revolutionary sanitation infrastructure',
    images: ['/images/units/reflow mini.png'],
  },
}

export default function InnovationPage() {
  return (
    <div className={styles.page}>
      {/* Clean Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Reinventing public sanitation.</h1>
            <p className={styles.heroText}>
              Solar-powered, zero discharge, ISO30500 compliant toilets transforming cities across India.
            </p>
            <div className={styles.heroButtons}>
              <a href="/contact" className={styles.primaryButton}>Partner with us</a>
              <a href="#products" className={styles.secondaryButton}>Explore products</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>270+</div>
            <div className={styles.statLabel}>Units deployed</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Solar powered</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>Zero</div>
            <div className={styles.statLabel}>Liquid discharge</div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className={styles.missionContainer}>
          <div className={styles.missionImage}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732617/reflow-assets/units/mini-on-footpath.jpg"
              alt="ReFlow Mini"
              width={800}
              height={1000}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.missionContent}>
            <h2 className={styles.sectionTitle}>Built for scale.</h2>
            <p className={styles.sectionText}>
              Self-sustainable sanitation units transforming urban infrastructure. Zero grid dependency. ISO30500 water quality compliance. Near-zero environmental waste.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3 className={styles.featureTitle}>100% Solar</h3>
                  <p className={styles.featureText}>Complete off-grid operation</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3 className={styles.featureTitle}>Zero Waste</h3>
                  <p className={styles.featureText}>ISO30500 certified output</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3 className={styles.featureTitle}>Proven Scale</h3>
                  <p className={styles.featureText}>270+ units via <a href="https://loocafe.com" className={styles.link}>LooCafe</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gates Foundation */}
      <section className={styles.gates}>
        <div className={styles.gatesContainer}>
          <div className={styles.gatesHeader}>
            <h2 className={styles.gatesTitle}>Reinvented Toilet Mission</h2>
            <p className={styles.gatesSubtitle}>Part of the Gates Foundation's $1B global sanitation initiative</p>
          </div>

          <div className={styles.gatesGrid}>
            <div className={styles.gatesCard}>
              <div className={styles.gatesIcon}>🏆</div>
              <h3 className={styles.gatesCardTitle}>ISO30500</h3>
              <p className={styles.gatesCardText}>International water quality standard</p>
            </div>
            <div className={styles.gatesCard}>
              <div className={styles.gatesIcon}>💧</div>
              <h3 className={styles.gatesCardTitle}>Zero Discharge</h3>
              <p className={styles.gatesCardText}>No liquid waste released</p>
            </div>
            <div className={styles.gatesCard}>
              <div className={styles.gatesIcon}>☀️</div>
              <h3 className={styles.gatesCardTitle}>Solar Powered</h3>
              <p className={styles.gatesCardText}>100% renewable energy</p>
            </div>
            <div className={styles.gatesCard}>
              <div className={styles.gatesIcon}>📱</div>
              <h3 className={styles.gatesCardTitle}>IoT Enabled</h3>
              <p className={styles.gatesCardText}>Real-time monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className={styles.products}>
        <div className={styles.productsContainer}>
          <h2 className={styles.productsTitle}>Three models for every need.</h2>

          <div className={styles.productGrid}>
            {/* Mini */}
            <div className={styles.productCard}>
              <div className={styles.productBadge}>Most Popular</div>
              <div className={styles.productImageWrapper}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732617/reflow-assets/units/mini-on-footpath.jpg"
                  alt="ReFlow Mini"
                  width={400}
                  height={500}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>ReFlow Mini</h3>
                <p className={styles.productTagline}>Rapid deployment</p>
                <div className={styles.productSpecs}>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Size</span>
                    <span className={styles.specValue}>8×8 ft</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Capacity</span>
                    <span className={styles.specValue}>500-1,000/day</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Setup</span>
                    <span className={styles.specValue}>2-3 days</span>
                  </div>
                </div>
                <Link href="/products" className={styles.productLink}>Learn more →</Link>
              </div>
            </div>

            {/* Standard */}
            <div className={styles.productCard}>
              <div className={styles.productBadge}>Customizable</div>
              <div className={styles.productImageWrapper}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/units/reflow-dal-lake.png"
                  alt="ReFlow Standard"
                  width={400}
                  height={500}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>ReFlow Standard</h3>
                <p className={styles.productTagline}>Mid-capacity</p>
                <div className={styles.productSpecs}>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Size</span>
                    <span className={styles.specValue}>15×10 ft</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Capacity</span>
                    <span className={styles.specValue}>1,000-2,000/day</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Setup</span>
                    <span className={styles.specValue}>1-2 weeks</span>
                  </div>
                </div>
                <Link href="/products" className={styles.productLink}>Learn more →</Link>
              </div>
            </div>

            {/* B-CRT */}
            <div className={styles.productCard}>
              <div className={styles.productBadgePremium}>Advanced</div>
              <div className={styles.productImageWrapper}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732619/reflow-assets/bcrt/main-bcrt.jpg"
                  alt="40ft B-CRT"
                  width={400}
                  height={500}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>40ft B-CRT</h3>
                <p className={styles.productTagline}>Next-generation</p>
                <div className={styles.productSpecs}>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Size</span>
                    <span className={styles.specValue}>40ft</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Capacity</span>
                    <span className={styles.specValue}>3,000+/day</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Launch</span>
                    <span className={styles.specValue}>Q4 2026</span>
                  </div>
                </div>
                <Link href="/b-crt" className={styles.productLink}>Learn more →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className={styles.partnership}>
        <div className={styles.partnershipContainer}>
          <div className={styles.partnershipContent}>
            <h2 className={styles.partnershipTitle}>Build-Operate-Transfer</h2>
            <p className={styles.partnershipText}>
              Zero upfront cost for government agencies. We build, operate, and transfer ownership after the contract period.
            </p>
            <a href="/contact" className={styles.partnershipButton}>Discuss partnership</a>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className={styles.manufacturing}>
        <div className={styles.manufacturingContainer}>
          <div className={styles.manufacturingContent}>
            <p className={styles.manufacturingLabel}>Manufacturing Excellence</p>
            <h2 className={styles.manufacturingTitle}>EcoSan Partnership</h2>
            <p className={styles.manufacturingText}>
              Advanced manufacturing facility in Yixing, China. ISO-certified production ensuring world-class quality at scale.
            </p>
          </div>
          <div className={styles.manufacturingImage}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732614/reflow-assets/units/big-unit-reflow.jpg"
              alt="Manufacturing"
              width={700}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Research */}
      <section className={styles.research}>
        <div className={styles.researchContainer}>
          <h2 className={styles.researchTitle}>Research Network</h2>
          <div className={styles.researchGrid}>
            <div className={styles.researchVideo}>
              <h3 className={styles.researchSubtitle}>Georgia Tech</h3>
              <p className={styles.researchText}>
                Key Gates Foundation partner leading reinvented toilet research.
              </p>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/1il6-KUfleY"
                  title="Georgia Tech Research"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                ></iframe>
              </div>
              <a href="https://g2rt.research.gatech.edu/" target="_blank" rel="noopener noreferrer" className={styles.researchLink}>
                Visit research portal →
              </a>
            </div>
            <div className={styles.researchImage}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/units/reflow-dal-lake.png"
                alt="Research"
                width={600}
                height={700}
                className={styles.image}
              />
              <p className={styles.researchCaption}>Deployed units across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to transform your district?</h2>
          <p className={styles.ctaText}>Deploy advanced sanitation infrastructure that works.</p>
          <a href="/contact" className={styles.ctaButton}>Get started</a>
        </div>
      </section>
    </div>
  )
}
