import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Global Sanitation Studies | Innovative Toilet Deployments Worldwide',
  description: 'Case studies of innovative public toilet deployments worldwide: LooCafe India (270+ locations), Tokyo Toilet Project, Singapore smart toilets, Sanergy Kenya, and China\'s container toilet revolution.',
  keywords: ['public toilet case studies', 'LooCafe', 'Tokyo Toilet Project', 'smart toilets', 'container toilets', 'sanitation innovation', 'Gates Foundation toilets'],
  openGraph: {
    title: 'Global Sanitation Studies | ReFlow Toilets',
    description: 'Learn from the world\'s most innovative public toilet deployments - from Tokyo to Hyderabad to Nairobi.',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/v1763732619/reflow-assets/bcrt/main-bcrt.jpg'],
  },
}

export default function GlobalStudiesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>Global Insights</div>
          <h1 className={styles.title}>Learning from the world&apos;s best.</h1>
          <p className={styles.subtitle}>
            Case studies of innovative public sanitation deployments across 5 continents.
            What works, what scales, and what we&apos;ve learned.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className={styles.statsOverview}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>270+</div>
              <div className={styles.statLabel}>LooCafe Locations</div>
              <div className={styles.statNote}>Hyderabad, India</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>800+</div>
              <div className={styles.statLabel}>B-CRT Units</div>
              <div className={styles.statNote}>Deployed in China</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>17</div>
              <div className={styles.statLabel}>Tokyo Toilets</div>
              <div className={styles.statNote}>Architect-designed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>4,000+</div>
              <div className={styles.statLabel}>Fresh Life Toilets</div>
              <div className={styles.statNote}>Nairobi, Kenya</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: LooCafe India */}
      <section className={styles.featuredCase}>
        <div className={styles.container}>
          <div className={styles.featuredBadge}>Featured: India</div>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredContent}>
              <h2 className={styles.featuredTitle}>
                <a href="https://loocafe.com" target="_blank" rel="noopener noreferrer" className={styles.loocafeLink}>
                  LooCafe
                </a>: 15 Years of Public-Private Innovation
              </h2>
              <p className={styles.featuredSubtitle}>
                The largest free-to-use public toilet network in South India, built on a sustainable café-subsidy model.
              </p>

              <div className={styles.featuredStats}>
                <div className={styles.featuredStat}>
                  <span className={styles.featuredStatValue}>270+</span>
                  <span className={styles.featuredStatLabel}>Locations across Hyderabad</span>
                </div>
                <div className={styles.featuredStat}>
                  <span className={styles.featuredStatValue}>15</span>
                  <span className={styles.featuredStatLabel}>Years of operation</span>
                </div>
                <div className={styles.featuredStat}>
                  <span className={styles.featuredStatValue}>Free</span>
                  <span className={styles.featuredStatLabel}>To all users</span>
                </div>
              </div>

              <div className={styles.featuredHighlights}>
                <h4>Key Innovations</h4>
                <ul>
                  <li><strong>Café Subsidy Model:</strong> Attached café revenue covers toilet maintenance costs, making toilets free for users</li>
                  <li><strong>Gates Foundation Partnership:</strong> Technical support and funding for scaling operations</li>
                  <li><strong>Government PPP:</strong> GHMC partnership for strategic placement across the city</li>
                  <li><strong>24/7 Operations:</strong> Round-the-clock access with trained attendants</li>
                  <li><strong>Women&apos;s Safety:</strong> Well-lit, supervised facilities with panic buttons</li>
                </ul>
              </div>

              <div className={styles.featuredQuote}>
                <blockquote>
                  &quot;LooCafe proved that public sanitation can be both free and financially sustainable.
                  That operational expertise is now powering ReFlow&apos;s next-generation B-CRT technology.&quot;
                </blockquote>
                <cite>— Abhishek Nath, Founder, Ixora Group</cite>
              </div>

              <div className={styles.toiletTalesLink}>
                <a href="https://loocafe.com/toilet-tales" target="_blank" rel="noopener noreferrer">
                  🚽 Explore more stories on LooCafe&apos;s Toilet Tales →
                </a>
              </div>
            </div>

            <div className={styles.featuredImage}>
              <Image
                src="/images/logos/loocafe-logo.png"
                alt="LooCafe Logo"
                width={200}
                height={200}
                className={styles.featuredLogo}
              />
              <div className={styles.featuredImageCard}>
                <h4>The LooCafe Model</h4>
                <div className={styles.modelDiagram}>
                  <div className={styles.modelStep}>
                    <span className={styles.modelIcon}>🏛️</span>
                    <span>Government provides land</span>
                  </div>
                  <div className={styles.modelArrow}>↓</div>
                  <div className={styles.modelStep}>
                    <span className={styles.modelIcon}>☕</span>
                    <span>LooCafe builds toilet + café</span>
                  </div>
                  <div className={styles.modelArrow}>↓</div>
                  <div className={styles.modelStep}>
                    <span className={styles.modelIcon}>💰</span>
                    <span>Café revenue funds maintenance</span>
                  </div>
                  <div className={styles.modelArrow}>↓</div>
                  <div className={styles.modelStep}>
                    <span className={styles.modelIcon}>🚻</span>
                    <span>Toilets free for public</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.evolutionBox}>
            <h4>From LooCafe to ReFlow: The Evolution</h4>
            <div className={styles.evolutionTimeline}>
              <div className={styles.evolutionItem}>
                <div className={styles.evolutionYear}>2009</div>
                <div className={styles.evolutionText}>LooCafe launches first location in Hyderabad</div>
              </div>
              <div className={styles.evolutionItem}>
                <div className={styles.evolutionYear}>2015</div>
                <div className={styles.evolutionText}>Gates Foundation partnership begins</div>
              </div>
              <div className={styles.evolutionItem}>
                <div className={styles.evolutionYear}>2020</div>
                <div className={styles.evolutionText}>270+ locations milestone reached</div>
              </div>
              <div className={styles.evolutionItem}>
                <div className={styles.evolutionYear}>2024</div>
                <div className={styles.evolutionText}>ReFlow formed to deploy B-CRT technology</div>
              </div>
              <div className={styles.evolutionItem}>
                <div className={styles.evolutionYear}>2025</div>
                <div className={styles.evolutionText}>First B-CRT pilot operational in Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: China */}
      <section className={styles.caseStudy}>
        <div className={styles.container}>
          <div className={styles.caseBadge}>China</div>
          <div className={styles.caseGrid}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>China&apos;s Container Toilet Revolution</h3>
              <p className={styles.caseSubtitle}>800+ B-CRT units deployed through Yixing Eco-Sanitary</p>

              <div className={styles.caseDetails}>
                <div className={styles.caseDetail}>
                  <h4>The Challenge</h4>
                  <p>
                    Rapid urbanization outpaced sewage infrastructure. Rural and peri-urban areas lacked
                    connection to centralized treatment. Traditional pit latrines caused groundwater contamination.
                  </p>
                </div>
                <div className={styles.caseDetail}>
                  <h4>The Solution</h4>
                  <p>
                    Yixing Eco-Sanitary developed the B-CRT (Blackwater Circular Reinvented Toilet) as part of
                    the Gates Foundation&apos;s Reinvent the Toilet Challenge. Containerized, off-grid, zero-discharge
                    units that treat waste on-site.
                  </p>
                </div>
                <div className={styles.caseDetail}>
                  <h4>The Results</h4>
                  <ul>
                    <li>800+ units deployed across rural and tourist areas</li>
                    <li>98% water recovery rate achieved consistently</li>
                    <li>ISO 30500 certification obtained</li>
                    <li>Technology licensed to India (ReFlow)</li>
                  </ul>
                </div>
              </div>

              <div className={styles.caseLesson}>
                <strong>Key Lesson:</strong> Containerized treatment can scale rapidly without
                waiting for centralized infrastructure. The technology is now proven at scale.
              </div>
            </div>
            <div className={styles.caseStats}>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>800+</div>
                <div className={styles.caseStatLabel}>Units deployed</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>98%</div>
                <div className={styles.caseStatLabel}>Water recovery</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>ISO 30500</div>
                <div className={styles.caseStatLabel}>Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Japan */}
      <section className={styles.caseStudyAlt}>
        <div className={styles.container}>
          <div className={styles.caseBadge}>Japan</div>
          <div className={styles.caseGrid}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>The Tokyo Toilet Project</h3>
              <p className={styles.caseSubtitle}>17 architect-designed public toilets transforming urban spaces</p>

              <div className={styles.caseDetails}>
                <div className={styles.caseDetail}>
                  <h4>The Vision</h4>
                  <p>
                    The Nippon Foundation commissioned 16 world-renowned architects to redesign public
                    toilets in Shibuya, Tokyo. The goal: prove that public toilets can be beautiful,
                    safe, and welcoming spaces.
                  </p>
                </div>
                <div className={styles.caseDetail}>
                  <h4>Design Innovations</h4>
                  <ul>
                    <li><strong>Transparent glass walls</strong> that turn opaque when locked (Shigeru Ban)</li>
                    <li><strong>24-hour visibility</strong> for safety and cleanliness confidence</li>
                    <li><strong>Universal accessibility</strong> in every design</li>
                    <li><strong>High-tech fixtures:</strong> automated cleaning, bidets, deodorizers</li>
                  </ul>
                </div>
                <div className={styles.caseDetail}>
                  <h4>Impact</h4>
                  <p>
                    The project sparked global conversation about public toilet design. Inspired cities
                    worldwide to rethink sanitation as public infrastructure worthy of investment.
                  </p>
                </div>
              </div>

              <div className={styles.caseLesson}>
                <strong>Key Lesson:</strong> Design matters. When public toilets are beautiful and
                well-maintained, communities take pride in them and usage increases.
              </div>
            </div>
            <div className={styles.caseStats}>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>17</div>
                <div className={styles.caseStatLabel}>Unique designs</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>16</div>
                <div className={styles.caseStatLabel}>Architects</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>2020</div>
                <div className={styles.caseStatLabel}>Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Kenya */}
      <section className={styles.caseStudy}>
        <div className={styles.container}>
          <div className={styles.caseBadge}>Kenya</div>
          <div className={styles.caseGrid}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>Sanergy: Fresh Life Toilets</h3>
              <p className={styles.caseSubtitle}>4,000+ container-based toilets in Nairobi&apos;s informal settlements</p>

              <div className={styles.caseDetails}>
                <div className={styles.caseDetail}>
                  <h4>The Challenge</h4>
                  <p>
                    Nairobi&apos;s informal settlements house 2.5 million people with virtually no sewage
                    infrastructure. &quot;Flying toilets&quot; (waste in plastic bags) were common. Disease
                    outbreaks frequent.
                  </p>
                </div>
                <div className={styles.caseDetail}>
                  <h4>The Sanergy Model</h4>
                  <ul>
                    <li><strong>Franchise system:</strong> Local entrepreneurs own and operate toilets</li>
                    <li><strong>Daily collection:</strong> Waste collected and transported to central facility</li>
                    <li><strong>Resource recovery:</strong> Waste converted to organic fertilizer and insect protein</li>
                    <li><strong>Circular economy:</strong> Revenue from fertilizer subsidizes toilet operations</li>
                  </ul>
                </div>
                <div className={styles.caseDetail}>
                  <h4>Impact</h4>
                  <ul>
                    <li>4,000+ Fresh Life Toilets deployed</li>
                    <li>130,000+ daily users</li>
                    <li>3,000+ tonnes of waste safely treated annually</li>
                    <li>1,000+ jobs created in informal settlements</li>
                  </ul>
                </div>
              </div>

              <div className={styles.caseLesson}>
                <strong>Key Lesson:</strong> Container-based sanitation can work in the most challenging
                environments. Circular economy models create sustainability and jobs.
              </div>
            </div>
            <div className={styles.caseStats}>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>4,000+</div>
                <div className={styles.caseStatLabel}>Toilets deployed</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>130K</div>
                <div className={styles.caseStatLabel}>Daily users</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>1,000+</div>
                <div className={styles.caseStatLabel}>Jobs created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Singapore */}
      <section className={styles.caseStudyAlt}>
        <div className={styles.container}>
          <div className={styles.caseBadge}>Singapore</div>
          <div className={styles.caseGrid}>
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>Singapore: Regulation-Driven Excellence</h3>
              <p className={styles.caseSubtitle}>How strict standards created the world&apos;s cleanest public toilets</p>

              <div className={styles.caseDetails}>
                <div className={styles.caseDetail}>
                  <h4>The Approach</h4>
                  <p>
                    Singapore&apos;s Restroom Association (RAS) established strict hygiene standards backed by
                    enforcement. Regular inspections, grading systems, and public accountability transformed
                    public toilet culture.
                  </p>
                </div>
                <div className={styles.caseDetail}>
                  <h4>Key Standards</h4>
                  <ul>
                    <li><strong>Sensor-operated fixtures:</strong> Touchless faucets, flush, soap dispensers</li>
                    <li><strong>Ventilation priority:</strong> Mechanical ventilation in all facilities</li>
                    <li><strong>CCTV monitoring:</strong> Entry/exit areas for accountability</li>
                    <li><strong>Cleaning schedules:</strong> Documented, audited, posted publicly</li>
                  </ul>
                </div>
                <div className={styles.caseDetail}>
                  <h4>Results</h4>
                  <p>
                    Singapore consistently ranks among the world&apos;s best for public toilet cleanliness.
                    The approach demonstrates that regulation + accountability = results.
                  </p>
                </div>
              </div>

              <div className={styles.caseLesson}>
                <strong>Key Lesson:</strong> Standards and enforcement work. Public toilets respond to
                the same quality management principles as any other infrastructure.
              </div>
            </div>
            <div className={styles.caseStats}>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>#1</div>
                <div className={styles.caseStatLabel}>Cleanest in Asia</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>100%</div>
                <div className={styles.caseStatLabel}>Touchless fixtures</div>
              </div>
              <div className={styles.caseStat}>
                <div className={styles.caseStatValue}>A+</div>
                <div className={styles.caseStatLabel}>Grading system</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className={styles.lessons}>
        <div className={styles.container}>
          <h2 className={styles.lessonsTitle}>What we&apos;ve learned.</h2>
          <p className={styles.lessonsSubtitle}>
            Common threads across successful deployments worldwide.
          </p>

          <div className={styles.lessonsGrid}>
            <div className={styles.lessonCard}>
              <div className={styles.lessonNumber}>01</div>
              <h3 className={styles.lessonTitle}>Sustainable Business Models</h3>
              <p className={styles.lessonText}>
                Whether it&apos;s LooCafe&apos;s café-subsidy, Sanergy&apos;s franchise, or Singapore&apos;s
                user fees—successful deployments have clear financial sustainability paths.
              </p>
            </div>
            <div className={styles.lessonCard}>
              <div className={styles.lessonNumber}>02</div>
              <h3 className={styles.lessonTitle}>Technology Enables Scale</h3>
              <p className={styles.lessonText}>
                Containerized, modular designs (B-CRT, Fresh Life) deploy faster than built
                infrastructure. IoT monitoring enables efficient operations at scale.
              </p>
            </div>
            <div className={styles.lessonCard}>
              <div className={styles.lessonNumber}>03</div>
              <h3 className={styles.lessonTitle}>Design Drives Usage</h3>
              <p className={styles.lessonText}>
                Tokyo&apos;s transparent toilets and Singapore&apos;s spotless facilities prove that
                when public toilets are well-designed, communities embrace them.
              </p>
            </div>
            <div className={styles.lessonCard}>
              <div className={styles.lessonNumber}>04</div>
              <h3 className={styles.lessonTitle}>Local Ownership Matters</h3>
              <p className={styles.lessonText}>
                Sanergy&apos;s franchisees, LooCafe&apos;s trained attendants—local stakeholders invested
                in success create better outcomes than distant management.
              </p>
            </div>
            <div className={styles.lessonCard}>
              <div className={styles.lessonNumber}>05</div>
              <h3 className={styles.lessonTitle}>Circular Economy Creates Value</h3>
              <p className={styles.lessonText}>
                Water recycling (B-CRT), fertilizer production (Sanergy), café revenue (LooCafe)—
                treating waste as resource transforms the economics.
              </p>
            </div>
            <div className={styles.lessonCard}>
              <div className={styles.lessonNumber}>06</div>
              <h3 className={styles.lessonTitle}>Government Partnership Accelerates</h3>
              <p className={styles.lessonText}>
                LooCafe&apos;s GHMC partnership, Japan&apos;s Nippon Foundation backing—public-private
                collaboration unlocks land, permits, and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How ReFlow Applies These Lessons */}
      <section className={styles.application}>
        <div className={styles.container}>
          <h2 className={styles.applicationTitle}>How ReFlow applies these lessons.</h2>

          <div className={styles.applicationGrid}>
            <div className={styles.applicationCard}>
              <h4>From LooCafe</h4>
              <p>15 years of operational expertise, government relationships, and the café-subsidy model for financial sustainability.</p>
            </div>
            <div className={styles.applicationCard}>
              <h4>From China</h4>
              <p>Proven B-CRT technology with 800+ deployments, ISO 30500 certification, and 98% water recovery.</p>
            </div>
            <div className={styles.applicationCard}>
              <h4>From Japan</h4>
              <p>Design-forward thinking with modern aesthetics, universal accessibility, and user-centric features.</p>
            </div>
            <div className={styles.applicationCard}>
              <h4>From Kenya</h4>
              <p>Circular economy approach—treating waste as resource, creating local jobs, building community ownership.</p>
            </div>
            <div className={styles.applicationCard}>
              <h4>From Singapore</h4>
              <p>IoT-enabled monitoring, strict maintenance protocols, and data-driven operations management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to deploy world-class sanitation?</h2>
            <p className={styles.ctaText}>
              ReFlow combines the best of global innovations with 15 years of Indian operational expertise.
              Let&apos;s discuss how B-CRT can transform sanitation in your district.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                Schedule a Consultation
              </a>
              <Link href="/b-crt" className={styles.ctaSecondary}>
                View B-CRT Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
