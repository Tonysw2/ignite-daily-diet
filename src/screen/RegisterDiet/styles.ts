import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: 24px;
  padding: 40px 24px;
  background-color: ${(props) => props.theme.colors.gray_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const LabelDateTimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`
export const LabelDateTime = styled.View`
  flex: 1;
  gap: 8px;
`
export const LabelDateTimeText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray_100};
`
export const LabelDateTimeInput = styled.TextInput`
  padding: 14px;
  align-items: center;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray_100};
`

type SelectButtonStyleProps = {
  isSelected: boolean
  type: 'primary' | 'secondary'
}

export const SelectButton = styled.TouchableOpacity<SelectButtonStyleProps>`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 16px 24px;
  background-color: ${({ theme, type, isSelected }) =>
    type === 'primary' && isSelected
      ? theme.colors.green_mid
      : type === 'secondary' && isSelected
      ? theme.colors.red_mid
      : theme.colors.gray_500};
  border-radius: 6px;
`
export const SelectButtonText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.gray_100};
`
export const ButtonRegister = styled.TouchableOpacity`
  margin-top: auto;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray_600};
  border-radius: 6px;
`
export const ButtonRegisterText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.gray_100};
`

export const ButtonsContainerIOS = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
export const ButtonIOS = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.gray_500};
  border-radius: 6px;
  padding: 4px 8px;
`
export const ButtonTextIOS = styled.Text`
  color: ${(props) => props.theme.colors.gray_100};
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm}px;
`
