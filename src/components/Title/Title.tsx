import React, { FunctionComponent } from 'react';

// Context
import { useTheme } from '../../hooks/theme';

// Types
import { TitleProps } from './types.d';

// Style
import { TitleComponent } from './style';

const Title: FunctionComponent<TitleProps> = (props) => {
  const { theme } = useTheme();

  return (
    <TitleComponent
      isDark={theme === 'dark'}
      accessible
      accessibilityLabel={props.label}
      accessibilityRole="text"
      {...props}
    >
      {props.label}
    </TitleComponent>
  );
};

export default Title;
