import React, { useEffect, useRef, useState } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = '' 
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Lazy load ads using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '100px', // Load ads 100px before they enter viewport
        threshold: 0.01,
      }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      if (adRef.current) {
        observer.unobserve(adRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [isVisible, slot]);

  return (
    <div ref={adRef} className={`ad-container ${className}`}>
      {/* Google AdSense Advertisement */}
      {isVisible && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9656748692315675"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      )}
    </div>
  );
};

// Horizontal Banner (Top/Bottom)
export const AdBannerHorizontal: React.FC = () => (
  <div className="w-full flex justify-center my-4 sm:my-6">
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      <AdBanner 
        slot="2293881641" // 3rd Banner
        format="auto"
        className="w-full min-h-[80px] sm:min-h-[90px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
      />
    </div>
  </div>
);

// 2nd banner Ad (Vertical)
export const AdBannerSidebar: React.FC = () => (
  <div className="w-full my-4 px-2">
    <AdBanner 
      slot="8665748688" // 1st banner
      format="auto"
      className="w-full min-h-[250px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
    />
  </div>
);

// In-Feed banner Ad (Between content)
export const AdBannerInFeed: React.FC = () => (
  <div className="w-full">
    <div className="text-center">
      <AdBanner 
        slot="9230539675" // 2nd banner
        format="auto" // Changed from 'fluid' to 'auto' for better compatibility
        className="w-full min-h-[100px] sm:min-h-[120px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
      />
    </div>
  </div>
);

// Right Sidebar squareAd 1 (Top)
export const AdBannerRightSidebar1: React.FC = () => (
  <div className="w-full" style={{ marginBottom: '24px' }}>
    <AdBanner 
      slot="8186402381" // 1st square
      format="auto"
      className="w-full min-h-[250px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
    />
  </div>
);

// Right Sidebar square Ad 2 (Middle)
export const AdBannerRightSidebar2: React.FC = () => (
  <div className="w-full" style={{ marginBottom: '24px' }}>
    <AdBanner 
      slot="5973820940" // 2nd square
      format="auto"
      className="w-full min-h-[250px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
    />
  </div>
);

// Right Sidebar square Ad 3 (Bottom)
export const AdBannerRightSidebar3: React.FC = () => (
  <div className="w-full" style={{ marginBottom: '24px' }}>
    <AdBanner 
      slot="3008923864" // 3rd square
      format="auto"
      className="w-full min-h-[250px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
    />
  </div>
);
