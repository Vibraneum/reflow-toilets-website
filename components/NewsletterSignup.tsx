'use client'

import { useState } from 'react'
import styles from './NewsletterSignup.module.css'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'validation'>('idle')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email format
    if (!email.trim()) {
      setSubmitStatus('validation')
      setTimeout(() => setSubmitStatus('idle'), 5000)
      return
    }

    if (!validateEmail(email)) {
      setSubmitStatus('validation')
      setTimeout(() => setSubmitStatus('idle'), 5000)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send to Google Sheets via Apps Script with source: 'newsletter'
      const newsletterData = {
        name: name || '',
        email: email,
        phone: '',
        company: '',
        subject: 'Newsletter Subscription - WASH Updates',
        message: 'Subscribed to ReFlow Toilets newsletter for WASH and sanitation updates',
        source: 'reflowtoilets.com',
        newsletter: true
      }

      await fetch('https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsletterData)
      })

      // Success
      setSubmitStatus('success')
      setEmail('')
      setName('')

      // Reset success message after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 8000)

    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Icon */}
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className={styles.heading}>
            Stay Updated on Sanitation Innovation
          </h2>

          {/* Subheading */}
          <p className={styles.subheading}>
            Monthly updates on district deployments, technology advancements, and government partnerships
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              {/* Name Input (Optional) */}
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                disabled={isSubmitting}
                className={styles.nameInput}
                aria-label="Name (optional)"
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
                className={styles.emailInput}
                required
                aria-label="Email address"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <svg className={styles.spinner} fill="none" viewBox="0 0 24 24">
                      <circle className={styles.spinnerCircle} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className={styles.spinnerPath} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>

            {/* Status Messages */}
            <div className={styles.statusContainer}>
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <svg className={styles.statusIcon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Subscribed! Check your email for confirmation.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <svg className={styles.statusIcon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Error subscribing. Please try again.</span>
                </div>
              )}

              {submitStatus === 'validation' && (
                <div className={styles.validationMessage}>
                  <svg className={styles.statusIcon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Please enter a valid email address.</span>
                </div>
              )}
            </div>
          </form>

          {/* Privacy Note */}
          <p className={styles.privacyNote}>
            Unsubscribe anytime. We respect your privacy.{' '}
            <a
              href="/tos"
              className={styles.privacyLink}
            >
              View our Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}




