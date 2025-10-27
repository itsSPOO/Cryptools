/**
 * Performance Monitoring Utilities
 * Tracks LCP, FCP, FID, CLS, and TTFB metrics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
}

// Thresholds based on web.dev recommendations
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
};

function getRating(metricName: keyof typeof THRESHOLDS, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[metricName];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Track LCP (Largest Contentful Paint)
export function observeLCP(callback: (metric: PerformanceMetric) => void): void {
  if (!('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
      
      const value = lastEntry.renderTime || lastEntry.loadTime || 0;
      
      callback({
        name: 'LCP',
        value: Math.round(value),
        rating: getRating('LCP', value),
      });
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (error) {
    console.error('Error observing LCP:', error);
  }
}

// Track FCP (First Contentful Paint)
export function observeFCP(callback: (metric: PerformanceMetric) => void): void {
  if (!('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          callback({
            name: 'FCP',
            value: Math.round(entry.startTime),
            rating: getRating('FCP', entry.startTime),
          });
        }
      });
    });

    observer.observe({ type: 'paint', buffered: true });
  } catch (error) {
    console.error('Error observing FCP:', error);
  }
}

// Track FID (First Input Delay)
export function observeFID(callback: (metric: PerformanceMetric) => void): void {
  if (!('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEventTiming[];
      entries.forEach((entry) => {
        if (entry.processingStart && entry.startTime) {
          const value = entry.processingStart - entry.startTime;
          callback({
            name: 'FID',
            value: Math.round(value),
            rating: getRating('FID', value),
          });
        }
      });
    });

    observer.observe({ type: 'first-input', buffered: true });
  } catch (error) {
    console.error('Error observing FID:', error);
  }
}

// Track CLS (Cumulative Layout Shift)
export function observeCLS(callback: (metric: PerformanceMetric) => void): void {
  if (!('PerformanceObserver' in window)) return;

  let clsValue = 0;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as LayoutShift[];
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          callback({
            name: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
            rating: getRating('CLS', clsValue),
            delta: entry.value,
          });
        }
      });
    });

    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (error) {
    console.error('Error observing CLS:', error);
  }
}

// Track TTFB (Time to First Byte)
export function observeTTFB(callback: (metric: PerformanceMetric) => void): void {
  try {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigationTiming) {
      const value = navigationTiming.responseStart - navigationTiming.requestStart;
      callback({
        name: 'TTFB',
        value: Math.round(value),
        rating: getRating('TTFB', value),
      });
    }
  } catch (error) {
    console.error('Error observing TTFB:', error);
  }
}

// Initialize all performance monitoring
export function initPerformanceMonitoring(
  onMetric?: (metric: PerformanceMetric) => void
): void {
  const handleMetric = (metric: PerformanceMetric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${metric.name}:`, {
        value: `${metric.value}ms`,
        rating: metric.rating,
      });
    }

    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        event_label: metric.rating,
        non_interaction: true,
      });
    }

    // Custom callback
    if (onMetric) {
      onMetric(metric);
    }
  };

  // Start observing metrics
  observeLCP(handleMetric);
  observeFCP(handleMetric);
  observeFID(handleMetric);
  observeCLS(handleMetric);
  observeTTFB(handleMetric);
}

// Type definitions for performance entries
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
