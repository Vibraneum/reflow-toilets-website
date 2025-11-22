# Configurator Integration Guide

**Purpose:** Quick reference for integrating the configurator into the ReFlow website

---

## 1. Add to Main Navigation (Header)

**File:** `/components/Header.tsx`

**Add menu item:**
```tsx
<Link href="/configure">
  <a className={styles.navLink}>
    Configure Your Deployment
  </a>
</Link>
```

**Or add as CTA button:**
```tsx
<Link href="/configure">
  <button className={styles.ctaButton}>
    Get Custom Quote
  </button>
</Link>
```

---

## 2. Add to Homepage Hero Section

**File:** `/components/Hero.tsx`

**Primary CTA:**
```tsx
<Link href="/configure" className={styles.primaryCta}>
  Design Your Deployment →
</Link>
```

**Secondary CTA:**
```tsx
<Link href="/configure" className={styles.secondaryCta}>
  Configure & Get Instant Quote
</Link>
```

---

## 3. Add to BundlingEcosystem Component

**File:** `/components/BundlingEcosystem.tsx`

**Replace existing CTA:**
```tsx
<Link href="/configure" className={styles.ctaButton}>
  Configure Your Bundled Solution
</Link>
```

---

## 4. Add to Footer

**File:** `/components/Footer.tsx`

**Add under "Quick Links" or "Products" section:**
```tsx
<Link href="/configure">
  <a className={styles.footerLink}>
    Deployment Configurator
  </a>
</Link>
```

---

## 5. Add to Contact Page

**File:** `/app/contact/page.tsx`

**Add before or after contact form:**
```tsx
<div className={styles.alternativeAction}>
  <h3>Need a Custom Quote?</h3>
  <p>Use our interactive configurator to design your deployment and get instant pricing.</p>
  <Link href="/configure">
    <button className={styles.configuratorButton}>
      Launch Configurator →
    </button>
  </Link>
</div>
```

---

## 6. Add to ROI Page

**File:** `/app/roi/page.tsx`

**Add CTA after ROI calculator:**
```tsx
<div className={styles.nextStepCta}>
  <h3>Ready to Get Started?</h3>
  <p>Configure your custom deployment and get a detailed quote in minutes.</p>
  <Link href="/configure">
    <button className={styles.configuratorCta}>
      Configure Your Deployment
    </button>
  </Link>
</div>
```

---

## 7. Add to B-CRT Page

**File:** `/app/b-crt/page.tsx`

**Add at end of page:**
```tsx
<section className={styles.configureSection}>
  <h2>Configure Your B-CRT Deployment</h2>
  <p>Design a custom solution for your district, community, or commercial area.</p>
  <Link href="/configure">
    <button className={styles.configureButton}>
      Get Started →
    </button>
  </Link>
</section>
```

---

## 8. Add Analytics Tracking

**File:** `/components/GoogleAnalytics.tsx`

**Track configurator events:**
```tsx
// Step navigation
gtag('event', 'configurator_step', {
  step_number: stepNumber,
  step_name: stepName,
  customer_type: customerType
})

// Bundle selection
gtag('event', 'bundle_selected', {
  bundle_id: bundleId,
  bundle_name: bundleName,
  price: bundlePrice
})

// Quote submission
gtag('event', 'quote_submitted', {
  customer_type: customerType,
  units: unitCount,
  total_value: totalValue,
  has_iot: hasIoT,
  has_security: hasSecurity
})
```

---

## 9. Add to Sitemap

**File:** `/app/sitemap.ts`

**Add configurator URL:**
```tsx
{
  url: 'https://www.reflowtoilets.com/configure',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.9,
}
```

---

## 10. Social Media Preview

**Create preview image:**
- Dimensions: 1200x630px
- Text: "Design Your Custom Sanitation Infrastructure"
- CTA: "Get Instant Quote"
- Save as: `/public/images/og/configurator.jpg`

**Update meta tags in `/app/configure/layout.tsx`:**
```tsx
openGraph: {
  images: ['/images/og/configurator.jpg'],
}
```

---

## 11. Add to Sticky CTA Bar

**File:** `/components/StickyCtaBar.tsx`

**Add configurator option:**
```tsx
<Link href="/configure">
  <button className={styles.configureBtn}>
    📊 Configure Deployment
  </button>
</Link>
```

---

## 12. Add to Exit Intent Popup

**File:** `/components/ExitIntentPopup.tsx`

**Add configurator CTA option:**
```tsx
<div className={styles.popupActions}>
  <Link href="/configure">
    <button className={styles.primaryAction}>
      Get Custom Quote Instead
    </button>
  </Link>
</div>
```

---

## Quick Copy-Paste CTAs

### Hero CTA (Primary)
```tsx
<Link href="/configure" className="inline-block px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all">
  Configure Your Deployment →
</Link>
```

### Hero CTA (Secondary)
```tsx
<Link href="/configure" className="inline-block px-8 py-4 bg-white text-green-500 border-2 border-green-500 rounded-xl font-semibold hover:bg-green-50 transition-all">
  Get Instant Quote
</Link>
```

### Section CTA
```tsx
<div className="text-center mt-12">
  <Link href="/configure">
    <button className="px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all">
      Design Your Custom Solution →
    </button>
  </Link>
</div>
```

### Card CTA
```tsx
<Link href="/configure" className="mt-4 inline-block text-green-500 font-semibold hover:text-green-600 transition-colors">
  Configure Now →
</Link>
```

---

## Testing Checklist

After integration, test:
- [ ] All links navigate to `/configure`
- [ ] No 404 errors
- [ ] Configurator loads correctly
- [ ] Back button returns to referring page
- [ ] Analytics events fire correctly
- [ ] Social media preview displays
- [ ] Sitemap includes configurator
- [ ] Mobile navigation works

---

## Launch Announcement Template

### Email
```
Subject: 🚀 New: Instant Quote Configurator

Hi [Name],

We're excited to announce our new Deployment Configurator!

✨ Design your custom sanitation infrastructure in minutes
📊 Get instant pricing for districts, communities, and commercial areas
🎯 Configure B-CRT units, IoT monitoring, security, and maintenance

Try it now: https://www.reflowtoilets.com/configure

Questions? Reply to this email or schedule a call.

Best,
ReFlow Team
```

### Social Media
```
🎉 Introducing our Deployment Configurator!

Design your custom sanitation infrastructure in 5 easy steps:
1️⃣ Select your organization type
2️⃣ Define your needs
3️⃣ Configure your deployment
4️⃣ Get instant pricing
5️⃣ Download your quote

Perfect for districts, communities, and commercial areas.

👉 Try it now: reflowtoilets.com/configure

#SmartSanitation #B-CRT #PublicHealth #SmartCities
```

---

## Support Resources

### For Users
- **Help Center:** Add FAQ section
- **Video Tutorial:** Record walkthrough
- **Live Chat:** Enable for configurator page
- **Phone Support:** +91-9494330442

### For Team
- **Training Doc:** This file + CONFIGURATOR_DOCUMENTATION.md
- **Demo Account:** Set up test scenarios
- **CRM Access:** Monitor quote submissions
- **Analytics Dashboard:** Track conversions

---

## Quick Reference: URLs

- **Configurator:** `/configure`
- **Documentation:** `/CONFIGURATOR_DOCUMENTATION.md`
- **Delivery Summary:** `/CONFIGURATOR_DELIVERY_SUMMARY.md`
- **This Guide:** `/CONFIGURATOR_INTEGRATION_GUIDE.md`

---

**Last Updated:** November 22, 2025
**Version:** 1.0
**Status:** Ready for Integration
