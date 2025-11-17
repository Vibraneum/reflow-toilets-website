'use client'

import { useState } from 'react'
import styles from './ROICalculator.module.css'

interface CalculatorInputs {
  units: number
  modelType: 'basic' | 'advanced'
  hoursPerDay: number
  years: number
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    units: 25,
    modelType: 'advanced',
    hoursPerDay: 16,
    years: 5,
  })

  // Cost calculations (in INR)
  const COST_PER_UNIT = {
    basic: 450000, // ₹4.5L per basic unit
    advanced: 650000, // ₹6.5L per advanced unit
  }

  const TRADITIONAL_COST_PER_UNIT = 350000 // ₹3.5L initial
  const TRADITIONAL_ANNUAL_MAINTENANCE = 85000 // ₹85K per year per unit
  const TRADITIONAL_WATER_COST = 45000 // ₹45K per year per unit

  // ReFlow costs
  const reflowInitialCost = COST_PER_UNIT[inputs.modelType] * inputs.units
  const reflowAnnualMaintenance = 15000 * inputs.units // ₹15K per year per unit
  const reflowWaterCost = 0 // Zero discharge = zero water bills

  const reflowTotalCost = reflowInitialCost + (reflowAnnualMaintenance * inputs.years)

  // Traditional costs
  const traditionalInitialCost = TRADITIONAL_COST_PER_UNIT * inputs.units
  const traditionalAnnualCost = (TRADITIONAL_ANNUAL_MAINTENANCE + TRADITIONAL_WATER_COST) * inputs.units
  const traditionalTotalCost = traditionalInitialCost + (traditionalAnnualCost * inputs.years)

  // Savings
  const totalSavings = traditionalTotalCost - reflowTotalCost
  const savingsPercentage = ((totalSavings / traditionalTotalCost) * 100).toFixed(1)
  const monthlyWaterSaved = inputs.units * 12000 * (inputs.hoursPerDay / 16) // 12K liters per unit per 16hr day
  const totalWaterSaved = monthlyWaterSaved * 12 * inputs.years
  const co2Offset = (totalWaterSaved / 1000) * 0.5 // Rough estimate: 0.5kg CO2 per m³ water

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`
    } else {
      return `₹${(amount / 1000).toFixed(0)}K`
    }
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-IN')
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.header}>
        <h2 className={styles.title}>Interactive ROI Calculator</h2>
        <p className={styles.subtitle}>
          See your projected savings over {inputs.years} years with ReFlow's B-CRT technology
        </p>
      </div>

      <div className={styles.content}>
        {/* Input Controls */}
        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Number of Units
              <span className={styles.value}>{inputs.units}</span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={inputs.units}
              onChange={(e) => setInputs({ ...inputs, units: parseInt(e.target.value) })}
              className={styles.slider}
            />
            <div className={styles.range}>
              <span>10</span>
              <span>100</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Model Type
            </label>
            <div className={styles.radioGroup}>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="modelType"
                  value="basic"
                  checked={inputs.modelType === 'basic'}
                  onChange={(e) => setInputs({ ...inputs, modelType: 'basic' })}
                />
                <span>Basic (₹4.5L/unit)</span>
              </label>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="modelType"
                  value="advanced"
                  checked={inputs.modelType === 'advanced'}
                  onChange={(e) => setInputs({ ...inputs, modelType: 'advanced' })}
                />
                <span>Advanced (₹6.5L/unit)</span>
              </label>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Operating Hours/Day
              <span className={styles.value}>{inputs.hoursPerDay}h</span>
            </label>
            <input
              type="range"
              min="8"
              max="24"
              step="2"
              value={inputs.hoursPerDay}
              onChange={(e) => setInputs({ ...inputs, hoursPerDay: parseInt(e.target.value) })}
              className={styles.slider}
            />
            <div className={styles.range}>
              <span>8h</span>
              <span>24h</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Time Period (Years)
              <span className={styles.value}>{inputs.years}yr</span>
            </label>
            <input
              type="range"
              min="3"
              max="10"
              step="1"
              value={inputs.years}
              onChange={(e) => setInputs({ ...inputs, years: parseInt(e.target.value) })}
              className={styles.slider}
            />
            <div className={styles.range}>
              <span>3yr</span>
              <span>10yr</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className={styles.results}>
          <div className={styles.comparison}>
            <div className={styles.comparisonCard}>
              <div className={styles.cardHeader}>
                <h3>Traditional System</h3>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.costRow}>
                  <span>Initial Cost</span>
                  <strong>{formatCurrency(traditionalInitialCost)}</strong>
                </div>
                <div className={styles.costRow}>
                  <span>Annual Maintenance</span>
                  <strong>{formatCurrency(TRADITIONAL_ANNUAL_MAINTENANCE * inputs.units)}/yr</strong>
                </div>
                <div className={styles.costRow}>
                  <span>Water Bills</span>
                  <strong>{formatCurrency(TRADITIONAL_WATER_COST * inputs.units)}/yr</strong>
                </div>
                <div className={styles.totalCost}>
                  <span>{inputs.years}-Year Total</span>
                  <strong>{formatCurrency(traditionalTotalCost)}</strong>
                </div>
              </div>
            </div>

            <div className={`${styles.comparisonCard} ${styles.highlight}`}>
              <div className={styles.cardHeader}>
                <h3>ReFlow B-CRT</h3>
                <span className={styles.badge}>Zero Discharge</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.costRow}>
                  <span>Initial Cost</span>
                  <strong>{formatCurrency(reflowInitialCost)}</strong>
                </div>
                <div className={styles.costRow}>
                  <span>Annual Maintenance</span>
                  <strong>{formatCurrency(reflowAnnualMaintenance)}/yr</strong>
                </div>
                <div className={styles.costRow}>
                  <span>Water Bills</span>
                  <strong className={styles.zero}>₹0/yr</strong>
                </div>
                <div className={styles.totalCost}>
                  <span>{inputs.years}-Year Total</span>
                  <strong>{formatCurrency(reflowTotalCost)}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Summary */}
          <div className={styles.savingsSummary}>
            <div className={styles.savingsHeader}>
              <h3>Your Savings</h3>
              <div className={styles.savingsPercent}>{savingsPercentage}% Lower TCO</div>
            </div>
            <div className={styles.savingsGrid}>
              <div className={styles.savingsCard}>
                <div className={styles.savingsIcon}>💰</div>
                <div className={styles.savingsAmount}>{formatCurrency(totalSavings)}</div>
                <div className={styles.savingsLabel}>Total Cost Savings</div>
              </div>
              <div className={styles.savingsCard}>
                <div className={styles.savingsIcon}>💧</div>
                <div className={styles.savingsAmount}>{formatNumber(totalWaterSaved)}L</div>
                <div className={styles.savingsLabel}>Water Saved</div>
              </div>
              <div className={styles.savingsCard}>
                <div className={styles.savingsIcon}>🌱</div>
                <div className={styles.savingsAmount}>{formatNumber(Math.round(co2Offset))}kg</div>
                <div className={styles.savingsLabel}>CO₂ Offset</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <p>Ready to transform your district's sanitation infrastructure?</p>
            <a href="https://calendar.app.google/5pRiSHEjP851jiNQ7" className={styles.ctaButton}>
              Schedule Your ROI Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <p>
          * Calculations based on average deployment costs and typical usage patterns.
          Actual savings may vary based on location, usage intensity, and specific requirements.
          Contact our team for a detailed feasibility study tailored to your district.
        </p>
      </div>
    </div>
  )
}
