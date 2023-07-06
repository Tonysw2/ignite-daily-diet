import AsyncStorage from '@react-native-async-storage/async-storage'
import { isSameDay } from 'date-fns'
import { MEAL_KEY } from '../storageConfig'
import { AllMealsTypeDTO, MealTypeDTO } from './mealsStorageDTO'

export async function addMealToAsyncStorage(data: MealTypeDTO) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const meals: AllMealsTypeDTO = storage ? JSON.parse(storage) : []

    const dateExists = meals.filter((section) =>
      isSameDay(section.title, data.date)
    )

    if (dateExists.length > 0) {
      const updatedMeals = meals.map((section) => {
        if (isSameDay(section.title, data.date)) {
          return {
            ...section,
            data: [...section.data, data],
          }
        }
      })

      await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(updatedMeals))
      return
    } else {
      const newSection = {
        title: data.date,
        data: [data],
      }

      await AsyncStorage.setItem(MEAL_KEY, JSON.stringify([newSection]))
    }
  } catch (error) {
    console.error('Error adding data to AsyncStorage:', error)
    throw error
  }
}
