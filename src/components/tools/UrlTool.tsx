import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { urlEncode, urlDecode } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

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

      {/* Ad Banner */}
      <div className="my-8">
        <AdBannerInFeed />
      </div>

      {/* Detailed Description Section */}
      <div className="mt-12 space-y-8 bg-white dark:bg-dark-surface rounded-xl p-6 md:p-8 border border-light-border dark:border-dark-border">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What is URL Encoding?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            URL encoding, also known as percent-encoding, is a mechanism for encoding information in a Uniform Resource Identifier (URI). URLs can only contain a limited set of characters from the ASCII character set. Any characters outside this set, including spaces and special characters, must be encoded using a '%' followed by two hexadecimal digits representing the character's ASCII code.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            For example, a space character is encoded as %20, and an ampersand (&) becomes %26. This encoding ensures that URLs remain valid and can be transmitted correctly across different systems and protocols without ambiguity or data loss.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the URL Encoder/Decoder
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Encoding Text for URLs:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter the text or URL parameters you want to encode</li>
                <li>Click the "Encode" button</li>
                <li>Special characters will be converted to their percent-encoded equivalents</li>
                <li>Copy the encoded result for use in your URLs or API requests</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Decoding URL-Encoded Text:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Paste your URL-encoded string (e.g., "Hello%20World%21")</li>
                <li>Click the "Decode" button</li>
                <li>The tool will convert percent-encoded characters back to their original form</li>
                <li>Invalid encoding sequences will be handled gracefully</li>
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
              <span><strong>Query Parameters:</strong> Encoding search terms, filters, and data passed through URL query strings</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>API Development:</strong> Properly formatting parameters for REST API calls and webhooks</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Form Submissions:</strong> Encoding form data for application/x-www-form-urlencoded content type</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Link Sharing:</strong> Creating shareable URLs with encoded parameters for social media and emails</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Debugging:</strong> Decoding URL parameters to understand what data is being transmitted</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>SEO:</strong> Creating clean, properly encoded URLs for better search engine optimization</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our URL encoder uses JavaScript's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">encodeURIComponent()</code> function, which encodes all characters except: A-Z a-z 0-9 - _ . ! ~ * ' ( ). This is the most comprehensive encoding method and is suitable for encoding individual URI components like query parameters.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            For decoding, we use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">decodeURIComponent()</code> which reverses the encoding process. The tool handles UTF-8 encoding properly, ensuring international characters are encoded and decoded correctly. All processing is done locally in your browser for maximum privacy and speed.
          </p>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-cyan-800 dark:text-cyan-200">
            <li>• Always encode URL parameters to prevent breaking URLs with special characters</li>
            <li>• Spaces can be encoded as %20 or + in query strings (both are valid)</li>
            <li>• Don't encode the entire URL - only encode the parameter values</li>
            <li>• Use encodeURIComponent() for parameters, encodeURI() for full URLs</li>
            <li>• Double encoding can cause issues - decode first if you're unsure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
