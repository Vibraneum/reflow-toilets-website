'use client'

import { useState } from 'react'
import styles from './IPRightsSection.module.css'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

export default function IPRightsSection() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  // Structured data for SEO
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Gates Foundation\'s Global Access commitment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Bill & Melinda Gates Foundation funded the Reinvent the Toilet Challenge with a Global Access requirement, ensuring that technologies developed with foundation funding are made available and accessible at affordable prices to intended beneficiaries. Over 25 innovations supported by the foundation are now available for licensing, production, and commercialization.'
        }
      },
      {
        '@type': 'Question',
        name: 'What does ISO 30500 certification mean legally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 30500 is a voluntary international product standard published in October 2018 (revised July 2025) for non-sewered sanitation systems. It specifies general safety and performance requirements for design and testing of prefabricated integrated treatment units. ISO 30500 certification demonstrates that a system meets international standards for safety, functionality, usability, reliability, and environmental protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'How are reinvented toilet technologies licensed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reinvented toilet technologies developed through the Gates Foundation initiative are available for commercial licensing. LIXIL was named the first commercial license partner for Georgia Tech\'s Generation 2 Reinvented Toilet (G2RT) technologies in March 2024. Samsung announced plans to offer royalty-free licenses of their reinvented toilet patents to developing countries during commercialization.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there exclusive rights for India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Gates Foundation collaborated with India\'s Department of Biotechnology (DBT) and Biotechnology Industry Research Assistance Council (BIRAC) on "Reinvent the Toilet Challenge: India," investing a combined $2 million to support Indian researchers developing innovative sanitation technologies. While specific exclusive territorial rights vary by technology, the foundation\'s Global Access commitment prioritizes making technologies available to developing countries like India at affordable prices.'
        }
      }
    ]
  }

  const accordionItems: AccordionItem[] = [
    {
      id: 'gates-foundation',
      question: 'What is the Gates Foundation\'s Global Access commitment?',
      answer: 'The Bill & Melinda Gates Foundation funded the Reinvent the Toilet Challenge with a Global Access requirement, ensuring that technologies developed with foundation funding are made available and accessible at affordable prices to intended beneficiaries. Over 25 innovations supported by the foundation are now available for licensing, production, and commercialization. The foundation granted itself a nonexclusive license to funded intellectual property to ensure products reach underserved markets.'
    },
    {
      id: 'iso-30500',
      question: 'What does ISO 30500 certification mean legally?',
      answer: 'ISO 30500 is a voluntary international product standard published in October 2018 (revised July 2025) for non-sewered sanitation systems. It specifies general safety and performance requirements for design and testing of prefabricated integrated treatment units. ISO 30500 certification demonstrates that a system meets international standards for safety, functionality, usability, reliability, and environmental protection. Organizations can promote their systems as ISO 30500 certified to the public, users, and clients, providing legal assurance that system outputs are pathogen-free and safe to handle.'
    },
    {
      id: 'technology-licensing',
      question: 'How are reinvented toilet technologies licensed?',
      answer: 'Reinvented toilet technologies developed through the Gates Foundation initiative are available for commercial licensing. LIXIL was named the first commercial license partner for Georgia Tech\'s Generation 2 Reinvented Toilet (G2RT) technologies in March 2024, committing to the Gates Foundation\'s "Global Access" principle. Samsung announced plans to offer royalty-free licenses of their reinvented toilet patents to developing countries during commercialization. The Reclaimer technology from Duke University has been licensed by a company in India with demonstration projects planned for 2024-2025.'
    },
    {
      id: 'india-licensing',
      question: 'Are there exclusive rights for India?',
      answer: 'The Gates Foundation collaborated with India\'s Department of Biotechnology (DBT) and Biotechnology Industry Research Assistance Council (BIRAC) on "Reinvent the Toilet Challenge: India," investing a combined $2 million to support Indian researchers developing innovative sanitation technologies. Six teams of Indian researchers received funding to develop various models including solar-powered toilets and ultrasound water-saving systems. While specific exclusive territorial rights vary by technology, the foundation\'s Global Access commitment prioritizes making technologies available to developing countries like India at affordable prices.'
    },
    {
      id: 'patents-protection',
      question: 'What patent protection exists for toilet innovations?',
      answer: 'Multiple patent families protect reinvented toilet technologies. Georgia Tech\'s G2RT program filed five provisional patents covering their Generation 2 design. Commercial partners pursuing these technologies are required to secure appropriate intellectual property protection while adhering to Global Access commitments. Patents cover innovations in treatment processes, system design, materials, and operational methods. The foundation transfers technologies through free patents and provides technical and financial support for partners to adapt, test, and pilot innovations in target markets.'
    },
    {
      id: 'manufacturing-rights',
      question: 'How do manufacturing and deployment rights work?',
      answer: 'Manufacturing rights are granted through commercial licensing agreements with technology developers (universities, research institutions) and the Gates Foundation. Licensees like LIXIL obtain rights to manufacture and deploy specific toilet technologies in designated markets. The foundation encourages grantees to commercialize their innovations in developed markets at a profit, provided products remain available and affordable in underserved markets. This dual approach enables sustainable business models while ensuring global access to sanitation innovations.'
    },
    {
      id: 'government-procurement',
      question: 'What licensing applies to government contracts?',
      answer: 'Government agencies and municipalities can procure ISO 30500-certified systems through standard procurement processes. Technology transfer for government contracts includes training, technical documentation, and ongoing support. State-level regulators (Pollution Control Bodies, Public Health Engineering Departments, Water Supply and Sewerage Boards) use ISO 30500 frameworks to guide local bodies in selecting appropriate sanitation systems. Government purchasers receive full operational rights for deployed units, with manufacturers retaining underlying intellectual property while providing maintenance and support services.'
    },
    {
      id: 'partner-opportunities',
      question: 'Can organizations become licensing partners?',
      answer: 'Yes, organizations can pursue licensing partnerships for reinvented toilet technologies. Georgia Tech\'s Office of Technology Licensing manages commercialization of their G2RT innovations. Interested parties should contact technology transfer offices at research institutions (Georgia Tech, Duke University, etc.) or the Bill & Melinda Gates Foundation\'s Water, Sanitation & Hygiene program. Licensing agreements typically include technology transfer, training, quality standards compliance, and Global Access commitments to ensure affordable access in developing markets.'
    }
  ]

  return (
    <section className={styles.section}>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>Intellectual Property & Licensing</div>
          <h2 className={styles.title}>Technology Rights & Global Access</h2>
          <p className={styles.intro}>
            ReFlow Toilets builds on decades of Gates Foundation-funded research into reinvented toilet technologies. Our systems integrate innovations developed through the Reinvent the Toilet Challenge, adhering to the foundation's Global Access commitment to ensure affordable sanitation reaches underserved communities worldwide.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>Reinvented Toilet Initiative Timeline</h3>
          <div className={styles.timelineGrid}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2011</div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineEvent}>Reinvent the Toilet Challenge Launched</h4>
                <p className={styles.timelineDescription}>
                  Gates Foundation invests $200M+ to spur creation of new toilet technologies for 3.5 billion people lacking safe sanitation. Global Access commitment established.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2018</div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineEvent}>ISO 30500 Standard Published</h4>
                <p className={styles.timelineDescription}>
                  International voluntary product standard for non-sewered sanitation systems established, defining safety and performance requirements.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2020-2023</div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineEvent}>Commercial Licensing Begins</h4>
                <p className={styles.timelineDescription}>
                  25+ innovations available for licensing. Samsung announces royalty-free patents for developing countries. Georgia Tech files 5 provisional patents for G2RT.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineEvent}>First Commercial License Partners</h4>
                <p className={styles.timelineDescription}>
                  LIXIL becomes first commercial license partner for Georgia Tech G2RT technologies. Duke's Reclaimer licensed to Indian company for 2024-2025 pilots.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2025</div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineEvent}>ISO 30500 Revised Standards</h4>
                <p className={styles.timelineDescription}>
                  Updated ISO 30500 standard published with enhanced performance requirements. India's BIRAC continues funding Indian researchers through "Reinvent the Toilet Challenge: India."
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2026</div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineEvent}>B-CRT Launch (Q4 2026)</h4>
                <p className={styles.timelineDescription}>
                  ReFlow B-CRT system deployment begins, integrating Gates Foundation-supported innovations with ISO 30500 compliance and Global Access principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Licensing Structure */}
        <div className={styles.licensing}>
          <h3 className={styles.licensingTitle}>Technology Licensing Structure</h3>
          <div className={styles.licensingGrid}>
            <div className={styles.licensingCard}>
              <div className={styles.licensingIcon}>🏛️</div>
              <h4 className={styles.licensingCardTitle}>Research Institutions</h4>
              <p className={styles.licensingCardText}>
                Universities (Georgia Tech, Duke, etc.) develop core technologies with Gates Foundation funding. Technology transfer offices manage patent portfolios and commercial licensing.
              </p>
            </div>

            <div className={styles.licensingCard}>
              <div className={styles.licensingIcon}>🤝</div>
              <h4 className={styles.licensingCardTitle}>Global Access Commitment</h4>
              <p className={styles.licensingCardText}>
                Foundation retains nonexclusive license to ensure funded innovations reach underserved markets. Licensees commit to affordable pricing in developing countries while commercializing in developed markets.
              </p>
            </div>

            <div className={styles.licensingCard}>
              <div className={styles.licensingIcon}>🏭</div>
              <h4 className={styles.licensingCardTitle}>Commercial Partners</h4>
              <p className={styles.licensingCardText}>
                Licensed manufacturers (LIXIL, Samsung, Indian partners) produce and deploy systems. Partnerships include technology transfer, quality standards, and market-specific adaptations.
              </p>
            </div>

            <div className={styles.licensingCard}>
              <div className={styles.licensingIcon}>🌍</div>
              <h4 className={styles.licensingCardTitle}>Geographic Deployment</h4>
              <p className={styles.licensingCardText}>
                No global exclusive territories. Multiple licensees can operate in same markets. India receives special support through DBT/BIRAC collaboration with $2M joint investment.
              </p>
            </div>

            <div className={styles.licensingCard}>
              <div className={styles.licensingIcon}>✅</div>
              <h4 className={styles.licensingCardTitle}>ISO 30500 Certification</h4>
              <p className={styles.licensingCardText}>
                Voluntary international standard provides legal framework for safety and performance claims. Certified systems can be promoted to government agencies and public users.
              </p>
            </div>

            <div className={styles.licensingCard}>
              <div className={styles.licensingIcon}>🏛️</div>
              <h4 className={styles.licensingCardTitle}>Government Procurement</h4>
              <p className={styles.licensingCardText}>
                Municipalities and state governments procure ISO 30500-certified systems through standard bidding processes. Operational rights granted to government buyers, IP retained by manufacturers.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className={styles.faq}>
          <h3 className={styles.faqTitle}>Intellectual Property & Licensing FAQ</h3>
          <div className={styles.accordion}>
            {accordionItems.map((item) => (
              <div key={item.id} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionButton} ${activeAccordion === item.id ? styles.active : ''}`}
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={activeAccordion === item.id}
                >
                  <span className={styles.accordionQuestion}>{item.question}</span>
                  <span className={styles.accordionIcon}>
                    {activeAccordion === item.id ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${activeAccordion === item.id ? styles.open : ''}`}
                  aria-hidden={activeAccordion !== item.id}
                >
                  <p className={styles.accordionAnswer}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            <strong>Legal Note:</strong> This information is provided for general educational purposes regarding the Gates Foundation's Reinvent the Toilet Challenge and related intellectual property frameworks. It does not constitute legal advice. For specific licensing inquiries, contact the Bill & Melinda Gates Foundation Water, Sanitation & Hygiene program, Georgia Tech Office of Technology Licensing, or other relevant technology transfer offices. ReFlow Toilets integrates publicly available reinvented toilet innovations consistent with Global Access principles. All product claims regarding ISO 30500 compliance are subject to independent third-party certification.
          </p>
        </div>

        {/* Sources */}
        <div className={styles.sources}>
          <h4 className={styles.sourcesTitle}>Sources & Further Reading</h4>
          <ul className={styles.sourcesList}>
            <li>
              <a href="https://www.gatesfoundation.org/about/policies-and-resources/global-access-statement" target="_blank" rel="noopener noreferrer">
                Gates Foundation Global Access Statement
              </a>
            </li>
            <li>
              <a href="https://www.iso.org/standard/72523.html" target="_blank" rel="noopener noreferrer">
                ISO 30500:2018 - Non-sewered sanitation systems standard
              </a>
            </li>
            <li>
              <a href="https://licensing.research.gatech.edu/technology/reinvented-toilet-technologies" target="_blank" rel="noopener noreferrer">
                Georgia Tech Reinvented Toilet Technologies Licensing
              </a>
            </li>
            <li>
              <a href="https://newsroom.lixil.com/20240321_g2rt" target="_blank" rel="noopener noreferrer">
                LIXIL Named First Commercial License Partner for G2RT
              </a>
            </li>
            <li>
              <a href="https://www.gatesfoundation.org/ideas/media-center/press-releases/2014/03/indian-researchers-selected-to-develop-next-generation-toilets" target="_blank" rel="noopener noreferrer">
                Indian Researchers Selected for Reinvent the Toilet Challenge
              </a>
            </li>
            <li>
              <a href="https://sanitation.ansi.org/Standard/ISO30500" target="_blank" rel="noopener noreferrer">
                ANSI ISO 30500 Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
