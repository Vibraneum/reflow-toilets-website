'use client'

import { useState, useRef } from 'react'
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

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    toilets: 25,
    dailyUsers: 500,
    waterCostPerKL: 50,
    electricityCostPerUnit: 8,
    maintenanceStaff: 10,
    laborCostPerStaff: 15000,
  })

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

  // Export PDF function (simplified - would use a library like jsPDF in production)
  const handleExportPDF = () => {
    alert('PDF export feature would be implemented with jsPDF library in production. This would generate a comprehensive business case document with all calculations and government program alignments.')
  }

  // Email results
  const handleEmailResults = () => {
    const subject = encodeURIComponent('ReFlow Toilets ROI Calculator Results')
    const body = encodeURIComponent(`
ROI Calculator Results - ReFlow Toilets B-CRT

Deployment Configuration:
- Number of Toilets: ${inputs.toilets}
- Daily Users per Toilet: ${inputs.dailyUsers}

20-Year Financial Summary:
- Total Cost of Ownership (B-CRT): ${formatCurrency(bcrtTCO)}
- Total Cost of Ownership (Traditional): ${formatCurrency(tradTCO)}
- Total Savings: ${formatCurrency(totalSavings)}
- ROI: ${roiPercentage.toFixed(1)}%
- Payback Period: ${paybackPeriod.toFixed(1)} years

Environmental Impact:
- Water Saved (20 years): ${formatNumber(waterSaved20Years)} KL
- CO2 Reduced: ${formatNumber(co2Reduced)} kg

Request a detailed feasibility study: https://www.reflowtoilets.com/contact
    `)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
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
    </main>
  )
}
