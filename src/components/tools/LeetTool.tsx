import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { toLeetSpeak, fromLeetSpeak } from '@/utils/cryptoUtils';

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
    </div>
  );
};
