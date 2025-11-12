'use client'
import { ReactNode } from 'react'
import styles from './LuxuryCard.module.css'

interface LuxuryCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered'
  hover?: boolean
}

export default function LuxuryCard({
  children,
  className = '',
  variant = 'default',
  hover = true,
}: LuxuryCardProps) {
  const cardClasses = `${styles.luxuryCard} ${styles[variant]} ${hover ? styles.hover : ''} ${className}`

  return (
    <div className={cardClasses}>
      <div className={styles.cardContent}>{children}</div>
      <div className={styles.cardShine}></div>
    </div>
  )
}

