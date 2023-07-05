import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'
import { getMealByIdFromAsyncStorage } from './src/storage/Meals/getMealById'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  async function getMealById() {
    await getMealByIdFromAsyncStorage('5a4eec25-9bf6-4f91-ad67-7d2e91a317b9"')
  }

  useEffect(() => {
    getMealById()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} translucent />

        {fontsLoaded ? <Routes /> : <Loading />}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
