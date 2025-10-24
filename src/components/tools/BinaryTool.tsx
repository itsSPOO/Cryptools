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
    <ToolCard
      title="Binary Converter"
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
  );
};
