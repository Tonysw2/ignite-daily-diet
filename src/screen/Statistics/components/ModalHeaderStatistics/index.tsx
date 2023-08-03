import { useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import { HighLight } from '../../../../components/HighLight'
import { formatAsPercenatage } from '../../../../utils/formatAsPercentage'
import { Container } from './styles'

export function ModalHeaderStatistics() {
  const route = useRoute()
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const { percentage } = route.params as { percentage: number }

  return (
    <Container
      isAboveHalf={percentage >= 0.5}
      style={{ paddingTop: insets.top }}
    >
      <ButtonIcon
        icon="arrow-left"
        style={{ alignSelf: 'flex-start' }}
        onPress={() => navigation.navigate('home')}
      />
      <HighLight
        title={formatAsPercenatage(percentage)}
        subtitle="das refeições dentro da dieta"
      />
    </Container>
  )
}
