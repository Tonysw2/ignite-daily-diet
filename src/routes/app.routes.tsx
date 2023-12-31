import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components'
import { ModalHeader } from '../components/ModalHeader'
import { Feedback } from '../screen/Feedback'
import { Home } from '../screen/Home'
import { MealDetails } from '../screen/MealDetails'
import { RegisterDiet } from '../screen/RegisterDiet'
import { Statistics } from '../screen/Statistics'
import { ModalHeaderStatistics } from '../screen/Statistics/components/ModalHeaderStatistics'
import { UpdateMeal } from '../screen/UpdateMeal'

const { Navigator, Screen, Group } = createNativeStackNavigator()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="home" component={Home} />
        <Screen name="feedback" component={Feedback} />
      </Group>

      <Group
        screenOptions={{
          presentation: 'fullScreenModal',
          headerShown: true,
        }}
      >
        <Screen
          name="statistics"
          component={Statistics}
          options={({ route }) => {
            const { percentage } = route.params as { percentage: number }

            return {
              header: () => {
                return <ModalHeaderStatistics />
              },
              contentStyle: {
                backgroundColor:
                  percentage >= 0.5
                    ? theme.colors.green_mid
                    : theme.colors.red_mid,
              },
            }
          }}
        />

        <Screen
          name="register"
          component={RegisterDiet}
          options={{
            header: () => {
              return <ModalHeader />
            },
            contentStyle: {
              backgroundColor: theme.colors.gray_500,
            },
          }}
        />

        <Screen
          name="mealDetails"
          component={MealDetails}
          options={({ route }) => ({
            header: () => {
              return <ModalHeader />
            },
            contentStyle: {
              backgroundColor: route.params?.isHealthy
                ? theme.colors.green_mid
                : theme.colors.red_mid,
            },
          })}
        />

        <Screen
          name="update"
          component={UpdateMeal}
          options={{
            header: () => {
              return <ModalHeader />
            },
            contentStyle: {
              backgroundColor: theme.colors.gray_500,
            },
          }}
        />
      </Group>
    </Navigator>
  )
}
