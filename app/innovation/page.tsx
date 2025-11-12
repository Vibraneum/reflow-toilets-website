import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Innovation',
  description: 'Design & Innovation in public toilets that\'s revolutionized WASH. Gates Foundation Reinvented Toilet Mission. ISO30500 compliant, zero discharge, solar-powered sanitation solutions.',
  keywords: ['toilet innovation', 'WASH innovation', 'Gates Foundation', 'reinvented toilet', 'sanitation innovation', 'sustainable toilets'],
  openGraph: {
    title: 'Innovation - ReFlow Toilets',
    description: 'Design & Innovation in public toilets that\'s revolutionized WASH',
    images: ['/images/units/reflow mini.png'],
  },
}

export default function InnovationPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Innovation in Public Sanitation</h1>
            <p className={styles.heroSubtitle}>
              Design & technology that's revolutionizing WASH infrastructure for smart cities
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={styles.missionIntro}>
          <div className={styles.missionGrid}>
            <div className={styles.missionImageColumn}>
              <Image
                src="/images/units/Mini on footpath reflow.jpg"
                alt="ReFlow Mini Toilet on Urban Footpath"
                width={500}
                height={750}
                className={styles.missionImage}
                priority
              />
            </div>

            <div className={styles.missionTextColumn}>
              <h2 className={styles.missionHeading}>
                Ending Open Defecation Through Smart Design
              </h2>

              <p className={styles.missionDescription}>
                Designed to transform urban sanitation - uplifting streets, communities, creating employment, and preventing environmental waste while changing the narrative around public toilets.
              </p>

              <div className={styles.missionHighlight}>
                <p className={styles.missionStat}>
                  <strong>270+ units deployed</strong> through our <a href="https://www.loocafe.com" target="_blank" rel="noopener noreferrer" className={styles.missionLink}>LooCafe</a> network in Hyderabad
                </p>
                <p className={styles.missionNote}>
                  India's largest public toilet network backed by Gates Foundation innovation
                </p>
              </div>

              <ul className={styles.missionFeatures}>
                <li>Self-sustainable operations</li>
                <li>Near-zero environmental waste</li>
                <li>ISO30500 water quality compliance</li>
                <li>100% solar-powered</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Gates Foundation Mission */}
        <div className={styles.gatesFoundationSection}>
          <div className={styles.gatesSectionHeader}>
            <h2 className={styles.gatesTitle}>The Reinvented Toilet Mission</h2>
            <p className={styles.gatesSubtitle}>
              $1 Billion Gates Foundation initiative to transform global sanitation
            </p>
          </div>

          <div className={styles.gatesStatsGrid}>
            <div className={styles.gatesStatCard}>
              <div className={styles.gatesStatIcon}>✓</div>
              <h3 className={styles.gatesStatValue}>ISO30500</h3>
              <p className={styles.gatesStatLabel}>Water Standard Compliance</p>
            </div>
            <div className={styles.gatesStatCard}>
              <div className={styles.gatesStatIcon}>⚡</div>
              <h3 className={styles.gatesStatValue}>0 Discharge</h3>
              <p className={styles.gatesStatLabel}>Zero Waste Release</p>
            </div>
            <div className={styles.gatesStatCard}>
              <div className={styles.gatesStatIcon}>☀</div>
              <h3 className={styles.gatesStatValue}>100% Solar</h3>
              <p className={styles.gatesStatLabel}>Off-Grid Operation</p>
            </div>
            <div className={styles.gatesStatCard}>
              <div className={styles.gatesStatIcon}>📡</div>
              <h3 className={styles.gatesStatValue}>IoT Enabled</h3>
              <p className={styles.gatesStatLabel}>Smart Monitoring</p>
            </div>
          </div>
        </div>

        <div className={styles.productShowcaseSection}>
          <h2 className={styles.showcaseSectionTitle}>Three Models for Every Scale</h2>
          <p className={styles.showcaseSectionSubtitle}>
            From grassroots deployment to district-wide infrastructure - scalable solutions for government sanitation
          </p>

          <div className={styles.productShowcaseGrid}>
            <div className={styles.productShowcaseCard}>
              <div className={styles.productShowcaseBadge}>Most Deployed</div>
              <Image
                src="/images/units/Mini on footpath reflow.jpg"
                alt="ReFlow Mini on Urban Footpath"
                width={400}
                height={300}
                className={styles.productShowcaseImage}
              />
              <h3 className={styles.productShowcaseTitle}>ReFlow Mini</h3>
              <p className={styles.productShowcaseTagline}>Fast Urban Deployment</p>

              <div className={styles.productShowcaseSpecs}>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Size:</span>
                  <span className={styles.productShowcaseSpecValue}>8×8 ft</span>
                </div>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Capacity:</span>
                  <span className={styles.productShowcaseSpecValue}>500-1,000/day</span>
                </div>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Deployment:</span>
                  <span className={styles.productShowcaseSpecValue}>2-3 days</span>
                </div>
              </div>

              <ul className={styles.productShowcaseFeatures}>
                <li>Compact footprint for dense urban areas</li>
                <li>Grassroot level distribution</li>
                <li>Most cost-effective option</li>
              </ul>

              <a href="/products" className={styles.productShowcaseButton}>View Details →</a>
            </div>

            <div className={styles.productShowcaseCard}>
              <div className={styles.productShowcaseBadge}>Customizable</div>
              <Image
                src="/images/units/reflow dal lake.png"
                alt="ReFlow Standard Unit at Dal Lake"
                width={400}
                height={300}
                className={styles.productShowcaseImage}
              />
              <h3 className={styles.productShowcaseTitle}>ReFlow Standard</h3>
              <p className={styles.productShowcaseTagline}>Mid-Capacity Solution</p>

              <div className={styles.productShowcaseSpecs}>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Size:</span>
                  <span className={styles.productShowcaseSpecValue}>15×10 ft</span>
                </div>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Capacity:</span>
                  <span className={styles.productShowcaseSpecValue}>1,000-2,000/day</span>
                </div>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Deployment:</span>
                  <span className={styles.productShowcaseSpecValue}>1-2 weeks</span>
                </div>
              </div>

              <ul className={styles.productShowcaseFeatures}>
                <li>Full exterior/interior customization</li>
                <li>Advanced IoT-enabled technology</li>
                <li>Advertisement revenue potential</li>
              </ul>

              <a href="/products" className={styles.productShowcaseButton}>View Details →</a>
            </div>

            <div className={styles.productShowcaseCard}>
              <div className={styles.productShowcaseBadge}>Premium</div>
              <Image
                src="/images/bcrt/MAIN B-CRT IMAGE.png"
                alt="40ft B-CRT"
                width={400}
                height={300}
                className={styles.productShowcaseImage}
              />
              <h3 className={styles.productShowcaseTitle}>40ft B-CRT</h3>
              <p className={styles.productShowcaseTagline}>World's Most Advanced</p>

              <div className={styles.productShowcaseSpecs}>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Size:</span>
                  <span className={styles.productShowcaseSpecValue}>40ft container</span>
                </div>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Capacity:</span>
                  <span className={styles.productShowcaseSpecValue}>3,000+/day</span>
                </div>
                <div className={styles.productShowcaseSpec}>
                  <span className={styles.productShowcaseSpecLabel}>Deployment:</span>
                  <span className={styles.productShowcaseSpecValue}>Q4 2026</span>
                </div>
              </div>

              <ul className={styles.productShowcaseFeatures}>
                <li>ISO30500 certified water output</li>
                <li>AI-powered (Gemini 2.5)</li>
                <li>Zero liquid discharge</li>
              </ul>

              <a href="/b-crt" className={styles.productShowcaseButton}>View Details →</a>
            </div>
          </div>

          <div className={styles.showcaseCallout}>
            <h3 className={styles.showcaseCalloutTitle}>Build-Operate-Transfer (BoT) Available</h3>
            <p className={styles.showcaseCalloutText}>
              All models can be deployed on a Build-Operate-Transfer basis, de-risking deployment for government agencies and ensuring operational excellence from day one.
            </p>
            <a href="/products" className={styles.showcaseCalloutButton}>Learn More About BoT Model</a>
          </div>
        </div>

        {/* Manufacturing Partnership */}
        <div className={styles.manufacturingSection}>
          <h2 className={styles.manufacturingTitle}>Manufacturing Excellence</h2>
          <div className={styles.manufacturingGrid}>
            <div className={styles.manufacturingImageColumn}>
              <Image
                src="/images/hero/Interior.png"
                alt="Team ReFlow at EcoSan Manufacturing Facility"
                width={503}
                height={377}
                className={styles.manufacturingImage}
              />
            </div>
            <div className={styles.manufacturingTextColumn}>
              <h3 className={styles.manufacturingHeading}>EcoSan Partnership - China</h3>
              <p className={styles.manufacturingDate}>
                <strong>January 2025</strong>
              </p>
              <p className={styles.manufacturingDescription}>
                Team ReFlow at EcoSan facilities in Yixing, Jiangsu, China for advanced manufacturing and technical training on the B-CRT system. This partnership ensures world-class production standards and technical excellence in sanitation infrastructure.
              </p>
              <div className={styles.manufacturingFeatures}>
                <div className={styles.manufacturingFeature}>
                  <span className={styles.manufacturingFeatureIcon}>🏭</span>
                  <span>ISO-certified manufacturing</span>
                </div>
                <div className={styles.manufacturingFeature}>
                  <span className={styles.manufacturingFeatureIcon}>🔧</span>
                  <span>Advanced technical training</span>
                </div>
                <div className={styles.manufacturingFeature}>
                  <span className={styles.manufacturingFeatureIcon}>✓</span>
                  <span>Quality assurance protocols</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Research Partnership */}
        <div className={styles.researchSection}>
          <h2 className={styles.researchTitle}>Gates Foundation Research Network</h2>
          <div className={styles.researchGrid}>
            <div className={styles.researchVideoColumn}>
              <h3 className={styles.researchHeading}>Georgia Tech Partnership</h3>
              <p className={styles.researchDescription}>
                Georgia Tech, a key partner of the Gates Foundation, leads research in reimagining toilet technology for global deployment.
              </p>
              <div className={styles.researchVideoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/1il6-KUfleY"
                  title="Georgia Tech on Reinvented Toilet"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.researchVideo}
                ></iframe>
              </div>
              <a
                href="https://g2rt.research.gatech.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.researchLink}
              >
                Visit Georgia Tech Research Portal →
              </a>
            </div>

            <div className={styles.researchImageColumn}>
              <Image
                src="/images/units/big unit reflow.png"
                alt="Gates Foundation Experience Centre"
                width={400}
                height={350}
                className={styles.researchImage}
              />
              <p className={styles.researchCaption}>
                The Gates Foundation Experience Centre for the Reinvented Toilet showcasing advanced sanitation technology
              </p>
            </div>
          </div>

          <div className={styles.researchDisclaimer}>
            <p>
              Organizations supporting the Reinvented Toilet program. The listing of entities on this site does not constitute an endorsement by ReFlow Toilets.
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Partner with ReFlow for Your District</h2>
          <p className={styles.ctaText}>
            Join the Reinvented Toilet mission - Deploy advanced sanitation infrastructure in your district
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Request Partnership Info
          </a>
        </div>
      </div>
    </div>
  )
}

