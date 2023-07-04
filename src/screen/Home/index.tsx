import { Header } from './components/Header'
import { Meals } from './components/Meals'
import { Percent } from './components/Percent'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Percent title="90%" subtitle="das refeições dentro da dieta" />
      <Meals />
    </Container>
  )
}
