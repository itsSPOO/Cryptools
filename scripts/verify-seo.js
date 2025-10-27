#!/usr/bin/env node

/**
 * Verify SEO metadata for all generated static pages
 * This script checks that each page has unique titles and descriptions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

/**
 * Extract metadata from HTML file
 */
function extractMetadata(htmlPath) {
  if (!fs.existsSync(htmlPath)) {
    return null;
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');
  
  // Extract title
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'NO TITLE FOUND';
  
  // Extract description
  const descMatch = html.match(/<meta name="description" content="(.*?)"/);
  const description = descMatch ? descMatch[1] : 'NO DESCRIPTION FOUND';
  
  // Extract canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : 'NO CANONICAL FOUND';
  
  // Extract Open Graph title
  const ogTitleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
  const ogTitle = ogTitleMatch ? ogTitleMatch[1] : 'NO OG:TITLE FOUND';

  return { title, description, canonical, ogTitle };
}

/**
 * Main verification function
 */
function verifySEO() {
  console.log(`${colors.cyan}🔍 SEO Metadata Verification Report${colors.reset}\n`);
  console.log('='.repeat(80) + '\n');

  const pages = [
    { path: 'index.html', name: 'Homepage', url: '/' },
    { path: 'tool/base64/index.html', name: 'Base64 Tool', url: '/tool/base64' },
    { path: 'tool/binary/index.html', name: 'Binary Tool', url: '/tool/binary' },
    { path: 'tool/url/index.html', name: 'URL Tool', url: '/tool/url' },
    { path: 'tool/hex/index.html', name: 'Hex Tool', url: '/tool/hex' },
    { path: 'tool/leet/index.html', name: 'Leet Tool', url: '/tool/leet' },
    { path: 'tool/md5/index.html', name: 'MD5 Tool', url: '/tool/md5' },
    { path: 'tool/sha1/index.html', name: 'SHA1 Tool', url: '/tool/sha1' },
    { path: 'tool/sha256/index.html', name: 'SHA256 Tool', url: '/tool/sha256' },
    { path: 'tool/caesar/index.html', name: 'Caesar Tool', url: '/tool/caesar' },
    { path: 'tool/rot13/index.html', name: 'ROT13 Tool', url: '/tool/rot13' },
    { path: 'tool/vigenere/index.html', name: 'Vigenere Tool', url: '/tool/vigenere' },
    { path: 'tool/atbash/index.html', name: 'Atbash Tool', url: '/tool/atbash' },
    { path: 'tool/custom/index.html', name: 'Custom Tool', url: '/tool/custom' },
    { path: 'tool/password/index.html', name: 'Password Tool', url: '/tool/password' },
    { path: 'privacy-policy/index.html', name: 'Privacy Policy', url: '/privacy-policy' },
    { path: 'terms-of-use/index.html', name: 'Terms of Use', url: '/terms-of-use' },
    { path: 'disclaimer/index.html', name: 'Disclaimer', url: '/disclaimer' },
    { path: 'contact/index.html', name: 'Contact', url: '/contact' },
  ];

  const results = [];
  const titles = new Set();
  const descriptions = new Set();
  let hasErrors = false;
  let missingPages = 0;

  console.log(`${colors.blue}📄 Checking ${pages.length} pages...${colors.reset}\n`);

  pages.forEach(page => {
    const htmlPath = path.join(distPath, page.path);
    const metadata = extractMetadata(htmlPath);

    if (!metadata) {
      console.log(`${colors.red}❌ ${page.name} (${page.url})${colors.reset}`);
      console.log(`   File not found: ${page.path}\n`);
      hasErrors = true;
      missingPages++;
      return;
    }

    // Check for duplicates
    const isDuplicateTitle = titles.has(metadata.title);
    const isDuplicateDesc = descriptions.has(metadata.description);

    titles.add(metadata.title);
    descriptions.add(metadata.description);

    results.push({
      page,
      metadata,
      isDuplicateTitle,
      isDuplicateDesc,
    });

    // Display result
    const status = !isDuplicateTitle && !isDuplicateDesc ? 
      `${colors.green}✅${colors.reset}` : 
      `${colors.yellow}⚠️${colors.reset}`;

    console.log(`${status} ${colors.cyan}${page.name}${colors.reset} (${page.url})`);
    console.log(`   Title: ${metadata.title}`);
    
    if (isDuplicateTitle) {
      console.log(`   ${colors.red}⚠️  WARNING: Duplicate title detected!${colors.reset}`);
      hasErrors = true;
    }
    
    if (isDuplicateDesc) {
      console.log(`   ${colors.yellow}⚠️  WARNING: Duplicate description detected!${colors.reset}`);
    }
    
    if (metadata.canonical !== `https://cryptools.click${page.url}`) {
      console.log(`   ${colors.yellow}⚠️  WARNING: Canonical URL mismatch!${colors.reset}`);
      console.log(`   Expected: https://cryptools.click${page.url}`);
      console.log(`   Got: ${metadata.canonical}`);
    }
    
    console.log('');
  });

  // Summary
  console.log('='.repeat(80));
  console.log(`\n${colors.cyan}📊 Summary${colors.reset}\n`);
  console.log(`Total pages checked: ${pages.length}`);
  console.log(`Unique titles: ${titles.size}`);
  console.log(`Unique descriptions: ${descriptions.size}`);
  console.log(`Missing pages: ${missingPages}`);

  if (hasErrors) {
    console.log(`\n${colors.red}❌ SEO VERIFICATION FAILED${colors.reset}`);
    console.log('Some pages have duplicate titles or are missing.\n');
    process.exit(1);
  } else if (titles.size < pages.length - missingPages) {
    console.log(`\n${colors.yellow}⚠️  SEO VERIFICATION WARNING${colors.reset}`);
    console.log('All pages exist but some have duplicate metadata.\n');
    process.exit(1);
  } else {
    console.log(`\n${colors.green}✅ SEO VERIFICATION PASSED${colors.reset}`);
    console.log('All pages have unique titles and descriptions!\n');
    console.log(`${colors.cyan}🎉 Ready for Google Search Console and AdSense submission!${colors.reset}\n`);
    process.exit(0);
  }
}

// Run verification
try {
  if (!fs.existsSync(distPath)) {
    console.error(`${colors.red}❌ Error: dist folder not found.${colors.reset}`);
    console.error('Please run "npm run build" first.\n');
    process.exit(1);
  }

  verifySEO();
} catch (error) {
  console.error(`${colors.red}❌ Error during verification:${colors.reset}`, error);
  process.exit(1);
}
