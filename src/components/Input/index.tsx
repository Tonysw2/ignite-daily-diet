import { Ref, forwardRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Container } from './styles'

type InputProps = {
  textarea?: boolean
  onChangeText: (text: string) => void
  value: string
}

export const Input = forwardRef(
  ({ textarea, onChangeText, value }: InputProps, ref: Ref<TextInput>) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <Container
        ref={ref}
        multiline={textarea}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        textarea={textarea}
        onChangeText={onChangeText}
        value={value}
        keyboardAppearance="dark"
      />
    )
  }
)
