import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { Loading } from '../../components/Loading'
import { getMealsStatisticsFromAsyncStorage } from '../../storage/Meals/getMealsStatistics'
import { Header } from './components/Header'
import { Meals } from './components/Meals'
import { Percent } from './components/Percent'
import { Container } from './styles'

export function Home() {
  const [statisticsState, setStatisticsState] = useState<{
    totalMeals: number
    healthyMealCount: number
    unhealthyMealCount: number
    longestHealthySequence: number
    percentage: number
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
      <Header />

      {statisticsState ? (
        <Percent
          percentage={statisticsState?.percentage!}
          subtitle="das refeições dentro da dieta"
        />
      ) : (
        <Loading />
      )}

      <Meals />
    </Container>
  )
}
