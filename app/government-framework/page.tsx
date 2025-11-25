'use client'

import { useState } from 'react'
import styles from './page.module.css'
import ScrollReveal from '@/components/ScrollReveal'
import LuxuryButton from '@/components/LuxuryButton'

// Decision tree questions and logic
interface Question {
  id: string
  question: string
  options: {
    text: string
    value: string
    nextQuestion?: string
  }[]
}

const decisionQuestions: Question[] = [
  {
    id: 'crz',
    question: 'Is your district located in a Coastal Regulation Zone (CRZ)?',
    options: [
      { text: 'Yes, we are in CRZ', value: 'yes', nextQuestion: 'water' },
      { text: 'No, not in CRZ', value: 'no', nextQuestion: 'water' },
    ],
  },
  {
    id: 'water',
    question: 'Does your district face water scarcity issues?',
    options: [
      { text: 'Yes, severe water scarcity', value: 'severe', nextQuestion: 'users' },
      { text: 'Yes, seasonal scarcity', value: 'seasonal', nextQuestion: 'users' },
      { text: 'No water issues', value: 'no', nextQuestion: 'users' },
    ],
  },
  {
    id: 'users',
    question: 'How many daily users do you need to serve per location?',
    options: [
      { text: 'Less than 500', value: '<500', nextQuestion: 'infrastructure' },
      { text: '500-2000', value: '500-2000', nextQuestion: 'infrastructure' },
      { text: 'More than 2000', value: '>2000', nextQuestion: 'infrastructure' },
    ],
  },
  {
    id: 'infrastructure',
    question: 'Do you have existing sewage infrastructure?',
    options: [
      { text: 'Yes, fully connected', value: 'full', nextQuestion: 'budget' },
      { text: 'Partial coverage', value: 'partial', nextQuestion: 'budget' },
      { text: 'No infrastructure', value: 'none', nextQuestion: 'budget' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your annual sanitation budget?',
    options: [
      { text: 'Less than ₹1 Crore', value: '<1cr' },
      { text: '₹1-5 Crores', value: '1-5cr' },
      { text: 'More than ₹5 Crores', value: '>5cr' },
    ],
  },
]

interface PolicyItem {
  title: string
  criteria: string[]
  status: 'full' | 'partial' | 'exceeds'
}

const policyAlignment: PolicyItem[] = [
  {
    title: 'Swachh Bharat Mission 2.0',
    criteria: [
      'ODF++ certification support',
      'Sustainable sanitation systems',
      'No manual scavenging',
      'Safe treatment and disposal',
      'Water conservation focus',
    ],
    status: 'exceeds',
  },
  {
    title: 'Aspirational Toilets & ODF++ Criteria',
    criteria: [
      'Zero discharge to environment',
      'No fecal sludge generation',
      'Safe, hygienic user experience',
      'Minimal water consumption',
      'Preventive maintenance systems',
    ],
    status: 'exceeds',
  },
  {
    title: 'CRZ Regulations (2019)',
    criteria: [
      'Zero liquid discharge',
      'No sewage pipe infrastructure required',
      'Environmental clearance compatible',
      'Minimal ground disturbance',
      'Beach & coastal area compliant',
    ],
    status: 'full',
  },
  {
    title: 'Smart Cities Mission',
    criteria: [
      'IoT-enabled monitoring',
      'Real-time data dashboards',
      'Predictive maintenance alerts',
      'Remote management capability',
      'Integration with city systems',
    ],
    status: 'full',
  },
  {
    title: 'National FSSM Policy',
    criteria: [
      'Safe containment',
      'Professional emptying (no manual)',
      'Proper treatment before disposal',
      'Resource recovery alignment',
      'Decentralized approach',
    ],
    status: 'exceeds',
  },
]

interface ProcurementStep {
  step: number
  title: string
  description: string
  duration: string
  documents: string[]
}

const procurementSteps: ProcurementStep[] = [
  {
    step: 1,
    title: 'Feasibility Assessment',
    description: 'Site survey and requirement analysis with ReFlow technical team',
    duration: '1-2 weeks',
    documents: [
      'Site location maps',
      'Expected daily footfall estimates',
      'Existing infrastructure details',
      'Power/water availability data',
    ],
  },
  {
    step: 2,
    title: 'Budget Approval & Funding',
    description: 'Identify funding sources and secure internal approvals',
    duration: '2-4 weeks',
    documents: [
      'Cost-benefit analysis report',
      'Funding source identification',
      'Budget justification note',
      'Council/committee approval',
    ],
  },
  {
    step: 3,
    title: 'Tender Preparation',
    description: 'Prepare tender documents with technical specifications',
    duration: '1-2 weeks',
    documents: [
      'Technical specifications (provided by ReFlow)',
      'Evaluation criteria matrix',
      'Terms and conditions',
      'Pre-qualification requirements',
    ],
  },
  {
    step: 4,
    title: 'Vendor Evaluation',
    description: 'Evaluate proposals based on technical and financial criteria',
    duration: '2-3 weeks',
    documents: [
      'Technical compliance checklist',
      'Financial bid comparison',
      'Reference verification',
      'ISO30500 certification verification',
    ],
  },
  {
    step: 5,
    title: 'Contract Award & Deployment',
    description: 'Finalize contract and begin installation',
    duration: '4-8 weeks',
    documents: [
      'Purchase order',
      'Delivery schedule',
      'Installation plan',
      'Maintenance SLA agreement',
    ],
  },
]

interface FundingSource {
  name: string
  description: string
  quantum: string
  eligibility: string
  process: string
}

const fundingSources: FundingSource[] = [
  {
    name: 'Swachh Bharat Mission 2.0',
    description: 'Central government grants for sustainable sanitation infrastructure',
    quantum: 'Up to 60% project cost',
    eligibility: 'All urban local bodies',
    process: 'Apply through state mission directorate with DPR',
  },
  {
    name: 'State Urban Development Funds',
    description: 'State-level infrastructure development grants',
    quantum: 'Varies by state (20-40%)',
    eligibility: 'Municipal corporations and municipalities',
    process: 'Submit project proposal to state urban development department',
  },
  {
    name: 'Smart Cities Mission Funding',
    description: 'For cities under Smart Cities Mission',
    quantum: 'Project-based funding',
    eligibility: 'Designated smart cities',
    process: 'Include in Area-Based Development proposals',
  },
  {
    name: 'CSR Partnerships',
    description: 'Corporate Social Responsibility funding from private companies',
    quantum: '100% funding possible',
    eligibility: 'All government bodies',
    process: 'Approach companies with CSR programs (ReFlow can facilitate)',
  },
  {
    name: 'PPP Models',
    description: 'Public-Private Partnership for installation and operation',
    quantum: 'Zero upfront cost',
    eligibility: 'All government bodies',
    process: 'Revenue-sharing or fee-based operational model',
  },
  {
    name: '15th Finance Commission Grants',
    description: 'Tied grants for water and sanitation',
    quantum: 'Performance-based allocation',
    eligibility: 'All urban local bodies',
    process: 'Include in annual action plan submission',
  },
]

interface Objection {
  objection: string
  response: string
  evidence: string
}

const commonObjections: Objection[] = [
  {
    objection: 'Cost is too high compared to traditional toilets',
    response: 'B-CRT has 73% lower lifetime cost due to zero water bills, minimal maintenance, and no sewage infrastructure needed',
    evidence: 'Hyderabad case study: ₹2.1 Cr annual savings vs traditional systems',
  },
  {
    objection: 'We already have sewage infrastructure',
    response: 'B-CRT complements existing infrastructure for areas without coverage and provides backup during sewage failures',
    evidence: 'Visakhapatnam deployed 15 units alongside existing sewerage, reducing overflow incidents by 85%',
  },
  {
    objection: 'Technology is unproven in India',
    response: 'B-CRT has 73+ deployments across 3 major cities with 99.2% uptime over 2+ years',
    evidence: 'ISO30500 certified, endorsed by Gates Foundation, operational in Hyderabad since 2023',
  },
  {
    objection: 'Maintenance will be complex',
    response: 'IoT-based predictive maintenance with 24/7 monitoring. Automated alerts reduce manual oversight by 90%',
    evidence: 'Navi Mumbai: Response time reduced from 48 hours to <2 hours',
  },
  {
    objection: 'Won\'t work in our climate/conditions',
    response: 'B-CRT is climate-agnostic. Solar-powered, works in coastal/desert/hilly/flood-prone areas',
    evidence: 'Operating successfully in coastal Navi Mumbai and landlocked Hyderabad',
  },
  {
    objection: 'Users won\'t accept new technology',
    response: 'User satisfaction rate is 94% due to cleanliness, odor control, and modern design',
    evidence: 'Tourist areas in Navi Mumbai show 94% satisfaction in surveys',
  },
]

interface ComparisonRow {
  criteria: string
  bcrt: string
  sewered: string
  bioToilet: string
  other: string
}

const comparisonData: ComparisonRow[] = [
  {
    criteria: 'Capital Cost (per unit)',
    bcrt: '₹15-20 lakhs',
    sewered: '₹8-12 lakhs + sewage pipeline (₹50L-1Cr/km)',
    bioToilet: '₹3-5 lakhs',
    other: '₹10-15 lakhs',
  },
  {
    criteria: 'Operating Cost (annual)',
    bcrt: '₹1.2-1.5 lakhs',
    sewered: '₹4-6 lakhs (water + sewage treatment)',
    bioToilet: '₹2-3 lakhs (water + bacteria)',
    other: '₹3-5 lakhs',
  },
  {
    criteria: 'Water Consumption',
    bcrt: 'Zero external water needed',
    sewered: '15-20,000 L/day',
    bioToilet: '8-10,000 L/day',
    other: '5-8,000 L/day',
  },
  {
    criteria: 'Sewage Infrastructure',
    bcrt: 'Not required',
    sewered: 'Mandatory (₹50L-1Cr/km)',
    bioToilet: 'Required for liquid discharge',
    other: 'Often required',
  },
  {
    criteria: 'Environmental Compliance',
    bcrt: 'ISO30500, Zero discharge',
    sewered: 'Requires STP, discharge norms',
    bioToilet: 'Partial (liquid discharge)',
    other: 'Varies',
  },
  {
    criteria: 'CRZ Suitability',
    bcrt: 'Fully compliant',
    sewered: 'Not allowed in many CRZ areas',
    bioToilet: 'Conditional approval',
    other: 'Generally not suitable',
  },
  {
    criteria: 'Maintenance Frequency',
    bcrt: 'Quarterly service, IoT monitoring',
    sewered: 'Daily cleaning + sewage line maintenance',
    bioToilet: 'Weekly bacteria dosing + cleaning',
    other: 'Bi-weekly to monthly',
  },
  {
    criteria: 'Uptime Reliability',
    bcrt: '99.2% (proven)',
    sewered: '85-90% (pipe blockages)',
    bioToilet: '80-85% (bacteria failures)',
    other: '85-90%',
  },
  {
    criteria: 'Scalability',
    bcrt: 'Modular, any location',
    sewered: 'Limited by sewage network',
    bioToilet: 'Limited by discharge capacity',
    other: 'Site-dependent',
  },
  {
    criteria: 'Smart Features',
    bcrt: 'Full IoT, real-time monitoring',
    sewered: 'Limited to none',
    bioToilet: 'None',
    other: 'Limited',
  },
]

interface CaseStudyData {
  city: string
  state: string
  units: number
  deployment: string
  costSaving: string
  waterSaved: string
  uptime: string
  satisfaction: string
  keyOutcome: string
}

const detailedCaseStudies: CaseStudyData[] = [
  {
    city: 'Hyderabad',
    state: 'Telangana',
    units: 50,
    deployment: 'Metro stations, parks, public squares',
    costSaving: '₹2.1 Cr/year (73% reduction)',
    waterSaved: '18 million liters/year',
    uptime: '99.2%',
    satisfaction: 'Not measured',
    keyOutcome: '12 other cities visited to study implementation',
  },
  {
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    units: 8,
    deployment: 'Beachfront and tourist areas',
    costSaving: '₹45 lakhs/year',
    waterSaved: '2.4 million liters/year',
    uptime: '99.5%',
    satisfaction: '94%',
    keyOutcome: 'Environmental Score A+, CRZ compliant',
  },
  {
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    units: 15,
    deployment: 'IT parks, commercial zones',
    costSaving: '₹80 lakhs/year',
    waterSaved: '4.5 million liters/year',
    uptime: '99.0%',
    satisfaction: 'Not measured',
    keyOutcome: 'Response time reduced from 48h to <2h, complaints down 85%',
  },
]

export default function GovernmentFrameworkPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState<'all' | 'sbm' | 'crz' | 'smart' | 'fssm'>('all')

  const handleAnswer = (questionId: string, value: string, nextQuestion: string | null | undefined) => {
    setAnswers({ ...answers, [questionId]: value })

    if (nextQuestion) {
      const nextIndex = decisionQuestions.findIndex(q => q.id === nextQuestion)
      setCurrentQuestion(nextIndex)
    } else {
      setShowResults(true)
    }
  }

  const resetWizard = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const generateRecommendation = () => {
    const isCRZ = answers['crz'] === 'yes'
    const hasWaterScarcity = answers['water'] !== 'no'
    const noInfrastructure = answers['infrastructure'] === 'none'
    const highUsers = answers['users'] === '>2000'

    let score = 0
    const reasons = []

    if (isCRZ) {
      score += 30
      reasons.push('CRZ compliance is mandatory - B-CRT is the only zero-discharge solution')
    }

    if (hasWaterScarcity) {
      score += 25
      reasons.push('B-CRT eliminates water consumption, saving millions of liters annually')
    }

    if (noInfrastructure) {
      score += 25
      reasons.push('No sewage infrastructure needed - saves ₹50L-1Cr per kilometer')
    }

    if (highUsers) {
      score += 10
      reasons.push('B-CRT handles high footfall with 99.2% uptime reliability')
    } else {
      score += 10
      reasons.push('B-CRT is cost-effective for all usage levels')
    }

    return { score, reasons }
  }

  const { score, reasons } = showResults ? generateRecommendation() : { score: 0, reasons: [] }

  const filteredPolicies = activeTab === 'all'
    ? policyAlignment
    : policyAlignment.filter(p => {
        if (activeTab === 'sbm') return p.title.includes('Swachh Bharat')
        if (activeTab === 'crz') return p.title.includes('CRZ')
        if (activeTab === 'smart') return p.title.includes('Smart Cities')
        if (activeTab === 'fssm') return p.title.includes('FSSM')
        return true
      })

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.heroContent}>
              <div className={styles.badge}>Government Decision Framework</div>
              <h1 className={styles.heroTitle}>
                Why Districts Choose B-CRT:
                <br />
                <span className={styles.highlight}>The Complete Decision Framework</span>
              </h1>
              <p className={styles.heroSubtitle}>
                A comprehensive guide for municipal decision-makers to evaluate B-CRT technology
                for public sanitation infrastructure. Based on 73 deployments across 3 major cities.
              </p>
              <div className={styles.heroActions}>
                <LuxuryButton href="#wizard" variant="primary" size="lg">
                  Start Decision Wizard
                </LuxuryButton>
                <LuxuryButton href="#procurement" variant="secondary" size="lg">
                  View Procurement Guide
                </LuxuryButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Decision Tree Wizard */}
      <section id="wizard" className={styles.wizardSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Interactive Decision Wizard</h2>
              <p className={styles.sectionSubtitle}>
                Answer 5 questions to see if B-CRT is right for your district
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.wizard}>
              {!showResults ? (
                <>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${((currentQuestion + 1) / decisionQuestions.length) * 100}%` }}
                    ></div>
                  </div>

                  <div className={styles.questionCard}>
                    <div className={styles.questionNumber}>
                      Question {currentQuestion + 1} of {decisionQuestions.length}
                    </div>
                    <h3 className={styles.questionText}>
                      {decisionQuestions[currentQuestion].question}
                    </h3>
                    <div className={styles.options}>
                      {decisionQuestions[currentQuestion].options.map((option, idx) => (
                        <button
                          key={idx}
                          className={styles.optionButton}
                          onClick={() => handleAnswer(
                            decisionQuestions[currentQuestion].id,
                            option.value,
                            option.nextQuestion
                          )}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.results}>
                  <div className={styles.resultScore}>
                    <div className={styles.scoreCircle}>
                      <span className={styles.scoreNumber}>{score}</span>
                      <span className={styles.scoreLabel}>/ 100</span>
                    </div>
                    <h3 className={styles.resultTitle}>
                      {score >= 70 ? 'Highly Recommended' : score >= 50 ? 'Recommended' : 'Consider B-CRT'}
                    </h3>
                  </div>

                  <div className={styles.resultReasons}>
                    <h4>Why B-CRT is suitable for your district:</h4>
                    <ul>
                      {reasons.map((reason, idx) => (
                        <li key={idx}>{reason}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.resultActions}>
                    <LuxuryButton onClick={resetWizard} variant="outline">
                      Start Over
                    </LuxuryButton>
                    <LuxuryButton href="https://calendar.app.google/5pRiSHEjP851jiNQ7" variant="primary">
                      Schedule Consultation
                    </LuxuryButton>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Policy Alignment Section */}
      <section className={styles.policySection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Government Policy Alignment</h2>
              <p className={styles.sectionSubtitle}>
                B-CRT meets or exceeds all major Indian sanitation policy requirements
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.policyTabs}>
              <button
                className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Policies
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'sbm' ? styles.active : ''}`}
                onClick={() => setActiveTab('sbm')}
              >
                SBM 2.0
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'crz' ? styles.active : ''}`}
                onClick={() => setActiveTab('crz')}
              >
                CRZ
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'smart' ? styles.active : ''}`}
                onClick={() => setActiveTab('smart')}
              >
                Smart Cities
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'fssm' ? styles.active : ''}`}
                onClick={() => setActiveTab('fssm')}
              >
                FSSM
              </button>
            </div>
          </ScrollReveal>

          <div className={styles.policyGrid}>
            {filteredPolicies.map((policy, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={styles.policyCard}>
                  <div className={styles.policyHeader}>
                    <h3 className={styles.policyTitle}>{policy.title}</h3>
                    <span className={`${styles.statusBadge} ${styles[policy.status]}`}>
                      {policy.status === 'exceeds' ? '✓✓ Exceeds' : policy.status === 'full' ? '✓ Full Compliance' : 'Partial'}
                    </span>
                  </div>
                  <ul className={styles.criteriaList}>
                    {policy.criteria.map((criterion, cidx) => (
                      <li key={cidx}>
                        <span className={styles.checkmark}>✓</span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Guide */}
      <section id="procurement" className={styles.procurementSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Step-by-Step Procurement Guide</h2>
              <p className={styles.sectionSubtitle}>
                Complete roadmap from evaluation to deployment
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.timeline}>
            {procurementSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.stepNumber}>{step.step}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.stepHeader}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <span className={styles.duration}>{step.duration}</span>
                    </div>
                    <p className={styles.stepDescription}>{step.description}</p>
                    <div className={styles.documents}>
                      <h4>Required Documents:</h4>
                      <ul>
                        {step.documents.map((doc, didx) => (
                          <li key={didx}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className={styles.downloadSection}>
              <h3>Request Procurement Resources</h3>
              <div className={styles.downloadGrid}>
                <div className={styles.downloadCard}>
                  <div className={styles.downloadIcon}>📄</div>
                  <h4>Sample Tender Document</h4>
                  <p>Ready-to-use tender specifications for ISO30500 compliant systems</p>
                  <LuxuryButton
                    href="/contact?subject=Request%20Tender%20Document&message=Please%20send%20me%20the%20sample%20tender%20document%20for%20ISO30500%20compliant%20sanitation%20systems."
                    variant="outline"
                    size="sm"
                  >
                    Request Document
                  </LuxuryButton>
                </div>
                <div className={styles.downloadCard}>
                  <div className={styles.downloadIcon}>📊</div>
                  <h4>Budget Justification Template</h4>
                  <p>For internal approvals and council presentations</p>
                  <LuxuryButton
                    href="/contact?subject=Request%20Budget%20Template&message=Please%20send%20me%20the%20budget%20justification%20template%20for%20ReFlow%20toilet%20deployment."
                    variant="outline"
                    size="sm"
                  >
                    Request Template
                  </LuxuryButton>
                </div>
                <div className={styles.downloadCard}>
                  <div className={styles.downloadIcon}>✅</div>
                  <h4>Evaluation Criteria Matrix</h4>
                  <p>Technical & financial scoring framework</p>
                  <LuxuryButton
                    href="/contact?subject=Request%20Evaluation%20Criteria&message=Please%20send%20me%20the%20evaluation%20criteria%20matrix%20for%20vendor%20assessment."
                    variant="outline"
                    size="sm"
                  >
                    Request Matrix
                  </LuxuryButton>
                </div>
                <div className={styles.downloadCard}>
                  <div className={styles.downloadIcon}>🏛️</div>
                  <h4>Request Site Visit</h4>
                  <p>Visit our operational units in Hyderabad</p>
                  <LuxuryButton
                    href="https://calendar.app.google/5pRiSHEjP851jiNQ7"
                    variant="primary"
                    size="sm"
                  >
                    Schedule Site Visit
                  </LuxuryButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Funding Sources */}
      <section className={styles.fundingSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Funding Sources & Financial Models</h2>
              <p className={styles.sectionSubtitle}>
                Multiple pathways to fund your B-CRT deployment
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.fundingGrid}>
            {fundingSources.map((source, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={styles.fundingCard}>
                  <h3 className={styles.fundingName}>{source.name}</h3>
                  <p className={styles.fundingDescription}>{source.description}</p>
                  <div className={styles.fundingDetails}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Quantum:</span>
                      <span className={styles.detailValue}>{source.quantum}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Eligibility:</span>
                      <span className={styles.detailValue}>{source.eligibility}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Process:</span>
                      <span className={styles.detailValue}>{source.process}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className={styles.fundingCta}>
              <h3>Need help with funding applications?</h3>
              <p>Our team can assist with DPR preparation, grant applications, and CSR partnerships</p>
              <LuxuryButton href="/contact" variant="primary">
                Get Funding Assistance
              </LuxuryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Risk Mitigation / Objection Handling */}
      <section className={styles.objectionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Common Objections & Responses</h2>
              <p className={styles.sectionSubtitle}>
                Evidence-based answers to concerns raised by decision-makers
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.objectionList}>
            {commonObjections.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={styles.objectionCard}>
                  <div className={styles.objectionHeader}>
                    <span className={styles.objectionIcon}>⚠️</span>
                    <h3 className={styles.objectionText}>{item.objection}</h3>
                  </div>
                  <div className={styles.response}>
                    <h4>Response:</h4>
                    <p>{item.response}</p>
                  </div>
                  <div className={styles.evidence}>
                    <h4>Evidence:</h4>
                    <p>{item.evidence}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Technology Comparison Matrix</h2>
              <p className={styles.sectionSubtitle}>
                How B-CRT stacks up against alternatives
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.comparisonTableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th className={styles.highlighted}>B-CRT (ReFlow)</th>
                    <th>Traditional Sewered</th>
                    <th>Bio-Toilets</th>
                    <th>Other NSS Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className={styles.criteriaCell}>{row.criteria}</td>
                      <td className={styles.highlighted}>{row.bcrt}</td>
                      <td>{row.sewered}</td>
                      <td>{row.bioToilet}</td>
                      <td>{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className={styles.caseStudiesSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Detailed Case Studies</h2>
              <p className={styles.sectionSubtitle}>
                Real-world performance data from government deployments
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.caseStudiesGrid}>
            {detailedCaseStudies.map((study, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={styles.caseStudyCard}>
                  <div className={styles.caseStudyHeader}>
                    <div>
                      <h3 className={styles.cityName}>{study.city}</h3>
                      <p className={styles.stateName}>{study.state}</p>
                    </div>
                    <div className={styles.unitsDeployed}>
                      <span className={styles.unitsNumber}>{study.units}</span>
                      <span className={styles.unitsLabel}>Units</span>
                    </div>
                  </div>

                  <div className={styles.deploymentInfo}>
                    <strong>Deployment:</strong> {study.deployment}
                  </div>

                  <div className={styles.metricsGrid}>
                    <div className={styles.metric}>
                      <div className={styles.metricLabel}>Cost Savings</div>
                      <div className={styles.metricValue}>{study.costSaving}</div>
                    </div>
                    <div className={styles.metric}>
                      <div className={styles.metricLabel}>Water Saved</div>
                      <div className={styles.metricValue}>{study.waterSaved}</div>
                    </div>
                    <div className={styles.metric}>
                      <div className={styles.metricLabel}>Uptime</div>
                      <div className={styles.metricValue}>{study.uptime}</div>
                    </div>
                    {study.satisfaction !== 'Not measured' && (
                      <div className={styles.metric}>
                        <div className={styles.metricLabel}>Satisfaction</div>
                        <div className={styles.metricValue}>{study.satisfaction}</div>
                      </div>
                    )}
                  </div>

                  <div className={styles.keyOutcome}>
                    <strong>Key Outcome:</strong> {study.keyOutcome}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className={styles.aggregateStats}>
              <h3>Aggregate Performance Across All Deployments</h3>
              <div className={styles.aggregateGrid}>
                <div className={styles.aggregateStat}>
                  <div className={styles.aggregateValue}>73</div>
                  <div className={styles.aggregateLabel}>Total Units Deployed</div>
                </div>
                <div className={styles.aggregateStat}>
                  <div className={styles.aggregateValue}>99.2%</div>
                  <div className={styles.aggregateLabel}>Average Uptime</div>
                </div>
                <div className={styles.aggregateStat}>
                  <div className={styles.aggregateValue}>₹4.5Cr+</div>
                  <div className={styles.aggregateLabel}>Annual Savings</div>
                </div>
                <div className={styles.aggregateStat}>
                  <div className={styles.aggregateValue}>24.9M</div>
                  <div className={styles.aggregateLabel}>Liters Water Saved/Year</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.finalCtaContent}>
              <h2>Ready to Transform Your District's Sanitation Infrastructure?</h2>
              <p>
                Join Hyderabad, Navi Mumbai, and Visakhapatnam in providing world-class
                public sanitation to your citizens.
              </p>
              <div className={styles.finalCtaActions}>
                <LuxuryButton href="https://calendar.app.google/5pRiSHEjP851jiNQ7" variant="primary" size="lg">
                  Schedule Feasibility Study
                </LuxuryButton>
                <LuxuryButton href="/contact" variant="secondary" size="lg">
                  Request Site Visit
                </LuxuryButton>
              </div>
              <div className={styles.contactInfo}>
                <p>Or call us directly: <strong>+91-9494330442</strong></p>
                <p>Email: <strong>ved@loocafe.com</strong></p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
