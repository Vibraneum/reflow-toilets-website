'use client';

import styles from '../tos/page.module.css';

export default function GDPRPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>GDPR Compliance</h1>
        <p>Your data protection rights under the General Data Protection Regulation</p>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Our Commitment to GDPR</h2>
          <p>
            ReFlow Toilets, operated by IRISE TOILETS PRIVATE LIMITED, is committed to protecting the privacy
            and security of personal data. Although we are primarily based in India, we respect the rights of
            all individuals, including those in the European Economic Area (EEA), and comply with the principles
            of the General Data Protection Regulation (GDPR) for any personal data we process.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Data Controller</h2>
          <p>For the purposes of GDPR, the data controller is:</p>
          <div className={styles.highlightBox}>
            <strong>IRISE TOILETS PRIVATE LIMITED</strong><br />
            Hyderabad, Telangana, India<br />
            Email: <a href="mailto:info@reflowtoilets.com">info@reflowtoilets.com</a>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Lawful Basis for Processing</h2>
          <p>We process personal data under the following lawful bases:</p>
          <ul>
            <li><strong>Consent:</strong> Where you have given explicit consent for processing (e.g., marketing communications, newsletter subscriptions)</li>
            <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract (e.g., service delivery, B2G contracts with municipalities)</li>
            <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests (e.g., improving services, product development, security)</li>
            <li><strong>Legal Obligation:</strong> Where we are required to process data by law</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Your Rights Under GDPR</h2>
          <p>If you are in the EEA, you have the following rights regarding your personal data:</p>

          <div className={styles.gridSection}>
            <div className={styles.gridItem}>
              <h3>Right to Access</h3>
              <p>Request a copy of the personal data we hold about you.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Right to Rectification</h3>
              <p>Request correction of inaccurate or incomplete personal data.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Right to Erasure</h3>
              <p>Request deletion of your personal data (&quot;right to be forgotten&quot;).</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Right to Restrict Processing</h3>
              <p>Request limitation of how we use your data.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Right to Data Portability</h3>
              <p>Receive your data in a structured, machine-readable format.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Right to Object</h3>
              <p>Object to processing based on legitimate interests or direct marketing.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Right to Withdraw Consent</h3>
              <p>Withdraw consent at any time where processing is based on consent.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Right to Lodge a Complaint</h3>
              <p>File a complaint with a supervisory authority in the EEA.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Data We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>
          <ul>
            <li><strong>Identity Data:</strong> Name, job title, organization name</li>
            <li><strong>Contact Data:</strong> Email address, phone number, district/municipality address</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and interact with our content</li>
            <li><strong>Professional Data:</strong> District/department information, project requirements</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Data Retention</h2>
          <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements:</p>
          <ul>
            <li>Inquiry and contact form data: 3 years from last interaction</li>
            <li>Contract-related data: Duration of contract plus 7 years</li>
            <li>Marketing preferences: Until consent is withdrawn</li>
            <li>Website analytics: 26 months</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>International Transfers</h2>
          <p>
            As we are based in India, your data may be transferred to and processed in India.
            We ensure that appropriate safeguards are in place to protect your data, including:
          </p>
          <ul>
            <li>Standard contractual clauses approved by relevant authorities</li>
            <li>Data processing agreements with third-party providers</li>
            <li>Technical security measures (encryption, access controls)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect personal data:</p>
          <ul>
            <li>HTTPS encryption for all data transmission</li>
            <li>Access controls and authentication systems</li>
            <li>Regular security assessments and audits</li>
            <li>Staff training on data protection practices</li>
            <li>Incident response procedures</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Exercising Your Rights</h2>
          <p>To exercise any of your GDPR rights, please contact us:</p>
          <div className={styles.contactBox}>
            <p><strong>Email:</strong> <a href="mailto:info@reflowtoilets.com">info@reflowtoilets.com</a></p>
            <p><strong>Subject Line:</strong> GDPR Request - [Your Request Type]</p>
            <p><strong>Response Time:</strong> We will respond within 30 days of receiving your request.</p>
          </div>
          <p>
            We may need to verify your identity before processing your request. If your request is complex
            or we receive numerous requests, we may extend the response period by an additional 60 days,
            in which case we will inform you.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Updates to This Statement</h2>
          <p>
            We may update this GDPR compliance statement from time to time. Any changes will be posted
            on this page with an updated date.
          </p>
          <p className={styles.lastUpdated}>Last Updated: November 2025</p>
        </div>

        <div className={styles.footerLinks}>
          <p>Related Documents:</p>
          <a href="/privacy">Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/tos">Terms of Service</a>
          <span className={styles.separator}>|</span>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </section>
    </div>
  );
}
