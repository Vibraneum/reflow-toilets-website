/**
 * ReFlow Toilets - Cloudinary Bulk Upload Script for Large B-CRT Images
 *
 * This script uploads the large B-CRT images to Cloudinary for optimization
 * Uses q_auto,f_auto for automatic compression and format conversion
 *
 * Usage:
 *   cd "/mnt/d/Ixora Sites/reflow-toilets-website"
 *   npm install cloudinary
 *   node scripts/upload-large-images.cjs
 */

const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

// Configure Cloudinary - Using Ixora Group shared credentials
const CLOUDINARY_CLOUD_NAME = 'dhupieu4x';
const CLOUDINARY_API_KEY = '514375451689993';
const CLOUDINARY_API_SECRET = 'n6jJhK7rY1qleak60_1NV41VHGY';
const CLOUDINARY_FOLDER = 'reflow-assets';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
});

// Base path to local images
const IMAGES_BASE = path.join(__dirname, '..', 'public', 'images');

// Image upload configuration for large files
const imageConfigs = [
  // ============================================================
  // B-CRT ARCHIVE IMAGES (83MB total - 4-7MB each)
  // ============================================================
  {
    category: 'bcrt-archive',
    folder: 'bcrt/archive',
    files: [
      { localPath: '(Loocafe)40- foot b-CRT(1).jpg', publicId: 'loocafe-40ft-bcrt-1' },
      { localPath: '(Loocafe)40-foot b-CRT(2).jpg', publicId: 'loocafe-40ft-bcrt-2' },
      { localPath: '(Loocafe)40-foot b-CRT(3).jpg', publicId: 'loocafe-40ft-bcrt-3' },
      { localPath: '(Loocafe)40-foot b-CRT(4).jpg', publicId: 'loocafe-40ft-bcrt-4' },
      { localPath: '(Loocafe)40-foot b-CRT(5).jpg', publicId: 'loocafe-40ft-bcrt-5' },
      { localPath: '(Loocafe)40-foot b-CRT(6).jpg', publicId: 'loocafe-40ft-bcrt-6' },
      { localPath: '(School)40-foot b-CRT(1).jpg', publicId: 'school-40ft-bcrt-1' },
      { localPath: '(School)40-foot b-CRT(2).jpg', publicId: 'school-40ft-bcrt-2' },
      { localPath: '(School)40-foot b-CRT(3).jpg', publicId: 'school-40ft-bcrt-3' },
      { localPath: '(School)40-foot b-CRT(4).jpg', publicId: 'school-40ft-bcrt-4' },
      { localPath: '(School)40-foot b-CRT(5).jpg', publicId: 'school-40ft-bcrt-5' },
      { localPath: '(School)40-foot b-CRT(6).jpg', publicId: 'school-40ft-bcrt-6' },
      { localPath: '(School)40-foot b-CRT(7).jpg', publicId: 'school-40ft-bcrt-7' },
      { localPath: '(T-works)20-foot b-CRT(1).jpg', publicId: 'tworks-20ft-bcrt-1' },
      { localPath: '(T-works)20-foot b-CRT(2).jpg', publicId: 'tworks-20ft-bcrt-2' },
      { localPath: '(T-works)20-foot b-CRT(3).jpg', publicId: 'tworks-20ft-bcrt-3' },
      { localPath: '(T-works)20-foot b-CRT(4).jpg', publicId: 'tworks-20ft-bcrt-4' }
    ]
  },

  // ============================================================
  // B-CRT GALLERY IMAGES
  // ============================================================
  {
    category: 'bcrt-gallery',
    folder: 'bcrt/gallery',
    files: [
      { localPath: 'loocafe-40ft-interior.jpg', publicId: 'loocafe-40ft-interior' },
      { localPath: 'loocafe-40ft-treatment.jpg', publicId: 'loocafe-40ft-treatment' },
      { localPath: 'school-40ft-exterior.jpg', publicId: 'school-40ft-exterior' },
      { localPath: 'school-40ft-interior.jpg', publicId: 'school-40ft-interior' },
      { localPath: 'tworks-20ft-exterior.jpg', publicId: 'tworks-20ft-exterior' },
      { localPath: 'tworks-20ft-treatment.jpg', publicId: 'tworks-20ft-treatment' }
    ]
  },

  // ============================================================
  // HERITAGE IMAGES
  // ============================================================
  {
    category: 'heritage',
    folder: 'heritage',
    files: [
      { localPath: 'charminar-hyderabad.jpg', publicId: 'charminar-hyderabad' },
      { localPath: 'ixora-team-charminar.jpg', publicId: 'ixora-team-charminar' },
      { localPath: 'mobile-bio-toilet-ghmc.jpg', publicId: 'mobile-bio-toilet-ghmc' }
    ]
  },

  // ============================================================
  // HERO AND TECH IMAGES
  // ============================================================
  {
    category: 'hero',
    folder: 'hero',
    files: [
      { localPath: 'Hero image.png', publicId: 'hero-image' }
    ]
  },
  {
    category: 'tech',
    folder: 'tech',
    files: [
      { localPath: 'Reflow app 2 (1).png', publicId: 'reflow-app-2' },
      { localPath: 'Reflow unit app (1).png', publicId: 'reflow-unit-app' },
      { localPath: 'Screenshot 2025-04-18 172042.png', publicId: 'tech-screenshot-1' },
      { localPath: 'Screenshot 2025-04-18 172328.png', publicId: 'tech-screenshot-2' }
    ]
  },

  // ============================================================
  // UNITS IMAGES
  // ============================================================
  {
    category: 'units',
    folder: 'units',
    files: [
      { localPath: 'reflow dal lake.png', publicId: 'reflow-dal-lake' },
      { localPath: 'reflow mini.png', publicId: 'reflow-mini' }
    ]
  }
];

/**
 * Upload a single image to Cloudinary
 */
async function uploadImage(config, basePath, categoryFolder) {
  const fullPath = path.join(basePath, categoryFolder, config.localPath);
  const publicId = `${CLOUDINARY_FOLDER}/${categoryFolder.replace(/\//g, '-')}/${config.publicId}`;

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping (not found): ${config.localPath}`);
    return { skipped: true };
  }

  const fileSizeBytes = fs.statSync(fullPath).size;
  const fileSizeMB = (fileSizeBytes / (1024 * 1024)).toFixed(2);

  try {
    console.log(`📤 Uploading: ${config.localPath} (${fileSizeMB} MB)`);
    console.log(`   → ${publicId}`);

    const result = await cloudinary.uploader.upload(fullPath, {
      public_id: publicId,
      overwrite: true,
      invalidate: true,
      resource_type: 'image',
      // Enable automatic optimization
      transformation: [
        { quality: 'auto', fetch_format: 'auto' }
      ]
    });

    const optimizedSize = (result.bytes / 1024).toFixed(2);
    const savings = ((1 - result.bytes / fileSizeBytes) * 100).toFixed(1);

    console.log(`✅ Uploaded: ${result.public_id}`);
    console.log(`   Original: ${fileSizeMB} MB → Optimized: ${optimizedSize} KB (${savings}% savings)`);
    console.log(`   URL: ${result.secure_url}\n`);

    return {
      success: true,
      result,
      publicId,
      originalSize: fileSizeBytes,
      optimizedSize: result.bytes
    };
  } catch (error) {
    console.error(`❌ Failed: ${config.localPath}`);
    console.error(`   Error: ${error.message}\n`);
    return { failed: true, error };
  }
}

/**
 * Main upload function
 */
async function uploadAllImages() {
  console.log('\n🚀 ReFlow Toilets - Cloudinary Bulk Upload for Large Images\n');
  console.log(`☁️  Cloud Name: ${CLOUDINARY_CLOUD_NAME}`);
  console.log(`📁 Folder: ${CLOUDINARY_FOLDER}`);
  console.log(`📍 Source: ${IMAGES_BASE}\n`);
  console.log('='.repeat(60) + '\n');

  const stats = {
    total: 0,
    successful: 0,
    failed: 0,
    skipped: 0,
    originalBytes: 0,
    optimizedBytes: 0
  };

  const uploadedUrls = {};

  for (const category of imageConfigs) {
    console.log(`\n📂 ${category.category.toUpperCase()}`);
    console.log('-'.repeat(40) + '\n');

    uploadedUrls[category.category] = [];

    for (const fileConfig of category.files) {
      stats.total++;
      const result = await uploadImage(fileConfig, IMAGES_BASE, category.folder);

      if (result.success) {
        stats.successful++;
        stats.originalBytes += result.originalSize;
        stats.optimizedBytes += result.optimizedSize;

        uploadedUrls[category.category].push({
          localPath: `${category.folder}/${fileConfig.localPath}`,
          publicId: result.publicId,
          url: result.result.secure_url,
          optimizedUrl: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto/${result.publicId}`
        });
      } else if (result.skipped) {
        stats.skipped++;
      } else {
        stats.failed++;
      }

      // Rate limiting - wait 500ms between uploads
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 UPLOAD SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total: ${stats.total}`);
  console.log(`✅ Successful: ${stats.successful}`);
  console.log(`❌ Failed: ${stats.failed}`);
  console.log(`⏭️  Skipped: ${stats.skipped}`);

  if (stats.successful > 0) {
    const originalMB = (stats.originalBytes / (1024 * 1024)).toFixed(2);
    const optimizedMB = (stats.optimizedBytes / (1024 * 1024)).toFixed(2);
    const totalSavings = ((1 - stats.optimizedBytes / stats.originalBytes) * 100).toFixed(1);

    console.log(`\n💾 Size Reduction:`);
    console.log(`   Original: ${originalMB} MB`);
    console.log(`   Optimized: ${optimizedMB} MB`);
    console.log(`   Savings: ${totalSavings}%`);
  }

  // Generate mapping file
  const mappingPath = path.join(__dirname, '..', 'cloudinary-urls.json');
  fs.writeFileSync(mappingPath, JSON.stringify(uploadedUrls, null, 2));
  console.log(`\n📄 URL mapping saved to: cloudinary-urls.json`);

  // Generate code replacement suggestions
  console.log('\n📝 Code Updates Required:');
  console.log('   Replace local image paths with Cloudinary URLs in:');
  console.log('   - app/b-crt/page.tsx');
  console.log('   - app/design/page.tsx');
  console.log('   - Other pages using /images/bcrt/* paths');

  console.log('\n✨ Upload complete!\n');
  return stats;
}

// Run
uploadAllImages().catch(console.error);
