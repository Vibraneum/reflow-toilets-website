import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Configurator',
  description: 'Design your custom ReFlow deployment with instant pricing and ROI projection. Configure B-CRT units, maintenance packages, IoT monitoring, and bundled services for districts, communities, and commercial areas.',
  openGraph: {
    title: 'ReFlow Toilets - Sanitation Infrastructure Configurator',
    description: 'Design your custom deployment with instant pricing and ROI projection',
  },
}

export default function ConfiguratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
