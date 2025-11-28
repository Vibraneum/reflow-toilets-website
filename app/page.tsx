import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import LaunchAnnouncement from '@/components/LaunchAnnouncement'

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
const SustainabilityModel = dynamic(() => import('@/components/SustainabilityModel'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const MarketOpportunity = dynamic(() => import('@/components/MarketOpportunity'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
})
const GatesComparison = dynamic(() => import('@/components/GatesComparison'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
})
const CompetitiveAdvantage = dynamic(() => import('@/components/CompetitiveAdvantage'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
})
const LaunchGallery = dynamic(() => import('@/components/LaunchGallery'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
})

export const metadata: Metadata = {
  title: 'Home',
  description: 'ReFlow Toilets - Smart, resilient, and sustainable public toilet solutions. ISO30500 compliant, zero discharge, solar-powered sanitation infrastructure designed for modern urban needs.',
  openGraph: {
    title: 'ReFlow Toilets - Scalable Decentralized Sanitation Infrastructure',
    description: 'Smart, resilient, and sustainable public toilet solutions designed for modern urban needs',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/v1763732619/reflow-assets/bcrt/main-bcrt.jpg'],
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
        <LaunchAnnouncement />
        <Hero />
        <Partners />

        {/* Government Gazette Compliance Section */}
        <section style={{ background: '#f5f5f7', padding: '80px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(52, 199, 89, 0.1)',
              color: '#34c759',
              padding: '8px 16px',
              borderRadius: '980px',
              fontSize: '13px',
              fontWeight: '700',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Government Approved
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1d1d1f',
              lineHeight: '1.1'
            }}>
              Gazette Compliant Infrastructure
            </h2>
            <p style={{
              fontSize: '21px',
              lineHeight: '1.5',
              color: '#86868b',
              marginBottom: '40px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              ReFlow Toilets operates 50 locations in full compliance with the <strong>Government of India's Liquid Waste Management Rules 2024</strong> (Gazette CG DL-E-08102024-257748).
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '40px'
            }}>
              <div style={{
                background: '#fff',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                flex: '1 1 200px',
                maxWidth: '300px'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📜</div>
                <h4 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '8px' }}>Gazette Compliant</h4>
                <p style={{ fontSize: '14px', color: '#86868b' }}>CG DL-E-08102024-257748</p>
              </div>

              <div style={{
                background: '#fff',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                flex: '1 1 200px',
                maxWidth: '300px'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🏛️</div>
                <h4 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '8px' }}>50+ Locations</h4>
                <p style={{ fontSize: '14px', color: '#86868b' }}>Government Approved Sites</p>
              </div>

              <div style={{
                background: '#fff',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                flex: '1 1 200px',
                maxWidth: '300px'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤝</div>
                <h4 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '8px' }}>Telangana Rising</h4>
                <p style={{ fontSize: '14px', color: '#86868b' }}>Official Partner</p>
              </div>
            </div>
          </div>
        </section>

        <LaunchGallery />
        <TrustBadges />
        <DesignInnovation />
        <KeyFeatures />
        <ReinventedMission />
        <ImpactMetrics />
        <BCRT />
        <MarketOpportunity />
        <GatesComparison />
        <CompetitiveAdvantage />
        <BundlingEcosystem />
        <IxoraCrossSell />
        <ConceptVideos />
        <SustainabilityModel />
        <CTASection />
        <FAQ />
      </main>
    </>
  )
}
