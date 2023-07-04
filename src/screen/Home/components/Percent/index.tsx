import { useNavigation } from '@react-navigation/native'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import { HighLight } from '../../../../components/HighLight'
import { Container } from './styles'

type PercentProps = {
  title: string
  subtitle: string
}

export function Percent({ title, subtitle }: PercentProps) {
  const navigation = useNavigation()

  return (
    <Container>
      <ButtonIcon
        icon="arrow-up-right"
        type="PRIMARY"
        style={{ position: 'absolute', top: 8, right: 8 }}
        onPress={() => navigation.navigate('statistics')}
        activeOpacity={0.7}
      />
      <HighLight title={title} subtitle={subtitle} />
    </Container>
  )
}
