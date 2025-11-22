'use client'

import { useState } from 'react'
import styles from './PartnerRevenueCalculator.module.css'

interface CalculatorInputs {
  partnershipModel: 'cafe' | 'retail' | 'advertising' | 'services' | 'pos'
  location: 'tier1' | 'tier2' | 'tier3'
  operatingHours: number
  numberOfUnits: number
}

export default function PartnerRevenueCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    partnershipModel: 'cafe',
    location: 'tier1',
    operatingHours: 12,
    numberOfUnits: 1,
  })

  // Revenue models based on research (in INR per month per unit)
  const revenueModels = {
    cafe: {
      tier1: { min: 50000, max: 80000, avgTransaction: 40, dailyCustomers: 150 },
      tier2: { min: 35000, max: 60000, avgTransaction: 35, dailyCustomers: 100 },
      tier3: { min: 20000, max: 40000, avgTransaction: 30, dailyCustomers: 60 },
    },
    retail: {
      tier1: { min: 30000, max: 50000, avgTransaction: 80, dailyCustomers: 50 },
      tier2: { min: 20000, max: 40000, avgTransaction: 70, dailyCustomers: 35 },
      tier3: { min: 15000, max: 30000, avgTransaction: 60, dailyCustomers: 25 },
    },
    advertising: {
      tier1: { min: 25000, max: 40000, avgTransaction: 0, dailyCustomers: 3000 }, // Footfall-based
      tier2: { min: 18000, max: 32000, avgTransaction: 0, dailyCustomers: 2000 },
      tier3: { min: 12000, max: 25000, avgTransaction: 0, dailyCustomers: 1500 },
    },
    services: {
      tier1: { min: 35000, max: 60000, avgTransaction: 25, dailyCustomers: 100 },
      tier2: { min: 25000, max: 45000, avgTransaction: 20, dailyCustomers: 70 },
      tier3: { min: 15000, max: 35000, avgTransaction: 15, dailyCustomers: 50 },
    },
    pos: {
      tier1: { min: 40000, max: 70000, avgTransaction: 120, dailyCustomers: 80 },
      tier2: { min: 30000, max: 55000, avgTransaction: 100, dailyCustomers: 60 },
      tier3: { min: 20000, max: 45000, avgTransaction: 80, dailyCustomers: 40 },
    },
  }

  // Cost structures (in INR per month per unit)
  const costStructure = {
    cafe: {
      partnershipFee: 15000,
      revenueShare: 0.15, // 15%
      operationalCosts: 25000, // Supplies, staff, etc.
    },
    retail: {
      partnershipFee: 10000,
      revenueShare: 0.12,
      operationalCosts: 15000,
    },
    advertising: {
      partnershipFee: 8000,
      revenueShare: 0.10,
      operationalCosts: 5000,
    },
    services: {
      partnershipFee: 12000,
      revenueShare: 0.15,
      operationalCosts: 18000,
    },
    pos: {
      partnershipFee: 18000,
      revenueShare: 0.18,
      operationalCosts: 20000,
    },
  }

  const currentRevenue = revenueModels[inputs.partnershipModel][inputs.location]
  const currentCosts = costStructure[inputs.partnershipModel]

  // Adjust for operating hours (baseline is 12 hours)
  const hoursMultiplier = inputs.operatingHours / 12
  const adjustedMinRevenue = currentRevenue.min * hoursMultiplier
  const adjustedMaxRevenue = currentRevenue.max * hoursMultiplier
  const avgRevenue = (adjustedMinRevenue + adjustedMaxRevenue) / 2

  // Monthly calculations per unit
  const monthlyRevenue = avgRevenue
  const partnershipFee = currentCosts.partnershipFee
  const revenueShareAmount = monthlyRevenue * currentCosts.revenueShare
  const operationalCosts = currentCosts.operationalCosts * hoursMultiplier
  const totalCosts = partnershipFee + revenueShareAmount + operationalCosts
  const monthlyProfit = monthlyRevenue - totalCosts

  // Multi-unit calculations
  const totalMonthlyRevenue = monthlyRevenue * inputs.numberOfUnits
  const totalMonthlyCosts = totalCosts * inputs.numberOfUnits
  const totalMonthlyProfit = monthlyProfit * inputs.numberOfUnits

  // Annual calculations
  const annualRevenue = totalMonthlyRevenue * 12
  const annualProfit = totalMonthlyProfit * 12

  // ROI calculations
  const investmentAmounts = {
    cafe: { tier1: 400000, tier2: 350000, tier3: 250000 },
    retail: { tier1: 250000, tier2: 200000, tier3: 150000 },
    advertising: { tier1: 150000, tier2: 100000, tier3: 75000 },
    services: { tier1: 300000, tier2: 250000, tier3: 200000 },
    pos: { tier1: 600000, tier2: 500000, tier3: 400000 },
  }

  const initialInvestment = investmentAmounts[inputs.partnershipModel][inputs.location] * inputs.numberOfUnits
  const breakEvenMonths = initialInvestment / totalMonthlyProfit
  const twoYearROI = ((annualProfit * 2 - initialInvestment) / initialInvestment) * 100

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`
    } else {
      return `₹${(amount / 1000).toFixed(0)}K`
    }
  }

  const partnershipModelNames = {
    cafe: 'Café/Food Kiosk',
    retail: 'Retail/Convenience Store',
    advertising: 'Advertising & Branding',
    services: 'Value-Added Services',
    pos: 'Point-of-Sale Systems',
  }

  const locationNames = {
    tier1: 'Tier-1 City (Metro)',
    tier2: 'Tier-2 City',
    tier3: 'Tier-3 City/Town',
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorContent}>
        {/* Inputs Section */}
        <div className={styles.inputsSection}>
          <h3 className={styles.sectionTitle}>Configure Your Partnership</h3>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Partnership Model</label>
            <select
              value={inputs.partnershipModel}
              onChange={(e) => setInputs({ ...inputs, partnershipModel: e.target.value as any })}
              className={styles.select}
            >
              <option value="cafe">☕ Café/Food Kiosk</option>
              <option value="retail">🛒 Retail/Convenience Store</option>
              <option value="advertising">📺 Advertising & Branding</option>
              <option value="services">⚡ Value-Added Services</option>
              <option value="pos">💳 Point-of-Sale Systems</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Location Type</label>
            <select
              value={inputs.location}
              onChange={(e) => setInputs({ ...inputs, location: e.target.value as any })}
              className={styles.select}
            >
              <option value="tier1">Tier-1 City (Mumbai, Delhi, Bangalore)</option>
              <option value="tier2">Tier-2 City (Hyderabad, Pune, Jaipur)</option>
              <option value="tier3">Tier-3 City/Town</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Operating Hours/Day
              <span className={styles.value}>{inputs.operatingHours}h</span>
            </label>
            <input
              type="range"
              min="6"
              max="24"
              step="2"
              value={inputs.operatingHours}
              onChange={(e) => setInputs({ ...inputs, operatingHours: parseInt(e.target.value) })}
              className={styles.slider}
            />
            <div className={styles.range}>
              <span>6h</span>
              <span>24h</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Number of Units
              <span className={styles.value}>{inputs.numberOfUnits}</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={inputs.numberOfUnits}
              onChange={(e) => setInputs({ ...inputs, numberOfUnits: parseInt(e.target.value) })}
              className={styles.slider}
            />
            <div className={styles.range}>
              <span>1</span>
              <span>10</span>
            </div>
          </div>

          <div className={styles.assumptions}>
            <h4>Key Assumptions</h4>
            <ul>
              <li>Footfall: ~3,000 daily users per unit</li>
              <li>Based on LooCafe's 270+ location model</li>
              <li>Ixora handles all facility maintenance</li>
              <li>Excludes one-time setup costs</li>
            </ul>
          </div>
        </div>

        {/* Results Section */}
        <div className={styles.resultsSection}>
          <h3 className={styles.sectionTitle}>Revenue Projections</h3>

          {/* Monthly Breakdown */}
          <div className={styles.resultCard}>
            <div className={styles.resultHeader}>
              <h4>Monthly Revenue Per Unit</h4>
              <div className={styles.resultValue}>{formatCurrency(monthlyRevenue)}</div>
            </div>

            <div className={styles.breakdown}>
              <div className={styles.breakdownRow}>
                <span>Gross Revenue</span>
                <strong>{formatCurrency(monthlyRevenue)}</strong>
              </div>
              <div className={styles.breakdownRow}>
                <span>Partnership Fee</span>
                <strong className={styles.negative}>-{formatCurrency(partnershipFee)}</strong>
              </div>
              <div className={styles.breakdownRow}>
                <span>Revenue Share ({(currentCosts.revenueShare * 100).toFixed(0)}%)</span>
                <strong className={styles.negative}>-{formatCurrency(revenueShareAmount)}</strong>
              </div>
              <div className={styles.breakdownRow}>
                <span>Operational Costs</span>
                <strong className={styles.negative}>-{formatCurrency(operationalCosts)}</strong>
              </div>
              <div className={`${styles.breakdownRow} ${styles.total}`}>
                <span>Net Monthly Profit</span>
                <strong className={styles.positive}>{formatCurrency(monthlyProfit)}</strong>
              </div>
            </div>
          </div>

          {/* Multi-Unit Totals */}
          {inputs.numberOfUnits > 1 && (
            <div className={styles.resultCard}>
              <div className={styles.resultHeader}>
                <h4>{inputs.numberOfUnits} Units - Total Monthly</h4>
                <div className={styles.resultValue}>{formatCurrency(totalMonthlyProfit)}</div>
              </div>

              <div className={styles.breakdown}>
                <div className={styles.breakdownRow}>
                  <span>Total Revenue</span>
                  <strong>{formatCurrency(totalMonthlyRevenue)}</strong>
                </div>
                <div className={styles.breakdownRow}>
                  <span>Total Costs</span>
                  <strong className={styles.negative}>-{formatCurrency(totalMonthlyCosts)}</strong>
                </div>
                <div className={`${styles.breakdownRow} ${styles.total}`}>
                  <span>Total Profit</span>
                  <strong className={styles.positive}>{formatCurrency(totalMonthlyProfit)}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Annual & ROI */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricIcon}>📅</div>
              <div className={styles.metricValue}>{formatCurrency(annualRevenue)}</div>
              <div className={styles.metricLabel}>Annual Revenue</div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricIcon}>💰</div>
              <div className={styles.metricValue}>{formatCurrency(annualProfit)}</div>
              <div className={styles.metricLabel}>Annual Profit</div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricIcon}>⏱️</div>
              <div className={styles.metricValue}>{breakEvenMonths.toFixed(1)} mo</div>
              <div className={styles.metricLabel}>Break-Even Time</div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricIcon}>📈</div>
              <div className={styles.metricValue}>{twoYearROI.toFixed(0)}%</div>
              <div className={styles.metricLabel}>2-Year ROI</div>
            </div>
          </div>

          {/* Investment Summary */}
          <div className={styles.investmentSummary}>
            <h4>Investment Summary</h4>
            <div className={styles.investmentRow}>
              <span>Initial Investment ({inputs.numberOfUnits} {inputs.numberOfUnits > 1 ? 'units' : 'unit'})</span>
              <strong>{formatCurrency(initialInvestment)}</strong>
            </div>
            <div className={styles.investmentRow}>
              <span>Estimated Payback Period</span>
              <strong>{breakEvenMonths.toFixed(1)} months</strong>
            </div>
            <div className={styles.investmentRow}>
              <span>Profit After 2 Years</span>
              <strong className={styles.positive}>{formatCurrency(annualProfit * 2 - initialInvestment)}</strong>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <p>Ready to start your partnership journey?</p>
            <a href="#apply" className={styles.ctaButton}>Apply Now</a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <p>
          <strong>Disclaimer:</strong> Revenue projections are estimates based on LooCafe's existing model and industry benchmarks. Actual results may vary based on location, operating efficiency, market conditions, and individual business acumen. Initial investment excludes setup costs (₹50K-2L depending on model). Partnership fees and revenue share percentages are indicative and subject to contract negotiation. For accurate projections tailored to your specific situation, schedule a consultation with our team.
        </p>
      </div>
    </div>
  )
}
