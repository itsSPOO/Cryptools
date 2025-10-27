import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useStore } from '@/store/useStore';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { KeyboardShortcuts } from '@/components/KeyboardShortcuts';
import { SEOHead } from '@/components/SEOHead';
import { CookieConsent } from '@/components/CookieConsent';
import { AdBannerInFeed, AdBannerRightSidebar1, AdBannerRightSidebar2, AdBannerRightSidebar3 } from '@/components/AdBanner';
import { urlToToolMap } from '@/config/seo';
import { Menu, X } from 'lucide-react';
// import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring';

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
import { PasswordTool } from '@/components/tools/PasswordTool';

// Legal Pages
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsOfUse } from '@/pages/TermsOfUse';
import { Disclaimer } from '@/pages/Disclaimer';
import { Contact } from '@/pages/Contact';

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
  password: PasswordTool,
};

function App() {
  const { activeTool, setActiveTool, theme, toggleTheme, isSidebarCollapsed, toggleSidebar } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Initialize performance monitoring for LCP, FCP, FID, CLS, TTFB
  // Temporarily disabled - uncomment after testing
  // usePerformanceMonitoring();

  // Sync URL with active tool
  useEffect(() => {
    const path = location.pathname;
    const toolId = urlToToolMap[path];
    
    // Check if a tool ID was injected by the build process (for direct /tool/<id> links)
    const injectedToolId = (window as any).__TOOL_ID;
    
    // Priority 1: Use injected tool ID if present and no tool is active yet
    if (injectedToolId && !activeTool) {
      setActiveTool(injectedToolId);
      // Clear the injected ID so it doesn't interfere with navigation
      delete (window as any).__TOOL_ID;
      return;
    }
    
    // Priority 2: Use URL mapping
    if (toolId && toolId !== activeTool) {
      setActiveTool(toolId);
    } else if (path === '/' && activeTool) {
      setActiveTool(null);
    }
  }, [location.pathname, activeTool, setActiveTool]);

  // Get current page for SEO
  const currentPage = activeTool || 'home';

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
      // Ctrl/Cmd + B for sidebar toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
      // Escape to close mobile menu
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleTheme, toggleSidebar, isMobileMenuOpen]);

  // Close mobile menu when tool is selected
  useEffect(() => {
    if (activeTool && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [activeTool, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const ActiveToolComponent = activeTool ? toolComponents[activeTool] : null;

  return (
    <>
      <SEOHead page={currentPage} />
      <div className="flex flex-col h-screen bg-gradient-to-br from-light-bg via-light-surface-elevated to-light-bg dark:from-dark-bg dark:via-dark-surface-elevated dark:to-dark-bg font-sans mobile-viewport">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <div className="flex flex-1 relative">
         {/* Mobile Menu Button */}
         <button
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           className="lg:hidden fixed top-16 left-4 z-50 p-2.5 bg-gradient-to-br from-white to-light-surface-elevated dark:from-dark-surface dark:to-dark-surface-elevated border border-light-border dark:border-dark-border rounded-xl shadow-lg touch-target hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
           aria-label="Toggle mobile menu"
         >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

         {/* Sidebar - Mobile: Hidden by default, Desktop: Always visible */}
         <aside className={`
           ${isMobileMenuOpen ? 'translate-x-0 block mobile-sidebar-visible' : '-translate-x-full hidden mobile-sidebar-hidden'}
           lg:translate-x-0 lg:block
           fixed lg:fixed top-14 lg:top-14 bottom-0 left-0 z-50 lg:z-auto
           ${isSidebarCollapsed ? 'w-16' : 'w-64'} h-[calc(100vh-3.5rem)] bg-white dark:bg-dark-surface 
           border-r border-light-border dark:border-dark-border 
           overflow-y-auto mobile-scroll mobile-optimized
           transition-all duration-300 ease-in-out
         `}>
          <Sidebar />
        </aside>
        
        <main className={`flex-1 overflow-y-auto mobile-scroll mobile-optimized ${isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'} xl:mr-80 transition-all duration-300`}>
          <div className="p-4 sm:p-6 lg:p-6">
            {/* Top Ad Banner removed - now shown at bottom of Welcome Screen */}
            
            <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
              <Routes>
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={
                  ActiveToolComponent ? (
                    <ActiveToolComponent />
                  ) : (
                    <WelcomeScreen />
                  )
                } />
              </Routes>
            </div>
            
            {/* In-Feed Ad Banner (between content and footer) - Mobile optimized */}
            {activeTool && (
              <div className="mb-4 sm:mb-6">
                <AdBannerInFeed />
              </div>
            )}
            
            {/* Footer at bottom of scrollable content */}
            <Footer />
          </div>
        </main>
        
        {/* Right Sidebar Ads - Hidden on mobile and tablet */}
        <aside className="hidden xl:flex flex-col w-80 bg-white dark:bg-dark-surface border-l border-light-border dark:border-dark-border fixed top-14 right-0 bottom-0">
          <div className="flex-1 overflow-y-auto p-4">
            {/* Top Ad */}
            <AdBannerRightSidebar1 />
            
            {/* Middle Ad */}
            <AdBannerRightSidebar2 />
            
            {/* Bottom Ad */}
            <AdBannerRightSidebar3 />
          </div>
        </aside>
      </div>

       <KeyboardShortcuts />
       <CookieConsent />
    </div>
    </>
  );
}

export default App;
