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
    <ToolCard
      title="Leet Speak Converter"
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
  );
};
