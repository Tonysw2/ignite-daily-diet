import styled from 'styled-components/native'

type StatusStyleProps = {
  size: number
  type: 'primary' | 'secondary'
}

export const Container = styled.View<StatusStyleProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.type === 'primary'
      ? props.theme.colors.green_dark
      : props.theme.colors.red_dark};
  border-radius: 999px;
`
