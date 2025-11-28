'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './LaunchGallery.module.css'

const launchImages = [
  {
    src: '/images/launch-lumbini-park/lumbini-launch-01.jpg',
    alt: 'B-CRT interior toilet cubicle with modern fixtures',
    category: 'interior'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-02.jpg',
    alt: 'B-CRT Unit exterior at Lumbini Park - India\'s first zero-discharge public toilet',
    category: 'unit'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-03.jpg',
    alt: 'B-CRT unit installation at Lumbini Park',
    category: 'unit'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-04.jpg',
    alt: 'Gates Foundation India delegates inspecting B-CRT technology',
    category: 'gates'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-05.jpg',
    alt: 'Gates Foundation delegation and sanitation experts at B-CRT launch',
    category: 'gates'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-06.jpg',
    alt: 'Technical briefing with Gates Foundation representatives',
    category: 'gates'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-07.jpg',
    alt: 'Stakeholders discussing zero-discharge sanitation technology',
    category: 'event'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-08.jpg',
    alt: 'ReFlow team presenting B-CRT technology to Gates Foundation India delegates',
    category: 'gates'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-09.jpg',
    alt: 'Discussion on ISO30500 compliance and scalability',
    category: 'event'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-10.jpg',
    alt: 'Sanitation innovation experts examining treatment system',
    category: 'event'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-11.jpg',
    alt: 'Gates Foundation India team engagement at B-CRT launch',
    category: 'gates'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-12.jpg',
    alt: 'Official inspection of 8-stage water treatment process',
    category: 'event'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-13.jpg',
    alt: 'B-CRT facility demonstration',
    category: 'unit'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-14.jpg',
    alt: 'Historic team photo - First B-CRT deployment with Gates Foundation partners',
    category: 'team'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-15.jpg',
    alt: 'Milestone celebration - India\'s first zero-discharge public toilet',
    category: 'team'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-16.jpg',
    alt: 'B-CRT unit exterior view with solar panels',
    category: 'unit'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-17.jpg',
    alt: 'Launch ceremony at Lumbini Park, Hyderabad',
    category: 'event'
  },
  {
    src: '/images/launch-lumbini-park/lumbini-launch-18.jpg',
    alt: 'Concluding session with all stakeholders',
    category: 'event'
  },
]

export default function LaunchGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="launch-gallery" className={styles.gallery}>
      <div className={styles.container}>
        {/* Milestone Announcement */}
        <div className={styles.milestone}>
          <div className={styles.milestoneContent}>
            <span className={styles.milestoneBadge}>Historic Milestone</span>
            <h2 className={styles.milestoneTitle}>India&apos;s First Zero-Discharge Public Toilet is Live</h2>
            <p className={styles.milestoneText}>
              B-CRT Unit #1 at Lumbini Park, Hyderabad. The culmination of the Gates Foundation&apos;s
              Reinvent the Toilet Challenge, now deployed at scale. Gates Foundation India delegates
              and sanitation experts gathered to witness this breakthrough in public infrastructure.
            </p>
            <div className={styles.milestoneStats}>
              <div className={styles.milestoneStat}>
                <span className={styles.milestoneStatNumber}>$200M+</span>
                <span className={styles.milestoneStatLabel}>Gates Foundation Investment</span>
              </div>
              <div className={styles.milestoneStat}>
                <span className={styles.milestoneStatNumber}>8</span>
                <span className={styles.milestoneStatLabel}>Treatment Stages</span>
              </div>
              <div className={styles.milestoneStat}>
                <span className={styles.milestoneStatNumber}>Zero</span>
                <span className={styles.milestoneStatLabel}>Discharge</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.header}>
          <span className={styles.badge}>November 2025 Launch</span>
          <h2 className={styles.title}>B-CRT Unit #1 at Lumbini Park</h2>
          <p className={styles.subtitle}>
            Gates Foundation India delegates and sanitation experts inspecting the world&apos;s most advanced public toilet
          </p>
        </div>

        <div className={styles.grid}>
          {launchImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.imageCard} ${index === 0 ? styles.featured : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.overlay}>
                <span className={`${styles.categoryBadge} ${image.category === 'gates' ? styles.gatesBadge : ''}`}>
                  {image.category === 'gates' ? 'Gates Foundation' : image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            This deployment represents the first at-scale implementation of Gates Foundation&apos;s
            Reinvent the Toilet technology in India. Ready to transform sanitation in your district?
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/b-crt" className={styles.primaryCta}>
              View Technical Specifications
            </Link>
            <Link href="/contact" className={styles.secondaryCta}>
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            &times;
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={launchImages[selectedImage].src}
              alt={launchImages[selectedImage].alt}
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxHeight: '90vh', width: 'auto' }}
            />
            <p className={styles.lightboxCaption}>{launchImages[selectedImage].alt}</p>
            <span className={styles.lightboxCounter}>{selectedImage + 1} / {launchImages.length}</span>
          </div>
          <button
            className={styles.navBtn + ' ' + styles.prevBtn}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : launchImages.length - 1)
            }}
          >
            &#8249;
          </button>
          <button
            className={styles.navBtn + ' ' + styles.nextBtn}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage < launchImages.length - 1 ? selectedImage + 1 : 0)
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
