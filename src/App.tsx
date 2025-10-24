import React, { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ConsentBanner } from '@/components/ConsentBanner';
import { ScrollToTop } from '@/components/ScrollToTop';
import { KeyboardShortcuts } from '@/components/KeyboardShortcuts';
import { AdBannerHorizontal, AdBannerInFeed } from '@/components/AdBanner';

// Tool Components
import { Base64Tool } from '@/components/tools/Base64Tool';
import { BinaryTool } from '@/components/tools/BinaryTool';
import { UrlTool } from '@/components/tools/UrlTool';
import { HexTool } from '@/components/tools/HexTool';
import { LeetTool } from '@/components/tools/LeetTool';
import { Md5Tool } from '@/components/tools/Md5Tool';
import { Sha1Tool } from '@/components/tools/Sha1Tool';
import { Sha256Tool } from '@/components/tools/Sha256Tool';
import { CaesarTool } from '@/components/tools/CaesarTool';
import { RotTool } from '@/components/tools/RotTool';
import { VigenereTool } from '@/components/tools/VigenereTool';
import { AtbashTool } from '@/components/tools/AtbashTool';
import { CustomCipherTool } from '@/components/tools/CustomCipherTool';

const toolComponents: Record<string, React.FC> = {
  base64: Base64Tool,
  binary: BinaryTool,
  url: UrlTool,
  hex: HexTool,
  leet: LeetTool,
  md5: Md5Tool,
  sha1: Sha1Tool,
  sha256: Sha256Tool,
  caesar: CaesarTool,
  rot13: RotTool,
  vigenere: VigenereTool,
  atbash: AtbashTool,
  custom: CustomCipherTool,
};

function App() {
  const { activeTool, theme, toggleTheme } = useStore();

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + D for theme toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleTheme]);

  const ActiveToolComponent = activeTool ? toolComponents[activeTool] : null;

  return (
    <div className="flex flex-col h-screen bg-light-bg dark:bg-dark-bg font-sans">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-8">
            {/* Top Ad Banner */}
            <AdBannerHorizontal />
            
            <div className="max-w-5xl mx-auto mb-8">
              {ActiveToolComponent ? (
                <ActiveToolComponent />
              ) : (
                <WelcomeScreen />
              )}
            </div>
            
            {/* In-Feed Ad Banner (between content and footer) */}
            {activeTool && <AdBannerInFeed />}
            
            {/* Footer at bottom of scrollable content */}
            <Footer />
          </div>
        </main>
      </div>

      <ConsentBanner />
      <ScrollToTop />
      <KeyboardShortcuts />
    </div>
  );
}

export default App;
