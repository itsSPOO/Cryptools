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
    <ToolCard
      title="ROT13 / ROT47"
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
  );
};
