import { Container, EmptyListImage, Title, Message } from "./styles";

import clipboard from '@assets/EmptyList.png'

export function EmptyList() {
    return (
        <Container>
            <EmptyListImage source={clipboard}/>

            <Title>
                Você ainda não tem tarefas cadastradas
            </Title>

            <Message>
                Crie tarefas e organize seus itens a fazer
            </Message>

        </Container>
    )
}