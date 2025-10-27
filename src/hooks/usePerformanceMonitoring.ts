import { useEffect } from 'react';
import { initPerformanceMonitoring, PerformanceMetric } from '@/utils/performanceMonitoring';

/**
 * Custom hook to initialize performance monitoring
 * Usage: usePerformanceMonitoring();
 */
export function usePerformanceMonitoring(
  onMetric?: (metric: PerformanceMetric) => void
): void {
  useEffect(() => {
    // Initialize performance monitoring on mount
    initPerformanceMonitoring(onMetric);
  }, [onMetric]);
}
