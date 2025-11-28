import Image from 'next/image'
import Link from 'next/link'
import styles from './BCRT.module.css'

export default function BCRT() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <span className={`${styles.badge} slide-in-up`}>The Flagship Product</span>
          <h1 className={`${styles.mainTitle} slide-in-up`}>The B-CRT</h1>
          <h2 className={`${styles.subTitle} slide-in-up`}>Blackwater Circular Reinvented Toilet</h2>
        </div>

        {/* Main Feature Section */}
        <div className={styles.mainFeature}>
          <div className={styles.mainImageWrapper}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732619/reflow-assets/bcrt/main-bcrt.jpg"
              alt="B-CRT Main Image"
              width={900}
              height={314}
              className={styles.mainImage}
              priority
            />
          </div>

          <div className={styles.featureCard}>
            <p className={styles.description}>
              Any waste water that goes inside comes out <span className={styles.highlight}>ISO30500 Water standard</span>.
              Treatment happens entirely inside the container.
              Needs 10,000 litres of water to start up, lasts for years without external requirement.
            </p>
            <div className={styles.shippingTag}>
              <span className={styles.icon}>📦</span> Within one shipping container
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className={styles.deploymentSection}>
          <div className={styles.deploymentHeader}>
            <h3 className={styles.deploymentTitle}>
              The most advanced large-scale deployment of the Reinvented Toilet Project ever.
            </h3>
            <p className={styles.deploymentLocation}>Hyderabad & Navi Mumbai Q1 2026</p>
          </div>

          <div className={styles.deploymentGrid}>
            <div className={styles.deploymentImageWrapper}>
              <Image
                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732614/reflow-assets/units/big-unit-reflow.jpg"
                alt="LooCafe 40-foot B-CRT"
                fill
                className={styles.deploymentImage}
              />
            </div>

            <div className={styles.quotesContainer}>
              <div className={styles.quoteCard}>
                <span className={styles.quoteIcon}>❝</span>
                <p>"An Engineering Marvel"</p>
              </div>
              <div className={styles.quoteCard}>
                <span className={styles.quoteIcon}>❝</span>
                <p>"The Deployment of decades of work by talented people in WASH"</p>
              </div>
              <div className={styles.quoteCard}>
                <span className={styles.quoteIcon}>❝</span>
                <p>"A step towards making the air conditioner level invention for toilets"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Dive Section */}
        <div className={styles.techSection}>
          <div className={styles.techGrid}>
            <div className={styles.techContent}>
              <h3 className={styles.techTitle}>
                <span className={styles.techHighlight}>Watch:</span> A Technical dive through into the B-CRT
              </h3>

              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>8</span>
                  <span className={styles.specLabel}>Stages of treatment</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>0</span>
                  <span className={styles.specLabel}>Discharge</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>6</span>
                  <span className={styles.specLabel}>Cubicles</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>10k</span>
                  <span className={styles.specLabel}>Litres of water</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>9</span>
                  <span className={styles.specLabel}>Solar panels</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>1</span>
                  <span className={styles.specLabel}>IoT System</span>
                </div>
              </div>
            </div>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/h1-fxn7dNds"
                title="B-CRT Technical Dive"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>
        </div>

        <Link href="/b-crt" className={styles.readMoreButton}>
          Explore Full Specifications
        </Link>

        {/* Standard Unit Section */}
        <div className={styles.standardSection}>
          <h2 className={styles.standardTitle}>A Standard ReFlow Unit</h2>
          <div className={styles.standardGrid}>
            <div className={styles.standardImageWrapper}>
              <Image
                src="/images/units/reflow dal lake.png"
                alt="ReFlow at Dal Lake"
                fill
                className={styles.standardImage}
              />
              <div className={styles.imageOverlay}>
                <span>Deployed at Dal Lake</span>
              </div>
            </div>
            <div className={styles.standardImageWrapper}>
              <Image
                src="/images/tech/reflow dashboard.png"
                alt="ReFlow Dashboard"
                fill
                className={styles.standardImage}
              />
              <div className={styles.imageOverlay}>
                <span>Smart Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
