import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { textToBinary, binaryToText } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

export const BinaryTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleToBinary = () => {
    try {
      setError('');
      const result = textToBinary(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const handleToText = () => {
    try {
      setError('');
      const result = binaryToText(input);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-8">
        Binary Text Converter
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Convert text to binary code and binary to text with our free Binary Text Converter tool. Binary is the fundamental language of computers, using only two digits (0 and 1) to represent all data and instructions. Each character is converted to its 8-bit binary representation (one byte), making it essential for understanding computer science fundamentals, low-level programming, digital communications, and data encoding. Perfect for students learning computer architecture, developers debugging binary data, or anyone curious about how computers internally represent text and information. This tool provides instant bidirectional conversion with complete accuracy and privacy.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Convert text to binary representation and vice versa"
        helpText="Binary is a base-2 numeral system using only 0 and 1. Each character is represented as an 8-bit binary number (byte)."
        codeSnippet={`// Text to Binary
const binary = text.split('').map(char => 
  char.charCodeAt(0).toString(2).padStart(8, '0')
).join(' ');

// Binary to Text
const text = binary.split(/\\s+/).map(bin => 
  String.fromCharCode(parseInt(bin, 2))
).join('');`}
      >
        <div className="space-y-4">
          <InputField
            label="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text or binary..."
            rows={6}
            error={error}
          />

          <div className="flex gap-3">
            <Button onClick={handleToBinary} variant="primary">
              To Binary
            </Button>
            <Button onClick={handleToText} variant="secondary">
              To Text
            </Button>
          </div>

          <OutputField
            label="Output"
            value={output}
            example="'Hi' → '01001000 01101001'"
          />
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Perfect for students learning computer science, developers debugging low-level code, or anyone curious about how computers represent text. Our binary converter handles ASCII characters seamlessly and processes everything locally in your browser for maximum privacy and speed.
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
            Understanding Binary Code
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Binary is the fundamental language of computers, using only two digits: 0 and 1. Every piece of data in a computer - text, images, videos, programs - is ultimately stored and processed as sequences of binary digits (bits). In text representation, each character is assigned a numeric value (ASCII or Unicode), which is then converted to its binary equivalent using 8 bits (1 byte) per character.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            For example, the letter 'A' has an ASCII value of 65, which in binary is 01000001. Understanding binary is essential for computer science, digital electronics, and low-level programming, as it reveals how computers actually store and manipulate information at the most basic level.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Binary Converter
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Converting Text to Binary:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter your text in the input field (supports all ASCII characters)</li>
                <li>Click the "To Binary" button</li>
                <li>Each character will be converted to its 8-bit binary representation</li>
                <li>Binary codes are separated by spaces for easy reading</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Converting Binary to Text:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter binary code (with or without spaces, e.g., "01001000 01101001" or "0100100001101001")</li>
                <li>Click the "To Text" button</li>
                <li>The tool will convert each 8-bit sequence back to its corresponding character</li>
                <li>Invalid binary sequences will trigger an error message</li>
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
              <span><strong>Education:</strong> Learning how computers represent text and understanding the basics of digital data</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Programming:</strong> Debugging bitwise operations and understanding low-level data manipulation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Data Analysis:</strong> Examining binary data structures and file formats</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Cryptography:</strong> Understanding binary representations in encryption algorithms</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Digital Electronics:</strong> Working with binary signals and logic circuits</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>CTF Challenges:</strong> Solving capture-the-flag puzzles that involve binary encoding</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our binary converter uses JavaScript's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">charCodeAt()</code> method to get each character's ASCII value, then converts it to binary using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">toString(2)</code>. Each binary number is padded to 8 bits using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">padStart(8, '0')</code> to maintain standard byte representation.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            For binary-to-text conversion, the input is split into 8-bit chunks, each parsed as a binary number using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">parseInt(chunk, 2)</code>, and converted to characters using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">String.fromCharCode()</code>. All processing happens locally in your browser for instant results and complete privacy.
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-indigo-800 dark:text-indigo-200">
            <li>• Each character requires exactly 8 bits (1 byte) in standard ASCII encoding</li>
            <li>• Binary numbers can be entered with or without spaces - both formats work</li>
            <li>• The leftmost bit in each byte is the most significant bit (MSB)</li>
            <li>• Binary 00000000 to 01111111 represents ASCII characters 0-127</li>
            <li>• Use this tool to understand bitwise operations like AND, OR, XOR in your code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
