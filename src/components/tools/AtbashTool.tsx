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
    </div>
  );
};
