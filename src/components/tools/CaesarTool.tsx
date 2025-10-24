import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { caesarEncrypt, caesarDecrypt, generateCodeSnippet } from '@/utils/cryptoUtils';

export const CaesarTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [shift, setShift] = useState(3);
  const [error, setError] = useState('');

  const handleEncrypt = () => {
    try {
      setError('');
      const result = caesarEncrypt(input, shift);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const handleDecrypt = () => {
    try {
      setError('');
      const result = caesarDecrypt(input, shift);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  return (
    <ToolCard
      title="Caesar Cipher"
      description="Classical substitution cipher with customizable shift value"
      helpText="The Caesar cipher shifts each letter by a fixed number of positions in the alphabet. Named after Julius Caesar who used it for military communications. A shift of 3 means A→D, B→E, etc."
      codeSnippet={generateCodeSnippet('caesarCipher', { input, shift })}
    >
      <div className="space-y-4">
        <InputField
          label="Input Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encrypt/decrypt..."
          rows={6}
          error={error}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Shift Value: {shift}
          </label>
          <input
            type="range"
            min="1"
            max="25"
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>1</span>
            <span>13 (ROT13)</span>
            <span>25</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleEncrypt} variant="primary">
            Encrypt
          </Button>
          <Button onClick={handleDecrypt} variant="secondary">
            Decrypt
          </Button>
        </div>

        <OutputField
          label="Output"
          value={output}
          example="'HELLO' with shift 3 → 'KHOOR'"
        />
      </div>
    </ToolCard>
  );
};
