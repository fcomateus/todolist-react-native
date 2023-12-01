import { AddTaskSection } from "@components/AddTaskSection";
import { Container, HighlightSection } from "./styles";
import { useTheme } from "styled-components/native";
import { Highlight } from "@components/Highlight";
import { EmptyList } from "@components/EmptyList";
import { FlatList } from "react-native";
import { useState } from "react";

type Task = {
  task: string,
  concluded: boolean
}

export function List() {
  const [tasks, setTasks] = useState<Task[]>([])
  const tasksConcluded = tasks.filter(task => task.concluded === true)

  const { COLORS } = useTheme()

  function handleAddTask(task: string) {
    const taskData = {
      task,
      concluded: false
    }

    setTasks(prevState => [...prevState, taskData])
  }

  return (
    <Container>
      <AddTaskSection 
        onAdd={handleAddTask}
      />

      <HighlightSection>
        <Highlight color={COLORS.BLUE} title="Criadas" number={tasks.length}/>
        <Highlight color={COLORS.PURPLE} title="Concluídas" number={tasksConcluded.length}/>
      </HighlightSection>

      <FlatList 
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />

    </Container>
  )
}