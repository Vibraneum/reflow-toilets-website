# IP Section - Quick Reference Guide

**For**: Developers, Content Editors, Project Managers
**Last Updated**: November 22, 2025

---

## 📍 Location

**URL**: `/b-crt` page (scroll down after video section)
**Component**: `/components/IPRightsSection.tsx`
**Styles**: `/components/IPRightsSection.module.css`

---

## 🎯 What It Does

Explains the intellectual property landscape of reinvented toilet technologies:
- Gates Foundation Global Access commitment
- ISO 30500 certification legal meaning
- Technology licensing pathways
- India-specific support programs
- Patent protection scope
- Partnership opportunities

---

## 📊 Section Structure

```
┌─────────────────────────────────────┐
│ HEADER                              │
│ - Badge: "Intellectual Property..." │
│ - Title: "Technology Rights..."     │
│ - Intro paragraph                   │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│ TIMELINE (2011-2026)                │
│ ├─ 2011: Challenge Launch           │
│ ├─ 2018: ISO 30500 Published        │
│ ├─ 2020-2023: Commercial Licensing  │
│ ├─ 2024: First Partners (LIXIL)     │
│ ├─ 2025: ISO Revision               │
│ └─ 2026: B-CRT Launch (Q4)          │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│ LICENSING STRUCTURE (6 Cards)       │
│ ├─ Research Institutions            │
│ ├─ Global Access Commitment         │
│ ├─ Commercial Partners              │
│ ├─ Geographic Deployment            │
│ ├─ ISO 30500 Certification          │
│ └─ Government Procurement           │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│ FAQ ACCORDION (8 Questions)         │
│ ├─ Gates Foundation commitment      │
│ ├─ ISO 30500 legal meaning          │
│ ├─ Technology licensing process     │
│ ├─ India exclusive rights           │
│ ├─ Patent protection                │
│ ├─ Manufacturing rights             │
│ ├─ Government contracts             │
│ └─ Partner opportunities            │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│ LEGAL DISCLAIMER (Yellow Box)       │
│ - "Not legal advice"                │
│ - Contact official sources          │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│ SOURCES (6 Links)                   │
│ - Gates Foundation                  │
│ - ISO 30500                         │
│ - Georgia Tech                      │
│ - LIXIL announcement                │
│ - India program                     │
│ - ANSI                              │
└─────────────────────────────────────┘
```

---

## 🎨 Visual Style

### Colors
- **Primary Blue**: `#0066cc` (links, accents, timeline)
- **Light Blue**: `#e6f2ff` (backgrounds, active states)
- **Dark Text**: `#1a1a1a` (headings)
- **Gray Text**: `#4a5568` (body content)
- **Warning Yellow**: `#ffc107` (disclaimer border)

### Typography
- **Section Titles**: 2.5rem (40px), bold
- **Subsections**: 1.75rem (28px), bold
- **Body**: 0.9375rem (15px), regular
- **Intro**: 1.125rem (18px), regular

### Spacing
- **Section Padding**: 80px vertical
- **Card Gap**: 24px
- **Internal Padding**: 24px-48px

---

## 📱 Responsive Behavior

### Desktop (>768px)
- 6 licensing cards in 2-3 column grid
- Full timeline with vertical line
- Wide accordion items

### Tablet (480-768px)
- 2 column grid for cards
- Condensed timeline
- Adjusted spacing

### Mobile (<480px)
- Single column layout
- Simplified timeline (no vertical line)
- Touch-friendly accordions

---

## ⚙️ How to Edit

### Add/Edit FAQ Question

**File**: `/components/IPRightsSection.tsx`
**Line**: ~59-100 (accordionItems array)

```typescript
const accordionItems: AccordionItem[] = [
  {
    id: 'unique-id',
    question: 'Your question here?',
    answer: 'Your detailed answer here.'
  },
  // ... more items
]
```

### Update Timeline

**File**: `/components/IPRightsSection.tsx`
**Location**: Timeline section (~118-185)

```tsx
<div className={styles.timelineItem}>
  <div className={styles.timelineYear}>2027</div>
  <div className={styles.timelineContent}>
    <h4 className={styles.timelineEvent}>Event Title</h4>
    <p className={styles.timelineDescription}>Description here</p>
  </div>
</div>
```

### Change Colors

**File**: `/components/IPRightsSection.module.css`

Find and replace:
- `#0066cc` → Your primary blue
- `#e6f2ff` → Your light blue background
- `#ffc107` → Your warning color

### Add Source Link

**File**: `/components/IPRightsSection.tsx`
**Location**: Sources section (~245-270)

```tsx
<li>
  <a href="https://your-url.com" target="_blank" rel="noopener noreferrer">
    Link Title
  </a>
</li>
```

---

## 🔍 SEO Features

### Structured Data
- **Type**: FAQPage (JSON-LD)
- **Location**: Embedded in component
- **Benefit**: Rich snippets in Google

### Keywords Targeted
- ISO 30500 certification
- Gates Foundation Global Access
- Reinvented toilet licensing
- Sanitation IP rights
- Technology transfer India

### Meta Tags
- Updated in B-CRT page metadata
- OpenGraph includes IP references
- Keywords added for search

---

## ✅ Quality Checklist

### Before Publishing
- [ ] All 8 FAQs have accurate answers
- [ ] Timeline years/events are correct
- [ ] All 6 source links work (open in new tab)
- [ ] Legal disclaimer is present and unmodified
- [ ] Accordion opens/closes smoothly
- [ ] Mobile layout doesn't break
- [ ] No console errors in browser

### After Publishing
- [ ] Google Rich Results Test passed
- [ ] Page loads under 3 seconds
- [ ] Accordion tracked in analytics
- [ ] Source links tracked in analytics

---

## 🐛 Common Issues & Fixes

### Issue: Accordion doesn't close other items
**Fix**: Check `toggleAccordion` function - should set null when same item clicked

### Issue: Timeline line doesn't show
**Fix**: Check `.timelineGrid::before` CSS - needs `position: relative` on parent

### Issue: Cards not wrapping on mobile
**Fix**: CSS `grid-template-columns: 1fr` at mobile breakpoint

### Issue: Links not opening in new tab
**Fix**: Ensure `target="_blank" rel="noopener noreferrer"` on all external links

### Issue: Structured data not validating
**Fix**: Use Google Rich Results Test, check JSON-LD syntax

---

## 📞 Contact for Updates

**Content Changes**: Update FAQ answers, add timeline events
**Design Changes**: Modify CSS colors, spacing, typography
**Code Changes**: Update TypeScript logic, add props, enhance features

**Documentation**: See `/IP_RIGHTS_IMPLEMENTATION.md` for full technical details

---

## 🚀 Future Enhancements (Roadmap)

### Q1 2026
- Interactive licensing diagram
- Partner inquiry form
- Video content integration

### Q2 2026
- Multi-language support (Hindi, Spanish)
- Downloadable PDF resources
- ROI calculator for partners

---

## 📚 Related Files

- **Component**: `/components/IPRightsSection.tsx` (20.3 KB)
- **Styles**: `/components/IPRightsSection.module.css` (6.8 KB)
- **Integration**: `/app/b-crt/page.tsx` (updated)
- **Docs**: `/IP_RIGHTS_IMPLEMENTATION.md` (full technical)
- **Summary**: `/IP_SECTION_SUMMARY.md` (executive overview)

---

**Quick Start**: Component is production-ready. Just verify links, test responsiveness, and deploy!

---

**Version**: 1.0
**Status**: Ready for QA/Deployment
**Last Updated**: November 22, 2025
