import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_KEY } from './storageConfig'

type MealType = {
  date: Date
  food: string
  description: string
  isHealth: boolean
}

async function addDataToAsyncStorage(data: MealType) {
  try {
    // Get existing data from AsyncStorage
    const storage = await AsyncStorage.getItem(MEAL_KEY)
    const meals = storage ? JSON.parse(storage) : []

    // const newMeals: MealType[] = [
    //   ...meals,
    //   {
    //     id: uuid(),
    //     date: format(data.date, 'dd-mm-yyy'),
    //     hour: format(data.date, 'hh:mm'),
    //     description: data.description,
    //     food: data.food,
    //     isHealth: data.isHealth,
    //   },
    // ]

    // Save the updated data to AsyncStorage
    await AsyncStorage.setItem('your_data_key', JSON.stringify(newMeals))

    console.log('Data added to AsyncStorage successfully.')
  } catch (error) {
    console.error('Error adding data to AsyncStorage:', error)
  }
}
