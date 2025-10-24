import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { urlEncode, urlDecode } from '@/utils/cryptoUtils';

export const UrlTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleEncode = () => {
    try {
      setError('');
      const result = urlEncode(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const handleDecode = () => {
    try {
      setError('');
      const result = urlDecode(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  return (
    <ToolCard
      title="URL Encode/Decode"
      description="Encode special characters for URLs or decode URL-encoded strings"
      helpText="URL encoding converts characters into a format that can be transmitted over the Internet. Special characters are replaced with % followed by hex digits."
      codeSnippet={`// URL Encode
const encoded = encodeURIComponent(text);

// URL Decode
const decoded = decodeURIComponent(encoded);`}
    >
      <div className="space-y-4">
        <InputField
          label="Input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or URL-encoded string..."
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
          example="'hello world' → 'hello%20world'"
        />
      </div>
    </ToolCard>
  );
};
