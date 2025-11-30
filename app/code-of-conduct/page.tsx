'use client';

import styles from '../tos/page.module.css';

export default function CodeOfConductPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Code of Conduct</h1>
        <p>Our commitment to ethical business practices and integrity</p>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Our Commitment</h2>
          <p>
            At ReFlow Toilets, operated by IRISE TOILETS PRIVATE LIMITED, we are committed to conducting
            business with the highest standards of ethics, integrity, and professionalism. This Code of
            Conduct outlines the principles and standards that guide our behavior and decision-making
            across all operations.
          </p>
          <p>
            As innovators in sustainable sanitation technology, we hold ourselves to exceptional standards
            that reflect our mission to improve public health and environmental sustainability.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Core Values</h2>
          <div className={styles.gridSection}>
            <div className={styles.gridItem}>
              <h3>Integrity</h3>
              <p>We act honestly and transparently in all business dealings with government bodies, partners, and communities.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Sustainability</h3>
              <p>Environmental stewardship is at the core of everything we do - from B-CRT technology to operations.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Innovation</h3>
              <p>We continuously innovate to create better sanitation solutions that benefit society and the environment.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Respect</h3>
              <p>We treat all stakeholders with dignity and fairness, respecting diverse communities we serve.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Excellence</h3>
              <p>We strive for excellence in product quality, service delivery, and community impact.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Accountability</h3>
              <p>We take responsibility for our actions and their impact on communities and the environment.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Workplace Standards</h2>
          <h3>Equal Opportunity</h3>
          <p>
            We provide equal employment opportunities regardless of race, color, religion, gender, sexual
            orientation, national origin, age, disability, or any other protected characteristic.
          </p>

          <h3>Safe Work Environment</h3>
          <p>We maintain safe and healthy workplaces for all employees, including:</p>
          <ul>
            <li>Compliance with occupational health and safety regulations</li>
            <li>Regular safety training programs</li>
            <li>Zero tolerance for workplace violence</li>
            <li>Proper maintenance of equipment and facilities</li>
          </ul>

          <h3>Anti-Harassment Policy</h3>
          <p>
            We maintain a zero-tolerance policy for harassment, bullying, or intimidation. All employees
            have the right to work in an environment free from discrimination and harassment.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Business Ethics</h2>
          <h3>Government Relations</h3>
          <p>
            As a B2G (Business-to-Government) focused company working with district and municipal authorities,
            we maintain the highest ethical standards in all government interactions:
          </p>
          <ul>
            <li>Transparent and fair bidding processes</li>
            <li>No bribes, kickbacks, or improper payments</li>
            <li>Honest representation of capabilities and pricing</li>
            <li>Compliance with all procurement regulations</li>
          </ul>

          <h3>Anti-Corruption</h3>
          <p>We prohibit all forms of corruption and bribery, including:</p>
          <ul>
            <li>Payments to government officials</li>
            <li>Kickbacks to decision-makers</li>
            <li>Facilitation payments</li>
            <li>Gifts that could influence business decisions</li>
          </ul>

          <h3>Fair Competition</h3>
          <p>
            We compete fairly in the marketplace and comply with all applicable competition laws.
            We do not engage in anticompetitive practices.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Environmental & Social Responsibility</h2>
          <p>
            As pioneers in sustainable sanitation, environmental responsibility is fundamental to our business:
          </p>
          <ul>
            <li><strong>B-CRT Technology:</strong> Our Bio-Circular Resource Technology minimizes environmental impact</li>
            <li><strong>Water Conservation:</strong> Our solutions reduce water consumption in public sanitation</li>
            <li><strong>Waste Management:</strong> Responsible processing and recycling of sanitation waste</li>
            <li><strong>Community Health:</strong> Improving public health through better sanitation infrastructure</li>
            <li><strong>Local Employment:</strong> Creating jobs in communities where we operate</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Compliance & Reporting</h2>
          <h3>Legal Compliance</h3>
          <p>
            We comply with all applicable laws, regulations, and industry standards in every jurisdiction
            where we operate.
          </p>

          <h3>Reporting Violations</h3>
          <p>If you witness or become aware of any violation of this Code, please report it:</p>
          <div className={styles.contactBox}>
            <p><strong>Email:</strong> <a href="mailto:ethics@reflowtoilets.com">ethics@reflowtoilets.com</a></p>
            <p><strong>Alternative:</strong> <a href="mailto:info@reflowtoilets.com">info@reflowtoilets.com</a></p>
            <p>All reports are treated confidentially. We prohibit retaliation against anyone who reports concerns in good faith.</p>
          </div>

          <h3>Consequences</h3>
          <p>
            Violations may result in disciplinary action, termination, or legal consequences depending
            on severity.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.lastUpdated}>Last Updated: November 2025</p>
        </div>

        <div className={styles.footerLinks}>
          <p>Related Documents:</p>
          <a href="/privacy">Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/tos">Terms of Service</a>
          <span className={styles.separator}>|</span>
          <a href="/sustainability">Sustainability Policy</a>
        </div>
      </section>
    </div>
  );
}
