import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'

export async function getMealsFromAsyncStorage() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const meals = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    console.log(error)
    throw error
  }
}
