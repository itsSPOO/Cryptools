import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { textToHex, hexToText } from '@/utils/cryptoUtils';

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
    </div>
  );
};
