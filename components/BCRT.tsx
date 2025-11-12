import Image from 'next/image'
import Link from 'next/link'
import styles from './BCRT.module.css'

export default function BCRT() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.spacer} style={{ height: '48px' }}></div>
        
        <h1 className={styles.mainTitle}>The B-CRT</h1>
        <h2 className={styles.subTitle}>Blackwater Circular Reinvented Toilet</h2>
        
        <Image
          src="/images/bcrt/MAIN B-CRT IMAGE.png"
          alt="B-CRT Main Image"
          width={700}
          height={244}
          className={styles.mainImage}
        />
        
        <p className={styles.description}>
          Any waste water that goes inside comes out ISO30500 Water standard. Treatment - inside the container. Needs 10,000 litres of water to start up, lasts for years without external requirement.
          <span className={styles.underline}> Within one shipping container.</span>
        </p>
        
        <div className={styles.spacer} style={{ height: '48px' }}></div>
        
        <div className={styles.contentGrid}>
          <div className={styles.imageColumn}>
            <Image
              src="/images/units/big unit reflow.png"
              alt="LooCafe 40-foot B-CRT"
              width={389}
              height={292}
              className={styles.bcrtImage}
            />
            <p className={styles.locationText}>
              <strong>Hyderabad & Navi Mumbai Q1 2026</strong>
            </p>
          </div>
          
          <div className={styles.textColumn}>
            <h3 className={styles.heading}>
              The Most advanced large-scale deployment of the Reinvented Toilet Project Ever.
            </h3>
            
            <ul className={styles.quotesList}>
              <li>"An Engineering Marvel"</li>
              <li>"The Deployment of decades of work by talented people in WASH"</li>
              <li>"A step towards making the air conditioner level invention for toilets"</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.videoSection}>
          <div className={styles.videoTextColumn}>
            <h3 className={styles.videoHeading}>
              <em>Watch:</em> A Technical dive through into the B-CRT
            </h3>
            <p className={styles.videoDescription}>
              8 Stages of treatment<br />
              0 discharge<br />
              6 cubicles<br />
              10,000 litres of water<br />
              9 solar panels<br />
              6 battery systems<br />
              <strong>1 IoT system to control everything</strong>
            </p>
          </div>
          
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <iframe
                width="500"
                height="310"
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
          Read more on the B-CRT Page
        </Link>
        
        <div className={styles.spacer} style={{ height: '48px' }}></div>
        
        <h2 className={styles.standardTitle}>A Standard ReFlow Unit</h2>
        
        <div className={styles.standardGrid}>
          <Image
            src="/images/units/reflow dal lake.png"
            alt="ReFlow at Dal Lake"
            width={388}
            height={259}
            className={styles.standardImage}
          />
          <Image
            src="/images/tech/reflow dashboard.png"
            alt="ReFlow Dashboard"
            width={383}
            height={255}
            className={styles.standardImage}
          />
        </div>
      </div>
    </section>
  )
}

