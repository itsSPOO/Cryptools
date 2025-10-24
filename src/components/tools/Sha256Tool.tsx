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
    <ToolCard
      title="SHA-256 Hash Generator"
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
  );
};
