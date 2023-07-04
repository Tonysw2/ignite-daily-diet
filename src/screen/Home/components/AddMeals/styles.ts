import Feather from '@expo/vector-icons/Feather'
import styled from 'styled-components/native'

export const Container = styled.View`
  gap: 8px;
`

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray_100};
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 20px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray_500};
  border-radius: 6px;
`

export const ButtonIcon = styled(Feather)``

export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.white};
`
