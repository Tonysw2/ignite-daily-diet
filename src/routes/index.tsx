import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { colors } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: colors.green_mid }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
