import type { ReactNode } from 'react';
import React, { createContext, useContext, useMemo, useState } from 'react';

import { navigationConfig } from '../navigation';

type NavigationContextType = {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

/**
 * Provides navigation state and functions to manage the current tab.
 *
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to be wrapped by the provider
 * @returns {JSX.Element} The provider wrapping child components with navigation context.
 */
export function NavigationProvider({ children }: { children: ReactNode }) {
  // Initialize state with the first key from the navigation config as the default tab
  const [currentTab, setCurrentTab] = useState<string>(
    Object.keys(navigationConfig)[0],
  );

  // Memoize the value object to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ currentTab, setCurrentTab }),
    [currentTab],
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}

/**
 * Custom hook to access the navigation context.
 *
 * @returns {NavigationContextType} The current navigation state and functions.
 * @throws Will throw an error if used outside a NavigationProvider.
 */
export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
