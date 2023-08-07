import styled from 'styled-components/native'

type MealDetailsStyleProps = {
  isHealthy: boolean
}

export const Container = styled.View`
  flex: 1;
  padding: 40px 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${(props) => props.theme.colors.gray_700};
`
export const MealName = styled.Text`
  color: ${(props) => props.theme.colors.gray_100};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`
export const MealDescription = styled.Text`
  color: ${(props) => props.theme.colors.gray_200};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`
export const DateTimeTitle = styled.Text`
  color: ${(props) => props.theme.colors.gray_100};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`
export const DateTime = styled.Text`
  color: ${(props) => props.theme.colors.gray_200};
  font-size: ${(props) => props.theme.fontSize.md}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`
export const Tag = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 8px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.colors.gray_500};
`
export const TagText = styled.Text`
  color: ${(props) => props.theme.colors.gray_100};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`

export const ButtonContainer = styled.View`
  margin-top: auto;
  gap: 12px;
`

type ButtonProps = {
  type: 'primary' | 'secondary'
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${(props) =>
    props.type === 'primary' ? props.theme.colors.gray_600 : 'transparent'};
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.type === 'primary'
        ? props.theme.colors.gray_600
        : props.theme.colors.gray_500};
`
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.gray_100};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`
