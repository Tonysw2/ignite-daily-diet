import { useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ButtonIcon } from '../ButtonIcon'
import { Container, TitleScreen } from './styles'

type RouteParams = {
  pageTitle: string
  isHealthy: boolean
}

export function ModalHeader() {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const route = useRoute()
  const { pageTitle, isHealthy } = route.params as RouteParams

  return (
    <Container isHealthy={isHealthy} style={{ paddingTop: insets.top }}>
      <ButtonIcon
        icon="arrow-left"
        style={{ position: 'absolute', top: insets.top + 28, left: 24 }}
        onPress={() => navigation.navigate('home')}
      />
      <TitleScreen>{pageTitle}</TitleScreen>
    </Container>
  )
}
