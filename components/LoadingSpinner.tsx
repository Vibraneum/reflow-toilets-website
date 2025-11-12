'use client'

import { ReactNode } from 'react'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  text?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({
  size = 'medium',
  text = 'Loading...',
  fullScreen = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-3',
    large: 'w-16 h-16 border-4'
  }

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizeClasses[size]} border-gray-200 rounded-full animate-spin`}
        style={{
          borderTopColor: 'var(--color-primary)',
          borderRightColor: 'var(--color-primary-dark)',
        }}
        role="status"
        aria-label={text}
      />
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
        style={{ animation: 'fadeIn 0.3s ease-in-out' }}
      >
        {spinner}
      </div>
    )
  }

  return spinner
}




