import { ButtonExcludeTask } from "@components/ButtonExcludeTask";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Container, Content } from "./styles";
import { TaskType } from "@components/List";

type Props = TaskType & {
    onRemove: () => void,
}

export function Task({ concluded, content, onRemove }: Props) {
    return (
        <Container>
            <BouncyCheckbox />

            <Content
                concluded={concluded}
            >
                { content }
            </Content>

           <ButtonExcludeTask />
        </Container>
    )
}