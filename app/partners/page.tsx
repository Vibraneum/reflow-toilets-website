'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import ScrollReveal from '@/components/ScrollReveal'
import LuxuryCard from '@/components/LuxuryCard'

export default function PartnersPage() {
  const [activePartnerType, setActivePartnerType] = useState<string>('technology')

  const partnerTypes = [
    {
      id: 'technology',
      title: 'Technology & Manufacturing',
      icon: '🔬',
      description: 'Partner with us to manufacture and indigenize B-CRT technology in India.',
      highlights: [
        'T-Works collaboration for manufacturing',
        'Gates Foundation Reinvented Toilet Mission',
        'ISO30500 certification support',
        'Technology transfer opportunities',
      ],
      details: 'We are working with T-Works (Telangana\'s prototype and innovation center) to indigenize B-CRT manufacturing. Join us in bringing this groundbreaking sanitation technology to scale through manufacturing partnerships.',
      cta: 'Explore Technology Partnership',
      ctaLink: '/contact?subject=Technology%20Partnership',
    },
    {
      id: 'csr',
      title: 'CSR & Foundation Partners',
      icon: '💚',
      description: 'Deploy zero-discharge toilets through your CSR initiatives where sewage infrastructure isn\'t possible.',
      highlights: [
        'Zero sewage discharge - perfect for eco-sensitive areas',
        'Visibility through branded installations',
        'Measurable environmental impact metrics',
        'Association with Gates Foundation innovation',
      ],
      details: 'ReFlow toilets are ideal for CSR deployments in areas where traditional sewage isn\'t possible - eco-parks, heritage sites, CRZ zones, and remote communities. Each unit processes all waste on-site, turning it into safe water and biosolids.',
      cta: 'Discuss CSR Deployment',
      ctaLink: '/contact?subject=CSR%20Partnership',
    },
    {
      id: 'government',
      title: 'Government & Policy',
      icon: '🏛️',
      description: 'Work with us to bring B-CRT technology into national sanitation policy under Aspirational Toilets 3.0.',
      highlights: [
        'Swachh Bharat Mission 2.0 alignment',
        'Aspirational Toilets 3.0 policy integration',
        'District-level pilot partnerships',
        'Policy advocacy and technical support',
      ],
      details: 'B-CRT technology represents the future of public sanitation - zero discharge, water recycling, solar powered. We are working to integrate this into national policy frameworks so districts can deploy next-generation sanitation infrastructure.',
      cta: 'Government Partnership Inquiry',
      ctaLink: '/government-framework',
    },
    {
      id: 'research',
      title: 'Research & Academic',
      icon: '📚',
      description: 'Collaborate on sanitation research, water treatment studies, and technology validation.',
      highlights: [
        'Gates Foundation research network',
        'ISO30500 compliance studies',
        'Water quality monitoring data',
        'Technology validation partnerships',
      ],
      details: 'We collaborate with academic institutions and research organizations studying decentralized sanitation, water treatment, and sustainable infrastructure. Access real-world deployment data and contribute to advancing the field.',
      cta: 'Research Collaboration',
      ctaLink: '/contact?subject=Research%20Partnership',
    },
  ]

  const activeType = partnerTypes.find(p => p.id === activePartnerType) || partnerTypes[0]

  const currentDeployments = [
    {
      location: 'Hyderabad, Telangana',
      type: 'Pilot Unit',
      status: 'Operational',
      partner: 'Gates Foundation / T-Works',
      description: 'First B-CRT pilot unit in India, demonstrating zero-discharge technology with full IoT monitoring.',
      year: '2024',
    },
  ]

  const upcomingDeployments = [
    {
      location: 'Navi Mumbai, Maharashtra',
      type: 'CRZ Zone Deployment',
      units: 2,
      timeline: 'Next 3 months',
      description: 'Beachfront installation in Coastal Regulation Zone where sewage is prohibited.',
    },
    {
      location: 'Hyderabad, Telangana',
      type: 'Urban Expansion',
      units: 2,
      timeline: 'Next 3 months',
      description: 'Additional units in high-footfall areas, expanding the pilot program.',
    },
  ]

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ScrollReveal>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>Join the Mission</div>
            <h1 className={styles.heroTitle}>
              Partner With Us to Transform<br />India&apos;s Sanitation Future
            </h1>
            <p className={styles.heroSubtitle}>
              ReFlow&apos;s B-CRT technology is an invention - the &quot;Lamborghini of toilets&quot; - developed through the Gates Foundation&apos;s Reinvent the Toilet Challenge. We&apos;re looking for partners to help bring this zero-discharge technology into policy and scale.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>₹70L+</div>
                <div className={styles.heroStatLabel}>Per Unit (Current)</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>1</div>
                <div className={styles.heroStatLabel}>Pilot Unit Live</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>4</div>
                <div className={styles.heroStatLabel}>Deploying Soon</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Understanding ReFlow */}
      <section className={styles.opportunity}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Understanding ReFlow</h2>
            <p className={styles.sectionSubtitle}>
              ReFlow is not a franchise model - it&apos;s a technology company bringing groundbreaking sanitation innovation to India
            </p>
          </div>

          <div className={styles.opportunityGrid}>
            <LuxuryCard variant="elevated">
              <div className={styles.opportunityCard}>
                <div className={styles.opportunityIcon}>🚀</div>
                <h3>ReFlow Toilets</h3>
                <p style={{ color: '#0f766e', fontWeight: 600, marginBottom: '16px' }}>Innovation & Invention</p>
                <ul style={{ textAlign: 'left', fontSize: '14px', lineHeight: '1.8', color: '#666', listStyle: 'none', padding: 0 }}>
                  <li>✓ B-CRT technology - zero sewage discharge</li>
                  <li>✓ Gates Foundation Reinvent the Toilet innovation</li>
                  <li>✓ ~₹70 lakhs per unit (premium technology)</li>
                  <li>✓ Ideal for CRZ zones, eco-parks, off-grid areas</li>
                  <li>✓ Goal: Policy integration (Aspirational Toilets 3.0)</li>
                </ul>
                <p style={{ marginTop: '16px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', fontSize: '13px' }}>
                  <strong>For:</strong> CSR initiatives, government pilots, eco-sensitive zones, innovation partnerships
                </p>
              </div>
            </LuxuryCard>

            <LuxuryCard variant="elevated">
              <div className={styles.opportunityCard}>
                <div className={styles.opportunityIcon}>
                  <Image
                    src="/images/logos/loocafe-logo.png"
                    alt="LooCafe Logo"
                    width={80}
                    height={80}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3>LooCafe</h3>
                <p style={{ color: '#0f766e', fontWeight: 600, marginBottom: '16px' }}>Scalable Business Model</p>
                <ul style={{ textAlign: 'left', fontSize: '14px', lineHeight: '1.8', color: '#666', listStyle: 'none', padding: 0 }}>
                  <li>✓ Ad-supported free public toilets</li>
                  <li>✓ 270+ locations across Hyderabad</li>
                  <li>✓ Franchise/partnership model available</li>
                  <li>✓ Connected to existing sewage infrastructure</li>
                  <li>✓ Proven revenue model - café + toilet</li>
                </ul>
                <p style={{ marginTop: '16px', padding: '12px', background: '#fef3c7', borderRadius: '8px', fontSize: '13px' }}>
                  <strong>For:</strong> Commercial franchise, café operators, advertising partners
                </p>
                <a
                  href="https://www.loocafe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '16px', color: '#0f766e', fontWeight: 600, textDecoration: 'none' }}
                >
                  Visit LooCafe.com →
                </a>
              </div>
            </LuxuryCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Partnership Types */}
      <section className={styles.models}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Partnership Opportunities</h2>
            <p className={styles.sectionSubtitle}>
              Join us in bringing zero-discharge sanitation technology to India
            </p>
          </div>

          {/* Partner Type Tabs */}
          <div className={styles.modelTabs}>
            {partnerTypes.map((type) => (
              <button
                key={type.id}
                className={`${styles.modelTab} ${activePartnerType === type.id ? styles.activeTab : ''}`}
                onClick={() => setActivePartnerType(type.id)}
              >
                <span className={styles.modelTabIcon}>{type.icon}</span>
                <span className={styles.modelTabTitle}>{type.title}</span>
              </button>
            ))}
          </div>

          {/* Active Partner Type Details */}
          <div className={styles.modelDetails}>
            <LuxuryCard variant="elevated">
              <div className={styles.modelContent}>
                <div className={styles.modelHeader}>
                  <div className={styles.modelIconLarge}>{activeType.icon}</div>
                  <div>
                    <h3 className={styles.modelTitle}>{activeType.title}</h3>
                    <p className={styles.modelDescription}>{activeType.description}</p>
                  </div>
                </div>

                <div className={styles.modelHighlights}>
                  <h4>Key Highlights</h4>
                  <ul>
                    {activeType.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modelDetailsText}>
                  <p>{activeType.details}</p>
                </div>

                <Link href={activeType.ctaLink} className={styles.primaryButton} style={{ display: 'inline-block', marginTop: '24px' }}>
                  {activeType.cta}
                </Link>
              </div>
            </LuxuryCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Current Deployments */}
      <section className={styles.successStories}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Current & Upcoming Deployments</h2>
            <p className={styles.sectionSubtitle}>
              Real B-CRT installations demonstrating zero-discharge technology
            </p>
          </div>

          <div className={styles.storiesGrid}>
            {/* Current Deployment */}
            <ScrollReveal delay={0.1}>
              <LuxuryCard variant="bordered">
                <div className={styles.storyCard}>
                  <div className={styles.storyLogo} style={{ background: '#34c759' }}>✓</div>
                  <h3 className={styles.storyName}>Hyderabad Pilot</h3>
                  <div className={styles.storyType}>Operational Since 2024</div>
                  <div className={styles.storyLocation}>📍 Hyderabad, Telangana</div>
                  <p className={styles.storyText}>
                    First B-CRT pilot unit in India with Gates Foundation / T-Works. Full IoT monitoring demonstrating zero-discharge technology.
                  </p>
                  <div className={styles.storyMetrics}>
                    <div className={styles.storyMetric}>✓ Zero sewage discharge</div>
                    <div className={styles.storyMetric}>✓ Solar powered</div>
                    <div className={styles.storyMetric}>✓ Real-time monitoring</div>
                  </div>
                </div>
              </LuxuryCard>
            </ScrollReveal>

            {/* Upcoming Deployments */}
            {upcomingDeployments.map((deployment, index) => (
              <ScrollReveal key={index} delay={(index + 1) * 0.15}>
                <LuxuryCard variant="bordered">
                  <div className={styles.storyCard}>
                    <div className={styles.storyLogo} style={{ background: '#ff9500' }}>📅</div>
                    <h3 className={styles.storyName}>{deployment.location.split(',')[0]}</h3>
                    <div className={styles.storyType}>{deployment.timeline}</div>
                    <div className={styles.storyLocation}>📍 {deployment.location}</div>
                    <p className={styles.storyText}>{deployment.description}</p>
                    <div className={styles.storyMetrics}>
                      <div className={styles.storyMetric}>✓ {deployment.units} units planned</div>
                      <div className={styles.storyMetric}>✓ {deployment.type}</div>
                    </div>
                  </div>
                </LuxuryCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* The Vision */}
      <section className={styles.benefits}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Vision: B-CRT in Policy</h2>
            <p className={styles.sectionSubtitle}>
              Our goal is to make B-CRT technology part of India&apos;s sanitation policy
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <ScrollReveal delay={0.1}>
              <LuxuryCard>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🎯</div>
                  <h3 className={styles.benefitTitle}>Aspirational Toilets 3.0</h3>
                  <p className={styles.benefitDescription}>
                    Working to integrate B-CRT into national policy so districts can deploy zero-discharge toilets.
                  </p>
                </div>
              </LuxuryCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <LuxuryCard>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🏭</div>
                  <h3 className={styles.benefitTitle}>Indigenous Manufacturing</h3>
                  <p className={styles.benefitDescription}>
                    Partnering with T-Works to manufacture in India, reducing costs and enabling scale.
                  </p>
                </div>
              </LuxuryCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <LuxuryCard>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🌊</div>
                  <h3 className={styles.benefitTitle}>CRZ Compliance</h3>
                  <p className={styles.benefitDescription}>
                    Only solution for Coastal Regulation Zones where sewage discharge is prohibited.
                  </p>
                </div>
              </LuxuryCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <LuxuryCard>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>💡</div>
                  <h3 className={styles.benefitTitle}>First Mover Advantage</h3>
                  <p className={styles.benefitDescription}>
                    Only company in India with access to Gates Foundation Reinvent the Toilet technology.
                  </p>
                </div>
              </LuxuryCard>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      {/* Looking for Commercial? */}
      <section className={styles.calculatorSection}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Looking for Commercial Opportunities?</h2>
            <p className={styles.sectionSubtitle}>
              For café operations, retail partnerships, and advertising opportunities
            </p>
          </div>

          <LuxuryCard variant="elevated">
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ marginBottom: '24px' }}>
                <Image
                  src="/images/logos/loocafe-logo.png"
                  alt="LooCafe Logo"
                  width={120}
                  height={120}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', color: '#1d1d1f' }}>
                LooCafe - Scalable Business Model
              </h3>
              <p style={{ fontSize: '17px', color: '#6e6e73', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 }}>
                270+ locations across Hyderabad. Proven café-toilet hybrid model.
                Commercial franchise and partnership opportunities available.
              </p>
              <a
                href="https://www.loocafe.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Visit LooCafe.com
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </LuxuryCard>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <ScrollReveal>
          <LuxuryCard variant="elevated">
            <div className={styles.finalCtaContent}>
              <h2>Ready to Join the B-CRT Revolution?</h2>
              <p>
                Whether you&apos;re a technology partner, CSR initiative, government body, or research institution -
                let&apos;s discuss how we can work together to bring zero-discharge sanitation to India.
              </p>
              <div className={styles.finalCtaButtons}>
                <Link href="/contact" className={styles.primaryButton}>
                  Start a Conversation
                </Link>
                <a
                  href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                  className={styles.secondaryButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </div>
              <p className={styles.finalCtaNote}>
                Questions? Call us at <strong>+91-9494330442</strong> (10am-5pm Mon-Fri)
              </p>
            </div>
          </LuxuryCard>
        </ScrollReveal>
      </section>
    </div>
  )
}
