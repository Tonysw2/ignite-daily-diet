import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { AllMealsTypeDTO } from './mealsStorageDTO'

export async function getMealByIdFromAsyncStorage(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const allSectionMeals: AllMealsTypeDTO = storage ? JSON.parse(storage) : []

    const meal = allSectionMeals
      .flatMap((section) => section.data)
      .find((meal) => meal.id === id)

    if (meal === undefined) {
      throw { message: 'Não foi possível obter essa refeição' }
    }

    return meal
  } catch (error) {
    console.log(error)
    throw error
  }
}
