import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ReFlow Toilets website. Legal terms and conditions for use of ReFlow Toilets services and website.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

