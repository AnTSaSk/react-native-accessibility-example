import React, { StatelessComponent } from 'react';

// Context
import { useTheme } from '../../hooks/theme';

// Types
import { ParagraphProps } from './types';

// Styles
import { ParagraphComponent } from './style';

const Paragraph: StatelessComponent<ParagraphProps> = (props) => {
  const { theme } = useTheme();

  return (
    <ParagraphComponent
      isDark={theme === 'dark'}
      accessible
      accessibilityRole="text"
      {...props}
    >
      {props.children}
    </ParagraphComponent>
  );
};

export default Paragraph;
