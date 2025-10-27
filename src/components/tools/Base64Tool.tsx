import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { base64Encode, base64Decode, generateCodeSnippet } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

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

      {/* Ad Banner */}
      <div className="my-8">
        <AdBannerInFeed />
      </div>

      {/* Detailed Description Section */}
      <div className="mt-12 space-y-8 bg-white dark:bg-dark-surface rounded-xl p-6 md:p-8 border border-light-border dark:border-dark-border">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What is Base64 Encoding?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It uses 64 printable characters (A-Z, a-z, 0-9, +, /) to encode data, making it safe for transmission over systems that only support text content. Each Base64 digit represents exactly 6 bits of data, and three bytes (24 bits) of input data are encoded into four Base64 characters.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            The encoding process converts binary data into a format that can be safely transmitted through email systems, embedded in URLs, or stored in text-based formats like JSON and XML. The '=' character is used as padding to ensure the encoded output length is a multiple of 4 characters.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Base64 Encoder/Decoder
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Encoding Text to Base64:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Type or paste your plain text into the input field</li>
                <li>Click the "Encode" button</li>
                <li>The Base64 encoded string will appear in the output field</li>
                <li>Use the copy button to copy the encoded result</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Decoding Base64 to Text:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Paste your Base64 encoded string into the input field</li>
                <li>Click the "Decode" button</li>
                <li>The decoded plain text will be displayed in the output</li>
                <li>If the Base64 string is invalid, an error message will appear</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Data URIs:</strong> Embedding images, fonts, and other files directly in HTML, CSS, or JavaScript</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>API Communication:</strong> Encoding authentication credentials, tokens, and binary data for HTTP requests</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Email Attachments:</strong> Encoding file attachments in MIME format for email transmission</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Data Storage:</strong> Storing binary data in JSON, XML, or other text-based formats</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>URL Parameters:</strong> Safely passing binary data through URL query strings</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Basic Authentication:</strong> Encoding username:password combinations for HTTP Basic Auth headers</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our Base64 encoder uses JavaScript's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">btoa()</code> function for encoding and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">atob()</code> for decoding. The tool properly handles Unicode characters by first encoding them to UTF-8 before Base64 conversion, ensuring compatibility with international characters and emojis.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Base64 encoding increases the data size by approximately 33% (4 characters for every 3 bytes of input). While this makes the data larger, it ensures safe transmission through systems that might corrupt binary data. All processing is done client-side in your browser, so your data never leaves your device.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li>• Base64 is encoding, not encryption - it doesn't provide security, only data format conversion</li>
            <li>• The '=' character at the end is padding and can be safely removed in some contexts</li>
            <li>• For URL-safe Base64, replace '+' with '-' and '/' with '_'</li>
            <li>• Base64 encoded data is about 33% larger than the original binary data</li>
            <li>• Use Base64 for data transmission, not for storing passwords or sensitive data</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
