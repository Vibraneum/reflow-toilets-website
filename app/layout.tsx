import type { Metadata } from 'next'
import { Montserrat, Inter, Quicksand, Poppins, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
import PWAInstallPrompt from '@/components/PWAInstallPrompt'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import StickyCtaBar from '@/components/StickyCtaBar'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://www.reflowtoilets.com'),
  title: {
    default: 'ReFlow Toilets - Scalable Decentralized Sanitation Infrastructure',
    template: '%s | ReFlow Toilets',
  },
  description: 'Smart, resilient, and sustainable public toilet solutions designed for modern urban needs. ISO30500 compliant, zero discharge, solar-powered public toilets.',
  keywords: ['public toilets', 'sanitation', 'WASH', 'decentralized sanitation', 'sustainable toilets', 'ReFlow', 'B-CRT', 'reinvented toilet', 'Gates Foundation', 'public restrooms', 'smart toilets', 'IoT toilets'],
  authors: [{ name: 'ReFlow Toilets' }],
  creator: 'iRise Toilets Pvt. Ltd.',
  publisher: 'iRise Toilets Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.reflowtoilets.com',
    siteName: 'ReFlow Toilets',
    title: 'ReFlow Toilets - Scalable Decentralized Sanitation Infrastructure',
    description: 'Smart, resilient, and sustainable public toilet solutions designed for modern urban needs',
    images: [
      {
        url: 'https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png',
        width: 1200,
        height: 630,
        alt: 'ReFlow Toilets - B-CRT Blackwater Circular Reinvented Toilet',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'ReFlow Toilets - Scalable Decentralized Sanitation Infrastructure',
    description: 'Smart, resilient, and sustainable public toilet solutions designed for modern urban needs',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable} ${quicksand.variable} ${poppins.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`}>
      <head>
        {/* Prevent hydration mismatch by ensuring consistent image rendering */}
        <style>{`
          html, body { filter: none !important; }
          img { filter: none !important; }
        `}</style>
      </head>
      <body>
        <ServiceWorkerRegistration />
        <ErrorBoundary>
          {/* Skip to Content - Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <PWAInstallPrompt />
          <ExitIntentPopup />
          <StickyCtaBar />
        </ErrorBoundary>
      </body>
    </html>
  )
}
