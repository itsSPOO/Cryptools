import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { vigenereEncrypt, vigenereDecrypt } from '@/utils/cryptoUtils';

export const VigenereTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleEncrypt = () => {
    try {
      setError('');
      if (!key.trim()) {
        setError('Please enter a key');
        return;
      }
      const result = vigenereEncrypt(input, key);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const handleDecrypt = () => {
    try {
      setError('');
      if (!key.trim()) {
        setError('Please enter a key');
        return;
      }
      const result = vigenereDecrypt(input, key);
      setOutput(result);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  return (
    <ToolCard
      title="Vigenère Cipher"
      description="Polyalphabetic substitution cipher using a keyword"
      helpText="The Vigenère cipher uses a keyword to determine different Caesar shifts for each letter. Each letter of the key determines the shift for the corresponding letter in the plaintext. The key repeats if shorter than the text."
      codeSnippet={`// Vigenère Encrypt
function vigenereEncrypt(text, key) {
  key = key.toUpperCase();
  let keyIndex = 0;
  return text.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      const base = char <= 'Z' ? 65 : 97;
      const shift = key.charCodeAt(keyIndex % key.length) - 65;
      keyIndex++;
      return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    }
    return char;
  }).join('');
}`}
    >
      <div className="space-y-4">
        <InputField
          label="Input Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encrypt/decrypt..."
          rows={6}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Encryption Key
          </label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Enter keyword (e.g., SECRET)"
            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
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
          example="'HELLO' with key 'KEY' → 'RIJVS'"
        />
      </div>
    </ToolCard>
  );
};
