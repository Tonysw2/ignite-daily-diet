import { ViewProps } from 'react-native'
import { Input } from '../Input'
import { Container, LabelText } from './styles'

type LabelProps = ViewProps & {
  title: string
  textarea?: boolean
}

export function Label({ title, textarea, ...rest }: LabelProps) {
  return (
    <Container {...rest}>
      <LabelText>{title}</LabelText>
      <Input textarea={textarea} />
    </Container>
  )
}
