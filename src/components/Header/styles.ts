import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
  background-color: ${() => useTheme().COLORS.GRAY_700};
  height: 20%;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`