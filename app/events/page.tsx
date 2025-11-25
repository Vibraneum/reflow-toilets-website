import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Events & Meetings - ReFlow in Action',
  description: 'Explore ReFlow Toilets milestones: Gates Foundation Award, Chinese Academy of Engineering partnerships, government inspections, media coverage, and industry conferences.',
  keywords: ['ReFlow events', 'sanitation conferences', 'Gates Foundation Award', 'Chinese Academy of Engineering', 'government inspections', 'media coverage', 'industry events'],
  openGraph: {
    title: 'Events & Meetings - ReFlow in Action | ReFlow Toilets',
    description: 'Explore our journey: awards, partnerships, deployments, and media coverage',
    images: ['/images/events/hero.jpg'],
  },
}

export default function EventsPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <ScrollReveal>
            <div className={styles.badge}>Our Journey</div>
            <h1 className={styles.title}>ReFlow in Action</h1>
            <p className={styles.subtitle}>Events, Meetings &amp; Milestones</p>
            <p className={styles.description}>
              From Gates Foundation recognition to district-wide deployments. Explore the events, partnerships, and milestones that have shaped ReFlow's journey in revolutionizing public sanitation infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Featured: ReFlow Technology Showcase</h2>
            <p className={styles.videoIntro}>
              Watch our comprehensive technology presentation demonstrating the B-CRT system, IoT integration, and real-world deployment insights.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.videoWrapper}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/h1-fxn7dNds"
                  title="ReFlow Toilets Technology Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoIframe}
                />
              </div>
              <div className={styles.videoDetails}>
                <h3 className={styles.videoTitle}>Technology Deep Dive</h3>
                <p className={styles.videoDescription}>
                  Comprehensive overview of ReFlow's B-CRT (Bio-Circular Resource Technology), IoT sensor network, AI-powered management platform, and real-world deployment case studies from 270+ LooCafe locations.
                </p>
                <div className={styles.videoHighlights}>
                  <h4 className={styles.highlightsTitle}>Key Topics Covered:</h4>
                  <ul className={styles.highlightsList}>
                    <li>8-stage water treatment system (B-CRT)</li>
                    <li>4-in-1 management platform demonstration</li>
                    <li>Google Gemini AI integration for operations</li>
                    <li>Real-time IoT sensor monitoring</li>
                    <li>District-wide deployment strategies</li>
                    <li>ROI analysis and cost savings</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Events Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Our Milestones</h2>
            <p className={styles.timelineIntro}>
              A decade of innovation, partnerships, and impact in sustainable sanitation.
            </p>
          </ScrollReveal>

          <div className={styles.timeline}>
            {/* 2018 - LooCafe Founded */}
            <ScrollReveal delay={100}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2018</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🚀</div>
                  <h3 className={styles.timelineTitle}>LooCafe Founded by Abhishek Nath</h3>
                  <p className={styles.timelineDescription}>
                    LooCafe launches in Hyderabad with a revolutionary public toilet model built from recycled shipping containers. Partnership with GHMC under PPP model begins, serving transit hubs with free, clean, and sustainable washrooms.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Hyderabad, Telangana</span>
                    <span className={styles.timelineCategory}>Company Launch</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2019 - CII Innovation Award */}
            <ScrollReveal delay={150}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2019</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🏆</div>
                  <h3 className={styles.timelineTitle}>CII Most Innovative Company Award</h3>
                  <p className={styles.timelineDescription}>
                    LooCafe 1.0 wins CII Most Innovative Company Award for revolutionizing public sanitation in India. Recognition for IoT-based hygiene monitoring, RFID janitor tracking, and UV-coated floors with misting exhaust systems.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Confederation of Indian Industry</span>
                    <span className={styles.timelineCategory}>Award Ceremony</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2020 - British Council & Design Week */}
            <ScrollReveal delay={200}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🎨</div>
                  <h3 className={styles.timelineTitle}>Hyderabad Design Week Partnership</h3>
                  <p className={styles.timelineDescription}>
                    LooCafe partners with British Council and Hyderabad Design Week to showcase innovative sanitation design. Featured in WASH Book of Innovations for bringing technology-driven reforms to public toilet infrastructure.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Hyderabad, Telangana</span>
                    <span className={styles.timelineCategory}>Design Exhibition</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2021 - Scale Expansion */}
            <ScrollReveal delay={250}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2021</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>📈</div>
                  <h3 className={styles.timelineTitle}>270+ Units Across Hyderabad Network</h3>
                  <p className={styles.timelineDescription}>
                    LooCafe network expands to 270+ locations across Hyderabad's bus stations, metro stops, and railway platforms. Integration of live tracking sensors for hygiene, water levels, and automated housekeeper alerts.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Hyderabad Metro Region</span>
                    <span className={styles.timelineCategory}>Network Expansion</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2023 - Multi-State Expansion */}
            <ScrollReveal delay={300}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2023</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🗺️</div>
                  <h3 className={styles.timelineTitle}>Expansion to Jammu & Kashmir, Tamil Nadu</h3>
                  <p className={styles.timelineDescription}>
                    LooCafe expands beyond Telangana to Jammu & Kashmir and Tamil Nadu. Annual revenue reaches ₹21.5 Cr with 533 employees. Target set for 1,000-2,000 units with G2RT technology integration.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Multiple States, India</span>
                    <span className={styles.timelineCategory}>Regional Expansion</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2024 - Gates Foundation G2RT Partnership */}
            <ScrollReveal delay={350}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2024</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🤝</div>
                  <h3 className={styles.timelineTitle}>Gates Foundation G2RT Partnership</h3>
                  <p className={styles.timelineDescription}>
                    LooCafe becomes the Gates Foundation's exclusive partner for public toilets in India. First G2RT (Generation 2 Reinvented Toilet) deployment in scalable public toilet setting announced for 2025. LIXIL named commercial license partner.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Bill & Melinda Gates Foundation</span>
                    <span className={styles.timelineCategory}>Strategic Partnership</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* September 2024 - LooCafe 3.0 Announcement */}
            <ScrollReveal delay={400}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>Sep 2024</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🚀</div>
                  <h3 className={styles.timelineTitle}>LooCafe 3.0 Announced with GHMC & ASCI</h3>
                  <p className={styles.timelineDescription}>
                    GHMC announces LooCafe 3.0 in collaboration with ASCI (Administrative Staff College of India) and Bill & Melinda Gates Foundation. This "one-of-its-kind" model treats wastewater on-site — the foundation for ReFlow B-CRT technology.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Hyderabad, Telangana</span>
                    <span className={styles.timelineCategory}>Product Launch</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2025 - ReFlow District Expansion */}
            <ScrollReveal delay={450}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2025</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🎯</div>
                  <h3 className={styles.timelineTitle}>ReFlow B-CRT District Deployment</h3>
                  <p className={styles.timelineDescription}>
                    ReFlow Toilets launches as district-scale B-CRT technology brand. Active discussions with municipal corporations for ISO 30500 certified zero-discharge deployments under Swachh Bharat Mission 2.0 and AMRUT 2.0.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Pan-India Expansion</span>
                    <span className={styles.timelineCategory}>Ongoing</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Photo Gallery</h2>
            <p className={styles.galleryIntro}>
              Capturing moments from our events, installations, and partnerships.
            </p>
          </ScrollReveal>

          <div className={styles.galleryGrid}>
            <ScrollReveal delay={100}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png"
                    alt="B-CRT unit installation at LooCafe location"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryCaption}>
                  <h4 className={styles.galleryCaptionTitle}>B-CRT Unit Installation</h4>
                  <p className={styles.galleryCaptionText}>Hyderabad Pilot Project • 2015</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/tech/dashboard.png"
                    alt="Operations dashboard demonstration at WASH Summit"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryCaption}>
                  <h4 className={styles.galleryCaptionTitle}>WASH Summit Presentation</h4>
                  <p className={styles.galleryCaptionText}>New Delhi • 2023</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-dashboard2.png"
                    alt="Government inspection of deployed units"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryCaption}>
                  <h4 className={styles.galleryCaptionTitle}>Government Certification Inspection</h4>
                  <p className={styles.galleryCaptionText}>Telangana State • 2020</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-dashboard.png"
                    alt="IoT platform demonstration to municipal corporation"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryCaption}>
                  <h4 className={styles.galleryCaptionTitle}>IoT Platform Demo</h4>
                  <p className={styles.galleryCaptionText}>Navi Mumbai Municipal Corp • 2022</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-app.png"
                    alt="Mobile app training for field operators"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryCaption}>
                  <h4 className={styles.galleryCaptionTitle}>Operator Training Session</h4>
                  <p className={styles.galleryCaptionText}>Ixora Group HQ • 2024</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-toilets/images/tech/reflow-app-2-1.png"
                    alt="Partnership signing with Chinese Academy of Engineering"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryCaption}>
                  <h4 className={styles.galleryCaptionTitle}>Chinese Academy Partnership</h4>
                  <p className={styles.galleryCaptionText}>Beijing, China • 2013</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className={styles.mediaSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Media Coverage</h2>
            <p className={styles.mediaIntro}>
              Press releases, articles, and interviews highlighting ReFlow's impact.
            </p>
          </ScrollReveal>

          <div className={styles.mediaGrid}>
            <ScrollReveal delay={100}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIcon}>📰</div>
                <h3 className={styles.mediaTitle}>LooCafé Makes for a Healthy Alternate to the Stinking Public Toilets</h3>
                <p className={styles.mediaExcerpt}>
                  Only LooCafé and Urban Loo maintain their toilets well in Hyderabad. LooCafé does not charge users as it depends on cafe revenue...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>Deccan Chronicle</span>
                  <span className={styles.mediaDate}>2024</span>
                </div>
                <a href="https://www.deccanchronicle.com/southern-states/telangana/loocaf-makes-for-a-healthy-alternate-to-the-stinking-public-toilets-in-city-1824707" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                  Read More →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIcon}>📺</div>
                <h3 className={styles.mediaTitle}>Hyderabad Startup Loocafe Abhishek Nath GHMC Public Toilet</h3>
                <p className={styles.mediaExcerpt}>
                  How Abhishek Nath is changing India's public toilet scene with IoT-based washrooms, sensors, UV floors, and RFID janitor tracking...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>The Better India</span>
                  <span className={styles.mediaDate}>2021</span>
                </div>
                <a href="https://thebetterindia.com/244124/hyderabad-startup-loocafe-ixora-fm-abhishek-nath-ghmc-public-toilet-innovation-him16/" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                  Read More →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIcon}>🎙️</div>
                <h3 className={styles.mediaTitle}>Loo Cafés Aim to Change Perception of Indian Public Toilets</h3>
                <p className={styles.mediaExcerpt}>
                  In Hyderabad, a LooCafe challenges the poor perception of Indian public toilets with hi-tech technologies and sustainability...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>Scroll.in</span>
                  <span className={styles.mediaDate}>2019</span>
                </div>
                <a href="https://scroll.in/magazine/894556/in-hyderabad-a-loo-cafe-challenges-the-poor-perception-of-indian-public-toilets" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                  Read More →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIcon}>📄</div>
                <h3 className={styles.mediaTitle}>Driving Change: The Impactful Tale of LooCafe in India</h3>
                <p className={styles.mediaExcerpt}>
                  LooCafe founder shares how they are changing India's public toilet scene under Swachh Bharat, Skill India, and women empowerment...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>The CSR Journal</span>
                  <span className={styles.mediaDate}>2024</span>
                </div>
                <a href="https://thecsrjournal.in/loocafe-founder-abhishek-nath-shares-how-they-are-changing-indias-public-toilet-scene/" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                  Read More →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnerships Showcase */}
      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Strategic Partnerships</h2>
            <p className={styles.partnersIntro}>
              Collaborating with leading organizations to scale sustainable sanitation globally.
            </p>
          </ScrollReveal>

          <div className={styles.partnersGrid}>
            <ScrollReveal delay={100}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogoWrapper}>
                  <div className={styles.partnerLogoPlaceholder}>Gates Foundation</div>
                </div>
                <h3 className={styles.partnerName}>Bill &amp; Melinda Gates Foundation</h3>
                <p className={styles.partnerDescription}>
                  Grant recipient (2011) for innovative decentralized sanitation technology. Ongoing collaboration on sustainable urban infrastructure research.
                </p>
                <div className={styles.partnerMeta}>
                  <span className={styles.partnerRole}>Funding Partner</span>
                  <span className={styles.partnerSince}>Since 2011</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogoWrapper}>
                  <div className={styles.partnerLogoPlaceholder}>CAE China</div>
                </div>
                <h3 className={styles.partnerName}>Chinese Academy of Engineering</h3>
                <p className={styles.partnerDescription}>
                  Technology transfer partnership for bio-circular resource technologies. Joint research on advanced water treatment systems for urban applications.
                </p>
                <div className={styles.partnerMeta}>
                  <span className={styles.partnerRole}>Research Partner</span>
                  <span className={styles.partnerSince}>Since 2013</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogoWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dhupieu4x/image/upload/v1732447959/ixora-header-logo.png"
                    alt="Ixora Group"
                    width={120}
                    height={40}
                    className={styles.partnerLogo}
                  />
                </div>
                <h3 className={styles.partnerName}>Ixora Corporate Services</h3>
                <p className={styles.partnerDescription}>
                  Operations partner managing 270+ ReFlow units across LooCafe network. Provides 24/7 facilities management, security integration, and field operations.
                </p>
                <div className={styles.partnerMeta}>
                  <span className={styles.partnerRole}>Operations Partner</span>
                  <span className={styles.partnerSince}>Since 2018</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogoWrapper}>
                  <div className={styles.partnerLogoPlaceholder}>LooCafe</div>
                </div>
                <h3 className={styles.partnerName}>LooCafe (WASH Network)</h3>
                <p className={styles.partnerDescription}>
                  Primary deployment partner with 270+ public toilet locations across Hyderabad. Platform for testing, validation, and continuous improvement of B-CRT technology.
                </p>
                <div className={styles.partnerMeta}>
                  <span className={styles.partnerRole}>Deployment Partner</span>
                  <span className={styles.partnerSince}>Since 2015</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogoWrapper}>
                  <div className={styles.partnerLogoPlaceholder}>Dasra</div>
                </div>
                <h3 className={styles.partnerName}>Dasra (Social Impact Advisor)</h3>
                <p className={styles.partnerDescription}>
                  Strategic advisory for scaling impact across underserved communities. Support for government engagement and policy advocacy in urban sanitation sector.
                </p>
                <div className={styles.partnerMeta}>
                  <span className={styles.partnerRole}>Advisory Partner</span>
                  <span className={styles.partnerSince}>Since 2020</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogoWrapper}>
                  <div className={styles.partnerLogoPlaceholder}>Google Cloud</div>
                </div>
                <h3 className={styles.partnerName}>Google Cloud &amp; Gemini AI</h3>
                <p className={styles.partnerDescription}>
                  Technology partner providing AI infrastructure (Gemini AI) for automated operations management, image analysis, and predictive maintenance across all deployed units.
                </p>
                <div className={styles.partnerMeta}>
                  <span className={styles.partnerRole}>Technology Partner</span>
                  <span className={styles.partnerSince}>Since 2024</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className={styles.upcomingSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Upcoming Events</h2>
            <p className={styles.upcomingIntro}>
              Join us at upcoming conferences, demonstrations, and partnership meetings.
            </p>
          </ScrollReveal>

          <div className={styles.upcomingGrid}>
            <ScrollReveal delay={100}>
              <div className={styles.upcomingCard}>
                <div className={styles.upcomingDate}>
                  <div className={styles.upcomingMonth}>Feb</div>
                  <div className={styles.upcomingDay}>12</div>
                  <div className={styles.upcomingYear}>2025</div>
                </div>
                <div className={styles.upcomingDetails}>
                  <h3 className={styles.upcomingTitle}>Smart Cities Expo India 2025</h3>
                  <p className={styles.upcomingDescription}>
                    Live demonstration of 4-in-1 management platform and B-CRT technology. Technical sessions on AI-powered sanitation infrastructure.
                  </p>
                  <div className={styles.upcomingMeta}>
                    <span className={styles.upcomingLocation}>📍 Pragati Maidan, New Delhi</span>
                    <span className={styles.upcomingType}>Conference & Exhibition</span>
                  </div>
                  <a href="/contact" className={styles.upcomingCTA}>Register Interest →</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className={styles.upcomingCard}>
                <div className={styles.upcomingDate}>
                  <div className={styles.upcomingMonth}>Mar</div>
                  <div className={styles.upcomingDay}>20</div>
                  <div className={styles.upcomingYear}>2025</div>
                </div>
                <div className={styles.upcomingDetails}>
                  <h3 className={styles.upcomingTitle}>Municipal Corporations Meeting</h3>
                  <p className={styles.upcomingDescription}>
                    District-wide deployment planning session with 12 municipal corporations. Review technical specifications, integration requirements, and budget proposals.
                  </p>
                  <div className={styles.upcomingMeta}>
                    <span className={styles.upcomingLocation}>📍 Virtual Event</span>
                    <span className={styles.upcomingType}>Partner Meeting</span>
                  </div>
                  <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" target="_blank" rel="noopener noreferrer" className={styles.upcomingCTA}>
                    Schedule Meeting →
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.upcomingCard}>
                <div className={styles.upcomingDate}>
                  <div className={styles.upcomingMonth}>Apr</div>
                  <div className={styles.upcomingDay}>15</div>
                  <div className={styles.upcomingYear}>2025</div>
                </div>
                <div className={styles.upcomingDetails}>
                  <h3 className={styles.upcomingTitle}>WASH India Conference 2025</h3>
                  <p className={styles.upcomingDescription}>
                    Keynote presentation: "5-Year Case Study - AI-Powered Management of 270+ Sanitation Units". Sharing operational insights and ROI data.
                  </p>
                  <div className={styles.upcomingMeta}>
                    <span className={styles.upcomingLocation}>📍 Bengaluru, Karnataka</span>
                    <span className={styles.upcomingType}>Industry Conference</span>
                  </div>
                  <a href="/contact" className={styles.upcomingCTA}>Register Interest →</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Join us at our next event</h2>
              <p className={styles.ctaText}>
                Schedule a demo, attend a conference, or arrange a site visit to deployed ReFlow units. Experience the technology firsthand and discuss deployment opportunities for your district.
              </p>
              <div className={styles.ctaButtons}>
                <a
                  href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  Schedule a demo
                </a>
                <Link href="/contact" className={styles.ctaButtonSecondary}>
                  Request site visit
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
