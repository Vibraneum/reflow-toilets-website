import type { Metadata } from 'next'
import styles from '../tos/page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy - ReFlow Toilets',
  description: 'Privacy Policy for ReFlow Toilets - How we collect, use, and protect your information',
}

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.text}>
              IRISE TOILETS PRIVATE LIMITED ("ReFlow Toilets," "we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website reflowtoilets.com or engage with our B-CRT (Bio-Circular Resource Technology) sanitation solutions.
            </p>
            <p className={styles.text}>
              By using our website or services, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.text}><strong>2.1 Information You Provide</strong></p>
            <p className={styles.text}>
              We may collect information you voluntarily provide, including:
            </p>
            <p className={styles.text}>
              • <strong>Contact Information:</strong> Name, email address, phone number when you submit inquiries<br />
              • <strong>Business Information:</strong> Organization name, designation, district/municipality details for government and municipal inquiries<br />
              • <strong>Project Details:</strong> Site requirements, deployment scale, timeline preferences<br />
              • <strong>Communication Records:</strong> Records of your correspondence with us
            </p>

            <p className={styles.text}><strong>2.2 Automatically Collected Information</strong></p>
            <p className={styles.text}>
              When you visit our website, we may automatically collect:
            </p>
            <p className={styles.text}>
              • <strong>Device Information:</strong> Browser type, operating system, device type<br />
              • <strong>Usage Data:</strong> Pages visited, time spent, referring URL<br />
              • <strong>IP Address:</strong> For security and analytics purposes<br />
              • <strong>Cookies:</strong> Small data files stored on your device
            </p>

            <p className={styles.text}><strong>2.3 IoT and Technology Data</strong></p>
            <p className={styles.text}>
              Our B-CRT units use IoT sensors to collect anonymous, aggregate operational data:
            </p>
            <p className={styles.text}>
              • Usage frequency and patterns<br />
              • Water recycling efficiency metrics<br />
              • Energy consumption and solar generation<br />
              • Maintenance and performance data
            </p>
            <p className={styles.text}>
              <strong>Important:</strong> Our IoT sensors do NOT collect personal identification data, images, audio,
              or any information that could identify individual users. All facility data is anonymous and aggregated
              for operational optimization only.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            <p className={styles.text}>
              We use collected information to:
            </p>
            <p className={styles.text}>
              • Respond to inquiries from municipalities, districts, and government bodies<br />
              • Process partnership proposals and RFP submissions<br />
              • Provide technical specifications and project consultations<br />
              • Improve our website, products, and B-CRT technology<br />
              • Send relevant updates about our solutions (with your consent)<br />
              • Analyze website traffic and user behavior<br />
              • Ensure security and prevent fraud<br />
              • Comply with legal obligations
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Legal Basis for Processing (GDPR Compliance)</h2>
            <p className={styles.text}>
              For visitors from the European Economic Area (EEA), we process personal data based on:
            </p>
            <p className={styles.text}>
              • <strong>Consent:</strong> When you submit forms or subscribe to communications<br />
              • <strong>Legitimate Interests:</strong> For website analytics, security, and service improvement<br />
              • <strong>Contractual Necessity:</strong> To fulfill partnership agreements and government contracts<br />
              • <strong>Legal Obligations:</strong> To comply with applicable laws
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Sharing and Disclosure</h2>
            <p className={styles.text}>
              We may share your information with:
            </p>
            <p className={styles.text}>
              • <strong>Service Providers:</strong> Third parties who assist in website hosting, analytics, and communications<br />
              • <strong>Government Partners:</strong> Municipal corporations, district administrations, and government bodies for project implementation<br />
              • <strong>Technology Partners:</strong> Gates Foundation and B-CRT technology collaborators (aggregate data only)<br />
              • <strong>Legal Authorities:</strong> When required by law or to protect our rights<br />
              • <strong>Affiliated Companies:</strong> Ixora Group entities including Ixora Corporate Services Private Limited and LooCafe
            </p>
            <p className={styles.text}>
              We do NOT sell your personal information to third parties.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. International Data Transfers</h2>
            <p className={styles.text}>
              Our primary operations are in India. If you access our website from outside India, your information may be
              transferred to, stored, and processed in India. By using our services, you consent to such transfers.
            </p>
            <p className={styles.text}>
              For EEA residents, we ensure appropriate safeguards are in place for international data transfers,
              including Standard Contractual Clauses where applicable.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Data Retention</h2>
            <p className={styles.text}>
              We retain your information for as long as necessary to:
            </p>
            <p className={styles.text}>
              • Fulfill the purposes described in this Privacy Policy<br />
              • Comply with legal and regulatory obligations<br />
              • Support government tender and contract requirements<br />
              • Resolve disputes and enforce agreements
            </p>
            <p className={styles.text}>
              Contact form submissions and project inquiries are retained for up to 5 years to support
              long-term government partnership cycles. Analytics data is retained in aggregate form indefinitely.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Your Rights</h2>
            <p className={styles.text}><strong>8.1 For All Users</strong></p>
            <p className={styles.text}>
              You have the right to:
            </p>
            <p className={styles.text}>
              • Request access to your personal information<br />
              • Request correction of inaccurate data<br />
              • Request deletion of your data<br />
              • Opt-out of marketing communications<br />
              • Lodge a complaint with relevant authorities
            </p>

            <p className={styles.text}><strong>8.2 Additional Rights for EEA Residents (GDPR)</strong></p>
            <p className={styles.text}>
              If you are in the European Economic Area, you also have the right to:
            </p>
            <p className={styles.text}>
              • Data portability (receive your data in a structured format)<br />
              • Restrict processing of your data<br />
              • Object to processing based on legitimate interests<br />
              • Withdraw consent at any time
            </p>

            <p className={styles.text}><strong>8.3 Exercising Your Rights</strong></p>
            <p className={styles.text}>
              To exercise any of these rights, please contact us at hello@reflowtoilets.com.
              We will respond to your request within 30 days.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Cookie Policy</h2>
            <p className={styles.text}>
              Our website uses cookies to enhance your experience:
            </p>
            <p className={styles.text}>
              • <strong>Essential Cookies:</strong> Required for website functionality<br />
              • <strong>Analytics Cookies:</strong> Help us understand how visitors use our site<br />
              • <strong>Preference Cookies:</strong> Remember your settings and preferences
            </p>
            <p className={styles.text}>
              You can control cookies through your browser settings. Note that disabling certain cookies
              may affect website functionality.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Data Security</h2>
            <p className={styles.text}>
              We implement appropriate technical and organizational measures to protect your information, including:
            </p>
            <p className={styles.text}>
              • SSL/TLS encryption for data transmission<br />
              • Secure hosting infrastructure<br />
              • Access controls and authentication<br />
              • Regular security assessments
            </p>
            <p className={styles.text}>
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Children's Privacy</h2>
            <p className={styles.text}>
              Our website is not directed at children under 13. We do not knowingly collect personal information from
              children. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Third-Party Links</h2>
            <p className={styles.text}>
              Our website may contain links to third-party sites, including government portals and partner websites.
              We are not responsible for the privacy practices of these external sites.
              We encourage you to review their privacy policies.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Changes to This Policy</h2>
            <p className={styles.text}>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
              "Last updated" date. Significant changes may be communicated through our website or directly to
              registered contacts.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Contact Us</h2>
            <p className={styles.text}>
              For questions about this Privacy Policy or to exercise your rights, contact us:
            </p>
            <p className={styles.text}>
              <strong>Data Protection Contact</strong><br />
              IRISE TOILETS PRIVATE LIMITED<br />
              (Part of Ixora Group)<br />
              Jubilee Hills, Hyderabad, Telangana 500033<br />
              India<br /><br />
              Email: hello@reflowtoilets.com<br />
              Website: reflowtoilets.com
            </p>
          </section>

          <p className={styles.lastUpdated}>Last updated: November 2025</p>
        </div>
      </div>
    </div>
  )
}
