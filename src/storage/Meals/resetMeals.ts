import AsyncStorage from '@react-native-async-storage/async-storage'

export async function resetMealsFromAsyncStorage() {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.log(error)
  }
}
