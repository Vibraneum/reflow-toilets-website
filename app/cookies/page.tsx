import type { Metadata } from 'next'
import styles from '../tos/page.module.css'

export const metadata: Metadata = {
  title: 'Cookie Policy - ReFlow Toilets',
  description: 'Cookie Policy for ReFlow Toilets - How we use cookies and similar technologies',
}

export default function CookiePolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cookie Policy</h1>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
            <p className={styles.text}>
              Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website.
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className={styles.text}>
              Cookies help us understand how you use our website, remember your preferences, and improve your overall experience.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Cookies</h2>
            <p className={styles.text}>
              ReFlow Toilets uses cookies for the following purposes:
            </p>
            <p className={styles.text}>
              • <strong>Essential Operations:</strong> To make our website function properly<br />
              • <strong>Performance & Analytics:</strong> To understand how visitors use our site<br />
              • <strong>Preferences:</strong> To remember your settings and choices<br />
              • <strong>Security:</strong> To help protect our website and users
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Types of Cookies We Use</h2>

            <p className={styles.text}><strong>3.1 Essential Cookies</strong></p>
            <p className={styles.text}>
              These cookies are necessary for the website to function and cannot be switched off. They are usually set in response
              to actions you take, such as setting privacy preferences or filling in forms.
            </p>

            <p className={styles.text}><strong>3.2 Analytics Cookies</strong></p>
            <p className={styles.text}>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              This helps us improve our website and services.
            </p>
            <p className={styles.text}>
              • <strong>_ga:</strong> Google Analytics - Distinguishes users (2 years)<br />
              • <strong>_ga_*:</strong> Google Analytics - Maintains session state (2 years)
            </p>

            <p className={styles.text}><strong>3.3 Preference Cookies</strong></p>
            <p className={styles.text}>
              These cookies enable the website to provide enhanced functionality and personalization based on your choices.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Third-Party Cookies</h2>
            <p className={styles.text}>
              Some cookies are placed by third-party services that appear on our pages. We do not control these cookies.
              The third parties include:
            </p>
            <p className={styles.text}>
              • <strong>Google Analytics:</strong> For website analytics and performance measurement<br />
              • <strong>Vercel Analytics:</strong> For performance monitoring<br />
              • <strong>Cloudflare:</strong> For security and performance optimization
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Managing Cookies</h2>
            <p className={styles.text}>
              You have the right to decide whether to accept or reject cookies. Most web browsers allow you to control cookies
              through their settings. You can:
            </p>
            <p className={styles.text}>
              • View what cookies are stored on your device<br />
              • Delete all or specific cookies<br />
              • Block cookies from specific websites<br />
              • Block all cookies (note: this may affect website functionality)<br />
              • Set your browser to notify you when cookies are being set
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Browser Cookie Settings</h2>
            <p className={styles.text}>
              Here are links to manage cookies in popular browsers:
            </p>
            <p className={styles.text}>
              • <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a><br />
              • <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a><br />
              • <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a><br />
              • <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Impact of Disabling Cookies</h2>
            <p className={styles.text}>
              If you choose to disable cookies, please note that some features of our website may not function properly.
              Essential cookies cannot be disabled as they are necessary for the website to work.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Updates to This Policy</h2>
            <p className={styles.text}>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational,
              legal, or regulatory reasons. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p className={styles.text}>
              If you have questions about our use of cookies, please contact us:
            </p>
            <p className={styles.text}>
              <strong>IRISE TOILETS PRIVATE LIMITED</strong><br />
              (Part of Ixora Group)<br />
              Jubilee Hills, Hyderabad, Telangana 500033<br />
              India<br /><br />
              Email: hello@reflowtoilets.com
            </p>
          </section>

          <p className={styles.lastUpdated}>Last updated: November 2025</p>
        </div>
      </div>
    </div>
  )
}
