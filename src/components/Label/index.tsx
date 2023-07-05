import { Input } from '../Input'
import { Container, LabelText } from './styles'

type LabelProps = {
  title: string
  textarea?: boolean
}

export function Label({ title, textarea }: LabelProps) {
  return (
    <Container>
      <LabelText>{title}</LabelText>
      <Input textarea={textarea} />
    </Container>
  )
}
