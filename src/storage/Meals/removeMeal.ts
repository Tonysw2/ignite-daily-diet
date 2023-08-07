import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from '../storageConfig'
import { getAllMealsFromAsyncStorage } from './getAllMeals'
import dayjs from 'dayjs'
import { MealTypeDTO } from './mealsStorageDTO'

export async function removeMealFromAsyncStorage(data: MealTypeDTO) {
  try {
    const storageMeals = await getAllMealsFromAsyncStorage()

    let sectionDataLength

    const updatedMeal = storageMeals.map((section) => {
      const sectionDate = dayjs(section.title)
      const mealDate = dayjs(data.date)

      if (dayjs(sectionDate).isSame(mealDate, 'day')) {
        if (section.data.length === 1) {
          return null
        }

        const removedMeal = {
          title: section.title,
          data: section.data.filter((meal) => meal.id !== data.id),
        }

        sectionDataLength = removedMeal.data.length

        return removedMeal
      }

      return section
    })
    const filteredUpdatedMeal = updatedMeal.filter((section) => !!section)

    await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(filteredUpdatedMeal))
  } catch (error) {
    console.log(error)
    throw error
  }
}
