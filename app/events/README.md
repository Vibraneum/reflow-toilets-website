# Events & Meetings Page

## Quick Overview

A comprehensive showcase page featuring ReFlow's journey, milestones, and upcoming events.

### Page Sections (in order)

```
┌─────────────────────────────────────────────┐
│  1. HERO SECTION                            │
│  • "ReFlow in Action - Events & Milestones" │
│  • Badge, title, subtitle, description      │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│  2. FEATURED VIDEO                          │
│  • YouTube embed (h1-fxn7dNds)              │
│  • 16:9 responsive player                   │
│  • Tech highlights sidebar                  │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│  3. EVENTS TIMELINE                         │
│  • 2011: Gates Foundation Award             │
│  • 2013: Chinese Academy Partnership        │
│  • 2015: Hyderabad Pilot                    │
│  • 2018: 270+ Units with Ixora              │
│  • 2020: Government Certification           │
│  • 2022: Navi Mumbai Expansion              │
│  • 2023: WASH Summit Conferences            │
│  • 2024: Google Gemini AI Launch            │
│  • 2025: District Expansion (ongoing)       │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│  4. PHOTO GALLERY                           │
│  • 6 event photos in grid                   │
│  • Hover zoom effects                       │
│  • Captions with dates                      │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│  5. MEDIA COVERAGE                          │
│  • 4 press articles/interviews              │
│  • Source, date, excerpts                   │
│  • Read More CTAs                           │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│  6. STRATEGIC PARTNERSHIPS                  │
│  • 6 partner cards with logos               │
│  • Gates, CAE, Ixora, LooCafe, Dasra, Google│
│  • Role badges and partnership dates        │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│  7. UPCOMING EVENTS                         │
│  • Feb 2025: Smart Cities Expo              │
│  • Mar 2025: Municipal Meeting              │
│  • Apr 2025: WASH Conference                │
└─────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────┐
│  8. CTA SECTION                             │
│  • "Join us at our next event"              │
│  • Schedule demo / Request site visit       │
└─────────────────────────────────────────────┘
```

## File Structure

```
/app/events/
├── page.tsx          (650+ lines - Main component)
├── page.module.css   (900+ lines - Scoped styles)
└── README.md         (This file)
```

## Key Features

✅ **Featured Video**: YouTube embed with highlights
✅ **Timeline**: 9 major milestones (2011-2025)
✅ **Gallery**: 6 event photos with zoom effects
✅ **Media**: 4 press articles/interviews
✅ **Partners**: 6 strategic partnerships
✅ **Upcoming**: 3 future events with CTAs
✅ **Responsive**: Mobile-first design
✅ **Animations**: ScrollReveal integration
✅ **SEO**: Proper metadata and OpenGraph

## Design Inspiration

Apple-inspired premium aesthetic:
- Clean typography
- Generous white space
- Smooth animations
- Subtle shadows
- Hover effects
- Gradient accents

## Color Scheme

- Primary: #10b981 (green)
- Accent: #34d399 (light green)
- Links: #0071e3 (blue)
- Text: #1d1d1f (dark)
- Secondary: #86868b (gray)

## To Test Locally

```bash
cd /mnt/d/Ixora Sites/reflow-toilets-website
npm run dev
# Navigate to: http://localhost:3000/events
```

## To Deploy

```bash
npm run build
npm run start
```

---

**Created**: November 25, 2025
**Status**: Production-ready
