
import type { Metadata } from 'next'
import ROICalculator from '@/components/ROICalculator'

export const metadata: Metadata = {
  title: 'ROI Calculator | ReFlow Toilets',
  description: 'Calculate your potential savings with ReFlow Toilets B-CRT technology.',
}

export default function ROIPage() {
  return (
    <main>
      <section className="section" style={{ padding: '120px 0 80px' }}>
        <div className="container">
          <ROICalculator />
        </div>
      </section>
    </main>
  )
}

