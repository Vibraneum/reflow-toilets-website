'use client'
import { ReactNode } from 'react'
import styles from './LuxuryButton.module.css'

interface LuxuryButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function LuxuryButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: LuxuryButtonProps) {
  const baseClasses = `${styles.luxuryButton} ${styles[variant]} ${styles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        <span className={styles.buttonContent}>{children}</span>
        <span className={styles.buttonShine}></span>
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span className={styles.buttonContent}>{children}</span>
      <span className={styles.buttonShine}></span>
    </button>
  )
}

