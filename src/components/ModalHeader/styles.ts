import { View } from 'react-native'
import styled from 'styled-components/native'

type ModalHeaderStyleProps = {
  isHealthy: boolean
}

export const Container = styled(View)<ModalHeaderStyleProps>`
  height: 132px;
  background-color: ${(props) =>
    props.isHealthy
      ? props.theme.colors.green_mid
      : props.isHealthy === undefined
      ? props.theme.colors.gray_500
      : props.theme.colors.red_mid};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TitleScreen = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  color: ${(props) => props.theme.colors.gray_100};
`
