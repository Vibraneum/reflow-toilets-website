'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

type MenuKey = 'technology' | 'solutions' | 'resources' | null

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveMenu(null)
  }

  const handleMouseEnter = (menu: MenuKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
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

      {/* Mega Menu Backdrop */}
      {activeMenu && (
        <div
          className={styles.megaBackdrop}
          onMouseEnter={handleMouseLeave}
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

            {/* Technology Dropdown */}
            <div
              className={styles.navDropdown}
              onMouseEnter={() => handleMouseEnter('technology')}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`${styles.navLink} ${styles.navLinkDropdown}`}>
                Technology
                <svg className={styles.dropdownArrow} viewBox="0 0 12 12" width="10" height="10">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              {activeMenu === 'technology' && (
                <div className={styles.megaMenu} onMouseEnter={() => handleMouseEnter('technology')}>
                  <div className={styles.megaMenuInner}>
                    <div className={styles.megaColumn}>
                      <h4 className={styles.megaColumnTitle}>Core Technology</h4>
                      <Link href="/b-crt" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>🔬</div>
                        <div>
                          <span className={styles.megaLinkTitle}>B-CRT Technology</span>
                          <span className={styles.megaLinkDesc}>8-stage bio-circular resource treatment</span>
                        </div>
                      </Link>
                      <Link href="/tech" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>⚙️</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Technical Specs</span>
                          <span className={styles.megaLinkDesc}>IoT, solar, water recycling details</span>
                        </div>
                      </Link>
                      <Link href="/innovation" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>💡</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Innovation</span>
                          <span className={styles.megaLinkDesc}>Our reinvented toilet mission</span>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.megaColumn}>
                      <h4 className={styles.megaColumnTitle}>Design & Products</h4>
                      <Link href="/design" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>🎨</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Design Solutions</span>
                          <span className={styles.megaLinkDesc}>Containerized deployment</span>
                        </div>
                      </Link>
                      <Link href="/products" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>📦</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Product Range</span>
                          <span className={styles.megaLinkDesc}>Mini, Standard, 40ft units</span>
                        </div>
                      </Link>
                      <Link href="/compare" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>⚖️</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Compare Options</span>
                          <span className={styles.megaLinkDesc}>Side-by-side comparison</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className={styles.navDropdown}
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`${styles.navLink} ${styles.navLinkDropdown}`}>
                Solutions
                <svg className={styles.dropdownArrow} viewBox="0 0 12 12" width="10" height="10">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              {activeMenu === 'solutions' && (
                <div className={styles.megaMenu} onMouseEnter={() => handleMouseEnter('solutions')}>
                  <div className={styles.megaMenuInner}>
                    <div className={styles.megaColumn}>
                      <h4 className={styles.megaColumnTitle}>For Districts</h4>
                      <Link href="/government-framework" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>🏛️</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Decision Framework</span>
                          <span className={styles.megaLinkDesc}>Guide for government buyers</span>
                        </div>
                      </Link>
                      <Link href="/roi-calculator" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>📊</div>
                        <div>
                          <span className={styles.megaLinkTitle}>ROI Calculator</span>
                          <span className={styles.megaLinkDesc}>Calculate your savings</span>
                        </div>
                      </Link>
                      <Link href="/configure-bundle" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>🛠️</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Configure Bundle</span>
                          <span className={styles.megaLinkDesc}>Build your deployment package</span>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.megaColumn}>
                      <h4 className={styles.megaColumnTitle}>Partnership</h4>
                      <Link href="/partners" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>🤝</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Partner Program</span>
                          <span className={styles.megaLinkDesc}>Join our ecosystem</span>
                        </div>
                      </Link>
                      <Link href="/configure" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>⚡</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Configure System</span>
                          <span className={styles.megaLinkDesc}>Custom configuration</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className={styles.navDropdown}
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`${styles.navLink} ${styles.navLinkDropdown}`}>
                Resources
                <svg className={styles.dropdownArrow} viewBox="0 0 12 12" width="10" height="10">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              {activeMenu === 'resources' && (
                <div className={styles.megaMenu} onMouseEnter={() => handleMouseEnter('resources')}>
                  <div className={styles.megaMenuInner}>
                    <div className={styles.megaColumn}>
                      <h4 className={styles.megaColumnTitle}>Learn</h4>
                      <Link href="/knowledge" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>📚</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Knowledge Hub</span>
                          <span className={styles.megaLinkDesc}>Sanitation research & data</span>
                        </div>
                      </Link>
                      <Link href="/blog" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>✍️</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Blog</span>
                          <span className={styles.megaLinkDesc}>Articles and insights</span>
                        </div>
                      </Link>
                      <Link href="/events" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>📅</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Events</span>
                          <span className={styles.megaLinkDesc}>Conferences & milestones</span>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.megaColumn}>
                      <h4 className={styles.megaColumnTitle}>Company</h4>
                      <Link href="/about" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>🏢</div>
                        <div>
                          <span className={styles.megaLinkTitle}>About Us</span>
                          <span className={styles.megaLinkDesc}>Our story & mission</span>
                        </div>
                      </Link>
                      <Link href="/hiring" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>💼</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Careers</span>
                          <span className={styles.megaLinkDesc}>Join our team</span>
                        </div>
                      </Link>
                      <Link href="/contact" className={styles.megaLink} onClick={closeMenu}>
                        <div className={styles.megaLinkIcon}>📧</div>
                        <div>
                          <span className={styles.megaLinkTitle}>Contact</span>
                          <span className={styles.megaLinkDesc}>Get in touch</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile-only links */}
            {isMenuOpen && (
              <>
                <div className={styles.mobileSection}>
                  <h4 className={styles.mobileSectionTitle}>Technology</h4>
                  <Link href="/b-crt" className={styles.navLink} onClick={closeMenu}>B-CRT Technology</Link>
                  <Link href="/tech" className={styles.navLink} onClick={closeMenu}>Technical Specs</Link>
                  <Link href="/innovation" className={styles.navLink} onClick={closeMenu}>Innovation</Link>
                  <Link href="/design" className={styles.navLink} onClick={closeMenu}>Design Solutions</Link>
                  <Link href="/products" className={styles.navLink} onClick={closeMenu}>Products</Link>
                </div>
                <div className={styles.mobileSection}>
                  <h4 className={styles.mobileSectionTitle}>Solutions</h4>
                  <Link href="/government-framework" className={styles.navLink} onClick={closeMenu}>Decision Framework</Link>
                  <Link href="/roi-calculator" className={styles.navLink} onClick={closeMenu}>ROI Calculator</Link>
                  <Link href="/configure-bundle" className={styles.navLink} onClick={closeMenu}>Configure Bundle</Link>
                  <Link href="/partners" className={styles.navLink} onClick={closeMenu}>Partners</Link>
                </div>
                <div className={styles.mobileSection}>
                  <h4 className={styles.mobileSectionTitle}>Resources</h4>
                  <Link href="/knowledge" className={styles.navLink} onClick={closeMenu}>Knowledge Hub</Link>
                  <Link href="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link>
                  <Link href="/events" className={styles.navLink} onClick={closeMenu}>Events</Link>
                  <Link href="/about" className={styles.navLink} onClick={closeMenu}>About Us</Link>
                  <Link href="/hiring" className={styles.navLink} onClick={closeMenu}>Careers</Link>
                  <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
                </div>
                <a
                  href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookCallButton}
                  onClick={closeMenu}
                >
                  Book Call
                </a>
              </>
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
