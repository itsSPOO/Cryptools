export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  h1: string;
  h2?: string[];
  structuredData: any;
}

export const toolSEOConfig: Record<string, PageSEO> = {
  home: {
    title: 'Cryptools - Free Online Encryption, Hashing & Text Conversion Tools',
    description: 'Free online encryption, hashing & text conversion tools. Base64, MD5, SHA-256, Caesar Cipher, ROT13, Vigenere, Binary, Hex converter and more. Fast, secure, no registration required.',
    keywords: ['encryption tools', 'hashing calculator', 'base64 encoder', 'md5 hash', 'sha256 generator', 'caesar cipher', 'rot13', 'vigenere cipher', 'binary converter', 'hex converter', 'url encoder', 'text encryption', 'online crypto tools', 'free encryption', 'hash generator'],
    canonical: 'https://cryptools.click/',
    h1: 'Free Encryption, Hashing & Text Conversion Tools',
    h2: ['Popular Tools', 'All Categories', 'Why Choose Cryptools'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Cryptools',
      url: 'https://cryptools.click',
      description: 'Free online encryption, hashing, and text conversion tools including Base64, MD5, SHA-256, Caesar Cipher, ROT13, Vigenere, Binary and Hex converters.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    }
  },
  base64: {
    title: 'Base64 Encoder & Decoder - Free Online Tool | Cryptools',
    description: 'Free Base64 encoder and decoder tool. Encode text to Base64 or decode Base64 strings instantly. Fast, secure, and easy to use. No registration required.',
    keywords: ['base64 encoder', 'base64 decoder', 'base64 converter', 'encode base64', 'decode base64', 'base64 tool', 'online base64'],
    canonical: 'https://cryptools.click/base64',
    h1: 'Base64 Encoder & Decoder',
    h2: ['How to Use', 'About Base64 Encoding'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Base64 Encoder & Decoder',
      url: 'https://cryptools.click/base64',
      description: 'Free online Base64 encoder and decoder tool. Convert text to Base64 encoding or decode Base64 strings.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  binary: {
    title: 'Binary Converter - Text to Binary & Binary to Text | Cryptools',
    description: 'Convert text to binary code and binary to text instantly. Free online binary converter tool. Fast, accurate, and easy to use.',
    keywords: ['binary converter', 'text to binary', 'binary to text', 'binary translator', 'binary code converter', 'ascii to binary'],
    canonical: 'https://cryptools.click/binary',
    h1: 'Binary Converter',
    h2: ['Text to Binary', 'Binary to Text', 'About Binary Code'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Binary Converter',
      url: 'https://cryptools.click/binary',
      description: 'Free online binary converter. Convert text to binary code and binary to text instantly.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  url: {
    title: 'URL Encoder & Decoder - Free Online Tool | Cryptools',
    description: 'Free URL encoder and decoder tool. Encode URLs for safe transmission or decode URL-encoded strings. Fast and easy to use.',
    keywords: ['url encoder', 'url decoder', 'url encode', 'url decode', 'percent encoding', 'uri encoder'],
    canonical: 'https://cryptools.click/url',
    h1: 'URL Encoder & Decoder',
    h2: ['URL Encoding', 'URL Decoding', 'About URL Encoding'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'URL Encoder & Decoder',
      url: 'https://cryptools.click/url',
      description: 'Free online URL encoder and decoder tool. Encode URLs for safe transmission or decode URL-encoded strings.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  hex: {
    title: 'Hex to ASCII Converter - Hexadecimal Converter | Cryptools',
    description: 'Convert hexadecimal to ASCII text and ASCII to hex instantly. Free online hex converter tool. Fast, accurate, and easy to use.',
    keywords: ['hex converter', 'hex to ascii', 'ascii to hex', 'hexadecimal converter', 'hex to text', 'text to hex'],
    canonical: 'https://cryptools.click/hex',
    h1: 'Hexadecimal to ASCII Converter',
    h2: ['Hex to ASCII', 'ASCII to Hex', 'About Hexadecimal'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Hex to ASCII Converter',
      url: 'https://cryptools.click/hex',
      description: 'Free online hexadecimal converter. Convert hex to ASCII text and ASCII to hex instantly.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  leet: {
    title: 'Leet Speak Converter - 1337 Translator | Cryptools',
    description: 'Convert text to leet speak (1337) and back. Free online leet speak converter. Create cool text with numbers and symbols.',
    keywords: ['leet speak', '1337 speak', 'leet converter', 'leet translator', 'leetspeak generator', '1337 translator'],
    canonical: 'https://cryptools.click/leet-speak',
    h1: 'Leet Speak Converter (1337)',
    h2: ['Convert to Leet Speak', 'About Leet Speak'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Leet Speak Converter',
      url: 'https://cryptools.click/leet-speak',
      description: 'Free online leet speak converter. Convert text to leet speak (1337) and back.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  md5: {
    title: 'MD5 Hash Generator - Free Online MD5 Tool | Cryptools',
    description: 'Generate MD5 hash from text instantly. Free online MD5 hash generator. Fast, secure, and easy to use. 128-bit cryptographic hash.',
    keywords: ['md5 hash', 'md5 generator', 'md5 calculator', 'md5 checksum', 'generate md5', 'md5 hash generator'],
    canonical: 'https://cryptools.click/md5',
    h1: 'MD5 Hash Generator',
    h2: ['Generate MD5 Hash', 'About MD5 Algorithm'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'MD5 Hash Generator',
      url: 'https://cryptools.click/md5',
      description: 'Free online MD5 hash generator. Generate MD5 hash from text instantly.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  sha1: {
    title: 'SHA-1 Hash Generator - Free Online SHA1 Tool | Cryptools',
    description: 'Generate SHA-1 hash from text instantly. Free online SHA-1 hash generator. Fast, secure, and easy to use. 160-bit cryptographic hash.',
    keywords: ['sha1 hash', 'sha-1 generator', 'sha1 calculator', 'sha1 checksum', 'generate sha1', 'sha1 hash generator'],
    canonical: 'https://cryptools.click/sha1',
    h1: 'SHA-1 Hash Generator',
    h2: ['Generate SHA-1 Hash', 'About SHA-1 Algorithm'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'SHA-1 Hash Generator',
      url: 'https://cryptools.click/sha1',
      description: 'Free online SHA-1 hash generator. Generate SHA-1 hash from text instantly.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  sha256: {
    title: 'SHA-256 Hash Generator - Free Online SHA256 Tool | Cryptools',
    description: 'Generate SHA-256 hash from text instantly. Free online SHA-256 hash generator. Fast, secure, and easy to use. 256-bit cryptographic hash.',
    keywords: ['sha256 hash', 'sha-256 generator', 'sha256 calculator', 'sha256 checksum', 'generate sha256', 'sha256 hash generator'],
    canonical: 'https://cryptools.click/sha256',
    h1: 'SHA-256 Hash Generator',
    h2: ['Generate SHA-256 Hash', 'About SHA-256 Algorithm'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'SHA-256 Hash Generator',
      url: 'https://cryptools.click/sha256',
      description: 'Free online SHA-256 hash generator. Generate SHA-256 hash from text instantly.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  caesar: {
    title: 'Caesar Cipher Encoder & Decoder - Free Tool | Cryptools',
    description: 'Encrypt and decrypt text using Caesar cipher. Free online Caesar cipher tool with customizable shift. Classical substitution cipher.',
    keywords: ['caesar cipher', 'caesar shift', 'shift cipher', 'caesar encoder', 'caesar decoder', 'substitution cipher'],
    canonical: 'https://cryptools.click/caesar',
    h1: 'Caesar Cipher Encoder & Decoder',
    h2: ['Encrypt with Caesar Cipher', 'Decrypt Caesar Cipher', 'About Caesar Cipher'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Caesar Cipher Tool',
      url: 'https://cryptools.click/caesar',
      description: 'Free online Caesar cipher encoder and decoder. Encrypt and decrypt text using Caesar shift cipher.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  rot13: {
    title: 'ROT13 & ROT47 Encoder Decoder - Free Tool | Cryptools',
    description: 'Encode and decode text using ROT13 and ROT47 cipher. Free online ROT13/ROT47 tool. Letter substitution cipher.',
    keywords: ['rot13', 'rot47', 'rot13 decoder', 'rot13 encoder', 'rot cipher', 'letter substitution'],
    canonical: 'https://cryptools.click/rot13',
    h1: 'ROT13 & ROT47 Cipher Tool',
    h2: ['ROT13 Encoding', 'ROT47 Encoding', 'About ROT Ciphers'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'ROT13 & ROT47 Tool',
      url: 'https://cryptools.click/rot13',
      description: 'Free online ROT13 and ROT47 encoder and decoder. Letter substitution cipher tool.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  vigenere: {
    title: 'Vigenère Cipher Encoder & Decoder - Free Tool | Cryptools',
    description: 'Encrypt and decrypt text using Vigenère cipher. Free online Vigenère cipher tool with custom keyword. Polyalphabetic substitution cipher.',
    keywords: ['vigenere cipher', 'vigenère cipher', 'vigenere encoder', 'vigenere decoder', 'polyalphabetic cipher', 'keyword cipher'],
    canonical: 'https://cryptools.click/vigenere',
    h1: 'Vigenère Cipher Encoder & Decoder',
    h2: ['Encrypt with Vigenère', 'Decrypt Vigenère', 'About Vigenère Cipher'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Vigenère Cipher Tool',
      url: 'https://cryptools.click/vigenere',
      description: 'Free online Vigenère cipher encoder and decoder. Polyalphabetic substitution cipher with keyword.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  atbash: {
    title: 'Atbash Cipher Encoder & Decoder - Free Tool | Cryptools',
    description: 'Encrypt and decrypt text using Atbash cipher. Free online Atbash cipher tool. Hebrew substitution cipher (A↔Z, B↔Y).',
    keywords: ['atbash cipher', 'atbash encoder', 'atbash decoder', 'hebrew cipher', 'reverse alphabet cipher'],
    canonical: 'https://cryptools.click/atbash',
    h1: 'Atbash Cipher Encoder & Decoder',
    h2: ['Atbash Encryption', 'About Atbash Cipher'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Atbash Cipher Tool',
      url: 'https://cryptools.click/atbash',
      description: 'Free online Atbash cipher encoder and decoder. Hebrew substitution cipher.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  custom: {
    title: 'Custom Cipher Creator - Build Your Own Cipher | Cryptools',
    description: 'Create and save custom character mapping ciphers. Free online custom cipher tool. Design your own encryption rules.',
    keywords: ['custom cipher', 'cipher creator', 'custom encryption', 'character mapping', 'cipher builder'],
    canonical: 'https://cryptools.click/custom',
    h1: 'Custom Cipher Creator',
    h2: ['Create Custom Cipher', 'Save Your Ciphers'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Custom Cipher Creator',
      url: 'https://cryptools.click/custom',
      description: 'Free online custom cipher creator. Build and save your own character mapping ciphers.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  },
  password: {
    title: 'Password Generator - Strong Random Passwords | Cryptools',
    description: 'Generate strong, secure random passwords. Free online password generator with customizable options. Create secure passwords instantly.',
    keywords: ['password generator', 'random password', 'strong password', 'secure password', 'password creator', 'generate password'],
    canonical: 'https://cryptools.click/password',
    h1: 'Secure Password Generator',
    h2: ['Generate Strong Passwords', 'Password Options'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Password Generator',
      url: 'https://cryptools.click/password',
      description: 'Free online password generator. Create strong, secure random passwords with customizable options.',
      isPartOf: {
        '@type': 'WebApplication',
        name: 'Cryptools'
      }
    }
  }
};

// URL mapping for clean URLs
export const toolUrlMap: Record<string, string> = {
  base64: '/base64',
  binary: '/binary',
  url: '/url',
  hex: '/hex',
  leet: '/leet-speak',
  md5: '/md5',
  sha1: '/sha1',
  sha256: '/sha256',
  caesar: '/caesar',
  rot13: '/rot13',
  vigenere: '/vigenere',
  atbash: '/atbash',
  custom: '/custom',
  password: '/password'
};

// Reverse mapping for routing
export const urlToToolMap: Record<string, string> = {
  '/base64': 'base64',
  '/binary': 'binary',
  '/url': 'url',
  '/hex': 'hex',
  '/leet-speak': 'leet',
  '/md5': 'md5',
  '/sha1': 'sha1',
  '/sha256': 'sha256',
  '/caesar': 'caesar',
  '/rot13': 'rot13',
  '/vigenere': 'vigenere',
  '/atbash': 'atbash',
  '/custom': 'custom',
  '/password': 'password'
};
