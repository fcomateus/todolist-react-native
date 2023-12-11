import { Container, Content } from "./styles";
import { TaskType } from "@components/List";

type Props = TaskType & {
    onRemove: () => void,
}

export function Task({ concluded, content, onRemove }: Props) {
    return (
        <Container>
            <Content
                concluded={concluded}
            >
                { content }
            </Content>
        </Container>
    )
}