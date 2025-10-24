import { create } from 'zustand';
import type { AppState, ToolPreset } from '@/types';

interface StoreState extends AppState {
  setActiveTool: (toolId: string | null) => void;
  toggleTheme: () => void;
  addPreset: (preset: ToolPreset) => void;
  removePreset: (presetId: string) => void;
  updatePreset: (presetId: string, updates: Partial<ToolPreset>) => void;
  setConsent: (consent: boolean) => void;
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

export const useStore = create<StoreState>((set) => ({
  activeTool: null,
  theme: (initialState.theme as 'light' | 'dark') || 'dark',
  presets: initialState.presets || [],
  consentGiven: initialState.consentGiven || false,

  setActiveTool: (toolId) => set({ activeTool: toolId }),

  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    saveState({ theme: newTheme, presets: state.presets, consentGiven: state.consentGiven });
    return { theme: newTheme };
  }),

  addPreset: (preset) => set((state) => {
    const newPresets = [...state.presets, preset];
    saveState({ theme: state.theme, presets: newPresets, consentGiven: state.consentGiven });
    return { presets: newPresets };
  }),

  removePreset: (presetId) => set((state) => {
    const newPresets = state.presets.filter((p) => p.id !== presetId);
    saveState({ theme: state.theme, presets: newPresets, consentGiven: state.consentGiven });
    return { presets: newPresets };
  }),

  updatePreset: (presetId, updates) => set((state) => {
    const newPresets = state.presets.map((p) =>
      p.id === presetId ? { ...p, ...updates } : p
    );
    saveState({ theme: state.theme, presets: newPresets, consentGiven: state.consentGiven });
    return { presets: newPresets };
  }),

  setConsent: (consent) => set((state) => {
    saveState({ theme: state.theme, presets: state.presets, consentGiven: consent });
    return { consentGiven: consent };
  }),
}));
