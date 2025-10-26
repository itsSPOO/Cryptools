import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { md5Hash, generateCodeSnippet } from '@/utils/cryptoUtils';

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
        codeSnippet={generateCodeSnippet('md5', { input })}
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
    </div>
  );
};
