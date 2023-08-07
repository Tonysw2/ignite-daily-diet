import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { PencilLine, Trash } from 'phosphor-react-native'
import { useCallback, useState } from 'react'
import { Alert, View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Loading } from '../../components/Loading'
import { Status } from '../../components/Status'
import { getMealByIdFromAsyncStorage } from '../../storage/Meals/getMealById'
import { MealTypeDTO } from '../../storage/Meals/mealsStorageDTO'
import { removeMealFromAsyncStorage } from '../../storage/Meals/removeMeal'
import { formatDate } from '../../utils/formatDate'
import { formatTime } from '../../utils/formatTime'
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  DateTime,
  DateTimeTitle,
  MealDescription,
  MealName,
  Tag,
  TagText,
} from './styles'

export function MealDetails() {
  const [meal, setMeal] = useState<MealTypeDTO>()

  const theme = useTheme()
  const route = useRoute()
  const navigation = useNavigation()

  const { id } = route.params as { id: string }

  async function getMealById() {
    try {
      const meal = await getMealByIdFromAsyncStorage(id)
      setMeal(meal)
    } catch (error) {
      console.log(error)
    }
  }

  async function removeMeal() {
    try {
      Alert.alert(
        'Remover refeição',
        'Essa refeição será deletada permanentemente, tem certeza que é isso que deseja?',
        [
          {
            text: 'Sim',
            onPress: async () => {
              await removeMealFromAsyncStorage(meal!)
              navigation.navigate('home')
            },
          },
          {
            text: 'Não',
          },
        ]
      )
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMealById()
    }, [id])
  )

  return (
    <>
      {meal ? (
        <Container>
          <View style={{ gap: 24 }}>
            <View style={{ gap: 8 }}>
              <MealName>{meal.food}</MealName>
              <MealDescription>{meal.description}</MealDescription>
            </View>

            <View style={{ gap: 8 }}>
              <DateTimeTitle>Data e hora</DateTimeTitle>
              <DateTime>
                {formatDate(meal.date)} às {formatTime(meal.time)}
              </DateTime>
            </View>

            <Tag>
              <Status
                size={12}
                type={meal.isHealthy ? 'primary' : 'secondary'}
              />
              <TagText>
                {meal.isHealthy ? 'dentro da dieta' : 'fora da dieta'}
              </TagText>
            </Tag>
          </View>

          <ButtonContainer>
            <Button
              type="primary"
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('update', {
                  pageTitle: 'Editar refeição',
                  id: meal.id,
                })
              }
            >
              <PencilLine size={18} color={theme.colors.gray_100} />
              <ButtonText>Editar refeição</ButtonText>
            </Button>

            <Button type="secondary" activeOpacity={0.7} onPress={removeMeal}>
              <Trash size={18} color={theme.colors.gray_100} />
              <ButtonText>Excluir refeição</ButtonText>
            </Button>
          </ButtonContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
