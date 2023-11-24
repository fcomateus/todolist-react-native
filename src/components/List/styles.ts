import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
  background-color: ${() => useTheme().COLORS.GRAY_400};
  flex: 1;
`