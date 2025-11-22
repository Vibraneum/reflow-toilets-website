/**
 * ReFlow Toilets - Image Reference Migration Script
 *
 * This script replaces all local image references with Cloudinary CDN URLs
 * in the codebase (TSX/JSX/CSS files).
 *
 * Usage:
 * 1. Ensure upload-to-cloudinary.js has been run successfully
 * 2. Review the mapping files in cloudinary-mapping/
 * 3. Run: node scripts/migrate-image-references.js
 *
 * Safety:
 * - Creates backups before modifying files
 * - Dry-run mode available (set DRY_RUN=true)
 */

const fs = require('fs');
const path = require('path');

// Configuration
const DRY_RUN = process.env.DRY_RUN === 'true'; // Set to true for testing
const BACKUP_DIR = path.join(__dirname, '..', 'backups', `backup-${Date.now()}`);
const MAPPING_FILE = path.join(__dirname, '..', 'cloudinary-mapping', 'cloudinary-simple-mapping.json');

// File patterns to search
const FILE_PATTERNS = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'app/**/*.jsx',
  'app/**/*.js',
  'components/**/*.tsx',
  'components/**/*.ts',
  'components/**/*.jsx',
  'components/**/*.js',
  'styles/**/*.css',
  'styles/**/*.scss',
  'app/**/*.module.css'
];

// Load mapping
if (!fs.existsSync(MAPPING_FILE)) {
  console.error('\n❌ ERROR: Mapping file not found!');
  console.error(`Expected: ${MAPPING_FILE}`);
  console.error('\nPlease run: node scripts/upload-to-cloudinary.js first\n');
  process.exit(1);
}

const imageMapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf-8'));

console.log('\n🔄 ReFlow Toilets - Image Reference Migration\n');
console.log(`📁 Mapping file: ${MAPPING_FILE}`);
console.log(`🖼️  Total mappings: ${Object.keys(imageMapping).length}`);
console.log(`${DRY_RUN ? '🧪 DRY RUN MODE (no files will be modified)' : '✏️  LIVE MODE (files will be modified)'}\n`);

// Get all files matching patterns
function getAllFiles(dir, patterns) {
  const glob = require('glob');
  let files = [];

  patterns.forEach(pattern => {
    const matches = glob.sync(pattern, { cwd: dir, absolute: true });
    files = files.concat(matches);
  });

  return [...new Set(files)]; // Remove duplicates
}

// Create backup of file
function backupFile(filePath) {
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  const backupPath = path.join(BACKUP_DIR, relativePath);
  const backupDirPath = path.dirname(backupPath);

  if (!fs.existsSync(backupDirPath)) {
    fs.mkdirSync(backupDirPath, { recursive: true });
  }

  fs.copyFileSync(filePath, backupPath);
}

// Replace image references in content
function replaceImageReferences(content, filePath) {
  let modifiedContent = content;
  let replacements = [];

  // Sort mappings by path length (longest first) to avoid partial replacements
  const sortedMappings = Object.entries(imageMapping).sort((a, b) => b[0].length - a[0].length);

  for (const [localPath, cloudinaryUrl] of sortedMappings) {
    // Create regex patterns for different reference styles
    const patterns = [
      // src="/images/..." or src='/images/...'
      new RegExp(`src=["']${localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g'),
      // src={"/images/..."} or src={'/images/...'}
      new RegExp(`src=\\{["']${localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']\\}`, 'g'),
      // url(/images/...) in CSS
      new RegExp(`url\\(["']?${localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?\\)`, 'g'),
      // background: url(/images/...)
      new RegExp(`background:\\s*url\\(["']?${localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?\\)`, 'g'),
      // backgroundImage: "url(/images/...)"
      new RegExp(`backgroundImage:\\s*["']url\\(${localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)["']`, 'g'),
      // import ... from '/images/...'
      new RegExp(`from\\s+["']${localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g'),
    ];

    patterns.forEach((pattern, index) => {
      const matches = modifiedContent.match(pattern);
      if (matches) {
        let replacement;
        switch (index) {
          case 0: // src="/images/..."
            replacement = `src="${cloudinaryUrl}"`;
            break;
          case 1: // src={"/images/..."}
            replacement = `src={"${cloudinaryUrl}"}`;
            break;
          case 2: // url(/images/...)
            replacement = `url("${cloudinaryUrl}")`;
            break;
          case 3: // background: url(/images/...)
            replacement = `background: url("${cloudinaryUrl}")`;
            break;
          case 4: // backgroundImage: "url(/images/...)"
            replacement = `backgroundImage: "url(${cloudinaryUrl})"`;
            break;
          case 5: // import ... from '/images/...'
            replacement = `from "${cloudinaryUrl}"`;
            break;
        }

        modifiedContent = modifiedContent.replace(pattern, replacement);
        replacements.push({
          from: localPath,
          to: cloudinaryUrl,
          pattern: pattern.source
        });
      }
    });
  }

  return {
    content: modifiedContent,
    replacements: replacements,
    modified: replacements.length > 0
  };
}

// Process all files
async function migrateAllFiles() {
  const projectRoot = path.join(__dirname, '..');
  const files = getAllFiles(projectRoot, FILE_PATTERNS);

  console.log(`📂 Found ${files.length} files to check\n`);

  if (files.length === 0) {
    console.log('⚠️  No files found. Check FILE_PATTERNS in the script.\n');
    return;
  }

  const results = {
    filesChecked: 0,
    filesModified: 0,
    totalReplacements: 0,
    details: []
  };

  for (const filePath of files) {
    const relativePath = path.relative(projectRoot, filePath);
    process.stdout.write(`🔍 Checking: ${relativePath}...`);

    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const result = replaceImageReferences(content, filePath);

      results.filesChecked++;

      if (result.modified) {
        results.filesModified++;
        results.totalReplacements += result.replacements.length;

        if (!DRY_RUN) {
          // Create backup
          backupFile(filePath);

          // Write modified content
          fs.writeFileSync(filePath, result.content, 'utf-8');
        }

        process.stdout.write(` ✅ ${result.replacements.length} replacements\n`);

        results.details.push({
          file: relativePath,
          replacements: result.replacements.length,
          changes: result.replacements
        });
      } else {
        process.stdout.write(` ⏭️  No changes\n`);
      }
    } catch (error) {
      process.stdout.write(` ❌ Error: ${error.message}\n`);
    }
  }

  console.log('\n' + '='.repeat(60) + '\n');
  console.log('📈 MIGRATION SUMMARY\n');
  console.log(`📂 Files checked: ${results.filesChecked}`);
  console.log(`✏️  Files modified: ${results.filesModified}`);
  console.log(`🔄 Total replacements: ${results.totalReplacements}\n`);

  if (results.filesModified > 0 && !DRY_RUN) {
    console.log(`💾 Backups saved to: ${BACKUP_DIR}\n`);
  }

  // Write detailed report
  const reportPath = path.join(__dirname, '..', 'cloudinary-mapping', 'migration-report.json');
  fs.writeFileSync(
    reportPath,
    JSON.stringify({
      timestamp: new Date().toISOString(),
      dryRun: DRY_RUN,
      summary: {
        filesChecked: results.filesChecked,
        filesModified: results.filesModified,
        totalReplacements: results.totalReplacements
      },
      details: results.details
    }, null, 2)
  );
  console.log(`📋 Detailed report: cloudinary-mapping/migration-report.json\n`);

  console.log('='.repeat(60) + '\n');

  if (DRY_RUN) {
    console.log('🧪 DRY RUN COMPLETE - No files were modified\n');
    console.log('To apply changes, run: node scripts/migrate-image-references.js\n');
  } else {
    console.log('✅ MIGRATION COMPLETE!\n');
    console.log('📋 Next Steps:');
    console.log('   1. Test the website locally');
    console.log('   2. Check all pages to ensure images load correctly');
    console.log('   3. Review the migration-report.json for details');
    console.log('   4. If everything works, commit the changes');
    console.log('   5. If issues occur, restore from backups in:', BACKUP_DIR);
    console.log('');
  }
}

// Check for glob package
try {
  require('glob');
} catch (error) {
  console.error('\n❌ ERROR: glob package not found!');
  console.error('Please install: npm install glob --save-dev\n');
  process.exit(1);
}

// Run migration
migrateAllFiles().catch(error => {
  console.error('\n❌ FATAL ERROR:', error);
  process.exit(1);
});
