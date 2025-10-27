import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { caesarEncrypt, caesarDecrypt, generateCodeSnippet } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

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

      {/* Ad Banner */}
      <div className="my-8">
        <AdBannerInFeed />
      </div>

      {/* Detailed Description Section */}
      <div className="mt-12 space-y-8 bg-white dark:bg-dark-surface rounded-xl p-6 md:p-8 border border-light-border dark:border-dark-border">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What is the Caesar Cipher?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Caesar Cipher, also known as Caesar's Code or the shift cipher, is one of the oldest and simplest encryption techniques. Named after Julius Caesar, who used it to protect military communications around 58 BC, this cipher works by shifting each letter in the plaintext by a fixed number of positions down the alphabet.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            For example, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. When reaching the end of the alphabet, it wraps around: 'X' becomes 'A', 'Y' becomes 'B', and 'Z' becomes 'C'. Despite its historical significance, the Caesar Cipher is easily broken and should not be used for securing sensitive information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Caesar Cipher Tool
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Encrypting Text:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter your plaintext message in the input field</li>
                <li>Select a shift value (1-25) or use the ROT13 preset</li>
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
                <li>Use the same shift value that was used for encryption</li>
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
              <span><strong>Education:</strong> Learning basic cryptography concepts and substitution cipher principles</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Puzzles & Games:</strong> Creating simple word puzzles, escape room clues, and treasure hunts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>ROT13:</strong> Obscuring spoilers, hints, and answers in forums and online discussions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Historical Study:</strong> Understanding ancient encryption methods and their evolution</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>CTF Challenges:</strong> Solving beginner-level capture-the-flag cryptography challenges</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Fun Messages:</strong> Sending simple encoded messages to friends for entertainment</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Caesar Cipher is a type of substitution cipher where each letter is replaced by a letter a fixed number of positions away in the alphabet. Our implementation preserves the case of letters (uppercase remains uppercase) and leaves non-alphabetic characters unchanged. The shift value can range from 1 to 25 (a shift of 26 would result in the original text).
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            ROT13 is a special case of the Caesar Cipher with a shift of 13. Because there are 26 letters in the English alphabet, ROT13 is its own inverse - applying ROT13 twice returns the original text. This makes it particularly convenient for obscuring text that can be easily revealed. All encryption and decryption happens locally in your browser.
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-amber-800 dark:text-amber-200">
            <li>• The Caesar Cipher can be broken in seconds with frequency analysis</li>
            <li>• There are only 25 possible shifts, making brute-force trivial</li>
            <li>• ROT13 is commonly used in online forums to hide spoilers</li>
            <li>• Numbers and special characters are not affected by the cipher</li>
            <li>• Never use Caesar Cipher for actual security - it's for learning and fun only!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
