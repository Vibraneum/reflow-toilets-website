import styles from './Testimonials.module.css'

interface Testimonial {
  quote: string
  author: string
  position: string
  organization: string
  location: string
  project: string
}

const testimonials: Testimonial[] = [
  {
    quote: "The integrated ecosystem approach eliminated our vendor coordination headaches. One point of contact for toilets, maintenance, and security—and the LooCafe model proved sustainability from day one.",
    author: "Municipal Commissioner",
    position: "Urban Development Authority",
    organization: "Government of Telangana",
    location: "Hyderabad, Telangana",
    project: "270+ LooCafe Units Deployment",
  },
  {
    quote: "ReFlow's partnership with Ixora Group means we get operational toilets without hiring maintenance staff. The DRNF social impact—70+ jobs created—turned sanitation into a community development program.",
    author: "District Collector",
    position: "Municipal Corporation",
    organization: "Smart City Mission",
    location: "Navi Mumbai, Maharashtra",
    project: "B-CRT Pilot Program (Q1 2025)",
  },
  {
    quote: "What impressed us most was the 24/7 security integration through Ixora Security. Real-time IoT monitoring means we can track all units from one dashboard. No separate security contracts needed.",
    author: "Chief Engineer",
    position: "Public Works Department",
    organization: "Urban Local Body",
    location: "Greater Hyderabad",
    project: "District-Wide Sanitation Infrastructure",
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Trusted by Government Partners</h2>
          <p className={styles.subtitle}>
            What district administrators and urban planners say about the Ixora Ecosystem
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>
              <div className={styles.attribution}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorPosition}>{testimonial.position}</div>
                  <div className={styles.organization}>{testimonial.organization}</div>
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.location}>📍 {testimonial.location}</div>
                  <div className={styles.project}>{testimonial.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.endorsements}>
          <h3 className={styles.endorsementsTitle}>Official Recognition & Support</h3>
          <div className={styles.endorsementsList}>
            <div className={styles.endorsementItem}>
              <div className={styles.endorsementIcon}>🏛️</div>
              <div>
                <div className={styles.endorsementOrg}>Government of Telangana</div>
                <div className={styles.endorsementQuote}>"Homegrown Innovation"</div>
              </div>
            </div>
            <div className={styles.endorsementItem}>
              <div className={styles.endorsementIcon}>🚰</div>
              <div>
                <div className={styles.endorsementOrg}>WASH Innovation Hub</div>
                <div className={styles.endorsementQuote}>Partner Organization</div>
              </div>
            </div>
            <div className={styles.endorsementItem}>
              <div className={styles.endorsementIcon}>🇮🇳</div>
              <div>
                <div className={styles.endorsementOrg}>Swachh Bharat Mission</div>
                <div className={styles.endorsementQuote}>"Aspirational Toilets"</div>
              </div>
            </div>
            <div className={styles.endorsementItem}>
              <div className={styles.endorsementIcon}>🌍</div>
              <div>
                <div className={styles.endorsementOrg}>Gates Foundation</div>
                <div className={styles.endorsementQuote}>Reinvented Toilet Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
