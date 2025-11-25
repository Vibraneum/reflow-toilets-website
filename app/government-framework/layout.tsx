import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government Decision Framework - Why Districts Choose B-CRT | ReFlow Toilets',
  description: 'Complete decision framework for municipal decision-makers evaluating B-CRT technology for public sanitation infrastructure. Includes policy alignment, procurement guide, funding sources, case studies from 73 deployments across 3 major cities.',
  keywords: [
    'government sanitation procurement',
    'municipal toilet infrastructure',
    'B-CRT decision framework',
    'Swachh Bharat Mission',
    'CRZ compliant toilets',
    'Smart Cities sanitation',
    'FSSM policy',
    'public toilet procurement',
    'government toilet funding',
    'district sanitation solutions',
    'ISO30500 certification',
    'zero discharge toilets',
    'coastal regulation zone toilets',
    'ODF++ criteria',
    'sanitation infrastructure funding',
  ],
  openGraph: {
    title: 'Government Decision Framework - Why Districts Choose B-CRT',
    description: 'Complete decision framework for municipal officials: policy alignment, procurement guide, funding sources, and case studies from 73 deployments',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png'],
  },
}

export default function GovernmentFrameworkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
