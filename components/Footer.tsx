import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.spacer} style={{ height: '64px' }}></div>

        <div className={styles.footerHero}>
          <h2 className={styles.footerTagline}>
            Partner with us to deploy India's most advanced public toilet system - that's affordable
          </h2>
          <a
            href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerCtaButton}
          >
            Schedule a call
          </a>
        </div>

        <div className={styles.spacer} style={{ height: '48px' }}></div>

        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <Image
              src="/images/logos/reflow toilets png.png"
              alt="ReFlow Toilets Logo"
              width={131}
              height={131}
              className={styles.footerLogo}
            />
            
            <p className={styles.footerDescription}>
              Largest Innovative Public toilet company.<br />
              Home of Innovation in WASH & Toilets - Reflow<br /><br />
              © 2025 iRise Toilets Pvt. Ltd. All Rights Reserved.
            </p>
            
            <div className={styles.spacer} style={{ height: '16px' }}></div>
            
            <p className={styles.phoneNumber}>
              Query Phone Number (10am–5pm Monday–Friday):<br />
              <strong>+91 9494330442</strong>
            </p>
            
            <a
              href="https://www.linkedin.com/company/reflow-toilets"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinButton}
            >
              LinkedIn
            </a>
          </div>
          
          <div className={styles.footerLinks}>
            <Link href="/" className={styles.footerLink}>Home</Link>
            <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
            <Link href="/innovation" className={styles.footerLink}>Innovation</Link>
            <Link href="/b-crt" className={styles.footerLink}>B-CRT</Link>
            <Link href="/tech" className={styles.footerLink}>Tech</Link>
            <Link href="/design" className={styles.footerLink}>Design</Link>
            <Link href="/hiring" className={styles.footerLink}>Hiring</Link>
          </div>

          <div className={styles.footerPartners}>
            <p className={styles.partnerTitle}>Part of Ixora Ecosystem</p>
            <a
              href="https://www.ixoragroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerLink}
            >
              Ixora Group - Facilities Management
            </a>
            <a
              href="https://www.loocafe.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerLink}
            >
              LooCafe - Public Toilet Network
            </a>
            <a
              href="https://www.ixorasecurity.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerLink}
            >
              Ixora Security - Security Services
            </a>
          </div>

          <div className={styles.footerLegal}>
            <Link href="/tos" className={styles.footerLink}>Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

