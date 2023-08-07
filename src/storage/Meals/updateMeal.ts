import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { getAllMealsFromAsyncStorage } from './getAllMeals'
import { MealTypeDTO } from './mealsStorageDTO'
import dayjs from 'dayjs'

export async function updateMealFromAsyncStorage(data: MealTypeDTO) {
  try {
    const storageMeals = await getAllMealsFromAsyncStorage()

    const updatedMeal = storageMeals.map((section) => {
      const sectionDate = dayjs(section.title)
      const mealDate = dayjs(data.date)

      if (dayjs(sectionDate).isSame(mealDate, 'day')) {
        return {
          title: section.title,
          data: section.data.map((meal) => {
            if (meal.id === data.id) {
              return data
            }

            return meal
          }),
        }
      }

      return section
    })

    await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(updatedMeal))
  } catch (error) {
    console.log(error)
    throw error
  }
}
