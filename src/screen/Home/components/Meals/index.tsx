import { useFocusEffect } from '@react-navigation/native'
import { format, parseISO } from 'date-fns'
import { useCallback, useState } from 'react'
import { SectionList } from 'react-native'
import { EmptyMeals } from '../../../../components/EmptyMeals'
import { getMealsFromAsyncStorage } from '../../../../storage/Meals/getAllMeals'
import { AllMealsTypeDTO } from '../../../../storage/Meals/mealsStorageDTO'
import { AddMeals } from '../AddMeals'
import { Meal } from '../Meal'
import { Container, Date } from './styles'

export function Meals() {
  const [meals, setMeals] = useState<AllMealsTypeDTO>([])

  async function fetchMealsData() {
    try {
      const meals = await getMealsFromAsyncStorage()
      setMeals(meals)
    } catch (error) {
      console.log(error)
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

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Meal
            id={item.id}
            title={format(parseISO(item.time), 'HH:mm')}
            meal={item.food}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Date>{format(parseISO(title), 'dd/mm/yyyy')}</Date>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1, gap: 8 }}
        ListEmptyComponent={EmptyMeals}
      />
    </Container>
  )
}
