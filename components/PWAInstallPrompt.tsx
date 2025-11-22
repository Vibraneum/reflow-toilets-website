'use client'

import { useEffect, useState } from 'react'

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
    }
    
    setDeferredPrompt(null)
    setShowInstallButton(false)
  }

  if (!showInstallButton) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'var(--color-white)',
      padding: '16px 20px',
      borderRadius: '12px',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 1000,
      maxWidth: '300px',
      border: '2px solid var(--color-primary)',
    }}>
      <p style={{
        margin: '0 0 12px 0',
        fontFamily: 'var(--font-montserrat)',
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--color-text-sharp)',
      }}>
        Install ReFlow Toilets App
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleInstallClick}
          style={{
            background: 'var(--gradient-primary)',
            color: 'var(--color-white)',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '8px',
            fontFamily: 'var(--font-montserrat)',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Install
        </button>
        <button
          onClick={() => setShowInstallButton(false)}
          style={{
            background: 'transparent',
            color: 'var(--color-text-light)',
            border: '1px solid var(--color-gray-300)',
            padding: '8px 16px',
            borderRadius: '8px',
            fontFamily: 'var(--font-montserrat)',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Later
        </button>
      </div>
    </div>
  )
}






