import { Helmet } from 'react-helmet-async';
import { toolSEOConfig } from '@/config/seo';

interface SEOHeadProps {
  page: string;
}

export function SEOHead({ page }: SEOHeadProps) {
  const seoData = toolSEOConfig[page] || toolSEOConfig.home;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.canonical} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:site_name" content="Cryptools" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoData.canonical} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(seoData.structuredData)}
      </script>
    </Helmet>
  );
}
