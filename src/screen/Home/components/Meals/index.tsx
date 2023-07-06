import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { SectionList } from 'react-native'
import { EmptyMeals } from '../../../../components/EmptyMeals'
import { Loading } from '../../../../components/Loading'
import { getMealsFromAsyncStorage } from '../../../../storage/Meals/getAllMeals'
import { AllMealsTypeDTO } from '../../../../storage/Meals/mealsStorageDTO'
import { formatDate, formatTime } from '../../../../utils/Formatter'
import { AddMeals } from '../AddMeals'
import { Meal } from '../Meal'
import { Container, Date } from './styles'

export function Meals() {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<AllMealsTypeDTO>([])

  async function fetchMealsData() {
    try {
      setIsLoading(true)
      const storageMeals = await getMealsFromAsyncStorage()
      setMeals(storageMeals)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsData()
    }, [])
  )

  return (
    <Container>
      <AddMeals />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Meal id={item.id} title={formatTime(item.time)} meal={item.food} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Date>{formatDate(title)}</Date>
          )}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1, gap: 8 }}
          ListEmptyComponent={EmptyMeals}
        />
      )}
    </Container>
  )
}
