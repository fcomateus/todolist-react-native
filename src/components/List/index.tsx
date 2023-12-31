import { Container, HighlightSection, AddTaskSection} from "./styles";
import { useTheme } from "styled-components/native";
import { Highlight } from "@components/Highlight";
import { EmptyList } from "@components/EmptyList";
import { FlatList, Alert } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Task } from "@components/Task";
import { useState } from "react";

export type TaskType = {
  content: string,
  concluded: boolean
}

export function List() {
  const [isFocused, setIsFocused] = useState(false)
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [task, setTask] = useState('')


  const qntTasksConcluded = tasks.filter(task => task.concluded === true)

  const { COLORS } = useTheme()

  function handleAddTask(taskContent: string) {
    taskContent = taskContent.trim()
    const isTaskAlreadyInList = tasks.filter(item => item.content === taskContent).length > 0

    if(isTaskAlreadyInList) {
      setTask('')
      return Alert.alert("Tarefa já inserida", `Tarefa ${taskContent} já está na lista`, [
        {
          text: 'OK',
          style: 'cancel'
        }
      ])
    }

    const taskData: TaskType = {
      content: taskContent,
      concluded: false
    }

    setTasks(prevState => [...prevState, taskData])
    setTask('')
  }

  function handleChangeConclusionStatus(taskToUpdate: TaskType) {
    const updatedTasks = tasks.map(item => {
      if(item.content === taskToUpdate.content) {
        item.concluded = taskToUpdate.concluded
      }
      return item
    })

    setTasks(updatedTasks)
  }

  function handleRemoveTask(taskContent: string) {
    Alert.alert("Remover", `Remover tarefa: ${taskContent}`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(item => item.content !== taskContent))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <Container>
      <AddTaskSection>
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
          onPress={() => handleAddTask(task)}
        />
      </AddTaskSection>

      <HighlightSection>
        <Highlight color={COLORS.BLUE} title="Criadas" number={tasks.length}/>
        <Highlight color={COLORS.PURPLE} title="Concluídas" number={qntTasksConcluded.length}/>
      </HighlightSection>

      <FlatList
        data={tasks}
        keyExtractor={item => item.content}
        renderItem={({ item }) => (
          <Task
            concluded={item.concluded}
            content={item.content}
            onRemove={handleRemoveTask}
            onChangeConclusionStatus={handleChangeConclusionStatus}
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