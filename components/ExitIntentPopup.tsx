'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import styles from './ExitIntentPopup.module.css'

interface FormField {
  name: string
  type: 'text' | 'email' | 'tel' | 'dropdown'
  label: string
  required: boolean
  placeholder?: string
  options?: string[]
}

interface PopupConfig {
  heading: string
  subheading: string
  fields: FormField[]
  buttonText: string
  benefits: string[]
  crmSource: string
}

// LocalStorage keys
const EXIT_POPUP_SHOWN_KEY = 'reflow_exit_popup_shown'
const EXIT_POPUP_TIMESTAMP_KEY = 'reflow_exit_popup_timestamp'
const EXIT_POPUP_SESSION_KEY = 'reflow_exit_popup_session'

// CRM endpoint
const CRM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec'

export default function ExitIntentPopup() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [timeOnPage, setTimeOnPage] = useState(0)

  // Get current page identifier
  const getCurrentPage = useCallback((): string => {
    if (!pathname) return 'home'
    const page = pathname.replace('/', '').replace('-', '_') || 'home'
    return page
  }, [pathname])

  // Get popup configuration based on current page
  const getPopupConfig = useCallback((): PopupConfig => {
    const currentPage = getCurrentPage()

    // B-CRT page - Focus on technical inquiry
    if (currentPage === 'b_crt' || currentPage === 'b-crt') {
      return {
        heading: "Interested in B-CRT for Your District? 🏛️",
        subheading: "Get technical specifications and deployment details",
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
            placeholder: 'Your name'
          },
          {
            name: 'designation',
            type: 'text',
            label: 'Designation',
            required: true,
            placeholder: 'e.g., Municipal Commissioner, District Collector'
          },
          {
            name: 'district',
            type: 'text',
            label: 'District/City',
            required: true,
            placeholder: 'e.g., Hyderabad, Mumbai'
          },
          {
            name: 'phone',
            type: 'tel',
            label: 'Phone',
            required: true,
            placeholder: '+91 98765 43210'
          },
          {
            name: 'email',
            type: 'email',
            label: 'Email',
            required: false,
            placeholder: 'your.email@gov.in'
          }
        ],
        buttonText: "Get B-CRT Details",
        benefits: [
          "✓ Technical specifications",
          "✓ Deployment timeline",
          "✓ ROI analysis for your district"
        ],
        crmSource: 'exit-popup-bcrt' // For analytics/tracking only
      }
    }

    // Innovation page - Focus on partnership
    if (currentPage === 'innovation') {
      return {
        heading: "Partner with ReFlow for Your District 🤝",
        subheading: "Join the Reinvented Toilet mission - Deploy advanced sanitation",
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
            placeholder: 'Your name'
          },
          {
            name: 'organization',
            type: 'text',
            label: 'Organization',
            required: true,
            placeholder: 'Municipality, District Administration, etc.'
          },
          {
            name: 'location',
            type: 'text',
            label: 'Location',
            required: true,
            placeholder: 'District/City'
          },
          {
            name: 'phone',
            type: 'tel',
            label: 'Phone',
            required: true,
            placeholder: '+91 98765 43210'
          },
          {
            name: 'deploymentInterest',
            type: 'dropdown',
            label: 'Deployment Interest',
            required: false,
            options: [
              'Select Interest',
              'Immediate Deployment',
              'Planning Phase',
              'Budget Approval Pending',
              'Information Gathering',
              'Partnership Discussion'
            ]
          }
        ],
        buttonText: "Request Partnership Info",
        benefits: [
          "✓ Gates Foundation partnership",
          "✓ Proven technology",
          "✓ District-level support"
        ],
        crmSource: 'exit-popup-innovation'
      }
    }

    // Tech page - Focus on technical consultation
    if (currentPage === 'tech') {
      return {
        heading: "Need Technical Details? 📋",
        subheading: "Speak with our technical team about IoT, treatment systems, and deployment",
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
            placeholder: 'Your name'
          },
          {
            name: 'phone',
            type: 'tel',
            label: 'Phone',
            required: true,
            placeholder: '+91 98765 43210'
          },
          {
            name: 'email',
            type: 'email',
            label: 'Email',
            required: false,
            placeholder: 'your.email@example.com'
          },
          {
            name: 'techInterest',
            type: 'dropdown',
            label: 'Technical Interest',
            required: false,
            options: [
              'Select Interest',
              'IoT System & Monitoring',
              'Treatment Process Details',
              'Solar Power System',
              'Modular Design',
              'Maintenance & Operations',
              'General Technical Query'
            ]
          }
        ],
        buttonText: "Schedule Technical Call",
        benefits: [
          "✓ Expert technical team",
          "✓ Detailed specifications",
          "✓ Customized solutions"
        ],
        crmSource: 'exit-popup-tech'
      }
    }

    // Government Framework page - Focus on procurement assistance
    if (currentPage === 'government_framework' || currentPage === 'government-framework') {
      return {
        heading: "Need Procurement Assistance? 🏛️",
        subheading: "Get tender documents, budget templates, and expert guidance for your district deployment",
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
            placeholder: 'Your name'
          },
          {
            name: 'designation',
            type: 'text',
            label: 'Designation',
            required: true,
            placeholder: 'e.g., Commissioner, District Collector, Executive Engineer'
          },
          {
            name: 'district',
            type: 'text',
            label: 'District/Corporation',
            required: true,
            placeholder: 'e.g., Greater Hyderabad Municipal Corporation'
          },
          {
            name: 'phone',
            type: 'tel',
            label: 'Phone',
            required: true,
            placeholder: '+91 98765 43210'
          },
          {
            name: 'assistanceNeeded',
            type: 'dropdown',
            label: 'Assistance Needed',
            required: false,
            options: [
              'Select Type',
              'Tender Document Preparation',
              'Budget Justification Support',
              'Funding Application Help',
              'Site Feasibility Study',
              'Technical Specifications',
              'Complete Procurement Support'
            ]
          }
        ],
        buttonText: "Get Procurement Support",
        benefits: [
          "✓ Ready-to-use tender templates",
          "✓ Budget justification documents",
          "✓ Funding application assistance"
        ],
        crmSource: 'exit-popup-government-framework'
      }
    }

    // Design page - Focus on design consultation
    if (currentPage === 'design') {
      return {
        heading: "Custom Design for Your District? 🎨",
        subheading: "Get design consultation for your specific requirements",
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
            placeholder: 'Your name'
          },
          {
            name: 'district',
            type: 'text',
            label: 'District/City',
            required: true,
            placeholder: 'e.g., Hyderabad, Mumbai'
          },
          {
            name: 'phone',
            type: 'tel',
            label: 'Phone',
            required: true,
            placeholder: '+91 98765 43210'
          },
          {
            name: 'unitsRequired',
            type: 'dropdown',
            label: 'Units Required',
            required: false,
            options: [
              'Select Range',
              '1-5 units',
              '6-10 units',
              '11-20 units',
              '21-50 units',
              '50+ units',
              'Planning phase'
            ]
          }
        ],
        buttonText: "Get Design Consultation",
        benefits: [
          "✓ Custom design solutions",
          "✓ Site-specific planning",
          "✓ Certification support"
        ],
        crmSource: 'exit-popup-design'
      }
    }

    // Default - District inquiry (Homepage and others)
    return {
      heading: "Get ReFlow for Your District 🏛️",
      subheading: "Transform sanitation infrastructure in your district - ISO30500 compliant, zero discharge, solar-powered",
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
          placeholder: 'Your name'
        },
        {
          name: 'designation',
          type: 'text',
          label: 'Designation',
          required: true,
          placeholder: 'Municipal Commissioner, District Collector, etc.'
        },
        {
          name: 'district',
          type: 'text',
          label: 'District/City',
          required: true,
          placeholder: 'e.g., Hyderabad, Mumbai'
        },
        {
          name: 'phone',
          type: 'tel',
          label: 'Phone',
          required: true,
          placeholder: '+91 98765 43210'
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          required: false,
          placeholder: 'your.email@gov.in'
        },
        {
          name: 'inquiryType',
          type: 'dropdown',
          label: 'Inquiry Type',
          required: false,
          options: [
            'Select Type',
            'Deployment Inquiry',
            'Technical Specifications',
            'Budget & Pricing',
            'Partnership Discussion',
            'Site Visit Request',
            'General Information'
          ]
        }
      ],
      buttonText: "Request District Proposal",
      benefits: [
        "✓ Free district assessment",
        "✓ Customized deployment plan",
        "✓ 24-hour response time"
      ],
      crmSource: 'exit-popup-district-inquiry'
    }
  }, [getCurrentPage])

  const popupConfig = getPopupConfig()

  // Check if popup should be shown
  const shouldShowPopup = useCallback((): boolean => {
    // Check session storage (don't show twice in same session)
    const sessionShown = sessionStorage.getItem(EXIT_POPUP_SESSION_KEY)
    if (sessionShown) return false

    // Check localStorage for 7-day cooldown
    const lastShown = localStorage.getItem(EXIT_POPUP_TIMESTAMP_KEY)
    if (lastShown) {
      const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000)
      if (parseInt(lastShown) > sevenDaysAgo) {
        return false
      }
    }

    // Check time on page (must be > 30 seconds)
    if (timeOnPage < 30) return false

    return true
  }, [timeOnPage])

  // Track time on page
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Exit intent detection
  useEffect(() => {
    let exitTimeout: NodeJS.Timeout | null = null

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving toward top of viewport
      if (e.clientY < 50 && shouldShowPopup() && !isVisible) {
        // Small delay to avoid false triggers
        exitTimeout = setTimeout(() => {
          setIsVisible(true)
          // Mark as shown in session
          sessionStorage.setItem(EXIT_POPUP_SESSION_KEY, 'true')
        }, 100)
      }
    }

    const handleMouseEnter = () => {
      // Clear timeout if mouse comes back quickly
      if (exitTimeout) {
        clearTimeout(exitTimeout)
        exitTimeout = null
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (exitTimeout) clearTimeout(exitTimeout)
    }
  }, [shouldShowPopup, isVisible])

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isVisible])

  // Prevent body scroll when popup is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
      // Save timestamp to localStorage
      localStorage.setItem(EXIT_POPUP_TIMESTAMP_KEY, Date.now().toString())
      localStorage.setItem(EXIT_POPUP_SHOWN_KEY, 'true')
    }, 300)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const validateForm = (): boolean => {
    // Check required fields
    for (const field of popupConfig.fields) {
      if (field.required && !formData[field.name]) {
        setErrorMessage(`${field.label} is required`)
        return false
      }
    }

    // Email validation
    const emailField = popupConfig.fields.find(f => f.type === 'email')
    if (emailField && formData[emailField.name]) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData[emailField.name])) {
        setErrorMessage('Please enter a valid email address')
        return false
      }
    }

    // Phone validation
    const phoneField = popupConfig.fields.find(f => f.type === 'tel')
    if (phoneField && formData[phoneField.name]) {
      const phoneRegex = /^[\d\s+()-]{10,}$/
      if (!phoneRegex.test(formData[phoneField.name])) {
        setErrorMessage('Please enter a valid phone number')
        return false
      }
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const payload = {
        ...formData,
        source: 'reflowtoilets.com', // Always use this source - Apps Script routes to ReFlow sheet
        timestamp: new Date().toISOString(),
        page: getCurrentPage(),
        popupType: popupConfig.crmSource // Track which popup variant for analytics
      }

      await fetch(CRM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      // Since we're using no-cors, we can't read the response
      // Assume success if no error is thrown
      setSubmitStatus('success')

      // Auto-close after 3 seconds
      setTimeout(() => {
        handleClose()
      }, 3000)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.closing : ''}`}
      onClick={handleOverlayClick}
    >
      {/* Popup Card */}
      <div
        className={`${styles.popup} ${isClosing ? styles.popupClosing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close popup"
        >
          <svg className={styles.closeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className={styles.content}>
          {submitStatus === 'success' ? (
            // Success Message
            <div className={styles.successContainer}>
              <div className={styles.successIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={styles.successTitle}>Thank You!</h3>
              <p className={styles.successText}>We'll contact you within 24 hours with details for your district.</p>
            </div>
          ) : (
            <>
              {/* Heading */}
              <h2 className={styles.heading}>
                {popupConfig.heading}
              </h2>

              {/* Subheading */}
              <p className={styles.subheading}>
                {popupConfig.subheading}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className={styles.form}>
                {popupConfig.fields.map(field => (
                  <div key={field.name} className={styles.fieldGroup}>
                    <label htmlFor={field.name} className={styles.label}>
                      {field.label} {field.required && <span className={styles.required}>*</span>}
                    </label>

                    {field.type === 'dropdown' ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleInputChange}
                        required={field.required}
                        className={styles.select}
                      >
                        {field.options?.map(option => (
                          <option key={option} value={option === field.options![0] ? '' : option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={styles.input}
                      />
                    )}
                  </div>
                ))}

                {/* Error Message */}
                {errorMessage && (
                  <div className={styles.errorContainer}>
                    <p className={styles.errorText}>{errorMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? 'Submitting...' : popupConfig.buttonText}
                </button>

                {/* Benefits */}
                <div className={styles.benefits}>
                  {popupConfig.benefits.map((benefit, index) => (
                    <p key={index} className={styles.benefit}>
                      {benefit}
                    </p>
                  ))}
                </div>

                {/* No Thanks Link */}
                <div className={styles.noThanks}>
                  <button
                    type="button"
                    onClick={handleClose}
                    className={styles.noThanksButton}
                  >
                    No thanks
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

