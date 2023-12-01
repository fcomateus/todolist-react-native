import styled, { useTheme } from "styled-components/native";


type TitleProps = {
  color: string
}

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const Title = styled.Text`
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  color: ${({ color } : TitleProps) => color};
`

export const Number = styled.Text`
  color: ${() => useTheme().COLORS.GRAY_100};

  padding: 2px 8px;
  background-color: ${() => useTheme().COLORS.GRAY_500};
  border-radius: 999px;
`