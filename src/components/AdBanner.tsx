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
  <AdBanner 
    slot="1234567890" // Replace with your slot ID
    format="auto"
    className="my-4 max-w-5xl mx-auto"
  />
);

// Sidebar Ad (Vertical)
export const AdBannerSidebar: React.FC = () => (
  <AdBanner 
    slot="0987654321" // Replace with your slot ID
    format="auto"
    className="my-4"
  />
);

// In-Feed Ad (Between content)
export const AdBannerInFeed: React.FC = () => (
  <AdBanner 
    slot="1122334455" // Replace with your slot ID
    format="fluid"
    className="my-6 max-w-5xl mx-auto"
  />
);
