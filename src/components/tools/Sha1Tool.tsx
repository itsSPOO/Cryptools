import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { sha1Hash } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

export const Sha1Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await sha1Hash(input);
      setOutput(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent mb-8">
        SHA-1 Hash Generator
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Generate SHA-1 hash values with our free online SHA-1 Hash Generator tool. SHA-1 (Secure Hash Algorithm 1) produces a 160-bit hash value represented as 40 hexadecimal characters from any input text. While SHA-1 was extensively used in the past for digital signatures, SSL certificates, and version control systems like Git, it's now considered cryptographically weak due to discovered collision vulnerabilities. This tool remains useful for legacy system compatibility, file integrity verification in non-critical contexts, and educational purposes to understand hash functions. However, for any security-critical applications, we strongly recommend using SHA-256 or stronger alternatives for better protection.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Generate SHA-1 hash (160-bit) from text"
        helpText="SHA-1 produces a 160-bit hash value (40 hex characters). While more secure than MD5, SHA-1 is also considered weak. Use SHA-256 for better security."
        codeSnippet={`// SHA-1 Hash
async function sha1(text) {
  const buffer = await crypto.subtle.digest('SHA-1', 
    new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0')).join('');
}
sha1("${input || 'your text'}").then(console.log);`}
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
            label="SHA-1 Hash (Hex)"
            value={output}
            example="'hello' → 'aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d'"
          />

          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              ⚠️ <strong>Note:</strong> SHA-1 is deprecated for security purposes. Consider using SHA-256 instead.
            </p>
          </div>
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Our SHA-1 generator uses the Web Crypto API for fast and secure hash generation directly in your browser. While SHA-1 should not be used for new security implementations, it remains useful for verifying file integrity in legacy systems and non-cryptographic applications. All processing happens locally with no data transmission to external servers.
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
            What is SHA-1?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function that produces a 160-bit (20-byte) hash value, typically displayed as a 40-character hexadecimal number. Designed by the NSA and published in 1995, SHA-1 was widely used for decades in digital signatures, SSL certificates, and version control systems.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            However, SHA-1 is now considered cryptographically broken due to discovered collision vulnerabilities. In 2017, researchers demonstrated a practical collision attack, making it unsafe for security-critical applications. Major browsers and certificate authorities have deprecated SHA-1 for SSL/TLS certificates.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ Security Warning:</strong> SHA-1 is deprecated for security purposes. Use SHA-256 or SHA-3 for any security-critical applications.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the SHA-1 Hash Generator
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Enter your text or data in the input field</li>
            <li>Click the "Generate Hash" button</li>
            <li>The 40-character SHA-1 hash will be computed and displayed</li>
            <li>Copy the hash for your legacy system or verification needs</li>
            <li>Remember: same input always produces the same hash</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Legacy Systems:</strong> Working with older systems that still require SHA-1 hashes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Git Version Control:</strong> Git uses SHA-1 for commit hashes (though migrating to SHA-256)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>File Integrity:</strong> Verifying file checksums in non-security contexts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Database Indexing:</strong> Creating unique identifiers for non-sensitive data</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Educational Purposes:</strong> Learning about hash functions and their evolution</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Compatibility:</strong> Interfacing with systems that haven't migrated to SHA-256</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our SHA-1 generator uses the Web Crypto API (<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">crypto.subtle.digest()</code>) for hardware-accelerated hash computation. The algorithm processes data in 512-bit blocks and produces a 160-bit hash through bitwise operations and modular arithmetic.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            SHA-1 was designed to be faster than SHA-256 while providing adequate security for its time. However, advances in computing power and cryptanalysis have made collision attacks practical. All hashing is performed locally in your browser, ensuring your data remains private.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-orange-800 dark:text-orange-200">
            <li>• SHA-1 hashes are always 40 hexadecimal characters (160 bits) long</li>
            <li>• Collision attacks have been demonstrated - don't use for security</li>
            <li>• Git is transitioning from SHA-1 to SHA-256 for better security</li>
            <li>• For new projects, always use SHA-256 or stronger algorithms</li>
            <li>• SHA-1 is acceptable only for non-security checksums and legacy compatibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
