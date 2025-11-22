import Image from 'next/image'
import styles from './ReinventedMission.module.css'

export default function ReinventedMission() {
  return (
    <section className={styles.section}>
      {/* Hero Section */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroBackground}>
          <Image
            src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732613/reflow-assets/hero/hero-image.jpg"
            alt="Reinvented Toilet Mission"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <span className={`${styles.badge} slide-in-up`}>The Mission</span>
          <h2 className={`${styles.title} slide-in-up`}>
            A $1 Billion Mission to <br />
            <span className={styles.highlight}>Reinvent the Toilet</span>
          </h2>
          <p className={`${styles.subtitle} slide-in-up`}>
            The result of the Gates Foundation & millions of people's effort
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Context Section - Glassmorphism Card */}
        <div className={styles.contextCard}>
          <div className={styles.contextImageWrapper}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732614/reflow-assets/units/big-unit-reflow.jpg"
              alt="ReFlow Manufacturing Hub"
              fill
              className={styles.contextImage}
            />
          </div>
          <div className={styles.contextContent}>
            <div className={styles.dateTag}>Jan 2025 Update</div>
            <h3 className={styles.contextTitle}>Global Manufacturing & Training Hub</h3>
            <p className={styles.contextText}>
              Team ReFlow at EcoSan - Yixing, Jiangsu, China. <br />
              Leading manufacturing & technical training on the B-CRT to set new global standards for the world.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className={styles.videoSection}>
          <div className={styles.videoHeader}>
            <h3 className={styles.sectionTitle}>Watch & Learn</h3>
            <p className={styles.sectionDescription}>
              Georgia Tech, partner of the Gates Foundation, speaks about reimagining the toilet.
            </p>
          </div>

          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/1il6-KUfleY"
                title="Georgia Tech on Reinvented Toilet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className={styles.supportSection}>
          <p className={styles.supportText}>
            The following organizations support this program. The listing of corporate logos on this site does not constitute an endorsement by ReFlow.
          </p>
          <div className={styles.supportImageWrapper}>
            <Image
              src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732617/reflow-assets/units/mini-on-footpath.jpg"
              alt="Supporting organizations"
              width={532}
              height={299}
              className={styles.supportImage}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://g2rt.research.gatech.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMoreButton}
            >
              Read more on Georgia Tech's Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
