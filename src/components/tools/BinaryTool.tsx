import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { textToBinary, binaryToText } from '@/utils/cryptoUtils';

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
    </div>
  );
};
