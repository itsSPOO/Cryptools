import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { toLeetSpeak, fromLeetSpeak } from '@/utils/cryptoUtils';
import { AdBannerInFeed } from '../AdBanner';

export const LeetTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleToLeet = () => {
    const result = toLeetSpeak(input);
    setOutput(result);
  };

  const handleFromLeet = () => {
    const result = fromLeetSpeak(input);
    setOutput(result);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-8">
        Leet Speak Converter
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Convert text to and from Leet Speak (1337 speak) with our free online Leet Speak converter tool. Leet speak is an alternative alphabet that replaces standard letters with numbers and special characters, originating from 1980s hacker and BBS culture and now widely popular in gaming communities, online forums, and internet culture. Common character substitutions include A→4, E→3, I→1, O→0, S→5, T→7, L→1, G→9, and B→8. Perfect for creating unique and memorable usernames, distinctive gaming tags, hiding text from simple searches, or just having fun with creative text transformation. Our tool supports bidirectional conversion for easy encoding and decoding.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Convert text to/from leet speak (1337 speak)"
        helpText="Leet speak (1337) is an alternative alphabet using numbers and special characters. Popular in gaming and internet culture. Mapping: a→4, e→3, i→1, o→0, s→5, t→7, l→1, g→9, b→8"
        codeSnippet={`// To Leet Speak
const leetMap = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7' };
const leet = text.split('').map(c => leetMap[c.toLowerCase()] || c).join('');`}
      >
        <div className="space-y-4">
          <InputField
            label="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text..."
            rows={6}
          />

          <div className="flex gap-3">
            <Button onClick={handleToLeet} variant="primary">
              To Leet
            </Button>
            <Button onClick={handleFromLeet} variant="secondary">
              From Leet
            </Button>
          </div>

          <OutputField
            label="Output"
            value={output}
            example="'elite hacker' → '3l1t3 h4ck3r'"
          />
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Whether you're creating a gaming username, exploring internet culture, or just experimenting with text styles, our Leet Speak converter makes it simple. The tool supports bidirectional conversion and processes everything locally in your browser for instant results and complete privacy.
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
            What is Leet Speak?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Leet speak (also known as 1337 speak, leetspeak, or eleet) is an alternative alphabet for the English language that uses various combinations of ASCII characters to replace standard letters. It originated in the 1980s among hackers, BBS users, and early internet communities as a way to create unique identities and bypass simple text filters.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Common substitutions include: A→4, E→3, I→1, O→0, S→5, T→7, L→1, G→9, and B→8. The term "leet" itself comes from "elite," written as "1337" or "l33t" in leet speak. Today, it's widely used in gaming communities, online forums, and internet culture for creating distinctive usernames and expressing digital identity.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Leet Speak Converter
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Converting to Leet Speak:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Enter your normal text in the input field</li>
                <li>Click the "To Leet" button</li>
                <li>Letters will be replaced with numbers and symbols</li>
                <li>Copy the result for your username or message</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Converting from Leet Speak:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Paste leet speak text in the input field</li>
                <li>Click the "From Leet" button</li>
                <li>Numbers and symbols will be converted back to letters</li>
                <li>View the decoded normal text</li>
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
              <span><strong>Gaming Usernames:</strong> Creating unique and memorable gamer tags and online identities</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Social Media:</strong> Standing out with distinctive profile names and bios</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Forum Posts:</strong> Expressing digital culture and internet identity</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Password Variation:</strong> Adding complexity to passwords (though not recommended as sole method)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Text Obfuscation:</strong> Bypassing simple text filters and search engines</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Internet Culture:</strong> Participating in memes and online communities</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our leet speak converter uses a character mapping system where each letter is replaced with its leet equivalent. Common mappings include: A/a→4, E/e→3, I/i→1, O/o→0, S/s→5, T/t→7, L/l→1, G/g→9, B/b→8, and Z/z→2. Some letters have multiple possible substitutions for variety.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            The reverse conversion attempts to map numbers and symbols back to their letter equivalents. Note that some ambiguity exists (e.g., '1' could be 'I' or 'L'), so the decoded text may require manual adjustment. All conversion happens locally in your browser for instant results and privacy.
          </p>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-cyan-800 dark:text-cyan-200">
            <li>• Leet speak originated in 1980s hacker and BBS culture</li>
            <li>• "1337" (leet) is short for "elite" in leet speak</li>
            <li>• Some platforms may restrict special characters in usernames</li>
            <li>• Leet speak is NOT secure encryption - it's for style and fun</li>
            <li>• Mix leet and normal text for better readability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
