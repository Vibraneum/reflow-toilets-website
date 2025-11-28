'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './PolicyVision.module.css'

export default function PolicyVision() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Main Narrative Header */}
        <div className={styles.header}>
          <span className={styles.badge}>The Bigger Picture</span>
          <h2 className={styles.title}>
            ReFlow is an <span className={styles.highlight}>Invention</span>
          </h2>
          <p className={styles.subtitle}>
            Like how air conditioners went from room-sized machines to wall units,
            like how computers filled buildings before fitting in pockets—
            <strong> ReFlow is part of that same journey for sanitation technology.</strong>
          </p>
        </div>

        {/* Evolution Timeline */}
        <div className={styles.evolutionSection}>
          <h3 className={styles.sectionTitle}>Every Great Technology Started Big</h3>
          <div className={styles.evolutionGrid}>
            <div className={styles.evolutionCard}>
              <div className={styles.evolutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h4>Computers</h4>
              <p>Room-sized → Desktop → Laptop → Pocket</p>
              <span className={styles.evolutionTime}>70 years</span>
            </div>
            <div className={styles.evolutionCard}>
              <div className={styles.evolutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M6 10h2v4H6z" />
                  <path d="M14 10h4" />
                </svg>
              </div>
              <h4>Air Conditioners</h4>
              <p>Industrial units → Split systems → Portable</p>
              <span className={styles.evolutionTime}>80 years</span>
            </div>
            <div className={styles.evolutionCard}>
              <div className={styles.evolutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M8 6h8" />
                  <circle cx="12" cy="16" r="2" />
                </svg>
              </div>
              <h4>Refrigerators</h4>
              <p>Ice houses → Commercial → Home appliance</p>
              <span className={styles.evolutionTime}>100 years</span>
            </div>
            <div className={`${styles.evolutionCard} ${styles.evolutionCardHighlight}`}>
              <div className={styles.evolutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h4>ReFlow B-CRT</h4>
              <p>Container unit → Compact → Scalable modules</p>
              <span className={styles.evolutionTime}>Starting now</span>
            </div>
          </div>
        </div>

        {/* Policy Section - Updated with Real Data */}
        <div className={styles.policySection}>
          <div className={styles.policyContent}>
            <span className={styles.policyBadge}>Policy Mandate</span>
            <h3 className={styles.policyTitle}>
              ODF++ Requires On-Site Treatment
            </h3>
            <p className={styles.policyText}>
              <strong>Swachh Bharat Mission 2.0</strong> mandates that cities achieve ODF++ status—meaning
              faecal sludge must be <strong>safely managed and treated with no discharge to water bodies</strong>.
              Yet 56% of India&apos;s centralized Sewage Treatment Plants sit under-utilized.
              The future is decentralized.
            </p>

            <div className={styles.policyStats}>
              <div className={styles.policyStat}>
                <span className={styles.policyStatNumber}>₹1.7L Cr</span>
                <span className={styles.policyStatLabel}>SBM 2.0 + AMRUT 2.0 Funding</span>
              </div>
              <div className={styles.policyStat}>
                <span className={styles.policyStatNumber}>29,000</span>
                <span className={styles.policyStatLabel}>Aspirational Toilet Seats Approved</span>
              </div>
              <div className={styles.policyStat}>
                <span className={styles.policyStatNumber}>40%</span>
                <span className={styles.policyStatLabel}>VGF from Government of India</span>
              </div>
            </div>

            <div className={styles.policyPoints}>
              <div className={styles.policyPoint}>
                <div className={styles.policyIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <div>
                  <h4>Zero Liquid Discharge Rules (Oct 2025)</h4>
                  <p>New regulations mandate zero effluent discharge. ReFlow is already compliant.</p>
                </div>
              </div>
              <div className={styles.policyPoint}>
                <div className={styles.policyIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <div>
                  <h4>AMRUT 2.0: 20% Water Reuse Target</h4>
                  <p>Cities must meet 20% of water demand from treated wastewater. B-CRT enables this.</p>
                </div>
              </div>
              <div className={styles.policyPoint}>
                <div className={styles.policyIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <div>
                  <h4>FSSM Policy 2017: On-Site Treatment</h4>
                  <p>India&apos;s national policy explicitly supports on-site sanitation and treatment systems.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.policyImageWrapper}>
            <Image
              src="/images/launch-lumbini-park/lumbini-launch-02.jpg"
              alt="B-CRT Unit - On-site waste processing"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.policyImageOverlay}>
              <span>Unit #1 at Lumbini Park</span>
              <span>India&apos;s first zero-discharge public toilet</span>
            </div>
          </div>
        </div>

        {/* Where Sewers Can't Go */}
        <div className={styles.offGridSection}>
          <h3 className={styles.offGridTitle}>Where Sewers Will Never Reach</h3>
          <p className={styles.offGridSubtitle}>
            Only 21% of India&apos;s sewage is currently treated. Centralized systems can&apos;t scale fast enough.
          </p>
          <div className={styles.offGridGrid}>
            <div className={styles.offGridCard}>
              <span className={styles.offGridIcon}>🛕</span>
              <h4>Pilgrimage Sites</h4>
              <p>Remote temples, dargahs, and religious circuits with millions of annual visitors</p>
            </div>
            <div className={styles.offGridCard}>
              <span className={styles.offGridIcon}>🏞️</span>
              <h4>Tourist Destinations</h4>
              <p>Hill stations, beaches, national parks where laying sewers is impossible or prohibited</p>
            </div>
            <div className={styles.offGridCard}>
              <span className={styles.offGridIcon}>🛣️</span>
              <h4>Highways & Rest Stops</h4>
              <p>India&apos;s 1.5 lakh km highway network needs sanitation without municipal sewerage</p>
            </div>
            <div className={styles.offGridCard}>
              <span className={styles.offGridIcon}>🏗️</span>
              <h4>Construction Sites</h4>
              <p>Temporary but critical—worker welfare mandates require sanitation facilities</p>
            </div>
            <div className={styles.offGridCard}>
              <span className={styles.offGridIcon}>🎪</span>
              <h4>Events & Melas</h4>
              <p>Kumbh Mela, festivals, exhibitions—massive temporary populations</p>
            </div>
            <div className={styles.offGridCard}>
              <span className={styles.offGridIcon}>🏘️</span>
              <h4>Peri-Urban Areas</h4>
              <p>Growing townships outside municipal limits, ahead of infrastructure</p>
            </div>
          </div>
        </div>

        {/* Working Group Section */}
        <div className={styles.workingGroup}>
          <h3 className={styles.workingGroupTitle}>
            Shaping the Standard Together
          </h3>
          <p className={styles.workingGroupSubtitle}>
            ISO 30500 was developed by experts from 48 countries. ReFlow works with global leaders
            to bring this standard to India.
          </p>

          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogo}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732616/reflow-assets/logos/gates.png"
                  alt="Gates Foundation"
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4>Gates Foundation</h4>
              <p>$200M+ invested since 2011. $370M committed through 2026. The Reinvent the Toilet Challenge created B-CRT.</p>
            </div>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogo}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/v1763732616/reflow-assets/logos/asci.png"
                  alt="ASCI"
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4>ASCI</h4>
              <p>Administrative Staff College of India—developing policy frameworks for government adoption of reinvented toilets.</p>
            </div>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogo}>
                <span className={styles.hubLogo}>WASH Innovation Hub</span>
              </div>
              <h4>WASH Innovation Hub</h4>
              <p>Bridging technology and policy. Testing, validating, and scaling sanitation innovations for India.</p>
            </div>
          </div>

          <div className={styles.isoBox}>
            <div className={styles.isoContent}>
              <h4>ISO 30500: The Global Standard</h4>
              <p>
                <strong>Non-sewered sanitation systems</strong> — Prefabricated integrated treatment units that
                collect, convey, and fully treat waste on-site for safe reuse or disposal.
                Published October 2018, updated July 2025. ReFlow&apos;s B-CRT is fully certified.
              </p>
            </div>
            <div className={styles.isoBadge}>
              <span>ISO</span>
              <span>30500</span>
              <span>Certified</span>
            </div>
          </div>
        </div>

        {/* Partner Network & Ecosystem */}
        <div className={styles.ecosystemSection}>
          <h3 className={styles.ecosystemTitle}>Our Partner Network</h3>
          <p className={styles.ecosystemSubtitle}>
            Through LooCafe, ReFlow is connected to a powerful network of partners driving
            sanitation innovation. Our R&D is inspired by this ecosystem—and the
            <strong> $148 billion</strong> opportunity in India&apos;s Sanitation Economy by 2030.
          </p>

          <div className={styles.ecosystemGrid}>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>🏛️</div>
              <h4>T-Works</h4>
              <span className={styles.ecosystemTag}>Partner</span>
              <p>
                India&apos;s largest prototyping center. Telangana&apos;s innovation hub where
                hardware startups build and test products at scale.
              </p>
            </div>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>🎓</div>
              <h4>ASCI</h4>
              <span className={styles.ecosystemTag}>Partner</span>
              <p>
                Administrative Staff College of India—developing policy frameworks and
                supporting reinvented toilet adoption across Indian cities.
              </p>
            </div>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>🔬</div>
              <h4>WASH Innovation Hub</h4>
              <span className={styles.ecosystemTag}>Partner</span>
              <p>
                Platform at ASCI with GIZ and Telangana Government promoting climate-resilient
                WASH solutions. Supporting SDG 6 & SDG 11.
              </p>
            </div>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>💡</div>
              <h4>Gates Foundation</h4>
              <span className={styles.ecosystemTag}>R&D Origin</span>
              <p>
                The Reinvent the Toilet Challenge created B-CRT technology. $200M+ invested
                since 2011, $370M committed through 2026.
              </p>
            </div>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>♻️</div>
              <h4>Toilet Board Coalition</h4>
              <span className={styles.ecosystemTag}>Ecosystem</span>
              <p>
                Pioneering the Sanitation Economy concept—111 SMEs graduated, $40M unlocked,
                5.7M people impacted daily globally.
              </p>
            </div>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>🌍</div>
              <h4>SuSanA</h4>
              <span className={styles.ecosystemTag}>Ecosystem</span>
              <p>
                Sustainable Sanitation Alliance—global network since 2007 advancing
                SDG 6. India Chapter established 2016.
              </p>
            </div>
          </div>

          <div className={styles.marketOpportunity}>
            <div className={styles.marketStat}>
              <span className={styles.marketNumber}>$148B</span>
              <span className={styles.marketLabel}>India&apos;s Sanitation Economy by 2030</span>
            </div>
            <div className={styles.marketDivider}></div>
            <div className={styles.marketStat}>
              <span className={styles.marketNumber}>567,000+</span>
              <span className={styles.marketLabel}>Villages at ODF+ Status (Nov 2025)</span>
            </div>
            <div className={styles.marketDivider}></div>
            <div className={styles.marketStat}>
              <span className={styles.marketNumber}>300,000</span>
              <span className={styles.marketLabel}>Fewer Diarrheal Deaths Since 2014</span>
            </div>
          </div>
        </div>

        {/* Decision CTA */}
        <div className={styles.decisionCta}>
          <div className={styles.decisionContent}>
            <h3>Why Partner Now?</h3>
            <p>
              Policy is moving faster than infrastructure. <strong>Be compliant before mandates hit.</strong>
            </p>
            <ul className={styles.decisionList}>
              <li>ODF++ certification without sewerage dependency</li>
              <li>Qualify as &quot;Aspirational Toilet&quot; with 40% VGF</li>
              <li>Meet AMRUT 2.0 water reuse targets</li>
              <li>Access technology backed by $200M+ R&D</li>
              <li>Serve locations where sewers will never reach</li>
              <li>Join the working group shaping India&apos;s sanitation future</li>
            </ul>
          </div>
          <div className={styles.decisionActions}>
            <Link href="https://calendar.app.google/5pRiSHEjP851jiNQ7" className={styles.primaryButton}>
              Schedule a Discussion
            </Link>
            <Link href="/government-framework" className={styles.secondaryButton}>
              View Policy Framework
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
