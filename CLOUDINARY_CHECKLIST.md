# Cloudinary Migration Checklist

Quick checklist for migrating ReFlow Toilets images to Cloudinary CDN.

---

## Pre-Migration Checklist

### Setup

- [ ] Read `CLOUDINARY_QUICK_START.md` (5 min read)
- [ ] Dependencies installed: `npm install cloudinary dotenv glob --save-dev`
- [ ] Cloudinary account created: https://cloudinary.com/users/register/free
- [ ] Cloudinary credentials obtained:
  - [ ] Cloud Name: `dhupieu4x` (or your cloud)
  - [ ] API Key: (from dashboard)
  - [ ] API Secret: (click "Reveal" in dashboard)

### Configuration

- [ ] `.env.local` file created: `cp .env.local.example .env.local`
- [ ] Credentials added to `.env.local`:
  ```env
  CLOUDINARY_CLOUD_NAME=dhupieu4x
  CLOUDINARY_API_KEY=your_key_here
  CLOUDINARY_API_SECRET=your_secret_here
  ```
- [ ] Credentials tested:
  ```bash
  node -e "
  require('dotenv').config({ path: '.env.local' });
  console.log('Cloud:', process.env.CLOUDINARY_CLOUD_NAME);
  console.log('Key:', process.env.CLOUDINARY_API_KEY ? 'Set ✅' : 'Missing ❌');
  console.log('Secret:', process.env.CLOUDINARY_API_SECRET ? 'Set ✅' : 'Missing ❌');
  "
  ```

---

## Upload Phase

### Run Upload Script

- [ ] Execute: `node scripts/upload-to-cloudinary.js`
- [ ] Monitor progress (31 images)
- [ ] Wait for completion (~5-10 minutes)
- [ ] Check summary:
  - [ ] Successful: 31
  - [ ] Failed: 0
  - [ ] Total uploaded: ~11.72 MB

### Verify Upload

- [ ] Check generated files in `cloudinary-mapping/`:
  - [ ] `cloudinary-complete-mapping.json` exists
  - [ ] `cloudinary-simple-mapping.json` exists
  - [ ] `cloudinary-config.ts` exists
- [ ] Open `cloudinary-simple-mapping.json` and verify URLs
- [ ] Test one URL in browser (should load from Cloudinary)
- [ ] Check Cloudinary Dashboard: https://cloudinary.com/console
  - [ ] Folder `reflow-toilets/` exists
  - [ ] 31 images uploaded
  - [ ] Storage used: ~11.72 MB

---

## Migration Phase

### Dry Run (Safe Test)

- [ ] Execute: `DRY_RUN=true node scripts/migrate-image-references.js`
- [ ] Review output:
  - [ ] Files checked: ~40-50
  - [ ] Files to modify: ~10-15
  - [ ] Total replacements: ~40-50
- [ ] Open `cloudinary-mapping/migration-report.json`
- [ ] Review changes per file
- [ ] Confirm changes look correct

### Apply Migration

- [ ] Execute: `node scripts/migrate-image-references.js`
- [ ] Confirm backups created in `/backups/backup-<timestamp>/`
- [ ] Review output:
  - [ ] Files modified: ~10-15
  - [ ] Total replacements: ~40-50
- [ ] Check a few modified files:
  - [ ] `app/page.tsx` (if using App Router)
  - [ ] `components/Hero.tsx` (or similar)
  - [ ] URLs changed to Cloudinary CDN

---

## Testing Phase

### Local Testing

- [ ] Start dev server: `npm run dev`
- [ ] Visit each page and verify images load:

#### Home Page (`/`)
- [ ] Hero image displays (should be faster)
- [ ] Partner logos load
- [ ] Feature images render
- [ ] No broken images

#### B-CRT Page (`/bcrt`)
- [ ] Main B-CRT image (496KB)
- [ ] All 10 process diagrams load
- [ ] No broken images

#### Innovation Page (`/innovation`)
- [ ] Interior design images load
- [ ] No broken images

#### Tech Page (`/tech`)
- [ ] Dashboard screenshots (8 images) load
- [ ] App interface images display
- [ ] Wiring diagram renders
- [ ] No broken images

#### Design Page (`/design`)
- [ ] Unit photos (4 images) load
- [ ] Dal Lake installation displays
- [ ] Mini unit detail renders
- [ ] No broken images

#### Contact Page (`/contact`)
- [ ] Any images/logos load
- [ ] No broken images

### Browser DevTools Check

- [ ] Open DevTools (F12)
- [ ] Go to Network tab → Filter: Img
- [ ] Reload page
- [ ] Verify for each image:
  - [ ] URL contains `res.cloudinary.com/dhupieu4x/`
  - [ ] Status: 200 (OK)
  - [ ] Format: WebP (modern browsers) or original
  - [ ] Size: Smaller than original

### Performance Testing

- [ ] Install Lighthouse: `npm install -g lighthouse` (if not installed)
- [ ] Run audit: `lighthouse http://localhost:3000 --view`
- [ ] Check scores:
  - [ ] Performance: 90+ (target)
  - [ ] Largest Contentful Paint: <2.5s
  - [ ] Total Blocking Time: <200ms
- [ ] Compare with baseline (before migration):
  - Before Performance: ~70-80
  - After Performance: ~90+ (improvement!)

### Mobile Testing

- [ ] Test on iPhone (or Chrome DevTools iPhone simulation)
  - [ ] All images load
  - [ ] Fast loading
  - [ ] No broken images
- [ ] Test on Android (or Chrome DevTools Android simulation)
  - [ ] All images load
  - [ ] Fast loading
  - [ ] No broken images
- [ ] Test on tablet (iPad or similar)
  - [ ] All images load
  - [ ] Proper responsive sizing

---

## Deployment Phase

### Pre-Deployment

- [ ] All local tests passed
- [ ] No broken images found
- [ ] Performance improved
- [ ] Mobile tests passed

### Add Environment Variables to Production

#### Vercel
- [ ] Go to Vercel Dashboard → Your Project
- [ ] Settings → Environment Variables
- [ ] Add variables:
  - [ ] `CLOUDINARY_CLOUD_NAME` = `dhupieu4x`
  - [ ] `CLOUDINARY_API_KEY` = (your key)
  - [ ] `CLOUDINARY_API_SECRET` = (your secret)
- [ ] Scope: Production, Preview, Development (all)

#### Netlify (if using)
- [ ] Go to Netlify Dashboard → Your Site
- [ ] Site Settings → Environment Variables
- [ ] Add same variables as above

### Git Commit

- [ ] Stage changes: `git add .`
- [ ] Check status: `git status`
- [ ] Commit:
  ```bash
  git commit -m "Migrate images to Cloudinary CDN

  - Upload 31 images to Cloudinary (dhupieu4x)
  - Replace local paths with CDN URLs
  - Add Cloudinary config and helpers
  - Update .env.local.example

  Performance improvements:
  - 60-70% file size reduction
  - WebP optimization
  - Global CDN delivery
  - Dynamic transformations

  Files: cloudinary-mapping/
  Backups: backups/backup-<timestamp>/
  "
  ```
- [ ] Push: `git push origin main`

### Deployment

- [ ] Wait for auto-deployment (Vercel/Netlify)
- [ ] Or manual deploy: `vercel --prod`
- [ ] Monitor deployment logs
- [ ] Wait for completion

### Post-Deployment Verification

- [ ] Visit production site
- [ ] Test all pages (same as local testing)
- [ ] Check browser DevTools (verify Cloudinary URLs)
- [ ] Run Lighthouse on production URL
- [ ] Test on mobile devices (real devices if possible)
- [ ] Monitor for any errors in production logs

---

## Post-Migration Checklist

### Monitoring (First 24 Hours)

- [ ] Check Cloudinary usage: https://cloudinary.com/console/usage
- [ ] Monitor site performance (Google Analytics)
- [ ] Check for any error reports
- [ ] Verify SEO metrics (Search Console)

### Documentation

- [ ] Update project README with Cloudinary info
- [ ] Document Cloudinary setup for team
- [ ] Add migration date to CHANGELOG (if exists)
- [ ] Update deployment docs with env vars

### Optional Cleanup (After 1-2 Weeks)

Only do this after confirming everything works perfectly:

- [ ] Archive local images (don't delete immediately):
  ```bash
  mkdir -p archive/images-backup-2025-11-21
  mv public/images archive/images-backup-2025-11-21/
  ```
- [ ] Remove old backups (keep latest 2):
  ```bash
  cd backups/
  ls -lt
  # Remove old ones: rm -rf backup-<old-timestamp>
  ```

---

## Rollback Checklist (If Issues Occur)

### Option 1: Restore from Backups

- [ ] Stop dev server
- [ ] Find backup: `ls -lt backups/`
- [ ] Restore: `cp -r backups/backup-<timestamp>/* .`
- [ ] Verify: `git status`
- [ ] Test: `npm run dev`

### Option 2: Git Revert

- [ ] Revert commit: `git revert HEAD`
- [ ] Or reset: `git reset --hard <commit-hash>`
- [ ] Test: `npm run dev`
- [ ] Push: `git push origin main` (if needed)

### Option 3: Keep CDN, Rollback Code

- [ ] Images stay in Cloudinary (no cost)
- [ ] Just revert code changes
- [ ] Switch back anytime

---

## Troubleshooting Checklist

### Issue: Credentials Error

- [ ] Check `.env.local` exists
- [ ] Verify credentials are correct (no spaces/quotes)
- [ ] Test with node command (see Pre-Migration)
- [ ] Check Cloudinary dashboard access

### Issue: Upload Fails

- [ ] Check internet connection
- [ ] Verify Cloudinary account is active
- [ ] Check free tier limits (25 GB storage)
- [ ] Wait 1-2 minutes, retry

### Issue: Images Don't Load

- [ ] Check Cloudinary URLs in browser DevTools
- [ ] Verify cloud name is correct in URLs
- [ ] Check CORS settings in Cloudinary Console
- [ ] Try accessing URL directly in new tab

### Issue: Performance Not Improved

- [ ] Verify URLs include transformations: `q_auto:good,f_auto`
- [ ] Check Network tab: images should be WebP
- [ ] Use helper function: `getOptimizedImageUrl()`
- [ ] Clear browser cache and test again

---

## Success Criteria

Migration is successful when ALL criteria are met:

- [x] **Scripts Created**: Upload & migration scripts ready
- [x] **Documentation**: Setup guide, quick start, summary complete
- [ ] **Upload Complete**: All 31 images on Cloudinary
- [ ] **Code Updated**: All references point to CDN
- [ ] **Local Tests Pass**: All pages load correctly
- [ ] **Performance Improved**: Lighthouse 90+, LCP <2.5s
- [ ] **Mobile Works**: Tested on iOS/Android
- [ ] **Production Deployed**: Live site using CDN
- [ ] **No Errors**: No broken images or console errors

---

## Quick Reference

### Commands

```bash
# Test credentials
node -e "require('dotenv').config({ path: '.env.local' }); console.log('Cloud:', process.env.CLOUDINARY_CLOUD_NAME);"

# Upload images
node scripts/upload-to-cloudinary.js

# Dry run migration
DRY_RUN=true node scripts/migrate-image-references.js

# Apply migration
node scripts/migrate-image-references.js

# Start dev server
npm run dev

# Run Lighthouse
lighthouse http://localhost:3000 --view

# Git commit
git add .
git commit -m "Migrate images to Cloudinary CDN"
git push origin main

# Deploy (Vercel)
vercel --prod
```

### Files

- **Setup Guide**: `CLOUDINARY_SETUP_GUIDE.md` (comprehensive)
- **Quick Start**: `CLOUDINARY_QUICK_START.md` (fast track)
- **Summary**: `CLOUDINARY_MIGRATION_SUMMARY.md` (overview)
- **Inventory**: `IMAGE_INVENTORY.json` (31 images)
- **This Checklist**: `CLOUDINARY_CHECKLIST.md`

### Links

- **Cloudinary Console**: https://cloudinary.com/console
- **Cloudinary Docs**: https://cloudinary.com/documentation
- **Image Transforms**: https://cloudinary.com/documentation/image_transformations

---

## Current Status

- [x] **Preparation**: Complete ✅
- [ ] **Upload**: Awaiting credentials
- [ ] **Migration**: Pending
- [ ] **Testing**: Pending
- [ ] **Deployment**: Pending

**Next Step**: Get Cloudinary credentials and run upload script

---

**Last Updated**: November 21, 2025
**Author**: Claude Code (AI Assistant)
**Print this checklist** and check off items as you complete them!
