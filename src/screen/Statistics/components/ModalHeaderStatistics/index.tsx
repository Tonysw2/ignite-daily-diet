import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import { HighLight } from '../../../../components/HighLight'
import { Container } from './styles'

export function ModalHeaderStatistics() {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  return (
    <Container style={{ paddingTop: insets.top }}>
      <ButtonIcon
        icon="arrow-left"
        type="PRIMARY"
        style={{ alignSelf: 'flex-start' }}
        onPress={() => navigation.navigate('home')}
      />
      <HighLight title="90,86%" subtitle="das refeições dentro da dieta" />
    </Container>
  )
}
