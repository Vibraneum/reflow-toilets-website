import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact ReFlow Toilets - Get in touch for public toilet solutions, partnerships, and inquiries. Phone: +91 9494330442 (10am–5pm Monday–Friday)',
  keywords: ['contact ReFlow', 'public toilet contact', 'sanitation solutions contact', 'ReFlow Toilets phone'],
  openGraph: {
    title: 'Contact Us - ReFlow Toilets',
    description: 'Contact ReFlow Toilets for public toilet solutions and partnerships',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

