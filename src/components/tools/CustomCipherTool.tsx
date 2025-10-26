import React, { useState } from 'react';
import { ToolCard, InputField, OutputField, Button } from '../ToolCard';
import { applyCustomCipher, createReverseCipherMapping, CustomCipherMapping } from '@/utils/cryptoUtils';
import { useStore } from '@/store/useStore';
import { Save, Trash2, Download, Upload } from 'lucide-react';

export const CustomCipherTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mapping, setMapping] = useState<CustomCipherMapping>({});
  const [fromChar, setFromChar] = useState('');
  const [toChar, setToChar] = useState('');
  const [presetName, setPresetName] = useState('');
  const { presets, addPreset, removePreset } = useStore();

  const customPresets = presets.filter(p => p.toolId === 'custom');

  const handleAddMapping = () => {
    if (fromChar && toChar) {
      setMapping({ ...mapping, [fromChar]: toChar });
      setFromChar('');
      setToChar('');
    }
  };

  const handleRemoveMapping = (key: string) => {
    const newMapping = { ...mapping };
    delete newMapping[key];
    setMapping(newMapping);
  };

  const handleEncrypt = () => {
    const result = applyCustomCipher(input, mapping);
    setOutput(result);
  };

  const handleDecrypt = () => {
    const reverseMapping = createReverseCipherMapping(mapping);
    const result = applyCustomCipher(input, reverseMapping);
    setOutput(result);
  };

  const handleSavePreset = () => {
    if (presetName && Object.keys(mapping).length > 0) {
      addPreset({
        id: Date.now().toString(),
        toolId: 'custom',
        name: presetName,
        config: { mapping },
        createdAt: new Date().toISOString(),
      });
      setPresetName('');
    }
  };

  const handleLoadPreset = (presetMapping: CustomCipherMapping) => {
    setMapping(presetMapping);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(mapping, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'custom-cipher-mapping.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setMapping(imported);
        } catch (error) {
          alert('Invalid mapping file');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-8">
        Custom Cipher Generator
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Create your own custom substitution cipher with our flexible and powerful Custom Cipher Generator tool. Define personalized character-to-character mappings to encrypt and decrypt messages using your unique cipher rules and alphabet substitutions. Map any character to any other character with complete freedom, save your custom ciphers as reusable presets for future use, and import/export your cipher configurations as JSON files for sharing or backup. Perfect for creating secret codes with friends, educational cryptography projects, puzzle creation, teaching substitution cipher concepts, or exploring cryptographic principles with complete creative control. Build simple or complex ciphers, test different mapping strategies, and understand how substitution encryption works at a fundamental level.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Create your own character mapping rules and save presets"
        helpText="Define custom character substitutions to create your own cipher. Map any character to any other character. Save your mappings as presets for later use."
        codeSnippet={`// Custom Cipher
const mapping = { 'a': 'z', 'b': 'y', 'c': 'x' };
const encrypted = text.split('').map(c => mapping[c] || c).join('');

// Reverse mapping for decryption
const reverseMapping = Object.fromEntries(
  Object.entries(mapping).map(([k, v]) => [v, k])
);`}
      >
        <div className="space-y-6">
        {/* Add Mapping */}
        <div className="p-4 bg-light-surface dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Add Character Mapping
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={fromChar}
              onChange={(e) => setFromChar(e.target.value.slice(0, 1))}
              placeholder="From"
              maxLength={1}
              className="w-20 px-3 py-2 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface text-gray-900 dark:text-gray-100 font-mono text-center focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="flex items-center text-gray-500 dark:text-gray-400">→</span>
            <input
              type="text"
              value={toChar}
              onChange={(e) => setToChar(e.target.value.slice(0, 1))}
              placeholder="To"
              maxLength={1}
              className="w-20 px-3 py-2 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface text-gray-900 dark:text-gray-100 font-mono text-center focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={handleAddMapping} variant="primary">
              Add
            </Button>
          </div>
        </div>

        {/* Current Mappings */}
        {Object.keys(mapping).length > 0 && (
          <div className="p-4 bg-light-surface dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Current Mappings ({Object.keys(mapping).length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(mapping).map(([from, to]) => (
                <div
                  key={from}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border"
                >
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-100">
                    {from} → {to}
                  </span>
                  <button
                    onClick={() => handleRemoveMapping(from)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove mapping"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Save/Load Presets */}
        <div className="p-4 bg-light-surface dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Presets
          </h3>
          <div className="flex gap-3 mb-3">
            <input
              type="text"
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
              placeholder="Preset name"
              className="flex-1 px-3 py-2 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={handleSavePreset} variant="primary">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
          {customPresets.length > 0 && (
            <div className="space-y-2">
              {customPresets.map((preset) => (
                <div
                  key={preset.id}
                  className="flex items-center justify-between p-2 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border"
                >
                  <span className="text-sm text-gray-900 dark:text-gray-100">
                    {preset.name}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLoadPreset(preset.config.mapping)}
                      className="px-3 py-1 text-xs bg-primary hover:bg-primary-dark text-white rounded"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => removePreset(preset.id)}
                      className="px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Import/Export */}
        <div className="flex gap-3">
          <Button onClick={handleExport} variant="secondary" disabled={Object.keys(mapping).length === 0}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
            <div className="px-6 py-2.5 rounded-lg font-medium transition-colors bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 inline-flex items-center">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </div>
          </label>
        </div>

        {/* Input/Output */}
        <InputField
          label="Input Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encrypt/decrypt..."
          rows={6}
        />

        <div className="flex gap-3">
          <Button onClick={handleEncrypt} variant="primary" disabled={Object.keys(mapping).length === 0}>
            Encrypt
          </Button>
          <Button onClick={handleDecrypt} variant="secondary" disabled={Object.keys(mapping).length === 0}>
            Decrypt
          </Button>
        </div>

        <OutputField
          label="Output"
          value={output}
          example="With mapping a→z, b→y: 'abc' → 'zyx'"
        />
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Our Custom Cipher Generator empowers you to design unique encryption schemes tailored to your needs. Whether you're teaching cryptography, creating puzzle games, or developing your own encoding system, this tool provides the flexibility and features you need. All processing happens locally in your browser for complete privacy and security.
        </p>
      </div>
    </div>
  );
};
