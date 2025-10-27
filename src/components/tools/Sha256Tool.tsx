import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { sha256Hash } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

export const Sha256Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await sha256Hash(input);
      setOutput(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-8">
        SHA-256 Hash Generator
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Generate secure SHA-256 hash values with our free online SHA-256 Hash Generator tool. SHA-256 (Secure Hash Algorithm 256-bit) is part of the SHA-2 family and produces a 256-bit cryptographic hash represented as 64 hexadecimal characters. It's currently the industry standard for secure hashing and is extensively used in blockchain technology (Bitcoin, Ethereum), digital signatures, secure password storage, SSL/TLS certificates, file integrity verification, and data authentication. SHA-256 offers strong collision resistance and is considered cryptographically secure for modern applications. Our tool provides instant hash generation with complete privacy as all processing happens locally in your browser using the native Web Crypto API.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Generate SHA-256 hash (256-bit) from text"
        helpText="SHA-256 is part of the SHA-2 family and produces a 256-bit hash value (64 hex characters). It's currently considered secure for cryptographic purposes and widely used in blockchain and security applications."
        codeSnippet={`// SHA-256 Hash
async function sha256(text) {
  const buffer = await crypto.subtle.digest('SHA-256', 
    new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0')).join('');
}
sha256("${input || 'your text'}").then(console.log);`}
      >
        <div className="space-y-4">
          <InputField
            label="Input Text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to hash..."
            rows={6}
          />

          <Button onClick={handleGenerate} variant="primary" disabled={loading}>
            {loading ? 'Generating...' : 'Generate Hash'}
          </Button>

          <OutputField
            label="SHA-256 Hash (Hex)"
            value={output}
            example="'hello' → '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'"
          />

          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              ✓ <strong>Recommended:</strong> SHA-256 is currently considered secure for cryptographic purposes.
            </p>
          </div>
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          SHA-256 is the recommended choice for modern cryptographic applications, offering strong collision resistance and security. Perfect for developers working with blockchain, creating digital signatures, or implementing secure password hashing systems. Our tool uses the native Web Crypto API for optimal performance and security, with all computations performed locally in your browser.
        </p>
      </div>

      {/* Ad Banner */}
      <div className="my-8">
        <AdBannerInFeed />
      </div>

      {/* Detailed Description Section */}
      <div className="mt-12 space-y-8 bg-white dark:bg-dark-surface rounded-xl p-6 md:p-8 border border-light-border dark:border-dark-border">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What is SHA-256?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that belongs to the SHA-2 family, designed by the National Security Agency (NSA) and published by NIST in 2001. It produces a 256-bit (32-byte) hash value, typically rendered as a 64-character hexadecimal number. SHA-256 is widely regarded as one of the most secure hash functions available today.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Unlike MD5 and SHA-1, SHA-256 has no known practical collision attacks, making it suitable for security-critical applications. It's extensively used in blockchain technology (Bitcoin mining), SSL/TLS certificates, digital signatures, password hashing (with proper salting), and data integrity verification.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the SHA-256 Hash Generator
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Enter your text or data in the input field</li>
            <li>Click the "Generate Hash" button</li>
            <li>The 64-character SHA-256 hash will be computed and displayed</li>
            <li>Copy the hash for use in your security applications</li>
            <li>The same input always produces the same deterministic output</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Blockchain & Cryptocurrency:</strong> Bitcoin and many cryptocurrencies use SHA-256 for mining and transaction verification</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Password Hashing:</strong> Securely storing passwords with proper salting and key derivation functions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Digital Signatures:</strong> Creating and verifying digital signatures for documents and software</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>SSL/TLS Certificates:</strong> Securing HTTPS connections and certificate validation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>File Integrity:</strong> Verifying file downloads and detecting unauthorized modifications</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Git Version Control:</strong> Git uses SHA-256 (in newer versions) for commit hashes</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our SHA-256 generator uses the Web Crypto API (<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">crypto.subtle.digest()</code>), which provides hardware-accelerated cryptographic operations. The algorithm processes data in 512-bit blocks and produces a 256-bit hash through a series of logical operations and modular additions.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            SHA-256 is designed to be computationally intensive, making brute-force attacks impractical. The hash is deterministic and irreversible - you cannot derive the original input from the hash. All computations are performed locally in your browser, ensuring your data never leaves your device.
          </p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-emerald-800 dark:text-emerald-200">
            <li>• SHA-256 hashes are always 64 hexadecimal characters (256 bits) long</li>
            <li>• For password storage, combine SHA-256 with PBKDF2, bcrypt, or Argon2</li>
            <li>• SHA-256 is currently considered secure with no known practical attacks</li>
            <li>• Bitcoin mining requires finding hashes with specific leading zeros</li>
            <li>• Always use a salt when hashing passwords to prevent rainbow table attacks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
