import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Innovation - ReFlow Toilets',
  description: 'Revolutionary sanitation infrastructure. Solar-powered. Zero discharge. ISO30500 compliant.',
  keywords: ['toilet innovation', 'WASH innovation', 'Gates Foundation', 'reinvented toilet', 'sanitation innovation'],
  openGraph: {
    title: 'Innovation - ReFlow Toilets',
    description: 'Revolutionary sanitation infrastructure',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/v1763732615/reflow-assets/units/reflow-mini.jpg'],
  },
}

export default function InnovationPage() {
  return (
    <div className={styles.page}>
      {/* Clean Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Reinventing public sanitation.</h1>
            <p className={styles.heroText}>
              Solar-powered, zero discharge, ISO30500 compliant toilets transforming cities across India.
            </p>
            <div className={styles.heroButtons}>
              <a href="/contact" className={styles.primaryButton}>Partner with us</a>
              <a href="#sustainability" className={styles.secondaryButton}>Explore the model</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Model - The Primary Innovation */}
      <section id="sustainability" className={styles.sustainability}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>The Primary Innovation</span>
            <h2 className={styles.sectionTitle}>The Sustainability Model</h2>
            <p className={styles.sectionIntro}>
              A majority of WASH startups fail because of a lack of funding or infrastructure.
              ReFlow works because it's self-sustainable. One unit. Multiple Sustainability Streams.
            </p>
          </div>

          <div className={styles.sustainabilityGrid}>
            <div className={styles.susCard}>
              <div className={styles.susIcon}>📱</div>
              <h3 className={styles.susTitle}>Tech & Community</h3>
              <p className={styles.susText}>
                With our patented Facility management toilet tech, we go beyond our units. We maintain ReFlow structures
                and monetize through our digital community and IoT platform.
              </p>
            </div>
            <div className={styles.susCard}>
              <div className={styles.susIcon}>🤝</div>
              <h3 className={styles.susTitle}>The ReFlow Partner</h3>
              <p className={styles.susText}>
                ReFlow collects a partnership fee from district operators running the unit.
                This is a mutual partnership fee depending on deployment scale and location.
              </p>
            </div>
            <div className={styles.susCard}>
              <div className={styles.susIcon}>📢</div>
              <h3 className={styles.susTitle}>Advertisement Panels</h3>
              <p className={styles.susText}>
                All 4 sides, and walls inwards, have advertisement spaces available.
                Legal, commercially available spaces with data for advertisers.
              </p>
            </div>
            <div className={styles.susCard}>
              <div className={styles.susIcon}>🏢</div>
              <h3 className={styles.susTitle}>Brand & Operations</h3>
              <p className={styles.susText}>
                ReFlow units are a branded chain of sustainable public toilets. With years of experience and multiple units,
                we have SOPs, data, and a licensable suite of solutions for districts.
              </p>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className={styles.revenueSection}>
            <h3 className={styles.revenueTitle}>How It Sustains</h3>
            <div className={styles.revenueGrid}>
              <div className={styles.revenueCard}>
                <div className={styles.revenuePercent}>70%</div>
                <div className={styles.revenueLabel}>Café & Kiosk Sales</div>
                <p className={styles.revenueDesc}>Tea, snacks, essentials</p>
              </div>
              <div className={styles.revenueCard}>
                <div className={styles.revenuePercent} style={{ color: '#0071e3' }}>20%</div>
                <div className={styles.revenueLabel}>Advertisement Revenue</div>
                <p className={styles.revenueDesc}>Digital & static displays</p>
              </div>
              <div className={styles.revenueCard}>
                <div className={styles.revenuePercent} style={{ color: '#ff9500' }}>10%</div>
                <div className={styles.revenueLabel}>Value-Added Services</div>
                <p className={styles.revenueDesc}>Mobile charging, WiFi</p>
              </div>
            </div>
            <p className={styles.revenueResult}>
              <strong>Result:</strong> 100% free toilet access for all users, <span style={{ color: '#0071e3' }}>zero burden</span> on government budgets
            </p>
          </div>
        </div>
      </section>

      {/* One Stakeholder */}
      <section className={styles.stakeholder}>
        <div className={styles.container}>
          <div className={styles.stakeholderContent}>
            <h2 className={styles.stakeholderTitle}>One Stakeholder, for everything.</h2>
            <p className={styles.stakeholderText}>
              ReFlow operations manages the vendor who runs the PoS, the maintenance of the unit,
              damages & repairs, user-friendliness for the user (toilet locator app, and community system)
              and also the Private-Public Partnership with districts.
            </p>
            <p className={styles.stakeholderHighlight}>The model is an organism in itself.</p>
          </div>
        </div>
      </section>

      {/* Open API Platform Section */}
      <section className={styles.platformSection}>
        <div className={styles.container}>
          <div className={styles.platformGrid}>
            <div className={styles.platformContent}>
              <span className={styles.badge}>Platform Approach</span>
              <h2 className={styles.platformTitle}>ReFlow as Open API for WASH</h2>
              <p className={styles.platformText}>
                ReFlow isn't just a toilet company — it's a platform that enables partners, vendors, and municipalities to plug into a proven sanitation ecosystem.
              </p>
              <div className={styles.platformSteps}>
                <div className={styles.platformStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Plug & Play Deployment</h4>
                    <p>Pre-fabricated units ready in 3-5 days. No complex construction.</p>
                  </div>
                </div>
                <div className={styles.platformStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4>Integrated Technology Stack</h4>
                    <p>IoT monitoring, payment systems, and analytics built-in.</p>
                  </div>
                </div>
                <div className={styles.platformStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4>Operator Training & Support</h4>
                    <p>Full training program for vendors and maintenance teams.</p>
                  </div>
                </div>
              </div>
              <Link href="/partners" className={styles.platformButton}>Become a Partner</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suite of Units */}
      <section className={styles.units}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Suite of Units</h2>
            <p className={styles.sectionIntro}>
              Simple, transparent pricing that grows with you. 10x10 ft & beyond.
            </p>
          </div>

          <div className={styles.unitGrid}>
            {/* The Mini */}
            <div className={styles.unitCard}>
              <div className={styles.unitImageWrapper}>
                <Image
                  src="/images/units/Mini on footpath reflow.jpg"
                  alt="The Mini"
                  width={400}
                  height={500}
                  className={styles.unitImage}
                />
                <div className={styles.unitBadge}>Super Scalable</div>
              </div>
              <div className={styles.unitContent}>
                <h3 className={styles.unitTitle}>The Mini</h3>
                <p className={styles.unitSubtitle}>"Turning Street Hawkers to Toilet Entrepreneurs"</p>
                <ul className={styles.unitFeatures}>
                  <li>Grassroot level impact</li>
                  <li>Compact Structure: 8x8 ft unit</li>
                  <li>Two side-attached toilets</li>
                  <li>Cost-effective design</li>
                </ul>
                <Link href="/products" className={styles.link}>Read more about the Mini →</Link>
              </div>
            </div>

            {/* The OG */}
            <div className={styles.unitCard}>
              <div className={styles.unitImageWrapper}>
                <Image
                  src="/images/units/reflow dal lake.png"
                  alt="The OG"
                  width={400}
                  height={500}
                  className={styles.unitImage}
                />
                <div className={styles.unitBadge}>Standard</div>
              </div>
              <div className={styles.unitContent}>
                <h3 className={styles.unitTitle}>The OG</h3>
                <p className={styles.unitSubtitle}>A whole shipping container</p>
                <ul className={styles.unitFeatures}>
                  <li>3 toilet units attached</li>
                  <li>Customizable fittings & panelling</li>
                  <li>Integrated advanced technology</li>
                  <li>Check Google Maps for popular units</li>
                </ul>
              </div>
            </div>

            {/* Customizable */}
            <div className={styles.unitCard}>
              <div className={styles.unitImageWrapper}>
                <Image
                  src="/images/units/big unit reflow.png"
                  alt="Customizable"
                  width={400}
                  height={500}
                  className={styles.unitImage}
                />
                <div className={styles.unitBadge}>Custom</div>
              </div>
              <div className={styles.unitContent}>
                <h3 className={styles.unitTitle}>Customizable</h3>
                <p className={styles.unitSubtitle}>Anything to do with toilets</p>
                <ul className={styles.unitFeatures}>
                  <li>Different sizes, shapes and structures</li>
                  <li>Variable low-cost to premium solutions</li>
                  <li>Quick TAT with design & location analysis</li>
                  <li>View portfolio for examples</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suite of WASH Innovation */}
      <section className={styles.wash}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Suite of WASH Innovation</h2>
            <p className={styles.sectionIntro}>
              Toilet of the future. 0 Discharge. Deep-tech enabled.
            </p>
          </div>

          <div className={styles.washGrid}>
            {/* G2RT */}
            <div className={styles.washCard}>
              <div className={styles.washIcon}>🌍</div>
              <h3 className={styles.washTitle}>The G2RT</h3>
              <p className={styles.washDesc}>
                Partnership with the Gates' Foundation, ASCI & Wash Innovation Hub.
                Off-grid, deep-tech enabled innovation sprawled across 6 continents.
              </p>
            </div>

            {/* LooCafe Tech */}
            <div className={styles.washCard}>
              <div className={styles.washIcon}>💻</div>
              <h3 className={styles.washTitle}>LooCafe Tech</h3>
              <p className={styles.washDesc}>
                3 interfaces - user, supervisor & partner with super admin access.
                Community led maintenance & tracking using AI & IoT. Available on Playstore.
              </p>
            </div>

            {/* WASH Startups */}
            <div className={styles.washCard}>
              <div className={styles.washIcon}>🚀</div>
              <h3 className={styles.washTitle}>WASH Startups</h3>
              <p className={styles.washDesc}>
                Over 50+ startups impacted. Sanitation products, basic chat and email support.
                Incubating the next generation of sanitation entrepreneurs.
              </p>
            </div>

            {/* Products */}
            <div className={styles.washCard}>
              <div className={styles.washIcon}>🧪</div>
              <h3 className={styles.washTitle}>Products</h3>
              <p className={styles.washDesc}>
                Chemical products, sanitation machines, equipment, innovative deep cleaning methods,
                and vehicular logistics infrastructure for sanitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Inside & Outside */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureBox}>
              <h3 className={styles.featureBoxTitle}>What's Inside?</h3>
              <p className={styles.featureBoxSubtitle}>Every single feature that could be in a ReFlow unit.</p>
              <ul className={styles.featureList}>
                <li><strong>All round Safety:</strong> Carefully designed structure & tech components.</li>
                <li><strong>Accessibility:</strong> Inclusive restrooms with multifeature interior design.</li>
                <li><strong>Crafted Fittings:</strong> Polished, high quality tiling proving a luxurious effect & durability.</li>
              </ul>
            </div>
            <div className={styles.featureBox}>
              <h3 className={styles.featureBoxTitle}>What's Outside?</h3>
              <p className={styles.featureBoxSubtitle}>Reforming the surroundings.</p>
              <ul className={styles.featureList}>
                <li><strong>Urban Reform:</strong> ReFlow units plug into the urban area.</li>
                <li><strong>Green Lung Spaces:</strong> Adding greenery to the areas around it.</li>
                <li><strong>Beautification:</strong> Fixing the street space and adding aesthetic value.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How does waste management work?</h3>
              <p className={styles.faqAnswer}>
                Our units use advanced bio-digester technology or can be connected to sewage lines depending on the model.
                The B-CRT model recycles water onsite with zero discharge.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>ReFlow is an Open API?</h3>
              <p className={styles.faqAnswer}>
                Yes, our technology stack is designed to integrate with smart city dashboards, allowing municipalities
                to monitor usage, hygiene, and maintenance in real-time.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How are ReFlow units installed?</h3>
              <p className={styles.faqAnswer}>
                Units are pre-fabricated offsite and deployed rapidly. The Mini takes 2-3 days, while larger units
                can be set up in 1-2 weeks.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How does technology work for users?</h3>
              <p className={styles.faqAnswer}>
                Users can locate toilets via our app, view hygiene ratings, and even pay digitally.
                IoT sensors ensure the unit is clean before use.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How much do Units Cost?</h3>
              <p className={styles.faqAnswer}>
                We offer flexible models including Build-Operate-Transfer (BOT) where there is zero upfront cost
                for government bodies. Contact us for specific pricing.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Get a ReFlow unit in your district</h3>
              <p className={styles.faqAnswer}>
                Reach out to our partnership team. We analyze the location and footfall to propose the best solution
                for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to transform your district?</h2>
          <p className={styles.ctaText}>Deploy advanced sanitation infrastructure that works.</p>
          <a href="/contact" className={styles.ctaButton}>Get started</a>
        </div>
      </section>
    </div>
  )
}
