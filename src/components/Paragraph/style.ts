import styled from '@emotion/native';

import { ParagraphProps } from './types';

export const ParagraphComponent = styled.Text<ParagraphProps>`
  margin: 5px 0;
  color: ${(props) =>
    props.isDark ? props.theme.colors.white : props.theme.colors.black};
  font-size: 16px;
`;
