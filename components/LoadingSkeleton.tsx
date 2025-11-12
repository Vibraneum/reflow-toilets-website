import styles from './LoadingSkeleton.module.css'

interface LoadingSkeletonProps {
  width?: string
  height?: string
  className?: string
  variant?: 'text' | 'image' | 'card' | 'button'
}

export default function LoadingSkeleton({ 
  width = '100%', 
  height = '20px', 
  className = '',
  variant = 'text'
}: LoadingSkeletonProps) {
  return (
    <div 
      className={`${styles.skeleton} ${styles[variant]} ${className}`}
      style={{ width, height }}
      aria-label="Loading..."
      role="status"
    />
  )
}




