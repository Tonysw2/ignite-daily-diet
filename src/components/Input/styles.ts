import styled from 'styled-components/native'

type InputStyleProps = {
  isFocused: boolean
  textarea?: boolean
}

export const Container = styled.TextInput<InputStyleProps>`
  height: ${({ textarea }) => (textarea ? '92px' : 'auto')};
  padding: 14px;
  align-items: center;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors.gray_300 : theme.colors.gray_500};

  vertical-align: ${(props) => (props.textarea ? 'top' : 'middle')};
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray_100};
`
