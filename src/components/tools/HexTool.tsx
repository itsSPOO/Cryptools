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
    <ToolCard
      title="Hex ↔ ASCII Converter"
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
  );
};
