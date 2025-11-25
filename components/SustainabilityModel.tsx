import Link from 'next/link'
import styles from './SustainabilityModel.module.css'

export default function SustainabilityModel() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Zero Ongoing Municipal Costs</h2>
                    <p className={styles.subtitle}>
                        ReFlow units operate on a self-sustaining model with three revenue streams, ensuring long-term viability without government subsidies.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>🤝</div>
                        <h3 className={styles.cardTitle}>Partnership Operations</h3>
                        <p className={styles.cardText}>
                            Municipal partnerships with trained operators who manage daily operations. Partnership fees cover maintenance and operations without ongoing government subsidies.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>📢</div>
                        <h3 className={styles.cardTitle}>Advertisement Revenue</h3>
                        <p className={styles.cardText}>
                            Legal advertisement spaces on all four exterior walls and interior panels provide consistent revenue. Data-driven ad placement maximizes advertiser ROI while covering operational costs.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>💻</div>
                        <h3 className={styles.cardTitle}>Technology Licensing</h3>
                        <p className={styles.cardText}>
                            Our patented facility management technology extends beyond ReFlow units, creating additional revenue streams through licensing and digital community monetization.
                        </p>
                    </div>
                </div>

                <div className={styles.cta}>
                    <Link href="/contact" className={styles.button}>
                        Learn More about Financial Model
                    </Link>
                </div>
            </div>
        </section>
    )
}
