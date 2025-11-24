'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(5)
  const [repairs, setRepairs] = useState(0)
  const [isRepairing, setIsRepairing] = useState(false)

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          window.location.href = '/'
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRepair = () => {
    if (!isRepairing) {
      setIsRepairing(true)
      setRepairs((prev) => prev + 1)
      setTimeout(() => setIsRepairing(false), 1000)
    }
  }

  // Random sanitation/toilet puns
  const puns = [
    '🚽 This page has been flushed away!',
    '404: This URL is clogged! 🪠',
    'This page needs B-CRT technology! 🔬',
    'Error: Sanitation infrastructure not found! 🚧',
    'This page is off the grid... literally! 💡',
    'Sorry, this facility is under maintenance! 🔧',
    '404: Page not reinvented yet! 🏗️',
  ]

  const [currentPun] = useState(puns[Math.floor(Math.random() * puns.length)])

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <h1
            className="text-[150px] sm:text-[200px] md:text-[250px] font-bold leading-none"
            style={{
              background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </h1>

          {/* Interactive toilet icon */}
          <div
            onClick={handleRepair}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl cursor-pointer hover:scale-110 transition-all duration-300 ${
              isRepairing ? 'animate-spin' : 'animate-bounce'
            }`}
            title="Click to repair! 🔧"
          >
            🚽
          </div>

          {/* Repair counter */}
          {repairs > 0 && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-semibold text-gray-700">
                🔧 Repairs: {repairs}
              </span>
            </div>
          )}
        </div>

        {/* Pun */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          {currentPun}
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Looks like this page doesn't exist. But don't worry – we're experts at
          building decentralized sanitation infrastructure, just not at building
          non-existent pages!
        </p>

        {/* Countdown */}
        <div className="mb-8">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold text-white mb-4"
            style={{ backgroundColor: '#0d7377' }}
          >
            {countdown}
          </div>
          <p className="text-sm text-gray-500 mb-2">
            Redirecting you home in {countdown} second{countdown !== 1 ? 's' : ''}...
          </p>
          <p className="text-xs text-gray-400 italic">
            💡 Psst... click the toilet above to repair it! 🔧
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="px-8 py-4 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ backgroundColor: '#0d7377' }}
          >
            Take Me Home Now
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            Contact Support
          </Link>
        </div>

        {/* Fun footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            <strong>Helpful Links:</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/b-crt" className="text-gray-600 hover:text-teal-600 transition-colors">
              B-CRT Technology
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/innovation" className="text-gray-600 hover:text-teal-600 transition-colors">
              Innovation
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/design" className="text-gray-600 hover:text-teal-600 transition-colors">
              Design
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Easter egg */}
        <div className="mt-8 text-xs text-gray-400">
          <p>Error Code: FACILITY_NOT_FOUND</p>
          <p className="mt-1">
            💡 Fun fact: ReFlow builds cutting-edge decentralized sanitation
            infrastructure – but not this page!
          </p>
        </div>
      </div>
    </div>
  )
}
