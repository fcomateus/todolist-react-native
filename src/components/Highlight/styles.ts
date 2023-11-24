import styled, { useTheme } from "styled-components/native";


type TitleProps = {
  color: string
}

export const Container = styled.View``

export const Title = styled.Text`
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  color: ${({ color } : TitleProps) => color};
`

export const Number = styled.Text`
  color: ${() => useTheme().COLORS.GRAY_100};
`