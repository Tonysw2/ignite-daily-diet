import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize['2xl']}px;
  color: ${(props) => props.theme.colors.gray_100};
`
export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.gray_100};
`
