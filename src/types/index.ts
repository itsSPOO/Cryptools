export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  icon: string;
}

export type ToolCategory = 'encryption' | 'hash' | 'conversions' | 'ciphers' | 'custom' | 'legal';

export interface ToolPreset {
  id: string;
  toolId: string;
  name: string;
  config: Record<string, any>;
  createdAt: string;
}

export interface AppState {
  activeTool: string | null;
  theme: 'light' | 'dark';
  presets: ToolPreset[];
  favorites: string[];
  isSidebarCollapsed: boolean;
}
