import type { Metadata } from 'next'
import styles from '../tos/page.module.css'

export const metadata: Metadata = {
  title: 'Report an Issue - ReFlow Toilets',
  description: 'Report website bugs, issues, or provide feedback for ReFlow Toilets',
}

export default function ReportIssuePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Report an Issue</h1>
        <p style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Help us improve by reporting bugs, issues, or providing feedback
        </p>

        <div className={styles.content}>
          <div style={{ backgroundColor: '#E8F5E9', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', borderLeft: '4px solid #4CAF50' }}>
            <p style={{ color: '#2E7D32', margin: 0 }}>
              <strong>Thank you for helping us improve!</strong> Your feedback helps us provide a better experience for everyone.
            </p>
          </div>

          <form id="issue-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Issue Type */}
            <div>
              <label htmlFor="issue-type" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                Type of Issue <span style={{ color: '#E53935' }}>*</span>
              </label>
              <select
                id="issue-type"
                name="issue_type"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
              >
                <option value="">Select issue type...</option>
                <option value="bug">Website Bug / Error</option>
                <option value="display">Display / Layout Issue</option>
                <option value="broken-link">Broken Link</option>
                <option value="typo">Typo / Content Error</option>
                <option value="performance">Slow Loading / Performance</option>
                <option value="mobile">Mobile Experience Issue</option>
                <option value="accessibility">Accessibility Issue</option>
                <option value="feature">Feature Request</option>
                <option value="feedback">General Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Page URL */}
            <div>
              <label htmlFor="page-url" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                Page URL (where you found the issue)
              </label>
              <input
                type="url"
                id="page-url"
                name="page_url"
                placeholder="https://reflowtoilets.com/..."
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                Description <span style={{ color: '#E53935' }}>*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                placeholder="Please describe the issue in detail. Include steps to reproduce if applicable..."
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}
              />
            </div>

            {/* Browser/Device */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label htmlFor="browser" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                  Browser
                </label>
                <select
                  id="browser"
                  name="browser"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                >
                  <option value="">Select browser...</option>
                  <option value="chrome">Google Chrome</option>
                  <option value="firefox">Mozilla Firefox</option>
                  <option value="safari">Safari</option>
                  <option value="edge">Microsoft Edge</option>
                  <option value="opera">Opera</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="device" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                  Device
                </label>
                <select
                  id="device"
                  name="device"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                >
                  <option value="">Select device...</option>
                  <option value="desktop">Desktop / Laptop</option>
                  <option value="mobile">Mobile Phone</option>
                  <option value="tablet">Tablet</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                Email (optional - for follow-up)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
              />
              <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
                We'll only use this to follow up on your report if needed.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#0D47A1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Submit Report
            </button>
          </form>

          <section className={styles.section} style={{ marginTop: '3rem' }}>
            <h2 className={styles.sectionTitle}>Other Ways to Reach Us</h2>
            <p className={styles.text}>
              For urgent issues or general inquiries, contact us directly:
            </p>
            <p className={styles.text}>
              <strong>Email:</strong> hello@reflowtoilets.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
