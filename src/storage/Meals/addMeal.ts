import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import { MEAL_KEY } from '../storageConfig'
import { AllMealsTypeDTO, MealTypeDTO } from './mealsStorageDTO'

export async function addMealToAsyncStorage(data: MealTypeDTO) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const meals: AllMealsTypeDTO = storage ? JSON.parse(storage) : []

    if (meals.length === 0) {
      const newSectionMeal = [
        {
          title: data.date,
          data: [data],
        },
      ]

      await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(newSectionMeal))
    }

    for (const section of meals) {
      let index = 0

      if (dayjs(section.title).isSame(data.date, 'date')) {
        console.log(true, index)
      } else {
        const newSectionMeal = {
          title: data.date,
          data: [data],
        }

        await AsyncStorage.setItem(
          MEAL_KEY,
          JSON.stringify([...meals, newSectionMeal])
        )
      }

      index++
    }
  } catch (error) {
    console.error('Error adding data to AsyncStorage:', error)
    throw error
  }
}
