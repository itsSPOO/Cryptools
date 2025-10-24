import React, { useState } from 'react';
import { useStore } from '@/store/useStore';
import { tools, categoryNames } from '@/data/tools';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';

export const Sidebar: React.FC = () => {
  const { activeTool, setActiveTool } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tools based on search query
  const filteredTools = searchQuery
    ? tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tools;

  // Group tools by category
  const groupedTools = filteredTools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Box;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <aside className="w-64 h-full bg-white dark:bg-dark-surface border-r border-light-border dark:border-dark-border overflow-y-auto mobile-scroll mobile-optimized">
      <div className="p-3 sm:p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2 sm:py-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all touch-target"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded transition-colors"
              >
                <Icons.X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <nav className="space-y-4">
          {Object.entries(groupedTools).map(([category, categoryTools]) => (
            <div key={category}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-2">
                {categoryNames[category]}
              </h2>
              <ul className="space-y-0.5">
                {categoryTools.map((tool) => (
                  <li key={tool.id}>
                    <button
                      onClick={() => setActiveTool(tool.id)}
                      className={clsx(
                        'w-full flex items-center gap-3 px-3 py-3 sm:py-2 rounded-lg text-sm font-medium transition-all touch-target',
                        'hover:bg-light-hover dark:hover:bg-dark-hover',
                        activeTool === tool.id
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-gray-700 dark:text-gray-300'
                      )}
                      aria-label={`Open ${tool.name}`}
                    >
                      {getIcon(tool.icon)}
                      <span className="truncate">{tool.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
