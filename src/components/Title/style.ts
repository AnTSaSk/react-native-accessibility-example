import styled from '@emotion/native';

import { TitleProps } from './types';

export const TitleComponent = styled.Text<TitleProps>`
  margin: 0 0 15px;
  color: ${(props) =>
    props.isDark ? props.theme.colors.white : props.theme.colors.grey};
  font-size: 26px;
`;
