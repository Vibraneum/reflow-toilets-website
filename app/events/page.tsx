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
            {/* 2011 - Gates Foundation Award */}
            <ScrollReveal delay={100}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2011</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🏆</div>
                  <h3 className={styles.timelineTitle}>Gates Foundation Award</h3>
                  <p className={styles.timelineDescription}>
                    ReFlow technology recognized by the Bill & Melinda Gates Foundation for innovation in decentralized sanitation. Received grant funding for prototype development and field testing.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Seattle, Washington, USA</span>
                    <span className={styles.timelineCategory}>Award Ceremony</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2013 - Chinese Academy Partnership */}
            <ScrollReveal delay={150}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2013</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🤝</div>
                  <h3 className={styles.timelineTitle}>Chinese Academy of Engineering Partnership</h3>
                  <p className={styles.timelineDescription}>
                    Strategic partnership established with Chinese Academy of Engineering for technology transfer and collaborative research on bio-circular resource technologies for urban sanitation.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Beijing, China</span>
                    <span className={styles.timelineCategory}>Partnership Signing</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2015 - Hyderabad Pilot Launch */}
            <ScrollReveal delay={200}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2015</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🚀</div>
                  <h3 className={styles.timelineTitle}>Hyderabad Pilot Launch</h3>
                  <p className={styles.timelineDescription}>
                    First commercial deployment at 12 pilot locations across Hyderabad. Integration with LooCafe network begins, testing real-world performance in high-traffic urban environments.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Hyderabad, Telangana, India</span>
                    <span className={styles.timelineCategory}>Pilot Deployment</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2018 - Scale-Up Phase */}
            <ScrollReveal delay={250}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2018</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>📈</div>
                  <h3 className={styles.timelineTitle}>270+ Unit Deployment with Ixora Group</h3>
                  <p className={styles.timelineDescription}>
                    Partnership with Ixora Corporate Services for large-scale deployment. 270+ ReFlow units installed across LooCafe network in Hyderabad, serving millions of users annually with 24/7 operations.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Hyderabad & Surrounding Districts</span>
                    <span className={styles.timelineCategory}>Mass Deployment</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2020 - Government Inspections */}
            <ScrollReveal delay={300}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🏛️</div>
                  <h3 className={styles.timelineTitle}>Government Inspections & Approvals</h3>
                  <p className={styles.timelineDescription}>
                    Comprehensive technical inspections by Telangana State Urban Development Department and Ministry of Housing & Urban Affairs. Units certified for compliance with ISO30500 standards.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Hyderabad, Telangana</span>
                    <span className={styles.timelineCategory}>Certification</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2022 - Navi Mumbai Deployment */}
            <ScrollReveal delay={350}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2022</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🌊</div>
                  <h3 className={styles.timelineTitle}>Navi Mumbai Expansion</h3>
                  <p className={styles.timelineDescription}>
                    First deployment outside Telangana. 25 units installed across Navi Mumbai as part of Smart Cities Mission, demonstrating scalability across different municipal corporations.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Navi Mumbai, Maharashtra</span>
                    <span className={styles.timelineCategory}>Regional Expansion</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2023 - Industry Conferences */}
            <ScrollReveal delay={400}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2023</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🎤</div>
                  <h3 className={styles.timelineTitle}>WASH Summit & Sanitation Conference</h3>
                  <p className={styles.timelineDescription}>
                    Presented at international WASH (Water, Sanitation, Hygiene) conferences in New Delhi and Singapore. Showcased AI-powered management platform and 5-year operational data from Hyderabad deployment.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>New Delhi & Singapore</span>
                    <span className={styles.timelineCategory}>Conference Presentations</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2024 - AI Integration */}
            <ScrollReveal delay={450}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2024</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🤖</div>
                  <h3 className={styles.timelineTitle}>Google Gemini AI Platform Launch</h3>
                  <p className={styles.timelineDescription}>
                    Integration of Google Gemini AI for automated image analysis, damage detection, and predictive maintenance. Platform now manages 270+ units with 60% reduction in supervisory staff requirements.
                  </p>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineLocation}>Platform-wide Deployment</span>
                    <span className={styles.timelineCategory}>Technology Launch</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2025 - Current */}
            <ScrollReveal delay={500}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2025</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>🎯</div>
                  <h3 className={styles.timelineTitle}>District-Wide Expansion Strategy</h3>
                  <p className={styles.timelineDescription}>
                    Active discussions with 12 municipal corporations across India for district-wide deployments. Target: 1,000+ units deployed by 2026 under Swachh Bharat Mission 2.0.
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
                <h3 className={styles.mediaTitle}>Gates Foundation Announces Sanitation Award Winners</h3>
                <p className={styles.mediaExcerpt}>
                  ReFlow technology among 16 global recipients of grants for innovative decentralized sanitation solutions...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>Bill & Melinda Gates Foundation</span>
                  <span className={styles.mediaDate}>August 2011</span>
                </div>
                <a href="https://www.gatesfoundation.org" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                  Read More →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIcon}>📺</div>
                <h3 className={styles.mediaTitle}>Smart Cities Mission: Navi Mumbai Adopts AI-Powered Toilets</h3>
                <p className={styles.mediaExcerpt}>
                  Municipal corporation deploys IoT-enabled sanitation infrastructure with real-time monitoring and predictive maintenance...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>The Times of India</span>
                  <span className={styles.mediaDate}>March 2022</span>
                </div>
                <a href="#" className={styles.mediaLink}>
                  Read More →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIcon}>🎙️</div>
                <h3 className={styles.mediaTitle}>Interview: Revolutionizing Urban Sanitation with B-CRT</h3>
                <p className={styles.mediaExcerpt}>
                  How bio-circular resource technology is transforming public toilet infrastructure in India's tier-1 cities...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>WASH Matters Podcast</span>
                  <span className={styles.mediaDate}>September 2023</span>
                </div>
                <a href="#" className={styles.mediaLink}>
                  Listen Now →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIcon}>📄</div>
                <h3 className={styles.mediaTitle}>Case Study: 270+ Units Managed by AI in Hyderabad</h3>
                <p className={styles.mediaExcerpt}>
                  White paper examining 5-year operational data from LooCafe network, demonstrating 60% cost reduction through automation...
                </p>
                <div className={styles.mediaMeta}>
                  <span className={styles.mediaSource}>Asian Development Bank</span>
                  <span className={styles.mediaDate}>January 2024</span>
                </div>
                <a href="#" className={styles.mediaLink}>
                  Download PDF →
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
