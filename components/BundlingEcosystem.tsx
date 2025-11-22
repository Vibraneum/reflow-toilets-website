import Image from 'next/image'
import Link from 'next/link'
import styles from './BundlingEcosystem.module.css'

export default function BundlingEcosystem() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={`${styles.badge} slide-in-up`}>The Ixora Ecosystem</span>
                    <h2 className={`${styles.title} slide-in-up`}>
                        Maximize Your Infrastructure Investment
                    </h2>
                    <p className={`${styles.subtitle} slide-in-up`}>
                        A unified approach to Build, Protect, and Maintain your public assets.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Build - ReFlow */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>🏗️</span>
                            </div>
                            <h3 className={styles.cardTitle}>Build</h3>
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732615/reflow-assets/units/reflow-mini.jpg"
                                alt="ReFlow Toilets"
                                width={300}
                                height={200}
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h4 className={styles.brandName}>ReFlow Toilets</h4>
                            <p className={styles.cardDescription}>
                                Sustainable, self-cleaning public sanitation infrastructure designed for modern cities.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Zero Discharge</li>
                                <li>Solar Powered</li>
                                <li>IoT Enabled</li>
                            </ul>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className={styles.connector}>
                        <span className={styles.plus}>+</span>
                    </div>

                    {/* Protect - Ixora Security */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>🛡️</span>
                            </div>
                            <h3 className={styles.cardTitle}>Protect</h3>
                        </div>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for Security Image - using a generic one for now if specific not found */}
                            <div className={styles.placeholderImage}>Security</div>
                        </div>
                        <div className={styles.cardContent}>
                            <h4 className={styles.brandName}>Ixora Security</h4>
                            <p className={styles.cardDescription}>
                                Advanced security solutions to safeguard your infrastructure and ensure public safety.
                            </p>
                            <ul className={styles.featureList}>
                                <li>24/7 Monitoring</li>
                                <li>AI Surveillance</li>
                                <li>Rapid Response</li>
                            </ul>
                            <a
                                href="https://www.ixorasecurity.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Visit Ixora Security →
                            </a>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className={styles.connector}>
                        <span className={styles.plus}>+</span>
                    </div>

                    {/* Maintain - Ixora FM */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>🧹</span>
                            </div>
                            <h3 className={styles.cardTitle}>Maintain</h3>
                        </div>
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for FM Image */}
                            <div className={styles.placeholderImage}>Facility Management</div>
                        </div>
                        <div className={styles.cardContent}>
                            <h4 className={styles.brandName}>Ixora FM</h4>
                            <p className={styles.cardDescription}>
                                Comprehensive facility management to keep your assets clean, functional, and valuable.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Professional Cleaning</li>
                                <li>Preventive Maintenance</li>
                                <li>Asset Lifecycle Mgmt</li>
                            </ul>
                            <a
                                href="https://www.ixoragroup.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Visit Ixora Group →
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaWrapper}>
                    <p className={styles.ctaText}>
                        <strong>One Partner. Complete Peace of Mind.</strong>
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Get a Bundled Quote
                    </Link>
                </div>
            </div>
        </section>
    )
}
