import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { atbashCipher } from '@/utils/cryptoUtils';

export const AtbashTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleApply = () => {
    const result = atbashCipher(input);
    setOutput(result);
  };

  return (
    <ToolCard
      title="Atbash Cipher"
      description="Hebrew substitution cipher reversing the alphabet"
      helpText="Atbash is a monoalphabetic substitution cipher where the first letter is replaced with the last, the second with the second-to-last, etc. (A↔Z, B↔Y, C↔X...). It's self-inverse like ROT13."
      codeSnippet={`// Atbash Cipher
const atbash = text => text.replace(/[a-zA-Z]/g, char => {
  const base = char <= 'Z' ? 65 : 97;
  return String.fromCharCode(base + (25 - (char.charCodeAt(0) - base)));
});`}
    >
      <div className="space-y-4">
        <InputField
          label="Input Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encrypt/decrypt..."
          rows={6}
        />

        <Button onClick={handleApply} variant="primary">
          Apply Atbash
        </Button>

        <OutputField
          label="Output"
          value={output}
          example="'HELLO' → 'SVOOL'"
        />

        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
          <p className="text-sm text-purple-800 dark:text-purple-200">
            💡 <strong>Fun Fact:</strong> Atbash is one of the oldest known ciphers, originally used for the Hebrew alphabet. Apply it twice to get back the original text.
          </p>
        </div>
      </div>
    </ToolCard>
  );
};
