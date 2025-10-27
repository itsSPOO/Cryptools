import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { md5Hash } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

export const Md5Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    const result = md5Hash(input);
    setOutput(result);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8">
        MD5 Hash Generator
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Generate MD5 hash values instantly with our free online MD5 Hash Generator. MD5 (Message Digest Algorithm 5) is a widely-used cryptographic hash function that produces a 128-bit hash value represented as 32 hexadecimal characters. While MD5 is no longer recommended for security-critical applications due to known vulnerabilities, it remains highly useful for checksums, data integrity verification, file identification, and legacy system compatibility. Our tool processes everything locally in your browser with no data transmission, ensuring complete privacy and security for all your hashing needs.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Generate MD5 hash (128-bit) from text"
        helpText="MD5 produces a 128-bit hash value (32 hex characters). Note: MD5 is cryptographically broken and should not be used for security purposes. Use SHA-256 instead for security-critical applications."
        codeSnippet={`// MD5 Hash
const hash = CryptoJS.MD5("${input || 'your text'}").toString();
console.log(hash);`}
      >
        <div className="space-y-4">
          <InputField
            label="Input Text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to hash..."
            rows={6}
          />

          <Button onClick={handleGenerate} variant="primary">
            Generate Hash
          </Button>

          <OutputField
            label="MD5 Hash (Hex)"
            value={output}
            example="'hello' → '5d41402abc4b2a76b9719d911017c592'"
          />

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <p className="text-sm text-orange-800 dark:text-orange-200">
              ⚠️ <strong>Security Warning:</strong> MD5 is not secure for cryptographic purposes. Use SHA-256 for security-sensitive applications.
            </p>
          </div>
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Our MD5 Hash Generator provides a quick and easy way to create MD5 hashes for various purposes including file integrity checks, database indexing, and legacy system compatibility. Remember that for password hashing and security-sensitive operations, modern alternatives like SHA-256, SHA-3, or bcrypt are strongly recommended. All processing happens directly in your browser with no data sent to external servers.
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
            What is MD5 Hashing?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            MD5 (Message Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value, typically expressed as a 32-character hexadecimal number. Developed by Ronald Rivest in 1991, MD5 was designed to be a fast, one-way function that creates a unique fingerprint for any input data.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The same input will always produce the same MD5 hash, but even a tiny change in the input will result in a completely different hash. This property makes MD5 useful for verifying data integrity and detecting file modifications.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mt-4">
            <p className="text-orange-800 dark:text-orange-200">
              <strong>⚠️ Important Security Note:</strong> MD5 is cryptographically broken and should NOT be used for security purposes like password hashing or digital signatures. Use SHA-256 or stronger algorithms for security-critical applications.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the MD5 Hash Generator
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Enter your text or data in the input field</li>
            <li>Click the "Generate Hash" button</li>
            <li>The 32-character MD5 hash will appear in the output field</li>
            <li>Copy the hash using the copy button for your needs</li>
            <li>The same input will always produce the same hash output</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>File Integrity:</strong> Verifying downloaded files haven't been corrupted or tampered with</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Database Indexing:</strong> Creating unique identifiers for database records and caching keys</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Checksums:</strong> Generating checksums for data validation and error detection</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Legacy Systems:</strong> Working with older systems that still require MD5 hashes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Duplicate Detection:</strong> Identifying duplicate files or content by comparing hashes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Non-Security Uses:</strong> ETags, cache validation, and other non-cryptographic applications</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our MD5 generator uses the CryptoJS library to compute MD5 hashes. The algorithm processes input data in 512-bit blocks and produces a 128-bit hash value. The hash is deterministic, meaning the same input always produces the same output, making it reliable for integrity checks.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            MD5 was designed to be fast, which is both an advantage for performance and a disadvantage for security (making brute-force attacks easier). All hashing is performed locally in your browser using JavaScript, ensuring your data remains private and never leaves your device.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 dark:text-red-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-red-800 dark:text-red-200">
            <li>• MD5 hashes are always 32 hexadecimal characters (128 bits) long</li>
            <li>• MD5 is a one-way function - you cannot reverse a hash to get the original input</li>
            <li>• For password storage, use bcrypt, Argon2, or PBKDF2 instead of MD5</li>
            <li>• MD5 collisions have been found - two different inputs can produce the same hash</li>
            <li>• Use SHA-256 or SHA-3 for any security-sensitive applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
