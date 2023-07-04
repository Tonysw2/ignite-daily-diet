import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.white};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.colors.green_dark,
}))``
