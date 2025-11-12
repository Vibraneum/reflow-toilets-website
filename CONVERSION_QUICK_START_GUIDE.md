# ReFlow Toilets - Conversion Features Quick Start Guide

**Date**: November 11, 2025
**Purpose**: Fast-track implementation guide for developers
**Time to Complete**: 60 hours (1.5 weeks full-time)

---

## 🚀 TL;DR - What You're Building

Transform ReFlow Toilets website into a lead generation machine by implementing 5 proven conversion features from IxoraGroup.com, adapted for government/enterprise sanitation infrastructure market.

**Expected Result**: 2-3x increase in qualified leads (from 25-50/month to 100-150/month)

---

## 📦 WHAT YOU NEED

### Reference Code (Copy From):
- `/mnt/d/Ixora Sites/Ixora-Group-Website/components/ExitIntentPopup.tsx` (619 lines)
- `/mnt/d/Ixora Sites/Ixora-Group-Website/components/NewsletterSignup.tsx` (208 lines)
- `/mnt/d/Ixora Sites/Ixora-Group-Website/components/QuoteRequestForm.tsx` (758 lines)

### Tools You'll Use:
- Next.js 16 (already set up)
- TypeScript 5.9.3
- CSS Modules
- Google Sheets (CRM)
- Google Analytics 4

---

## ⚡ PHASE 1: QUICK WINS (11 hours) - START HERE

### 1. Sticky Consultation CTA (4 hours)

**Step 1**: Create component files
```bash
mkdir -p /mnt/d/Ixora\ Sites/reflow-toilets-website/components/conversion
cd /mnt/d/Ixora\ Sites/reflow-toilets-website/components/conversion

touch StickyConsultationCTA.tsx
touch StickyConsultationCTA.module.css
```

**Step 2**: Copy this starter code to `StickyConsultationCTA.tsx`:
```typescript
'use client';
import { useState, useEffect } from 'react';
import styles from './StickyConsultationCTA.module.css';

export default function StickyConsultationCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleClick = () => {
    // Navigate to contact page or open deployment planner
    window.location.hash = '#contact'; // Or trigger modal
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Version */}
      <div className={styles.desktopCTA}>
        <button onClick={handleDismiss} className={styles.closeBtn}>×</button>
        <div className={styles.icon}>🏛️</div>
        <h4 className={styles.heading}>Government Consultation</h4>
        <p className={styles.subtext}>Speak with a municipal infrastructure expert</p>
        <button onClick={handleClick} className={styles.primaryBtn}>
          Schedule Call
        </button>
        <p className={styles.disclaimer}>Response within 24 hours</p>
      </div>

      {/* Mobile Version */}
      <div className={styles.mobileCTA}>
        <div className={styles.textContent}>
          <strong>Government Consultation</strong>
          <span>Free site assessment</span>
        </div>
        <button onClick={handleClick} className={styles.mobileBtn}>
          Book Now
        </button>
      </div>
    </>
  );
}
```

**Step 3**: Copy this CSS to `StickyConsultationCTA.module.css`:
```css
/* Desktop Sticky CTA - Right Sidebar */
.desktopCTA {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 24px;
  max-width: 280px;
  z-index: 40;
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from { transform: translateY(-50%) translateX(100%); }
  to { transform: translateY(-50%) translateX(0); }
}

.desktopCTA .closeBtn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.desktopCTA .closeBtn:hover {
  background: #f3f4f6;
}

.desktopCTA .icon {
  font-size: 48px;
  text-align: center;
  margin-bottom: 12px;
}

.desktopCTA .heading {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
  margin-bottom: 8px;
  text-align: center;
}

.desktopCTA .subtext {
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 16px;
}

.desktopCTA .primaryBtn {
  width: 100%;
  padding: 12px 24px;
  background: linear-gradient(135deg, #52c85e 0%, #34D399 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.desktopCTA .primaryBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 211, 153, 0.3);
}

.desktopCTA .disclaimer {
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 8px;
}

/* Mobile Sticky CTA - Bottom Banner */
.mobileCTA {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.15);
  padding: 12px 16px;
  align-items: center;
  justify-content: space-between;
  z-index: 40;
  animation: slideInUp 0.3s ease-out;
}

@keyframes slideInUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.mobileCTA .textContent {
  display: flex;
  flex-direction: column;
}

.mobileCTA .textContent strong {
  font-size: 14px;
  font-weight: 700;
  color: #212529;
}

.mobileCTA .textContent span {
  font-size: 12px;
  color: #6b7280;
}

.mobileCTA .mobileBtn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #52c85e 0%, #34D399 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

/* Hide desktop on mobile, show mobile CTA */
@media (max-width: 768px) {
  .desktopCTA {
    display: none;
  }
  .mobileCTA {
    display: flex;
  }
}
```

**Step 4**: Integrate into layout
```typescript
// In /app/layout.tsx
import StickyConsultationCTA from '@/components/conversion/StickyConsultationCTA';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <StickyConsultationCTA />
      </body>
    </html>
  );
}
```

**Step 5**: Test
- Run `npm run dev`
- Scroll past 800px
- CTA should appear (right side desktop, bottom mobile)
- Click X to dismiss
- Click button to navigate

---

### 2. District CTA Banner (3 hours)

**Step 1**: Create files
```bash
touch /mnt/d/Ixora\ Sites/reflow-toilets-website/components/conversion/DistrictCTABanner.tsx
touch /mnt/d/Ixora\ Sites/reflow-toilets-website/components/conversion/DistrictCTABanner.module.css
```

**Step 2**: Copy this code to `DistrictCTABanner.tsx`:
```typescript
'use client';
import styles from './DistrictCTABanner.module.css';

interface Props {
  page?: 'home' | 'bcrt' | 'tech' | 'innovation' | 'contact';
}

export default function DistrictCTABanner({ page = 'home' }: Props) {
  const getContent = () => {
    switch (page) {
      case 'bcrt':
        return {
          heading: 'Deploy the B-CRT in Your Municipality',
          subheading: 'Join cities adopting decentralized sanitation'
        };
      case 'tech':
        return {
          heading: 'See B-CRT in Action - Schedule Site Visit',
          subheading: 'Visit our operational facility in Hyderabad'
        };
      case 'innovation':
        return {
          heading: 'Partner with India\'s Most Advanced WASH Company',
          subheading: 'Collaborate on next-generation sanitation solutions'
        };
      case 'contact':
        return {
          heading: 'Get a Custom Deployment Plan for Your District',
          subheading: 'Our experts will analyze your requirements'
        };
      default:
        return {
          heading: 'Ready to Deploy B-CRT in Your District?',
          subheading: 'Join municipalities across India adopting decentralized sanitation infrastructure'
        };
    }
  };

  const content = getContent();

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.subheading}>{content.subheading}</p>
          <div className={styles.stats}>
            <div className={styles.stat}>🏛️ 50+ Government Deployments</div>
            <div className={styles.stat}>🌍 ISO 30500 Certified</div>
            <div className={styles.stat}>♻️ 0% Water Discharge</div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={() => window.location.hash = '#contact'}>
            Schedule Consultation
          </button>
          <button className={styles.secondaryBtn} onClick={() => window.open('/brochure.pdf')}>
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
```

**Step 3**: Copy CSS to `DistrictCTABanner.module.css`:
```css
.banner {
  background: linear-gradient(135deg,
    rgba(52, 211, 153, 0.1) 0%,
    rgba(103, 183, 229, 0.15) 100%);
  padding: 60px 20px;
  border-radius: 16px;
  margin: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.content {
  flex: 1;
}

.heading {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 700;
  color: #212529;
  margin-bottom: 12px;
}

.subheading {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 24px;
}

.stats {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stat {
  font-size: 14px;
  font-weight: 600;
  color: #212529;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
}

.buttons {
  display: flex;
  gap: 12px;
  flex-direction: column;
}

.primaryBtn {
  padding: 16px 40px;
  background: linear-gradient(135deg, #52c85e 0%, #34D399 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 20px rgba(52, 211, 153, 0.3);
  white-space: nowrap;
}

.primaryBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(52, 211, 153, 0.4);
}

.secondaryBtn {
  padding: 16px 40px;
  background: transparent;
  color: #34D399;
  border: 2px solid #34D399;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.secondaryBtn:hover {
  background: #34D399;
  color: white;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .buttons {
    width: 100%;
  }

  .primaryBtn,
  .secondaryBtn {
    width: 100%;
  }
}
```

**Step 4**: Integrate above footer in layout
```typescript
// In /app/layout.tsx or per-page
import DistrictCTABanner from '@/components/conversion/DistrictCTABanner';

// Add before <Footer />
<DistrictCTABanner page="home" />
```

---

### 3. Innovation Network Signup (4 hours)

**Step 1**: Create files
```bash
touch /mnt/d/Ixora\ Sites/reflow-toilets-website/components/conversion/InnovationNetworkSignup.tsx
touch /mnt/d/Ixora\ Sites/reflow-toilets-website/components/conversion/InnovationNetworkSignup.module.css
```

**Step 2**: Directly copy and adapt IxoraGroup's NewsletterSignup.tsx
```bash
# Copy the file
cp "/mnt/d/Ixora Sites/Ixora-Group-Website/components/NewsletterSignup.tsx" \
   "/mnt/d/Ixora Sites/reflow-toilets-website/components/conversion/InnovationNetworkSignup.tsx"
```

**Step 3**: Modify content (change these lines):
```typescript
// Line 92-94: Change heading
<h2 className="...">
  Join the Global Sanitation Innovation Network
</h2>

// Line 97-99: Change subheading
<p className="...">
  Monthly insights on WASH technology, policy updates, and funding opportunities
</p>

// Line 108: Change placeholder
<input
  type="email"
  placeholder="your.email@municipalcorporation.gov"
  ...
/>

// Line 135: Change button text
<button type="submit">
  {isSubmitting ? 'Subscribing...' : 'Join Network'}
</button>

// Line 146: Change success message
<span>Subscribed! Welcome to the Innovation Network.</span>
```

**Step 4**: Update colors to ReFlow green in CSS:
```css
/* Change gold (#D4B258) to green (#34D399) throughout */
```

---

## 🎯 PHASE 2: EXIT INTENT POPUP (16 hours)

### Setup (1 hour)

**Step 1**: Copy entire IxoraGroup ExitIntentPopup component
```bash
# Copy main component
cp "/mnt/d/Ixora Sites/Ixora-Group-Website/components/ExitIntentPopup.tsx" \
   "/mnt/d/Ixora Sites/reflow-toilets-website/components/conversion/ExitIntentPopup.tsx"
```

**Step 2**: Create types file
```bash
touch /mnt/d/Ixora\ Sites/reflow-toilets-website/components/conversion/types.ts
```

**Step 3**: Extract interfaces to types.ts:
```typescript
// types.ts
export interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'dropdown';
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export interface PopupConfig {
  heading: string;
  subheading: string;
  fields: FormField[];
  buttonText: string;
  benefits: string[];
  crmSource: string;
}

export interface ExitIntentPopupProps {
  currentPage: string;
}
```

---

### Customization (15 hours)

**Modify getPopupConfig()** function in ExitIntentPopup.tsx:

Replace all 5 variants with government-focused ones:

**Variant 1 - Homepage/B-CRT** (replace pricing variant):
```typescript
if (currentPage === 'home' || currentPage === 'bcrt') {
  return {
    heading: "Wait! Schedule a District-Wide Sanitation Consultation 🏛️",
    subheading: "Speak with a municipal infrastructure expert",
    fields: [
      {
        name: 'organizationType',
        type: 'dropdown',
        label: 'Organization Type',
        required: true,
        options: [
          'Select Organization Type',
          'Municipal Corporation',
          'Smart City Mission',
          'State Government Department',
          'Airport / Transportation Hub',
          'University / Educational Campus',
          'Shopping Mall / Retail Complex',
          'International Development Agency',
          'Social Enterprise / NGO',
          'Other'
        ]
      },
      {
        name: 'numberOfUnits',
        type: 'dropdown',
        label: 'Number of Toilets Needed',
        required: true,
        options: [
          'Select Number of Units',
          '1-5 units (Pilot Program)',
          '6-20 units (District Deployment)',
          '21-50 units (City Deployment)',
          '50+ units (State-wide Program)'
        ]
      },
      {
        name: 'name',
        type: 'text',
        label: 'Name',
        required: true,
        placeholder: 'Your name'
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        placeholder: 'your.email@municipality.gov'
      },
      {
        name: 'phone',
        type: 'tel',
        label: 'Phone',
        required: false,
        placeholder: '+91 98765 43210'
      },
      {
        name: 'city',
        type: 'text',
        label: 'City / District',
        required: true,
        placeholder: 'e.g., Hyderabad'
      }
    ],
    buttonText: "Schedule Government Consultation",
    benefits: [
      "✓ Free site assessment",
      "✓ Custom deployment plan",
      "✓ Government procurement support",
      "✓ Case studies from similar cities"
    ],
    crmSource: 'exit-popup-government'
  };
}
```

**Do this for all 5 variants** (see CONVERSION_FEATURES_ANALYSIS.md for complete specs).

**Color changes**:
```typescript
// Change all color references
// From: #D4B258 (gold)
// To: #34D399 (green)

// Update style section at bottom:
<style>{`
  @keyframes popupBounce {
    ...
  }
  .cta-button {
    background: linear-gradient(135deg, #52c85e 0%, #34D399 100%);
  }
  .cta-button:hover {
    background: linear-gradient(135deg, #34D399 0%, #10b981 100%);
  }
`}</style>
```

**CRM endpoint**: Update to ReFlow's Google Apps Script URL (set up in Phase 4).

---

## 🚀 PHASE 3: DEPLOYMENT PLANNER FORM (20 hours)

### Option 1: Copy and Adapt IxoraGroup's QuoteRequestForm (Recommended)

**Step 1**: Copy base component
```bash
cp "/mnt/d/Ixora Sites/Ixora-Group-Website/components/QuoteRequestForm.tsx" \
   "/mnt/d/Ixora Sites/reflow-toilets-website/components/conversion/DeploymentPlannerForm.tsx"
```

**Step 2**: Rename throughout:
- `QuoteRequestForm` → `DeploymentPlannerForm`
- `ixora-quote-form-data` → `reflow-deployment-planner`
- `quote-request` → `deployment-planner`

**Step 3**: Modify all 4 steps:

**Step 1 - Organization Details** (replace service selection):
```typescript
// Remove services array, add organization fields
{currentStep === 1 && (
  <div className="space-y-6">
    <h3>Organization Details</h3>

    <div>
      <label>Organization Type *</label>
      <select
        value={formData.organizationType}
        onChange={(e) => handleInputChange('organizationType', e.target.value)}
        required
      >
        <option value="">Select organization type</option>
        <option value="municipal-corp">Municipal Corporation</option>
        <option value="smart-city">Smart City Mission</option>
        {/* ... all 10 options ... */}
      </select>
    </div>

    <div>
      <label>Organization Name *</label>
      <input
        type="text"
        value={formData.organizationName}
        onChange={(e) => handleInputChange('organizationName', e.target.value)}
        required
      />
    </div>

    {/* Add: Department, City, State, Population fields */}
  </div>
)}
```

**Step 2 - Deployment Scope** (replace facility details):
```typescript
{currentStep === 2 && (
  <div>
    <h3>Deployment Scope</h3>

    <label>Number of B-CRT Units Needed *</label>
    <select>
      <option>1-5 units (Pilot)</option>
      <option>6-20 units (District)</option>
      {/* ... */}
    </select>

    <label>Deployment Locations *</label>
    {['Bus terminals', 'Markets', 'Parks', 'Schools', 'Govt offices'].map(loc => (
      <label key={loc}>
        <input
          type="checkbox"
          checked={formData.deploymentLocations.includes(loc)}
          onChange={() => handleCheckboxToggle('deploymentLocations', loc)}
        />
        {loc}
      </label>
    ))}

    {/* Add: Existing infrastructure, Sewerage system */}
  </div>
)}
```

**Step 3 - Project Requirements** (enhance):
```typescript
{currentStep === 3 && (
  <div>
    <h3>Project Requirements</h3>

    <label>Deployment Timeline *</label>
    <select>
      <option>Pilot Program (1-3 units) - 3-6 months</option>
      <option>Phase 1 Deployment - 6-12 months</option>
      {/* ... */}
    </select>

    <label>Procurement Method *</label>
    <select>
      <option>Direct Purchase</option>
      <option>Tender Process</option>
      <option>PPP Model</option>
      <option>CSR Funding</option>
      <option>Government Scheme</option>
      <option>International Grant</option>
      <option>Unsure / Need Guidance</option>
    </select>

    {/* Smart logic: If "Tender Process" selected, show helper */}
    {formData.procurementMethod === 'tender' && (
      <div className="helper-box">
        💡 We can provide tender documentation support
      </div>
    )}

    {/* Add: Budget range, Funding sources */}
  </div>
)}
```

**Step 4 - Contact (keep similar)** and **Step 5 - Additional Info (new)**.

---

## 📊 PHASE 4: CRM & ANALYTICS (13 hours)

### Google Sheets CRM Setup (6 hours)

**Step 1**: Create Google Sheet
1. Go to Google Sheets: sheets.google.com
2. Create new sheet: "ReFlow Leads"
3. Add columns A-U:
   - A: Timestamp
   - B: Source
   - C: Page
   - D: Organization Type
   - E: Organization Name
   - F: City
   - G: State
   - H: Contact Name
   - I: Email
   - J: Phone
   - K: Job Title
   - L: Number of Units
   - M: Deployment Locations
   - N: Timeline
   - O: Procurement Method
   - P: Budget Range
   - Q: Funding Sources
   - R: Special Requirements
   - S: Documentation Needed
   - T: Preferred Meeting
   - U: Status

**Step 2**: Create Apps Script
1. In Google Sheet, go to Extensions > Apps Script
2. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ReFlow Leads");
    const data = JSON.parse(e.postData.contents);

    const row = [
      new Date(),
      data.source || "",
      data.page || "",
      data.organizationType || "",
      data.organizationName || "",
      data.city || "",
      data.state || "",
      data.name || data.fullName || "",
      data.email || "",
      data.phone || "",
      data.jobTitle || "",
      data.numberOfUnits || "",
      data.deploymentLocations || "",
      data.timeline || "",
      data.procurementMethod || "",
      data.budgetRange || "",
      data.fundingSources || "",
      data.specialRequirements || "",
      data.documentationNeeded || "",
      data.preferredMeetingFormat || "",
      "New"
    ];

    sheet.appendRow(row);
    sendEmailNotification(data);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  const recipient = "govt@reflowtoilets.com"; // UPDATE THIS
  const subject = `New ${data.source} Lead: ${data.organizationName || data.name}`;

  const body = `
New Lead Submission

Source: ${data.source}
Organization: ${data.organizationName || 'Not provided'}
Type: ${data.organizationType || 'Not provided'}
Location: ${data.city || ''}, ${data.state || ''}

Contact: ${data.name || ''}
Email: ${data.email || ''}
Phone: ${data.phone || ''}

Details:
Units: ${data.numberOfUnits || 'Not specified'}
Timeline: ${data.timeline || 'Not specified'}
Procurement: ${data.procurementMethod || 'Not specified'}

View all leads: [SPREADSHEET_LINK]
  `.trim();

  MailApp.sendEmail(recipient, subject, body);

  // Send confirmation to user
  if (data.email) {
    const userSubject = "Thank You for Your Interest in ReFlow Toilets";
    const userBody = `
Dear ${data.name || 'Sir/Madam'},

Thank you for your interest in ReFlow Toilets' decentralized sanitation infrastructure.

Our government solutions team will contact you within 24 hours.

Resources:
• Technical Specs: https://reflowtoilets.com/tech
• Case Studies: https://reflowtoilets.com/innovation
• B-CRT Overview: https://reflowtoilets.com/bcrt

Contact:
Phone: +91 9494330442 (10am-5pm Mon-Fri)
Email: govt@reflowtoilets.com

Best regards,
ReFlow Toilets Team
    `.trim();

    MailApp.sendEmail(data.email, userSubject, userBody);
  }
}
```

**Step 3**: Deploy Apps Script
1. Click "Deploy" > "New deployment"
2. Type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy web app URL

**Step 4**: Update all form components
```typescript
// Replace CRM_ENDPOINT in all forms:
const CRM_ENDPOINT = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';
```

**Step 5**: Test submission
```bash
# Test with curl
curl -X POST YOUR_ENDPOINT_URL \
  -H "Content-Type: application/json" \
  -d '{"source":"test","name":"Test User","email":"test@test.com"}'

# Check Google Sheet for new row
```

---

### Analytics Setup (4 hours)

**Step 1**: Create GA4 property
1. Go to analytics.google.com
2. Create new property: "ReFlow Toilets"
3. Copy Measurement ID (G-XXXXXXXXXX)

**Step 2**: Add tracking code
```typescript
// In /app/layout.tsx, add to <head>:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Step 3**: Create analytics utility
```bash
touch /mnt/d/Ixora\ Sites/reflow-toilets-website/utils/analytics.ts
```

```typescript
// utils/analytics.ts
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

export const trackExitIntentShown = (page: string, variant: string) => {
  trackEvent('exit_intent_shown', { page, variant });
};

export const trackExitIntentSubmitted = (
  page: string,
  variant: string,
  orgType?: string
) => {
  trackEvent('exit_intent_submitted', { page, variant, organization_type: orgType });
};

export const trackDeploymentPlannerStarted = (orgType: string) => {
  trackEvent('deployment_planner_started', { organization_type: orgType });
};

export const trackDeploymentPlannerSubmitted = (
  orgType: string,
  numUnits: string,
  timeline: string
) => {
  trackEvent('deployment_planner_submitted', {
    organization_type: orgType,
    number_of_units: numUnits,
    timeline: timeline
  });
};

export const trackCTAClicked = (page: string, buttonText: string, location: string) => {
  trackEvent('cta_clicked', { page, button_text: buttonText, button_location: location });
};
```

**Step 4**: Add tracking to components
```typescript
// In ExitIntentPopup.tsx
import { trackExitIntentShown, trackExitIntentSubmitted } from '@/utils/analytics';

useEffect(() => {
  if (isVisible) {
    trackExitIntentShown(currentPage, popupConfig.crmSource);
  }
}, [isVisible]);

const handleSubmit = async () => {
  // ... submission logic ...
  if (success) {
    trackExitIntentSubmitted(currentPage, popupConfig.crmSource, formData.organizationType);
  }
};
```

**Step 5**: Configure GA4 custom dimensions
1. In GA4, go to Admin > Custom definitions
2. Add custom dimensions:
   - `organization_type` (Event parameter)
   - `number_of_units` (Event parameter)
   - `timeline` (Event parameter)
   - `page` (Event parameter)
   - `button_text` (Event parameter)

**Step 6**: Set up conversion goals
1. In GA4, go to Admin > Events
2. Mark as conversions:
   - `exit_intent_submitted`
   - `deployment_planner_submitted`
   - `innovation_network_signup`

---

## ✅ TESTING CHECKLIST

### Before Launch:
- [ ] All components build without errors (`npm run build`)
- [ ] TypeScript compilation successful (0 errors)
- [ ] Sticky CTA appears after 800px scroll
- [ ] District banner shows above footer
- [ ] Innovation network signup form submits
- [ ] Exit intent popup triggers after 30s + mouse exit
- [ ] Exit intent shows once per session
- [ ] Exit intent cooldown works (7 days)
- [ ] Deployment planner form saves progress (localStorage)
- [ ] All form validations work (email, phone formats)
- [ ] Google Sheets receives submissions
- [ ] Email notifications sent (team + user)
- [ ] GA4 events fire correctly (use DebugView extension)
- [ ] Mobile responsive (test on real devices)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)

---

## 🚀 DEPLOYMENT

### Pre-Production Checklist:
1. ✅ Update CRM endpoint to production Google Apps Script
2. ✅ Update email recipients (govt@reflowtoilets.com)
3. ✅ Update GA4 tracking ID to production
4. ✅ Test all forms with real email/phone
5. ✅ Verify privacy policy mentions data collection
6. ✅ Ensure terms of service updated

### Deploy:
```bash
cd /mnt/d/Ixora\ Sites/reflow-toilets-website
npm run build
# Follow your deployment process (Vercel, Netlify, etc.)
```

### Post-Launch Monitoring (Day 1):
- 9:00 AM: Check Google Sheet for test submissions
- 10:00 AM: Verify GA4 events in Realtime view
- 11:00 AM: Test exit intent on live site (incognito)
- 12:00 PM: Check email notifications working
- 2:00 PM: Review error logs (any failures?)
- 4:00 PM: First data review (how many leads?)
- 6:00 PM: End-of-day report

---

## 📞 NEED HELP?

### Common Issues:

**Exit popup not showing:**
- Check: 30 seconds elapsed?
- Check: Mouse moved to Y < 50px?
- Clear: localStorage and sessionStorage, refresh

**Form not submitting:**
- Check: Console for errors
- Verify: CRM endpoint URL correct
- Test: Google Apps Script independently with curl

**GA4 events not tracking:**
- Check: Tracking code in <head>
- Use: GA4 DebugView extension
- Verify: Events have correct parameter names

**Email not received:**
- Check: Spam folder
- Verify: Email address in Apps Script
- Test: MailApp.sendEmail() directly in Apps Script

---

## 🎯 SUCCESS METRICS

### Week 1 Target:
- 15-25 leads (3-5 per day)
- 60%+ form completion rate
- 5-8% exit intent conversion
- <1% error rate

### Month 1 Target:
- 80-120 leads
- Lead quality score: 3.0+/5
- Bounce rate: <60%
- Average time on page: 2.5+ minutes

### Month 3 Target:
- 100-150 leads/month
- Lead quality score: 3.5+/5
- Bounce rate: <55%
- Average time on page: 3+ minutes

---

**GOOD LUCK!** 🚀

You're building a lead generation machine. Follow this guide step-by-step, and you'll have a 2-3x increase in qualified government/enterprise leads within 3 months.

**Questions?** Refer to:
- CONVERSION_FEATURES_ANALYSIS.md (complete specs)
- CONVERSION_IMPLEMENTATION_ROADMAP.md (detailed breakdown)
- IxoraGroup.com components (reference code)

---

**Quick Start Guide Version**: 1.0
**Date**: November 11, 2025
**Total Time**: 60 hours (1.5 weeks full-time)
