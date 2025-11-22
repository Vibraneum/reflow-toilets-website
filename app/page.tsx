import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'

// Code splitting - Load heavy components dynamically
const TrustBadges = dynamic(() => import('@/components/TrustBadges'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const DesignInnovation = dynamic(() => import('@/components/DesignInnovation'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const KeyFeatures = dynamic(() => import('@/components/KeyFeatures'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const ReinventedMission = dynamic(() => import('@/components/ReinventedMission'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const ImpactMetrics = dynamic(() => import('@/components/ImpactMetrics'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const BCRT = dynamic(() => import('@/components/BCRT'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const CTASection = dynamic(() => import('@/components/CTASection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const IxoraCrossSell = dynamic(() => import('@/components/IxoraCrossSell'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
})
const ConceptVideos = dynamic(() => import('@/components/ConceptVideos'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const BundlingEcosystem = dynamic(() => import('@/components/BundlingEcosystem'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
})

export const metadata: Metadata = {
  title: 'Home',
  description: 'ReFlow Toilets - Smart, resilient, and sustainable public toilet solutions. ISO30500 compliant, zero discharge, solar-powered sanitation infrastructure designed for modern urban needs.',
  openGraph: {
    title: 'ReFlow Toilets - Scalable Decentralized Sanitation Infrastructure',
    description: 'Smart, resilient, and sustainable public toilet solutions designed for modern urban needs',
    images: ['/images/bcrt/MAIN B-CRT IMAGE.png'],
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ReFlow Toilets',
    alternateName: 'iRise Toilets',
    url: 'https://www.reflowtoilets.com',
    logo: '/images/logos/reflow toilets png.png',
    description: 'Smart, resilient, and sustainable public toilet solutions designed for modern urban needs',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9494330442',
      contactType: 'Customer Service',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '17:00',
      },
    },
    sameAs: [
      'https://www.linkedin.com/company/reflow-toilets',
    ],
  }

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.reflowtoilets.com',
      },
    ],
  }

  // FAQ structured data
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is ReFlow Toilets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ReFlow Toilets is a scalable decentralized sanitation infrastructure solution designed for modern urban needs. It features smart, resilient, and sustainable public toilet solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is B-CRT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'B-CRT stands for Blackwater Circular Reinvented Toilet. It is an ISO30500 compliant, zero discharge, solar-powered public toilet system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I contact ReFlow Toilets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us at +91-9494330442 (10am–5pm Monday–Friday), schedule a call through our calendar, or send us a message through our contact form.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Hero />
        <Partners />
        <TrustBadges />
        <DesignInnovation />
        <KeyFeatures />
        <ReinventedMission />
        <ImpactMetrics />
        <BCRT />
        <BundlingEcosystem />
        <IxoraCrossSell />
        <ConceptVideos />
        <CTASection />
        <FAQ />
      </main>
    </>
  )
}
