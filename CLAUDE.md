# ReFlow Toilets Website - Development Documentation

**Last Updated**: November 13, 2025
**Project Type**: Next.js Application (App Router)
**Domain**: reflowtoilets.com
**Status**: Production Ready

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Business Context](#business-context)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Development Workflow](#development-workflow)
6. [Design System](#design-system)
7. [Features & Components](#features--components)
8. [Content Structure](#content-structure)
9. [Recent Updates](#recent-updates)
10. [Deployment](#deployment)
11. [Best Practices](#best-practices)

---

## Project Overview

### Purpose
ReFlow Toilets is a smart sanitation solutions platform targeting districts, municipalities, and government agencies for decentralized public toilet infrastructure. The site showcases innovative B-CRT (Bio-Circular Resource Technology) and serves as the primary digital platform for B2G lead generation.

### Key Objectives
1. **B2G Lead Generation**: Attract district/municipal buyers for public toilet infrastructure
2. **Technology Showcase**: Demonstrate B-CRT (Gates Foundation's Reinvented Toilet)
3. **Partnership Development**: Connect with government entities and investors
4. **ROI Demonstration**: Show cost savings, sustainability benefits, and revenue generation
5. **Brand Authority**: Position as leader in decentralized sanitation technology

### Target Audience
- **Primary**: Government officials (Municipal commissioners, Urban development authorities, WASH program directors)
- **Secondary**: NGOs, CSR departments, Infrastructure developers, Investors
- **Geographic**: India (Hyderabad, Navi Mumbai deployments) with national expansion vision

---

## Business Context

### Core Technology: B-CRT (Blackwater Circular Reinvented Toilet)

**What is B-CRT?**
- Gates Foundation's Reinvented Toilet mission ($1B investment)
- ISO 30500 water standard compliance
- 8-stage treatment process
- Zero discharge system
- 6 cubicles per unit
- 10,000L water capacity
- 9 solar panels (off-grid)
- 6 batteries for power storage
- 1 IoT system for monitoring

**Key Benefits:**
1. **No Sewage System**: Treats waste on-site
2. **Off-Grid**: Self-sustaining with solar power
3. **Modular & Scalable**: Prefabricated units
4. **Zero Water Discharge**: Closed-loop system
5. **Circular Economy**: Revenue-generating model
6. **IoT Integration**: Real-time monitoring dashboard
7. **Sustainable**: Solar-powered, eco-friendly

### Strategic Partnerships
1. **Gates Foundation**: Reinvent the Toilet mission partner
2. **WASH Innovation Hub**: Technical collaboration
3. **ASCI (Administrative Staff College of India)**: Knowledge partner
4. **LooCafe**: Parent company (270+ locations in Hyderabad)
5. **Ixora Group**: Institutional support and resources

### Competitive Positioning
- **Innovation Leader**: Gates Foundation partner
- **Proven Technology**: B-CRT deployed in Hyderabad & Navi Mumbai (Q1 2025)
- **Scalable Solution**: Prefabricated modular units
- **Revenue Model**: Self-sustaining, revenue-generating toilets
- **IoT-Enabled**: Smart monitoring and management

### Relationship to Ixora Ecosystem
```
Ixora Group (Parent)
├── Ixora Corporate Services (Facility Management)
├── Ixora Security (Security Solutions)
├── LooCafe (270+ WASH facilities) ← Sister Company
├── ReFlow Toilets ← THIS PROJECT
└── Dr. Rabinder Nath Foundation (CSR)
```

---

## Technology Stack

### Core Technologies
- **Next.js**: 15.0 (App Router) - React framework with SSR/SSG
- **React**: 19.2.0 - Modern UI library
- **TypeScript**: 5.9.3 - Type-safe development
- **CSS Modules**: Component-scoped styling
- **CSS Variables**: Theming and design tokens

### Additional Features
- **Image Optimization**: Next.js Image component with remote patterns
- **Font Optimization**: Next.js Font with Montserrat and Inter
- **SEO**: Comprehensive meta tags and structured data
- **Analytics**: Google Analytics 4 (GA4) integration
- **Form Validation**: Real-time validation with ARIA attributes
- **Code Splitting**: Automatic with Next.js dynamic imports

### AI & Data Processing
- **Google Generative AI SDK**: Gemini for data processing
- **Claude API**: Conversational responses (if integrated)
- **Google Sheets**: CRM backend for lead management

### Build & Development Tools
- **ESLint**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting
- **PostCSS**: CSS processing
- **Vercel Analytics**: Performance monitoring

### Integrations
- **Google Sheets CRM**: Lead capture with smart routing
- **Google Analytics 4**: Website analytics
- **Google Calendar**: Booking integration for calls
- **YouTube**: Embedded videos for technology showcase
- **Cloudinary**: Image CDN (if migrated from TypeDream)

---

## Project Structure

```
reflow-toilets-website/
├── app/
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Home page (main landing)
│   ├── bcrt/
│   │   └── page.tsx            # B-CRT technology deep dive
│   ├── innovation/
│   │   └── page.tsx            # Innovation & mission page
│   ├── tech/
│   │   └── page.tsx            # Technical details page
│   ├── design/
│   │   └── page.tsx            # Design solutions page
│   ├── contact/
│   │   └── page.tsx            # Contact form page
│   ├── hiring/
│   │   └── page.tsx            # Careers page
│   ├── globals.css              # Global styles & CSS variables
│   └── api/                     # API routes (if needed)
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Header.module.css
│   ├── Hero.tsx                 # Hero section
│   ├── Hero.module.css
│   ├── Partners.tsx             # Partner logos (WASH, ASCI, Gates)
│   ├── Partners.module.css
│   ├── DesignInnovation.tsx     # Design & innovation showcase
│   ├── DesignInnovation.module.css
│   ├── KeyFeatures.tsx          # 7 key features grid
│   ├── KeyFeatures.module.css
│   ├── ReinventedMission.tsx    # Reinvented Toilet mission
│   ├── ReinventedMission.module.css
│   ├── BCRT.tsx                 # B-CRT technology section
│   ├── BCRT.module.css
│   ├── CTASection.tsx           # Call-to-action section
│   ├── CTASection.module.css
│   ├── FAQ.tsx                  # FAQ accordion
│   ├── FAQ.module.css
│   ├── Footer.tsx               # Site footer
│   ├── Footer.module.css
│   ├── ScrollReveal.tsx         # Scroll animation wrapper (NEW)
│   ├── LoadingSkeleton.tsx      # Loading state component (NEW)
│   ├── ErrorBoundary.tsx        # Error handling (NEW)
│   ├── ExitIntentPopup.tsx      # Conversion tool (NEW)
│   ├── Newsletter.tsx           # Email capture (NEW)
│   ├── StickyCTABar.tsx         # Persistent CTA (NEW)
│   └── WhatsAppButton.tsx       # Direct messaging (NEW)
├── public/
│   ├── favicon.ico              # Site favicon
│   ├── manifest.json            # PWA manifest (NEW)
│   ├── service-worker.js        # PWA service worker (NEW)
│   ├── robots.txt               # SEO robots file
│   └── sitemap.xml              # SEO sitemap
├── styles/
│   └── [component styles]       # Additional CSS files
├── types/
│   └── index.ts                 # TypeScript type definitions
├── .next/                       # Next.js build output
├── node_modules/                # Dependencies
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
├── CLAUDE.md                    # This file
├── PROJECT_SUMMARY.md           # Project overview
├── README.md                    # Project readme
└── [documentation files]        # Various MD files
```

---

## Development Workflow

### Prerequisites
- Node.js v18+ recommended
- npm or yarn package manager
- Git for version control

### Setup Commands

```bash
# Navigate to project
cd "/mnt/d/Ixora Sites/reflow-toilets-website"

# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Server
- **URL**: http://localhost:3000
- **Fast Refresh**: Instant updates on file save
- **TypeScript Checking**: Real-time type checking
- **CSS Hot Reload**: Instant style updates

### Build Process
- **Output**: `.next/` directory
- **Optimization**: Automatic code splitting, minification, tree shaking
- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Automatic image resizing and WebP conversion

---

## Design System

### Color Palette

```css
/* CSS Variables (globals.css) */
:root {
  /* Primary Colors */
  --primary-green: #34D399;       /* ReFlow brand green */
  --button-green: rgba(82, 200, 94, 1); /* CTA buttons */

  /* Neutrals */
  --black: #212529;               /* Primary text */
  --gray: #6b7280;                /* Secondary text */
  --light-gray: #f3f4f6;          /* Backgrounds */

  /* Accents */
  --melon: #5cd4ac;               /* Accent color */
  --water: #67b7e5;               /* Water theme */
  --white: #ffffff;
}
```

### Typography
- **Primary Font**: Montserrat (headings, buttons, important text)
- **Secondary Font**: Inter (body text, descriptions)

**Font Weights**:
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

**Responsive Sizes**:
- H1: `clamp(2rem, 5vw, 3.5rem)` (32px → 56px)
- H2: `clamp(1.75rem, 4vw, 3rem)` (28px → 48px)
- H3: `clamp(1.5rem, 3vw, 2.5rem)` (24px → 40px)
- Body: `clamp(1rem, 2vw, 1.125rem)` (16px → 18px)

### Spacing System
```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
```

### Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## Features & Components

### Core Features

#### 1. **ScrollReveal Animations (NEW - Nov 2025)**
- Staggered scroll-triggered animations
- Fade-in, slide-up, slide-left, slide-right effects
- Performance optimized with Intersection Observer
- Configurable delay and duration

#### 2. **LoadingSkeleton Component (NEW - Nov 2025)**
- Skeleton screens for perceived performance
- Shimmer animation effect
- Customizable shapes and sizes
- Reduces perceived loading time

#### 3. **ErrorBoundary (NEW - Nov 2025)**
- Comprehensive error handling
- User-friendly error messages
- Fallback UI for errors
- Error logging for debugging

#### 4. **PWA Support (NEW - Nov 2025)**
- **Service Worker**: Offline caching and fast loading
- **Install Prompt**: Add to home screen functionality
- **Manifest**: App-like experience on mobile
- **Offline Fallback**: Basic offline functionality

#### 5. **Conversion Features (NEW - Nov 2025)**
- **Exit Intent Popup**: Capture leaving visitors
- **Newsletter Signup**: Email capture for nurturing
- **Sticky CTA Bar**: Persistent call-to-action
- **WhatsApp Button**: Direct messaging channel

#### 6. **Form Validation (Enhanced - Nov 2025)**
- Real-time validation with error messages
- ARIA attributes for accessibility
- Email OR Phone required logic
- District/municipality-specific fields

#### 7. **CRM Integration**
- **Google Sheets Backend**: Via Apps Script
- **Smart Routing**: Source-based categorization
- **Field Extraction**: District inquiries, deployment interest, technical questions
- **Email Notifications**: Instant lead alerts

#### 8. **SEO Optimization (Enhanced - Nov 2025)**
- **Structured Data**: Organization, BreadcrumbList, FAQPage schemas
- **Meta Tags**: Comprehensive Open Graph and Twitter Cards
- **Sitemap**: XML sitemap for search engines
- **Canonical URLs**: Proper URL canonicalization

### Key Components

#### Header Component
- ReFlow Toilets logo
- Navigation: Home, Tech, B-CRT, Innovation
- "Book Call" CTA button (green)
- Mobile-responsive hamburger menu
- Sticky navigation on scroll

#### Hero Section
- **Title**: "Scalable Decentralized Sanitation Infrastructure"
- **Subtitle**: "Smart, resilient, and sustainable public toilet solutions"
- Background image optimization
- "Learn More" CTA button

#### Partners Section
- WASH Innovation Hub logo
- ASCI logo
- Gates Foundation logo
- Responsive grid layout

#### Key Features Grid (7 Features)
1. No sewage system - Treated on site
2. Off-Grid - Self-sustaining with solar power
3. Modular & Scalable - Prefabricated units
4. No water released into drainage systems
5. Circular economy system
6. Revenue Generating - Self sustainable
7. Treatment system in unit - No extra water required

#### B-CRT Section
- Main B-CRT image
- Technical specifications
- YouTube video embed (Technical dive)
- Dashboard preview
- Deployment locations (Hyderabad & Navi Mumbai Q1 2025)

#### FAQ Accordion
- 5 frequently asked questions
- Smooth expand/collapse animations
- Accessible keyboard navigation
- SEO-optimized with structured data

#### Footer
- ReFlow Toilets logo
- Company description
- Contact information (+91 9494330442)
- Operating hours (10am–5pm Monday–Friday)
- Social media links (LinkedIn)
- Footer navigation
- Copyright: "© 2025 iRise Toilets Pvt. Ltd."

---

## Content Structure

### Homepage Sections (Order)
1. **Hero** - Main headline and CTA
2. **Partners** - Credibility through partnerships
3. **Design & Innovation** - Visual showcase
4. **Key Features** - 7 benefits grid
5. **Reinvented Mission** - Gates Foundation context
6. **B-CRT** - Technology deep dive
7. **CTA Section** - Partnership inquiry
8. **FAQ** - Common questions

### Additional Pages
1. **B-CRT** - Technology page with conversion CTA
2. **Innovation** - Reinvented toilet mission with partnership CTA
3. **Tech** - Technical details with calendar booking CTA
4. **Design** - Design solutions with contact CTA
5. **Contact** - Comprehensive form with validation
6. **Hiring** - Careers page

### Call-to-Action Strategy
- **Homepage**: "Learn More" (exploration)
- **B-CRT Page**: "Schedule Technical Demo" (conversion)
- **Innovation Page**: "Become a Partner" (partnership)
- **Tech Page**: "Book Consultation" (calendar link)
- **Design Page**: "Request Quote" (contact form)
- **Contact Page**: Multiple inquiry types (form)

---

## Recent Updates

### November 2025 - Complete Transformation

#### Week 1 (Nov 8-11, 2025)
- ✅ Complete mobile responsiveness overhaul
- ✅ CSS Modules implementation for all components
- ✅ TypeScript strict mode compliance
- ✅ Image optimization setup

#### Week 2 (Nov 11-12, 2025)
- ✅ ScrollReveal animations added to all major components
- ✅ LoadingSkeleton component implemented
- ✅ ErrorBoundary for error handling
- ✅ Full PWA implementation (Service Worker, Install Prompt, Manifest)
- ✅ Conversion features (Exit Intent, Newsletter, Sticky CTA, WhatsApp)

#### Week 3 (Nov 12-13, 2025)
- ✅ Enhanced form validation with real-time feedback
- ✅ Code splitting for performance
- ✅ SEO structured data (Organization, BreadcrumbList, FAQPage)
- ✅ Google Analytics 4 integration
- ✅ Vercel Analytics integration
- ✅ Final deployment preparation

### Build Status (Latest)
- ✅ TypeScript compilation: **0 errors**
- ✅ ESLint: **0 warnings**
- ✅ Next.js build: **Successful**
- ✅ Static generation: **All pages pre-rendered**
- ✅ Image optimization: **Configured for remote patterns**

---

## Deployment

### Vercel Deployment (Recommended)

**Platform**: Vercel (optimized for Next.js)
**Live URL**: https://reflowtoilets.com (or Vercel subdomain)

### Deployment Method: Vercel CLI or GitHub Integration

#### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Option 2: GitHub Integration
1. Connect GitHub repository to Vercel
2. Configure build settings (automatic)
3. Push to main branch triggers deployment
4. Automatic preview deployments for PRs

### Environment Variables (Vercel)
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SHEETS_API_KEY=your_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### Custom Domain Setup
1. Add domain in Vercel project settings
2. Configure DNS records at domain registrar:
   - **A Record**: `76.76.21.21`
   - **CNAME Record**: `cname.vercel-dns.com`
3. SSL certificate automatically provisioned

### Alternative: Netlify Deployment

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod --dir=.next
```

---

## Best Practices

### Code Quality
- ✅ TypeScript strict mode enabled
- ✅ Use Next.js App Router conventions
- ✅ Server Components by default, Client Components when needed
- ✅ CSS Modules for component-scoped styles
- ✅ Reusable components with proper props
- ✅ Proper error boundaries
- ✅ Meaningful naming conventions

### Performance
- ✅ Next.js Image component for all images
- ✅ Dynamic imports for code splitting
- ✅ Font optimization with next/font
- ✅ CSS Variables for theming (fast)
- ✅ Minimal JavaScript bundle size
- ✅ Static Generation (SSG) for pages
- ✅ Vercel Edge Network for CDN

### Accessibility
- ✅ Semantic HTML elements
- ✅ ARIA attributes for interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast ratios (WCAG 2.1 AA)
- ✅ Alt text for images
- ✅ Focus indicators visible
- ✅ Screen reader testing

### SEO
- ✅ Comprehensive meta tags in layout.tsx
- ✅ Structured data (JSON-LD) for Organization, FAQPage, BreadcrumbList
- ✅ Semantic HTML with proper heading hierarchy
- ✅ XML sitemap.xml
- ✅ robots.txt configuration
- ✅ Canonical URLs
- ✅ Open Graph and Twitter Card tags

### Security
- ✅ Environment variables for sensitive data
- ✅ Input validation on forms
- ✅ HTTPS enforced (Vercel default)
- ✅ Content Security Policy (CSP)
- ✅ No sensitive data in client-side code
- ✅ Sanitize user inputs

---

## Contact & Support

### Project Maintainers
- **Abhishek Nath** - Founder & CEO of Ixora Group
- **Technical Team** - hello@ixoragroup.com

### Support Channels
- **Phone**: +91 9494330442 (10am–5pm Monday–Friday)
- **Email**: contact@reflowtoilets.com
- **LinkedIn**: ReFlow Toilets Company Page
- **GitHub Issues**: For bug reports and feature requests

### Related Documentation
- **Workspace Overview**: `/mnt/d/Ixora Sites/CLAUDE.md`
- **Project Summary**: `/mnt/d/Ixora Sites/reflow-toilets-website/PROJECT_SUMMARY.md`
- **README**: `/mnt/d/Ixora Sites/reflow-toilets-website/README.md`

---

## Future Roadmap

### Short-Term (1-3 Months)
- [ ] Complete all page content (Tech, B-CRT, Innovation, Contact)
- [ ] Add case studies from deployments
- [ ] Implement contact form backend
- [ ] Add client testimonials
- [ ] Enhance blog/news section

### Medium-Term (3-6 Months)
- [ ] Multi-language support (Hindi, Telugu, Marathi)
- [ ] Advanced analytics and dashboard
- [ ] Online quote/proposal system
- [ ] Virtual tour of B-CRT facilities
- [ ] Partner portal for municipalities

### Long-Term (6-12 Months)
- [ ] Mobile app (React Native)
- [ ] IoT dashboard for public access
- [ ] Real-time toilet availability map
- [ ] AI-powered chatbot for inquiries
- [ ] Integration with government procurement systems

---

**Document Version**: 1.0
**Created**: November 13, 2025
**Created By**: Claude Code (AI Assistant)
**Status**: Complete and production-ready documentation
