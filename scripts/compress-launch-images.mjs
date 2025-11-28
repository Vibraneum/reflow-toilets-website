import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const SOURCE_DIR = '/mnt/d/Ixora Sites/reflow hyderabad launch bcrt 1 lumbini park';
const TARGET_DIR = '/mnt/d/Ixora Sites/reflow-toilets-website/public/images/launch-lumbini-park';

async function compressImages() {
  try {
    // Ensure target directory exists
    await mkdir(TARGET_DIR, { recursive: true });

    // Read all files from source
    const files = await readdir(SOURCE_DIR);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    console.log(`Found ${imageFiles.length} images to compress...`);

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const sourcePath = join(SOURCE_DIR, file);

      // Create clean filename
      const cleanName = `lumbini-launch-${String(i + 1).padStart(2, '0')}.jpg`;
      const targetPath = join(TARGET_DIR, cleanName);

      // Compress image
      await sharp(sourcePath)
        .resize(1600, 1200, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 80,
          progressive: true,
          mozjpeg: true
        })
        .toFile(targetPath);

      console.log(`Compressed: ${file} -> ${cleanName}`);
    }

    console.log('\nAll images compressed successfully!');
    console.log(`Output directory: ${TARGET_DIR}`);

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

compressImages();
