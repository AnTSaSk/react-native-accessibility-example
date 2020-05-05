import styled from '@emotion/native';

// Types
import { ParagraphProps } from '../components/Paragraph/types.d';
import { ThemeViewProps } from './types.d';

// Components
import Paragraph from '../components/Paragraph';

export const DrawerHeader = styled.View`
  padding: 0 15px;
`;

export const DrawerFooter = styled.View`
  padding: 0 15px;
`;

export const ThemeTitle = styled(Paragraph)`
  margin: 0 0 15px;
  color: ${(props) =>
    props.isDark ? props.theme.colors.white : props.theme.colors.black};
  font-size: 20px;
`;

export const ThemeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ThemeTouchable = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;

export const ThemeParagraph = styled.Text<ParagraphProps>`
  color: ${(props) =>
    props.isDark ? props.theme.colors.white : props.theme.colors.black};
  font-size: 16px;
`;

export const ThemeIcon = styled.View<ThemeViewProps>`
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 30px;
`;

export const ThemeIconLight = styled(ThemeIcon)`
  background: ${(props) => props.theme.colors.white};
`;

export const ThemeIconDark = styled(ThemeIcon)`
  background: ${(props) => props.theme.colors.black};
`;

export const ThemeIconContrast = styled(ThemeIcon)`
  background: ${(props) => props.theme.colors.grey};
`;
