# Cloudinary CDN - Quick Start Guide

**Quick reference for uploading ReFlow Toilets images to Cloudinary**

---

## TL;DR - Fast Track

```bash
# 1. Install dependencies
npm install cloudinary dotenv glob --save-dev

# 2. Create .env.local with your Cloudinary credentials
cp .env.local.example .env.local
# Edit .env.local and add:
# CLOUDINARY_CLOUD_NAME=dhupieu4x
# CLOUDINARY_API_KEY=your_key
# CLOUDINARY_API_SECRET=your_secret

# 3. Upload all images
node scripts/upload-to-cloudinary.js

# 4. Test migration (safe - no changes)
DRY_RUN=true node scripts/migrate-image-references.js

# 5. Apply migration (modifies files + creates backups)
node scripts/migrate-image-references.js

# 6. Test locally
npm run dev

# 7. Commit and deploy
git add .
git commit -m "Migrate images to Cloudinary CDN"
git push origin main
```

---

## Image Inventory Summary

### Total: 31 images, ~12 MB

**Breakdown by Folder:**

| Folder | Count | Size | Description |
|--------|-------|------|-------------|
| root | 3 | 60KB | Favicons, logo |
| bcrt/ | 10 | ~1.9MB | B-CRT technology diagrams |
| hero/ | 2 | ~3.1MB | Hero images (26% of total) |
| logos/ | 4 | ~540KB | Partner/certification logos |
| tech/ | 8 | ~3.9MB | Dashboard/app screenshots (33% of total) |
| units/ | 4 | ~2.0MB | Toilet unit photos |

**Top 5 Largest Files (Optimization Priority):**

1. `Hero image.png` - 2.8MB (will reduce to ~500-800KB with WebP)
2. `Screenshot 2025-04-18 172042.png` - 1.1MB
3. `reflow mini.png` - 928KB
4. `reflow dal lake.png` - 684KB
5. `Reflow unit app (1).png` - 560KB

---

## Cloudinary Credentials

### Get Credentials

1. Go to: https://cloudinary.com/console
2. Dashboard → Account Details
3. Copy:
   - **Cloud Name**: `dhupieu4x` (recommended - shared with Ixora Group)
   - **API Key**: (from dashboard)
   - **API Secret**: (click "Reveal")

### Add to .env.local

```env
CLOUDINARY_CLOUD_NAME=dhupieu4x
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your_secret_here
```

**IMPORTANT**: Never commit `.env.local` to Git!

---

## Upload Process

### Test Credentials

```bash
node -e "
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log('✅ Cloudinary configured!');
console.log('Cloud:', process.env.CLOUDINARY_CLOUD_NAME);
"
```

### Upload All Images

```bash
node scripts/upload-to-cloudinary.js
```

**Expected Output:**

```
🚀 ReFlow Toilets - Cloudinary Upload Starting...

☁️  Cloud Name: dhupieu4x
📁 Base Folder: reflow-toilets

✅ Found 31 images

📊 Breakdown by folder:
   root: 3 images
   bcrt: 10 images
   hero: 2 images
   logos: 4 images
   tech: 8 images
   units: 4 images

⏳ Uploading (1/31): favicon.ico... ✅ 3.2KB
...

📈 UPLOAD SUMMARY
✅ Successful: 31
❌ Failed: 0

💾 Total uploaded: 11.72 MB

📝 Mapping files created in cloudinary-mapping/
```

### Generated Files

- `cloudinary-mapping/cloudinary-complete-mapping.json` - Full metadata
- `cloudinary-mapping/cloudinary-simple-mapping.json` - Path → URL mapping
- `cloudinary-mapping/cloudinary-config.ts` - TypeScript config + helpers

---

## Migration Process

### Step 1: Dry Run (Safe Test)

```bash
DRY_RUN=true node scripts/migrate-image-references.js
```

**What it does:**

- Scans all `.tsx`, `.ts`, `.jsx`, `.js`, `.css` files
- Shows what would be replaced
- **NO files modified** (safe to run)

### Step 2: Review Report

```bash
cat cloudinary-mapping/migration-report.json
```

Check:

- Files to be modified
- Number of replacements
- Specific changes

### Step 3: Apply Migration

```bash
node scripts/migrate-image-references.js
```

**What it does:**

- **Creates backups** in `/backups/backup-<timestamp>/`
- Replaces all local paths with CDN URLs
- Generates detailed report

---

## Testing

### Local Testing

```bash
npm run dev
```

Visit each page and verify images load:

- [ ] Home (`/`) - Hero, partners, features
- [ ] B-CRT (`/bcrt`) - All 10 diagrams
- [ ] Innovation (`/innovation`) - Interior images
- [ ] Tech (`/tech`) - 8 dashboard screenshots
- [ ] Design (`/design`) - 4 unit photos
- [ ] Contact (`/contact`) - Any images

### Browser DevTools Check

1. Open DevTools (F12)
2. Network tab → Filter: Img
3. Reload page
4. Verify:
   - ✅ URLs contain `res.cloudinary.com/dhupieu4x/`
   - ✅ Status: 200
   - ✅ Format: WebP (modern browsers)
   - ✅ Size: Smaller than original

### Performance Check

```bash
# Install Lighthouse (if not installed)
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --view
```

**Target metrics:**

- Performance: 90+ (from ~70-80)
- Largest Contentful Paint: <2.5s (from ~4s)

---

## Rollback (If Needed)

### Option 1: Restore from Backups

```bash
# Find backup directory
ls -lt backups/

# Restore (example timestamp)
cp -r backups/backup-1732188600000/* .
```

### Option 2: Git Revert

```bash
git revert HEAD
```

---

## Using Cloudinary URLs

### Import Config

```typescript
import { IMAGE_URLS, getOptimizedImageUrl } from '@/cloudinary-mapping/cloudinary-config';
```

### Basic Usage

```tsx
// Simple - just use CDN URL
<img src={IMAGE_URLS['/images/hero/Hero image.png']} alt="Hero" />
```

### Optimized with Transformations

```tsx
// Resize to 800px width
const optimizedUrl = getOptimizedImageUrl('/images/hero/Hero image.png', {
  width: 800,
  quality: 'auto:good',
  format: 'auto'
});

<img src={optimizedUrl} alt="Hero" />
```

### Next.js Image Component

```tsx
import Image from 'next/image';
import { IMAGE_URLS } from '@/cloudinary-mapping/cloudinary-config';

<Image
  src={IMAGE_URLS['/images/hero/Hero image.png']}
  alt="ReFlow Hero"
  width={1920}
  height={1080}
  priority
  quality={85}
/>
```

---

## Common Issues

### Issue: Credentials Not Found

**Error**: `❌ ERROR: Cloudinary credentials not found!`

**Fix**:

1. Check `.env.local` exists
2. Verify credentials are correct
3. No extra spaces or quotes

### Issue: Upload Fails - Rate Limit

**Error**: `❌ Rate limit exceeded`

**Fix**:

1. Wait 1-2 minutes
2. Re-run script (skips already uploaded)

### Issue: Images Don't Load

**Fix**:

1. Check URL format in browser DevTools
2. Verify Cloudinary cloud name is correct
3. Check CORS settings in Cloudinary Console

---

## Production Deployment

### Add Environment Variables

**Vercel**:

1. Project Settings → Environment Variables
2. Add:
   - `CLOUDINARY_CLOUD_NAME=dhupieu4x`
   - `CLOUDINARY_API_KEY=...`
   - `CLOUDINARY_API_SECRET=...`

**Netlify**:

1. Site Settings → Environment Variables
2. Add same variables

### Deploy

```bash
# Commit changes
git add .
git commit -m "Migrate images to Cloudinary CDN"
git push origin main

# Vercel (auto-deploys from GitHub)
# Or manual: vercel --prod
```

---

## Expected Results

**Performance Improvements:**

- **File Size**: 60-70% reduction (WebP optimization)
- **Load Time**: 1-2 seconds (from 3-5 seconds)
- **Hero Image**: ~500-800KB (from 2.8MB)
- **Total Images**: ~3-5MB (from ~12MB)

**Lighthouse Scores:**

- Performance: 90+ (from ~70-80)
- LCP: <2.5s (from ~4s)

---

## Resources

- **Full Guide**: `CLOUDINARY_SETUP_GUIDE.md` (comprehensive documentation)
- **Upload Script**: `scripts/upload-to-cloudinary.js`
- **Migration Script**: `scripts/migrate-image-references.js`
- **Cloudinary Docs**: https://cloudinary.com/documentation
- **Ixora Group Example**: `/mnt/d/Ixora Sites/Ixora-Group-Website/CLOUDINARY_MIGRATION_COMPLETE.md`

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up `.env.local`
3. ✅ Upload images
4. ✅ Dry run migration
5. ✅ Apply migration
6. ✅ Test locally
7. ✅ Deploy to production
8. ✅ Monitor performance

**Status**: Scripts ready, waiting for Cloudinary credentials to proceed with upload.

---

**Created**: November 21, 2025
**Author**: Claude Code (AI Assistant)
