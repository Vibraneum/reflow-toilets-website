'use client'

import { useState } from 'react'
import styles from './page.module.css'

// Types
interface ConfiguratorData {
  // Step 1: Customer Type
  customerType: 'district' | 'municipality' | 'community' | 'society' | 'commercial' | ''

  // Step 2: Needs Assessment
  populationFootfall: number
  geographicArea: number
  hasWater: boolean
  hasElectricity: boolean
  hasSewage: boolean
  budgetRange: 'low' | 'medium' | 'high' | 'custom' | ''
  customBudget?: number

  // Step 3: Product Configuration
  bcrtUnits: number
  loocafeIntegration: boolean
  maintenancePackage: 'quarterly' | 'monthly' | 'weekly' | ''
  iotMonitoring: boolean
  securityServices: boolean
  advertisingRevShare: boolean

  // Step 4: Contact Info
  organizationName: string
  contactPerson: string
  email: string
  phone: string
  location: string
}

interface BundlePackage {
  id: string
  name: string
  description: string
  units: number
  maintenance: 'quarterly' | 'monthly' | 'weekly'
  iotIncluded: boolean
  securityIncluded: boolean
  basePrice: number
  features: string[]
  bestFor: string
}

const BUNDLE_PACKAGES: BundlePackage[] = [
  {
    id: 'district-starter',
    name: 'District Starter',
    description: 'Perfect for small districts or pilot programs',
    units: 10,
    maintenance: 'quarterly',
    iotIncluded: true,
    securityIncluded: false,
    basePrice: 6500000, // ₹65L (10 units × ₹6.5L)
    features: [
      '10 B-CRT Units',
      'Basic IoT Monitoring',
      'Quarterly Maintenance',
      '1 Year Warranty',
      'Installation & Training'
    ],
    bestFor: 'Small districts, Pilot programs, Community testing'
  },
  {
    id: 'community-plus',
    name: 'Community Plus',
    description: 'Comprehensive solution for communities and societies',
    units: 5,
    maintenance: 'monthly',
    iotIncluded: true,
    securityIncluded: true,
    basePrice: 4000000, // ₹40L (5 units × ₹6.5L + bundled services)
    features: [
      '5 B-CRT Units',
      'Advanced IoT Dashboard',
      'Monthly Maintenance',
      'Ixora Security Integration',
      '24/7 Monitoring',
      'Revenue Sharing (Ads)'
    ],
    bestFor: 'Gated communities, Apartment complexes, Corporate campuses'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Fully customizable large-scale deployment',
    units: 25,
    maintenance: 'monthly',
    iotIncluded: true,
    securityIncluded: true,
    basePrice: 18000000, // ₹1.8Cr (25 units + full services)
    features: [
      '25+ B-CRT Units',
      'Enterprise IoT Platform',
      'Weekly/Monthly Maintenance',
      'Full Security Suite',
      'LooCafe Network Integration',
      'Revenue Sharing (Ads)',
      'Dedicated Account Manager',
      'Custom SLA'
    ],
    bestFor: 'Large districts, Municipalities, Smart cities'
  }
]

// Pricing Constants (in INR)
const PRICING = {
  BCRT_BASIC: 450000, // ₹4.5L
  BCRT_ADVANCED: 650000, // ₹6.5L
  MAINTENANCE_QUARTERLY: 15000, // per unit per year
  MAINTENANCE_MONTHLY: 20000, // per unit per year
  MAINTENANCE_WEEKLY: 30000, // per unit per year
  IOT_SUBSCRIPTION: 5000, // per unit per year
  SECURITY_BASE: 50000, // per unit per year
  LOOCAFE_INTEGRATION: 100000, // one-time per deployment
  AD_REVENUE_SHARE: 0.15 // 15% of advertising revenue
}

export default function ConfiguratorPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<ConfiguratorData>({
    customerType: '',
    populationFootfall: 10000,
    geographicArea: 5,
    hasWater: true,
    hasElectricity: true,
    hasSewage: false,
    budgetRange: '',
    bcrtUnits: 10,
    loocafeIntegration: false,
    maintenancePackage: '',
    iotMonitoring: true,
    securityServices: false,
    advertisingRevShare: false,
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: ''
  })

  const [selectedBundle, setSelectedBundle] = useState<string | null>(null)
  const [showQuote, setShowQuote] = useState(false)

  // Calculate pricing
  const calculatePricing = () => {
    const unitCost = PRICING.BCRT_ADVANCED * data.bcrtUnits

    let maintenanceCost = 0
    if (data.maintenancePackage === 'quarterly') maintenanceCost = PRICING.MAINTENANCE_QUARTERLY * data.bcrtUnits
    if (data.maintenancePackage === 'monthly') maintenanceCost = PRICING.MAINTENANCE_MONTHLY * data.bcrtUnits
    if (data.maintenancePackage === 'weekly') maintenanceCost = PRICING.MAINTENANCE_WEEKLY * data.bcrtUnits

    const iotCost = data.iotMonitoring ? PRICING.IOT_SUBSCRIPTION * data.bcrtUnits : 0
    const securityCost = data.securityServices ? PRICING.SECURITY_BASE * data.bcrtUnits : 0
    const loocafeCost = data.loocafeIntegration ? PRICING.LOOCAFE_INTEGRATION : 0

    const totalInitial = unitCost + loocafeCost
    const totalAnnual = maintenanceCost + iotCost + securityCost
    const total5Year = totalInitial + (totalAnnual * 5)

    return {
      unitCost,
      maintenanceCost,
      iotCost,
      securityCost,
      loocafeCost,
      totalInitial,
      totalAnnual,
      total5Year
    }
  }

  const pricing = calculatePricing()

  // Format currency
  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`
    } else {
      return `₹${(amount / 1000).toFixed(0)}K`
    }
  }

  // Handle bundle selection
  const handleBundleSelect = (bundleId: string) => {
    const bundle = BUNDLE_PACKAGES.find(b => b.id === bundleId)
    if (!bundle) return

    setSelectedBundle(bundleId)
    setData({
      ...data,
      bcrtUnits: bundle.units,
      maintenancePackage: bundle.maintenance,
      iotMonitoring: bundle.iotIncluded,
      securityServices: bundle.securityIncluded,
      loocafeIntegration: bundleId === 'enterprise',
      advertisingRevShare: bundleId !== 'district-starter'
    })
  }

  // Navigation
  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.customerType !== ''
      case 2:
        return data.budgetRange !== ''
      case 3:
        return data.bcrtUnits > 0 && data.maintenancePackage !== ''
      case 4:
        return data.organizationName && data.contactPerson && data.email && data.phone
      default:
        return true
    }
  }

  // Submit handler
  const handleSubmit = async () => {
    const quote = {
      ...data,
      pricing,
      timestamp: new Date().toISOString(),
      source: 'configurator'
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.contactPerson,
          email: data.email,
          phone: data.phone,
          company: data.organizationName,
          subject: `Configurator Quote - ${data.customerType}`,
          message: `Quote Request:\n\nCustomer Type: ${data.customerType}\nUnits: ${data.bcrtUnits}\nTotal 5-Year Cost: ${formatCurrency(pricing.total5Year)}\n\nFull details in quote object.`,
          source: 'reflowtoilets.com/configure',
          quoteData: JSON.stringify(quote, null, 2)
        })
      })

      setShowQuote(true)
      setCurrentStep(5)
    } catch (error) {
      console.error('Quote submission error:', error)
      alert('Failed to submit quote. Please contact us directly.')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Sanitation Infrastructure Configurator</h1>
          <p className={styles.subtitle}>
            Design your custom ReFlow deployment with instant pricing and ROI projection
          </p>
        </div>

        {/* Progress Indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progress}>
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`${styles.progressStep} ${
                  currentStep >= step ? styles.progressStepActive : ''
                } ${currentStep === step ? styles.progressStepCurrent : ''}`}
              >
                <div className={styles.progressCircle}>{step}</div>
                <div className={styles.progressLabel}>
                  {step === 1 && 'Customer Type'}
                  {step === 2 && 'Needs'}
                  {step === 3 && 'Configuration'}
                  {step === 4 && 'Contact'}
                  {step === 5 && 'Quote'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className={styles.content}>
          {/* Step 1: Customer Type */}
          {currentStep === 1 && (
            <div className={styles.step}>
              <h2 className={styles.stepTitle}>What type of organization are you?</h2>
              <div className={styles.cardGrid}>
                {[
                  { value: 'district', label: 'District/Municipality', icon: '🏛️', desc: 'Government body managing public infrastructure' },
                  { value: 'community', label: 'Community/Society', icon: '🏘️', desc: 'Gated community or residential society' },
                  { value: 'commercial', label: 'Commercial Area', icon: '🏢', desc: 'Business parks, markets, transit hubs' }
                ].map((type) => (
                  <button
                    key={type.value}
                    className={`${styles.typeCard} ${data.customerType === type.value ? styles.typeCardActive : ''}`}
                    onClick={() => setData({ ...data, customerType: type.value as any })}
                  >
                    <span className={styles.typeIcon}>{type.icon}</span>
                    <h3>{type.label}</h3>
                    <p>{type.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Needs Assessment */}
          {currentStep === 2 && (
            <div className={styles.step}>
              <h2 className={styles.stepTitle}>Tell us about your needs</h2>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Population / Daily Footfall</label>
                  <input
                    type="number"
                    value={data.populationFootfall}
                    onChange={(e) => setData({ ...data, populationFootfall: parseInt(e.target.value) || 0 })}
                    className={styles.input}
                  />
                  <p className={styles.hint}>Estimated number of daily users</p>
                </div>

                <div className={styles.formGroup}>
                  <label>Geographic Coverage (sq km)</label>
                  <input
                    type="number"
                    value={data.geographicArea}
                    onChange={(e) => setData({ ...data, geographicArea: parseInt(e.target.value) || 0 })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Existing Infrastructure</label>
                  <div className={styles.checkboxGroup}>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={data.hasWater}
                        onChange={(e) => setData({ ...data, hasWater: e.target.checked })}
                      />
                      <span>Water Connection</span>
                    </label>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={data.hasElectricity}
                        onChange={(e) => setData({ ...data, hasElectricity: e.target.checked })}
                      />
                      <span>Electricity</span>
                    </label>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={data.hasSewage}
                        onChange={(e) => setData({ ...data, hasSewage: e.target.checked })}
                      />
                      <span>Sewage System</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Budget Range</label>
                  <div className={styles.radioGroup}>
                    {[
                      { value: 'low', label: 'Under ₹50L', range: '< ₹50 Lakhs' },
                      { value: 'medium', label: '₹50L - ₹2Cr', range: '₹50L - ₹2 Crores' },
                      { value: 'high', label: 'Above ₹2Cr', range: '> ₹2 Crores' },
                      { value: 'custom', label: 'Custom Budget', range: 'Specify amount' }
                    ].map((budget) => (
                      <label key={budget.value} className={styles.radio}>
                        <input
                          type="radio"
                          name="budget"
                          value={budget.value}
                          checked={data.budgetRange === budget.value}
                          onChange={() => setData({ ...data, budgetRange: budget.value as any })}
                        />
                        <span>{budget.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Product Configuration */}
          {currentStep === 3 && (
            <div className={styles.step}>
              <h2 className={styles.stepTitle}>Choose your package or customize</h2>

              {/* Bundle Packages */}
              <div className={styles.bundleGrid}>
                {BUNDLE_PACKAGES.map((bundle) => (
                  <div
                    key={bundle.id}
                    className={`${styles.bundleCard} ${selectedBundle === bundle.id ? styles.bundleCardActive : ''}`}
                    onClick={() => handleBundleSelect(bundle.id)}
                  >
                    <div className={styles.bundleHeader}>
                      <h3>{bundle.name}</h3>
                      <div className={styles.bundlePrice}>{formatCurrency(bundle.basePrice)}</div>
                    </div>
                    <p className={styles.bundleDesc}>{bundle.description}</p>
                    <ul className={styles.bundleFeatures}>
                      {bundle.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className={styles.bundleBestFor}>
                      <strong>Best for:</strong> {bundle.bestFor}
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Configuration */}
              <div className={styles.customConfig}>
                <h3>Or customize your configuration</h3>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Number of B-CRT Units ({data.bcrtUnits})</label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={data.bcrtUnits}
                      onChange={(e) => setData({ ...data, bcrtUnits: parseInt(e.target.value) })}
                      className={styles.slider}
                    />
                    <div className={styles.sliderRange}>
                      <span>5</span>
                      <span>100</span>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Maintenance Package</label>
                    <select
                      value={data.maintenancePackage}
                      onChange={(e) => setData({ ...data, maintenancePackage: e.target.value as any })}
                      className={styles.select}
                    >
                      <option value="">Select package</option>
                      <option value="quarterly">Quarterly (₹15K/unit/year)</option>
                      <option value="monthly">Monthly (₹20K/unit/year)</option>
                      <option value="weekly">Weekly (₹30K/unit/year)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.addonsGrid}>
                  <label className={styles.addonCard}>
                    <input
                      type="checkbox"
                      checked={data.iotMonitoring}
                      onChange={(e) => setData({ ...data, iotMonitoring: e.target.checked })}
                    />
                    <div className={styles.addonContent}>
                      <h4>IoT Monitoring</h4>
                      <p>Real-time usage analytics and alerts</p>
                      <span className={styles.addonPrice}>+{formatCurrency(PRICING.IOT_SUBSCRIPTION * data.bcrtUnits)}/year</span>
                    </div>
                  </label>

                  <label className={styles.addonCard}>
                    <input
                      type="checkbox"
                      checked={data.securityServices}
                      onChange={(e) => setData({ ...data, securityServices: e.target.checked })}
                    />
                    <div className={styles.addonContent}>
                      <h4>Ixora Security</h4>
                      <p>24/7 monitoring and rapid response</p>
                      <span className={styles.addonPrice}>+{formatCurrency(PRICING.SECURITY_BASE * data.bcrtUnits)}/year</span>
                    </div>
                  </label>

                  <label className={styles.addonCard}>
                    <input
                      type="checkbox"
                      checked={data.loocafeIntegration}
                      onChange={(e) => setData({ ...data, loocafeIntegration: e.target.checked })}
                    />
                    <div className={styles.addonContent}>
                      <h4>LooCafe Network</h4>
                      <p>Integration with 270+ locations</p>
                      <span className={styles.addonPrice}>+{formatCurrency(PRICING.LOOCAFE_INTEGRATION)} one-time</span>
                    </div>
                  </label>

                  <label className={styles.addonCard}>
                    <input
                      type="checkbox"
                      checked={data.advertisingRevShare}
                      onChange={(e) => setData({ ...data, advertisingRevShare: e.target.checked })}
                    />
                    <div className={styles.addonContent}>
                      <h4>Advertising Revenue Share</h4>
                      <p>Earn 15% from ad placements</p>
                      <span className={styles.addonPrice}>Generate revenue</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className={styles.pricingSummary}>
                <h3>Your Configuration</h3>
                <div className={styles.summaryGrid}>
                  <div className={styles.summaryRow}>
                    <span>Initial Investment</span>
                    <strong>{formatCurrency(pricing.totalInitial)}</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Annual Operating Cost</span>
                    <strong>{formatCurrency(pricing.totalAnnual)}/year</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>5-Year Total Cost</span>
                    <strong className={styles.total}>{formatCurrency(pricing.total5Year)}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Information */}
          {currentStep === 4 && (
            <div className={styles.step}>
              <h2 className={styles.stepTitle}>Almost there! Let's finalize your quote</h2>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Organization Name *</label>
                  <input
                    type="text"
                    value={data.organizationName}
                    onChange={(e) => setData({ ...data, organizationName: e.target.value })}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Contact Person *</label>
                  <input
                    type="text"
                    value={data.contactPerson}
                    onChange={(e) => setData({ ...data, contactPerson: e.target.value })}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email *</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Phone *</label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Location</label>
                  <input
                    type="text"
                    value={data.location}
                    onChange={(e) => setData({ ...data, location: e.target.value })}
                    className={styles.input}
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className={styles.reviewSection}>
                <h3>Review Your Configuration</h3>
                <div className={styles.reviewGrid}>
                  <div className={styles.reviewItem}>
                    <label>Customer Type</label>
                    <span>{data.customerType}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <label>B-CRT Units</label>
                    <span>{data.bcrtUnits}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <label>Maintenance</label>
                    <span>{data.maintenancePackage}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <label>IoT Monitoring</label>
                    <span>{data.iotMonitoring ? 'Yes' : 'No'}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <label>Security Services</label>
                    <span>{data.securityServices ? 'Yes' : 'No'}</span>
                  </div>
                  <div className={styles.reviewItem}>
                    <label>5-Year Total</label>
                    <span className={styles.reviewTotal}>{formatCurrency(pricing.total5Year)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Quote */}
          {currentStep === 5 && showQuote && (
            <div className={styles.step}>
              <div className={styles.quoteSuccess}>
                <div className={styles.successIcon}>✓</div>
                <h2>Your Custom Quote is Ready!</h2>
                <p>We've sent a detailed quote to {data.email}</p>
              </div>

              <div className={styles.quoteCard}>
                <h3>Quote Summary</h3>
                <div className={styles.quoteDetails}>
                  <div className={styles.quoteRow}>
                    <span>Organization</span>
                    <strong>{data.organizationName}</strong>
                  </div>
                  <div className={styles.quoteRow}>
                    <span>Configuration</span>
                    <strong>{data.bcrtUnits} B-CRT Units</strong>
                  </div>
                  <div className={styles.quoteRow}>
                    <span>Initial Investment</span>
                    <strong>{formatCurrency(pricing.totalInitial)}</strong>
                  </div>
                  <div className={styles.quoteRow}>
                    <span>Annual Cost</span>
                    <strong>{formatCurrency(pricing.totalAnnual)}/year</strong>
                  </div>
                  <div className={styles.quoteRow}>
                    <span>5-Year Total</span>
                    <strong className={styles.total}>{formatCurrency(pricing.total5Year)}</strong>
                  </div>
                </div>

                <div className={styles.quoteActions}>
                  <a
                    href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    Schedule Consultation
                  </a>
                  <button
                    onClick={() => window.print()}
                    className={styles.secondaryButton}
                  >
                    Download PDF Quote
                  </button>
                </div>
              </div>

              <div className={styles.nextSteps}>
                <h3>What Happens Next?</h3>
                <div className={styles.stepsGrid}>
                  <div className={styles.nextStepCard}>
                    <div className={styles.stepNumber}>1</div>
                    <h4>Consultation Call</h4>
                    <p>Our team will review your requirements and answer any questions</p>
                  </div>
                  <div className={styles.nextStepCard}>
                    <div className={styles.stepNumber}>2</div>
                    <h4>Site Assessment</h4>
                    <p>We'll conduct a detailed feasibility study of your location</p>
                  </div>
                  <div className={styles.nextStepCard}>
                    <div className={styles.stepNumber}>3</div>
                    <h4>Formal Proposal</h4>
                    <p>Receive a comprehensive proposal with deployment timeline</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className={styles.navigation}>
          {currentStep > 1 && currentStep < 5 && (
            <button onClick={prevStep} className={styles.navButtonSecondary}>
              ← Previous
            </button>
          )}
          {currentStep < 4 && (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={styles.navButtonPrimary}
            >
              Continue →
            </button>
          )}
          {currentStep === 4 && (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={styles.navButtonPrimary}
            >
              Get My Quote →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
