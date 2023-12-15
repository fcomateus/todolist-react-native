import { useTheme } from "styled-components/native";
import { Container, Icon } from "./styles";

type Props = {
    removeTask: () => void
}

export function ButtonExcludeTask({ removeTask }: Props) {
    const { COLORS } = useTheme()

    return (
        <Container
            onPress={removeTask}
        >
            <Icon
                name="trash-2"
                color={COLORS.GRAY_300}
            />
        </Container>
    )
}