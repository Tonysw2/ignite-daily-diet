import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex: 1;
  gap: 32px;
`
export const Date = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  color: ${(props) => props.theme.colors.gray_100};
`
