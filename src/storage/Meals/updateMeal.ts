import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { getAllMealsFromAsyncStorage } from './getAllMeals'
import { AllMealsTypeDTO, MealTypeDTO } from './mealsStorageDTO'

export async function updateMealFromAsyncStorage(data: MealTypeDTO) {
  try {
    const storageMeals = await getAllMealsFromAsyncStorage()
    const mealMap = new Map<string, MealTypeDTO>()

    // Flatten all meals into a single Map with 'id' as the key
    storageMeals.forEach((section) => {
      section.data.forEach((meal) => {
        mealMap.set(meal.id, meal)
      })
    })

    // Update the specific meal if it exists
    if (mealMap.has(data.id)) {
      mealMap.set(data.id, data)
    }

    // Reconstruct the sections from the Map
    const updatedMeals: AllMealsTypeDTO = []
    let currentSection: AllMealsTypeDTO[0] | null = null

    mealMap.forEach((meal, _) => {
      if (!currentSection || currentSection.title !== meal.date) {
        currentSection = { title: meal.date, data: [] }
        updatedMeals.push(currentSection)
      }
      currentSection.data.push(meal)
    })

    await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(updatedMeals))
  } catch (error) {
    console.log(error)
    throw error
  }
}
