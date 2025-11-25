import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Our Team | ReFlow Toilets Leadership',
  description: 'Meet the team behind ReFlow Toilets. Led by Abhishek Nath, our leadership brings 15+ years of sanitation expertise, facilities management, and technology innovation.',
  openGraph: {
    title: 'Our Team | ReFlow Toilets',
    description: 'Meet the experienced team driving India\'s sanitation revolution with B-CRT technology.',
    images: ['https://res.cloudinary.com/dhupieu4x/image/upload/reflow-assets/bcrt/main-bcrt-image.png'],
  },
}

interface TeamMember {
  name: string
  role: string
  bio: string
  linkedin?: string
  image: string
}

const leadershipTeam: TeamMember[] = [
  {
    name: 'Abhishek Nath',
    role: 'MD, Ixora Group',
    bio: 'From running restaurants & resorts, being an area manager to leading global companies, pitching as a startup & now making LooCafe & Ixora Group a global powerhouse for WASH. Transitioned from hotel management to Fortune 50 multinational director role. Currently spearheads LooCafe\'s vision and ReFlow\'s B-CRT technology deployment across India.',
    linkedin: 'https://www.linkedin.com/in/abhisheknath/',
    image: 'https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2uZVocBnmdwX9ZFtc93iTTZVxH_abhishek_nath_photo.png',
  },
  {
    name: 'Chakkravarthi Rajamani',
    role: 'Director, LooCafe',
    bio: 'Brings strategic leadership and operational excellence to our sanitation initiatives. Oversees business development and partnerships across government and private sectors.',
    image: 'https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2j0XaSlOBWarr4zQGX22Z4TsOMf_667ec0b26d475aff07a8e371_chakksPFP-p-500.png',
  },
  {
    name: 'Krishna Chaitanya',
    role: 'Director',
    bio: 'Drives technology integration and innovation across our product lines. Leads the development of IoT monitoring systems and smart sanitation solutions.',
    image: 'https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2j0XpYmDB4wm84JGHbWnbNOPKV8_667ebb7ceb38a6f84e8404a3_8-p-500.png',
  },
  {
    name: 'Athma Jairam',
    role: 'Director',
    bio: 'Oversees operations and ensures SLA compliance across all installations. Manages the 24/7 maintenance network that powers both LooCafe and ReFlow deployments.',
    image: 'https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2j3NfdGh5jApZym7Wdd4v3ZyucS_jairam.png',
  },
  {
    name: 'Vedanth Nath',
    role: 'Innovation Head',
    bio: 'Leads product innovation and R&D for next-generation sanitation solutions. Maintains expertise in WASH sector developments and emerging technologies. Writes about WASH topics at vedanthnath.com/wash.',
    linkedin: 'https://www.linkedin.com/in/vedanthnath/',
    image: 'https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2uZWEV88yH9eqibomtMOLDV3UhS_ved_trasnparent_back.png',
  },
]

const operationsTeam = [
  {
    department: 'Field Operations',
    size: '40+',
    description: 'Trained maintenance technicians across India providing 24/7 support and <4 hour response times.',
  },
  {
    department: 'IoT Monitoring',
    size: '15+',
    description: 'Engineers monitoring real-time data from all B-CRT installations via our cloud dashboard.',
  },
  {
    department: 'Government Relations',
    size: '8+',
    description: 'Dedicated team for tender assistance, procurement support, and district partnerships.',
  },
  {
    department: 'Quality Assurance',
    size: '10+',
    description: 'ISO-certified quality inspectors ensuring every unit meets treatment standards.',
  },
]

export default function TeamPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Our Team</span>
          <h1 className={styles.title}>A Diverse Team, Built to Work on Unconventional Challenges</h1>
          <p className={styles.subtitle}>
            15+ years of sanitation expertise. 270+ toilets deployed. One mission: dignified sanitation for all.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={styles.leadership}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Leadership Team</h2>
          <p className={styles.sectionIntro}>
            Our leadership combines deep sanitation expertise, facilities management experience, and technology innovation to deliver India's most advanced public sanitation solutions.
          </p>

          <div className={styles.leadershipGrid}>
            {leadershipTeam.map((member, index) => (
              <div key={index} className={styles.leaderCard}>
                <div className={styles.leaderHeader}>
                  <div className={styles.leaderAvatar}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className={styles.avatarImage}
                      unoptimized
                    />
                  </div>
                  <div className={styles.leaderTitle}>
                    <h3 className={styles.leaderName}>{member.name}</h3>
                    <p className={styles.leaderRole}>{member.role}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedinLink}
                      >
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>

                <p className={styles.leaderBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Team */}
      <section className={styles.operations}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Operations Network</h2>
          <p className={styles.sectionIntro}>
            Powered by Ixora Group's 15-year operational infrastructure, ensuring 24/7 reliability across all installations.
          </p>

          <div className={styles.opsGrid}>
            {operationsTeam.map((dept, index) => (
              <div key={index} className={styles.opsCard}>
                <div className={styles.opsNumber}>{dept.size}</div>
                <h3 className={styles.opsTitle}>{dept.department}</h3>
                <p className={styles.opsText}>{dept.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.totalTeam}>
            <div className={styles.totalNumber}>75+</div>
            <div className={styles.totalLabel}>Total Team Members Dedicated to ReFlow</div>
          </div>
        </div>
      </section>

      {/* Ixora Group Connection */}
      <section className={styles.ixora}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Part of Ixora Group</h2>
          <p className={styles.sectionIntro}>
            ReFlow Toilets is operated by Ixora Group — India's trusted integrated facilities management company.
          </p>

          <div className={styles.ixoraStats}>
            <div className={styles.ixoraStat}>
              <span className={styles.ixoraStatValue}>15+</span>
              <span className={styles.ixoraStatLabel}>Years of Operations</span>
            </div>
            <div className={styles.ixoraStat}>
              <span className={styles.ixoraStatValue}>5</span>
              <span className={styles.ixoraStatLabel}>Service Lines</span>
            </div>
            <div className={styles.ixoraStat}>
              <span className={styles.ixoraStatValue}>270+</span>
              <span className={styles.ixoraStatLabel}>LooCafe Units</span>
            </div>
            <div className={styles.ixoraStat}>
              <span className={styles.ixoraStatValue}>24/7</span>
              <span className={styles.ixoraStatLabel}>Support Network</span>
            </div>
          </div>

          <div className={styles.ixoraServices}>
            <span className={styles.serviceTag}>Facilities Management</span>
            <span className={styles.serviceTag}>Cleaning Services</span>
            <span className={styles.serviceTag}>Security Services</span>
            <span className={styles.serviceTag}>Hard Services</span>
            <span className={styles.serviceTag}>Pest Control</span>
            <span className={styles.serviceTag}>Payroll Management</span>
          </div>

          <p className={styles.ixoraText}>
            From airports to data centers, from educational institutions to government facilities — Ixora Group's operational excellence now powers ReFlow's B-CRT technology deployment across India.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Work With Us</h2>
          <p className={styles.ctaText}>
            Whether you're a district collector, municipal engineer, or sanitation expert — let's discuss how B-CRT can solve your challenges.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Our Team
            </Link>
            <Link href="/hiring" className={styles.ctaButtonSecondary}>
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
