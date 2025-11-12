'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ImpactMetrics.module.css'

interface Metric {
  value: number
  suffix: string
  label: string
  icon: string
}

const metrics: Metric[] = [
  { value: 50000000, suffix: 'M+', label: 'Toilet Uses', icon: '🚽' },
  { value: 1200, suffix: '+', label: 'Units Deployed', icon: '🏗️' },
  { value: 24, suffix: '', label: 'Cities Covered', icon: '🏙️' },
  { value: 2500000, suffix: 'M kg', label: 'CO₂ Saved', icon: '🌱' },
  { value: 5000000, suffix: 'M L', label: 'Water Recycled', icon: '💧' },
  { value: 99.9, suffix: '%', label: 'Uptime', icon: '⚡' },
]

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1)
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0)
  }
  return num.toString()
}

export default function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    metrics.forEach((metric, index) => {
      let currentStep = 0
      const increment = metric.value / steps

      const timer = setInterval(() => {
        currentStep++
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.min(currentStep * increment, metric.value)
          return newCounts
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <section ref={sectionRef} className={styles.impactMetrics}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Impact at Scale</h2>
          <p className={styles.subtitle}>
            Transforming public sanitation infrastructure across India
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => {
            const displayValue =
              metric.suffix === 'M+'
                ? formatNumber(counts[index])
                : metric.suffix === 'M kg'
                ? (counts[index] / 1000000).toFixed(1)
                : metric.suffix === 'M L'
                ? (counts[index] / 1000000).toFixed(0)
                : metric.suffix === '%'
                ? counts[index].toFixed(1)
                : Math.round(counts[index])

            return (
              <div
                key={index}
                className={`${styles.metricCard} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{metric.icon}</span>
                </div>
                <div className={styles.value}>
                  {displayValue}
                  <span className={styles.suffix}>{metric.suffix}</span>
                </div>
                <div className={styles.label}>{metric.label}</div>
              </div>
            )
          })}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            <strong>50 locations</strong> compliant with Government of India Gazette CG DL-E-08102024-257748
          </p>
          <p className={styles.footerSubtext}>
            Liquid Waste Management Rules 2024 • ISO30500 Certified • Gates Foundation Partner
          </p>
          <p className={styles.footerSubtext} style={{ marginTop: '10px' }}>
            Operated by <a href="https://www.ixoragroup.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>Ixora Group</a> • Deployed via <a href="https://www.loocafe.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>LooCafe</a> network (270+ locations)
          </p>
        </div>
      </div>
    </section>
  )
}
