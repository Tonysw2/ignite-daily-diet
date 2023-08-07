import AsyncStorage from '@react-native-async-storage/async-storage'

export async function resetMealsFromAsyncStorage() {
  try {
    await AsyncStorage.clear()
    console.log('DADOS REMOVIDOS DO ASYNC STORAGE')
  } catch (error) {
    console.log(error)
  }
}
