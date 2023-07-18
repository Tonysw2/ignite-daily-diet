import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { getAllMealsFromAsyncStorage } from './getAllMeals'

export async function removeMealFromAsyncStorage(mealId: string) {
  try {
    const storageMeals = await getAllMealsFromAsyncStorage()

    const updatedMeals = storageMeals.map((section) => {
      const updatedMealsInSection = section.data.filter(
        (meal) => meal.id !== mealId
      )
      return {
        title: section.title,
        data: updatedMealsInSection,
      }
    })

    const filteredMeals = updatedMeals.filter(
      (section) => section.data.length > 0
    )

    await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(filteredMeals))
  } catch (error) {
    console.log(error)
    throw error
  }
}
