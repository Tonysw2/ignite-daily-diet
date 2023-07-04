import Feather from '@expo/vector-icons/Feather'
import { TouchableOpacityProps } from 'react-native'
import { ButtonIconTypeStyle, Container, Icon } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap
  type?: ButtonIconTypeStyle
}

export function ButtonIcon({ icon, type, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
