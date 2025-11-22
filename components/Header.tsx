'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav className={styles.navbar} role="navigation" aria-label="main navigation">
        <div className={styles.navbarContainer}>
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logoLink} onClick={closeMenu}>
              <div className={styles.logoImage}>
                <Image
                  src="https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/logos/reflow-favicon.png"
                  alt="ReFlow Toilets Logo"
                  width={42}
                  height={42}
                  style={{ height: '42px' }}
                />
              </div>
              <span className={styles.logoText}>ReFlow Toilets</span>
            </Link>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`}></span>
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`}></span>
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`}></span>
          </button>

          <div className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
            {isMenuOpen && (
              <button
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>
            )}
            <Link href="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
            <Link href="/tech" className={styles.navLink} onClick={closeMenu}>Tech</Link>
            <Link href="/b-crt" className={styles.navLink} onClick={closeMenu}>B-CRT</Link>
            <Link href="/innovation" className={styles.navLink} onClick={closeMenu}>Innovation</Link>
            <Link href="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link>
            <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
            {isMenuOpen && (
              <a
                href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookCallButton}
                onClick={closeMenu}
              >
                Book Call
              </a>
            )}
          </div>

          <div className={styles.navEnd}>
            <a
              href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookCallButton}
            >
              Book Call
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

