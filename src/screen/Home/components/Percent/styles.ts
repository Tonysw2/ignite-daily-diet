import styled from 'styled-components/native'

type ContainerStyleType = {
  isAboveHalf: boolean
}

export const Container = styled.View<ContainerStyleType>`
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 16px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isAboveHalf
      ? props.theme.colors.green_mid
      : props.theme.colors.red_mid};
  align-items: center;
  justify-content: center;
`
