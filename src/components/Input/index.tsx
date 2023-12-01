import { TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps & {
  isFocused: boolean
}

export function Input({ isFocused, ...rest }: Props) {
  return (
    <Container
      isFocused={isFocused}
      {...rest}
    />
  )
}