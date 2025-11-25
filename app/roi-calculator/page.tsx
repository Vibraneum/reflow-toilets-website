'use client'

import { useState, useRef } from 'react'
import { jsPDF } from 'jspdf'
import styles from './page.module.css'
import LuxuryButton from '@/components/LuxuryButton'

interface CalculatorInputs {
  toilets: number
  dailyUsers: number
  waterCostPerKL: number
  electricityCostPerUnit: number
  maintenanceStaff: number
  laborCostPerStaff: number
}

interface LeadFormData {
  name: string
  email: string
  phone: string
  district: string
  designation: string
}

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    toilets: 25,
    dailyUsers: 500,
    waterCostPerKL: 50,
    electricityCostPerUnit: 8,
    maintenanceStaff: 10,
    laborCostPerStaff: 15000,
  })

  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadFormData, setLeadFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    district: '',
    designation: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [exportAction, setExportAction] = useState<'pdf' | 'email' | null>(null)

  const resultsRef = useRef<HTMLDivElement>(null)

  // B-CRT Constants (Per Toilet)
  const BCRT_CAPEX = 650000 // ₹6.5L per toilet
  const BCRT_ANNUAL_MAINTENANCE = 15000 // ₹15K per year
  const BCRT_WATER_USAGE_PER_DAY = 0 // Zero discharge
  const BCRT_ELECTRICITY_PER_DAY = 12 // 12 units per day (solar offset available)
  const BCRT_STAFF_REDUCTION = 0.6 // 60% staff reduction

  // Traditional Sewered Constants (Per Toilet)
  const TRAD_CAPEX = 850000 // ₹8.5L per toilet (including sewerage connection)
  const TRAD_ANNUAL_MAINTENANCE = 45000 // ₹45K per year
  const TRAD_WATER_USAGE_PER_DAY = 800 // 800L per day per toilet
  const TRAD_ELECTRICITY_PER_DAY = 20 // 20 units per day

  // Calculations
  const years = 20 // 20-year TCO

  // CAPEX Comparison
  const bcrtCapex = BCRT_CAPEX * inputs.toilets
  const tradCapex = TRAD_CAPEX * inputs.toilets

  // Annual OPEX - B-CRT
  const bcrtAnnualMaintenance = BCRT_ANNUAL_MAINTENANCE * inputs.toilets
  const bcrtAnnualWater = (BCRT_WATER_USAGE_PER_DAY * 365 * inputs.toilets * inputs.waterCostPerKL) / 1000
  const bcrtAnnualElectricity = BCRT_ELECTRICITY_PER_DAY * 365 * inputs.toilets * inputs.electricityCostPerUnit
  const bcrtStaffRequired = Math.ceil(inputs.maintenanceStaff * (1 - BCRT_STAFF_REDUCTION))
  const bcrtAnnualLabor = bcrtStaffRequired * inputs.laborCostPerStaff * 12

  const bcrtTotalAnnualOpex = bcrtAnnualMaintenance + bcrtAnnualWater + bcrtAnnualElectricity + bcrtAnnualLabor

  // Annual OPEX - Traditional
  const tradAnnualMaintenance = TRAD_ANNUAL_MAINTENANCE * inputs.toilets
  const tradAnnualWater = (TRAD_WATER_USAGE_PER_DAY * 365 * inputs.toilets * inputs.waterCostPerKL) / 1000
  const tradAnnualElectricity = TRAD_ELECTRICITY_PER_DAY * 365 * inputs.toilets * inputs.electricityCostPerUnit
  const tradAnnualLabor = inputs.maintenanceStaff * inputs.laborCostPerStaff * 12

  const tradTotalAnnualOpex = tradAnnualMaintenance + tradAnnualWater + tradAnnualElectricity + tradAnnualLabor

  // 20-Year TCO
  const bcrtTCO = bcrtCapex + (bcrtTotalAnnualOpex * years)
  const tradTCO = tradCapex + (tradTotalAnnualOpex * years)

  // Savings
  const totalSavings = tradTCO - bcrtTCO
  const annualSavings = tradTotalAnnualOpex - bcrtTotalAnnualOpex
  const paybackPeriod = (bcrtCapex - tradCapex) / annualSavings
  const roiPercentage = ((totalSavings / bcrtTCO) * 100)

  // Environmental Impact
  const waterSavedPerYear = ((TRAD_WATER_USAGE_PER_DAY - BCRT_WATER_USAGE_PER_DAY) * 365 * inputs.toilets) / 1000 // KL
  const waterSaved20Years = waterSavedPerYear * years
  const co2Reduced = waterSaved20Years * 0.5 // 0.5kg CO2 per KL water

  // Social Impact
  const jobsCreated = bcrtStaffRequired + Math.ceil(inputs.toilets * 0.1) // Maintenance staff + tech support
  const usersServed = inputs.dailyUsers * inputs.toilets * 365 * years

  // Format helpers
  const formatCurrency = (amount: number) => {
    const absAmount = Math.abs(amount)
    if (absAmount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`
    } else if (absAmount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`
    } else {
      return `₹${(amount / 1000).toFixed(0)}K`
    }
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-IN', { maximumFractionDigits: 0 })
  }

  // Submit lead to Google Sheets CRM
  const submitLeadToCRM = async (action: 'pdf' | 'email') => {
    try {
      const submissionData = {
        name: leadFormData.name,
        email: leadFormData.email,
        phone: leadFormData.phone || '',
        company: leadFormData.district,
        subject: `ROI Calculator - ${action === 'pdf' ? 'PDF Export' : 'Email Results'}`,
        message: `
Designation: ${leadFormData.designation}
District/Organization: ${leadFormData.district}

ROI Calculator Configuration:
- Toilets: ${inputs.toilets}
- Daily Users: ${inputs.dailyUsers}
- Water Cost: ₹${inputs.waterCostPerKL}/KL
- Electricity Cost: ₹${inputs.electricityCostPerUnit}/unit

Results:
- B-CRT TCO (20yr): ${formatCurrency(bcrtTCO)}
- Traditional TCO (20yr): ${formatCurrency(tradTCO)}
- Total Savings: ${formatCurrency(totalSavings)}
- ROI: ${roiPercentage.toFixed(1)}%
- Payback: ${paybackPeriod.toFixed(1)} years
- Water Saved: ${formatNumber(waterSaved20Years)} KL
- CO2 Reduced: ${formatNumber(co2Reduced)} kg
        `.trim(),
        source: 'reflowtoilets.com/roi-calculator'
      }

      await fetch('https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })
    } catch (error) {
      console.error('CRM submission error:', error)
    }
  }

  // Generate PDF with jsPDF
  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    let yPos = 20

    // Helper function for centered text
    const centerText = (text: string, y: number, fontSize: number = 12) => {
      doc.setFontSize(fontSize)
      const textWidth = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor
      const x = (pageWidth - textWidth) / 2
      doc.text(text, x, y)
    }

    // Header
    doc.setFillColor(29, 29, 31)
    doc.rect(0, 0, pageWidth, 45, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    centerText('ReFlow Toilets', 20, 24)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    centerText('District ROI Analysis Report', 32, 14)

    // Reset text color
    doc.setTextColor(29, 29, 31)
    yPos = 60

    // Generated info
    doc.setFontSize(10)
    doc.setTextColor(134, 134, 139)
    doc.text(`Generated: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, 14, yPos)
    doc.text(`Prepared for: ${leadFormData.name}`, pageWidth - 14 - doc.getTextWidth(`Prepared for: ${leadFormData.name}`), yPos)
    yPos += 15

    // Executive Summary Box
    doc.setFillColor(251, 251, 253)
    doc.roundedRect(14, yPos, pageWidth - 28, 45, 3, 3, 'F')

    doc.setTextColor(29, 29, 31)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Executive Summary', 20, yPos + 12)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`Deployment: ${inputs.toilets} B-CRT units serving ${formatNumber(inputs.dailyUsers * inputs.toilets)} daily users`, 20, yPos + 24)
    doc.text(`20-Year Savings: ${formatCurrency(totalSavings)} | ROI: ${roiPercentage.toFixed(1)}% | Payback: ${paybackPeriod > 0 ? paybackPeriod.toFixed(1) + ' years' : 'Immediate'}`, 20, yPos + 34)

    yPos += 55

    // Financial Comparison Section
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Financial Comparison (20-Year Analysis)', 14, yPos)
    yPos += 10

    // Table headers
    doc.setFillColor(29, 29, 31)
    doc.rect(14, yPos, pageWidth - 28, 8, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text('Category', 18, yPos + 6)
    doc.text('Traditional Sewered', 80, yPos + 6)
    doc.text('ReFlow B-CRT', 130, yPos + 6)
    doc.text('Savings', 175, yPos + 6)
    yPos += 8

    // Table rows
    doc.setTextColor(29, 29, 31)
    doc.setFont('helvetica', 'normal')

    const tableData = [
      ['CAPEX (Total)', formatCurrency(tradCapex), formatCurrency(bcrtCapex), formatCurrency(tradCapex - bcrtCapex)],
      ['Annual Maintenance', formatCurrency(tradAnnualMaintenance), formatCurrency(bcrtAnnualMaintenance), formatCurrency(tradAnnualMaintenance - bcrtAnnualMaintenance)],
      ['Annual Water Cost', formatCurrency(tradAnnualWater), '₹0 (Zero Discharge)', formatCurrency(tradAnnualWater)],
      ['Annual Electricity', formatCurrency(tradAnnualElectricity), formatCurrency(bcrtAnnualElectricity), formatCurrency(tradAnnualElectricity - bcrtAnnualElectricity)],
      ['Annual Labor', formatCurrency(tradAnnualLabor), formatCurrency(bcrtAnnualLabor), formatCurrency(tradAnnualLabor - bcrtAnnualLabor)],
      ['Total Annual OPEX', formatCurrency(tradTotalAnnualOpex), formatCurrency(bcrtTotalAnnualOpex), formatCurrency(annualSavings)],
      ['20-Year TCO', formatCurrency(tradTCO), formatCurrency(bcrtTCO), formatCurrency(totalSavings)],
    ]

    tableData.forEach((row, i) => {
      if (i % 2 === 0) {
        doc.setFillColor(251, 251, 253)
        doc.rect(14, yPos, pageWidth - 28, 7, 'F')
      }
      if (i === tableData.length - 1) {
        doc.setFont('helvetica', 'bold')
        doc.setFillColor(52, 211, 153, 30)
        doc.rect(14, yPos, pageWidth - 28, 7, 'F')
      }
      doc.text(row[0], 18, yPos + 5)
      doc.text(row[1], 80, yPos + 5)
      doc.text(row[2], 130, yPos + 5)
      doc.setTextColor(16, 185, 129)
      doc.text(row[3], 175, yPos + 5)
      doc.setTextColor(29, 29, 31)
      doc.setFont('helvetica', 'normal')
      yPos += 7
    })

    yPos += 15

    // Environmental Impact Section
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Environmental & Social Impact', 14, yPos)
    yPos += 10

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')

    const impactData = [
      ['Water Saved (20 years)', `${formatNumber(waterSaved20Years)} KL`, 'Zero discharge technology'],
      ['CO2 Emissions Reduced', `${formatNumber(co2Reduced)} kg`, `Equivalent to ${formatNumber(Math.round(co2Reduced / 20))} trees planted`],
      ['Jobs Created', `${jobsCreated} positions`, 'Skilled maintenance & tech support'],
      ['Citizens Served', `${formatNumber(usersServed / 1000000)}M+ uses`, 'Over 20-year operation period'],
    ]

    impactData.forEach((row) => {
      doc.setFont('helvetica', 'bold')
      doc.text(row[0] + ':', 18, yPos)
      doc.setFont('helvetica', 'normal')
      doc.text(row[1], 70, yPos)
      doc.setTextColor(134, 134, 139)
      doc.text(row[2], 110, yPos)
      doc.setTextColor(29, 29, 31)
      yPos += 7
    })

    yPos += 10

    // Government Programs Section
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Government Program Alignment', 14, yPos)
    yPos += 8

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')

    const programs = [
      'SBM 2.0: Eligible for Swachh Bharat Mission 2.0 grants (up to 60% central funding)',
      'Smart Cities Mission: IoT-enabled infrastructure qualifies for SCM funding',
      'ODF++ Certification: Direct pathway to ODF++ status with sustainable sanitation',
      'CRZ Compliance: Zero discharge meets Coastal Regulation Zone requirements',
    ]

    programs.forEach((program) => {
      doc.text('• ' + program, 18, yPos)
      yPos += 6
    })

    // Footer
    yPos = 280
    doc.setFillColor(29, 29, 31)
    doc.rect(0, yPos - 5, pageWidth, 20, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(9)
    centerText('ReFlow Toilets by iRise Toilets Pvt. Ltd. | www.reflowtoilets.com | +91 9494330442', yPos + 5, 9)

    // Save PDF
    doc.save(`ReFlow_ROI_Analysis_${leadFormData.district.replace(/\s+/g, '_') || 'District'}_${new Date().toISOString().split('T')[0]}.pdf`)
  }

  // Handle export button click - show lead form
  const handleExportPDF = () => {
    setExportAction('pdf')
    setShowLeadForm(true)
  }

  // Handle email button click - show lead form
  const handleEmailResults = () => {
    setExportAction('email')
    setShowLeadForm(true)
  }

  // Process export after lead form submission
  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit lead to CRM
      await submitLeadToCRM(exportAction!)

      // Perform the export action
      if (exportAction === 'pdf') {
        generatePDF()
      } else if (exportAction === 'email') {
        const subject = encodeURIComponent('ReFlow Toilets ROI Calculator Results')
        const body = encodeURIComponent(`
ROI Calculator Results - ReFlow Toilets B-CRT

Prepared for: ${leadFormData.name}
District/Organization: ${leadFormData.district}

Deployment Configuration:
- Number of Toilets: ${inputs.toilets}
- Daily Users per Toilet: ${inputs.dailyUsers}

20-Year Financial Summary:
- Total Cost of Ownership (B-CRT): ${formatCurrency(bcrtTCO)}
- Total Cost of Ownership (Traditional): ${formatCurrency(tradTCO)}
- Total Savings: ${formatCurrency(totalSavings)}
- ROI: ${roiPercentage.toFixed(1)}%
- Payback Period: ${paybackPeriod > 0 ? paybackPeriod.toFixed(1) + ' years' : 'Immediate'}

Environmental Impact:
- Water Saved (20 years): ${formatNumber(waterSaved20Years)} KL
- CO2 Reduced: ${formatNumber(co2Reduced)} kg

Request a detailed feasibility study: https://www.reflowtoilets.com/contact
        `)
        window.location.href = `mailto:?subject=${subject}&body=${body}`
      }

      setShowLeadForm(false)
      setLeadFormData({ name: '', email: '', phone: '', district: '', designation: '' })
    } catch (error) {
      console.error('Export error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>District Officials ROI Calculator</h1>
            <p className={styles.heroSubtitle}>
              Calculate your 20-year Total Cost of Ownership and environmental impact with ReFlow B-CRT technology.
              Data-driven insights for informed infrastructure decisions.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.calculatorSection}>
        <div className="container">
          <div className={styles.calculatorGrid}>
            {/* Input Controls */}
            <div className={styles.inputsPanel}>
              <h2 className={styles.panelTitle}>Deployment Parameters</h2>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <span>Number of Toilets to Deploy</span>
                  <span className={styles.value}>{inputs.toilets}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={inputs.toilets}
                  onChange={(e) => setInputs({ ...inputs, toilets: parseInt(e.target.value) })}
                  className={styles.slider}
                />
                <div className={styles.range}>
                  <span>10</span>
                  <span>200</span>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <span>Expected Daily Users (per toilet)</span>
                  <span className={styles.value}>{inputs.dailyUsers}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={inputs.dailyUsers}
                  onChange={(e) => setInputs({ ...inputs, dailyUsers: parseInt(e.target.value) })}
                  className={styles.slider}
                />
                <div className={styles.range}>
                  <span>100</span>
                  <span>2,000</span>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <span>Water Cost (₹ per kiloliter)</span>
                  <span className={styles.value}>₹{inputs.waterCostPerKL}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={inputs.waterCostPerKL}
                  onChange={(e) => setInputs({ ...inputs, waterCostPerKL: parseInt(e.target.value) })}
                  className={styles.slider}
                />
                <div className={styles.range}>
                  <span>₹10</span>
                  <span>₹200</span>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <span>Electricity Cost (₹ per unit)</span>
                  <span className={styles.value}>₹{inputs.electricityCostPerUnit}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.5"
                  value={inputs.electricityCostPerUnit}
                  onChange={(e) => setInputs({ ...inputs, electricityCostPerUnit: parseFloat(e.target.value) })}
                  className={styles.slider}
                />
                <div className={styles.range}>
                  <span>₹5</span>
                  <span>₹20</span>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <span>Current Maintenance Staff Count</span>
                  <span className={styles.value}>{inputs.maintenanceStaff}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={inputs.maintenanceStaff}
                  onChange={(e) => setInputs({ ...inputs, maintenanceStaff: parseInt(e.target.value) })}
                  className={styles.slider}
                />
                <div className={styles.range}>
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <span>Labor Cost per Staff (₹/month)</span>
                  <span className={styles.value}>₹{formatNumber(inputs.laborCostPerStaff)}</span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="40000"
                  step="1000"
                  value={inputs.laborCostPerStaff}
                  onChange={(e) => setInputs({ ...inputs, laborCostPerStaff: parseInt(e.target.value) })}
                  className={styles.slider}
                />
                <div className={styles.range}>
                  <span>₹10K</span>
                  <span>₹40K</span>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className={styles.resultsPanel} ref={resultsRef}>
              <h2 className={styles.panelTitle}>Financial Analysis</h2>

              {/* CAPEX Comparison */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>CAPEX Comparison</h3>
                <div className={styles.comparisonBars}>
                  <div className={styles.barGroup}>
                    <div className={styles.barLabel}>
                      <span>Traditional Sewered</span>
                      <strong>{formatCurrency(tradCapex)}</strong>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={`${styles.barFill} ${styles.traditional}`}
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.barGroup}>
                    <div className={styles.barLabel}>
                      <span>ReFlow B-CRT</span>
                      <strong>{formatCurrency(bcrtCapex)}</strong>
                      <span className={styles.savings}>
                        Save {formatCurrency(tradCapex - bcrtCapex)}
                      </span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={`${styles.barFill} ${styles.bcrt}`}
                        style={{ width: `${(bcrtCapex / tradCapex) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annual OPEX */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Annual OPEX Savings</h3>
                <div className={styles.opexGrid}>
                  <div className={styles.opexCard}>
                    <div className={styles.opexLabel}>Traditional Annual OPEX</div>
                    <div className={styles.opexAmount}>{formatCurrency(tradTotalAnnualOpex)}</div>
                    <div className={styles.opexBreakdown}>
                      <div className={styles.breakdownItem}>
                        <span>Maintenance:</span>
                        <span>{formatCurrency(tradAnnualMaintenance)}</span>
                      </div>
                      <div className={styles.breakdownItem}>
                        <span>Water:</span>
                        <span>{formatCurrency(tradAnnualWater)}</span>
                      </div>
                      <div className={styles.breakdownItem}>
                        <span>Electricity:</span>
                        <span>{formatCurrency(tradAnnualElectricity)}</span>
                      </div>
                      <div className={styles.breakdownItem}>
                        <span>Labor ({inputs.maintenanceStaff} staff):</span>
                        <span>{formatCurrency(tradAnnualLabor)}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.opexCard} ${styles.highlight}`}>
                    <div className={styles.opexLabel}>B-CRT Annual OPEX</div>
                    <div className={styles.opexAmount}>{formatCurrency(bcrtTotalAnnualOpex)}</div>
                    <div className={styles.opexBreakdown}>
                      <div className={styles.breakdownItem}>
                        <span>Maintenance:</span>
                        <span>{formatCurrency(bcrtAnnualMaintenance)}</span>
                      </div>
                      <div className={styles.breakdownItem}>
                        <span>Water:</span>
                        <span className={styles.zero}>₹0</span>
                      </div>
                      <div className={styles.breakdownItem}>
                        <span>Electricity:</span>
                        <span>{formatCurrency(bcrtAnnualElectricity)}</span>
                      </div>
                      <div className={styles.breakdownItem}>
                        <span>Labor ({bcrtStaffRequired} staff):</span>
                        <span>{formatCurrency(bcrtAnnualLabor)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.annualSavingsHighlight}>
                  Annual Savings: <strong>{formatCurrency(annualSavings)}</strong>
                </div>
              </div>

              {/* 20-Year TCO */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>20-Year Total Cost of Ownership</h3>
                <div className={styles.tcoComparison}>
                  <div className={styles.tcoCard}>
                    <div className={styles.tcoSystem}>Traditional Sewered</div>
                    <div className={styles.tcoAmount}>{formatCurrency(tradTCO)}</div>
                  </div>
                  <div className={styles.tcoVs}>vs</div>
                  <div className={`${styles.tcoCard} ${styles.highlight}`}>
                    <div className={styles.tcoSystem}>ReFlow B-CRT</div>
                    <div className={styles.tcoAmount}>{formatCurrency(bcrtTCO)}</div>
                  </div>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className={styles.roiMetrics}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>💰</div>
                  <div className={styles.metricValue}>{formatCurrency(totalSavings)}</div>
                  <div className={styles.metricLabel}>Total Savings (20 years)</div>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>📈</div>
                  <div className={styles.metricValue}>{roiPercentage.toFixed(1)}%</div>
                  <div className={styles.metricLabel}>Return on Investment</div>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>⏱️</div>
                  <div className={styles.metricValue}>
                    {paybackPeriod > 0 ? `${paybackPeriod.toFixed(1)} yrs` : 'Immediate'}
                  </div>
                  <div className={styles.metricLabel}>Payback Period</div>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental & Social Impact */}
          <div className={styles.impactSection}>
            <h2 className={styles.sectionMainTitle}>Environmental & Social Impact</h2>
            <div className={styles.impactGrid}>
              <div className={styles.impactCard}>
                <div className={styles.impactIcon}>💧</div>
                <div className={styles.impactValue}>{formatNumber(waterSaved20Years)} KL</div>
                <div className={styles.impactLabel}>Water Saved (20 years)</div>
                <div className={styles.impactDetail}>
                  Zero discharge technology eliminates water consumption
                </div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactIcon}>🌱</div>
                <div className={styles.impactValue}>{formatNumber(co2Reduced)} kg</div>
                <div className={styles.impactLabel}>CO₂ Emissions Reduced</div>
                <div className={styles.impactDetail}>
                  Equivalent to planting {formatNumber(Math.round(co2Reduced / 20))} trees
                </div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactIcon}>👥</div>
                <div className={styles.impactValue}>{jobsCreated}</div>
                <div className={styles.impactLabel}>Jobs Created</div>
                <div className={styles.impactDetail}>
                  Skilled maintenance & tech support positions
                </div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactIcon}>🚻</div>
                <div className={styles.impactValue}>{formatNumber(usersServed / 1000000)}M+</div>
                <div className={styles.impactLabel}>Users Served</div>
                <div className={styles.impactDetail}>
                  Over 20 years of operation
                </div>
              </div>
            </div>
          </div>

          {/* Government Programs */}
          <div className={styles.governmentSection}>
            <h2 className={styles.sectionMainTitle}>Government Program Alignment</h2>
            <div className={styles.programGrid}>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>🏛️</div>
                <h3 className={styles.programTitle}>SBM 2.0 Funding</h3>
                <p className={styles.programDesc}>
                  Eligible for Swachh Bharat Mission 2.0 grants and subsidies. B-CRT technology aligns with ODF++ standards.
                </p>
                <ul className={styles.programBenefits}>
                  <li>Up to 60% central funding available</li>
                  <li>Accelerated approval for sustainable solutions</li>
                  <li>Priority support for decentralized systems</li>
                </ul>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programIcon}>🌊</div>
                <h3 className={styles.programTitle}>CRZ Compliance Value</h3>
                <p className={styles.programDesc}>
                  Zero discharge technology meets Coastal Regulation Zone requirements without expensive sewerage infrastructure.
                </p>
                <ul className={styles.programBenefits}>
                  <li>No sewage discharge to water bodies</li>
                  <li>Simplified environmental clearances</li>
                  <li>Faster deployment timelines</li>
                </ul>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programIcon}>✅</div>
                <h3 className={styles.programTitle}>ODF++ Certification</h3>
                <p className={styles.programDesc}>
                  Direct pathway to ODF++ (Open Defecation Free Plus Plus) status with sustainable sanitation infrastructure.
                </p>
                <ul className={styles.programBenefits}>
                  <li>Meets all ODF++ criteria</li>
                  <li>Real-time monitoring capabilities</li>
                  <li>Automated compliance reporting</li>
                </ul>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programIcon}>🏙️</div>
                <h3 className={styles.programTitle}>Smart Cities Mission</h3>
                <p className={styles.programDesc}>
                  IoT-enabled smart toilet infrastructure qualifies for Smart Cities Mission funding and recognition.
                </p>
                <ul className={styles.programBenefits}>
                  <li>IoT integration for smart city dashboards</li>
                  <li>Data-driven infrastructure management</li>
                  <li>Enhanced citizen experience metrics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Export Actions */}
          <div className={styles.exportSection}>
            <h2 className={styles.sectionMainTitle}>Share Results with Decision Makers</h2>
            <div className={styles.exportButtons}>
              <button onClick={handleExportPDF} className={styles.exportButton}>
                <span className={styles.buttonIcon}>📄</span>
                <div className={styles.buttonContent}>
                  <div className={styles.buttonTitle}>Export as PDF</div>
                  <div className={styles.buttonDesc}>Comprehensive business case document</div>
                </div>
              </button>
              <button onClick={handleEmailResults} className={styles.exportButton}>
                <span className={styles.buttonIcon}>📧</span>
                <div className={styles.buttonContent}>
                  <div className={styles.buttonTitle}>Email Results</div>
                  <div className={styles.buttonDesc}>Share summary via email</div>
                </div>
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Transform Your District's Sanitation?</h2>
              <p className={styles.ctaText}>
                Schedule a consultation with our infrastructure team for a detailed feasibility study
                tailored to your district's specific requirements.
              </p>
              <div className={styles.ctaButtons}>
                <LuxuryButton href="https://calendar.app.google/5pRiSHEjP851jiNQ7" size="lg">
                  Schedule ROI Consultation
                </LuxuryButton>
                <LuxuryButton href="/contact" variant="outline" size="lg">
                  Request Detailed Proposal
                </LuxuryButton>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className={styles.disclaimer}>
            <p>
              <strong>Disclaimer:</strong> Calculations based on industry averages and typical deployment scenarios.
              Actual costs, savings, and impact may vary based on location, usage patterns, local utility rates,
              terrain, existing infrastructure, and specific district requirements. Contact our team for a detailed
              technical and financial feasibility study customized for your jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showLeadForm && (
        <div className={styles.modalOverlay} onClick={() => setShowLeadForm(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setShowLeadForm(false)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>
                {exportAction === 'pdf' ? '📄' : '📧'}
              </div>
              <h2 className={styles.modalTitle}>
                {exportAction === 'pdf' ? 'Download Your ROI Report' : 'Email Your Results'}
              </h2>
              <p className={styles.modalSubtitle}>
                Enter your details to receive your personalized analysis
              </p>
            </div>

            <form onSubmit={handleLeadFormSubmit} className={styles.leadForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="leadName">Name *</label>
                  <input
                    type="text"
                    id="leadName"
                    required
                    value={leadFormData.name}
                    onChange={(e) => setLeadFormData({ ...leadFormData, name: e.target.value })}
                    placeholder="Your full name"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="leadDesignation">Designation *</label>
                  <input
                    type="text"
                    id="leadDesignation"
                    required
                    value={leadFormData.designation}
                    onChange={(e) => setLeadFormData({ ...leadFormData, designation: e.target.value })}
                    placeholder="e.g., District Collector, Engineer"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="leadEmail">Email *</label>
                  <input
                    type="email"
                    id="leadEmail"
                    required
                    value={leadFormData.email}
                    onChange={(e) => setLeadFormData({ ...leadFormData, email: e.target.value })}
                    placeholder="official@district.gov.in"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="leadPhone">Phone</label>
                  <input
                    type="tel"
                    id="leadPhone"
                    value={leadFormData.phone}
                    onChange={(e) => setLeadFormData({ ...leadFormData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="leadDistrict">District / Organization *</label>
                <input
                  type="text"
                  id="leadDistrict"
                  required
                  value={leadFormData.district}
                  onChange={(e) => setLeadFormData({ ...leadFormData, district: e.target.value })}
                  placeholder="e.g., Hyderabad Municipal Corporation"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formSummary}>
                <h4>Your ROI Summary</h4>
                <div className={styles.summaryGrid}>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Toilets</span>
                    <span className={styles.summaryValue}>{inputs.toilets}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>20-Yr Savings</span>
                    <span className={styles.summaryValue}>{formatCurrency(totalSavings)}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>ROI</span>
                    <span className={styles.summaryValue}>{roiPercentage.toFixed(1)}%</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Payback</span>
                    <span className={styles.summaryValue}>{paybackPeriod > 0 ? paybackPeriod.toFixed(1) + ' yrs' : 'Immediate'}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Processing...'
                ) : exportAction === 'pdf' ? (
                  <>
                    <span>📥</span> Download PDF Report
                  </>
                ) : (
                  <>
                    <span>📧</span> Send via Email
                  </>
                )}
              </button>

              <p className={styles.privacyNote}>
                Your information is secure and will only be used to follow up on your infrastructure inquiry.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
