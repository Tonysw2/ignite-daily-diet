import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import { MEAL_KEY } from '../storageConfig'
import { getAllMealsFromAsyncStorage } from './getAllMeals'
import { MealTypeDTO } from './mealsStorageDTO'

export async function addMealToAsyncStorage(data: MealTypeDTO) {
  try {
    const meals = await getAllMealsFromAsyncStorage()

    const dateExists = meals.filter((section) => {
      const storageDate = dayjs(section.title)
      const receivedDate = dayjs(data.date)

      return dayjs(storageDate).isSame(receivedDate, 'day')
    })

    if (dateExists.length > 0) {
      const updatedMeals = meals.map((section) => {
        const storageDate = dayjs(section.title)
        const receivedDate = dayjs(data.date)

        if (dayjs(storageDate).isSame(receivedDate, 'day')) {
          return {
            ...section,
            data: [...section.data, data],
          }
        }
      })

      await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(updatedMeals))
      return
    } else {
      const storage = await AsyncStorage.getItem(MEAL_KEY)
      const meals = storage ? JSON.parse(storage) : []

      const newSection = {
        title: data.date,
        data: [data],
      }

      const updatedMeals = [newSection, ...meals]

      await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(updatedMeals))
    }
  } catch (error) {
    console.error('Error adding data to AsyncStorage:', error)
    throw error
  }
}
