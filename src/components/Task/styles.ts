import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
    height: 64px;
    border: 1px solid ${() => useTheme().COLORS.GRAY_300};
    border-radius: 10px;
    background-color: ${() => useTheme().COLORS.GRAY_500};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 8px;
    padding: 12px 20px;
`
