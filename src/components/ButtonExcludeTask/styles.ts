import styled, { useTheme } from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`

`

export const Icon = styled(Feather).attrs( () => ({
    size: 20,
}))``