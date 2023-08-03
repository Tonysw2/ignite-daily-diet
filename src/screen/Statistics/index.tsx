import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { View } from 'react-native'
import { HighLight } from '../../components/HighLight'
import { getMealsStatisticsFromAsyncStorage } from '../../storage/Meals/getMealsStatistics'
import {
  Card,
  Container,
  GapHorizontal,
  InfoCard,
  InfoContainer,
  Title,
} from './styles'

export function Statistics() {
  const [statisticsState, setStatisticsState] = useState<{
    totalMeals: number
    healthyMealCount: number
    unhealthyMealCount: number
    longestHealthySequence: number
  }>()

  async function getMealStatistics() {
    const statistics = await getMealsStatisticsFromAsyncStorage()
    setStatisticsState(statistics)
  }

  useFocusEffect(
    useCallback(() => {
      getMealStatistics()
    }, [])
  )

  return (
    <Container>
      <Title>Estatísticas gerais</Title>

      <View style={{ width: '100%' }}>
        <Card>
          <HighLight
            title={String(statisticsState?.longestHealthySequence)}
            subtitle="melhor sequência de pratos dentro da dieta"
          />
        </Card>

        <Card>
          <HighLight
            title={String(statisticsState?.totalMeals)}
            subtitle="refeições registradas"
          />
        </Card>

        <InfoContainer>
          <InfoCard type="positive">
            <HighLight
              title={String(statisticsState?.healthyMealCount)}
              subtitle="refeições dentro da dieta"
            />
          </InfoCard>

          <GapHorizontal />

          <InfoCard type="negative">
            <HighLight
              title={String(statisticsState?.unhealthyMealCount)}
              subtitle="refeições fora da dieta"
            />
          </InfoCard>
        </InfoContainer>
      </View>
    </Container>
  )
}
