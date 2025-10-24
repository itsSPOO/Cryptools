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
    <ToolCard
      title="MD5 Hash Generator"
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
  );
};
