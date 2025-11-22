'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import ScrollReveal from '@/components/ScrollReveal'
import LuxuryCard from '@/components/LuxuryCard'

// Dynamically load components for better performance
const PartnerRevenueCalculator = dynamic(() => import('@/components/PartnerRevenueCalculator'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})

const PartnerApplicationForm = dynamic(() => import('@/components/PartnerApplicationForm'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})

export default function PartnersPage() {
  const [activePartnershipModel, setActivePartnershipModel] = useState<string>('cafe')

  const partnershipModels = [
    {
      id: 'cafe',
      title: 'Café/Food Kiosk',
      icon: '☕',
      description: 'Operate a coffee shop, tea stall, or snack counter inside our B-CRT units.',
      revenue: '₹30K-80K/month',
      investment: '₹2-5L',
      highlights: [
        '3,000+ daily footfall per unit',
        'Prime transport hub locations',
        'Full LooCafe branding support',
        'Proven 270+ location model',
      ],
      details: 'Like LooCafe\'s successful 270+ locations model, partner with us to operate café counters in our B-CRT units. You handle food/beverage operations, we handle facility maintenance.',
    },
    {
      id: 'retail',
      title: 'Retail/Convenience Store',
      icon: '🛒',
      description: 'Sell essential products like newspapers, hygiene items, mobile accessories.',
      revenue: '₹20K-50K/month',
      investment: '₹1-3L',
      highlights: [
        'High-demand essentials',
        'Captive customer base',
        'Low operational overhead',
        'Multiple revenue streams',
      ],
      details: 'Set up a convenience retail counter selling newspapers, magazines, hygiene products, mobile accessories, and other essentials at high-footfall locations.',
    },
    {
      id: 'advertising',
      title: 'Advertising & Branding',
      icon: '📺',
      description: 'Digital screens, poster spaces, and branded advertising opportunities.',
      revenue: '₹15K-40K/month',
      investment: '₹50K-2L',
      highlights: [
        '4 external walls + internal spaces',
        'Digital screen options available',
        'Data-backed audience metrics',
        'Brand-safe environment',
      ],
      details: 'All 4 external walls plus internal spaces available for legal, commercially viable advertising. Digital screens and static posters supported with audience data.',
    },
    {
      id: 'services',
      title: 'Value-Added Services',
      icon: '⚡',
      description: 'Mobile charging, WiFi hotspots, ATM, diagnostic centers, salons.',
      revenue: '₹10K-60K/month',
      investment: '₹1-4L',
      highlights: [
        'Multiple service options',
        'Partnership with telecom operators',
        'ATM rental revenue',
        'WiFi & charging stations',
      ],
      details: 'Explore various service partnerships including mobile charging stations, WiFi hotspots (via telecom partnerships), ATM placements, mini diagnostic centers, or even hair salons.',
    },
    {
      id: 'pos',
      title: 'Point-of-Sale Systems',
      icon: '💳',
      description: 'Integrated payment solutions, vending machines, self-service kiosks.',
      revenue: '₹25K-70K/month',
      investment: '₹3-8L',
      highlights: [
        'Cashless payment infrastructure',
        'Vending machine integration',
        'Self-service kiosks',
        'Transaction fee revenue',
      ],
      details: 'Deploy advanced POS systems including cashless payment terminals, automated vending machines, and self-service kiosks for various products and services.',
    },
  ]

  const activeModel = partnershipModels.find(m => m.id === activePartnershipModel) || partnershipModels[0]

  const partnerBenefits = [
    {
      icon: '👥',
      title: 'High Footfall Locations',
      description: 'Transport hubs, markets, parks with 3,000+ daily users per unit',
    },
    {
      icon: '🏢',
      title: 'Managed Facilities',
      description: 'Ixora Group handles all maintenance, cleaning, and infrastructure',
    },
    {
      icon: '💰',
      title: 'Transparent Revenue Sharing',
      description: 'Clear partnership fees with proven ROI from existing LooCafe model',
    },
    {
      icon: '🎯',
      title: 'Brand Association',
      description: 'Align with civic infrastructure and government partnerships',
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Footfall data, usage patterns, and customer insights provided',
    },
    {
      icon: '🤝',
      title: 'Full Support',
      description: 'Training, onboarding, marketing, and ongoing operational support',
    },
  ]

  const successStories = [
    {
      name: 'LooCafe Model',
      type: 'Café/Food Kiosk',
      location: 'Hyderabad, Telangana',
      story: '270+ locations across Hyderabad proving the café-toilet hybrid model. Revenue from café operations sustains free public toilet access.',
      metrics: ['270+ units deployed', '50K+ daily users', 'Self-sustainable model'],
      logo: '☕',
    },
    {
      name: 'Chennai LooCafe',
      type: 'Restaurant + Toilet',
      location: 'Chennai, Tamil Nadu',
      story: 'A thriving restaurant that funds clean public toilets, demonstrating the commercial viability of the hybrid model.',
      metrics: ['24/7 operations', 'Zero municipal subsidy', 'Community impact'],
      logo: '🍽️',
    },
    {
      name: 'DRNF Chai Counters',
      type: 'Social Enterprise',
      location: 'Hyderabad (Jubilee Hills)',
      story: 'Dr. Rabinder Nath Foundation runs free chai counters at LooCafe locations, serving 116,800+ cups to the homeless community.',
      metrics: ['116,800+ cups served', '2 active counters', '70+ jobs created'],
      logo: '🫖',
    },
  ]

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ScrollReveal>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>Partnership Opportunities</div>
            <h1 className={styles.heroTitle}>
              Turn 3,000 Daily Users<br />Into Your Next Revenue Stream
            </h1>
            <p className={styles.heroSubtitle}>
              Partner with ReFlow to operate cafés, retail counters, advertising spaces, or value-added services in our smart B-CRT public toilet units. Proven model with LooCafe's 270+ successful locations.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>3,000+</div>
                <div className={styles.heroStatLabel}>Daily Users/Unit</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>270+</div>
                <div className={styles.heroStatLabel}>LooCafe Locations</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>₹30K-80K</div>
                <div className={styles.heroStatLabel}>Monthly Revenue Potential</div>
              </div>
            </div>
            <div className={styles.heroCta}>
              <a href="#apply" className={styles.primaryButton}>Apply for Partnership</a>
              <a href="#calculator" className={styles.secondaryButton}>Calculate Revenue</a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* The Opportunity */}
      <section className={styles.opportunity}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Opportunity</h2>
            <p className={styles.sectionSubtitle}>
              Each B-CRT unit serves 3,000+ users daily at prime locations. That's 3,000 potential customers for your business — a captive, recurring audience at transport hubs, markets, and parks.
            </p>
          </div>

          <div className={styles.opportunityGrid}>
            <LuxuryCard variant="elevated">
              <div className={styles.opportunityCard}>
                <div className={styles.opportunityIcon}>🚻</div>
                <h3>Captive Audience</h3>
                <p>3,000+ daily users per unit = guaranteed footfall for your business</p>
              </div>
            </LuxuryCard>

            <LuxuryCard variant="elevated">
              <div className={styles.opportunityCard}>
                <div className={styles.opportunityIcon}>🏪</div>
                <h3>Commercial Space</h3>
                <p>Dedicated retail/café space inside each B-CRT unit</p>
              </div>
            </LuxuryCard>

            <LuxuryCard variant="elevated">
              <div className={styles.opportunityCard}>
                <div className={styles.opportunityIcon}>💵</div>
                <h3>Multiple Revenue Streams</h3>
                <p>Café sales, retail, advertising, services, POS systems</p>
              </div>
            </LuxuryCard>

            <LuxuryCard variant="elevated">
              <div className={styles.opportunityCard}>
                <div className={styles.opportunityIcon}>📍</div>
                <h3>Prime Locations</h3>
                <p>Transport hubs, markets, parks, government partnerships</p>
              </div>
            </LuxuryCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Partnership Models */}
      <section className={styles.models}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Partnership Models</h2>
            <p className={styles.sectionSubtitle}>
              Choose the model that aligns with your business goals and investment capacity
            </p>
          </div>

          {/* Model Tabs */}
          <div className={styles.modelTabs}>
            {partnershipModels.map((model) => (
              <button
                key={model.id}
                className={`${styles.modelTab} ${activePartnershipModel === model.id ? styles.activeTab : ''}`}
                onClick={() => setActivePartnershipModel(model.id)}
              >
                <span className={styles.modelTabIcon}>{model.icon}</span>
                <span className={styles.modelTabTitle}>{model.title}</span>
              </button>
            ))}
          </div>

          {/* Active Model Details */}
          <div className={styles.modelDetails}>
            <LuxuryCard variant="elevated">
              <div className={styles.modelContent}>
                <div className={styles.modelHeader}>
                  <div className={styles.modelIconLarge}>{activeModel.icon}</div>
                  <div>
                    <h3 className={styles.modelTitle}>{activeModel.title}</h3>
                    <p className={styles.modelDescription}>{activeModel.description}</p>
                  </div>
                </div>

                <div className={styles.modelMetrics}>
                  <div className={styles.modelMetric}>
                    <div className={styles.modelMetricLabel}>Revenue Potential</div>
                    <div className={styles.modelMetricValue}>{activeModel.revenue}</div>
                  </div>
                  <div className={styles.modelMetric}>
                    <div className={styles.modelMetricLabel}>Investment Required</div>
                    <div className={styles.modelMetricValue}>{activeModel.investment}</div>
                  </div>
                </div>

                <div className={styles.modelHighlights}>
                  <h4>Key Highlights</h4>
                  <ul>
                    {activeModel.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modelDetailsText}>
                  <p>{activeModel.details}</p>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Partner Benefits */}
      <section className={styles.benefits}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Partner With ReFlow?</h2>
            <p className={styles.sectionSubtitle}>
              Backed by Ixora Group's 15+ years of facilities management experience
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {partnerBenefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <LuxuryCard>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </LuxuryCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Success Stories */}
      <section className={styles.successStories}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Proven Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Real partnerships delivering real impact across India
            </p>
          </div>

          <div className={styles.storiesGrid}>
            {successStories.map((story, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <LuxuryCard variant="bordered">
                  <div className={styles.storyCard}>
                    <div className={styles.storyLogo}>{story.logo}</div>
                    <h3 className={styles.storyName}>{story.name}</h3>
                    <div className={styles.storyType}>{story.type}</div>
                    <div className={styles.storyLocation}>📍 {story.location}</div>
                    <p className={styles.storyText}>{story.story}</p>
                    <div className={styles.storyMetrics}>
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className={styles.storyMetric}>✓ {metric}</div>
                      ))}
                    </div>
                  </div>
                </LuxuryCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Revenue Calculator */}
      <section id="calculator" className={styles.calculatorSection}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Revenue Calculator</h2>
            <p className={styles.sectionSubtitle}>
              Estimate your potential monthly earnings based on partnership model and location
            </p>
          </div>
          <PartnerRevenueCalculator />
        </ScrollReveal>
      </section>

      {/* Application Form */}
      <section id="apply" className={styles.applicationSection}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Apply for Partnership</h2>
            <p className={styles.sectionSubtitle}>
              Join the ReFlow partner network and start your journey to sustainable revenue
            </p>
          </div>
          <PartnerApplicationForm />
        </ScrollReveal>
      </section>

      {/* FAQ for Partners */}
      <section className={styles.faqSection}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Partner FAQs</h2>
          </div>

          <div className={styles.faqGrid}>
            <LuxuryCard>
              <div className={styles.faqItem}>
                <h3>What is the partnership fee structure?</h3>
                <p>Partnership fees vary by model (café, retail, advertising, etc.). Typically, partners pay a monthly license fee ranging from ₹5K-25K depending on location and business type, plus a revenue-sharing percentage (10-20%). We'll provide detailed terms during the application review.</p>
              </div>
            </LuxuryCard>

            <LuxuryCard>
              <div className={styles.faqItem}>
                <h3>Who handles facility maintenance?</h3>
                <p>Ixora Group handles 100% of facility maintenance including cleaning, repairs, utilities, and infrastructure management. Partners focus solely on their business operations (café, retail, services, etc.).</p>
              </div>
            </LuxuryCard>

            <LuxuryCard>
              <div className={styles.faqItem}>
                <h3>What locations are available?</h3>
                <p>We prioritize high-footfall locations including transport hubs (bus stations, metro stations), public parks, markets, government complexes, and commercial areas. Specific locations are assigned based on district/municipal partnerships and partner preferences.</p>
              </div>
            </LuxuryCard>

            <LuxuryCard>
              <div className={styles.faqItem}>
                <h3>What support do partners receive?</h3>
                <p>Full onboarding training, branding support (for LooCafe partners), marketing materials, ongoing operational guidance, footfall data/analytics, and dedicated account management.</p>
              </div>
            </LuxuryCard>

            <LuxuryCard>
              <div className={styles.faqItem}>
                <h3>Can I operate multiple units?</h3>
                <p>Absolutely! Successful partners can scale to multiple units. LooCafe has demonstrated this with 270+ locations. Multi-unit partnerships receive preferential terms and enhanced support.</p>
              </div>
            </LuxuryCard>

            <LuxuryCard>
              <div className={styles.faqItem}>
                <h3>What is the contract duration?</h3>
                <p>Standard partnership contracts are 3-5 years with renewal options. This aligns with our municipal deployment contracts and ensures long-term stability for both parties.</p>
              </div>
            </LuxuryCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <ScrollReveal>
          <LuxuryCard variant="elevated">
            <div className={styles.finalCtaContent}>
              <h2>Ready to Join the ReFlow Partner Network?</h2>
              <p>
                Start your journey to sustainable revenue with proven models, prime locations, and full operational support from Ixora Group.
              </p>
              <div className={styles.finalCtaButtons}>
                <a href="#apply" className={styles.primaryButton}>Submit Application</a>
                <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" className={styles.secondaryButton} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
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
