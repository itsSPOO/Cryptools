import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { atbashCipher } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

export const AtbashTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleApply = () => {
    const result = atbashCipher(input);
    setOutput(result);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-rose-600 to-red-600 dark:from-rose-400 dark:to-red-400 bg-clip-text text-transparent mb-8">
        Atbash Cipher Encoder & Decoder
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Encode and decode text using the Atbash Cipher, one of the oldest known encryption methods dating back to ancient Hebrew cryptography around 500-600 BCE. This elegant monoalphabetic substitution cipher reverses the alphabet completely, replacing the first letter with the last, the second with the second-to-last, and so on (A↔Z, B↔Y, C↔X, etc.). The name "Atbash" comes from the first, last, second, and second-to-last letters of the Hebrew alphabet (Aleph, Tav, Bet, Shin). Like ROT13, Atbash is self-inverse, meaning applying the cipher twice returns the original text. It even appears in the Hebrew Bible in encrypted form. Perfect for learning about historical cryptography, understanding substitution ciphers, and exploring ancient encryption techniques.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
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

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          The Atbash Cipher has been used for thousands of years and even appears in the Hebrew Bible. While simple by modern standards, it demonstrates fundamental cryptographic principles and remains a fascinating piece of cryptographic history. Our tool processes everything locally in your browser for instant results and complete privacy.
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
            What is the Atbash Cipher?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Atbash Cipher is one of the oldest known encryption methods, dating back to ancient Hebrew cryptography around 500-600 BCE. It's a simple monoalphabetic substitution cipher that reverses the alphabet completely: the first letter is replaced with the last, the second with the second-to-last, and so on (A↔Z, B↔Y, C↔X, etc.).
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            The name "Atbash" comes from the first, last, second, and second-to-last letters of the Hebrew alphabet: Aleph (A), Tav (T), Bet (B), and Shin (Sh). The cipher even appears in the Hebrew Bible, where certain words are encrypted using this method. Like ROT13, Atbash is self-inverse - applying it twice returns the original text.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Atbash Cipher Tool
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Enter your text in the input field (letters will be transformed)</li>
            <li>Click the "Apply Atbash" button</li>
            <li>Each letter will be replaced with its reverse alphabet counterpart</li>
            <li>Click again on the output to decode back to the original text</li>
            <li>Numbers and special characters remain unchanged</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Historical Study:</strong> Understanding ancient encryption methods and biblical cryptography</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Education:</strong> Teaching basic substitution cipher concepts and cryptographic history</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Puzzle Creation:</strong> Designing simple cryptographic puzzles and treasure hunts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Religious Studies:</strong> Analyzing encrypted passages in ancient Hebrew texts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Quick Obfuscation:</strong> Simple text transformation for casual hiding</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Cryptography Introduction:</strong> First step in learning about substitution ciphers</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Atbash cipher works by mapping each letter to its reverse position in the alphabet. For the English alphabet, A (position 0) maps to Z (position 25), B (position 1) maps to Y (position 24), and so on. The formula is: encoded_position = 25 - original_position.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            This cipher is symmetric and self-inverse, meaning encryption and decryption use the same operation. While extremely simple to break with modern knowledge, it was effective in ancient times when literacy was limited and cryptanalysis was unknown. All processing happens locally in your browser for instant results.
          </p>
        </div>

        <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-rose-900 dark:text-rose-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-rose-800 dark:text-rose-200">
            <li>• Atbash is one of the oldest ciphers, dating back over 2,500 years</li>
            <li>• It appears in the Hebrew Bible (Jeremiah 25:26, 51:41)</li>
            <li>• The cipher is self-inverse: apply twice to get the original text</li>
            <li>• Only letters are affected; numbers and symbols pass through unchanged</li>
            <li>• Not secure for modern use - purely educational and historical</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
