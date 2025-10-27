import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { vigenereEncrypt, vigenereDecrypt } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

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

      {/* Ad Banner */}
      <div className="my-8">
        <AdBannerInFeed />
      </div>

      {/* Detailed Description Section */}
      <div className="mt-12 space-y-8 bg-white dark:bg-dark-surface rounded-xl p-6 md:p-8 border border-light-border dark:border-dark-border">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What is the Vigenère Cipher?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Vigenère Cipher is a method of encrypting alphabetic text using a series of different Caesar ciphers based on the letters of a keyword. Invented by Blaise de Vigenère in the 16th century, it was considered unbreakable for over 300 years and was nicknamed "le chiffre indéchiffrable" (the indecipherable cipher).
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Unlike simple substitution ciphers where each letter is always replaced by the same letter, the Vigenère cipher uses a keyword to apply different shifts to each letter. Each letter of the keyword determines how many positions to shift the corresponding letter in the plaintext. If the keyword is shorter than the message, it repeats cyclically.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Vigenère Cipher Tool
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Encrypting Text:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter your plaintext message in the input field</li>
                <li>Enter a keyword (e.g., "SECRET") - longer keywords are more secure</li>
                <li>Click the "Encrypt" button</li>
                <li>The encrypted ciphertext will appear in the output</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Decrypting Text:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter the encrypted ciphertext</li>
                <li>Enter the same keyword that was used for encryption</li>
                <li>Click the "Decrypt" button</li>
                <li>The original plaintext will be revealed</li>
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
              <span><strong>Education:</strong> Teaching polyalphabetic substitution and advanced cryptography concepts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Historical Study:</strong> Understanding Renaissance-era encryption and its evolution</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Puzzle Creation:</strong> Designing challenging cryptographic puzzles and escape room clues</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>CTF Challenges:</strong> Intermediate-level capture-the-flag cryptography problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Literary References:</strong> Understanding ciphers in historical texts and novels</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Cryptanalysis Practice:</strong> Learning frequency analysis and Kasiski examination techniques</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Vigenère cipher uses a tabula recta (Vigenère square) - a 26×26 grid of letters where each row represents a Caesar cipher with a different shift. For encryption, you find the row corresponding to the key letter and the column corresponding to the plaintext letter; their intersection is the ciphertext letter.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            The cipher's strength comes from using multiple Caesar shifts, making simple frequency analysis ineffective. However, if the key length is known or can be determined (using Kasiski examination or index of coincidence), the cipher can be broken by treating it as multiple Caesar ciphers. All encryption and decryption is performed locally in your browser.
          </p>
        </div>

        <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-pink-800 dark:text-pink-200">
            <li>• Longer keywords provide better security than shorter ones</li>
            <li>• Avoid using dictionary words as keys - they're easier to crack</li>
            <li>• The Vigenère cipher is vulnerable to Kasiski examination attacks</li>
            <li>• For maximum security, use a key as long as the message (one-time pad)</li>
            <li>• Modern computers can break Vigenère ciphers quickly - don't use for real security</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
