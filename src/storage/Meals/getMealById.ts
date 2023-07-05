import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { AllMealsTypeDTO } from './mealsStorageDTO'

export async function getMealByIdFromAsyncStorage(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)

    if (!storage) {
      return
    }

    const allSectionMeals: AllMealsTypeDTO = storage ? JSON.parse(storage) : []
    const meal = allSectionMeals.filter((section) => {
      section.data.filter((meal) => meal.id === id)
    })
    console.log(meal)
  } catch (error) {
    console.log(error)
  }
}
