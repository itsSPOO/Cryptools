import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { textToHex, hexToText } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

export const HexTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleToHex = () => {
    try {
      setError('');
      const result = textToHex(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const handleToText = () => {
    try {
      setError('');
      const result = hexToText(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-8">
        Hexadecimal Converter
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Convert text to hexadecimal (hex) and hex to text with our free Hexadecimal Converter tool. Hexadecimal is a base-16 numbering system that uses digits 0-9 and letters A-F to represent values, providing a more compact way to represent binary data. It's extensively used in programming for memory addresses, color codes in web design, MAC addresses, cryptographic keys, and data representation in debugging. Each character is converted to its corresponding two-digit hex ASCII code, making it essential for low-level programming, analyzing binary data, working with hex dumps, and understanding computer memory. Our converter provides accurate bidirectional conversion with instant results.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Convert text to hexadecimal representation and vice versa"
        helpText="Hexadecimal (base-16) uses digits 0-9 and letters A-F. Each character is represented by its hex ASCII code."
        codeSnippet={`// Text to Hex
const hex = text.split('').map(char => 
  char.charCodeAt(0).toString(16).padStart(2, '0')
).join(' ');

// Hex to Text
const text = hex.split(/\\s+/).map(h => 
  String.fromCharCode(parseInt(h, 16))
).join('');`}
      >
        <div className="space-y-4">
          <InputField
            label="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text or hex values..."
            rows={6}
            error={error}
          />

          <div className="flex gap-3">
            <Button onClick={handleToHex} variant="primary">
              To Hex
            </Button>
            <Button onClick={handleToText} variant="secondary">
              To Text
            </Button>
          </div>

          <OutputField
            label="Output"
            value={output}
            example="'ABC' → '41 42 43'"
          />
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Perfect for developers working with hex dumps, analyzing binary data, or converting color codes. Our hexadecimal converter provides accurate bidirectional conversion with instant results, all processed locally in your browser for maximum privacy and security.
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
            What is Hexadecimal?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hexadecimal (hex) is a base-16 numbering system that uses 16 distinct symbols: the numbers 0-9 represent values zero to nine, and the letters A-F represent values ten to fifteen. This system is widely used in computing because it provides a more human-friendly representation of binary-coded values. Each hexadecimal digit represents exactly four binary digits (bits), making it an efficient way to represent byte values and memory addresses.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            In text encoding, each character is converted to its ASCII or Unicode value, which is then represented as a two-digit hexadecimal number. For example, the letter 'A' has an ASCII value of 65 in decimal, which is 41 in hexadecimal. This conversion is fundamental in many areas of computer science and digital communications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Hexadecimal Converter
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Converting Text to Hexadecimal:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter your text in the input field (e.g., "Hello World")</li>
                <li>Click the "To Hex" button</li>
                <li>The output will show the hexadecimal representation with spaces between each byte (e.g., "48 65 6c 6c 6f 20 57 6f 72 6c 64")</li>
                <li>Copy the result using the copy button for use in your projects</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Converting Hexadecimal to Text:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter hexadecimal values in the input field (with or without spaces, e.g., "48656c6c6f" or "48 65 6c 6c 6f")</li>
                <li>Click the "To Text" button</li>
                <li>The output will display the decoded text</li>
                <li>If the hex values are invalid, an error message will appear</li>
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
              <span><strong>Web Development:</strong> Converting color codes (e.g., #FF5733) and understanding RGB values in hexadecimal format</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Network Administration:</strong> Working with MAC addresses, IP configurations, and network packet analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Debugging:</strong> Analyzing memory dumps, examining binary files, and troubleshooting low-level code issues</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Cryptography:</strong> Representing encryption keys, hash values, and digital signatures in a compact format</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Data Encoding:</strong> Converting binary data for transmission over text-based protocols or storage in databases</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Assembly Programming:</strong> Working with machine code instructions and memory addresses in low-level programming</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our hexadecimal converter uses JavaScript's built-in methods to ensure accurate and efficient conversion. When converting text to hex, each character is processed through <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">charCodeAt()</code> to get its Unicode value, then converted to base-16 using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">toString(16)</code>, and padded to ensure two-digit representation.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            For hex to text conversion, the input is split into individual hex values, parsed using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">parseInt()</code> with base 16, and converted back to characters using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">String.fromCharCode()</code>. All processing happens locally in your browser, ensuring your data remains private and secure.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• Hexadecimal values can be entered with or without spaces - both formats work perfectly</li>
            <li>• Each pair of hex digits represents one byte (8 bits) or one character</li>
            <li>• Hex values are case-insensitive: 'FF' and 'ff' are equivalent</li>
            <li>• Use the code snippet feature to implement hex conversion in your own JavaScript projects</li>
            <li>• For color codes, remember that #RRGGBB format uses three pairs of hex digits for Red, Green, and Blue</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
