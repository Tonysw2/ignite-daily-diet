import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  height: 132px;
  background-color: ${(props) => props.theme.colors.gray_500};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TitleScreen = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  color: ${(props) => props.theme.colors.gray_100};
`
