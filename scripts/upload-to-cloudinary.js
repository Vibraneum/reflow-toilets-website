/**
 * ReFlow Toilets - Cloudinary Image Upload Script
 *
 * This script uploads all images from /public/images/ to Cloudinary CDN
 * and generates a mapping file with local paths and CDN URLs.
 *
 * Usage:
 * 1. Set up .env file with CLOUDINARY credentials (see .env.local.example)
 * 2. Run: node scripts/upload-to-cloudinary.js
 *
 * Requirements:
 * - npm install cloudinary dotenv --save-dev
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configuration
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dhupieu4x'; // Use same cloud as Ixora Group
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const CLOUDINARY_FOLDER = 'reflow-toilets'; // Base folder in Cloudinary

// Initialize Cloudinary
if (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error('\n❌ ERROR: Cloudinary credentials not found!');
  console.error('\nPlease create a .env.local file with:');
  console.error('CLOUDINARY_CLOUD_NAME=dhupieu4x');
  console.error('CLOUDINARY_API_KEY=your_api_key');
  console.error('CLOUDINARY_API_SECRET=your_api_secret');
  console.error('\nGet your credentials from: https://cloudinary.com/console\n');
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
});

// Convert filename to URL-friendly format
function sanitizeFilename(filename) {
  return filename
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[^\w\-\.]/g, '')      // Remove special characters except hyphens, dots
    .replace(/\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$|\.webp$|\.ico$/i, ''); // Remove extension
}

// Get all images recursively
function getAllImages(dir, baseDir = dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let images = [];

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      images = images.concat(getAllImages(fullPath, baseDir));
    } else if (/\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(file.name)) {
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      images.push({
        fullPath,
        relativePath,
        filename: file.name,
        folder: path.dirname(relativePath).replace(/\\/g, '/')
      });
    }
  }

  return images;
}

// Upload single image to Cloudinary
async function uploadImage(imageInfo) {
  try {
    const publicId = sanitizeFilename(imageInfo.filename);
    const cloudinaryFolder = imageInfo.folder === '.'
      ? CLOUDINARY_FOLDER
      : `${CLOUDINARY_FOLDER}/${imageInfo.folder}`;

    const result = await cloudinary.uploader.upload(imageInfo.fullPath, {
      folder: cloudinaryFolder,
      public_id: publicId,
      resource_type: 'image',
      overwrite: false, // Don't overwrite existing images
      use_filename: false,
      unique_filename: false,
      transformation: [
        { quality: 'auto:good' }, // Automatic quality optimization
        { fetch_format: 'auto' }  // Automatic format selection (WebP for modern browsers)
      ]
    });

    return {
      success: true,
      localPath: `/${imageInfo.relativePath}`,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id,
      format: result.format,
      size: result.bytes,
      width: result.width,
      height: result.height
    };
  } catch (error) {
    return {
      success: false,
      localPath: `/${imageInfo.relativePath}`,
      error: error.message
    };
  }
}

// Main upload function
async function uploadAllImages() {
  console.log('\n🚀 ReFlow Toilets - Cloudinary Upload Starting...\n');
  console.log(`☁️  Cloud Name: ${CLOUDINARY_CLOUD_NAME}`);
  console.log(`📁 Base Folder: ${CLOUDINARY_FOLDER}\n`);

  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');

  console.log('📂 Scanning for images...\n');

  // Get all images from /public/images/ and root favicons
  let allImages = [];

  // Images from /public/images/
  if (fs.existsSync(imagesDir)) {
    const imagesDirImages = getAllImages(imagesDir, imagesDir).map(img => ({
      ...img,
      relativePath: `images/${img.relativePath}`
    }));
    allImages = allImages.concat(imagesDirImages);
  }

  // Root level images (favicon, logo, etc.)
  const rootImages = fs.readdirSync(publicDir)
    .filter(file => /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(file))
    .map(file => ({
      fullPath: path.join(publicDir, file),
      relativePath: file,
      filename: file,
      folder: '.'
    }));
  allImages = allImages.concat(rootImages);

  console.log(`✅ Found ${allImages.length} images\n`);

  // Display breakdown by folder
  const folderBreakdown = {};
  allImages.forEach(img => {
    const folder = img.folder === '.' ? 'root' : img.folder.replace('images/', '');
    folderBreakdown[folder] = (folderBreakdown[folder] || 0) + 1;
  });

  console.log('📊 Breakdown by folder:');
  Object.entries(folderBreakdown).forEach(([folder, count]) => {
    console.log(`   ${folder}: ${count} images`);
  });
  console.log('');

  // Upload images
  const results = {
    successful: [],
    failed: []
  };

  let uploaded = 0;
  for (const imageInfo of allImages) {
    process.stdout.write(`⏳ Uploading (${uploaded + 1}/${allImages.length}): ${imageInfo.filename}...`);

    const result = await uploadImage(imageInfo);

    if (result.success) {
      results.successful.push(result);
      const sizeKB = (result.size / 1024).toFixed(1);
      process.stdout.write(` ✅ ${sizeKB}KB\n`);
    } else {
      results.failed.push(result);
      process.stdout.write(` ❌ ${result.error}\n`);
    }

    uploaded++;

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n' + '='.repeat(60) + '\n');
  console.log('📈 UPLOAD SUMMARY\n');
  console.log(`✅ Successful: ${results.successful.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log(`📊 Total: ${allImages.length}\n`);

  // Calculate total size
  const totalSize = results.successful.reduce((sum, r) => sum + r.size, 0);
  const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
  console.log(`💾 Total uploaded: ${totalSizeMB} MB\n`);

  // Generate mapping file
  console.log('📝 Generating mapping files...\n');

  // 1. Complete mapping with metadata
  const completeMapping = {
    cloudName: CLOUDINARY_CLOUD_NAME,
    baseFolder: CLOUDINARY_FOLDER,
    uploadDate: new Date().toISOString(),
    totalImages: allImages.length,
    successfulUploads: results.successful.length,
    failedUploads: results.failed.length,
    totalSizeMB: totalSizeMB,
    images: {}
  };

  results.successful.forEach(result => {
    completeMapping.images[result.localPath] = {
      cloudinaryUrl: result.cloudinaryUrl,
      publicId: result.publicId,
      format: result.format,
      size: result.size,
      width: result.width,
      height: result.height
    };
  });

  // 2. Simple mapping (local path -> CDN URL)
  const simpleMapping = {};
  results.successful.forEach(result => {
    simpleMapping[result.localPath] = result.cloudinaryUrl;
  });

  // 3. Failed uploads
  const failedMapping = {
    failedUploads: results.failed.length,
    errors: results.failed
  };

  // Write files
  const mappingDir = path.join(__dirname, '..', 'cloudinary-mapping');
  if (!fs.existsSync(mappingDir)) {
    fs.mkdirSync(mappingDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(mappingDir, 'cloudinary-complete-mapping.json'),
    JSON.stringify(completeMapping, null, 2)
  );
  console.log('   ✅ cloudinary-mapping/cloudinary-complete-mapping.json');

  fs.writeFileSync(
    path.join(mappingDir, 'cloudinary-simple-mapping.json'),
    JSON.stringify(simpleMapping, null, 2)
  );
  console.log('   ✅ cloudinary-mapping/cloudinary-simple-mapping.json');

  if (results.failed.length > 0) {
    fs.writeFileSync(
      path.join(mappingDir, 'cloudinary-failed-uploads.json'),
      JSON.stringify(failedMapping, null, 2)
    );
    console.log('   ✅ cloudinary-mapping/cloudinary-failed-uploads.json');
  }

  // Generate TypeScript/JavaScript config
  const configContent = `/**
 * Cloudinary Configuration for ReFlow Toilets
 * Auto-generated on ${new Date().toISOString()}
 */

export const CLOUDINARY_CONFIG = {
  cloudName: '${CLOUDINARY_CLOUD_NAME}',
  baseFolder: '${CLOUDINARY_FOLDER}',
  baseUrl: 'https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload',
};

export const IMAGE_URLS = ${JSON.stringify(simpleMapping, null, 2)};

// Helper function to get optimized image URL
export function getOptimizedImageUrl(
  localPath: string,
  options?: {
    width?: number;
    height?: number;
    quality?: 'auto' | 'auto:good' | 'auto:best' | number;
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  }
): string {
  const baseUrl = IMAGE_URLS[localPath];
  if (!baseUrl) return localPath; // Fallback to local path if not found

  if (!options) return baseUrl;

  // Build transformation string
  const transforms: string[] = [];
  if (options.width) transforms.push(\`w_\${options.width}\`);
  if (options.height) transforms.push(\`h_\${options.height}\`);
  if (options.quality) transforms.push(\`q_\${options.quality}\`);
  if (options.format) transforms.push(\`f_\${options.format}\`);

  if (transforms.length === 0) return baseUrl;

  // Insert transformations into URL
  return baseUrl.replace('/upload/', \`/upload/\${transforms.join(',')}/\`);
}
`;

  fs.writeFileSync(
    path.join(mappingDir, 'cloudinary-config.ts'),
    configContent
  );
  console.log('   ✅ cloudinary-mapping/cloudinary-config.ts\n');

  console.log('='.repeat(60) + '\n');
  console.log('🎉 UPLOAD COMPLETE!\n');

  if (results.failed.length > 0) {
    console.log('⚠️  WARNING: Some uploads failed. Check cloudinary-failed-uploads.json\n');
  }

  console.log('📋 Next Steps:');
  console.log('   1. Review the mapping files in cloudinary-mapping/');
  console.log('   2. Run: node scripts/migrate-image-references.js');
  console.log('   3. Test the website to ensure all images load correctly');
  console.log('   4. Commit the changes to version control\n');

  return results;
}

// Run the upload
uploadAllImages().catch(error => {
  console.error('\n❌ FATAL ERROR:', error);
  process.exit(1);
});
