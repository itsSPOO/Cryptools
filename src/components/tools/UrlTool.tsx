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
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-8">
        URL Encoder & Decoder
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Encode and decode URLs instantly with our free URL Encoder and Decoder tool. URL encoding, also known as percent-encoding, converts special characters into a format that can be safely transmitted over the internet in web addresses. Special characters, spaces, and non-ASCII characters are replaced with a percent sign (%) followed by two hexadecimal digits representing the character's ASCII code. This encoding is essential for web development, REST API integration, handling query parameters and form data in URLs, and ensuring proper transmission of international characters. Our tool handles all special characters correctly and processes data entirely in your browser for complete privacy.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
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

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Whether you're building web applications, working with REST APIs, or debugging URL parameters, our URL encoder/decoder simplifies the process. The tool handles all special characters correctly and processes data entirely in your browser for complete privacy and instant results.
        </p>
      </div>
    </div>
  );
};
