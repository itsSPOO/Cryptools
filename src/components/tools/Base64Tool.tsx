import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { base64Encode, base64Decode, generateCodeSnippet } from '@/utils/cryptoUtils';

export const Base64Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode] = useState<'encode' | 'decode'>('encode');

  const handleEncode = () => {
    try {
      setError('');
      const result = base64Encode(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const handleDecode = () => {
    try {
      setError('');
      const result = base64Decode(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const codeSnippet = generateCodeSnippet(
    mode === 'encode' ? 'base64Encode' : 'base64Decode',
    { input }
  );

  return (
    <ToolCard
      title="Base64 Encode/Decode"
      description="Convert text to Base64 encoding or decode Base64 strings back to text"
      helpText="Base64 is a binary-to-text encoding scheme that represents binary data in ASCII format. Commonly used for encoding data in URLs, emails, and data URIs."
      codeSnippet={codeSnippet}
    >
      <div className="space-y-4">
        <InputField
          label="Input Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 string to decode...'}
          rows={6}
          error={error}
        />

        <div className="flex gap-3">
          <Button onClick={handleEncode} variant="primary">
            Encode
          </Button>
          <Button onClick={handleDecode} variant="secondary">
            Decode
          </Button>
        </div>

        <OutputField
          label="Output"
          value={output}
          example="'Hello World' → 'SGVsbG8gV29ybGQ='"
        />
      </div>
    </ToolCard>
  );
};
