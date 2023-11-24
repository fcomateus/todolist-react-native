import { AddTaskSection } from "@components/AddTaskSection";
import { Highlight } from "@components/Highlight";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function List() {

  const { COLORS } = useTheme()

  return (
    <Container>
      <AddTaskSection />

      <Highlight color={COLORS.PURPLE} title="Teste" number={7}/>

    </Container>
  )
}