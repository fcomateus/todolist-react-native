import { useTheme } from "styled-components/native";
import { Container, Icon } from "./styles";

export function ButtonExcludeTask() {
    const { COLORS } = useTheme()

    return (
        <Container>
            <Icon
                name="trash-2"
                color={COLORS.GRAY_300}
            />
        </Container>
    )
}