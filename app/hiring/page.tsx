import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Careers | ReFlow Toilets',
  description: 'Join ReFlow Toilets and the Ixora Group family. Work on innovative public sanitation solutions with global industry leaders.',
  openGraph: {
    title: 'Careers - ReFlow Toilets',
    description: 'Join ReFlow Toilets - Careers and job opportunities in innovative public sanitation',
    images: ['/images/hero/Hero image.png'],
  },
}

export default function HiringPage() {
  const principles = [
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756973306/Untitled_design_4_jjin3g.png",
      alt: "Secure icon",
      highlight: "Secure",
      text: "our customers",
      colorClass: styles.principleRed
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046248/Untitled_design_5_cssqqx.png",
      alt: "Honor icon",
      highlight: "Honor",
      text: "our differences",
      colorClass: styles.principleAmber
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046246/Untitled_design_6_wpi8xd.png",
      alt: "Innovate icon",
      highlight: "Innovate",
      text: "for the future",
      colorClass: styles.principleYellow
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046245/Untitled_design_7_ndu10o.png",
      alt: "Execute icon",
      highlight: "Execute",
      text: "with quality & velocity",
      colorClass: styles.principleBlue
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046241/Untitled_design_8_eifcm2.png",
      alt: "Lead icon",
      highlight: "Lead",
      text: "with courage & accountability",
      colorClass: styles.principlePurple
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046240/Untitled_design_10_ogkb66.png",
      alt: "Debate icon",
      highlight: "Debate,",
      text: "decide & do",
      colorClass: styles.principleAmber
    }
  ];

  const lifeAtImages = [
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757471182/WhatsApp_Image_2025-09-10_at_07.55.44_5f8dee46_d5slid.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757471179/WhatsApp_Image_2025-09-10_at_07.54.12_34244327_chypov.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c98877d5849cea38e1f5e_WhatsApp_Image_2025-01-31_at_14.49.22_8904bd82_eves3l.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c962144f46e55f7662306_WhatsApp_Image_2025-01-31_at_14.49.22_0cc15c36_hgurm6.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756962910/WhatsApp_Image_2025-09-03_at_18.01.51_fe97c3ea_po4wen.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470718/66ed21480620ecbfa6f7b007_WhatsApp_Image_2024-09-20_at_12.44.22_mxvcjh.jpg"
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.dotPatternLeft}></div>
          <div className={styles.dotPatternRight}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Careers at ReFlow Toilets</h1>
            <p className={styles.subtitle}>
              Part of the Ixora Group Ecosystem
            </p>
            <p className={styles.heroText}>
              Ready to join our mission to make sanitation sustainable, accessible, and dignified?
              Be the difference today.
            </p>
            <a href="https://airtable.com/apphtrbZeJVYFyPnS/pagE4iZDtIWWzea50/form" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitLayout}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/hero/Interior.png"
                alt="ReFlow Team"
                width={600}
                height={400}
                className={styles.roundedImage}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>We're looking for the best people to join our team</h2>
              <p className={styles.bodyText}>
                Our mission is to revolutionize public sanitation infrastructure. We are searching for individuals whose values reflect the Trust, Respect, Empowerment and Unity (TRUE) values of Ixora Group.
              </p>
              <p className={styles.bodyText}>
                Whether you are an engineer, a designer, or an operations expert, your work at ReFlow will have a direct, visible impact on communities across India.
              </p>
              <div style={{ marginTop: '30px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#2c5530' }}>Current Openings</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                  <li style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.1rem', color: '#1f2937' }}>Operations Manager</strong>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Hyderabad • Full-time</span>
                    </div>
                    <span style={{ color: '#D4B258', fontWeight: '600' }}>&rarr;</span>
                  </li>
                  <li style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.1rem', color: '#1f2937' }}>IoT Systems Engineer</strong>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Hyderabad • Full-time</span>
                    </div>
                    <span style={{ color: '#D4B258', fontWeight: '600' }}>&rarr;</span>
                  </li>
                  <li style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.1rem', color: '#1f2937' }}>Community Outreach Specialist</strong>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Remote / Hybrid • Contract</span>
                    </div>
                    <span style={{ color: '#D4B258', fontWeight: '600' }}>&rarr;</span>
                  </li>
                </ul>
                <a href="https://airtable.com/apphtrbZeJVYFyPnS/pagE4iZDtIWWzea50/form" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                  View All Roles & Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <div className={styles.centerContent}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p className={styles.bodyText}>
              A safe, efficient, and sustainable world powered by ReFlow Toilets, Ixora Group, and our partners.
            </p>
            <div className={styles.videoContainer}>
              <video
                className={styles.video}
                src="https://res.cloudinary.com/dehglnwgz/video/upload/v1762338544/ixora_office_1_xdscoi.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>Our principles at work</h2>
          <p className={`${styles.bodyText} ${styles.textCenter} ${styles.maxWidth}`}>
            Our principles are ingrained in everything we do and every decision we make.
          </p>
          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => (
              <div key={index} className={styles.principleCard}>
                <img src={principle.icon} alt={principle.alt} className={styles.principleIcon} />
                <p className={styles.principleText}>
                  <span className={`${styles.principleHighlight} ${principle.colorClass}`}>
                    {principle.highlight}
                  </span> {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className={`${styles.section} ${styles.bgGold}`}>
        <div className={styles.container}>
          <div className={styles.growthGrid}>
            <div className={styles.growthHeader}>
              <h3 className={styles.growthTitle}>Ownership of your success</h3>
            </div>
            <div className={styles.growthItem}>
              <h4>Grow</h4>
              <p>With programs and ongoing support, we help our people build a fulfilling career.</p>
            </div>
            <div className={styles.growthItem}>
              <h4>Thrive</h4>
              <p>Enjoy a collaborative culture and benefits to support mental, physical and financial health.</p>
            </div>
            <div className={styles.growthItem}>
              <h4>Belong</h4>
              <p>We believe in a culture where differences are valued and authenticity thrives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at ReFlow Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>Be part of #LifeAtIxoraGroup</h2>
          <div className={styles.galleryGrid}>
            {lifeAtImages.map((src, index) => (
              <div key={index} className={styles.galleryItem}>
                <img src={src} alt={`Life at Ixora Group ${index + 1}`} className={styles.galleryImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className={`${styles.section} ${styles.bgDark} ${styles.textWhite}`}>
        <div className={styles.container}>
          <div className={styles.centerContent}>
            <h2 className={styles.sectionTitle}>Ready to make an impact?</h2>
            <p className={styles.bodyText}>
              Join us in building the future of sanitation infrastructure.
            </p>
            <div className={styles.ctaButtons}>
              <a href="https://airtable.com/apphtrbZeJVYFyPnS/pagE4iZDtIWWzea50/form" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                Submit Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
