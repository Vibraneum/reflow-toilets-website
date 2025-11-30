'use client';

import styles from '../tos/page.module.css';

export default function TrustCenterPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.2)',
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          fontSize: '0.875rem',
          marginBottom: '1rem'
        }}>
          Enterprise-Grade Security for Smart Sanitation
        </div>
        <h1>Trust & Security Center</h1>
        <p>Protecting municipal infrastructure and citizen data</p>
      </section>

      {/* Trust Pillars */}
      <section style={{ background: '#f0fdf4', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className={styles.gridSection} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🛡️</div>
              <h3 style={{ color: '#0d9488', marginBottom: '0.5rem' }}>IoT Security</h3>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', margin: 0 }}>Secure smart infrastructure monitoring and control</p>
            </div>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔒</div>
              <h3 style={{ color: '#0d9488', marginBottom: '0.5rem' }}>Data Protection</h3>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', margin: 0 }}>Government-grade data security standards</p>
            </div>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✓</div>
              <h3 style={{ color: '#0d9488', marginBottom: '0.5rem' }}>Compliance</h3>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', margin: 0 }}>Adherent to Indian data protection regulations</p>
            </div>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📊</div>
              <h3 style={{ color: '#0d9488', marginBottom: '0.5rem' }}>Transparency</h3>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', margin: 0 }}>Clear reporting and accountability to partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Security for Municipal Partners</h2>
          <p>
            ReFlow Toilets operates critical public infrastructure for districts and municipalities across India.
            Our B-CRT (Bio-Circular Resource Technology) facilities are equipped with IoT monitoring systems
            that require robust security to protect both operational data and citizen privacy.
          </p>
          <p>
            We understand that partnering with government entities requires meeting stringent security
            and compliance standards. Our infrastructure is built from the ground up with security as
            a foundational principle.
          </p>
        </div>

        <div className={styles.section}>
          <h2>IoT Infrastructure Security</h2>
          <div className={styles.highlightBox} style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', borderLeftColor: '#0d9488' }}>
            <h3 style={{ marginTop: 0 }}>B-CRT Smart Monitoring</h3>
            <p>Every ReFlow installation includes IoT sensors for real-time monitoring. Our security measures include:</p>
            <div className={styles.gridSection} style={{ marginTop: '1rem' }}>
              <div className={styles.gridItem}>
                <h4>Device Security</h4>
                <ul style={{ fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
                  <li>Encrypted device communication (TLS 1.3)</li>
                  <li>Secure boot and firmware validation</li>
                  <li>Hardware security modules for key storage</li>
                  <li>Tamper detection and alerting</li>
                </ul>
              </div>
              <div className={styles.gridItem}>
                <h4>Network Security</h4>
                <ul style={{ fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
                  <li>Isolated network segments for IoT devices</li>
                  <li>VPN tunnels for remote management</li>
                  <li>Intrusion detection systems</li>
                  <li>Regular vulnerability scanning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Data Protection Standards</h2>
          <ul>
            <li><strong>Encryption at Rest:</strong> AES-256 encryption for all stored data</li>
            <li><strong>Encryption in Transit:</strong> TLS 1.3 for all data transmission</li>
            <li><strong>Access Control:</strong> Role-based access with MFA for all administrative functions</li>
            <li><strong>Data Isolation:</strong> Each municipal partner&apos;s data is logically separated</li>
            <li><strong>Audit Logging:</strong> Comprehensive logging of all data access and system changes</li>
            <li><strong>Backup & Recovery:</strong> Automated backups with tested disaster recovery procedures</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Municipal Partner Guarantees</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ background: '#f0fdfa', padding: '1.25rem', borderRadius: '8px', borderTop: '3px solid #0d9488' }}>
              <h4 style={{ color: '#0d9488', margin: '0 0 0.5rem' }}>99.9% Uptime SLA</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#4b5563' }}>Guaranteed availability with financial backing for critical infrastructure.</p>
            </div>
            <div style={{ background: '#f0fdfa', padding: '1.25rem', borderRadius: '8px', borderTop: '3px solid #0d9488' }}>
              <h4 style={{ color: '#0d9488', margin: '0 0 0.5rem' }}>24/7 Security Monitoring</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#4b5563' }}>Round-the-clock security operations center monitoring all facilities.</p>
            </div>
            <div style={{ background: '#f0fdfa', padding: '1.25rem', borderRadius: '8px', borderTop: '3px solid #0d9488' }}>
              <h4 style={{ color: '#0d9488', margin: '0 0 0.5rem' }}>Incident Response</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#4b5563' }}>Dedicated incident response team with 1-hour response time guarantee.</p>
            </div>
            <div style={{ background: '#f0fdfa', padding: '1.25rem', borderRadius: '8px', borderTop: '3px solid #0d9488' }}>
              <h4 style={{ color: '#0d9488', margin: '0 0 0.5rem' }}>Compliance Reports</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#4b5563' }}>Regular compliance and security audit reports provided to partners.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Citizen Privacy</h2>
          <p>We take the privacy of citizens using our facilities seriously:</p>
          <ul>
            <li>No personal identification required to use facilities</li>
            <li>No cameras or recording devices inside toilet facilities</li>
            <li>Usage data anonymized and aggregated for operational purposes only</li>
            <li>No selling or sharing of any user-related data</li>
            <li>Transparent data practices published in our Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Compliance & Certifications</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#0d9488' }}>
              ✓ ISO 27001 Aligned
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#0d9488' }}>
              ✓ Indian IT Act Compliant
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#0d9488' }}>
              ✓ GDPR Principles
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#0d9488' }}>
              ✓ Government Standards
            </span>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Part of Ixora Group</h2>
          <p>
            ReFlow Toilets is a product of IRISE TOILETS PRIVATE LIMITED, part of the Ixora Group ecosystem.
            We leverage group-wide security expertise including:
          </p>
          <ul>
            <li><strong>LooCafe:</strong> Gates Foundation-backed smart toilet network security</li>
            <li><strong>Ixora Security Services:</strong> Physical security expertise for critical infrastructure</li>
            <li><strong>Shared SOC:</strong> Centralized security operations and threat intelligence</li>
          </ul>
        </div>

        <div className={styles.section} style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #d97706' }}>
          <h2 style={{ color: '#d97706', marginTop: 0 }}>Report Security Concerns</h2>
          <p>For security vulnerabilities or concerns about our infrastructure:</p>
          <p><strong>Security Team:</strong> <a href="mailto:security@reflowtoilets.com" style={{ color: '#d97706' }}>security@reflowtoilets.com</a></p>
          <p><strong>General Inquiries:</strong> <a href="mailto:info@reflowtoilets.com" style={{ color: '#d97706' }}>info@reflowtoilets.com</a></p>
          <p style={{ margin: 0 }}>We practice responsible disclosure and will acknowledge all reports within 24 hours.</p>
        </div>

        <p className={styles.lastUpdated}>Last Updated: November 2025</p>

        <div className={styles.footerLinks}>
          <p>Related Documents:</p>
          <a href="/privacy">Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/gdpr">GDPR Rights</a>
          <span className={styles.separator}>|</span>
          <a href="/code-of-conduct">Code of Conduct</a>
        </div>
      </section>
    </div>
  );
}
