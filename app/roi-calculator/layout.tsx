import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROI Calculator - District Officials',
  description: 'Calculate 20-year Total Cost of Ownership for ReFlow B-CRT vs traditional sewered toilets. Data-driven ROI analysis for government buyers, district officials, and infrastructure planners.',
  keywords: ['ROI calculator', 'public toilet ROI', 'sanitation infrastructure cost', 'B-CRT savings', 'government toilet calculator', 'district sanitation ROI', 'SBM 2.0 funding', 'ODF++ certification', 'smart cities toilet', 'decentralized sanitation cost'],
  openGraph: {
    title: 'ROI Calculator - ReFlow Toilets for Districts',
    description: 'Calculate your 20-year savings with ReFlow B-CRT technology. Comprehensive financial analysis for government infrastructure decisions.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1763732619/reflow-assets/bcrt/main-bcrt.jpg',
        width: 1200,
        height: 630,
        alt: 'ReFlow Toilets ROI Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Calculator - ReFlow Toilets',
    description: 'Calculate 20-year Total Cost of Ownership for smart sanitation infrastructure',
  },
}

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
