import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import { MEAL_KEY } from '../storageConfig'
import { AllMealsTypeDTO, MealTypeDTO } from './mealsStorageDTO'

export async function addMealToAsyncStorage(data: MealTypeDTO) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const meals: AllMealsTypeDTO = storage ? JSON.parse(storage) : []

    let hasChanged = false

    const updatedMeals = meals.map((section) => {
      const sectionDate = dayjs(section.title)
      const mealsDate = dayjs(data.date)

      if (dayjs(sectionDate).isSame(mealsDate, 'day')) {
        hasChanged = true
        return { ...section, data: [data, ...section.data] }
      }

      return section
    })

    if (hasChanged) {
      hasChanged = false
      console.log('add in existent')
      return await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(updatedMeals))
    }

    const updatedMealsWithSection = [
      { title: data.date, data: [data] },
      ...meals,
    ]

    console.log('added new section')

    return await AsyncStorage.setItem(
      MEAL_KEY,
      JSON.stringify(updatedMealsWithSection)
    )
  } catch (error) {
    console.error('Error adding data to AsyncStorage:', error)
    throw error
  }
}
