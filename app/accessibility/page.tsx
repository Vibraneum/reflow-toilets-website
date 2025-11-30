import type { Metadata } from 'next'
import styles from '../tos/page.module.css'

export const metadata: Metadata = {
  title: 'Accessibility Statement - ReFlow Toilets',
  description: 'ReFlow Toilets commitment to digital accessibility and inclusive design',
}

export default function AccessibilityPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Accessibility Statement</h1>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Commitment</h2>
            <p className={styles.text}>
              ReFlow Toilets is committed to ensuring digital accessibility for people with disabilities. We are continually improving the
              user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
            </p>
            <p className={styles.text}>
              Just as our B-CRT facilities are designed to be accessible to all members of the public, including persons with disabilities,
              we strive to make our digital presence equally inclusive.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Accessibility Standards</h2>
            <p className={styles.text}>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain
              how to make web content more accessible for people with disabilities and more user-friendly for everyone.
            </p>
            <p className={styles.text}>
              The four principles of WCAG are:
            </p>
            <p className={styles.text}>
              • <strong>Perceivable:</strong> Information and interface components must be presentable in ways users can perceive<br />
              • <strong>Operable:</strong> Interface components and navigation must be operable by all users<br />
              • <strong>Understandable:</strong> Information and interface operation must be understandable<br />
              • <strong>Robust:</strong> Content must be robust enough to be interpreted by a wide variety of assistive technologies
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Accessibility Features</h2>

            <p className={styles.text}><strong>Navigation & Structure</strong></p>
            <p className={styles.text}>
              • Consistent navigation throughout the website<br />
              • Clear heading structure for easy navigation<br />
              • Skip-to-content links for keyboard users<br />
              • Logical tab order for keyboard navigation
            </p>

            <p className={styles.text}><strong>Visual Design</strong></p>
            <p className={styles.text}>
              • Sufficient color contrast ratios for text readability<br />
              • Text can be resized up to 200% without loss of functionality<br />
              • No content that flashes more than three times per second<br />
              • Color is not used as the sole means of conveying information
            </p>

            <p className={styles.text}><strong>Content</strong></p>
            <p className={styles.text}>
              • Alternative text for meaningful images<br />
              • Descriptive link text that makes sense out of context<br />
              • Clear and simple language<br />
              • Labels for all form inputs<br />
              • Error messages that clearly explain issues and solutions
            </p>

            <p className={styles.text}><strong>Technical</strong></p>
            <p className={styles.text}>
              • Valid HTML markup<br />
              • ARIA landmarks and labels where appropriate<br />
              • Compatible with screen readers and other assistive technologies<br />
              • Responsive design that works on all devices and screen sizes
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Assistive Technology Compatibility</h2>
            <p className={styles.text}>
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <p className={styles.text}>
              • Screen readers (JAWS, NVDA, VoiceOver, TalkBack)<br />
              • Screen magnification software<br />
              • Speech recognition software<br />
              • Keyboard-only navigation
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Physical Facility Accessibility</h2>
            <p className={styles.text}>
              ReFlow B-CRT units are designed with physical accessibility in mind:
            </p>
            <p className={styles.text}>
              • Wheelchair-accessible units available<br />
              • Handrails and grab bars in accessible units<br />
              • Adequate space for wheelchair maneuverability<br />
              • Accessible door handles and fixtures<br />
              • Emergency call buttons<br />
              • Level entry without steps where possible
            </p>
            <p className={styles.text}>
              For information about accessibility at specific deployment locations, please contact the relevant municipal authority.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Known Limitations</h2>
            <p className={styles.text}>
              While we strive for full accessibility, some content may have limitations:
            </p>
            <p className={styles.text}>
              • Some older PDF documents may not be fully accessible<br />
              • Some third-party content or embedded widgets may have accessibility limitations beyond our control<br />
              • Some technical diagrams may lack detailed descriptions
            </p>
            <p className={styles.text}>
              We are actively working to address these limitations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Feedback & Assistance</h2>
            <p className={styles.text}>
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility
              barriers or have suggestions for improvement, please let us know:
            </p>
            <p className={styles.text}>
              <strong>Email:</strong> hello@reflowtoilets.com<br />
              <strong>Subject Line:</strong> Accessibility Feedback
            </p>
            <p className={styles.text}>
              When contacting us, please include:
            </p>
            <p className={styles.text}>
              • The web address (URL) of the content<br />
              • A description of the issue you encountered<br />
              • The assistive technology you were using (if applicable)<br />
              • Your contact information for follow-up
            </p>
            <p className={styles.text}>
              We aim to respond to accessibility feedback within 5 business days.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Continuous Improvement</h2>
            <p className={styles.text}>
              We are committed to continuously improving the accessibility of our website. Our efforts include:
            </p>
            <p className={styles.text}>
              • Regular accessibility audits and testing<br />
              • Staff training on accessibility best practices<br />
              • Incorporating accessibility into our development process<br />
              • Monitoring and responding to user feedback
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>More Information</h2>
            <p className={styles.text}>
              To learn more about web accessibility, visit:
            </p>
            <p className={styles.text}>
              • <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Initiative (WAI)</a><br />
              • <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a>
            </p>
          </section>

          <p className={styles.lastUpdated}>Last updated: November 2025</p>
        </div>
      </div>
    </div>
  )
}
