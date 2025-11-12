'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './EcosystemDiagram.module.css'

interface BrandNode {
  id: string
  name: string
  icon: string
  color: string
  description: string
  link?: string
}

const brands: BrandNode[] = [
  {
    id: 'reflow',
    name: 'ReFlow Toilets',
    icon: '🚽',
    color: '#34D399',
    description: 'Smart Sanitation Infrastructure',
  },
  {
    id: 'ixora',
    name: 'Ixora Group',
    icon: '🏢',
    color: '#10B981',
    description: 'Facilities Management',
    link: 'https://www.ixoragroup.com',
  },
  {
    id: 'security',
    name: 'Ixora Security',
    icon: '🔒',
    color: '#059669',
    description: '24/7 Monitoring',
    link: 'https://www.ixorasecurity.com',
  },
  {
    id: 'loocafe',
    name: 'LooCafe',
    icon: '☕',
    color: '#047857',
    description: '270+ Locations',
    link: 'https://www.loocafe.com',
  },
  {
    id: 'drnf',
    name: 'DRNF',
    icon: '❤️',
    color: '#065F46',
    description: 'Social Impact',
    link: 'https://www.drnf.org',
  },
]

const connections = [
  { from: 'reflow', to: 'ixora', label: 'Operations' },
  { from: 'reflow', to: 'security', label: 'Monitoring' },
  { from: 'reflow', to: 'loocafe', label: 'Deployment' },
  { from: 'reflow', to: 'drnf', label: 'Impact' },
  { from: 'ixora', to: 'loocafe', label: 'Maintenance' },
  { from: 'security', to: 'loocafe', label: 'Security' },
  { from: 'loocafe', to: 'drnf', label: 'Community' },
]

export default function EcosystemDiagram() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null)
  const [hoveredConnection, setHoveredConnection] = useState<string | null>(null)

  const handleBrandClick = (brandId: string) => {
    if (activeBrand === brandId) {
      setActiveBrand(null)
    } else {
      setActiveBrand(brandId)
    }
  }

  const isConnectionActive = (from: string, to: string) => {
    if (!activeBrand) return false
    return from === activeBrand || to === activeBrand
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>How the Ecosystem Works Together</h2>
        <p className={styles.subtitle}>
          Click on any brand to see its connections • All brands work together seamlessly
        </p>
      </div>

      <div className={styles.diagramWrapper}>
        <svg className={styles.connections} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
          {/* Central Hub (ReFlow) */}
          <circle cx="400" cy="300" r="8" fill="#34D399" className={styles.hubDot} />

          {/* Connection Lines */}
          {connections.map((conn, idx) => {
            const fromBrand = brands.find(b => b.id === conn.from)
            const toBrand = brands.find(b => b.id === conn.to)

            // Calculate positions based on brand positions
            const positions: Record<string, { x: number; y: number }> = {
              reflow: { x: 400, y: 300 },
              ixora: { x: 200, y: 150 },
              security: { x: 600, y: 150 },
              loocafe: { x: 200, y: 450 },
              drnf: { x: 600, y: 450 },
            }

            const fromPos = positions[conn.from]
            const toPos = positions[conn.to]

            const isActive = isConnectionActive(conn.from, conn.to)
            const isHovered = hoveredConnection === `${conn.from}-${conn.to}`

            return (
              <g key={idx}>
                <line
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  className={`${styles.connectionLine} ${isActive ? styles.connectionActive : ''} ${isHovered ? styles.connectionHovered : ''}`}
                  strokeDasharray="5,5"
                  onMouseEnter={() => setHoveredConnection(`${conn.from}-${conn.to}`)}
                  onMouseLeave={() => setHoveredConnection(null)}
                />
                {(isActive || isHovered) && (
                  <text
                    x={(fromPos.x + toPos.x) / 2}
                    y={(fromPos.y + toPos.y) / 2}
                    className={styles.connectionLabel}
                    textAnchor="middle"
                  >
                    {conn.label}
                  </text>
                )}
              </g>
            )
          })}
        </svg>

        <div className={styles.brandsGrid}>
          {/* ReFlow (Center) */}
          <div
            className={`${styles.brandNode} ${styles.brandNodeCenter} ${activeBrand === 'reflow' ? styles.brandNodeActive : ''}`}
            onClick={() => handleBrandClick('reflow')}
            style={{ borderColor: brands[0].color }}
          >
            <div className={styles.brandIcon} style={{ background: brands[0].color }}>
              {brands[0].icon}
            </div>
            <h3 className={styles.brandName}>{brands[0].name}</h3>
            <p className={styles.brandDesc}>{brands[0].description}</p>
            {activeBrand === 'reflow' && (
              <div className={styles.brandDetails}>
                <p className={styles.detailText}>Core Product</p>
                <p className={styles.detailSubtext}>Connects all brands</p>
              </div>
            )}
          </div>

          {/* Other Brands (Corners) */}
          {brands.slice(1).map((brand, idx) => {
            const positions = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
            const position = positions[idx]

            return (
              <div
                key={brand.id}
                className={`${styles.brandNode} ${styles[`brandNode${position.charAt(0).toUpperCase() + position.slice(1)}`]} ${activeBrand === brand.id ? styles.brandNodeActive : ''}`}
                onClick={() => handleBrandClick(brand.id)}
                style={{ borderColor: brand.color }}
              >
                <div className={styles.brandIcon} style={{ background: brand.color }}>
                  {brand.icon}
                </div>
                <h3 className={styles.brandName}>{brand.name}</h3>
                <p className={styles.brandDesc}>{brand.description}</p>
                {activeBrand === brand.id && brand.link && (
                  <div className={styles.brandDetails}>
                    <a
                      href={brand.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.brandLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Website →
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendIcon}>🎯</div>
          <span>Click brands to see connections</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendLine}></div>
          <span>Integrated workflows</span>
        </div>
      </div>
    </div>
  )
}
