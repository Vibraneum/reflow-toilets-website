# ReFlow Toilets - Cloudinary Migration Plan

**Created**: November 22, 2025
**Status**: Ready to Execute (Pending Credentials)

---

## Executive Summary

The ReFlow website currently has images in **3 different states**:

1. ✅ **Already on Cloudinary** (`dhupieu4x/reflow-assets/`) - 8 images used in homepage components
2. ❌ **Local files not migrated** (`/public/images/`) - 28 images still serving from local directory
3. 🔀 **External Cloudinary** (`ddtw77k8l`, `dehglnwgz`) - Hiring page uses different clouds

**Goal**: Migrate all local images to Ixora Group's Cloudinary (`dhupieu4x`) under `reflow-toilets` folder.

---

## Current Image Inventory

### Total Images: 31 files (11.72 MB)

| Folder | Count | Size | Status |
|--------|-------|------|--------|
| **Root** (favicon, logo) | 3 | 60 KB | ❌ Local |
| **B-CRT** (treatment diagrams) | 10 | 1.9 MB | ❌ Local |
| **Hero** (homepage images) | 2 | 3.1 MB | ❌ Local |
| **Logos** (branding) | 4 | 540 KB | ❌ Local |
| **Tech** (dashboard, apps) | 8 | 3.9 MB | ❌ Local |
| **Units** (product photos) | 4 | 2.0 MB | ❌ Local |

### Pages Using Local Images (Need Migration)

- **Tech Page**: 6 images (dashboard, apps, wiring)
- **B-CRT Page**: 10 images (treatment process diagrams)
- **Design Page**: 32 local image references
- **Innovation Page**: 6 unit images
- **Header**: reflow favicon
- **Footer**: reflow logo
- **CTA Section**: reflow logo

---

## Migration Tools (Already Built)

### 1. Upload Script
**File**: `scripts/upload-to-cloudinary.js`
**Purpose**: Upload all `/public/images/` to Cloudinary
**Features**:
- Automatic image optimization (quality: auto:good)
- Format conversion (WebP for modern browsers)
- Preserves folder structure
- Generates mapping files
- Progress tracking

### 2. Migration Script
**File**: `scripts/migrate-image-references.js`
**Purpose**: Replace all local image paths with Cloudinary URLs
**Features**:
- Searches all `.tsx`, `.ts`, `.jsx`, `.js`, `.css` files
- Handles multiple reference patterns (src="", url(), imports)
- Creates backups before modification
- Dry-run mode available
- Detailed migration report

---

## Prerequisites

### 1. Cloudinary Credentials Required

You need **3 values** from the Ixora Group's Cloudinary account:

```
CLOUDINARY_CLOUD_NAME=dhupieu4x
CLOUDINARY_API_KEY=<get from Cloudinary console>
CLOUDINARY_API_SECRET=<get from Cloudinary console>
```

**How to get credentials**:
1. Go to https://cloudinary.com/console
2. Sign in to Ixora Group account (cloud name: `dhupieu4x`)
3. Navigate to **Dashboard**
4. Find **Account Details** section
5. Copy **API Key** and **API Secret**

### 2. Dependencies Installed ✅

```bash
npm install cloudinary dotenv glob --save-dev
```

**Status**: ✅ Installed (November 22, 2025)

---

## Step-by-Step Migration Process

### Step 1: Set Up Credentials

Create `.env.local` file with your Cloudinary credentials:

```bash
# Copy from template
cp .env.local.example .env.local

# Edit .env.local and add your actual credentials:
# CLOUDINARY_API_KEY=<your-api-key>
# CLOUDINARY_API_SECRET=<your-api-secret>
```

### Step 2: Upload Images to Cloudinary

```bash
# This will upload all 31 images from /public/images/
node scripts/upload-to-cloudinary.js
```

**What happens**:
- Scans `/public/images/` directory
- Uploads each image to `dhupieu4x/reflow-toilets/` folder
- Optimizes images (auto quality, WebP format)
- Creates mapping files in `cloudinary-mapping/` directory:
  - `cloudinary-complete-mapping.json` (full metadata)
  - `cloudinary-simple-mapping.json` (path → URL mapping)
  - `cloudinary-config.ts` (TypeScript helper)

**Expected Duration**: 2-3 minutes (100ms delay between uploads to avoid rate limiting)

### Step 3: Test Upload (Optional Dry Run)

```bash
# First, do a dry run to see what would be migrated
DRY_RUN=true node scripts/migrate-image-references.js
```

This will:
- Show which files would be modified
- Count total replacements
- Generate report without changing files

### Step 4: Migrate Code References

```bash
# Actually replace all local paths with Cloudinary URLs
node scripts/migrate-image-references.js
```

**What happens**:
- Searches all `.tsx`, `.ts`, `.jsx`, `.js`, `.css` files in:
  - `/app/` directory
  - `/components/` directory
  - `/styles/` directory
- Creates backups in `backups/backup-<timestamp>/`
- Replaces patterns like:
  - `src="/images/hero/Hero image.png"` → `src="https://res.cloudinary.com/dhupieu4x/..."`
  - `url(/images/...)` → `url("https://res.cloudinary.com/...")`
- Generates `cloudinary-mapping/migration-report.json`

**Expected Changes**: ~50 file modifications

### Step 5: Test Website

```bash
# Server should already be running on http://localhost:3001
npm run dev  # If not running

# Test each page:
# - http://localhost:3001/ (homepage)
# - http://localhost:3001/tech
# - http://localhost:3001/b-crt
# - http://localhost:3001/innovation
# - http://localhost:3001/design
# - http://localhost:3001/contact
# - http://localhost:3001/hiring
```

**What to check**:
- ✅ All images load correctly
- ✅ No broken image icons
- ✅ Images are optimized (WebP format in modern browsers)
- ✅ Responsive images work on mobile
- ✅ Cloudinary transformations applied

### Step 6: Review Changes

```bash
# See all changed files
git status

# Review specific changes
git diff app/tech/page.tsx
git diff components/Hero.tsx

# Check migration report
cat cloudinary-mapping/migration-report.json
```

### Step 7: Commit Migration

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Migrate all images to Cloudinary CDN

Complete migration of 31 images from local storage to Cloudinary:
- Uploaded to dhupieu4x/reflow-toilets/ folder
- Optimized with auto quality and WebP format
- Updated ~50 file references across app/ and components/
- Generated mapping files and migration report

Performance improvements:
- Global CDN delivery
- Automatic format optimization (WebP)
- Responsive image transformations
- Reduced bundle size

Technical details in cloudinary-mapping/ directory"
```

---

## Benefits of Cloudinary Migration

### Performance

- **Global CDN**: Images served from nearest edge location
- **Auto Format**: WebP for Chrome/Firefox, optimized JPG for Safari
- **Auto Quality**: Smart compression balancing size and quality
- **Responsive**: On-the-fly resizing with URL parameters
- **Lazy Loading**: Supported with native browser APIs

### Maintenance

- **Centralized**: All images in one Cloudinary account
- **Versioning**: Image history and version control
- **Backup**: Automatic cloud backups
- **Analytics**: Usage statistics and bandwidth monitoring

### Development

- **No Local Storage**: Remove `/public/images/` from repository
- **Faster Builds**: No image processing during build
- **Consistent URLs**: Same Cloudinary structure as Ixora Group
- **Easy Updates**: Change images without code deployment

---

## Expected Cloudinary Folder Structure

After upload, Cloudinary will have:

```
dhupieu4x/reflow-toilets/
├── favicon.png
├── logo.png
├── reflow-favicon.png
├── bcrt/
│   ├── main-bcrt-image.png
│   ├── screenshot-2025-03-12-231711.png
│   ├── screenshot-2025-03-12-231909.png
│   ├── screenshot-2025-04-03-011055.png
│   ├── screenshot-2025-04-03-011136.png
│   ├── screenshot-2025-04-03-011210.png
│   ├── screenshot-2025-04-03-011410.png
│   ├── screenshot-2025-04-03-011514.png
│   ├── screenshot-2025-04-03-011945.png
│   └── screenshot-2025-04-03-012150.png
├── hero/
│   ├── hero-image.png
│   └── interior.png
├── logos/
│   ├── iso.jpg
│   ├── reflow-favicon.png
│   ├── reflow-toilets-png.png
│   └── telangana.png
├── tech/
│   ├── reflow-app-2-1.png
│   ├── reflow-app.png
│   ├── reflow-unit-app-1.png
│   ├── screenshot-2025-04-18-172042.png
│   ├── screenshot-2025-04-18-172328.png
│   ├── reflow-dashboard.png
│   ├── reflow-dashboard2.png
│   └── wiring-system.jpg
└── units/
    ├── big-unit-reflow.png
    ├── mini-on-footpath-reflow.jpg
    ├── reflow-dal-lake.png
    └── reflow-mini.png
```

---

## Rollback Plan (If Issues Occur)

### Option 1: Restore from Backups

```bash
# Backups are in backups/backup-<timestamp>/
# Find your backup
ls -la backups/

# Copy specific file back
cp backups/backup-<timestamp>/app/tech/page.tsx app/tech/page.tsx
```

### Option 2: Git Revert

```bash
# If changes were committed
git revert HEAD

# If not yet committed
git checkout -- .
```

### Option 3: Keep Both (Fallback)

Images will remain in `/public/images/` even after migration. You can always fall back to local paths if needed.

---

## Post-Migration Tasks

### Optional: Remove Local Images

After confirming migration works:

```bash
# Backup first
tar -czf public-images-backup.tar.gz public/images/

# Remove local images
rm -rf public/images/

# Commit removal
git add .
git commit -m "Remove local images after Cloudinary migration"
```

### Optional: Add Responsive Transformations

Use Cloudinary URL parameters for responsive images:

```tsx
// Before
<img src="https://res.cloudinary.com/dhupieu4x/.../hero-image.jpg" />

// After (optimized)
<img
  src="https://res.cloudinary.com/dhupieu4x/image/upload/w_1200,h_600,c_fill,g_auto,q_auto:good,f_auto/reflow-toilets/hero/hero-image.jpg"
  alt="Hero"
/>
```

### Optional: Cleanup Unused External Cloudinary References

Hiring page uses `ddtw77k8l` and `dehglnwgz` clouds. Consider:
1. Migrating those images to `dhupieu4x` for consistency
2. Or leaving them as-is if they're managed separately

---

## Troubleshooting

### Issue: Upload fails with "Invalid credentials"

**Solution**: Check `.env.local` has correct `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET`

### Issue: Migration script finds no files

**Solution**: Check that mapping file exists at `cloudinary-mapping/cloudinary-simple-mapping.json`

### Issue: Images not loading after migration

**Solution**:
1. Check browser console for 404 errors
2. Verify Cloudinary URLs are accessible in browser
3. Check migration report for failed replacements
4. Ensure Next.js image domains configured in `next.config.js`

### Issue: glob package error

**Solution**: `npm install glob --save-dev` (already done)

---

## Current Status

- ✅ Migration scripts ready
- ✅ Dependencies installed (cloudinary, glob, dotenv)
- ⏳ **WAITING FOR**: Cloudinary API credentials
- ⏳ **NEXT STEP**: Create `.env.local` with credentials and run upload script

---

## Quick Commands Reference

```bash
# 1. Set up credentials
cp .env.local.example .env.local
# (Edit .env.local with your credentials)

# 2. Upload images
node scripts/upload-to-cloudinary.js

# 3. Dry run migration (test)
DRY_RUN=true node scripts/migrate-image-references.js

# 4. Actual migration
node scripts/migrate-image-references.js

# 5. Test
npm run dev
# Visit http://localhost:3001 and test all pages

# 6. Commit
git add .
git commit -m "Migrate images to Cloudinary CDN"
```

---

## Contact & Support

If you encounter issues:
1. Check `cloudinary-mapping/migration-report.json` for details
2. Review backups in `backups/backup-<timestamp>/`
3. Cloudinary documentation: https://cloudinary.com/documentation
4. Contact: ved@loocafe.com

---

**Document Version**: 1.0
**Last Updated**: November 22, 2025
**Ready to Execute**: Yes (pending credentials)
