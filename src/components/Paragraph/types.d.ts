import { ReactNode } from 'react';

import { themeStyleProps } from '../../hooks/types.d';

export interface ParagraphProps {
  className?: string;
  isDark?: boolean;
  theme?: themeStyleProps;
  children: ReactNode;
}
