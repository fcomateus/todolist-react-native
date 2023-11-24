import { Container, Title, Number } from "./styles";

type Props = {
  title: string,
  color: string,
  number: number
}

export function Highlight({ title, color, number }: Props) {
  return (
    <Container>
      <Title
        color={color}
      >
        { title }
      </Title>

      <Number>
        { number }
      </Number>
    </Container>
  )
}