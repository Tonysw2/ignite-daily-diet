import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { SectionList } from 'react-native'
import { EmptyMeals } from '../../../../components/EmptyMeals'
import { Loading } from '../../../../components/Loading'
import { getAllMealsFromAsyncStorage } from '../../../../storage/Meals/getAllMeals'
import { AllMealsTypeDTO } from '../../../../storage/Meals/mealsStorageDTO'
import { formatDate } from '../../../../utils/formatDate'
import { AddMeals } from '../AddMeals'
import { Meal } from '../Meal'
import { Container, Date } from './styles'

export function Meals() {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<AllMealsTypeDTO>([])

  async function fetchMealsData() {
    try {
      setIsLoading(true)
      const storageMeals = await getAllMealsFromAsyncStorage()
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
          renderItem={({ item }) => <Meal meal={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Date>{formatDate(title)}</Date>
          )}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          ListEmptyComponent={EmptyMeals}
        />
      )}
    </Container>
  )
}
