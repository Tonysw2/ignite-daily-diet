import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { AllMealsTypeDTO } from './mealsStorageDTO'

export async function getAllMealsFromAsyncStorage() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const meals: AllMealsTypeDTO = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    console.log(error)
    throw error
  }
}
