import Image from 'next/image'
import styles from './ReinventedMission.module.css'

export default function ReinventedMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.spacer} style={{ height: '32px' }}></div>

        <div className={styles.heroCard}>
          <div className={styles.heroBackground}>
            <Image
              src="/images/hero/Hero image.png"
              alt="Reinvented Toilet Mission"
              fill
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          
          <div className={styles.heroContent}>
            <p className={`${styles.subtitle} slide-in-up`}>
              <strong>The Reinveted toilet mission</strong>
            </p>
            
            <h2 className={`${styles.title} slide-in-up`}>
              <strong>1B$ Reinvent the toilet mission.<br />
              Here are the results of the Gates' Foundation & millions of people's effort:</strong>
            </h2>
          </div>
        </div>

        <div className={styles.spacer} style={{ height: '32px' }}></div>

        <div className={styles.contentGrid}>
          <div className={styles.imageColumn}>
            <Image
              src="/images/hero/Interior.png"
              alt="Team ReFlow at EcoSan"
              width={503}
              height={377}
              className={styles.contentImage}
            />
          </div>
          
          <div className={styles.textColumn}>
            <p className={styles.dateText}>
              <strong>Jan 2025</strong>
              <br />
              Team ReFlow at EcoSan - Yixing, Jiangsu, China
              <br />
              Manufacturing & Technical training on the B-CRT
            </p>
          </div>
        </div>

        <div className={styles.spacer} style={{ height: '32px' }}></div>

        <div className={styles.videoGrid}>
          <div className={styles.videoColumn}>
            <Image
              src="/images/units/big unit reflow.png"
              alt="Gates Foundation experience centre"
              width={302}
              height={270}
              className={styles.videoImage}
            />
            <p className={styles.videoCaption}>
              The Gates Foundation experience centre for the Reinvented Toilet
            </p>
          </div>
          
          <div className={styles.videoColumn}>
            <p className={styles.videoTitle}>
              <strong>Watch</strong>: Georgia Tech, partner of the Gates Foundation speaks about reimagining the toilet
            </p>
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

        <div className={styles.spacer} style={{ height: '24px' }}></div>

        <Image
          src="/images/units/Mini on footpath reflow.jpg"
          alt="Supporting organizations"
          width={532}
          height={299}
          className={styles.supportImage}
        />
        
        <p className={styles.supportText}>
          The following organizations support this program. The listing of corporate logos on this site does not constitute an endorsement by ReFlow
        </p>
        
        <a
          href="https://g2rt.research.gatech.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMoreButton}
        >
          Read more on Georgia's Tech Preview about the Reinvented toilet
        </a>
      </div>
    </section>
  )
}

