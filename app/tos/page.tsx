import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service - ReFlow Toilets',
  description: 'Terms of Service for ReFlow Toilets',
}

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p className={styles.text}>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Use License</h2>
            <p className={styles.text}>
              Permission is granted to temporarily download one copy of the materials on ReFlow Toilets' website for personal, non-commercial transitory viewing only.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Disclaimer</h2>
            <p className={styles.text}>
              The materials on ReFlow Toilets' website are provided on an 'as is' basis. ReFlow Toilets makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Limitations</h2>
            <p className={styles.text}>
              In no event shall ReFlow Toilets or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ReFlow Toilets' website.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Accuracy of Materials</h2>
            <p className={styles.text}>
              The materials appearing on ReFlow Toilets' website could include technical, typographical, or photographic errors. ReFlow Toilets does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Links</h2>
            <p className={styles.text}>
              ReFlow Toilets has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ReFlow Toilets of the site.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Modifications</h2>
            <p className={styles.text}>
              ReFlow Toilets may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Governing Law</h2>
            <p className={styles.text}>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <p className={styles.text}>
              For any questions regarding these Terms of Service, please contact us at:<br />
              <strong>Phone:</strong> +91 9494330442<br />
              <strong>Hours:</strong> 10am–5pm Monday–Friday
            </p>
          </section>
          
          <p className={styles.lastUpdated}>
            Last Updated: January 2025
          </p>
        </div>
      </div>
    </div>
  )
}

