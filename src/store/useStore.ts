import { create } from 'zustand';
import type { AppState, ToolPreset } from '@/types';

interface StoreState extends AppState {
  setActiveTool: (toolId: string | null) => void;
  toggleTheme: () => void;
  addPreset: (preset: ToolPreset) => void;
  removePreset: (presetId: string) => void;
  updatePreset: (presetId: string, updates: Partial<ToolPreset>) => void;
  toggleFavorite: (toolId: string) => void;
  isFavorite: (toolId: string) => boolean;
  setConsent: (consent: boolean) => void;
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

// Load initial state from localStorage
const loadState = (): Partial<AppState> => {
  try {
    const stored = localStorage.getItem('cryptotools-storage');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Save state to localStorage
const saveState = (state: Partial<AppState>) => {
  try {
    localStorage.setItem('cryptotools-storage', JSON.stringify(state));
  } catch {
    // Ignore localStorage errors
  }
};

const initialState = loadState();

export const useStore = create<StoreState>((set, get) => ({
  activeTool: null,
  theme: (initialState.theme as 'light' | 'dark') || 'dark',
  presets: initialState.presets || [],
  favorites: initialState.favorites || [],
  consentGiven: initialState.consentGiven || false,
  isSidebarCollapsed: initialState.isSidebarCollapsed || false,

  setActiveTool: (toolId) => set({ activeTool: toolId }),

  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    saveState({ theme: newTheme, presets: state.presets, favorites: state.favorites, consentGiven: state.consentGiven, isSidebarCollapsed: state.isSidebarCollapsed });
    return { theme: newTheme };
  }),

  addPreset: (preset) => set((state) => {
    const newPresets = [...state.presets, preset];
    saveState({ theme: state.theme, presets: newPresets, favorites: state.favorites, consentGiven: state.consentGiven, isSidebarCollapsed: state.isSidebarCollapsed });
    return { presets: newPresets };
  }),

  removePreset: (presetId) => set((state) => {
    const newPresets = state.presets.filter((p) => p.id !== presetId);
    saveState({ theme: state.theme, presets: newPresets, favorites: state.favorites, consentGiven: state.consentGiven, isSidebarCollapsed: state.isSidebarCollapsed });
    return { presets: newPresets };
  }),

  updatePreset: (presetId, updates) => set((state) => {
    const newPresets = state.presets.map((p) =>
      p.id === presetId ? { ...p, ...updates } : p
    );
    saveState({ theme: state.theme, presets: newPresets, favorites: state.favorites, consentGiven: state.consentGiven, isSidebarCollapsed: state.isSidebarCollapsed });
    return { presets: newPresets };
  }),

  toggleFavorite: (toolId) => set((state) => {
    const newFavorites = state.favorites.includes(toolId)
      ? state.favorites.filter(id => id !== toolId)
      : [...state.favorites, toolId];
    saveState({ theme: state.theme, presets: state.presets, favorites: newFavorites, consentGiven: state.consentGiven, isSidebarCollapsed: state.isSidebarCollapsed });
    return { favorites: newFavorites };
  }),

  isFavorite: (toolId) => {
    return get().favorites.includes(toolId);
  },

  setConsent: (consent) => set((state) => {
    saveState({ theme: state.theme, presets: state.presets, favorites: state.favorites, consentGiven: consent, isSidebarCollapsed: state.isSidebarCollapsed });
    return { consentGiven: consent };
  }),

  toggleSidebar: () => set((state) => {
    const newCollapsed = !state.isSidebarCollapsed;
    saveState({ theme: state.theme, presets: state.presets, favorites: state.favorites, consentGiven: state.consentGiven, isSidebarCollapsed: newCollapsed });
    return { isSidebarCollapsed: newCollapsed };
  }),
}));
