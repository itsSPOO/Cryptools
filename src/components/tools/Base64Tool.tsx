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
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-8">
        Base64 Encoder & Decoder
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Encode and decode Base64 strings effortlessly with our free online Base64 encoder and decoder tool. Base64 is a binary-to-text encoding scheme that converts binary data into ASCII string format using 64 printable characters (A-Z, a-z, 0-9, +, /). It's extensively used in web development for encoding data in URLs, embedding images directly in HTML and CSS, handling email attachments, transmitting data through APIs, and storing binary data in text-based formats like JSON and XML. Our tool provides instant bidirectional conversion with complete privacy as all processing happens locally in your browser.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
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

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Whether you're a developer working with APIs, handling data URIs, or need to encode binary data for transmission, our Base64 encoder/decoder makes the process simple and secure. The tool supports both encoding plain text to Base64 and decoding Base64 strings back to readable text, with real-time processing and error handling for invalid inputs.
        </p>
      </div>
    </div>
  );
};
