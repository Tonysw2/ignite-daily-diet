import { useNavigation } from '@react-navigation/native'
import { Status } from '../../../../components/Status'
import { MealTypeDTO } from '../../../../storage/Meals/mealsStorageDTO'
import { formatTime } from '../../../../utils/formatTime'
import { Container, Info, InfoMeal, InfoTime, Separator } from './styles'

type MealProps = {
  meal: MealTypeDTO
}

export function Meal({ meal }: MealProps) {
  const navigation = useNavigation()

  return (
    <Container
      onPress={() =>
        navigation.navigate('mealDetails', {
          pageTitle: 'Refeições',
          id: meal.id,
        })
      }
    >
      <Info>
        <InfoTime>{formatTime(meal.time)}</InfoTime>
        <Separator />
        <InfoMeal>{meal.food}</InfoMeal>
      </Info>

      <Status size={14} type={meal.isHealthy ? 'primary' : 'secondary'} />
    </Container>
  )
}
