import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';

// Context
import { AccessibilityProvider } from './src/hooks/accessibility';

// Navigation
import Navigation from './src';

const App = () => {
  return (
    <AppearanceProvider>
      <AccessibilityProvider>
        <Navigation />
      </AccessibilityProvider>
    </AppearanceProvider>
  );
};

export default App;
