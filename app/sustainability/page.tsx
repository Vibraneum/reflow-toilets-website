'use client';

import styles from '../tos/page.module.css';

export default function SustainabilityPage() {
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
          Pioneering Sustainable Sanitation Technology
        </div>
        <h1>Sustainability Policy</h1>
        <p>Environmental leadership through B-CRT innovation</p>
      </section>

      {/* Impact Stats */}
      <section style={{ background: '#f0fdf4', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className={styles.gridSection} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#059669' }}>95%</div>
              <div style={{ color: '#4b5563' }}>Water Recycled</div>
            </div>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#059669' }}>Zero</div>
              <div style={{ color: '#4b5563' }}>Sewage Discharge</div>
            </div>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#059669' }}>100%</div>
              <div style={{ color: '#4b5563' }}>Waste Processed On-Site</div>
            </div>
            <div className={styles.gridItem} style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#059669' }}>Solar</div>
              <div style={{ color: '#4b5563' }}>Powered Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Our Environmental Mission</h2>
          <p>
            ReFlow Toilets is built on the principle that public sanitation infrastructure should heal,
            not harm, the environment. Our B-CRT (Bio-Circular Resource Technology) represents a paradigm
            shift in how municipalities approach sanitation - transforming waste from a problem into a resource.
          </p>
          <p>
            As a company created by IRISE TOILETS PRIVATE LIMITED, sustainability is our core business,
            not an afterthought. Every ReFlow installation is designed to operate as a closed-loop system,
            minimizing environmental impact while maximizing public health benefits.
          </p>
        </div>

        <div className={styles.section}>
          <h2>B-CRT: Our Sustainability Engine</h2>
          <div className={styles.highlightBox} style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', borderLeftColor: '#059669' }}>
            <h3 style={{ marginTop: 0 }}>Bio-Circular Resource Technology</h3>
            <p>Our proprietary B-CRT system is the heart of ReFlow&apos;s environmental innovation:</p>
            <div className={styles.gridSection} style={{ marginTop: '1rem' }}>
              <div className={styles.gridItem}>
                <h4>Water Recycling</h4>
                <p>95% of water is treated and recycled on-site, dramatically reducing freshwater consumption.</p>
              </div>
              <div className={styles.gridItem}>
                <h4>Biogas Generation</h4>
                <p>Organic waste is converted to biogas, providing clean energy for facility operations.</p>
              </div>
              <div className={styles.gridItem}>
                <h4>Compost Production</h4>
                <p>Solid waste becomes nutrient-rich compost for local agricultural use.</p>
              </div>
              <div className={styles.gridItem}>
                <h4>Zero Discharge</h4>
                <p>No connection to municipal sewage required - true environmental independence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Environmental Commitments</h2>

          <h3>Water Stewardship</h3>
          <ul>
            <li><strong>Water Positive Goal:</strong> Returning more clean water to the environment than we consume</li>
            <li><strong>Advanced Treatment:</strong> Multi-stage filtration and purification systems</li>
            <li><strong>Rainwater Integration:</strong> Harvesting systems at every installation</li>
            <li><strong>Real-time Monitoring:</strong> IoT sensors tracking water quality and usage</li>
          </ul>

          <h3>Energy Efficiency</h3>
          <ul>
            <li><strong>Solar Power:</strong> Photovoltaic systems for energy-independent operations</li>
            <li><strong>Biogas Utilization:</strong> Converting waste to energy on-site</li>
            <li><strong>LED Lighting:</strong> Energy-efficient illumination throughout</li>
            <li><strong>Smart Controls:</strong> Automated systems minimizing energy waste</li>
          </ul>

          <h3>Waste Reduction</h3>
          <ul>
            <li><strong>Circular Economy:</strong> Every output becomes an input for another process</li>
            <li><strong>Zero-to-Landfill:</strong> Complete diversion of waste from landfills</li>
            <li><strong>Local Utilization:</strong> Compost and biogas used within communities</li>
            <li><strong>Modular Design:</strong> Facilities can be relocated, not demolished</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Impact for Districts & Municipalities</h2>
          <p>
            ReFlow installations provide measurable environmental benefits for government partners:
          </p>
          <div className={styles.gridSection}>
            <div className={styles.gridItem}>
              <h4>Reduced Infrastructure Costs</h4>
              <p>No sewage connections means lower infrastructure investment and maintenance.</p>
            </div>
            <div className={styles.gridItem}>
              <h4>Water Conservation</h4>
              <p>Significant reduction in municipal water consumption for public facilities.</p>
            </div>
            <div className={styles.gridItem}>
              <h4>Clean Energy Production</h4>
              <p>Biogas offsets energy costs and reduces carbon emissions.</p>
            </div>
            <div className={styles.gridItem}>
              <h4>Agricultural Support</h4>
              <p>High-quality compost supports local farmers and green spaces.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Green Construction & Materials</h2>
          <ul>
            <li>Sustainable and recycled building materials wherever possible</li>
            <li>Modular design for minimal site disruption during installation</li>
            <li>Native landscaping that supports local biodiversity</li>
            <li>Non-toxic, eco-friendly maintenance products</li>
            <li>Long-lifespan components reducing replacement waste</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Transparency & Reporting</h2>
          <p>
            We believe in transparent environmental reporting. Our IoT-enabled facilities provide
            real-time data on:
          </p>
          <ul>
            <li>Water consumption and recycling rates</li>
            <li>Energy generation and usage</li>
            <li>Waste processing volumes</li>
            <li>Carbon footprint metrics</li>
          </ul>
          <p>
            District partners receive regular sustainability reports demonstrating environmental
            impact and ROI.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Future Goals</h2>
          <ul>
            <li><strong>2025:</strong> 100% solar-powered operations across all installations</li>
            <li><strong>2026:</strong> Water-positive status - net contributor to water resources</li>
            <li><strong>2027:</strong> Carbon-negative operations through biogas and efficiency gains</li>
            <li><strong>2030:</strong> Model for national sanitation sustainability standards</li>
          </ul>
          <p className={styles.lastUpdated}>Last Updated: November 2025</p>
        </div>

        <div className={styles.footerLinks}>
          <p>Related Documents:</p>
          <a href="/code-of-conduct">Code of Conduct</a>
          <span className={styles.separator}>|</span>
          <a href="/privacy">Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/press-kit">Press Kit</a>
        </div>
      </section>
    </div>
  );
}
