'use client'

import { useState } from 'react'
import styles from './PartnerApplicationForm.module.css'

interface FormData {
  // Step 1: Personal Info
  name: string
  email: string
  phone: string

  // Step 2: Business Info
  partnershipModel: string
  businessType: string
  experience: string
  investment: string

  // Step 3: Preferences
  preferredLocations: string[]
  numberOfUnits: string
  startTimeline: string

  // Step 4: Additional
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function PartnerApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    partnershipModel: '',
    businessType: '',
    experience: '',
    investment: '',
    preferredLocations: [],
    numberOfUnits: '',
    startTimeline: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const totalSteps = 4

  const partnershipModels = [
    { value: 'cafe', label: 'Café/Food Kiosk', icon: '☕' },
    { value: 'retail', label: 'Retail/Convenience Store', icon: '🛒' },
    { value: 'advertising', label: 'Advertising & Branding', icon: '📺' },
    { value: 'services', label: 'Value-Added Services', icon: '⚡' },
    { value: 'pos', label: 'Point-of-Sale Systems', icon: '💳' },
  ]

  const locationOptions = [
    'Hyderabad',
    'Bangalore',
    'Chennai',
    'Mumbai',
    'Delhi NCR',
    'Pune',
    'Kolkata',
    'Other (specify in message)',
  ]

  const validateField = (name: string, value: string | string[]): string | undefined => {
    switch (name) {
      case 'name':
        if (!value || (typeof value === 'string' && !value.trim())) return 'Name is required'
        if (typeof value === 'string' && value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value || (typeof value === 'string' && !value.trim())) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (typeof value === 'string' && !emailRegex.test(value)) return 'Please enter a valid email address'
        return undefined
      case 'phone':
        if (!value || (typeof value === 'string' && !value.trim())) return 'Phone is required'
        const phoneRegex = /^[\d\s\-\+\(\)]+$/
        if (typeof value === 'string' && !phoneRegex.test(value)) return 'Please enter a valid phone number'
        return undefined
      case 'partnershipModel':
        if (!value) return 'Please select a partnership model'
        return undefined
      case 'businessType':
        if (!value || (typeof value === 'string' && !value.trim())) return 'Business type is required'
        return undefined
      case 'experience':
        if (!value) return 'Please select your experience level'
        return undefined
      case 'investment':
        if (!value) return 'Please select your investment capacity'
        return undefined
      case 'preferredLocations':
        if (Array.isArray(value) && value.length === 0) return 'Please select at least one location'
        return undefined
      case 'numberOfUnits':
        if (!value) return 'Please select number of units'
        return undefined
      case 'startTimeline':
        if (!value) return 'Please select a start timeline'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error || '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const checkboxValue = (e.target as HTMLInputElement).value
      const currentValues = formData.preferredLocations
      const newValues = currentValues.includes(checkboxValue)
        ? currentValues.filter(v => v !== checkboxValue)
        : [...currentValues, checkboxValue]

      setFormData({ ...formData, preferredLocations: newValues })

      if (touched.preferredLocations) {
        const error = validateField('preferredLocations', newValues)
        setErrors({ ...errors, preferredLocations: error || '' })
      }
    } else {
      setFormData({ ...formData, [name]: value })

      if (touched[name]) {
        const error = validateField(name, value)
        setErrors({ ...errors, [name]: error || '' })
      }
    }
  }

  const validateStep = (step: number): boolean => {
    let fieldsToValidate: string[] = []

    switch (step) {
      case 1:
        fieldsToValidate = ['name', 'email', 'phone']
        break
      case 2:
        fieldsToValidate = ['partnershipModel', 'businessType', 'experience', 'investment']
        break
      case 3:
        fieldsToValidate = ['preferredLocations', 'numberOfUnits', 'startTimeline']
        break
      case 4:
        fieldsToValidate = [] // Message is optional
        break
    }

    const newErrors: FormErrors = {}
    const newTouched: { [key: string]: boolean } = {}

    fieldsToValidate.forEach((field) => {
      newTouched[field] = true
      const value = field === 'preferredLocations' ? formData.preferredLocations : formData[field as keyof FormData]
      const error = validateField(field, value as string | string[])
      if (error) newErrors[field] = error
    })

    setTouched({ ...touched, ...newTouched })
    setErrors({ ...errors, ...newErrors })

    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(currentStep)) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.businessType,
        subject: `Partner Application - ${partnershipModels.find(m => m.value === formData.partnershipModel)?.label}`,
        message: `
Partnership Application:

Partnership Model: ${partnershipModels.find(m => m.value === formData.partnershipModel)?.label}
Business Type: ${formData.businessType}
Experience: ${formData.experience}
Investment Capacity: ${formData.investment}
Preferred Locations: ${formData.preferredLocations.join(', ')}
Number of Units: ${formData.numberOfUnits}
Start Timeline: ${formData.startTimeline}

Additional Message:
${formData.message || 'N/A'}
        `.trim(),
        source: 'reflowtoilets.com/partners', // Routes to Partner Applications sheet
      }

      await fetch('https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      setSubmitStatus('success')

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        partnershipModel: '',
        businessType: '',
        experience: '',
        investment: '',
        preferredLocations: [],
        numberOfUnits: '',
        startTimeline: '',
        message: '',
      })
      setCurrentStep(1)
      setTouched({})
      setErrors({})

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 10000)

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

  return (
    <div className={styles.formContainer}>
      {submitStatus === 'success' ? (
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h3>Application Submitted Successfully!</h3>
          <p>
            Thank you for your interest in partnering with ReFlow. Our team will review your application and contact you within 2-3 business days.
          </p>
          <p className={styles.successNote}>
            <strong>Next Steps:</strong><br />
            1. Application review (2-3 days)<br />
            2. Initial consultation call<br />
            3. Location assessment<br />
            4. Partnership agreement
          </p>
          <button onClick={() => setSubmitStatus('idle')} className={styles.primaryButton}>
            Submit Another Application
          </button>
        </div>
      ) : (
        <>
          {/* Progress Indicator */}
          <div className={styles.progressBar}>
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`${styles.progressStep} ${currentStep >= step ? styles.activeStep : ''} ${currentStep > step ? styles.completedStep : ''}`}
              >
                <div className={styles.progressStepNumber}>{currentStep > step ? '✓' : step}</div>
                <div className={styles.progressStepLabel}>
                  {step === 1 && 'Personal Info'}
                  {step === 2 && 'Business Details'}
                  {step === 3 && 'Preferences'}
                  {step === 4 && 'Review & Submit'}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className={styles.formStep}>
                <h3 className={styles.stepTitle}>Personal Information</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ''}`}
                    aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                    aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                  />
                  {touched.name && errors.name && (
                    <span id="name-error" className={styles.errorMessage} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
                    aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <span id="email-error" className={styles.errorMessage} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91-XXXXXXXXXX"
                    className={`${styles.input} ${touched.phone && errors.phone ? styles.inputError : ''}`}
                    aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
                    aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                  />
                  {touched.phone && errors.phone && (
                    <span id="phone-error" className={styles.errorMessage} role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Business Info */}
            {currentStep === 2 && (
              <div className={styles.formStep}>
                <h3 className={styles.stepTitle}>Business Details</h3>

                <div className={styles.formGroup}>
                  <label>Partnership Model *</label>
                  <div className={styles.radioGrid}>
                    {partnershipModels.map((model) => (
                      <label key={model.value} className={styles.radioCard}>
                        <input
                          type="radio"
                          name="partnershipModel"
                          value={model.value}
                          checked={formData.partnershipModel === model.value}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className={styles.radioCardContent}>
                          <span className={styles.radioCardIcon}>{model.icon}</span>
                          <span className={styles.radioCardLabel}>{model.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {touched.partnershipModel && errors.partnershipModel && (
                    <span className={styles.errorMessage} role="alert">
                      {errors.partnershipModel}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="businessType">Business Type/Current Occupation *</label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g., Café Owner, Entrepreneur, Corporate Professional"
                    className={`${styles.input} ${touched.businessType && errors.businessType ? styles.inputError : ''}`}
                  />
                  {touched.businessType && errors.businessType && (
                    <span className={styles.errorMessage} role="alert">
                      {errors.businessType}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="experience">Business Experience *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.select} ${touched.experience && errors.experience ? styles.inputError : ''}`}
                  >
                    <option value="">Select experience level</option>
                    <option value="first-time">First-time entrepreneur</option>
                    <option value="1-3-years">1-3 years</option>
                    <option value="3-5-years">3-5 years</option>
                    <option value="5-10-years">5-10 years</option>
                    <option value="10-plus-years">10+ years</option>
                  </select>
                  {touched.experience && errors.experience && (
                    <span className={styles.errorMessage} role="alert">
                      {errors.experience}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="investment">Investment Capacity *</label>
                  <select
                    id="investment"
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.select} ${touched.investment && errors.investment ? styles.inputError : ''}`}
                  >
                    <option value="">Select investment range</option>
                    <option value="under-1L">Under ₹1 Lakh</option>
                    <option value="1-3L">₹1-3 Lakhs</option>
                    <option value="3-5L">₹3-5 Lakhs</option>
                    <option value="5-8L">₹5-8 Lakhs</option>
                    <option value="8L-plus">₹8 Lakhs+</option>
                  </select>
                  {touched.investment && errors.investment && (
                    <span className={styles.errorMessage} role="alert">
                      {errors.investment}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className={styles.formStep}>
                <h3 className={styles.stepTitle}>Partnership Preferences</h3>

                <div className={styles.formGroup}>
                  <label>Preferred Locations * (Select all that apply)</label>
                  <div className={styles.checkboxGrid}>
                    {locationOptions.map((location) => (
                      <label key={location} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="preferredLocations"
                          value={location}
                          checked={formData.preferredLocations.includes(location)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span>{location}</span>
                      </label>
                    ))}
                  </div>
                  {touched.preferredLocations && errors.preferredLocations && (
                    <span className={styles.errorMessage} role="alert">
                      {errors.preferredLocations}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="numberOfUnits">Number of Units Interested In *</label>
                  <select
                    id="numberOfUnits"
                    name="numberOfUnits"
                    value={formData.numberOfUnits}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.select} ${touched.numberOfUnits && errors.numberOfUnits ? styles.inputError : ''}`}
                  >
                    <option value="">Select number of units</option>
                    <option value="1">1 unit (Single location)</option>
                    <option value="2-5">2-5 units</option>
                    <option value="6-10">6-10 units</option>
                    <option value="10-plus">10+ units (Multi-location franchise)</option>
                  </select>
                  {touched.numberOfUnits && errors.numberOfUnits && (
                    <span className={styles.errorMessage} role="alert">
                      {errors.numberOfUnits}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="startTimeline">Preferred Start Timeline *</label>
                  <select
                    id="startTimeline"
                    name="startTimeline"
                    value={formData.startTimeline}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.select} ${touched.startTimeline && errors.startTimeline ? styles.inputError : ''}`}
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (Within 1 month)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                  {touched.startTimeline && errors.startTimeline && (
                    <span className={styles.errorMessage} role="alert">
                      {errors.startTimeline}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Review & Additional Message */}
            {currentStep === 4 && (
              <div className={styles.formStep}>
                <h3 className={styles.stepTitle}>Review & Submit</h3>

                <div className={styles.reviewSection}>
                  <h4>Application Summary</h4>

                  <div className={styles.reviewGrid}>
                    <div className={styles.reviewItem}>
                      <strong>Name:</strong> {formData.name}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Email:</strong> {formData.email}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Phone:</strong> {formData.phone}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Partnership Model:</strong> {partnershipModels.find(m => m.value === formData.partnershipModel)?.label}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Business Type:</strong> {formData.businessType}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Experience:</strong> {formData.experience}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Investment:</strong> {formData.investment}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Preferred Locations:</strong> {formData.preferredLocations.join(', ')}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Number of Units:</strong> {formData.numberOfUnits}
                    </div>
                    <div className={styles.reviewItem}>
                      <strong>Start Timeline:</strong> {formData.startTimeline}
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Additional Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Any additional information you'd like to share about your application..."
                    className={styles.textarea}
                  />
                </div>

                <div className={styles.termsSection}>
                  <p>
                    By submitting this application, you acknowledge that ReFlow (operated by Ixora Group) will review your information and contact you regarding partnership opportunities. All information provided will be kept confidential.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className={styles.formActions}>
              {currentStep > 1 && (
                <button type="button" onClick={handlePrevious} className={styles.secondaryButton}>
                  Previous
                </button>
              )}

              {currentStep < totalSteps ? (
                <button type="button" onClick={handleNext} className={styles.primaryButton}>
                  Next Step
                </button>
              ) : (
                <button type="submit" className={styles.primaryButton} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              )}
            </div>

            {submitStatus === 'error' && (
              <p className={styles.formError}>
                ❌ Something went wrong. Please try again or call us at +91-9494330442.
              </p>
            )}
          </form>
        </>
      )}
    </div>
  )
}
