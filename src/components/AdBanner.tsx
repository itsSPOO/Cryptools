import React, { useEffect } from 'react';

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
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9656748692315675"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

// Horizontal Banner (Top/Bottom)
export const AdBannerHorizontal: React.FC = () => (
  <div className="w-full flex justify-center my-4 sm:my-6">
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      <AdBanner 
        slot="1234567890" // Replace with your slot ID
        format="auto"
        className="w-full min-h-[80px] sm:min-h-[90px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
      />
    </div>
  </div>
);

// Sidebar Ad (Vertical)
export const AdBannerSidebar: React.FC = () => (
  <div className="w-full my-4 px-2">
    <AdBanner 
      slot="0987654321" // Replace with your slot ID
      format="auto"
      className="w-full min-h-[250px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
    />
  </div>
);

// In-Feed Ad (Between content)
export const AdBannerInFeed: React.FC = () => (
  <div className="w-full flex justify-center my-6 sm:my-8">
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      <AdBanner 
        slot="1122334455" // Replace with your slot ID
        format="fluid"
        className="w-full min-h-[100px] sm:min-h-[120px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
      />
    </div>
  </div>
);
