import React, { FunctionComponent } from 'react';
import { AppearanceProvider } from 'react-native-appearance/src/mock';

// Context
import { AccessibilityProvider } from '../hooks/accessibility';
import { ThemeProvider } from '../hooks/theme';

const ContextWrapper: FunctionComponent<{}> = ({ children }) => (
  <AppearanceProvider>
    <AccessibilityProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AccessibilityProvider>
  </AppearanceProvider>
);

export default ContextWrapper;
