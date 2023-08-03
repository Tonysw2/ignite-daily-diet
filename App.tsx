import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { useFonts } from 'expo-font'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'
import theme from './src/theme'
import { resetMealsFromAsyncStorage } from './src/storage/Meals/resetMeals'

// resetMealsFromAsyncStorage()

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} translucent />

        {fontsLoaded ? <Routes /> : <Loading />}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
