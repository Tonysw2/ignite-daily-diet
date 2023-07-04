import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 16px 14px 12px;
  border: 1px solid ${(props) => props.theme.colors.gray_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`

export const InfoTime = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.gray_100};
`

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  margin: 0 8px;
  background-color: ${(props) => props.theme.colors.gray_400};
`

export const InfoMeal = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray_200};
`
