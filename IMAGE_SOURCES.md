# Blog Image Sources & Requirements

**Purpose:** Documentation for sourcing and creating featured images for ReFlow Toilets blog posts

---

## Image Specifications

### Technical Requirements
- **Featured Images:** 1200×630px (Open Graph standard)
- **Blog Cards:** 16:9 aspect ratio (1200×675px)
- **Format:** WebP (primary), JPG (fallback)
- **File Size:** <200KB per image
- **Optimization:** 80-85% quality, lossless compression
- **CDN:** Upload to Cloudinary (existing ReFlow account)

---

## Blog Post Images Needed

### 1. How Zero-Discharge Toilets Work (Technical Breakdown)
**Filename:** `zero-discharge-technical.jpg`
**Type:** Technical diagram/infographic
**Suggested Content:**
- Cutaway diagram of B-CRT system showing treatment stages
- MBBR carriers, UV lamp, membrane filter labeled
- Flow arrows showing water path
- Color-coded: influent (brown), MBBR (blue-green), UV (purple), effluent (clear blue)

**Creation Options:**
- **Custom:** Commission infographic from designer ($200-500)
- **DIY:** Create using Canva/Figma with ReFlow brand colors
- **Photo:** Actual B-CRT unit with overlaid labels/callouts

**Inspiration Sources:**
- Orenco Systems technical diagrams
- Water treatment plant infographics on Shutterstock
- Engineering textbook illustrations

---

### 2. Public Toilet Economics (Cost Analysis)
**Filename:** `toilet-economics.jpg`
**Type:** Financial visualization
**Suggested Content:**
- Side-by-side bar chart: Traditional vs. B-CRT costs
- 20-year lifecycle cost comparison
- Color scheme: Red (traditional/high cost), Green (B-CRT/savings)
- Include key numbers: ₹2.9Cr vs ₹2.0Cr

**Creation Options:**
- **Custom Chart:** Use Canva with real data from blog post
- **Stock Photo:** Financial charts/graphs overlaid with ReFlow branding
- **Photograph:** Calculator, coins, and toilet models (conceptual)

**Stock Resources:**
- Unsplash: "business charts", "financial planning"
- Pexels: "cost analysis", "budget"
- Custom Excel/Google Sheets chart exported as image

---

### 3. ISO 30500 Certification Explained
**Filename:** `iso30500-certification.jpg`
**Type:** Certification/quality assurance visual
**Suggested Content:**
- ISO 30500 certification badge/seal (if available from ReFlow)
- Testing laboratory setup (water quality sampling)
- Professional, trust-building aesthetic
- Clean, modern design with ISO blue/white colors

**Creation Options:**
- **Photo:** Actual ReFlow ISO certificate
- **Stock:** Laboratory testing, quality control, certification documents
- **Graphic:** ISO badge mockup with checkmarks for compliance criteria

**Stock Resources:**
- Shutterstock: "ISO certification", "quality testing"
- Unsplash: "laboratory", "science testing"
- Request actual certificate from ReFlow team

---

### 4. Water Crisis Solutions (Conservation)
**Filename:** `water-crisis-solutions.jpg`
**Type:** Environmental/water conservation
**Suggested Content:**
- Split image: Dry cracked earth vs. water droplets/clean water
- Water being recycled (circular flow arrows)
- Hands holding water, sustainable water use
- Blue and green color palette (water + sustainability)

**Creation Options:**
- **Stock Photo:** Water conservation imagery
- **Custom Photo:** B-CRT recycled water flowing, clear and clean
- **Infographic:** Water savings statistics with visual elements

**Stock Resources:**
- Unsplash: "water conservation", "water crisis", "drought"
- Pexels: "clean water", "water droplet", "sustainability"
- iStock: "water recycling" (premium quality)

---

### 5. Hyderabad Case Study (Real Deployment)
**Filename:** `hyderabad-case-study.jpg`
**Type:** Real-world installation photograph
**Suggested Content:**
- ReFlow B-CRT unit installed at Hyderabad location
- Exterior shot showing clean, modern design
- People using facility (optional, with privacy consideration)
- Visible solar panels, ReFlow branding

**Creation Options:**
- **BEST OPTION:** Actual photographs from Hyderabad deployments
- Request from ReFlow operations team (MGBS, KBR Park, etc.)
- Professional photographer visit to key sites
- Smartphone photos acceptable if high quality

**Photography Checklist:**
- Golden hour lighting (early morning/late afternoon)
- Clean facility (schedule after cleaning)
- Wide angle showing full unit + surroundings
- Detail shots: Control panel, interior (if appropriate)
- 4K resolution minimum (downscale for web)

**Stock Fallback:**
- Not recommended (use actual deployment photos for authenticity)
- If unavailable, modern public toilet exterior (generic)

---

### 6. Future of Sanitation (IoT/Smart Toilets)
**Filename:** `iot-smart-toilets.jpg`
**Type:** Technology/dashboard visualization
**Suggested Content:**
- Dashboard mockup showing real-time monitoring
- Graphs, metrics, sensor data
- Modern, futuristic aesthetic
- Blue/purple tech colors, dark mode UI

**Creation Options:**
- **Custom:** Screenshot of actual ReFlow IoT dashboard (if exists)
- **Mockup:** Create dashboard design in Figma/Sketch
- **Stock:** Smart city, IoT sensors, data visualization

**Design Elements:**
- Water quality graph (trending down = improving)
- Uptime indicator (97.3%)
- Energy production (solar chart)
- Map view of multiple toilet locations

**Stock Resources:**
- Unsplash: "dashboard", "data visualization", "IoT"
- Dribbble: IoT dashboard designs (for inspiration)
- Flaticon: Icons for sensors, monitoring, analytics

---

## Production Workflow

### Phase 1: Source/Create Images (Week 1)
1. **Priority 1 (Use Real Photos):**
   - Contact ReFlow operations for Hyderabad case study photos
   - Request ISO certification document/badge

2. **Priority 2 (Create Custom):**
   - Technical diagram (hire designer or DIY in Canva)
   - Economics chart (create from blog data)
   - IoT dashboard (mockup in Figma)

3. **Priority 3 (Use Stock):**
   - Water crisis imagery (Unsplash)
   - Fallback for any unavailable originals

### Phase 2: Optimize Images (Week 1-2)
1. Resize to 1200×630px (featured) and 1200×675px (cards)
2. Compress with TinyPNG or Squoosh
3. Convert to WebP format (primary)
4. Keep JPG as fallback
5. Add alt text descriptions

### Phase 3: Upload to CDN (Week 2)
1. Log into Cloudinary ReFlow account
2. Create folder: `/blog-featured-images/`
3. Upload all images
4. Copy CDN URLs
5. Update `/lib/blogPosts.ts` with URLs

### Phase 4: Update Blog Posts (Week 2)
Replace placeholder paths in `blogPosts.ts`:
```typescript
// Before
featuredImage: '/images/blog/zero-discharge-technical.jpg',

// After
featuredImage: 'https://res.cloudinary.com/dhupieu4x/image/upload/blog-featured-images/zero-discharge-technical.webp',
```

---

## Cloudinary Upload Instructions

### Folder Structure
```
cloudinary.com/dhupieu4x/
└── reflow-assets/
    └── blog/
        ├── zero-discharge-technical.webp
        ├── zero-discharge-technical.jpg
        ├── toilet-economics.webp
        ├── toilet-economics.jpg
        ├── iso30500-certification.webp
        ├── iso30500-certification.jpg
        ├── water-crisis-solutions.webp
        ├── water-crisis-solutions.jpg
        ├── hyderabad-case-study.webp
        ├── hyderabad-case-study.jpg
        ├── iot-smart-toilets.webp
        └── iot-smart-toilets.jpg
```

### Transformation Settings (Cloudinary)
- **Quality:** Auto (q_auto)
- **Format:** Auto (f_auto) - serves WebP to supported browsers
- **Responsive:** Width auto (w_auto)
- **Compression:** Lossless for technical diagrams, lossy for photos

### Example URLs
```
https://res.cloudinary.com/dhupieu4x/image/upload/q_auto,f_auto,w_1200/reflow-assets/blog/zero-discharge-technical
```

---

## Design Resources

### Free Tools
- **Canva:** Infographics, charts, social media graphics
- **Figma:** UI mockups, dashboard designs
- **Photopea:** Browser-based Photoshop alternative
- **Remove.bg:** Background removal for product shots
- **Squoosh:** Image compression

### Stock Photo Sites (Free)
- **Unsplash:** High-quality, free photos
- **Pexels:** Videos and photos
- **Pixabay:** Public domain images
- **Burst (Shopify):** Commercial use images

### Stock Photo Sites (Paid)
- **Shutterstock:** Premium quality, extensive library
- **iStock:** Mid-range pricing
- **Adobe Stock:** Integrates with Creative Cloud
- **Getty Images:** Highest quality, most expensive

### Icon Libraries
- **Flaticon:** Free and premium icons
- **Noun Project:** Simple, clean icons
- **Iconify:** Open source icon sets

---

## Brand Guidelines

### ReFlow Color Palette
- **Primary Green:** #4CAF50
- **Secondary Blue:** #2196F3
- **Dark Gray:** #1A1A1A
- **Light Gray:** #F8F9FA
- **White:** #FFFFFF

### Typography
- **Headings:** Sans-serif (Montserrat, Poppins)
- **Body:** Sans-serif (Inter, Quicksand)
- **Data/Tech:** Monospace (SF Mono, Roboto Mono)

### Logo Usage
- Include ReFlow logo on custom graphics
- Logo file: `reflow favicon.png` (from Cloudinary)
- Placement: Bottom right corner, 10-15% of image size
- Ensure sufficient contrast with background

---

## Accessibility Requirements

### Alt Text Examples
```typescript
// Good alt text (descriptive, informative)
imageAlt: 'Technical diagram showing B-CRT toilet system components: MBBR tank, UV disinfection chamber, membrane filter, with labeled water flow paths'

imageAlt: 'Bar chart comparing 20-year costs: traditional toilet ₹2.9 crores vs B-CRT ₹2.0 crores, showing 31% savings'

imageAlt: 'ISO 30500 certification badge overlaid on water quality testing in laboratory setting'

// Bad alt text (too vague)
imageAlt: 'Toilet diagram'
imageAlt: 'Cost chart'
imageAlt: 'Certification image'
```

### Text on Images
- **Minimum font size:** 24px
- **Contrast ratio:** 4.5:1 (WCAG AA standard)
- **Background:** Semi-transparent overlay if text over photo
- **Avoid:** Text-heavy images (use HTML text instead)

---

## Budget Estimate

### DIY Approach (Minimal Cost)
- Stock photos (Unsplash): FREE
- Canva Pro (1 month): $12.99
- Image optimization tools: FREE
- **Total: ~$13**

### Semi-Professional Approach
- Stock photos (Shutterstock 5-pack): $49
- Canva Pro (annual): $119.99
- Custom infographic (Fiverr): $50-100
- **Total: ~$220-270**

### Professional Approach
- Stock photos (premium): $150
- Professional photographer (Hyderabad): $300-500
- Graphic designer (3 custom infographics): $600-900
- **Total: ~$1,050-1,550**

**Recommended:** Semi-Professional Approach
- Mix of stock, custom graphics, and real photos
- Best value for quality
- Professional appearance without excessive cost

---

## Timeline

### Week 1: Image Sourcing
- Day 1-2: Contact ReFlow for case study photos, ISO cert
- Day 3-4: Search stock photos for water crisis
- Day 5-7: Create custom economics chart and technical diagram

### Week 2: Production
- Day 1-3: Design IoT dashboard mockup
- Day 4-5: Optimize all images (resize, compress, convert)
- Day 6: Upload to Cloudinary
- Day 7: Update blog post code with CDN URLs

### Week 3: Quality Assurance
- Day 1-2: Test all images on blog (desktop + mobile)
- Day 3-4: Verify alt text, Open Graph previews
- Day 5: Final adjustments
- Day 6-7: Deploy to production

---

## Maintenance

### Quarterly Review
- Check image load times (<2 seconds)
- Verify CDN URLs still active
- Update images if blog content revised
- Replace with higher quality if available

### Annual Update
- Refresh case study images with latest deployments
- Update charts with current year data
- Replace stock photos with custom photography
- Optimize for new formats (AVIF when widely supported)

---

**Contact for Image Assets:**
- ReFlow Operations Team: Request deployment photos
- ReFlow Marketing: Brand guidelines, logo files
- Cloudinary Account: Upload access for CDN

**Last Updated:** November 22, 2025
