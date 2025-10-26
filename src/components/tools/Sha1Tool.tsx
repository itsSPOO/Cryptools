import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { sha1Hash } from '@/utils/cryptoUtils';

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
    </div>
  );
};
