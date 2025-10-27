import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { rot13, rot47 } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

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

      {/* Ad Banner */}
      <div className="my-8">
        <AdBannerInFeed />
      </div>

      {/* Detailed Description Section */}
      <div className="mt-12 space-y-8 bg-white dark:bg-dark-surface rounded-xl p-6 md:p-8 border border-light-border dark:border-dark-border">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What are ROT13 and ROT47?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ROT13 ("rotate by 13 places") is a simple letter substitution cipher that replaces each letter with the letter 13 positions after it in the alphabet. It's a special case of the Caesar cipher with a shift of 13. Because there are 26 letters in the English alphabet, ROT13 is its own inverse - applying ROT13 twice returns the original text.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            ROT47 extends this concept to all 94 printable ASCII characters (from ! to ~), rotating by 47 positions. This includes letters, numbers, and special characters, making it more versatile than ROT13. Like ROT13, ROT47 is also self-inverse due to the mathematical properties of the rotation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the ROT13/ROT47 Tool
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Using ROT13:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter your text in the input field (letters only will be affected)</li>
                <li>Click the "Apply ROT13" button</li>
                <li>The rotated text will appear in the output</li>
                <li>Click again to decode back to the original text</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Using ROT47:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter your text (can include numbers and symbols)</li>
                <li>Click the "Apply ROT47" button</li>
                <li>All printable ASCII characters will be rotated</li>
                <li>Apply again to reverse the transformation</li>
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
              <span><strong>Spoiler Protection:</strong> Hiding movie endings, game solutions, and plot twists in online discussions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Forum Posts:</strong> Obscuring potentially offensive content or puzzle answers in newsgroups</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Email Obfuscation:</strong> Hiding email addresses from spam bots (though less effective now)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Educational Purposes:</strong> Teaching basic cryptography and substitution cipher concepts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Geocaching:</strong> Creating simple puzzles and hints for treasure hunts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Quick Obfuscation:</strong> Temporarily hiding text from casual viewing</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ROT13 works by replacing each letter with the letter 13 positions forward in the alphabet. For example, A becomes N, B becomes O, and so on. When you reach the end of the alphabet, it wraps around: N becomes A, O becomes B, etc. Numbers and special characters remain unchanged.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            ROT47 operates on ASCII characters 33-126 (all printable characters except space). Each character is replaced with the character 47 positions forward in this range. This means letters, numbers, and symbols are all transformed. Both ciphers are symmetric - the encryption and decryption operations are identical.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-purple-800 dark:text-purple-200">
            <li>• ROT13 and ROT47 are NOT secure encryption - anyone can easily decode them</li>
            <li>• They're perfect for hiding spoilers because they require deliberate action to read</li>
            <li>• ROT13 only affects letters; numbers and symbols pass through unchanged</li>
            <li>• ROT47 transforms all printable characters including numbers and punctuation</li>
            <li>• Both are self-inverse: encode twice to get back the original text</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
