# ReFlow Toilets - Cloudinary Upload Scripts

This directory contains scripts for migrating local images to Cloudinary CDN.

---

## Scripts

### 1. upload-to-cloudinary.js

**Purpose**: Upload all images from `/public/images/` to Cloudinary CDN.

**Usage**:

```bash
node scripts/upload-to-cloudinary.js
```

**Prerequisites**:

- `.env.local` file with Cloudinary credentials
- `npm install cloudinary dotenv` (already installed)

**What it does**:

1. Scans `/public/images/` and root level for images
2. Uploads each image to Cloudinary with:
   - Quality optimization: `q_auto:good`
   - Format optimization: `f_auto` (WebP for modern browsers)
   - Folder structure preservation
3. Generates mapping files in `/cloudinary-mapping/`:
   - `cloudinary-complete-mapping.json` (full metadata)
   - `cloudinary-simple-mapping.json` (path → URL)
   - `cloudinary-config.ts` (TypeScript config + helpers)
   - `cloudinary-failed-uploads.json` (if any failures)

**Output example**:

```
🚀 ReFlow Toilets - Cloudinary Upload Starting...

☁️  Cloud Name: dhupieu4x
📁 Base Folder: reflow-toilets

✅ Found 31 images

⏳ Uploading (1/31): favicon.ico... ✅ 3.2KB
⏳ Uploading (2/31): MAIN B-CRT IMAGE.png... ✅ 496KB
...

📈 UPLOAD SUMMARY
✅ Successful: 31
❌ Failed: 0
💾 Total uploaded: 11.72 MB
```

**Configuration**:

Edit these variables in the script if needed:

- `CLOUDINARY_CLOUD_NAME` (default: from .env.local)
- `CLOUDINARY_FOLDER` (default: 'reflow-toilets')

---

### 2. migrate-image-references.js

**Purpose**: Replace all local image paths with Cloudinary CDN URLs in the codebase.

**Usage**:

```bash
# Dry run (safe - no changes)
DRY_RUN=true node scripts/migrate-image-references.js

# Live run (modifies files + creates backups)
node scripts/migrate-image-references.js
```

**Prerequisites**:

- `upload-to-cloudinary.js` must be run first
- Mapping files must exist in `/cloudinary-mapping/`
- `npm install glob` (already installed)

**What it does**:

1. Scans all `.tsx`, `.ts`, `.jsx`, `.js`, `.css` files
2. Finds image references in various formats:
   - `src="/images/..."`
   - `src={"/images/..."}`
   - `url(/images/...)` (CSS)
   - `background: url(/images/...)`
   - `backgroundImage: "url(/images/...)"`
   - `import ... from '/images/...'`
3. Replaces with Cloudinary CDN URLs
4. Creates backups in `/backups/backup-<timestamp>/`
5. Generates detailed report: `cloudinary-mapping/migration-report.json`

**Output example**:

```
🔄 ReFlow Toilets - Image Reference Migration

📁 Mapping file: cloudinary-mapping/cloudinary-simple-mapping.json
🖼️  Total mappings: 31
✏️  LIVE MODE (files will be modified)

📂 Found 45 files to check

🔍 Checking: app/page.tsx... ✅ 3 replacements
🔍 Checking: app/bcrt/page.tsx... ✅ 10 replacements
...

📈 MIGRATION SUMMARY
📂 Files checked: 45
✏️  Files modified: 12
🔄 Total replacements: 48

💾 Backups saved to: backups/backup-1732188600000
```

**Configuration**:

Edit these variables in the script if needed:

- `DRY_RUN` (default: false, set via env var)
- `FILE_PATTERNS` (default: all TSX/TS/JSX/JS/CSS files)

---

## Quick Start

```bash
# 1. Install dependencies (if not already installed)
npm install cloudinary dotenv glob --save-dev

# 2. Set up .env.local
cp .env.local.example .env.local
# Edit .env.local and add Cloudinary credentials

# 3. Upload images
node scripts/upload-to-cloudinary.js

# 4. Test migration (safe)
DRY_RUN=true node scripts/migrate-image-references.js

# 5. Apply migration
node scripts/migrate-image-references.js

# 6. Test locally
npm run dev
```

---

## Troubleshooting

### Error: Cloudinary credentials not found

**Solution**:

1. Ensure `.env.local` exists
2. Check credentials format:

```env
CLOUDINARY_CLOUD_NAME=dhupieu4x
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your_secret_here
```

3. No extra spaces or quotes

### Error: Mapping file not found

**Solution**:

Run `upload-to-cloudinary.js` first before running `migrate-image-references.js`.

### Error: Rate limit exceeded

**Solution**:

1. Wait 1-2 minutes
2. Re-run script (it will skip already uploaded images)

---

## Generated Files

### /cloudinary-mapping/

After running `upload-to-cloudinary.js`:

- **cloudinary-complete-mapping.json**
  - Full metadata for each image
  - Includes: URL, public_id, size, dimensions, format

- **cloudinary-simple-mapping.json**
  - Simple path → URL mapping
  - Used by migration script

- **cloudinary-config.ts**
  - TypeScript configuration
  - Helper function: `getOptimizedImageUrl()`
  - Import in your components

After running `migrate-image-references.js`:

- **migration-report.json**
  - Detailed report of all changes
  - Files modified, replacements count
  - List of specific changes per file

### /backups/

Created by `migrate-image-references.js`:

- **backup-<timestamp>/**
  - Complete backup of all modified files
  - Restore if needed: `cp -r backups/backup-<timestamp>/* .`

---

## Rollback

If issues occur, restore from backups:

```bash
# Find backup directory
ls -lt backups/

# Restore all files
cp -r backups/backup-1732188600000/* .

# Or use git
git revert HEAD
```

---

## Resources

- **Setup Guide**: `../CLOUDINARY_SETUP_GUIDE.md` (comprehensive)
- **Quick Start**: `../CLOUDINARY_QUICK_START.md` (TL;DR)
- **Image Inventory**: `../IMAGE_INVENTORY.json` (31 images, 11.72 MB)
- **Cloudinary Docs**: https://cloudinary.com/documentation

---

**Created**: November 21, 2025
**Author**: Claude Code (AI Assistant)
