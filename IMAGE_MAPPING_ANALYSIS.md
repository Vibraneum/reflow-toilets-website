# ReFlow Toilets Website - Image Mapping Analysis

**Date**: 2025-11-12
**Purpose**: Document actual image content and correct usage locations

---

## Image Inventory & Content Description

### B-CRT Technical Images (`/public/images/bcrt/`)

1. **MAIN B-CRT IMAGE.png**
   - **Content**: Comprehensive showcase including floor plan (top left), team photos, container exterior view, treatment system layout, and license agreement text
   - **Best Use**: Hero image, overview presentations
   - **Currently Used**: External URL on b-crt page

2. **Screenshot 2025-03-12 231711.png**
   - **Content**: Top-view floor plan showing 3 toilet cubicles, trash cans, advanced treatment tank, solar storage equipment, and ECR system with detailed measurements
   - **Correct Caption**: "40ft Container Floor Plan - Top View with Treatment Systems"
   - **Currently Used**: Line 177 in b-crt/page.tsx with caption "40FT Container Floor Plan" ✓

3. **Screenshot 2025-03-12 231909.png**
   - **Content**: Physical photo of treatment equipment unit installed outdoors on concrete pad, showing white/gray industrial equipment
   - **Correct Caption**: "B-CRT Treatment Equipment - Installed Unit"
   - **Currently Used**: Line 187 in b-crt/page.tsx with caption "8-Stage Treatment Process" ✗ WRONG

4. **Screenshot 2025-04-03 011055.png**
   - **Content**: Side-view water treatment process diagram showing person on toilet, recycled tank, biological treatment, advanced treatment, and ECR with flow arrows
   - **Correct Caption**: "Water Treatment Process Flow - 8-Stage System"
   - **Currently Used**: Line 197 in b-crt/page.tsx with caption "Technical Specifications" ✗ WRONG

5. **Screenshot 2025-04-03 011136.png**
   - **Content**: Four-view engineering drawings (front, back, right, left views) showing solar panels on roof, 3 toilet cubicles, equipment room layout with dimensions
   - **Correct Caption**: "Engineering Drawings - All Views with Dimensions (L12196mm × W2438mm × H2896mm)"
   - **Currently Used**: Line 207 in b-crt/page.tsx with caption "Solar & Battery Configuration" ✗ WRONG

6. **Screenshot 2025-04-03 011210.png**
   - **Content**: Top-view floor plan with annotations showing urinal, pedestal pan, trash can, advanced treatment tank, solar storage, ECR system, and equipment details with note "A 40-foot b-CRT can be equipped with 3-4 toilet cubicles, solar system, and sludge harmless disinfection device"
   - **Correct Caption**: "Detailed Floor Plan - Equipment Configuration Options"
   - **Currently Used**: Line 217 in b-crt/page.tsx with caption "Water Management System" ✗ WRONG

7. **Screenshot 2025-04-03 011410.png**
   - **Content**: Water quality table showing "Influent and effluent quality table" with parameters (CODcr, SS, BOD, NH3-N, TN, TP, PH, Total coliforms) and their design influent vs effluent quality values
   - **Correct Caption**: "Water Quality Standards - Influent vs Effluent Parameters"
   - **Currently Used**: Line 227 in b-crt/page.tsx with caption "IoT Control & Monitoring" ✗ WRONG

8. **Screenshot 2025-04-03 011514.png**
   - **Content**: Comprehensive specifications sheet combining water treatment process diagram, floor plan, engineering views (front, back, right, left), and water quality table - all-in-one technical overview with capacity "1000L/D, Usage: 200 flushes/day"
   - **Correct Caption**: "Complete Technical Specifications Overview"
   - **Best Use**: Single-image technical reference, downloadable spec sheet

9. **Screenshot 2025-04-03 011945.png**
   - **Content**: Equipment technical drawings showing three views (main view, left view, top view) of a single treatment equipment unit with dimensions L1000mm × W600mm × H1450mm
   - **Correct Caption**: "Treatment Equipment Unit - Technical Dimensions"
   - **Best Use**: Equipment specifications, vendor documentation

10. **Screenshot 2025-04-03 012150.png**
    - **Content**: "Back-end treatment system layout" diagram showing collecting tank (1900×1100×1180) with blackwater entrance, biological treatment tank service sink, and ECR & Carbon Filtration system with dimensions 6068mm
    - **Correct Caption**: "Back-end Treatment System Layout - Plumbing Diagram"
    - **Best Use**: Technical documentation, installation guides

---

### Unit Showcase Images (`/public/images/units/`)

1. **Mini on footpath reflow.jpg**
   - **Content**: ReFlow Mini toilet on urban footpath/sidewalk - compact yellow/orange and green unit with gender icons, open door showing interior, trash bin, planted decorations, street setting at dusk/dawn
   - **Correct Usage**: ReFlow Mini showcase, urban deployment examples
   - **Currently Used**: NOT USED ✗ CRITICAL - Should replace incorrect Mini images

2. **big unit reflow.png**
   - **Content**: ReFlow Standard unit - green shipping container style with "NECKLACE ROAD" signage, advertisement space panel, 3 doors/sections visible, ice cream vendor sign, black background (render/mockup)
   - **Correct Usage**: ReFlow Standard showcase, customizable unit examples
   - **Currently Used**: NOT USED ✗ CRITICAL - Should replace incorrect Standard images

3. **reflow dal lake.png**
   - **Content**: ReFlow unit deployed at Dal Lake location - white/beige container unit in winter/snow setting with "ReFlow ❤️ Dal Lake" branding, people visible near unit
   - **Correct Usage**: Deployment showcase, location-specific examples, cold weather capability
   - **Currently Used**: External URL on b-crt page

4. **reflow mini.png**
   - **Content**: Small ReFlow kiosk-style unit on street - decorative painted exterior with blue/cultural artwork, person walking past, shops in background, urban setting
   - **Correct Usage**: Mini variant showcase, artistic customization examples
   - **Currently Used**: NOT USED - Another Mini variant

---

### Tech/Dashboard Images (`/public/images/tech/`)

1. **Reflow app 2 (1).png**
   - **Content**: Mobile app screenshot showing "ReFlow Public Toilet Management" with map view, stats (24 total facilities, 1,532 usage today, 92% cleanliness), facilities list (Central Park - Open 53/103, Market Street - Closed 0/80)
   - **Best Use**: IoT monitoring features, app interface showcase

2. **Reflow app.png**
   - **Content**: Three mobile phone mockups showing login screen, admin panel with location buttons (Independence Park, Block Centre, Victoria Primary School, Annel Primary School), and "Where to?" map view
   - **Best Use**: App navigation examples, multi-location management

3. **reflow dashboard.png**
   - **Content**: Dark-themed web dashboard showing usage graph, active alerts (5), average wait duration (8 min), occupancy (65% confirmed), cleaning schedule (65% ready), toilet status list, and cleaning schedule bar chart
   - **Best Use**: Desktop monitoring interface, operations center view

4. **reflow dashboard2.png**
   - **Similar to dashboard.png but alternate view**

5. **wiring system.jpg**
   - **Content**: Complex wiring/electrical system photo
   - **Best Use**: Technical installation documentation

---

### Hero Images (`/public/images/hero/`)

1. **Hero image.png**
   - **Content**: Grid of 9 ReFlow toilet photos showing various deployments, designs, gender signage, "CLEAN SAFE FREE" messaging, exterior views, dashboard screenshot
   - **Best Use**: Homepage hero, gallery showcase

2. **Interior.png**
   - **Content**: Interior bathroom photo showing urinals, sink, marble/decorative walls, plants, "Loocafe" branding
   - **Best Use**: Interior quality showcase (Note: This is LooCafe interior, not ReFlow specific)

---

## Critical Fixes Needed

### 1. B-CRT Page Gallery Section (Lines 174-236 in app/b-crt/page.tsx)

**Current Issues**:
- Screenshot 231909 (Photo of equipment) labeled as "8-Stage Treatment Process" → Should be "Treatment Equipment - Installed Unit"
- Screenshot 011055 (Water flow diagram) labeled as "Technical Specifications" → Should be "Water Treatment Process Flow"
- Screenshot 011136 (4-view drawings) labeled as "Solar & Battery Configuration" → Should be "Engineering Drawings - All Views"
- Screenshot 011210 (Floor plan with notes) labeled as "Water Management System" → Should be "Equipment Configuration Options"
- Screenshot 011410 (Water quality table) labeled as "IoT Control & Monitoring" → Should be "Water Quality Standards Table"

**Note**: Only 6 images shown in gallery, but 4 more technical images available (011514, 011945, 012150) that could be added

### 2. Innovation Page (app/innovation/page.tsx)

**Current Issues**:
- Line 84: ReFlow Mini using external URL (MINI-CONCEPT.png) → Should use `/images/units/Mini on footpath reflow.jpg`
- Line 120: ReFlow Standard using external URL (20241231_143228.jpg) → Should use `/images/units/big unit reflow.png`
- Both lines 84 and 227: Same external image used twice

### 3. Products Page (app/products/page.tsx)

**Current Issues**:
- Line 36 (ReFlow Mini): Using external URL → Should use `/images/units/Mini on footpath reflow.jpg`
- Line 68 (ReFlow Standard): Using external URL → Should use `/images/units/big unit reflow.png`
- All product images are external URLs instead of local images

---

## Recommended Image Usage Map

### Homepage
- **Hero**: `/images/hero/Hero image.png` (9-photo grid)
- **Interior Quality**: `/images/hero/Interior.png`

### B-CRT Page
- **Main Hero**: External URL (keep as is) or use `/images/bcrt/MAIN B-CRT IMAGE.png`
- **Gallery**: Update captions to match actual content (see fixes above)
- **Optional**: Add 3 additional technical images to gallery

### Innovation Page
- **Mini Showcase**: `/images/units/Mini on footpath reflow.jpg` ✓ REALISTIC PHOTO
- **Standard Showcase**: `/images/units/big unit reflow.png` ✓ GREEN CONTAINER UNIT
- **B-CRT Showcase**: Keep external URL or use local main image

### Products Page
- **Mini Product Card**: `/images/units/Mini on footpath reflow.jpg`
- **Standard Product Card**: `/images/units/big unit reflow.png`
- **B-CRT Product Card**: Keep external URL

### Tech Page (if exists)
- **App Interface**: `/images/tech/Reflow app.png` or `Reflow app 2 (1).png`
- **Dashboard**: `/images/tech/reflow dashboard.png`

---

## Action Items

1. ✓ **Document Complete** - This file serves as reference
2. **Update B-CRT Gallery Captions** - Fix 5 incorrect captions
3. **Update Innovation Page Images** - Replace 2 external URLs with local images
4. **Update Products Page Images** - Replace 2 external URLs with local images
5. **Consider Adding** - 3 additional B-CRT technical images to gallery

---

## Notes

- All local images are properly stored in `/public/images/` directory
- External URLs from typedream.com are working but increase page load time
- Local images provide better performance and control
- Image filenames with spaces work fine in Next.js (automatically URL-encoded)
- B-CRT technical screenshots provide comprehensive specifications coverage
- Unit showcase images are production-ready photos/renders
