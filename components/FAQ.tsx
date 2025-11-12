'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: "What types of public toilet models do you offer?",
    answer: "We offer a range of public toilet models including the B-CRT, bio toilets, and mobile toilets, all equipped with innovative WASH technology."
  },
  {
    question: "How do your public toilets contribute to urban development?",
    answer: "Our public toilets provide a solution to the global toilet problem, promote employment opportunities, and turn street hawkers into toilet entrepreneurs, contributing to urban development."
  },
  {
    question: "What are the key features of your public toilets and WASH technology?",
    answer: "Our public toilets are free to use, scalable, sustainable, and prefabricated, incorporating deep-tech for WASH at scale. We focus on integrated facility management and circular economy practices."
  },
  {
    question: "Who is your target audience for these public toilet solutions?",
    answer: "Our target audience includes municipalities, public facilities, organizations, and the public seeking innovative and sustainable public toilet solutions. We also cater to WASH entrepreneurs interested in implementing these technologies."
  },
  {
    question: "How do your public toilets promote a circular economy?",
    answer: "Our public toilets support a circular economy by being sustainable, hygienic, and accessible to all, while also implementing innovative WASH technology for future-proof solutions."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.spacer} style={{ height: '48px' }}></div>
        
        <h2 className={styles.title}>
          <strong>FAQ</strong>
        </h2>
        
        <p className={styles.subtitle}>
          Got questions? Here are our most frequently asked questions
        </p>
        
        <div className={styles.spacer} style={{ height: '48px' }}></div>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  {faq.question}
                  <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className={styles.spacer} style={{ height: '48px' }}></div>
      </div>
    </section>
  )
}

