import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Hiring',
  description: 'Join ReFlow Toilets - Careers and job opportunities. Work on innovative public sanitation solutions with global industry leaders. Official recognition and support.',
  keywords: ['ReFlow careers', 'sanitation jobs', 'WASH careers', 'public toilet jobs', 'ReFlow hiring'],
  openGraph: {
    title: 'Hiring - ReFlow Toilets',
    description: 'Join ReFlow Toilets - Careers and job opportunities in innovative public sanitation',
  },
}

export default function HiringPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hiring</h1>
        
        <div className={styles.heroSection}>
          <h2 className={styles.subtitle}>Join ReFlow Toilets</h2>
          <p className={styles.heroText}>
            Work on innovative public sanitation solutions that make a real difference in communities.
          </p>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Standard Benefits with every role:</h2>
          
          <ul className={styles.benefitsList}>
            <li>✓ Official recognition and support from global industry leaders</li>
            <li>✓ Work alongside seasoned industry professionals (20+ years experience)</li>
            <li>✓ Opportunity to work on cutting-edge sanitation technology</li>
            <li>✓ Impactful work that directly improves public health</li>
            <li>✓ Professional growth and development opportunities</li>
          </ul>
        </div>

        <div className={styles.ctaSection}>
          <a
            href="https://airtable.com/apphtrbZeJVYFyPnS/pagE4iZDtIWWzea50/form"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.applicationButton}
          >
            <span className={styles.buttonIcon}>📤</span>
            Application Form
          </a>
        </div>

        <div className={styles.funFactSection}>
          <p className={styles.funFact}>
            <strong>Fun fact:</strong> Everything you do, no matter what the role, you will see its results in person, at every street close to you, remembered in history for bringing glory to India for the thing it's shit on a lot.
          </p>
        </div>

        <div className={styles.jobsGrid}>
          <div className={styles.jobCard}>
            <h3 className={styles.jobTitle}>Open Positions</h3>
            <p className={styles.jobDescription}>
              We're always looking for passionate individuals to join our team. 
              Check our application form for current openings.
            </p>
          </div>
          
          <div className={styles.jobCard}>
            <h3 className={styles.jobTitle}>Why ReFlow?</h3>
            <p className={styles.jobDescription}>
              Be part of a mission to revolutionize public sanitation in India and beyond. 
              Your work will have a direct, visible impact on communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

