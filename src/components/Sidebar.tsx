import React, { useState, useMemo, memo } from 'react';
import { useStore } from '@/store/useStore';
import { tools, categoryNames } from '@/data/tools';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';

const SidebarComponent: React.FC = () => {
  const { activeTool, setActiveTool, toggleFavorite, isFavorite, isSidebarCollapsed, toggleSidebar } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  // Memoize filtered tools
  const filteredTools = useMemo(() => {
    if (!searchQuery) return tools;
    
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Memoize grouped tools
  const groupedTools = useMemo(() => {
    return filteredTools.reduce((acc, tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = [];
      }
      acc[tool.category].push(tool);
      return acc;
    }, {} as Record<string, typeof tools>);
  }, [filteredTools]);

  const getIcon = useMemo(() => (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Box;
    return <IconComponent className="w-4 h-4" />;
  }, []);

  return (
    <aside className={clsx(
      "h-full bg-gradient-to-b from-white via-light-surface-elevated to-white dark:from-dark-surface dark:via-dark-surface-elevated dark:to-dark-surface border-r border-light-border dark:border-dark-border overflow-y-auto mobile-scroll mobile-optimized shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out",
      isSidebarCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-3">
        {/* Toggle Button */}
        <div className="flex items-center justify-between mb-3">
          {!isSidebarCollapsed && (
            <h1 className="text-base font-bold text-gray-900 dark:text-white">Crypto Tools</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? (
              <Icons.ChevronRight className="w-4 h-4" />
            ) : (
              <Icons.ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
        {/* Search Bar */}
        {!isSidebarCollapsed && (
          <div className="mb-3">
            <div className="relative group">
              <Icons.Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input w-full pl-8 pr-8 py-2.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all touch-target shadow-sm hover:shadow-md focus:shadow-lg focus:bg-white dark:focus:bg-dark-surface"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <Icons.X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        )}

        <nav className="space-y-3">
          {/* Favorites Section */}
          {(() => {
            const favoriteTools = tools.filter(tool => isFavorite(tool.id));
            if (favoriteTools.length > 0) {
              return (
                <div>
                  {!isSidebarCollapsed && (
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5 px-1">
                      Favorites
                    </h2>
                  )}
                  <ul className="space-y-0.5">
                    {favoriteTools.map((tool) => (
                      <li key={tool.id}>
                        <div className="flex items-center group">
                          <button
                            onClick={() => setActiveTool(tool.id)}
                            className={clsx(
                              'flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all touch-target',
                              'hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 dark:hover:from-primary/20 dark:hover:to-accent/20',
                              activeTool === tool.id
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg transform scale-105'
                                : 'text-gray-700 dark:text-gray-300 hover:shadow-md',
                              isSidebarCollapsed ? 'justify-center' : ''
                            )}
                            aria-label={`Open ${tool.name}`}
                          >
                            {getIcon(tool.icon)}
                            {!isSidebarCollapsed && <span className="truncate">{tool.name}</span>}
                          </button>
                          {!isSidebarCollapsed && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(tool.id);
                              }}
                              className={clsx(
                                'p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300',
                                'hover:bg-gradient-to-br hover:from-yellow-400/20 hover:to-orange-400/20',
                                'opacity-100 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-500 shadow-md'
                              )}
                              aria-label={`Remove ${tool.name} from favorites`}
                            >
                              <Icons.Star className="w-4 h-4 fill-current animate-pulse" />
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })()}

          {Object.entries(groupedTools).map(([category, categoryTools]) => (
            <div key={category}>
              {!isSidebarCollapsed && (
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5 px-1">
                  {categoryNames[category]}
                </h2>
              )}
              <ul className="space-y-0.5">
                {categoryTools.map((tool) => (
                  <li key={tool.id}>
                    <div className="flex items-center group">
                      <button
                        onClick={() => setActiveTool(tool.id)}
                        className={clsx(
                          'flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all touch-target',
                          'hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 dark:hover:from-primary/20 dark:hover:to-accent/20',
                          activeTool === tool.id
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg transform scale-105'
                            : 'text-gray-700 dark:text-gray-300 hover:shadow-md',
                          isSidebarCollapsed ? 'justify-center' : ''
                        )}
                        aria-label={`Open ${tool.name}`}
                      >
                        {getIcon(tool.icon)}
                        {!isSidebarCollapsed && <span className="truncate">{tool.name}</span>}
                      </button>
                      {!isSidebarCollapsed && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(tool.id);
                          }}
                          className={clsx(
                            'p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300',
                            'hover:bg-gradient-to-br hover:from-yellow-400/20 hover:to-orange-400/20',
                            isFavorite(tool.id) 
                              ? 'opacity-100 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-500 shadow-md' 
                              : 'text-gray-400 hover:text-yellow-500'
                          )}
                          aria-label={isFavorite(tool.id) ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`}
                        >
                          <Icons.Star className={clsx('w-4 h-4 transition-all', isFavorite(tool.id) && 'fill-current animate-pulse')} />
                        </button>
                      )}
                    </div>
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

export const Sidebar = memo(SidebarComponent);
