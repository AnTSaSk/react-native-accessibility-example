import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';

import { lightColors } from '../variables';

const ThemeWrapper: FunctionComponent<{}> = ({ children }) => (
  <ThemeProvider theme={{ colors: lightColors }}>{children}</ThemeProvider>
);

export default ThemeWrapper;
