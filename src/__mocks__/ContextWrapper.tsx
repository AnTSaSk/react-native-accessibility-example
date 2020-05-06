import React, { FunctionComponent } from 'react';
import { AppearanceProvider } from 'react-native-appearance/src/mock';

// Context
import { AccessibilityProvider } from '../hooks/Accessibility';
import { ThemeProvider } from '../hooks/Theme';

const ContextWrapper: FunctionComponent<{}> = ({ children }) => (
  <AppearanceProvider>
    <AccessibilityProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AccessibilityProvider>
  </AppearanceProvider>
);

export default ContextWrapper;
