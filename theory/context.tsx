import { createContext, useContext } from 'react';

type ThemeContextType = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};

const ParentComponent = () => {
  return (
    <ThemeContext.Provider value='dark'>
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

const ChildComponent = () => {
  const theme = useThemeContext();
  return <div>{theme}</div>;
};
