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
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:from-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent mb-8">
        Vigenère Cipher Encoder & Decoder
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Encrypt and decrypt messages using the Vigenère Cipher, a classic polyalphabetic substitution cipher invented by Blaise de Vigenère in the 16th century. Unlike simple monoalphabetic Caesar ciphers, the Vigenère cipher uses a keyword to apply different Caesar shifts to each letter position, making it significantly more secure against frequency analysis attacks. Each letter of the keyword determines the shift amount for the corresponding letter in the plaintext, and the keyword repeats cyclically if it's shorter than the message. This cipher was considered unbreakable for over 300 years and earned the nickname "le chiffre indéchiffrable" (the indecipherable cipher). Perfect for learning advanced cryptography concepts and understanding polyalphabetic encryption.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
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

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          The Vigenère Cipher represents a significant advancement in classical cryptography. While modern computers can break it through frequency analysis, it remains an excellent educational tool for understanding polyalphabetic substitution and the evolution of encryption methods. All encryption and decryption happens locally in your browser for complete privacy.
        </p>
      </div>
    </div>
  );
};
