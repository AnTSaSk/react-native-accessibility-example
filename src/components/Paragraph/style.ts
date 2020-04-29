import styled from '@emotion/native';

export const ParagraphComponent = styled.Text`
  margin: 5px 0;
  color: ${(props) =>
    props.isDark ? props.theme.colors.white : props.theme.colors.black};
  font-size: 16px;
`;
