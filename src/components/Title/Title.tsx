import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

// Types
import { TitleProps } from './types.d';

const Title: FunctionComponent<TitleProps> = ({ label }) => (
  <Text
    // style={[styles.sectionTitle, { color: themeColors.colors.title }]}
    accessible
    accessibilityLabel={label}
    accessibilityRole="text"
  >
    {label}
  </Text>
);

export default Title;
