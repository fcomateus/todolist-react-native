import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;

    padding-top: 48px;
    margin-top: 20px;

    border-top-width: 0.8px;
    border-top-color: ${() => useTheme().COLORS.GRAY_300};

`

export const EmptyListImage = styled.Image`
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
`

export const Title = styled.Text`
    font-family: ${() => useTheme().FONT_FAMILY.BOLD};
    color: ${() => useTheme().COLORS.GRAY_300};
`

export const Message = styled.Text`
    color: ${() => useTheme().COLORS.GRAY_300};
`