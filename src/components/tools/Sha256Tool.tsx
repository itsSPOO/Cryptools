import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { sha256Hash, generateCodeSnippet } from '@/utils/cryptoUtils';

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
        codeSnippet={generateCodeSnippet('sha256', { input })}
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
    </div>
  );
};
