import React, { useState } from 'react';
import { Copy, Check, Code, Info } from 'lucide-react';
import { clsx } from 'clsx';

interface ToolCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  helpText?: string;
  codeSnippet?: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  children,
  helpText,
  codeSnippet,
}) => {
  const [showHelp, setShowHelp] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopyCode = async () => {
    if (codeSnippet) {
      await navigator.clipboard.writeText(codeSnippet);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-dark-surface rounded-xl shadow-lg border border-light-border dark:border-dark-border overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="px-6 py-4 border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-bg">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="flex gap-2">
            {helpText && (
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
                aria-label="Toggle help"
              >
                <Info className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            )}
            {codeSnippet && (
              <button
                onClick={() => setShowCode(!showCode)}
                className="p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
                aria-label="Toggle code snippet"
              >
                <Code className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Help Text */}
        {showHelp && helpText && (
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              {helpText}
            </p>
          </div>
        )}

        {/* Code Snippet */}
        {showCode && codeSnippet && (
          <div className="mt-4 relative">
            <pre className="p-4 bg-gray-900 dark:bg-black rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-100 font-mono">
                {codeSnippet}
              </code>
            </pre>
            <button
              onClick={handleCopyCode}
              className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Copy code"
            >
              {codeCopied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

interface InputFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <textarea
        {...props}
        className={clsx(
          'w-full px-4 py-3 rounded-lg border font-mono text-sm',
          'bg-white dark:bg-dark-bg',
          'text-gray-900 dark:text-gray-100',
          'placeholder-gray-400 dark:placeholder-gray-600',
          'focus:outline-none focus:ring-2 focus:ring-primary',
          error
            ? 'border-red-500 dark:border-red-500'
            : 'border-light-border dark:border-dark-border'
        )}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

interface OutputFieldProps {
  label: string;
  value: string;
  example?: string;
}

export const OutputField: React.FC<OutputFieldProps> = ({ label, value, example }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <button
          onClick={handleCopy}
          disabled={!value}
          className={clsx(
            'flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition-colors',
            value
              ? 'bg-primary hover:bg-primary-dark text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
          )}
          aria-label="Copy result"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="relative">
        <textarea
          value={value}
          readOnly
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 font-mono text-sm resize-none"
          placeholder="Output will appear here..."
        />
      </div>
      {example && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Example:</span> {example}
        </p>
      )}
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'px-6 py-2.5 rounded-lg font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
        variant === 'primary' &&
          'bg-primary hover:bg-primary-dark text-white disabled:bg-gray-300 dark:disabled:bg-gray-700',
        variant === 'secondary' &&
          'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100',
        className
      )}
    >
      {children}
    </button>
  );
};
