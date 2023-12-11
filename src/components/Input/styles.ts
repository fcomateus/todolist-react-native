import styled, { useTheme } from "styled-components/native";

type InputProps = {
  isFocused: boolean
}

export const Container = styled.TextInput`
  flex: 1;
  
  background-color: ${() => useTheme().COLORS.GRAY_400};
  color: ${() => useTheme().COLORS.GRAY_100};

  height: 54px;
  padding: 16px;


  border-radius: 6px;
  border: 1px solid ${({ isFocused }: InputProps) => (isFocused ? useTheme().COLORS.PURPLE : useTheme().COLORS.GRAY_700)};

`