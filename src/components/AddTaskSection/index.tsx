import { Container } from "./styles";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { useTheme } from "styled-components";

export function AddTaskSection() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS.GRAY_300}
      />

      <ButtonIcon
        icon="add-circle-outline"
      />
    </Container>
  )
}