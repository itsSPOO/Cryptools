#!/usr/bin/env node

/**
 * Generate static HTML pages with proper SEO metadata for each route
 * This script runs after the main build to inject unique titles and meta tags
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO configuration matching src/config/seo.ts
const toolSEOConfig = {
  home: {
    title: 'Cryptools - Free Online Encryption, Hashing & Text Conversion Tools',
    description: 'Free online encryption, hashing & text conversion tools. Base64, MD5, SHA-256, Caesar Cipher, ROT13, Vigenere, Binary, Hex converter and more. Fast, secure, no registration required.',
    keywords: ['encryption tools', 'hashing calculator', 'base64 encoder', 'md5 hash', 'sha256 generator', 'caesar cipher', 'rot13', 'vigenere cipher', 'binary converter', 'hex converter', 'url encoder', 'text encryption', 'online crypto tools', 'free encryption', 'hash generator'],
    canonical: 'https://cryptools.click/',
  },
  base64: {
    title: 'Base64 Encoder & Decoder - Free Online Tool | Cryptools',
    description: 'Free Base64 encoder and decoder tool. Encode text to Base64 or decode Base64 strings instantly. Fast, secure, and easy to use. No registration required.',
    keywords: ['base64 encoder', 'base64 decoder', 'base64 converter', 'encode base64', 'decode base64', 'base64 tool', 'online base64'],
    canonical: 'https://cryptools.click/tool/base64',
  },
  binary: {
    title: 'Binary Converter - Text to Binary & Binary to Text | Cryptools',
    description: 'Convert text to binary code and binary to text instantly. Free online binary converter tool. Fast, accurate, and easy to use.',
    keywords: ['binary converter', 'text to binary', 'binary to text', 'binary translator', 'binary code converter', 'ascii to binary'],
    canonical: 'https://cryptools.click/tool/binary',
  },
  url: {
    title: 'URL Encoder & Decoder - Free Online Tool | Cryptools',
    description: 'Free URL encoder and decoder tool. Encode URLs for safe transmission or decode URL-encoded strings. Fast and easy to use.',
    keywords: ['url encoder', 'url decoder', 'url encode', 'url decode', 'percent encoding', 'uri encoder'],
    canonical: 'https://cryptools.click/tool/url',
  },
  hex: {
    title: 'Hex to ASCII Converter - Hexadecimal Converter | Cryptools',
    description: 'Convert hexadecimal to ASCII text and ASCII to hex instantly. Free online hex converter tool. Fast, accurate, and easy to use.',
    keywords: ['hex converter', 'hex to ascii', 'ascii to hex', 'hexadecimal converter', 'hex to text', 'text to hex'],
    canonical: 'https://cryptools.click/tool/hex',
  },
  leet: {
    title: 'Leet Speak Converter - 1337 Translator | Cryptools',
    description: 'Convert text to leet speak (1337) and back. Free online leet speak converter. Create cool text with numbers and symbols.',
    keywords: ['leet speak', '1337 speak', 'leet converter', 'leet translator', 'leetspeak generator', '1337 translator'],
    canonical: 'https://cryptools.click/tool/leet',
  },
  md5: {
    title: 'MD5 Hash Generator - Free Online MD5 Tool | Cryptools',
    description: 'Generate MD5 hash from text instantly. Free online MD5 hash generator. Fast, secure, and easy to use. 128-bit cryptographic hash.',
    keywords: ['md5 hash', 'md5 generator', 'md5 calculator', 'md5 checksum', 'generate md5', 'md5 hash generator'],
    canonical: 'https://cryptools.click/tool/md5',
  },
  sha1: {
    title: 'SHA-1 Hash Generator - Free Online SHA1 Tool | Cryptools',
    description: 'Generate SHA-1 hash from text instantly. Free online SHA-1 hash generator. Fast, secure, and easy to use. 160-bit cryptographic hash.',
    keywords: ['sha1 hash', 'sha-1 generator', 'sha1 calculator', 'sha1 checksum', 'generate sha1', 'sha1 hash generator'],
    canonical: 'https://cryptools.click/tool/sha1',
  },
  sha256: {
    title: 'SHA-256 Hash Generator - Free Online SHA256 Tool | Cryptools',
    description: 'Generate SHA-256 hash from text instantly. Free online SHA-256 hash generator. Fast, secure, and easy to use. 256-bit cryptographic hash.',
    keywords: ['sha256 hash', 'sha-256 generator', 'sha256 calculator', 'sha256 checksum', 'generate sha256', 'sha256 hash generator'],
    canonical: 'https://cryptools.click/tool/sha256',
  },
  caesar: {
    title: 'Caesar Cipher Encoder & Decoder - Free Tool | Cryptools',
    description: 'Encrypt and decrypt text using Caesar cipher. Free online Caesar cipher tool with customizable shift. Classical substitution cipher.',
    keywords: ['caesar cipher', 'caesar shift', 'shift cipher', 'caesar encoder', 'caesar decoder', 'substitution cipher'],
    canonical: 'https://cryptools.click/tool/caesar',
  },
  rot13: {
    title: 'ROT13 & ROT47 Encoder Decoder - Free Tool | Cryptools',
    description: 'Encode and decode text using ROT13 and ROT47 cipher. Free online ROT13/ROT47 tool. Letter substitution cipher.',
    keywords: ['rot13', 'rot47', 'rot13 decoder', 'rot13 encoder', 'rot cipher', 'letter substitution'],
    canonical: 'https://cryptools.click/tool/rot13',
  },
  vigenere: {
    title: 'Vigenère Cipher Encoder & Decoder - Free Tool | Cryptools',
    description: 'Encrypt and decrypt text using Vigenère cipher. Free online Vigenère cipher tool with custom keyword. Polyalphabetic substitution cipher.',
    keywords: ['vigenere cipher', 'vigenère cipher', 'vigenere encoder', 'vigenere decoder', 'polyalphabetic cipher', 'keyword cipher'],
    canonical: 'https://cryptools.click/tool/vigenere',
  },
  atbash: {
    title: 'Atbash Cipher Encoder & Decoder - Free Tool | Cryptools',
    description: 'Encrypt and decrypt text using Atbash cipher. Free online Atbash cipher tool. Hebrew substitution cipher (A↔Z, B↔Y).',
    keywords: ['atbash cipher', 'atbash encoder', 'atbash decoder', 'hebrew cipher', 'reverse alphabet cipher'],
    canonical: 'https://cryptools.click/tool/atbash',
  },
  custom: {
    title: 'Custom Cipher Creator - Build Your Own Cipher | Cryptools',
    description: 'Create and save custom character mapping ciphers. Free online custom cipher tool. Design your own encryption rules.',
    keywords: ['custom cipher', 'cipher creator', 'custom encryption', 'character mapping', 'cipher builder'],
    canonical: 'https://cryptools.click/tool/custom',
  },
  password: {
    title: 'Password Generator - Strong Random Passwords | Cryptools',
    description: 'Generate strong, secure random passwords. Free online password generator with customizable options. Create secure passwords instantly.',
    keywords: ['password generator', 'random password', 'strong password', 'secure password', 'password creator', 'generate password'],
    canonical: 'https://cryptools.click/tool/password',
  },
  privacy: {
    title: 'Privacy Policy - Cryptools',
    description: 'Privacy policy for Cryptools. All processing happens in your browser with zero data collection. Learn how we protect your privacy.',
    keywords: ['privacy policy', 'data protection', 'cryptools privacy', 'no data collection', 'client-side processing'],
    canonical: 'https://cryptools.click/privacy-policy',
  },
  terms: {
    title: 'Terms of Use - Cryptools',
    description: 'Terms of use for Cryptools online cryptography tools. Educational purpose, usage guidelines, and legal information.',
    keywords: ['terms of use', 'terms and conditions', 'cryptools terms', 'usage policy', 'legal terms'],
    canonical: 'https://cryptools.click/terms-of-use',
  },
  disclaimer: {
    title: 'Disclaimer - Cryptools',
    description: 'Important disclaimer for Cryptools. Educational use only, security limitations, and usage guidelines for cryptography tools.',
    keywords: ['disclaimer', 'educational use', 'security disclaimer', 'cryptools disclaimer', 'usage warning'],
    canonical: 'https://cryptools.click/disclaimer',
  },
  contact: {
    title: 'Contact Us - Cryptools',
    description: 'Contact Cryptools for support, feedback, and suggestions. Get in touch with our team at contact@cryptools.click.',
    keywords: ['contact', 'support', 'feedback', 'cryptools contact', 'customer service', 'get in touch'],
    canonical: 'https://cryptools.click/contact',
  },
};

// Read the base index.html template
const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');

/**
 * Inject SEO metadata into HTML
 */
function injectMetadata(html, seoConfig) {
  let modifiedHtml = html;

  // Replace title
  modifiedHtml = modifiedHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${seoConfig.title}</title>`
  );

  // Replace or add meta description
  if (modifiedHtml.includes('name="description"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta name="description" content=".*?".*?>/,
      `<meta name="description" content="${seoConfig.description}" />`
    );
  } else {
    modifiedHtml = modifiedHtml.replace(
      '</head>',
      `    <meta name="description" content="${seoConfig.description}" />\n  </head>`
    );
  }

  // Replace or add meta keywords
  if (modifiedHtml.includes('name="keywords"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta name="keywords" content=".*?".*?>/,
      `<meta name="keywords" content="${seoConfig.keywords.join(', ')}" />`
    );
  } else {
    modifiedHtml = modifiedHtml.replace(
      '</head>',
      `    <meta name="keywords" content="${seoConfig.keywords.join(', ')}" />\n  </head>`
    );
  }

  // Replace canonical URL
  if (modifiedHtml.includes('rel="canonical"')) {
    modifiedHtml = modifiedHtml.replace(
      /<link rel="canonical" href=".*?".*?>/,
      `<link rel="canonical" href="${seoConfig.canonical}" />`
    );
  } else {
    modifiedHtml = modifiedHtml.replace(
      '</head>',
      `    <link rel="canonical" href="${seoConfig.canonical}" />\n  </head>`
    );
  }

  // Replace Open Graph title
  if (modifiedHtml.includes('property="og:title"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta property="og:title" content=".*?".*?>/,
      `<meta property="og:title" content="${seoConfig.title}" />`
    );
  }

  // Replace Open Graph description
  if (modifiedHtml.includes('property="og:description"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta property="og:description" content=".*?".*?>/,
      `<meta property="og:description" content="${seoConfig.description}" />`
    );
  }

  // Replace Open Graph URL
  if (modifiedHtml.includes('property="og:url"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta property="og:url" content=".*?".*?>/,
      `<meta property="og:url" content="${seoConfig.canonical}" />`
    );
  }

  // Replace Twitter title
  if (modifiedHtml.includes('name="twitter:title"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta name="twitter:title" content=".*?".*?>/,
      `<meta name="twitter:title" content="${seoConfig.title}" />`
    );
  }

  // Replace Twitter description
  if (modifiedHtml.includes('name="twitter:description"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta name="twitter:description" content=".*?".*?>/,
      `<meta name="twitter:description" content="${seoConfig.description}" />`
    );
  }

  // Replace Twitter URL
  if (modifiedHtml.includes('name="twitter:url"')) {
    modifiedHtml = modifiedHtml.replace(
      /<meta name="twitter:url" content=".*?".*?>/,
      `<meta name="twitter:url" content="${seoConfig.canonical}" />`
    );
  }

  return modifiedHtml;
}

/**
 * Generate static pages for all routes
 */
function generateStaticPages() {
  console.log('🚀 Generating static pages with unique SEO metadata...\n');

  // Tool pages
  const tools = ['base64', 'binary', 'url', 'hex', 'leet', 'md5', 'sha1', 'sha256', 'caesar', 'rot13', 'vigenere', 'atbash', 'custom', 'password'];
  
  tools.forEach(tool => {
    const toolDir = path.join(distPath, 'tool', tool);
    fs.mkdirSync(toolDir, { recursive: true });
    
    const seoConfig = toolSEOConfig[tool];
    let html = injectMetadata(baseHtml, seoConfig);
    
    // Inject tool ID for client-side routing
    html = html.replace('</head>', `    <script>window.__TOOL_ID='${tool}';</script>\n  </head>`);
    
    fs.writeFileSync(path.join(toolDir, 'index.html'), html);
    console.log(`✅ Generated /tool/${tool} with title: "${seoConfig.title}"`);
  });

  // Legal pages
  const legalPages = [
    { route: 'privacy-policy', key: 'privacy' },
    { route: 'terms-of-use', key: 'terms' },
    { route: 'disclaimer', key: 'disclaimer' },
    { route: 'contact', key: 'contact' }
  ];

  legalPages.forEach(({ route, key }) => {
    const pageDir = path.join(distPath, route);
    fs.mkdirSync(pageDir, { recursive: true });
    
    const seoConfig = toolSEOConfig[key];
    const html = injectMetadata(baseHtml, seoConfig);
    
    fs.writeFileSync(path.join(pageDir, 'index.html'), html);
    console.log(`✅ Generated /${route} with title: "${seoConfig.title}"`);
  });

  // Create 404.html with GitHub Pages SPA redirect script
  const redirect404Script = `
    <script>
      // GitHub Pages SPA redirect handler
      (function() {
        var path = location.pathname;
        
        // List of static files that should be served directly
        var staticFiles = ['/sitemap.xml', '/robots.txt', '/ads.txt', '/manifest.json', '/favicon.svg', '/favicon.ico', '/favicon-96x96.png', '/apple-touch-icon.png', '/web-app-manifest-192x192.png', '/web-app-manifest-512x512.png'];
        
        // If URL has trailing slash, check if it's a static file
        if (path.endsWith('/')) {
          var pathWithoutSlash = path.slice(0, -1);
          
          // Check if it's a known static file
          if (staticFiles.indexOf(pathWithoutSlash) !== -1) {
            // Redirect to URL without trailing slash
            location.replace(pathWithoutSlash + location.search + location.hash);
            return;
          }
          
          // Also check by file extension
          var staticFileExtensions = ['.xml', '.txt', '.json', '.html', '.ico', '.png', '.jpg', '.svg', '.css', '.js'];
          var isStaticFile = staticFileExtensions.some(function(ext) {
            return pathWithoutSlash.endsWith(ext);
          });
          
          if (isStaticFile) {
            // Redirect to URL without trailing slash
            location.replace(pathWithoutSlash + location.search + location.hash);
            return;
          }
        }
        
        // For SPA routes, store the path and redirect to index.html
        sessionStorage.redirect = location.href;
      })();
    </script>
  `;
  const html404 = baseHtml.replace('</head>', `${redirect404Script}\n  </head>`);
  fs.writeFileSync(path.join(distPath, '404.html'), html404);
  console.log('✅ Generated 404.html with GitHub Pages SPA redirect');

  // Create .nojekyll file for GitHub Pages (prevents Jekyll processing)
  fs.writeFileSync(path.join(distPath, '.nojekyll'), '');
  console.log('✅ Created .nojekyll file for GitHub Pages');

  console.log('\n✨ All static pages generated successfully!');
  console.log('📊 Total pages: ' + (tools.length + legalPages.length + 1));
}

// Run the script
try {
  generateStaticPages();
} catch (error) {
  console.error('❌ Error generating static pages:', error);
  process.exit(1);
}
