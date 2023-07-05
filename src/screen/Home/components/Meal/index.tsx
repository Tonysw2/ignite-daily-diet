import { useNavigation } from '@react-navigation/native'
import { Status } from '../../../../components/Status'
import { Container, Info, InfoMeal, InfoTime, Separator } from './styles'

type MealProps = {
  id: string
  title: string
  meal: string
}

export function Meal({ id, title, meal }: MealProps) {
  const navigation = useNavigation()

  return (
    <Container
      onPress={() =>
        navigation.navigate('mealDetails', { pageTitle: 'Refeição', id })
      }
    >
      <Info>
        <InfoTime>{title}</InfoTime>
        <Separator />
        <InfoMeal>{meal}</InfoMeal>
      </Info>

      <Status size={14} type="primary" />
    </Container>
  )
}
