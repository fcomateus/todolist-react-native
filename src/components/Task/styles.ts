import styled, { useTheme } from "styled-components/native";

import { TaskType } from "@components/List";

export const Container = styled.View`
    height: 64px;
    border: 1px solid ${() => useTheme().COLORS.GRAY_400};
    background-color: ${() => useTheme().COLORS.GRAY_500};
`

export const Content = styled.Text`
    color: ${() => useTheme().COLORS.GRAY_100};
    text-decoration: ${({ concluded }: TaskType) => (concluded ? 'line-through' : 'none')};
`