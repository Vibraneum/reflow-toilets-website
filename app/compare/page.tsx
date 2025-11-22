'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'

interface ToiletModel {
  id: string
  name: string
  shortName: string
  description: string
  color: string
  // Construction costs (one-time)
  constructionCost: number
  installationDays: number
  // Operating costs (annual)
  waterCostPerYear: number
  electricityCostPerYear: number
  maintenanceCostPerYear: number
  sewageCostPerYear: number
  staffCostPerYear: number
  // Performance metrics
  dailyCapacity: number
  waterRecycling: number // percentage
  solarPowered: boolean
  zeroDischage: boolean
  // Environmental
  waterSavedPerYear: number // liters
  co2SavedPerYear: number // kg
}

const TOILET_MODELS: ToiletModel[] = [
  {
    id: 'reflow',
    name: 'ReFlow B-CRT',
    shortName: 'ReFlow',
    description: '40ft containerized, ISO30500 compliant, zero discharge, 100% solar',
    color: '#34D399',
    constructionCost: 4500000, // ₹45 lakh (estimated for high-tech system)
    installationDays: 7, // Quick deployment
    waterCostPerYear: 0, // Zero - water recycling
    electricityCostPerYear: 0, // Zero - solar powered
    maintenanceCostPerYear: 15000, // ₹15K as mentioned
    sewageCostPerYear: 0, // Zero discharge
    staffCostPerYear: 60000, // Minimal - IoT managed
    dailyCapacity: 3000,
    waterRecycling: 100,
    solarPowered: true,
    zeroDischage: true,
    waterSavedPerYear: 10950000, // 3000 users * 10L/user/day * 365
    co2SavedPerYear: 8500, // From solar + water savings
  },
  {
    id: 'loocafe',
    name: 'LooCafe Model',
    shortName: 'LooCafe',
    description: 'PPP model with attached café, free to use, 270+ locations in Hyderabad',
    color: '#06b6d4',
    constructionCost: 800000, // ₹8 lakh (shipping container + café)
    installationDays: 14,
    waterCostPerYear: 45000, // Municipal water
    electricityCostPerYear: 36000, // Grid electricity
    maintenanceCostPerYear: 60000,
    sewageCostPerYear: 24000,
    staffCostPerYear: 180000, // Café staff + maintenance
    dailyCapacity: 1000, // 200-1500 average
    waterRecycling: 0,
    solarPowered: false,
    zeroDischage: false,
    waterSavedPerYear: 0,
    co2SavedPerYear: 0,
  },
  {
    id: 'sulabh',
    name: 'Sulabh Shauchalaya',
    shortName: 'Sulabh',
    description: 'Pay-and-use model, twin-pit pour-flush technology, self-sustaining',
    color: '#f97316',
    constructionCost: 490000, // ₹4.9 lakh (based on low-cost construction)
    installationDays: 30, // Civil work required
    waterCostPerYear: 38000,
    electricityCostPerYear: 28000,
    maintenanceCostPerYear: 85000, // ₹85K as mentioned
    sewageCostPerYear: 15000,
    staffCostPerYear: 120000, // Collection + maintenance
    dailyCapacity: 500,
    waterRecycling: 0,
    solarPowered: false,
    zeroDischage: false,
    waterSavedPerYear: 0,
    co2SavedPerYear: 0,
  },
  {
    id: 'payuse',
    name: 'Traditional Pay-to-Use',
    shortName: 'Pay-to-Use',
    description: 'Municipal public toilet, ₹2-5 per use, grid-connected infrastructure',
    color: '#8b5cf6',
    constructionCost: 980000, // ₹9.8 lakh (₹98K per seat x 10 seats, govt standard)
    installationDays: 180, // 6 months construction
    waterCostPerYear: 52000,
    electricityCostPerYear: 42000,
    maintenanceCostPerYear: 85000,
    sewageCostPerYear: 36000,
    staffCostPerYear: 240000, // Full-time attendants
    dailyCapacity: 800,
    waterRecycling: 0,
    solarPowered: false,
    zeroDischage: false,
    waterSavedPerYear: 0,
    co2SavedPerYear: 0,
  },
]

export default function ComparePage() {
  const [selectedModels, setSelectedModels] = useState<string[]>(['reflow', 'sulabh'])
  const [numUnits, setNumUnits] = useState(10)
  const [dailyUsers, setDailyUsers] = useState(2000)
  const [yearsToProject, setYearsToProject] = useState(5)
  const [locationType, setLocationType] = useState<'urban' | 'semi-urban' | 'rural'>('urban')

  // Cost multipliers based on location
  const locationMultipliers = {
    urban: { water: 1.2, electricity: 1.1, staff: 1.3 },
    'semi-urban': { water: 1.0, electricity: 1.0, staff: 1.0 },
    rural: { water: 0.8, electricity: 0.9, staff: 0.7 },
  }

  const toggleModel = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      if (selectedModels.length > 1) {
        setSelectedModels(selectedModels.filter(id => id !== modelId))
      }
    } else {
      if (selectedModels.length < 4) {
        setSelectedModels([...selectedModels, modelId])
      }
    }
  }

  const calculations = useMemo(() => {
    return TOILET_MODELS.map(model => {
      const multiplier = locationMultipliers[locationType]

      // Operating costs (annual per unit)
      const annualWaterCost = model.waterCostPerYear * multiplier.water
      const annualElectricityCost = model.electricityCostPerYear * multiplier.electricity
      const annualMaintenanceCost = model.maintenanceCostPerYear
      const annualSewageCost = model.sewageCostPerYear
      const annualStaffCost = model.staffCostPerYear * multiplier.staff

      const totalAnnualOperatingCost =
        annualWaterCost +
        annualElectricityCost +
        annualMaintenanceCost +
        annualSewageCost +
        annualStaffCost

      // Total costs over project period
      const totalConstructionCost = model.constructionCost * numUnits
      const totalOperatingCost = totalAnnualOperatingCost * numUnits * yearsToProject
      const totalCostOfOwnership = totalConstructionCost + totalOperatingCost

      // Per user costs
      const totalUsersServed = dailyUsers * 365 * yearsToProject
      const costPerUser = totalCostOfOwnership / totalUsersServed

      // Environmental impact
      const totalWaterSaved = model.waterSavedPerYear * numUnits * yearsToProject
      const totalCO2Saved = model.co2SavedPerYear * numUnits * yearsToProject

      // ROI calculation (compared to most expensive model)
      const mostExpensive = Math.max(...TOILET_MODELS.map(m => {
        const annualOp = (m.waterCostPerYear * multiplier.water +
                         m.electricityCostPerYear * multiplier.electricity +
                         m.maintenanceCostPerYear +
                         m.sewageCostPerYear +
                         m.staffCostPerYear * multiplier.staff)
        return m.constructionCost * numUnits + annualOp * numUnits * yearsToProject
      }))
      const savings = mostExpensive - totalCostOfOwnership
      const savingsPercentage = (savings / mostExpensive) * 100

      return {
        model,
        annualWaterCost,
        annualElectricityCost,
        annualMaintenanceCost,
        annualSewageCost,
        annualStaffCost,
        totalAnnualOperatingCost,
        totalConstructionCost,
        totalOperatingCost,
        totalCostOfOwnership,
        costPerUser,
        totalWaterSaved,
        totalCO2Saved,
        savings,
        savingsPercentage,
      }
    }).filter(calc => selectedModels.includes(calc.model.id))
  }, [selectedModels, numUnits, dailyUsers, yearsToProject, locationType])

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`
    }
    return `₹${amount.toFixed(0)}`
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(Math.round(num))
  }

  const handlePrint = () => {
    window.print()
  }

  const handleExport = () => {
    const csvContent = generateCSV()
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `toilet-comparison-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const generateCSV = () => {
    const headers = ['Metric', ...calculations.map(c => c.model.shortName)].join(',')
    const rows = [
      ['Construction Cost (Total)', ...calculations.map(c => c.totalConstructionCost)],
      ['Annual Operating Cost (Per Unit)', ...calculations.map(c => c.totalAnnualOperatingCost)],
      ['5-Year TCO', ...calculations.map(c => c.totalCostOfOwnership)],
      ['Cost Per User', ...calculations.map(c => c.costPerUser.toFixed(2))],
      ['Daily Capacity', ...calculations.map(c => c.model.dailyCapacity)],
      ['Water Saved (L)', ...calculations.map(c => c.totalWaterSaved)],
      ['CO2 Saved (kg)', ...calculations.map(c => c.totalCO2Saved)],
      ['Installation Days', ...calculations.map(c => c.model.installationDays)],
    ].map(row => row.join(',')).join('\n')

    return `${headers}\n${rows}`
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Compare Toilet Models</h1>
          <p className={styles.subtitle}>
            Interactive cost calculator comparing ReFlow B-CRT, LooCafe, Sulabh Shauchalaya, and traditional pay-to-use models.
          </p>
          <p className={styles.description}>
            Make informed decisions with real data on construction costs, operating expenses, environmental impact, and ROI over 5 years.
          </p>
        </div>
      </section>

      {/* Calculator Controls */}
      <section className={styles.controls}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Configure Your Comparison</h2>

          {/* Model Selection */}
          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>Select Models to Compare (1-4)</label>
            <div className={styles.modelButtons}>
              {TOILET_MODELS.map(model => (
                <button
                  key={model.id}
                  onClick={() => toggleModel(model.id)}
                  className={`${styles.modelButton} ${selectedModels.includes(model.id) ? styles.modelButtonActive : ''}`}
                  style={{
                    borderColor: selectedModels.includes(model.id) ? model.color : 'transparent',
                    backgroundColor: selectedModels.includes(model.id) ? `${model.color}15` : 'transparent',
                  }}
                >
                  <span className={styles.modelButtonName}>{model.shortName}</span>
                  {selectedModels.includes(model.id) && <span className={styles.checkmark}>✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Parameters */}
          <div className={styles.parametersGrid}>
            <div className={styles.parameter}>
              <label className={styles.parameterLabel}>
                Number of Units
                <span className={styles.parameterValue}>{numUnits}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={numUnits}
                onChange={(e) => setNumUnits(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderLabels}>
                <span>1</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            <div className={styles.parameter}>
              <label className={styles.parameterLabel}>
                Expected Daily Users
                <span className={styles.parameterValue}>{formatNumber(dailyUsers)}</span>
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={dailyUsers}
                onChange={(e) => setDailyUsers(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderLabels}>
                <span>100</span>
                <span>5K</span>
                <span>10K</span>
              </div>
            </div>

            <div className={styles.parameter}>
              <label className={styles.parameterLabel}>
                Projection Period (Years)
                <span className={styles.parameterValue}>{yearsToProject}</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={yearsToProject}
                onChange={(e) => setYearsToProject(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderLabels}>
                <span>1</span>
                <span>10</span>
                <span>20</span>
              </div>
            </div>

            <div className={styles.parameter}>
              <label className={styles.parameterLabel}>Location Type</label>
              <select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value as any)}
                className={styles.select}
              >
                <option value="urban">Urban (Higher costs)</option>
                <option value="semi-urban">Semi-Urban (Standard)</option>
                <option value="rural">Rural (Lower costs)</option>
              </select>
            </div>
          </div>

          {/* Export Buttons */}
          <div className={styles.exportButtons}>
            <button onClick={handlePrint} className={styles.exportButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <path d="M6 14h12v8H6z" />
              </svg>
              Print Report
            </button>
            <button onClick={handleExport} className={styles.exportButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Export CSV
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className={styles.comparison}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{yearsToProject}-Year Total Cost of Ownership</h2>

          <div className={styles.comparisonGrid}>
            {calculations.map(calc => (
              <div key={calc.model.id} className={styles.comparisonCard}>
                <div className={styles.cardHeader} style={{ borderTopColor: calc.model.color }}>
                  <h3 className={styles.cardTitle}>{calc.model.name}</h3>
                  <p className={styles.cardDescription}>{calc.model.description}</p>
                </div>

                <div className={styles.cardBody}>
                  {/* TCO Highlight */}
                  <div className={styles.tcoSection}>
                    <div className={styles.tcoLabel}>Total Cost of Ownership</div>
                    <div className={styles.tcoValue} style={{ color: calc.model.color }}>
                      {formatCurrency(calc.totalCostOfOwnership)}
                    </div>
                    <div className={styles.tcoBreakdown}>
                      Construction: {formatCurrency(calc.totalConstructionCost)} +
                      Operating: {formatCurrency(calc.totalOperatingCost)}
                    </div>
                    {calc.savings > 0 && (
                      <div className={styles.savings}>
                        Saves {formatCurrency(calc.savings)} ({calc.savingsPercentage.toFixed(1)}%)
                      </div>
                    )}
                  </div>

                  {/* Key Metrics */}
                  <div className={styles.metrics}>
                    <div className={styles.metric}>
                      <span className={styles.metricLabel}>Cost Per User</span>
                      <span className={styles.metricValue}>₹{calc.costPerUser.toFixed(2)}</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricLabel}>Daily Capacity</span>
                      <span className={styles.metricValue}>{formatNumber(calc.model.dailyCapacity)}</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricLabel}>Installation</span>
                      <span className={styles.metricValue}>{calc.model.installationDays} days</span>
                    </div>
                  </div>

                  {/* Annual Operating Costs */}
                  <div className={styles.operatingCosts}>
                    <h4 className={styles.operatingTitle}>Annual Operating Cost (Per Unit)</h4>
                    <div className={styles.costBreakdown}>
                      <div className={styles.costItem}>
                        <span className={styles.costLabel}>Water</span>
                        <span className={styles.costValue}>{formatCurrency(calc.annualWaterCost)}</span>
                      </div>
                      <div className={styles.costItem}>
                        <span className={styles.costLabel}>Electricity</span>
                        <span className={styles.costValue}>{formatCurrency(calc.annualElectricityCost)}</span>
                      </div>
                      <div className={styles.costItem}>
                        <span className={styles.costLabel}>Maintenance</span>
                        <span className={styles.costValue}>{formatCurrency(calc.annualMaintenanceCost)}</span>
                      </div>
                      <div className={styles.costItem}>
                        <span className={styles.costLabel}>Sewage</span>
                        <span className={styles.costValue}>{formatCurrency(calc.annualSewageCost)}</span>
                      </div>
                      <div className={styles.costItem}>
                        <span className={styles.costLabel}>Staff</span>
                        <span className={styles.costValue}>{formatCurrency(calc.annualStaffCost)}</span>
                      </div>
                      <div className={styles.costItem} style={{ borderTop: '2px solid var(--color-gray-200)', paddingTop: '8px', marginTop: '8px' }}>
                        <span className={styles.costLabel} style={{ fontWeight: 600 }}>Total Annual</span>
                        <span className={styles.costValue} style={{ fontWeight: 600, color: calc.model.color }}>
                          {formatCurrency(calc.totalAnnualOperatingCost)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Environmental Impact */}
                  <div className={styles.environmental}>
                    <h4 className={styles.environmentalTitle}>Environmental Impact ({yearsToProject} Years)</h4>
                    <div className={styles.environmentalMetrics}>
                      <div className={styles.envMetric}>
                        <svg className={styles.envIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                        <div>
                          <div className={styles.envValue}>{formatNumber(calc.totalWaterSaved)} L</div>
                          <div className={styles.envLabel}>Water Saved</div>
                        </div>
                      </div>
                      <div className={styles.envMetric}>
                        <svg className={styles.envIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        </svg>
                        <div>
                          <div className={styles.envValue}>{formatNumber(calc.totalCO2Saved)} kg</div>
                          <div className={styles.envLabel}>CO₂ Reduced</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className={styles.features}>
                    <div className={styles.feature}>
                      <span className={calc.model.waterRecycling > 0 ? styles.featureActive : styles.featureInactive}>
                        {calc.model.waterRecycling > 0 ? '✓' : '×'}
                      </span>
                      <span>Water Recycling ({calc.model.waterRecycling}%)</span>
                    </div>
                    <div className={styles.feature}>
                      <span className={calc.model.solarPowered ? styles.featureActive : styles.featureInactive}>
                        {calc.model.solarPowered ? '✓' : '×'}
                      </span>
                      <span>Solar Powered</span>
                    </div>
                    <div className={styles.feature}>
                      <span className={calc.model.zeroDischage ? styles.featureActive : styles.featureInactive}>
                        {calc.model.zeroDischage ? '✓' : '×'}
                      </span>
                      <span>Zero Discharge</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Over Time Chart */}
      <section className={styles.chartSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cost Comparison Over Time</h2>

          <div className={styles.chart}>
            {[1, 2, 3, 4, 5, 10, 15, 20].filter(year => year <= yearsToProject).map(year => (
              <div key={year} className={styles.chartRow}>
                <div className={styles.chartYearLabel}>Year {year}</div>
                <div className={styles.chartBars}>
                  {calculations.map(calc => {
                    const yearCost = calc.totalConstructionCost + (calc.totalAnnualOperatingCost * numUnits * year)
                    const maxCost = Math.max(...calculations.map(c =>
                      c.totalConstructionCost + (c.totalAnnualOperatingCost * numUnits * year)
                    ))
                    const percentage = (yearCost / maxCost) * 100

                    return (
                      <div key={calc.model.id} className={styles.chartBarContainer}>
                        <div className={styles.chartBarLabel}>{calc.model.shortName}</div>
                        <div className={styles.chartBarWrapper}>
                          <div
                            className={styles.chartBar}
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: calc.model.color,
                            }}
                          />
                          <span className={styles.chartBarValue}>{formatCurrency(yearCost)}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to deploy ReFlow B-CRT?</h2>
            <p className={styles.ctaText}>
              Schedule a 45-minute technical consultation to discuss your district's sanitation infrastructure needs.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Schedule Technical Briefing
              </a>
              <a href="/contact" className={styles.ctaButtonSecondary}>
                Request Custom Quote
              </a>
            </div>
            <p className={styles.ctaNote}>
              Includes district site assessment, deployment timeline, and complete cost analysis for your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className={styles.sources}>
        <div className={styles.container}>
          <h2 className={styles.sourcesTitle}>Data Sources & Methodology</h2>
          <div className={styles.sourcesGrid}>
            <div className={styles.sourceCard}>
              <h3>ReFlow B-CRT</h3>
              <ul>
                <li>₹15K annual maintenance from B-CRT technical specifications</li>
                <li>Zero water/electricity costs (100% solar, water recycling)</li>
                <li>3,000 daily capacity from ISO30500 certification data</li>
              </ul>
            </div>
            <div className={styles.sourceCard}>
              <h3>LooCafe</h3>
              <ul>
                <li>Gates Foundation partnership, 270+ locations in Hyderabad</li>
                <li>PPP model with café revenue offsetting costs</li>
                <li>Operational data from publicly available reports</li>
              </ul>
            </div>
            <div className={styles.sourceCard}>
              <h3>Sulabh Shauchalaya</h3>
              <ul>
                <li>₹85K annual operating cost from traditional infrastructure</li>
                <li>Pay-and-use self-sustaining model</li>
                <li>1.5M+ installations across India</li>
              </ul>
            </div>
            <div className={styles.sourceCard}>
              <h3>Pay-to-Use Traditional</h3>
              <ul>
                <li>₹98K per seat construction (govt standard)</li>
                <li>Municipal water, grid electricity, sewage infrastructure</li>
                <li>Based on Swachh Bharat Mission guidelines</li>
              </ul>
            </div>
          </div>
          <p className={styles.disclaimer}>
            <strong>Disclaimer:</strong> Cost estimates are based on publicly available data, industry research, and ReFlow technical specifications.
            Actual costs may vary based on location, site conditions, and specific requirements. Contact us for a customized assessment.
          </p>
        </div>
      </section>
    </div>
  )
}
