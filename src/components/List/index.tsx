import { AddTaskSection } from "@components/AddTaskSection";
import { Container, HighlightSection } from "./styles";
import { useTheme } from "styled-components/native";
import { Highlight } from "@components/Highlight";
import { EmptyList } from "@components/EmptyList";
import { FlatList, Alert } from "react-native";
import { Task } from "@components/Task";
import { useState } from "react";

export type TaskType = {
  content: string,
  concluded: boolean
}

export function List() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const tasksConcluded = tasks.filter(task => task.concluded === true)

  const { COLORS } = useTheme()

  function handleAddTask(task: string) {
    const taskData = {
      content: task,
      concluded: false
    }

    setTasks(prevState => [...prevState, taskData])
  }

  function handleRemoveTask(task: TaskType) {
    Alert.alert("Remover", `Remover tarefa: ${task.content}`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(item => item.content !== task.content))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
        data={tasks}
        keyExtractor={item => item.content}
        renderItem={({ item }) => (
          <Task
            concluded={item.concluded}
            content={item.content}
            onRemove={() => handleRemoveTask(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />

    </Container>
  )
}