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
    <ToolCard
      title="SHA-1 Hash Generator"
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
  );
};
