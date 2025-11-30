import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service - ReFlow Toilets',
  description: 'Terms of Service for ReFlow Toilets - B-CRT Smart Sanitation Solutions',
}

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.text}>
              Welcome to ReFlow Toilets ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website
              at reflowtoilets.com and our B-CRT (Bio-Circular Resource Technology) sanitation solutions. By accessing our website or
              engaging with our services, you agree to be bound by these Terms.
            </p>
            <p className={styles.text}>
              ReFlow Toilets is a brand of IRISE TOILETS PRIVATE LIMITED, part of the Ixora Group, providing innovative,
              technology-enabled public sanitation solutions for districts, municipalities, and government bodies across India.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Use of ReFlow B-CRT Solutions</h2>
            <p className={styles.text}><strong>2.1 Access to Solutions</strong></p>
            <p className={styles.text}>
              ReFlow B-CRT toilet facilities are deployed through partnerships with districts, municipal corporations,
              and government entities. Access to facilities is governed by the terms of deployment agreements
              with respective government bodies.
            </p>

            <p className={styles.text}><strong>2.2 Technology Features</strong></p>
            <p className={styles.text}>
              Our B-CRT units are equipped with IoT sensors for monitoring performance, water recycling efficiency,
              energy consumption, and maintenance needs. This technology helps optimize operations and ensure
              sustainability. No personal identification data is collected through these sensors.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Website Use</h2>
            <p className={styles.text}><strong>3.1 Permitted Use</strong></p>
            <p className={styles.text}>
              You may use our website for informational purposes, to learn about our B-CRT technology,
              explore deployment opportunities, respond to RFPs, and contact us for government partnership inquiries.
            </p>

            <p className={styles.text}><strong>3.2 Prohibited Activities</strong></p>
            <p className={styles.text}>
              You agree not to:<br />
              • Use the website for any unlawful purpose<br />
              • Attempt to gain unauthorized access to our systems<br />
              • Transmit viruses, malware, or other harmful code<br />
              • Scrape, copy, or redistribute our content without permission<br />
              • Interfere with the proper functioning of the website<br />
              • Misrepresent your authority to act on behalf of government entities
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
            <p className={styles.text}>
              All content on this website, including but not limited to text, images, logos, designs, B-CRT technology
              descriptions, and the ReFlow brand, is the property of IRISE TOILETS PRIVATE LIMITED or its licensors.
              This content is protected by intellectual property laws.
            </p>
            <p className={styles.text}>
              The ReFlow Toilets name, logo, B-CRT technology, and related marks are trademarks of IRISE TOILETS PRIVATE LIMITED.
              You may not use these marks without our prior written consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Government and Municipal Partnerships</h2>
            <p className={styles.text}>
              Information provided on our website regarding B-CRT technology, deployment models, technical specifications,
              and partnership opportunities is for informational purposes only. All government partnerships, tenders,
              and deployment agreements are subject to separate written contracts.
            </p>
            <p className={styles.text}>
              We reserve the right to modify our technology specifications, partnership terms, and offerings at any time
              to incorporate improvements and advancements.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Privacy and Data</h2>
            <p className={styles.text}>
              Your use of our website and engagement with our services is also governed by our Privacy Policy.
              By using our services, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
            <p className={styles.text}>
              For contact form submissions and government inquiries, we collect only the information you voluntarily
              provide to respond to your requests and facilitate partnership discussions.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Disclaimer of Warranties</h2>
            <p className={styles.text}>
              Our website and information are provided "as is" without warranties of any kind, either express or implied.
              We do not warrant that:<br />
              • The website will be available at all times without interruption<br />
              • The information on the website is always complete or current<br />
              • The website is free of errors or security vulnerabilities
            </p>
            <p className={styles.text}>
              Technical specifications and performance metrics of B-CRT technology are subject to site conditions
              and deployment configurations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
            <p className={styles.text}>
              To the maximum extent permitted by law, IRISE TOILETS PRIVATE LIMITED and its affiliates shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of
              our website or engagement with our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Indemnification</h2>
            <p className={styles.text}>
              You agree to indemnify and hold harmless IRISE TOILETS PRIVATE LIMITED, its officers, directors,
              employees, and agents from any claims, damages, losses, or expenses arising from your violation of
              these Terms or your use of our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Third-Party Links</h2>
            <p className={styles.text}>
              Our website may contain links to third-party websites, including government portals and partner organizations.
              We are not responsible for the content, privacy policies, or practices of these external sites.
              Accessing third-party links is at your own risk.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Modifications to Terms</h2>
            <p className={styles.text}>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
              posting on our website. Your continued use of our website after changes are posted
              constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Governing Law and Jurisdiction</h2>
            <p className={styles.text}>
              These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of our
              services shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Severability</h2>
            <p className={styles.text}>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
              or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Contact Information</h2>
            <p className={styles.text}>
              For questions about these Terms of Service, please contact us:
            </p>
            <p className={styles.text}>
              <strong>IRISE TOILETS PRIVATE LIMITED</strong><br />
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
