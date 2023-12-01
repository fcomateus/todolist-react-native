import { AddTaskSection } from "@components/AddTaskSection";
import { Container, HighlightSection } from "./styles";
import { useTheme } from "styled-components/native";
import { Highlight } from "@components/Highlight";
import { EmptyList } from "@components/EmptyList";
import { FlatList } from "react-native";
import { useState } from "react";

export function List() {
  const [tasks, setTasks] = useState([])

  const { COLORS } = useTheme()

  

  return (
    <Container>
      <AddTaskSection />

      <HighlightSection>
        <Highlight color={COLORS.BLUE} title="Criadas" number={7}/>
        <Highlight color={COLORS.PURPLE} title="Concluídas" number={10}/>
      </HighlightSection>

      <FlatList 
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />

    </Container>
  )
}