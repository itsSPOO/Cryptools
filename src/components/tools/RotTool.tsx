import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { rot13, rot47 } from '@/utils/cryptoUtils';

export const RotTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRot13 = () => {
    const result = rot13(input);
    setOutput(result);
  };

  const handleRot47 = () => {
    const result = rot47(input);
    setOutput(result);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-8">
        ROT13 & ROT47 Cipher
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Encode and decode text using ROT13 and ROT47 ciphers with our free online encryption tool. ROT13 is a simple letter substitution cipher that rotates the alphabet by exactly 13 positions (A↔N, B↔O, C↔P), making it a special case of the Caesar cipher. ROT47 extends this concept to all 94 printable ASCII characters with a rotation of 47 positions, including numbers and special symbols. Both ciphers are self-inverse, meaning applying the same operation twice returns the original text. Commonly used in online forums and newsgroups to hide spoilers, puzzle solutions, and potentially offensive content. Perfect for quick text obfuscation and educational demonstrations of symmetric encryption.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Letter substitution ciphers with fixed rotation"
        helpText="ROT13 rotates letters by 13 positions (A↔N, B↔O). ROT47 rotates all printable ASCII characters by 47 positions. Both are self-inverse: applying twice returns the original text."
        codeSnippet={`// ROT13 (letters only)
const rot13 = text => text.replace(/[a-zA-Z]/g, char => {
  const base = char <= 'Z' ? 65 : 97;
  return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
});

// ROT47 (all printable ASCII)
const rot47 = text => text.replace(/[!-~]/g, char => 
  String.fromCharCode(33 + ((char.charCodeAt(0) - 33 + 47) % 94))
);`}
      >
        <div className="space-y-4">
          <InputField
            label="Input Text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to rotate..."
            rows={6}
          />

          <div className="flex gap-3">
            <Button onClick={handleRot13} variant="primary">
              Apply ROT13
            </Button>
            <Button onClick={handleRot47} variant="secondary">
              Apply ROT47
            </Button>
          </div>

          <OutputField
            label="Output"
            value={output}
            example="ROT13: 'HELLO' → 'URYYB' | ROT47: 'Hello!' → '96==@P'"
          />

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 <strong>Tip:</strong> Both ROT13 and ROT47 are self-inverse. Apply the same operation twice to get back the original text.
            </p>
          </div>
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          ROT13 and ROT47 are simple yet effective for obscuring text in non-security contexts. Perfect for hiding spoilers, creating puzzles, or learning about substitution ciphers. Our tool processes everything locally in your browser for instant results and complete privacy.
        </p>
      </div>
    </div>
  );
};
