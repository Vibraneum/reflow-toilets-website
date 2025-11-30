import type { Metadata } from 'next'
import styles from '../tos/page.module.css'

export const metadata: Metadata = {
  title: 'Press Kit - ReFlow Toilets',
  description: 'ReFlow Toilets Media Kit - Logos, brand assets, company information, and press resources',
}

export default function PressKitPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Press Kit</h1>
        <p style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Official brand assets, logos, and media resources
        </p>

        <div className={styles.content}>
          {/* Quick Facts */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Company Quick Facts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#666', fontSize: '0.875rem', margin: 0 }}>Parent Company</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.25rem', margin: '0.5rem 0 0' }}>IRISE TOILETS PRIVATE LIMITED</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#666', fontSize: '0.875rem', margin: 0 }}>Headquarters</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.25rem', margin: '0.5rem 0 0' }}>Hyderabad, India</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#666', fontSize: '0.875rem', margin: 0 }}>Technology</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.25rem', margin: '0.5rem 0 0' }}>B-CRT</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#666', fontSize: '0.875rem', margin: 0 }}>Part of</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.25rem', margin: '0.5rem 0 0' }}>Ixora Group</p>
              </div>
            </div>
          </section>

          {/* About */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About ReFlow Toilets</h2>
            <p className={styles.text}>
              ReFlow Toilets provides revolutionary B-CRT (Bio-Circular Resource Technology) sanitation solutions for
              districts, municipalities, and government bodies across India. Our technology transforms public sanitation
              through IoT-enabled smart toilets that recycle water, generate clean energy, and operate sustainably
              with minimal environmental impact.
            </p>
            <p className={styles.text}>
              Developed in partnership with the Bill & Melinda Gates Foundation, B-CRT technology represents the future
              of public sanitation infrastructure, offering zero-discharge systems that convert waste into resources
              while providing dignified sanitation access to communities.
            </p>
          </section>

          {/* Logos */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Logos & Brand Assets</h2>
            <p className={styles.text}>
              Download official ReFlow Toilets logos for press and media use.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <img src="/reflow-toilets-logo.png" alt="ReFlow Toilets Logo" style={{ maxHeight: '60px', width: 'auto' }} />
                </div>
                <p style={{ fontWeight: 600, margin: '0 0 0.5rem' }}>Primary Logo</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: '0 0 1rem' }}>Full color logo for light backgrounds</p>
                <a href="/reflow-toilets-logo.png" download style={{ color: '#0D47A1', fontWeight: 500, textDecoration: 'none' }}>
                  Download PNG
                </a>
              </div>

              <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#0D47A1', padding: '2rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <img src="/reflow-toilets-logo.png" alt="ReFlow Toilets Logo on Dark" style={{ maxHeight: '60px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                </div>
                <p style={{ fontWeight: 600, margin: '0 0 0.5rem' }}>Logo on Dark</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: '0 0 1rem' }}>For use on dark backgrounds</p>
                <a href="/reflow-toilets-logo.png" download style={{ color: '#0D47A1', fontWeight: 500, textDecoration: 'none' }}>
                  Download PNG
                </a>
              </div>
            </div>
          </section>

          {/* Brand Colors */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Brand Colors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <div style={{ backgroundColor: '#0D47A1', aspectRatio: '1', borderRadius: '8px', marginBottom: '0.5rem' }}></div>
                <p style={{ fontWeight: 600, margin: 0 }}>Primary Blue</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>#0D47A1</p>
              </div>
              <div>
                <div style={{ backgroundColor: '#1565C0', aspectRatio: '1', borderRadius: '8px', marginBottom: '0.5rem' }}></div>
                <p style={{ fontWeight: 600, margin: 0 }}>Light Blue</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>#1565C0</p>
              </div>
              <div>
                <div style={{ backgroundColor: '#4CAF50', aspectRatio: '1', borderRadius: '8px', marginBottom: '0.5rem' }}></div>
                <p style={{ fontWeight: 600, margin: 0 }}>Accent Green</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>#4CAF50</p>
              </div>
              <div>
                <div style={{ backgroundColor: '#212121', aspectRatio: '1', borderRadius: '8px', marginBottom: '0.5rem' }}></div>
                <p style={{ fontWeight: 600, margin: 0 }}>Text Dark</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>#212121</p>
              </div>
            </div>
          </section>

          {/* Key Technology */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>B-CRT Technology Highlights</h2>
            <p className={styles.text}>
              Key talking points for media coverage:
            </p>
            <p className={styles.text}>
              • <strong>Zero Discharge:</strong> Complete onsite treatment with no sewage output<br />
              • <strong>Water Recycling:</strong> Up to 90% water recovery and reuse<br />
              • <strong>Energy Positive:</strong> Solar-powered with biogas generation<br />
              • <strong>IoT Enabled:</strong> Real-time monitoring and predictive maintenance<br />
              • <strong>Rapid Deployment:</strong> Prefabricated units ready in weeks, not months<br />
              • <strong>Gates Foundation Partnership:</strong> Developed with support from the Bill & Melinda Gates Foundation
            </p>
          </section>

          {/* Leadership */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Leadership</h2>
            <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: '#0D47A1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>AN</span>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', fontSize: '1.125rem', margin: '0 0 0.25rem' }}>Abhishek Nath</p>
                <p style={{ color: '#0D47A1', fontWeight: 500, margin: '0 0 0.5rem' }}>Founder & CEO</p>
                <p style={{ color: '#666', margin: 0, fontSize: '0.875rem' }}>
                  Founder of ReFlow Toilets and CEO of Ixora Group. Pioneer in smart sanitation technology with
                  recognition from the Bill & Melinda Gates Foundation for innovation in public health infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Brand Guidelines */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Brand Usage Guidelines</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
              <div>
                <p style={{ color: '#4CAF50', fontWeight: 600, marginBottom: '0.5rem' }}>✓ Do</p>
                <p className={styles.text}>
                  • Use official logos from this press kit<br />
                  • Maintain clear space around the logo<br />
                  • Use approved brand colors<br />
                  • Link to reflowtoilets.com when using our assets<br />
                  • Credit ReFlow Toilets in publications
                </p>
              </div>
              <div>
                <p style={{ color: '#E53935', fontWeight: 600, marginBottom: '0.5rem' }}>✗ Don't</p>
                <p className={styles.text}>
                  • Modify or distort the logo<br />
                  • Change logo colors<br />
                  • Add effects or shadows to the logo<br />
                  • Use the logo to imply endorsement<br />
                  • Use outdated versions of the logo
                </p>
              </div>
            </div>
          </section>

          {/* Media Contact */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Media Contact</h2>
            <p className={styles.text}>
              For press inquiries, interviews, or additional materials:
            </p>
            <div style={{ backgroundColor: '#E3F2FD', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <p style={{ margin: '0 0 0.5rem' }}>
                <strong>Press Inquiries</strong><br />
                IRISE TOILETS PRIVATE LIMITED
              </p>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong> hello@reflowtoilets.com<br />
                <strong>Subject:</strong> Press Inquiry
              </p>
            </div>
          </section>

          <p className={styles.lastUpdated}>Last updated: November 2025</p>
        </div>
      </div>
    </div>
  )
}
