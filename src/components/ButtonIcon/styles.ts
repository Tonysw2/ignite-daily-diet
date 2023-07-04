import Feather from '@expo/vector-icons/Feather'
import styled from 'styled-components/native'

export type ButtonIconTypeStyle = 'PRIMARY' | 'SECONDARY'

interface ButtonIconStyleProps {
  type?: ButtonIconTypeStyle
}

export const Container = styled.TouchableOpacity``

export const Icon = styled(Feather).attrs<ButtonIconStyleProps>((props) => ({
  size: 24,
  color:
    props.type === 'PRIMARY'
      ? props.theme.colors.green_dark
      : props.type === 'SECONDARY'
      ? props.theme.colors.red_dark
      : props.theme.colors.gray_100,
}))``
