import { Container } from "./styles";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { useTheme } from "styled-components";
import { useState } from "react";

export function AddTaskSection() {
  const [isFocused, setIsFocused] = useState(false)

  const { COLORS } = useTheme()

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS.GRAY_300}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <ButtonIcon
        icon="add-circle-outline"
      />
    </Container>
  )
}