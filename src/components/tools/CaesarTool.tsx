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
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent mb-8">
        Caesar Cipher Encoder & Decoder
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Encrypt and decrypt text using the Caesar Cipher, one of the oldest and most famous encryption techniques in history. Named after Julius Caesar who used it for confidential military communications around 58 BC, this classical substitution cipher shifts each letter by a fixed number of positions in the alphabet. With our interactive tool, you can customize the shift value from 1 to 25 positions and instantly encrypt or decrypt messages. The famous ROT13 variant uses a shift of 13. Perfect for learning cryptography fundamentals, educational purposes, understanding historical encryption methods, and creating simple puzzles. While not secure for modern use, it demonstrates core cryptographic principles.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
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

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          The Caesar Cipher is an excellent introduction to cryptography and encryption concepts. While not secure for modern use, it demonstrates fundamental principles of substitution ciphers. Our tool includes the famous ROT13 variant (shift of 13) and processes everything locally in your browser for complete privacy.
        </p>
      </div>
    </div>
  );
};
