import { View } from 'react-native'
import { HighLight } from '../../components/HighLight'
import {
  Card,
  Container,
  GapHorizontal,
  InfoCard,
  InfoContainer,
  Title,
} from './styles'

export function Statistics() {
  return (
    <Container>
      <Title>Estatísticas gerais</Title>

      <View style={{ width: '100%' }}>
        <Card>
          <HighLight
            title="22"
            subtitle="melhor sequência de pratos dentro da dieta"
          />
        </Card>

        <Card>
          <HighLight title="109" subtitle="refeições registradas" />
        </Card>

        <InfoContainer>
          <InfoCard type="positive">
            <HighLight title="99" subtitle="refeições dentro da dieta" />
          </InfoCard>

          <GapHorizontal />

          <InfoCard type="negative">
            <HighLight title="10" subtitle="refeições fora da dieta" />
          </InfoCard>
        </InfoContainer>
      </View>
    </Container>
  )
}
