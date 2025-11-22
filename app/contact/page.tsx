'use client'

import { useState } from 'react'
import styles from './page.module.css'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return undefined
      case 'phone':
        if (value && value.trim()) {
          const phoneRegex = /^[\d\s\-\+\(\)]+$/
          if (!phoneRegex.test(value)) return 'Please enter a valid phone number'
        }
        return undefined
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        company: '',
        subject: 'General Inquiry',
        message: formData.message,
        source: 'reflowtoilets.com'  // Routes to ReFlow Inquiries sheet
      }

      await fetch('https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof FormData
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (touched[fieldName] && errors[fieldName]) {
      const error = validateField(name, value)
      setErrors({ ...errors, [name]: error })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key as keyof FormErrors] = error
    })
    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true
    })
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>

        <div style={{
          background: 'linear-gradient(135deg, #f0f9f4 0%, #e8f5e9 100%)',
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '2px solid #34D399',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.1em', fontWeight: '600', color: '#2c5530', marginBottom: '8px' }}>
            Part of the Ixora Ecosystem
          </p>
          <p style={{ fontSize: '0.95em', lineHeight: '1.6', color: '#333' }}>
            ReFlow is operated by <a href="https://www.ixoragroup.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>Ixora Group</a> - a leading facilities management company with 15+ years of experience managing large-scale infrastructure across India.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>

            <div className={styles.infoItem}>
              <h3>Office Address</h3>
              <p>
                <strong>Ixora Corporate Services Pvt Ltd</strong><br />
                Door No: 8, 2-293/82/J/A/101,<br />
                Journalist Colony, Jubilee Hills,<br />
                Hyderabad, Telangana 500033
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>
                <strong>+91-40-4850-4850</strong><br />
                (10am–6pm Monday–Saturday)
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@ixoragroup.com" style={{ color: 'inherit', textDecoration: 'underline' }}>info@ixoragroup.com</a>
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3>Schedule a Consultation</h3>
              <a
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.scheduleButton}
              >
                Book Consultation
              </a>
            </div>

            <div className={styles.infoItem}>
              <h3>Social</h3>
              <a
                href="https://www.linkedin.com/company/reflow-toilets"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
              >
                Connect with us on LinkedIn
              </a>
            </div>

            <div className={styles.mapContainer} style={{ marginTop: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8272226612307!2d78.4072!3d17.4203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11303421b36795e3!2sIxora%20Corporate%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Send us a Message</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                  aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                  className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ''}`}
                />
                {touched.name && errors.name && (
                  <span id="name-error" className={styles.errorMessage} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
                />
                {touched.email && errors.email && (
                  <span id="email-error" className={styles.errorMessage} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
                  aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                  className={`${styles.input} ${touched.phone && errors.phone ? styles.inputError : ''}`}
                />
                {touched.phone && errors.phone && (
                  <span id="phone-error" className={styles.errorMessage} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={6}
                  aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                  aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                  className={`${styles.textarea} ${touched.message && errors.message ? styles.inputError : ''}`}
                ></textarea>
                {touched.message && errors.message && (
                  <span id="message-error" className={styles.errorMessage} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p style={{ color: '#10b981', marginTop: '10px', fontSize: '14px' }}>
                  ✅ Thank you! We'll get back to you soon.
                </p>
              )}

              {submitStatus === 'error' && (
                <p style={{ color: '#ef4444', marginTop: '10px', fontSize: '14px' }}>
                  ❌ Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

