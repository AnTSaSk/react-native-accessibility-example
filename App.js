import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';

// Context
import { AccessibilityProvider } from './src/hooks/accessibility';
import { ThemeProvider } from './src/hooks/theme';

// Navigation
import Navigation from './src';

const App = () => {
  return (
    <AppearanceProvider>
      <AccessibilityProvider>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </AccessibilityProvider>
    </AppearanceProvider>
  );
};

export default App;
