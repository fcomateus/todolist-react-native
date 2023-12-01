import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
  padding: 0 24px;

  background-color: ${() => useTheme().COLORS.GRAY_400};
  flex: 1;
`

export const HighlightSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`