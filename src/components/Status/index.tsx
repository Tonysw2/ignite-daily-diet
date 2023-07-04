import { Container } from './styles'

type StatusProps = {
  size: number
  type: 'primary' | 'secondary'
}

export function Status({ type, size }: StatusProps) {
  return <Container size={size} type={type} />
}
