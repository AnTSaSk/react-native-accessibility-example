import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

// Types
import { ParagraphProps } from './types.d';

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => (
  <Text
    // style={[styles.sectionParagraph, { color: themeColors.colors.Paragraph }]}
    accessible
    accessibilityRole="text"
  >
    {children}
  </Text>
);

export default Paragraph;
