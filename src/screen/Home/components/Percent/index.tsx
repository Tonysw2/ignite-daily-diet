import { useNavigation } from '@react-navigation/native'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import { HighLight } from '../../../../components/HighLight'
import { formatAsPercenatage } from '../../../../utils/formatAsPercentage'
import { Container } from './styles'

type PercentProps = {
  percentage: number
  subtitle: string
}

export function Percent({ percentage, subtitle }: PercentProps) {
  const navigation = useNavigation()

  return (
    <Container isAboveHalf={percentage >= 0.5}>
      <ButtonIcon
        icon="arrow-up-right"
        style={{ position: 'absolute', top: 8, right: 8 }}
        onPress={() => navigation.navigate('statistics', { percentage })}
        activeOpacity={0.7}
      />
      <HighLight title={formatAsPercenatage(percentage)} subtitle={subtitle} />
    </Container>
  )
}
