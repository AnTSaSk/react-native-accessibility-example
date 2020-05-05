import React, { FunctionComponent } from 'react';
import { AppearanceProvider } from 'react-native-appearance';

// Context
import { AccessibilityProvider } from './src/hooks/Accessibility';
import { ThemeProvider } from './src/hooks/Theme';

// Navigation
import Navigation from './src';

const App: FunctionComponent<{}> = () => {
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
