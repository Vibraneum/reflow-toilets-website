'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ImpactMetrics.module.css'

interface Metric {
  value: number
  suffix: string
  label: string
  icon: React.ReactNode
}

const metrics: Metric[] = [
  { 
    value: 50000000, 
    suffix: 'M+', 
    label: 'Toilet Uses', 
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  { 
    value: 270, 
    suffix: '+', 
    label: 'Network Locations', 
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    value: 98, 
    suffix: '%', 
    label: 'Water Recovery Rate', 
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    value: 35, 
    suffix: '+', 
    label: 'IoT Sensors Per Unit', 
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  { 
    value: 72, 
    suffix: 'hrs+', 
    label: 'Off-Grid Operation', 
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  { 
    value: 90, 
    suffix: '%+', 
    label: 'Sludge Reduction', 
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
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
                : metric.suffix === '%' || metric.suffix === '%+'
                ? Math.round(counts[index])
                : metric.suffix === 'hrs+'
                ? Math.round(counts[index])
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
            Liquid Waste Management Rules 2024 • World's First ISO30500 Certified • TUV SUD Verified • Gates Foundation Partner
          </p>
          <p className={styles.footerSubtext} style={{ marginTop: '10px' }}>
            <strong>8-stage treatment process</strong> • 4.05kWp solar capacity • 20kWh battery storage • Deploying Q2 2025
          </p>
          <p className={styles.footerSubtext} style={{ marginTop: '10px' }}>
            Operated by <a href="https://www.ixoragroup.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>Ixora Group</a> • Deployed via <a href="https://www.loocafe.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: '600' }}>LooCafe</a> network (270+ locations)
          </p>
        </div>
      </div>
    </section>
  )
}
