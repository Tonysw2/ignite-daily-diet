import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: flex-start;
  flex-shrink: 0;
  gap: 8px;
`
export const LabelText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray_100};
`
