import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Public Sanitation Knowledge Hub | ReFlow Toilets',
  description: 'Comprehensive guide to public sanitation in India: Crisis statistics, global best practices, technology evolution, regulatory landscape, health & economic impact, sustainability science, and inclusive design principles.',
  openGraph: {
    title: 'Public Sanitation Knowledge Hub - Understanding India\'s Sanitation Challenge',
    description: 'Data-driven insights into India\'s public sanitation crisis and sustainable solutions',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png'],
  },
}

export default function KnowledgeHub() {
  // Structured data for SEO
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.reflowtoilets.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Knowledge Hub',
        item: 'https://www.reflowtoilets.com/knowledge',
      },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Public Sanitation Knowledge Hub',
    description: 'Comprehensive guide to public sanitation challenges and solutions in India',
    author: {
      '@type': 'Organization',
      name: 'ReFlow Toilets',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ReFlow Toilets',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/logos/reflow-toilets-png.png',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <span className={styles.badge}>Knowledge Hub</span>
            <h1 className={styles.title}>Public Sanitation in India</h1>
            <p className={styles.subtitle}>Understanding the crisis, exploring solutions, and building a sustainable future</p>
            <p className={styles.description}>
              A comprehensive, data-driven resource covering India's sanitation challenges, global best practices,
              technological innovations, and the path to universal access to dignified sanitation.
            </p>
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className={styles.toc}>
          <div className={styles.container}>
            <h2 className={styles.tocTitle}>What You'll Learn</h2>
            <nav className={styles.tocGrid}>
              <a href="#crisis" className={styles.tocItem}>
                <span className={styles.tocNumber}>01</span>
                <span className={styles.tocLabel}>The Public Sanitation Crisis</span>
                <span className={styles.tocDesc}>Current state, gaps, and challenges in India</span>
              </a>
              <a href="#global" className={styles.tocItem}>
                <span className={styles.tocNumber}>02</span>
                <span className={styles.tocLabel}>Global Best Practices</span>
                <span className={styles.tocDesc}>How Japan, Singapore, and Europe lead</span>
              </a>
              <a href="#evolution" className={styles.tocItem}>
                <span className={styles.tocNumber}>03</span>
                <span className={styles.tocLabel}>Technology Evolution</span>
                <span className={styles.tocDesc}>From pit latrines to reinvented toilets</span>
              </a>
              <a href="#regulatory" className={styles.tocItem}>
                <span className={styles.tocNumber}>04</span>
                <span className={styles.tocLabel}>Regulatory Landscape</span>
                <span className={styles.tocDesc}>Swachh Bharat, CRZ, water mandates</span>
              </a>
              <a href="#impact" className={styles.tocItem}>
                <span className={styles.tocNumber}>05</span>
                <span className={styles.tocLabel}>Health & Economic Impact</span>
                <span className={styles.tocDesc}>Disease burden and productivity loss</span>
              </a>
              <a href="#sustainability" className={styles.tocItem}>
                <span className={styles.tocNumber}>06</span>
                <span className={styles.tocLabel}>Sustainability Science</span>
                <span className={styles.tocDesc}>Water recycling and circular economy</span>
              </a>
              <a href="#inclusion" className={styles.tocItem}>
                <span className={styles.tocNumber}>07</span>
                <span className={styles.tocLabel}>Design for Inclusion</span>
                <span className={styles.tocDesc}>Gender, disability, cultural considerations</span>
              </a>
            </nav>
          </div>
        </section>

        {/* SECTION 1: THE CRISIS */}
        <section id="crisis" className={styles.crisis}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The Public Sanitation Crisis</h2>
            <p className={styles.sectionIntro}>
              Despite significant progress under the Swachh Bharat Mission, millions of Indians still lack access to
              dignified sanitation. The numbers tell a sobering story.
            </p>

            {/* Key Statistics */}
            <div className={styles.statsHighlight}>
              <div className={styles.statHighlightCard}>
                <div className={styles.statHighlightValue}>162M</div>
                <div className={styles.statHighlightLabel}>People without a toilet</div>
                <div className={styles.statHighlightNote}>As of 2023, 12.5% of households still have no toilet access</div>
              </div>
              <div className={styles.statHighlightCard}>
                <div className={styles.statHighlightValue}>19%</div>
                <div className={styles.statHighlightLabel}>Open defecation rate</div>
                <div className={styles.statHighlightNote}>Down from 70% in 1993, but still affecting millions</div>
              </div>
              <div className={styles.statHighlightCard}>
                <div className={styles.statHighlightValue}>78.7%</div>
                <div className={styles.statHighlightLabel}>Rural toilet access</div>
                <div className={styles.statHighlightNote}>Gap between government claims and actual access</div>
              </div>
            </div>

            {/* The Reality */}
            <div className={styles.crisisContent}>
              <h3 className={styles.subsectionTitle}>The Reality on the Ground</h3>
              <div className={styles.crisisGrid}>
                <div className={styles.crisisCard}>
                  <h4 className={styles.crisisCardTitle}>Swachh Bharat Mission Progress</h4>
                  <p className={styles.crisisCardText}>
                    Within 5 years, <strong>100 million toilets</strong> were built, impacting the lives of 500 million people.
                    Sanitation coverage in rural areas improved from 38.7% to 100% (claimed), but ground reality shows gaps.
                  </p>
                  <p className={styles.crisisCardText}>
                    The WHO estimates that SBM prevented <strong>300,000 deaths</strong> and avoided 14 million DALYs
                    (Disability-Adjusted Life Years) between 2014 and 2019 alone.
                  </p>
                </div>

                <div className={styles.crisisCard}>
                  <h4 className={styles.crisisCardTitle}>Geographic Disparities</h4>
                  <p className={styles.crisisCardText}>
                    Over <strong>70% of those without a toilet</strong> live in just six states. The lowest socioeconomic
                    status households are the least likely to have a toilet.
                  </p>
                  <p className={styles.crisisCardText}>
                    About <strong>one in four rural households</strong> still do not have or use a toilet facility,
                    highlighting ongoing disparities in access to sanitation.
                  </p>
                </div>

                <div className={styles.crisisCard}>
                  <h4 className={styles.crisisCardTitle}>Sanitation Ladder Challenges</h4>
                  <p className={styles.crisisCardText}>
                    While many households now have toilets, the challenge has shifted to ensuring they are <strong>safely
                      managed</strong> — meaning proper faecal sludge collection, treatment, and disposal.
                  </p>
                  <p className={styles.crisisCardText}>
                    Public and community sanitation facilities remain inadequate in most urban and rural areas,
                    especially for women, children, and marginalized communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: GLOBAL BEST PRACTICES */}
        <section id="global" className={styles.global}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Global Best Practices</h2>
            <p className={styles.sectionIntro}>
              Countries around the world have pioneered innovative approaches to public sanitation.
              Here's what makes them exemplary models.
            </p>

            <div className={styles.globalGrid}>
              {/* Japan */}
              <div className={styles.globalCard}>
                <div className={styles.globalFlag}>🇯🇵</div>
                <h3 className={styles.globalCountry}>Japan</h3>
                <p className={styles.globalTagline}>Technology Meets Hygiene</p>
                <div className={styles.globalFeatures}>
                  <div className={styles.globalFeature}>
                    <strong>High-Tech Washrooms:</strong> Automated flushing, bidets, heated seats, and deodorizing
                    functions are standard in public facilities.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Cleanliness Culture:</strong> Japan has set the global bar for spotless and inviting toilet
                    facilities, reflecting the nation's commitment to public hygiene.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Infrastructure Investment:</strong> Train stations in Tokyo, Kyoto, and Osaka feature
                    world-class public toilets with modern components.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Design Innovation:</strong> The Tokyo Toilet Project showcases architect-designed public
                    toilets that blend art, function, and accessibility.
                  </div>
                </div>
              </div>

              {/* Singapore */}
              <div className={styles.globalCard}>
                <div className={styles.globalFlag}>🇸🇬</div>
                <h3 className={styles.globalCountry}>Singapore</h3>
                <p className={styles.globalTagline}>Regulation Drives Excellence</p>
                <div className={styles.globalFeatures}>
                  <div className={styles.globalFeature}>
                    <strong>Restroom Association of Singapore (RAS):</strong> Strict hygiene regulations enforced
                    through CCTV surveillance and consistent cleaning schedules.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Sensor-Operated Appliances:</strong> Touchless systems encourage hygiene and reduce
                    pathogen transmission.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Ventilation Priority:</strong> Proper ventilation is one of the highest design priorities,
                    ensuring odor control and user comfort.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Security & Confidence:</strong> Design standards focus on deterring crime, preventing
                    voyeurism, and enhancing user confidence.
                  </div>
                </div>
              </div>

              {/* Europe */}
              <div className={styles.globalCard}>
                <div className={styles.globalFlag}>🇪🇺</div>
                <h3 className={styles.globalCountry}>Europe</h3>
                <p className={styles.globalTagline}>Maintenance Through User Fees</p>
                <div className={styles.globalFeatures}>
                  <div className={styles.globalFeature}>
                    <strong>Germany:</strong> Public restrooms are usually well-kept, with many facilities requiring
                    a small fee (€0.50-1.00), which contributes to maintenance.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Switzerland:</strong> Receives high praise for exceptionally well-maintained public
                    restrooms with regular cleaning and attendant supervision.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Universal Design:</strong> Most modern European toilets include accessible cubicles,
                    grab bars, and facilities for people with disabilities.
                  </div>
                  <div className={styles.globalFeature}>
                    <strong>Sustainability Focus:</strong> Water-efficient fixtures, eco-friendly cleaning products,
                    and energy-efficient lighting are increasingly standard.
                  </div>
                </div>
              </div>
            </div>

            {/* Design Standards Summary */}
            <div className={styles.standardsBox}>
              <h3 className={styles.standardsTitle}>ASEAN Public Toilet Standard (Key Principles)</h3>
              <div className={styles.standardsGrid}>
                <div className={styles.standardItem}>
                  <span className={styles.standardIcon}>♿</span>
                  <strong>Universal Design:</strong> Accessible entrances minimum 80cm wide; accessible cubicles
                  minimum 1.5m × 2.2m
                </div>
                <div className={styles.standardItem}>
                  <span className={styles.standardIcon}>💧</span>
                  <strong>Hygiene Supplies:</strong> Adequate soap, toilet paper, hand sanitizer, and drying facilities
                  provided at all times
                </div>
                <div className={styles.standardItem}>
                  <span className={styles.standardIcon}>🌬️</span>
                  <strong>Ventilation:</strong> Proper air circulation is one of the highest design priorities for
                  odor control
                </div>
                <div className={styles.standardItem}>
                  <span className={styles.standardIcon}>🧼</span>
                  <strong>Regular Cleaning:</strong> Scheduled maintenance, adequate staffing, and accountability
                  systems ensure cleanliness
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TECHNOLOGY EVOLUTION */}
        <section id="evolution" className={styles.evolution}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Technology Evolution</h2>
            <p className={styles.sectionIntro}>
              From ancient pit latrines to smart, decentralized systems — sanitation technology has evolved dramatically.
              Here's the journey.
            </p>

            <div className={styles.timeline}>
              {/* Stage 1 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Pit Latrines & Open Defecation</h3>
                  <p className={styles.timelineEra}>Ancient Times – 1990s (Dominant in Rural India)</p>
                  <div className={styles.timelineDetails}>
                    <p><strong>Technology:</strong> Simple pits dug into the ground; no water seal or treatment.</p>
                    <p><strong>Challenges:</strong> Groundwater contamination, odor, fly breeding, dignity issues for women.</p>
                    <p><strong>Impact:</strong> High disease burden, especially diarrhea and intestinal worms.</p>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Flush Toilets & Septic Tanks</h3>
                  <p className={styles.timelineEra}>1990s – 2010s (Urban Areas & Progressive Rural)</p>
                  <div className={styles.timelineDetails}>
                    <p><strong>Technology:</strong> Water-based flushing to septic tanks or sewer networks.</p>
                    <p><strong>Challenges:</strong> Water wastage (6-15 liters per flush), requires piped water supply,
                      expensive infrastructure, faecal sludge management gaps.</p>
                    <p><strong>Impact:</strong> Improved hygiene in connected households but created water scarcity
                      and sewage treatment challenges.</p>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Swachh Bharat Mission (SBM) Toilets</h3>
                  <p className={styles.timelineEra}>2014 – 2019 (Nationwide Rural & Urban)</p>
                  <div className={styles.timelineDetails}>
                    <p><strong>Technology:</strong> Twin-pit pour-flush toilets promoted as low-cost solution.</p>
                    <p><strong>Achievements:</strong> 100 million toilets built, 500 million people impacted,
                      prevented 300,000 deaths.</p>
                    <p><strong>Challenges:</strong> Many toilets unused due to lack of water, cultural barriers,
                      or poor construction. "Safely managed" sanitation remains low.</p>
                  </div>
                </div>
              </div>

              {/* Stage 4 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>4</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Reinvented Toilets (ISO 30500)</h3>
                  <p className={styles.timelineEra}>2020 – Present (Emerging Technology)</p>
                  <div className={styles.timelineDetails}>
                    <p><strong>Technology:</strong> Decentralized, off-grid systems with onsite treatment.
                      Examples include B-CRT (Bio-Circular Resource Technology), container-based sanitation, and
                      solar-powered treatment units.</p>
                    <p><strong>Features:</strong> Zero water discharge, energy self-sufficient (solar), IoT monitoring,
                      resource recovery (reusable water, compost).</p>
                    <p><strong>Certification:</strong> ISO 30500 standard ensures safety, performance, and environmental
                      compliance.</p>
                    <p><strong>Impact:</strong> Solves water scarcity, eliminates sewage burden, enables deployment in
                      water-stressed, off-grid, or coastal areas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Trends */}
            <div className={styles.futureBox}>
              <h3 className={styles.futureTitle}>The Future: Smart, Sustainable, Dignified</h3>
              <div className={styles.futureGrid}>
                <div className={styles.futureCard}>
                  <strong>IoT & Data Analytics</strong>
                  <p>Real-time monitoring of usage, maintenance needs, water quality, and energy performance</p>
                </div>
                <div className={styles.futureCard}>
                  <strong>Circular Economy</strong>
                  <p>Resource recovery: treated water for flushing/gardening, biogas for energy, compost for agriculture</p>
                </div>
                <div className={styles.futureCard}>
                  <strong>Modular & Scalable</strong>
                  <p>Pre-fabricated units that can be deployed rapidly in slums, disaster zones, or coastal areas</p>
                </div>
                <div className={styles.futureCard}>
                  <strong>Gender & Inclusion</strong>
                  <p>Designed for women, elderly, children, and people with disabilities from the ground up</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: REGULATORY LANDSCAPE */}
        <section id="regulatory" className={styles.regulatory}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Regulatory Landscape</h2>
            <p className={styles.sectionIntro}>
              Understanding India's sanitation policies, mandates, and standards — from Swachh Bharat to coastal regulations.
            </p>

            <div className={styles.regulatoryGrid}>
              {/* Swachh Bharat */}
              <div className={styles.regulatoryCard}>
                <div className={styles.regulatoryHeader}>
                  <h3 className={styles.regulatoryTitle}>Swachh Bharat Mission (SBM)</h3>
                  <span className={styles.regulatoryBadge}>National</span>
                </div>
                <div className={styles.regulatoryContent}>
                  <p className={styles.regulatoryDesc}>
                    Launched in 2014, SBM is India's flagship sanitation program aimed at achieving universal sanitation
                    coverage and eliminating open defecation.
                  </p>
                  <h4 className={styles.regulatorySubtitle}>Key Outcomes</h4>
                  <ul className={styles.regulatoryList}>
                    <li><strong>100 million toilets</strong> constructed (2014–2019)</li>
                    <li>Sanitation coverage improved from <strong>38.7% to 100%</strong> (claimed)</li>
                    <li><strong>500 million people</strong> impacted</li>
                    <li><strong>300,000 deaths prevented</strong> (WHO estimate)</li>
                  </ul>
                  <h4 className={styles.regulatorySubtitle}>SBM Phase 2 (2020–2025)</h4>
                  <p className={styles.regulatoryDesc}>
                    Focus on <strong>safely managed sanitation</strong>, faecal sludge management,
                    greywater treatment, and behavior change reinforcement.
                  </p>
                </div>
              </div>

              {/* CRZ */}
              <div className={styles.regulatoryCard}>
                <div className={styles.regulatoryHeader}>
                  <h3 className={styles.regulatoryTitle}>Coastal Regulation Zone (CRZ)</h3>
                  <span className={styles.regulatoryBadge}>Coastal Areas</span>
                </div>
                <div className={styles.regulatoryContent}>
                  <p className={styles.regulatoryDesc}>
                    CRZ Notification 2019 governs development activities in coastal areas, with specific provisions
                    for public sanitation facilities.
                  </p>
                  <h4 className={styles.regulatorySubtitle}>Public Toilet Provisions</h4>
                  <ul className={styles.regulatoryList}>
                    <li><strong>Temporary Tourism Facilities:</strong> Toilets/washrooms permitted in No Development
                      Zone (NDZ) for beach tourism, located at least 10m from High Tide Line (HTL)</li>
                    <li><strong>Community Toilets:</strong> Allowed for traditional coastal inhabitants on a
                      case-by-case basis by Coastal Zone Management Authority</li>
                    <li><strong>Proper Sanitation:</strong> All facilities must incorporate proper sanitation
                      arrangements as mandated</li>
                  </ul>
                  <p className={styles.regulatoryDesc}>
                    These regulations make decentralized, zero-discharge toilets like B-CRT ideal for coastal areas
                    where sewage infrastructure is prohibited or impractical.
                  </p>
                </div>
              </div>

              {/* Water Conservation */}
              <div className={styles.regulatoryCard}>
                <div className={styles.regulatoryHeader}>
                  <h3 className={styles.regulatoryTitle}>Water Conservation Mandates</h3>
                  <span className={styles.regulatoryBadge}>Urban/Water-Stressed</span>
                </div>
                <div className={styles.regulatoryContent}>
                  <p className={styles.regulatoryDesc}>
                    With India's per capita water availability declining 73% since 1950, cities are mandating
                    water-efficient sanitation solutions.
                  </p>
                  <h4 className={styles.regulatorySubtitle}>Key Statistics</h4>
                  <ul className={styles.regulatoryList}>
                    <li>India has <strong>1,486 m³</strong> annual per capita freshwater availability (water-stressed)</li>
                    <li>Cities like Delhi, Mumbai, Chennai facing severe water shortages</li>
                    <li>Average urban water supply: <strong>69.25 LPCD</strong> vs. 135 LPCD benchmark</li>
                  </ul>
                  <h4 className={styles.regulatorySubtitle}>Implications</h4>
                  <p className={styles.regulatoryDesc}>
                    Conventional flush toilets (6-15L per flush) are unsustainable in water-stressed cities.
                    Water recycling and low-water/zero-discharge systems are increasingly mandated.
                  </p>
                </div>
              </div>

              {/* Sewage Treatment */}
              <div className={styles.regulatoryCard}>
                <div className={styles.regulatoryHeader}>
                  <h3 className={styles.regulatoryTitle}>Sewage Treatment Gap</h3>
                  <span className={styles.regulatoryBadge}>Urban India</span>
                </div>
                <div className={styles.regulatoryContent}>
                  <p className={styles.regulatoryDesc}>
                    India's sewage treatment infrastructure lags far behind wastewater generation, creating an
                    environmental and public health crisis.
                  </p>
                  <h4 className={styles.regulatorySubtitle}>The Numbers</h4>
                  <ul className={styles.regulatoryList}>
                    <li><strong>72.4 billion liters/day</strong> of wastewater generated across India</li>
                    <li>Installed capacity: <strong>31,841 MLD</strong>; Operational: <strong>26,869 MLD</strong></li>
                    <li>Only <strong>28%</strong> of wastewater is actually treated</li>
                    <li><strong>72% of untreated wastewater</strong> is dumped into rivers, lakes, groundwater</li>
                    <li>Treatment gap is <strong>widening</strong>: Generation increasing faster than capacity</li>
                  </ul>
                  <h4 className={styles.regulatorySubtitle}>Solution</h4>
                  <p className={styles.regulatoryDesc}>
                    Decentralized, onsite treatment systems (like B-CRT) bypass the sewage infrastructure burden
                    entirely, treating waste at the source with zero discharge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: HEALTH & ECONOMIC IMPACT */}
        <section id="impact" className={styles.impact}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Health & Economic Impact</h2>
            <p className={styles.sectionIntro}>
              Poor sanitation doesn't just harm health — it devastates economies, productivity, and livelihoods.
            </p>

            {/* Impact Metrics */}
            <div className={styles.impactMetrics}>
              <div className={styles.impactMetricCard}>
                <div className={styles.impactMetricValue}>6.4%</div>
                <div className={styles.impactMetricLabel}>of India's GDP Lost</div>
                <div className={styles.impactMetricNote}>Due to inadequate sanitation (World Bank study)</div>
              </div>
              <div className={styles.impactMetricCard}>
                <div className={styles.impactMetricValue}>37.7M</div>
                <div className={styles.impactMetricLabel}>Indians Affected Annually</div>
                <div className={styles.impactMetricNote}>By waterborne diseases</div>
              </div>
              <div className={styles.impactMetricCard}>
                <div className={styles.impactMetricValue}>117K</div>
                <div className={styles.impactMetricLabel}>Under-5 Deaths/Year</div>
                <div className={styles.impactMetricNote}>From diarrhea alone (2015 data)</div>
              </div>
            </div>

            {/* Health Burden */}
            <div className={styles.impactSection}>
              <h3 className={styles.impactSectionTitle}>The Health Burden</h3>
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <h4 className={styles.impactCardTitle}>Disease Prevalence</h4>
                  <p className={styles.impactCardText}>
                    WASH-related diseases account for <strong>5.7% of all outpatient visits</strong> and
                    <strong>6.9% of all hospital admissions</strong> in India (2017–18).
                  </p>
                  <p className={styles.impactCardText}>
                    India still loses between <strong>0.4 and 0.5 million children under 5</strong> due to diarrhea annually.
                  </p>
                  <p className={styles.impactCardText}>
                    In 2015, <strong>117,000 under-5 children died of diarrhea</strong>, representing 13% of all deaths
                    in this age group and 22% of the global burden.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <h4 className={styles.impactCardTitle}>Economic Cost of Illness</h4>
                  <p className={styles.impactCardText}>
                    Mean out-of-pocket expenditure: <strong>₹703 per outpatient visit</strong> and
                    <strong>₹9,656 per hospital admission</strong> for WASH-related diseases.
                  </p>
                  <p className={styles.impactCardText}>
                    <strong>74% of rural jaundice patients</strong> spent more than their monthly income on healthcare.
                  </p>
                  <p className={styles.impactCardText}>
                    An estimated <strong>73 million working days</strong> are lost annually due to waterborne disease,
                    costing <strong>US$600 million/year</strong>.
                  </p>
                </div>

                <div className={styles.impactCard}>
                  <h4 className={styles.impactCardTitle}>Breakdown of Economic Losses</h4>
                  <p className={styles.impactCardText}>
                    <strong>Premature mortality & health impacts:</strong> US$38.5 billion
                    (₹1.75 trillion) — 71.6% of total impacts.
                  </p>
                  <p className={styles.impactCardText}>
                    <strong>Diarrhea in children:</strong> Accounts for over 47% (US$18 billion / ₹824 billion)
                    of total health-related economic impacts.
                  </p>
                  <p className={styles.impactCardText}>
                    Additional losses from productivity loss, time spent seeking care, and caregiving burden.
                  </p>
                </div>
              </div>
            </div>

            {/* ROI of Sanitation */}
            <div className={styles.roiBox}>
              <h3 className={styles.roiTitle}>Return on Investment: Sanitation Pays</h3>
              <div className={styles.roiContent}>
                <div className={styles.roiStat}>
                  <span className={styles.roiMultiplier}>9x</span>
                  <span className={styles.roiLabel}>Return on Every Dollar Spent</span>
                </div>
                <p className={styles.roiText}>
                  Every dollar spent on sanitation yields about <strong>US$9 in savings</strong> on treatment,
                  healthcare costs, and gains from more productive days. Sanitation interventions are among the
                  most cost-effective public health investments.
                </p>
                <div className={styles.roiBreakdown}>
                  <div className={styles.roiItem}>✓ Reduced disease burden and healthcare costs</div>
                  <div className={styles.roiItem}>✓ Increased productivity and school attendance</div>
                  <div className={styles.roiItem}>✓ Economic gains from reduced mortality</div>
                  <div className={styles.roiItem}>✓ Improved dignity and quality of life (unquantified)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SUSTAINABILITY SCIENCE */}
        <section id="sustainability" className={styles.sustainability}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Sustainability Science</h2>
            <p className={styles.sectionIntro}>
              Moving beyond flush-and-forget to circular sanitation systems that recover resources,
              conserve water, and close the nutrient loop.
            </p>

            {/* Circular Economy Model */}
            <div className={styles.sustainabilityHero}>
              <h3 className={styles.sustainabilityHeroTitle}>The Circular Sanitation Economy</h3>
              <p className={styles.sustainabilityHeroText}>
                Traditional sanitation is linear: water in → waste out → pollute rivers. Circular sanitation
                treats waste as a resource, recovering water, energy, and nutrients.
              </p>
            </div>

            <div className={styles.sustainabilityGrid}>
              {/* Water Recycling */}
              <div className={styles.sustainabilityCard}>
                <div className={styles.sustainabilityIcon}>💧</div>
                <h4 className={styles.sustainabilityCardTitle}>Water Recycling & Zero Discharge</h4>
                <div className={styles.sustainabilityCardContent}>
                  <p><strong>The Challenge:</strong> India is water-stressed (1,486 m³ per capita/year).
                    Cities face severe shortages; per capita availability down 73% since 1950.</p>
                  <p><strong>The Solution:</strong> Advanced treatment systems (like B-CRT) recycle 100% of
                    wastewater onsite. Treated water meets reuse standards for flushing, gardening, or groundwater recharge.</p>
                  <p><strong>Impact:</strong> Zero freshwater withdrawal for flushing; zero sewage discharge
                    to rivers/groundwater. Ideal for water-stressed and off-grid areas.</p>
                </div>
              </div>

              {/* Energy Recovery */}
              <div className={styles.sustainabilityCard}>
                <div className={styles.sustainabilityIcon}>⚡</div>
                <h4 className={styles.sustainabilityCardTitle}>Energy Self-Sufficiency</h4>
                <div className={styles.sustainabilityCardContent}>
                  <p><strong>Solar Power:</strong> Modern reinvented toilets use solar panels to power treatment
                    processes, IoT sensors, lighting, and ventilation — completely off-grid.</p>
                  <p><strong>Biogas Recovery:</strong> Anaerobic digestion of organic waste produces methane
                    (biogas) that can be used for cooking or electricity generation.</p>
                  <p><strong>Impact:</strong> Net-zero or net-positive energy systems. No reliance on grid power,
                    reducing operational costs and carbon footprint.</p>
                </div>
              </div>

              {/* Nutrient Recovery */}
              <div className={styles.sustainabilityCard}>
                <div className={styles.sustainabilityIcon}>🌱</div>
                <h4 className={styles.sustainabilityCardTitle}>Nutrient Recovery & Reuse</h4>
                <div className={styles.sustainabilityCardContent}>
                  <p><strong>Compost Production:</strong> Solid waste (faecal sludge) is treated and converted
                    into pathogen-free compost, rich in nitrogen, phosphorus, and potassium.</p>
                  <p><strong>Agricultural Value:</strong> Compost can be used for urban gardening, landscaping,
                    or sold to farmers, closing the nutrient loop.</p>
                  <p><strong>Impact:</strong> Reduces reliance on chemical fertilizers, improves soil health,
                    and creates revenue streams from waste.</p>
                </div>
              </div>

              {/* Climate Resilience */}
              <div className={styles.sustainabilityCard}>
                <div className={styles.sustainabilityIcon}>🌍</div>
                <h4 className={styles.sustainabilityCardTitle}>Climate Resilience</h4>
                <div className={styles.sustainabilityCardContent}>
                  <p><strong>Flood-Proof:</strong> Decentralized systems operate independently of sewer networks,
                    which often overflow during floods, contaminating water sources.</p>
                  <p><strong>Drought-Proof:</strong> Zero freshwater requirement for operation; water recycling
                    ensures continuity during droughts.</p>
                  <p><strong>Disaster-Ready:</strong> Modular, pre-fabricated units can be rapidly deployed in
                    disaster zones, refugee camps, or post-disaster reconstruction.</p>
                </div>
              </div>
            </div>

            {/* ISO 30500 Standard */}
            <div className={styles.standardBox}>
              <h3 className={styles.standardBoxTitle}>ISO 30500: The Gold Standard for Reinvented Toilets</h3>
              <div className={styles.standardBoxContent}>
                <p className={styles.standardBoxIntro}>
                  ISO 30500 is the international standard for non-sewered sanitation systems (NSSS), ensuring safety,
                  performance, and environmental compliance.
                </p>
                <div className={styles.standardBoxGrid}>
                  <div className={styles.standardBoxItem}>
                    <strong>Pathogen Removal:</strong> Effluent must meet WHO guidelines for safe reuse
                    (log reduction targets for bacteria, viruses, helminths)
                  </div>
                  <div className={styles.standardBoxItem}>
                    <strong>Environmental Safety:</strong> Zero or minimal discharge; treated outputs safe for
                    environment and human contact
                  </div>
                  <div className={styles.standardBoxItem}>
                    <strong>User Safety:</strong> No hazardous emissions, proper ventilation, safe operation
                    and maintenance procedures
                  </div>
                  <div className={styles.standardBoxItem}>
                    <strong>Durability & Reliability:</strong> Designed for long-term operation (10+ years)
                    with minimal maintenance
                  </div>
                </div>
                <p className={styles.standardBoxNote}>
                  B-CRT is designed to meet ISO 30500 standards, ensuring it delivers safe, sustainable, and
                  high-performance sanitation in all deployment conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: DESIGN FOR INCLUSION */}
        <section id="inclusion" className={styles.inclusion}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Design for Inclusion</h2>
            <p className={styles.sectionIntro}>
              Dignified sanitation is a human right. Inclusive design ensures public toilets serve everyone —
              regardless of gender, age, ability, or cultural background.
            </p>

            <div className={styles.inclusionGrid}>
              {/* Gender Inclusion */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionHeader}>
                  <span className={styles.inclusionIcon}>👩</span>
                  <h3 className={styles.inclusionTitle}>Gender-Sensitive Design</h3>
                </div>
                <div className={styles.inclusionContent}>
                  <h4 className={styles.inclusionSubtitle}>Why It Matters</h4>
                  <p className={styles.inclusionText}>
                    Women and girls face unique sanitation challenges: safety concerns (voyeurism, harassment),
                    menstrual hygiene needs, longer wait times, and cultural taboos around public toilet use.
                  </p>
                  <h4 className={styles.inclusionSubtitle}>Design Principles</h4>
                  <ul className={styles.inclusionList}>
                    <li><strong>Separate Facilities:</strong> Dedicated women's and men's sections with clear signage</li>
                    <li><strong>Menstrual Hygiene:</strong> Disposal bins, handwashing facilities, and privacy</li>
                    <li><strong>Safety & Lighting:</strong> Well-lit entrances, panic buttons, visibility from outside</li>
                    <li><strong>Adequate Ratio:</strong> More female cubicles (2:1 or 3:1 ratio) to account for longer usage time</li>
                    <li><strong>Breastfeeding Rooms:</strong> Designated space for nursing mothers</li>
                  </ul>
                </div>
              </div>

              {/* Disability Inclusion */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionHeader}>
                  <span className={styles.inclusionIcon}>♿</span>
                  <h3 className={styles.inclusionTitle}>Universal Accessibility</h3>
                </div>
                <div className={styles.inclusionContent}>
                  <h4 className={styles.inclusionSubtitle}>ASEAN & Global Standards</h4>
                  <p className={styles.inclusionText}>
                    Public toilets must be designed to accommodate people with disabilities, the elderly, and
                    children, ensuring dignity and independence for all users.
                  </p>
                  <h4 className={styles.inclusionSubtitle}>Design Requirements</h4>
                  <ul className={styles.inclusionList}>
                    <li><strong>Accessible Entrance:</strong> Minimum 80cm wide door, no steps, ramps where needed</li>
                    <li><strong>Spacious Cubicles:</strong> Minimum 1.5m × 2.2m for wheelchair maneuvering</li>
                    <li><strong>Grab Bars:</strong> Sturdy support rails near toilets and in shower areas</li>
                    <li><strong>Accessible Fixtures:</strong> Lower sinks, mirrors, hand dryers; lever-style taps</li>
                    <li><strong>Visual & Tactile Signage:</strong> Braille, high-contrast signs, tactile floor indicators</li>
                    <li><strong>Emergency Alarms:</strong> Accessible panic buttons within reach from seated position</li>
                  </ul>
                </div>
              </div>

              {/* Age-Friendly */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionHeader}>
                  <span className={styles.inclusionIcon}>👶👴</span>
                  <h3 className={styles.inclusionTitle}>Age-Friendly Features</h3>
                </div>
                <div className={styles.inclusionContent}>
                  <h4 className={styles.inclusionSubtitle}>For Children</h4>
                  <ul className={styles.inclusionList}>
                    <li><strong>Child-Sized Fixtures:</strong> Lower toilets, sinks, and hand dryers</li>
                    <li><strong>Changing Tables:</strong> Baby changing stations in both men's and women's facilities</li>
                    <li><strong>Family Rooms:</strong> Unisex family cubicles for parent-child use</li>
                    <li><strong>Safety:</strong> Rounded edges, non-slip flooring, supervised visibility</li>
                  </ul>
                  <h4 className={styles.inclusionSubtitle}>For Elderly</h4>
                  <ul className={styles.inclusionList}>
                    <li><strong>Support Rails:</strong> Grab bars for stability when sitting/standing</li>
                    <li><strong>Seating Areas:</strong> Benches or chairs in waiting areas</li>
                    <li><strong>Clear Signage:</strong> Large fonts, high contrast, intuitive icons</li>
                    <li><strong>Non-Slip Flooring:</strong> Reduces fall risk</li>
                  </ul>
                </div>
              </div>

              {/* Cultural Sensitivity */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionHeader}>
                  <span className={styles.inclusionIcon}>🕌</span>
                  <h3 className={styles.inclusionTitle}>Cultural Considerations</h3>
                </div>
                <div className={styles.inclusionContent}>
                  <h4 className={styles.inclusionSubtitle}>Regional & Religious Practices</h4>
                  <p className={styles.inclusionText}>
                    India's diverse cultural and religious landscape requires thoughtful design that respects
                    varied sanitation practices and preferences.
                  </p>
                  <h4 className={styles.inclusionSubtitle}>Design Adaptations</h4>
                  <ul className={styles.inclusionList}>
                    <li><strong>Water for Cleansing:</strong> Hand-held bidet spray or water taps (Muslim, Hindu preferences)</li>
                    <li><strong>Squat vs. Sit Options:</strong> Provide both Western and Indian-style toilets</li>
                    <li><strong>Privacy:</strong> Full-height partition walls, secure door locks</li>
                    <li><strong>Footwear Areas:</strong> Designated zones for footwear removal (where culturally expected)</li>
                    <li><strong>Wudu Facilities:</strong> Ablution areas near mosques or in Muslim-majority areas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Inclusive Design Checklist */}
            <div className={styles.checklistBox}>
              <h3 className={styles.checklistTitle}>Inclusive Public Toilet Design Checklist</h3>
              <div className={styles.checklistGrid}>
                <div className={styles.checklistColumn}>
                  <div className={styles.checklistItem}>✓ Gender-separated facilities (2:1 or 3:1 F:M ratio)</div>
                  <div className={styles.checklistItem}>✓ At least one fully accessible cubicle (1.5m × 2.2m)</div>
                  <div className={styles.checklistItem}>✓ Baby changing tables in all gender facilities</div>
                  <div className={styles.checklistItem}>✓ Grab bars and support rails</div>
                  <div className={styles.checklistItem}>✓ Emergency alarm accessible from seated position</div>
                </div>
                <div className={styles.checklistColumn}>
                  <div className={styles.checklistItem}>✓ Well-lit, safe entrance with visibility</div>
                  <div className={styles.checklistItem}>✓ Non-slip flooring throughout</div>
                  <div className={styles.checklistItem}>✓ Menstrual hygiene disposal bins</div>
                  <div className={styles.checklistItem}>✓ Both squat and sit toilet options</div>
                  <div className={styles.checklistItem}>✓ Multilingual signage with icons and Braille</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Implement Sustainable Sanitation?</h2>
            <p className={styles.ctaText}>
              ReFlow's B-CRT technology addresses every challenge outlined in this knowledge hub:
              water scarcity, sewage burden, coastal regulations, health impacts, and inclusive design.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/b-crt" className={styles.ctaButton}>
                Explore B-CRT Technology
              </Link>
              <Link href="/contact" className={styles.ctaButtonSecondary}>
                Schedule a Consultation
              </Link>
            </div>
            <p className={styles.ctaNote}>
              Join districts, municipalities, and organizations building dignified sanitation for all.
            </p>
          </div>
        </section>

        {/* SOURCES */}
        <section className={styles.sources}>
          <div className={styles.container}>
            <h2 className={styles.sourcesTitle}>Research Sources</h2>
            <p className={styles.sourcesIntro}>
              All data and statistics in this knowledge hub are sourced from reputable organizations,
              government reports, and peer-reviewed research.
            </p>
            <div className={styles.sourcesGrid}>
              <div className={styles.sourcesCategory}>
                <h3 className={styles.sourcesCategoryTitle}>Sanitation Statistics</h3>
                <ul className={styles.sourcesList}>
                  <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12180355/" target="_blank" rel="noopener">Prevalence and burden of no-toilet households in India (PMC)</a></li>
                  <li><a href="https://www.newsecuritybeat.org/2024/12/swachh-bharat-mission-intended-and-unintended-consequences/" target="_blank" rel="noopener">Swachh Bharat Mission: Consequences (New Security Beat)</a></li>
                  <li><a href="https://www.unicef.org/india/what-we-do/ending-open-defecation" target="_blank" rel="noopener">UNICEF India: Ending Open Defecation</a></li>
                  <li><a href="https://www.dataforindia.com/sanitation/" target="_blank" rel="noopener">Data For India: Access to Toilets</a></li>
                </ul>
              </div>

              <div className={styles.sourcesCategory}>
                <h3 className={styles.sourcesCategoryTitle}>Global Best Practices</h3>
                <ul className={styles.sourcesList}>
                  <li><a href="https://2theloo.com/blog/which-country-has-the-cleanest-toilets-in-the-world" target="_blank" rel="noopener">Countries with Cleanest Toilets (2theloo)</a></li>
                  <li><a href="https://toilet.org.sg/docs/Guide Better Public Toilet _ 6th Edition2025.pdf" target="_blank" rel="noopener">Singapore Guide to Better Public Toilet Design</a></li>
                  <li><a href="https://www.asean.org/wp-content/uploads/2012/05/ASEAN-Public-Toilet-Standard.pdf" target="_blank" rel="noopener">ASEAN Public Toilet Standard</a></li>
                </ul>
              </div>

              <div className={styles.sourcesCategory}>
                <h3 className={styles.sourcesCategoryTitle}>Water & Sewage</h3>
                <ul className={styles.sourcesList}>
                  <li><a href="https://www.drishtiias.com/summary-of-important-reports/urban-wastewater-scenario-in-india" target="_blank" rel="noopener">Urban Wastewater Scenario in India (Drishti IAS)</a></li>
                  <li><a href="https://www.indiaspend.com/pollution/why-india-needs-to-urgently-rehaul-sewage-treatment-plans-954097" target="_blank" rel="noopener">India's Sewage Treatment Gap (IndiaSpend)</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Water_scarcity_in_India" target="_blank" rel="noopener">Water Scarcity in India (Wikipedia)</a></li>
                </ul>
              </div>

              <div className={styles.sourcesCategory}>
                <h3 className={styles.sourcesCategoryTitle}>Regulations</h3>
                <ul className={styles.sourcesList}>
                  <li><a href="https://crz.elaw.in/crz2019.html" target="_blank" rel="noopener">Coastal Regulation Zone Notification 2019</a></li>
                  <li><a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1907510" target="_blank" rel="noopener">Swachh Bharat Mission Progress (PIB)</a></li>
                </ul>
              </div>

              <div className={styles.sourcesCategory}>
                <h3 className={styles.sourcesCategoryTitle}>Health & Economic Impact</h3>
                <ul className={styles.sourcesList}>
                  <li><a href="https://www.sciencedirect.com/science/article/pii/S2213398421001950" target="_blank" rel="noopener">Burden of WASH-related diseases in India (ScienceDirect)</a></li>
                  <li><a href="https://www.worldbank.org/en/news/press-release/2010/12/20/inadequate-sanitation-costs-india-the-equivalent-of-64-per-cent-of-gdp" target="_blank" rel="noopener">Economic Cost of Poor Sanitation (World Bank)</a></li>
                  <li><a href="https://www.who.int/southeastasia/news/speeches/detail/the-health-and-economic-cost-of-poor-sanitation" target="_blank" rel="noopener">Health and Economic Cost (WHO)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
