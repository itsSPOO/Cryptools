import React, { useState, useCallback, useMemo } from 'react';
import { ToolCard, InputField, Button } from '../ToolCard';
import { generatePassword, calculatePasswordStrength, type PasswordOptions } from '@/utils/cryptoUtils';
import { Copy, RefreshCw, Eye, EyeOff, Shield, ShieldCheck, Download, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { AdBannerInFeed } from '../AdBanner';

export const PasswordTool: React.FC = () => {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false,
  });
  const [customCharset, setCustomCharset] = useState('');
  const [useCustomCharset, setUseCustomCharset] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const generateNewPassword = useCallback(() => {
    try {
      setError('');
      const passwordOptions = useCustomCharset 
        ? { ...options, customCharset } 
        : options;
      const newPassword = generatePassword(passwordOptions);
      setPassword(newPassword);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [options, customCharset, useCustomCharset]);

  const handleOptionChange = useCallback((key: keyof PasswordOptions, value: any) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  }, []);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(password);
      // You could add a toast notification here
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = password;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }, [password]);

  const downloadPassword = useCallback(() => {
    const blob = new Blob([password], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-password.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [password]);

  const strength = useMemo(() => {
    return password ? calculatePasswordStrength(password) : null;
  }, [password]);

  const getStrengthColor = useCallback((level: string) => {
    switch (level) {
      case 'Very Weak': return 'text-red-500';
      case 'Weak': return 'text-red-400';
      case 'Fair': return 'text-yellow-500';
      case 'Good': return 'text-blue-500';
      case 'Strong': return 'text-green-500';
      case 'Very Strong': return 'text-green-600';
      default: return 'text-gray-500';
    }
  }, []);

  const getStrengthIcon = useCallback((level: string) => {
    switch (level) {
      case 'Very Weak':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'Weak':
        return <XCircle className="w-4 h-4 text-red-400" />;
      case 'Fair':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'Good':
        return <Shield className="w-4 h-4 text-blue-500" />;
      case 'Strong':
        return <ShieldCheck className="w-4 h-4 text-green-500" />;
      case 'Very Strong':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      default:
        return <Shield className="w-4 h-4 text-gray-500" />;
    }
  }, []);

  const getStrengthGradient = useCallback((level: string) => {
    switch (level) {
      case 'Very Weak': return 'from-red-500 to-red-600';
      case 'Weak': return 'from-red-400 to-red-500';
      case 'Fair': return 'from-yellow-400 to-yellow-500';
      case 'Good': return 'from-blue-400 to-blue-500';
      case 'Strong': return 'from-green-400 to-green-500';
      case 'Very Strong': return 'from-green-500 to-green-600';
      default: return 'from-gray-400 to-gray-500';
    }
  }, []);

  const codeSnippet = `// Password Generator
function generatePassword(options) {
  const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
  
  let charset = '';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

const password = generatePassword({
  length: ${options.length},
  includeUppercase: ${options.includeUppercase},
  includeLowercase: ${options.includeLowercase},
  includeNumbers: ${options.includeNumbers},
  includeSymbols: ${options.includeSymbols}
});
console.log(password);`;

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-8">
        Secure Password Generator
      </h1>

      {/* Introduction */}
      <div className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Generate strong, secure, and cryptographically random passwords with our advanced Password Generator tool. Create highly customizable passwords with adjustable length from 4 to 128 characters, multiple character type options (uppercase, lowercase, numbers, symbols), and advanced settings to exclude similar-looking characters (0, O, l, I) or ambiguous symbols for better usability. Our tool includes real-time password strength analysis with detailed security feedback and improvement suggestions, helping you create passwords that meet modern security best practices and compliance requirements. Perfect for securing online accounts, applications, databases, WiFi networks, and sensitive data with truly random, cryptographically strong passwords generated using secure browser APIs. All generation happens locally with zero data transmission.
        </p>
      </div>

      {/* Tool Component */}
      <ToolCard
        title=""
        description="Generate secure, customizable passwords with strength analysis"
        helpText="Create strong passwords with customizable character sets, length, and exclusion options. The tool analyzes password strength and provides feedback for improvement."
        codeSnippet={codeSnippet}
      >
        <div className="space-y-6">
        {/* Password Output */}
        <div className="space-y-4">
          <div className="relative">
            <InputField
              label="Generated Password"
              value={password}
              onChange={() => {}} // Read-only
              placeholder="Click 'Generate Password' to create a new password"
              rows={2}
              error={error}
              readOnly
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

           {/* Password Strength */}
           {strength && (
             <div className="p-4 bg-gradient-to-br from-light-surface to-light-surface-elevated dark:from-dark-surface-elevated dark:to-dark-surface rounded-lg border border-light-border dark:border-dark-border shadow-sm">
               <div className="flex items-center gap-3 mb-3">
                 {getStrengthIcon(strength.level)}
                 <div className="flex-1">
                   <div className="flex items-center justify-between mb-1">
                     <span className={`font-semibold ${getStrengthColor(strength.level)}`}>
                       {strength.level}
                     </span>
                     <span className="text-xs text-gray-500 dark:text-gray-400">
                       Score: {strength.score}/8
                     </span>
                   </div>
                   <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                     <div 
                       className={`h-full transition-all duration-500 ease-out bg-gradient-to-r ${getStrengthGradient(strength.level)} shadow-sm`}
                       style={{ width: `${(strength.score / 8) * 100}%` }}
                     />
                   </div>
                 </div>
               </div>
               {strength.feedback.length > 0 && (
                 <div className="space-y-2">
                   <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Suggestions:</p>
                   <div className="space-y-1">
                     {strength.feedback.map((item, index) => (
                       <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                         <div className="w-1 h-1 bg-current rounded-full flex-shrink-0" />
                         <span>{item}</span>
                       </div>
                     ))}
                   </div>
                 </div>
               )}
             </div>
           )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button onClick={generateNewPassword} variant="primary" className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Generate New Password
            </Button>
            
            {password && (
              <div className="flex gap-2">
                <Button 
                  onClick={copyToClipboard} 
                  variant="secondary" 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button 
                  onClick={downloadPassword} 
                  variant="secondary"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Options */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
              Password Options
            </h3>
            
            {/* Length */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Length: <span className="text-primary font-semibold">{options.length}</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="4"
                  max="128"
                  value={options.length}
                  onChange={(e) => handleOptionChange('length', parseInt(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${((options.length - 4) / 124) * 100}%, #e5e7eb ${((options.length - 4) / 124) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <span>4</span>
                  <span>128</span>
                </div>
              </div>
            </div>
          </div>

          {/* Character Types */}
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-4 rounded-lg border border-accent/20">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full" />
              Character Types
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
                <input
                  type="checkbox"
                  checked={options.includeUppercase}
                  onChange={(e) => handleOptionChange('includeUppercase', e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Uppercase (A-Z)</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
                <input
                  type="checkbox"
                  checked={options.includeLowercase}
                  onChange={(e) => handleOptionChange('includeLowercase', e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Lowercase (a-z)</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
                <input
                  type="checkbox"
                  checked={options.includeNumbers}
                  onChange={(e) => handleOptionChange('includeNumbers', e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Numbers (0-9)</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
                <input
                  type="checkbox"
                  checked={options.includeSymbols}
                  onChange={(e) => handleOptionChange('includeSymbols', e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Symbols (!@#$)</span>
              </label>
            </div>
          </div>

          {/* Advanced Options */}
          <div className="bg-gradient-to-br from-warning/5 to-error/5 p-4 rounded-lg border border-warning/20">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-warning to-error rounded-full" />
              Advanced Options
            </h4>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
                <input
                  type="checkbox"
                  checked={options.excludeSimilar}
                  onChange={(e) => handleOptionChange('excludeSimilar', e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Exclude similar characters</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">(0, O, l, I)</p>
                </div>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
                <input
                  type="checkbox"
                  checked={options.excludeAmbiguous}
                  onChange={(e) => handleOptionChange('excludeAmbiguous', e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Exclude ambiguous characters</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Remove confusing symbols</p>
                </div>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
                <input
                  type="checkbox"
                  checked={useCustomCharset}
                  onChange={(e) => setUseCustomCharset(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Use custom character set</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Define your own characters</p>
                </div>
              </label>

              {useCustomCharset && (
                <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <InputField
                    label="Custom Character Set"
                    value={customCharset}
                    onChange={(e) => setCustomCharset(e.target.value)}
                    placeholder="Enter custom characters (e.g., abc123!@#)"
                    rows={1}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </ToolCard>

      {/* Conclusion */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Our Password Generator uses cryptographically secure random number generation to create strong, unpredictable passwords. With features like strength analysis, custom character sets, and the ability to exclude confusing characters, you can generate passwords that balance security with usability. All password generation happens locally in your browser—no passwords are ever transmitted or stored on external servers.
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
            Why Use a Password Generator?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Strong, unique passwords are your first line of defense against cyber attacks. However, creating truly random and secure passwords manually is difficult. Our password generator uses cryptographically secure random number generation to create passwords that are virtually impossible to guess or crack through brute-force attacks.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            With the increasing number of data breaches and password leaks, using unique passwords for each account is critical. A strong password should be long (at least 12-16 characters), include a mix of character types, and be completely random. Our tool makes generating such passwords effortless.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Password Generator
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Set your desired password length (8-128 characters)</li>
            <li>Choose which character types to include (uppercase, lowercase, numbers, symbols)</li>
            <li>Optionally exclude confusing characters (0, O, l, 1, etc.)</li>
            <li>Click "Generate Password" to create a new password</li>
            <li>View the strength indicator to ensure adequate security</li>
            <li>Copy the password to your clipboard or download it</li>
            <li>Store it securely in a password manager</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Password Strength Levels
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 mt-1">•</span>
              <span><strong>Weak:</strong> Short passwords with limited character variety - easily cracked in seconds</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span><strong>Fair:</strong> Moderate length but lacking diversity - vulnerable to dictionary attacks</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 mt-1">•</span>
              <span><strong>Good:</strong> Decent length and variety - adequate for most non-critical accounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-1">•</span>
              <span><strong>Strong:</strong> Long with mixed characters - would take years to crack</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2 mt-1">•</span>
              <span><strong>Very Strong:</strong> Maximum security - virtually uncrackable with current technology</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Best Practices
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Use Unique Passwords:</strong> Never reuse passwords across different accounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Length Matters:</strong> Aim for at least 16 characters for critical accounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Use a Password Manager:</strong> Store passwords securely in tools like Bitwarden or 1Password</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Enable 2FA:</strong> Add two-factor authentication for an extra security layer</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Regular Updates:</strong> Change passwords periodically, especially after breaches</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span><strong>Avoid Personal Info:</strong> Don't include names, birthdays, or dictionary words</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our password generator uses the Web Crypto API's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">crypto.getRandomValues()</code> method, which provides cryptographically strong random numbers. This is far superior to JavaScript's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Math.random()</code>, which is predictable and unsuitable for security purposes.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            The strength calculator evaluates passwords based on length, character diversity, entropy, and common patterns. All generation and analysis happens entirely in your browser - no passwords are ever transmitted over the network or stored on any server, ensuring complete privacy.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li>• For maximum security, use 20+ character passwords with all character types</li>
            <li>• Exclude confusing characters if you need to type passwords manually</li>
            <li>• Generate a new password immediately if you suspect compromise</li>
            <li>• Use passphrases (random words) for memorable yet secure passwords</li>
            <li>• Never share passwords via email or unencrypted messaging</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
