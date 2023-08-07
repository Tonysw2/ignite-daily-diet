import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { AllMealsTypeDTO } from './mealsStorageDTO'
import dayjs from 'dayjs'

export async function getAllMealsFromAsyncStorage() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const meals: AllMealsTypeDTO = storage ? JSON.parse(storage) : []

    const sortedMeals = meals.sort((a, b) => {
      const dateA = dayjs(a.title)
      const dateB = dayjs(b.title)

      if (dateA.isAfter(dateB)) {
        return -1
      } else if (dateA.isBefore(dateB)) {
        return 1
      } else {
        return 0
      }
    })

    return sortedMeals
  } catch (error) {
    console.log(error)
    throw error
  }
}
