import type { Tool } from '@/types';

export const tools: Tool[] = [
  // Conversions
  {
    id: 'base64',
    name: 'Base64 Encode/Decode',
    category: 'conversions',
    description: 'Encode or decode text using Base64 encoding',
    icon: 'Binary',
  },
  {
    id: 'binary',
    name: 'Binary Converter',
    category: 'conversions',
    description: 'Convert text to binary and vice versa',
    icon: 'Binary',
  },
  {
    id: 'url',
    name: 'URL Encode/Decode',
    category: 'conversions',
    description: 'Encode or decode URL parameters',
    icon: 'Link',
  },
  {
    id: 'hex',
    name: 'Hex ↔ ASCII',
    category: 'conversions',
    description: 'Convert between hexadecimal and ASCII text',
    icon: 'Hash',
  },
  {
    id: 'leet',
    name: 'Leet Speak',
    category: 'conversions',
    description: 'Convert text to/from leet speak (1337)',
    icon: 'Type',
  },

  // Hash
  {
    id: 'md5',
    name: 'MD5 Hash',
    category: 'hash',
    description: 'Generate MD5 hash (128-bit)',
    icon: 'Shield',
  },
  {
    id: 'sha1',
    name: 'SHA-1 Hash',
    category: 'hash',
    description: 'Generate SHA-1 hash (160-bit)',
    icon: 'ShieldCheck',
  },
  {
    id: 'sha256',
    name: 'SHA-256 Hash',
    category: 'hash',
    description: 'Generate SHA-256 hash (256-bit)',
    icon: 'ShieldAlert',
  },

  // Ciphers
  {
    id: 'caesar',
    name: 'Caesar Cipher',
    category: 'ciphers',
    description: 'Classical substitution cipher with shift',
    icon: 'Key',
  },
  {
    id: 'rot13',
    name: 'ROT13 / ROT47',
    category: 'ciphers',
    description: 'Letter substitution cipher (ROT13 for letters, ROT47 for ASCII)',
    icon: 'RotateCw',
  },
  {
    id: 'vigenere',
    name: 'Vigenère Cipher',
    category: 'ciphers',
    description: 'Polyalphabetic substitution cipher with keyword',
    icon: 'Lock',
  },
  {
    id: 'atbash',
    name: 'Atbash Cipher',
    category: 'ciphers',
    description: 'Hebrew substitution cipher (A↔Z, B↔Y, etc.)',
    icon: 'Shuffle',
  },

  // Custom
  {
    id: 'custom',
    name: 'Custom Cipher',
    category: 'custom',
    description: 'Create and save your own character mapping rules',
    icon: 'Settings',
  },
];

export const categoryNames: Record<string, string> = {
  conversions: 'Text Conversions',
  hash: 'Hash Generators',
  ciphers: 'Password Ciphers',
  custom: 'Custom Tools',
};
