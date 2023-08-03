import styled from 'styled-components/native'

type ContainerStyleType = {
  isAboveHalf: boolean
}

export const Container = styled.View<ContainerStyleType>`
  height: 200px;
  padding: 24px;
  background-color: ${(props) =>
    props.isAboveHalf
      ? props.theme.colors.green_mid
      : props.theme.colors.red_mid};
  align-items: center;
  justify-content: center;
`
