import { Container } from "./styles";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { useTheme } from "styled-components";
import { useState } from "react";

type crudActions = {
  onAdd: () => void
}

export function AddTaskSection({ onAdd }: crudActions) {
  const [isFocused, setIsFocused] = useState(false)
  const [task, setTask] = useState('')

  const { COLORS } = useTheme()

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS.GRAY_300}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={task}
        onChangeText={value => setTask(value)}
      />

      <ButtonIcon
        icon="add-circle-outline"
      />
    </Container>
  )
}