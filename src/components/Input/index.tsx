import { useState } from 'react'
import { Container } from './styles'

type InputProps = {
  textarea?: boolean
}

export function Input({ textarea }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Container
      multiline={textarea}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      textarea={textarea}
    />
  )
}
