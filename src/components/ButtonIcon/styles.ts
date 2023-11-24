import styled, { useTheme } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  background-color: ${() => useTheme().COLORS.BLUE};
  border-radius: 6px;
  
  height: 52px;
  width: 52px;

  justify-content: center;
  align-items: center;
`

export const Icon = styled(MaterialIcons).attrs( () => ({
  size: 20
}))``