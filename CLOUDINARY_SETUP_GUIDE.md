# Cloudinary CDN Setup Guide - ReFlow Toilets Website

**Last Updated**: November 21, 2025
**Purpose**: Migrate all local images to Cloudinary CDN for better performance, optimization, and delivery

---

## Table of Contents

1. [Overview](#overview)
2. [Image Inventory](#image-inventory)
3. [Prerequisites](#prerequisites)
4. [Setup Instructions](#setup-instructions)
5. [Upload Process](#upload-process)
6. [Migration Process](#migration-process)
7. [Testing & Verification](#testing--verification)
8. [Rollback Procedure](#rollback-procedure)
9. [Cloudinary Features](#cloudinary-features)
10. [Troubleshooting](#troubleshooting)

---

## Overview

This guide walks you through migrating all ReFlow Toilets website images from local storage to Cloudinary CDN.

### Benefits of Cloudinary CDN

- **Performance**: Global CDN with edge caching (faster load times worldwide)
- **Automatic Optimization**: Format detection (WebP, AVIF), quality optimization
- **Responsive Images**: Dynamic resizing and cropping via URL parameters
- **Bandwidth Savings**: Reduced server load, optimized file sizes
- **Transformations**: On-the-fly image manipulation (resize, crop, filters)
- **SEO Benefits**: Faster page loads improve search rankings

### Current Status

- **Total Images**: 31 images
- **Total Size**: ~12 MB
- **Folders**: bcrt, tech, units, hero, logos, root (favicons)
- **Cloudinary Cloud**: `dhupieu4x` (shared with Ixora Group)

---

## Image Inventory

### Complete Image List (31 images)

#### Root Level (3 images)
| File | Size | Usage |
|------|------|-------|
| favicon.ico | 4.0K | Browser favicon |
| favicon.png | 4.0K | Apple touch icon |
| logo.png | 52K | Site logo |

#### /images/bcrt/ (10 images)
| File | Size | Description |
|------|------|-------------|
| MAIN B-CRT IMAGE.png | 496K | Hero image for B-CRT technology |
| Screenshot 2025-03-12 231711.png | 96K | B-CRT process diagram |
| Screenshot 2025-03-12 231909.png | 176K | B-CRT system overview |
| Screenshot 2025-04-03 011055.png | 280K | Technology detail |
| Screenshot 2025-04-03 011136.png | 172K | Process flow |
| Screenshot 2025-04-03 011210.png | 220K | System components |
| Screenshot 2025-04-03 011410.png | 64K | Technical specs |
| Screenshot 2025-04-03 011514.png | 224K | Implementation |
| Screenshot 2025-04-03 011945.png | 80K | Monitoring system |
| Screenshot 2025-04-03 012150.png | 100K | Analytics dashboard |

#### /images/hero/ (2 images)
| File | Size | Description |
|------|------|-------------|
| Hero image.png | 2.8M | Main hero image (LARGEST FILE - needs optimization) |
| Interior.png | 344K | Interior design showcase |

#### /images/logos/ (4 images)
| File | Size | Description |
|------|------|-------------|
| iso.jpg | 136K | ISO certification logo |
| reflow favicon.png | 4.0K | Favicon variant |
| reflow toilets png.png | 364K | ReFlow logo |
| telangana.png | 36K | Telangana government logo |

#### /images/tech/ (8 images)
| File | Size | Description |
|------|------|-------------|
| Reflow app 2 (1).png | 520K | Mobile app interface |
| Reflow app.png | 372K | App dashboard |
| Reflow unit app (1).png | 560K | Unit control app |
| Screenshot 2025-04-18 172042.png | 1.1M | Tech dashboard (2nd LARGEST) |
| Screenshot 2025-04-18 172328.png | 536K | Analytics view |
| reflow dashboard.png | 440K | Main dashboard |
| reflow dashboard2.png | 300K | Dashboard variant |
| wiring system.jpg | 68K | Electrical wiring diagram |

#### /images/units/ (4 images)
| File | Size | Description |
|------|------|-------------|
| big unit reflow.png | 232K | Large toilet unit |
| Mini on footpath reflow.jpg | 208K | Mini unit on footpath |
| reflow dal lake.png | 684K | Dal Lake installation |
| reflow mini.png | 928K | Mini unit detail (3rd LARGEST) |

### Breakdown by Folder

```
root: 3 images (60KB)
bcrt: 10 images (~1.9MB)
hero: 2 images (~3.1MB - 26% of total)
logos: 4 images (~540KB)
tech: 8 images (~3.9MB - 33% of total)
units: 4 images (~2.0MB)
```

### Top 5 Largest Files (Optimization Priority)

1. **Hero image.png** - 2.8MB (hero folder)
2. **Screenshot 2025-04-18 172042.png** - 1.1MB (tech folder)
3. **reflow mini.png** - 928KB (units folder)
4. **reflow dal lake.png** - 684KB (units folder)
5. **Reflow unit app (1).png** - 560KB (tech folder)

**Combined**: ~6MB (50% of total size) - These should be aggressively optimized

---

## Prerequisites

### 1. Cloudinary Account

- **Create Account**: https://cloudinary.com/users/register/free
- **OR Use Existing**: Ixora Group account (cloud_name: `dhupieu4x`)
- **Free Tier**: 25 GB storage, 25 GB bandwidth/month (sufficient for ReFlow)

### 2. Get API Credentials

1. Log in to Cloudinary Console: https://cloudinary.com/console
2. Go to **Dashboard** → **Account Details**
3. Note down:
   - **Cloud Name**: `dhupieu4x` (or your cloud)
   - **API Key**: Found in dashboard
   - **API Secret**: Click "Reveal" to see it

### 3. Node.js & npm

- **Required**: Node.js 14+ (already installed for Next.js)
- **Verify**: `node --version` and `npm --version`

### 4. Install Dependencies

```bash
cd "/mnt/d/Ixora Sites/reflow-toilets-website"
npm install cloudinary dotenv glob --save-dev
```

---

## Setup Instructions

### Step 1: Create .env.local File

```bash
# Copy the example file
cp .env.local.example .env.local

# Edit with your credentials
# Use a text editor to add your Cloudinary credentials
```

**Contents of .env.local**:

```env
# Google Analytics (existing)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Cloudinary Configuration (add these)
CLOUDINARY_CLOUD_NAME=dhupieu4x
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your_secret_here
```

**IMPORTANT**: Never commit `.env.local` to Git! It's already in `.gitignore`.

### Step 2: Verify Scripts

Two scripts should exist in `/scripts/`:

1. **upload-to-cloudinary.js** - Uploads all images to Cloudinary
2. **migrate-image-references.js** - Updates code to use CDN URLs

If missing, they should have been created. Verify:

```bash
ls -lh scripts/
```

---

## Upload Process

### Step 1: Test Upload (Single Image)

Before uploading all images, test with a small file:

```bash
# Test credentials
node -e "
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log('✅ Cloudinary configured successfully!');
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
"
```

Expected output: `✅ Cloudinary configured successfully!`

### Step 2: Run Upload Script

```bash
node scripts/upload-to-cloudinary.js
```

**What happens**:

1. Scans `/public/images/` and root level for images
2. Displays image count and breakdown by folder
3. Uploads each image to Cloudinary with optimizations:
   - Quality: `auto:good` (automatic quality optimization)
   - Format: `auto` (WebP for modern browsers, fallback to original)
4. Progress shown in real-time: `⏳ Uploading (1/31): filename... ✅ 123KB`
5. Generates 3 mapping files in `/cloudinary-mapping/`:
   - `cloudinary-complete-mapping.json` (full metadata)
   - `cloudinary-simple-mapping.json` (local path → CDN URL)
   - `cloudinary-config.ts` (TypeScript config with helper functions)
   - `cloudinary-failed-uploads.json` (if any failures)

**Expected output**:

```
🚀 ReFlow Toilets - Cloudinary Upload Starting...

☁️  Cloud Name: dhupieu4x
📁 Base Folder: reflow-toilets

📂 Scanning for images...

✅ Found 31 images

📊 Breakdown by folder:
   root: 3 images
   bcrt: 10 images
   hero: 2 images
   logos: 4 images
   tech: 8 images
   units: 4 images

⏳ Uploading (1/31): favicon.ico... ✅ 3.2KB
⏳ Uploading (2/31): MAIN B-CRT IMAGE.png... ✅ 496KB
...

============================================================

📈 UPLOAD SUMMARY

✅ Successful: 31
❌ Failed: 0
📊 Total: 31

💾 Total uploaded: 11.72 MB

📝 Generating mapping files...

   ✅ cloudinary-mapping/cloudinary-complete-mapping.json
   ✅ cloudinary-mapping/cloudinary-simple-mapping.json
   ✅ cloudinary-mapping/cloudinary-config.ts

============================================================

🎉 UPLOAD COMPLETE!

📋 Next Steps:
   1. Review the mapping files in cloudinary-mapping/
   2. Run: node scripts/migrate-image-references.js
   3. Test the website to ensure all images load correctly
   4. Commit the changes to version control
```

### Step 3: Review Mapping Files

**cloudinary-simple-mapping.json** (excerpt):

```json
{
  "/favicon.ico": "https://res.cloudinary.com/dhupieu4x/image/upload/v1234567890/reflow-toilets/favicon.ico",
  "/logo.png": "https://res.cloudinary.com/dhupieu4x/image/upload/v1234567890/reflow-toilets/logo.png",
  "/images/bcrt/MAIN B-CRT IMAGE.png": "https://res.cloudinary.com/dhupieu4x/image/upload/v1234567890/reflow-toilets/images/bcrt/main-bcrt-image.png",
  "/images/hero/Hero image.png": "https://res.cloudinary.com/dhupieu4x/image/upload/v1234567890/reflow-toilets/images/hero/hero-image.png"
}
```

**Key Points**:

- Local paths preserved (keys)
- CDN URLs optimized (values)
- Filenames sanitized (spaces → hyphens, lowercase)
- Folder structure maintained in Cloudinary

---

## Migration Process

### Step 1: Dry Run (Safe Test)

Test the migration without modifying files:

```bash
DRY_RUN=true node scripts/migrate-image-references.js
```

**What happens**:

- Scans all `.tsx`, `.ts`, `.jsx`, `.js`, `.css` files
- Identifies image references (src="...", url(...), etc.)
- Shows what would be replaced
- **NO FILES MODIFIED**

**Expected output**:

```
🔄 ReFlow Toilets - Image Reference Migration

📁 Mapping file: cloudinary-mapping/cloudinary-simple-mapping.json
🖼️  Total mappings: 31
🧪 DRY RUN MODE (no files will be modified)

📂 Found 45 files to check

🔍 Checking: app/page.tsx... ✅ 3 replacements
🔍 Checking: app/bcrt/page.tsx... ✅ 10 replacements
🔍 Checking: components/Hero.tsx... ✅ 2 replacements
...

============================================================

📈 MIGRATION SUMMARY

📂 Files checked: 45
✏️  Files modified: 12
🔄 Total replacements: 48

📋 Detailed report: cloudinary-mapping/migration-report.json

============================================================

🧪 DRY RUN COMPLETE - No files were modified

To apply changes, run: node scripts/migrate-image-references.js
```

### Step 2: Review Migration Report

Open `cloudinary-mapping/migration-report.json` to see detailed changes:

```json
{
  "timestamp": "2025-11-21T10:30:00.000Z",
  "dryRun": true,
  "summary": {
    "filesChecked": 45,
    "filesModified": 12,
    "totalReplacements": 48
  },
  "details": [
    {
      "file": "app/page.tsx",
      "replacements": 3,
      "changes": [
        {
          "from": "/images/hero/Hero image.png",
          "to": "https://res.cloudinary.com/dhupieu4x/image/upload/v1234567890/reflow-toilets/images/hero/hero-image.png"
        }
      ]
    }
  ]
}
```

### Step 3: Apply Migration (Live)

If dry run looks good, apply changes:

```bash
node scripts/migrate-image-references.js
```

**What happens**:

- **Backs up** all modified files to `/backups/backup-<timestamp>/`
- Replaces all local image paths with Cloudinary CDN URLs
- Supports multiple reference formats:
  - `src="/images/..."`
  - `src={"/images/..."}`
  - `url(/images/...)` (CSS)
  - `background: url(/images/...)`
  - `backgroundImage: "url(/images/...)"`
  - `import ... from '/images/...'`
- Generates detailed report

**Expected output**:

```
🔄 ReFlow Toilets - Image Reference Migration

📁 Mapping file: cloudinary-mapping/cloudinary-simple-mapping.json
🖼️  Total mappings: 31
✏️  LIVE MODE (files will be modified)

📂 Found 45 files to check

🔍 Checking: app/page.tsx... ✅ 3 replacements
🔍 Checking: app/bcrt/page.tsx... ✅ 10 replacements
...

============================================================

📈 MIGRATION SUMMARY

📂 Files checked: 45
✏️  Files modified: 12
🔄 Total replacements: 48

💾 Backups saved to: backups/backup-1732188600000

📋 Detailed report: cloudinary-mapping/migration-report.json

============================================================

✅ MIGRATION COMPLETE!

📋 Next Steps:
   1. Test the website locally
   2. Check all pages to ensure images load correctly
   3. Review the migration-report.json for details
   4. If everything works, commit the changes
   5. If issues occur, restore from backups in: backups/backup-1732188600000
```

---

## Testing & Verification

### Step 1: Start Development Server

```bash
npm run dev
```

### Step 2: Manual Testing Checklist

Visit each page and verify images load correctly:

- [ ] **Home Page** (`/`)
  - [ ] Hero image displays
  - [ ] Partner logos load
  - [ ] Feature images render

- [ ] **B-CRT Page** (`/bcrt`)
  - [ ] All 10 B-CRT diagrams load
  - [ ] Main B-CRT image displays

- [ ] **Innovation Page** (`/innovation`)
  - [ ] Interior design images
  - [ ] Mission images

- [ ] **Tech Page** (`/tech`)
  - [ ] Dashboard screenshots (8 images)
  - [ ] Wiring diagram
  - [ ] App interface images

- [ ] **Design Page** (`/design`)
  - [ ] Unit photos (4 images)
  - [ ] Installation photos

- [ ] **Contact Page** (`/contact`)
  - [ ] Any decorative images

### Step 3: Browser DevTools Inspection

1. Open DevTools (F12)
2. Go to **Network** tab
3. Filter: **Img**
4. Reload page
5. Verify all images:
   - ✅ Load from `res.cloudinary.com/dhupieu4x/`
   - ✅ Status: 200 (OK)
   - ✅ Size: Optimized (smaller than original)
   - ✅ Format: WebP (for modern browsers)

### Step 4: Performance Testing

**Before migration baseline** (from current site):

- Hero image: 2.8MB
- Total image size: ~12MB
- Load time: ~3-5 seconds (fast connection)

**Expected after migration**:

- Hero image: ~500-800KB (70-80% reduction with WebP)
- Total image size: ~3-5MB (60-70% reduction)
- Load time: ~1-2 seconds (with CDN + optimization)

**Test with Lighthouse**:

```bash
# Chrome DevTools > Lighthouse > Run audit
# Or use: npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

**Target metrics**:

- Performance: 90+ (from ~70-80)
- Largest Contentful Paint: <2.5s (from ~4s)
- Total Blocking Time: <200ms

### Step 5: Mobile Testing

Test on mobile devices (or Chrome DevTools mobile emulation):

- [ ] iPhone SE (small screen)
- [ ] iPhone 12 Pro (medium screen)
- [ ] iPad (tablet)
- [ ] Galaxy S20 (Android)

Verify:

- Images load quickly
- Proper responsive sizing
- No broken images

---

## Rollback Procedure

If issues occur, you can easily rollback:

### Option 1: Restore from Backups

```bash
# Find the backup directory
ls -lt backups/

# Example: backups/backup-1732188600000

# Restore all files from backup
cp -r backups/backup-1732188600000/* .

# Verify restoration
git status
```

### Option 2: Git Revert

If you've committed changes:

```bash
# Revert to previous commit
git revert HEAD

# Or reset to specific commit
git log --oneline
git reset --hard <commit-hash>
```

### Option 3: Manual Rollback

1. Keep local images in `/public/images/`
2. Restore original code from backups
3. CDN images remain available (no cost to keep them)

---

## Cloudinary Features

### Dynamic Image Transformations

Cloudinary URLs support on-the-fly transformations via URL parameters.

**Base URL format**:

```
https://res.cloudinary.com/dhupieu4x/image/upload/{transformations}/reflow-toilets/images/hero/hero-image.png
```

### Common Transformations

#### 1. Resize (Width/Height)

```typescript
// Resize to 800px width, auto height
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  width: 800
});
// Result: /upload/w_800/reflow-toilets/images/hero/hero-image.png

// Resize to 800x600
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  width: 800,
  height: 600
});
// Result: /upload/w_800,h_600/reflow-toilets/images/hero/hero-image.png
```

#### 2. Quality Optimization

```typescript
// Automatic quality (Cloudinary decides best quality)
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  quality: 'auto'
});
// Result: /upload/q_auto/...

// Good quality (balance of size and quality)
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  quality: 'auto:good'
});
// Result: /upload/q_auto:good/...

// Best quality (highest quality, larger size)
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  quality: 'auto:best'
});
// Result: /upload/q_auto:best/...

// Specific quality (1-100)
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  quality: 80
});
// Result: /upload/q_80/...
```

#### 3. Format Conversion

```typescript
// Automatic format (WebP for modern browsers, fallback to JPEG/PNG)
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  format: 'auto'
});
// Result: /upload/f_auto/...

// Force WebP
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  format: 'webp'
});
// Result: /upload/f_webp/...

// Force AVIF (even better compression than WebP)
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  format: 'avif'
});
// Result: /upload/f_avif/...
```

#### 4. Combined Transformations

```typescript
// Resize + Quality + Format
const url = getOptimizedImageUrl('/images/hero/Hero image.png', {
  width: 1200,
  height: 800,
  quality: 'auto:good',
  format: 'auto'
});
// Result: /upload/w_1200,h_800,q_auto:good,f_auto/...
```

### Advanced Transformations

Beyond the helper function, you can manually construct URLs:

#### Cropping Modes

```
# Fill (crop to exact size)
/upload/w_800,h_600,c_fill/...

# Fit (resize to fit within dimensions)
/upload/w_800,h_600,c_fit/...

# Pad (resize and add padding)
/upload/w_800,h_600,c_pad,b_auto/...

# Limit (resize only if larger)
/upload/w_800,h_600,c_limit/...
```

#### Gravity (Focus Point)

```
# Auto-detect face/object
/upload/w_800,h_600,c_fill,g_auto/...

# Focus on face
/upload/w_800,h_600,c_fill,g_face/...

# Center
/upload/w_800,h_600,c_fill,g_center/...
```

#### Effects

```
# Blur
/upload/e_blur:300/...

# Sharpen
/upload/e_sharpen:100/...

# Auto improve
/upload/e_auto_contrast/...
```

### Responsive Images (Next.js Integration)

For responsive images in Next.js:

```tsx
import Image from 'next/image';
import { IMAGE_URLS } from '@/cloudinary-mapping/cloudinary-config';

export default function HeroImage() {
  return (
    <Image
      src={IMAGE_URLS['/images/hero/Hero image.png']}
      alt="ReFlow Hero"
      width={1920}
      height={1080}
      priority // Load immediately (above fold)
      quality={85} // Next.js quality
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    />
  );
}
```

### Lazy Loading

For below-the-fold images:

```tsx
<Image
  src={IMAGE_URLS['/images/bcrt/MAIN B-CRT IMAGE.png']}
  alt="B-CRT Technology"
  width={800}
  height={600}
  loading="lazy" // Lazy load (default)
  quality={80}
/>
```

---

## Troubleshooting

### Issue 1: Upload Script Fails - Credentials Invalid

**Symptom**: `❌ ERROR: Cloudinary credentials not found!`

**Solution**:

1. Verify `.env.local` exists and has correct format
2. Check credentials in Cloudinary Console
3. Ensure no extra spaces or quotes in `.env.local`
4. Test credentials:

```bash
node -e "
require('dotenv').config({ path: '.env.local' });
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.CLOUDINARY_API_KEY);
console.log('API Secret:', process.env.CLOUDINARY_API_SECRET ? 'Set ✅' : 'Missing ❌');
"
```

### Issue 2: Upload Fails - Rate Limit

**Symptom**: `❌ Rate limit exceeded`

**Solution**:

1. Wait 1-2 minutes
2. Re-run script (it will skip already uploaded images)
3. Increase delay in script (line 126): `setTimeout(resolve, 500)` (increase to 500ms)

### Issue 3: Images Don't Load - CORS Error

**Symptom**: Console error: `Access to image at '...' from origin '...' has been blocked by CORS`

**Solution**:

Cloudinary URLs should work by default, but if CORS issues occur:

1. Go to Cloudinary Console > Settings > Security
2. Add allowed domains: `localhost:3000`, `yourdomain.com`
3. Enable "Allow fetching of images from any domain"

### Issue 4: Images Load Slowly - Not Optimized

**Symptom**: Images load but still large file sizes

**Solution**:

1. Check URL includes transformations: `q_auto:good,f_auto`
2. Use helper function: `getOptimizedImageUrl()`
3. Manually add transformations:

```typescript
const optimized = url.replace('/upload/', '/upload/w_1200,q_auto:good,f_auto/');
```

### Issue 5: Migration Script Skips Files

**Symptom**: Files not modified, no replacements found

**Solution**:

1. Check file patterns in script (line 22-30)
2. Verify image paths match mapping file keys exactly
3. Check for hardcoded paths (not using variables)
4. Run grep to find image references:

```bash
grep -r "/images/" app/ components/
```

### Issue 6: Backup Directory Too Large

**Symptom**: `/backups/` directory consuming disk space

**Solution**:

```bash
# Remove old backups (keep latest 2)
cd backups/
ls -lt
rm -rf backup-<old-timestamp>
```

### Issue 7: Cloudinary Free Tier Exceeded

**Symptom**: Upload fails: `Account bandwidth exceeded`

**Solution**:

1. Check usage: https://cloudinary.com/console/usage
2. Free tier: 25 GB storage, 25 GB bandwidth/month
3. ReFlow uses ~12MB storage, minimal bandwidth
4. If exceeded:
   - Wait until next month
   - Upgrade to paid plan ($89/month for Pro)
   - Use Ixora Group shared account (if applicable)

---

## Next Steps After Migration

### 1. Performance Monitoring

Set up monitoring to track improvements:

- **Google Analytics**: Track page load times
- **Lighthouse CI**: Automate performance audits
- **Cloudinary Analytics**: Monitor CDN usage

### 2. Remove Local Images (Optional)

After confirming CDN works perfectly:

```bash
# DON'T DELETE immediately - wait 1-2 weeks
# Keep backups before deleting

# Move to archive (safer than delete)
mkdir -p archive/images-backup-2025-11-21
mv public/images archive/images-backup-2025-11-21/

# Or delete (after confirming everything works)
# rm -rf public/images
```

**WARNING**: Only do this after thoroughly testing and confirming all images load correctly from CDN!

### 3. Update Documentation

Update project README and docs to reflect CDN usage:

- Add Cloudinary setup instructions
- Document image transformation usage
- Update deployment instructions

### 4. Git Commit

Commit all changes:

```bash
git add .
git commit -m "Migrate images to Cloudinary CDN

- Upload all 31 images to Cloudinary (cloud: dhupieu4x)
- Replace local image paths with CDN URLs
- Add Cloudinary config and helper functions
- Update .env.local.example with Cloudinary credentials

Benefits:
- 60-70% file size reduction (WebP optimization)
- Global CDN delivery (faster load times)
- Dynamic image transformations
- Automatic format detection

Mapping files: cloudinary-mapping/
Backups: backups/backup-<timestamp>/
"

git push origin main
```

### 5. Deploy to Production

Deploy to Vercel/Netlify:

```bash
# Vercel
vercel --prod

# Or push to GitHub (auto-deploy)
git push origin main
```

**IMPORTANT**: Add Cloudinary credentials to production environment variables!

**Vercel**:

1. Go to Project Settings > Environment Variables
2. Add:
   - `CLOUDINARY_CLOUD_NAME=dhupieu4x`
   - `CLOUDINARY_API_KEY=...`
   - `CLOUDINARY_API_SECRET=...`

**Netlify**:

1. Go to Site Settings > Environment Variables
2. Add same variables as above

---

## Additional Resources

### Cloudinary Documentation

- **Main Docs**: https://cloudinary.com/documentation
- **Image Transformations**: https://cloudinary.com/documentation/image_transformations
- **URL Syntax**: https://cloudinary.com/documentation/image_transformation_reference
- **Next.js Integration**: https://cloudinary.com/documentation/next_js_integration

### Ixora Group Cloudinary Setup

Refer to Ixora Group website for similar implementation:

- File: `/mnt/d/Ixora Sites/Ixora-Group-Website/CLOUDINARY_MIGRATION_COMPLETE.md`
- Cloud Name: `dhupieu4x` (shared)
- Folder Structure: `ixora-assets/` (separate from ReFlow)

### ReFlow Toilets Context

- Workspace Docs: `/mnt/d/Ixora Sites/CLAUDE.md`
- Project Docs: `/mnt/d/Ixora Sites/reflow-toilets-website/README.md` (if exists)

---

## Conclusion

This guide provides a complete walkthrough for migrating ReFlow Toilets website images to Cloudinary CDN. The process includes:

1. ✅ Image inventory and analysis (31 images, ~12MB)
2. ✅ Cloudinary setup and credentials
3. ✅ Automated upload script with optimizations
4. ✅ Code migration script with backups
5. ✅ Testing and verification procedures
6. ✅ Rollback options for safety
7. ✅ Advanced features and transformations
8. ✅ Troubleshooting guide

**Expected Results**:

- **Performance**: 60-70% file size reduction
- **Load Time**: 1-2 seconds (from 3-5 seconds)
- **SEO**: Improved page speed scores (Lighthouse 90+)
- **UX**: Faster image loading, better mobile experience
- **Scalability**: CDN handles traffic spikes, global delivery

**Status**: Ready to execute. Follow the steps in order for a smooth migration.

---

**Document Version**: 1.0
**Created**: November 21, 2025
**Author**: Claude Code (AI Assistant)
**Status**: Complete and ready for execution
