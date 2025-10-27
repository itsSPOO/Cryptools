/**
 * Image Optimization Utilities
 * Helpers for lazy loading and optimizing images
 */

/**
 * Adds loading="lazy" to all images for native lazy loading
 * Should be called after dynamic content is added
 */
export function enableNativeLazyLoading(): void {
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach((img) => {
    img.setAttribute('loading', 'lazy');
  });
}

/**
 * Adds decoding="async" to improve rendering performance
 */
export function enableAsyncDecoding(): void {
  const images = document.querySelectorAll('img:not([decoding])');
  images.forEach((img) => {
    img.setAttribute('decoding', 'async');
  });
}

/**
 * Preloads critical images (above the fold)
 */
export function preloadCriticalImages(imageUrls: string[]): void {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Lazy load background images using Intersection Observer
 */
export function lazyLoadBackgroundImages(selector: string = '[data-bg]'): void {
  const elements = document.querySelectorAll(selector);
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const imageUrl = element.dataset.bg;
          
          if (imageUrl) {
            element.style.backgroundImage = `url(${imageUrl})`;
            element.removeAttribute('data-bg');
            observer.unobserve(element);
          }
        }
      });
    }, {
      rootMargin: '50px',
    });

    elements.forEach((element) => imageObserver.observe(element));
  } else {
    // Fallback for browsers without IntersectionObserver
    elements.forEach((element) => {
      const el = element as HTMLElement;
      const imageUrl = el.dataset.bg;
      if (imageUrl) {
        el.style.backgroundImage = `url(${imageUrl})`;
        el.removeAttribute('data-bg');
      }
    });
  }
}

/**
 * Check if WebP is supported and return appropriate format
 */
export async function supportsWebP(): Promise<boolean> {
  if (!self.createImageBitmap) return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  
  try {
    const blob = await fetch(webpData).then((r) => r.blob());
    await createImageBitmap(blob);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get optimized image URL based on device pixel ratio and format support
 */
export function getOptimizedImageUrl(
  baseUrl: string,
  width: number,
  supportsWebP: boolean = false
): string {
  const dpr = window.devicePixelRatio || 1;
  const optimizedWidth = Math.round(width * dpr);
  
  // If using a CDN that supports URL parameters for image optimization
  const format = supportsWebP ? 'webp' : 'jpg';
  
  return `${baseUrl}?w=${optimizedWidth}&fm=${format}&q=80`;
}
