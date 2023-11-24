import styled, { useTheme } from "styled-components/native";

export const Container = styled.TextInput`
  flex: 1;
  
  background-color: ${() => useTheme().COLORS.GRAY_400};
  color: ${() => useTheme().COLORS.GRAY_100};

  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${() => useTheme().COLORS.GRAY_700};

`