import styled from 'styled-components/native'

export const Container = styled.View`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.green_dark};
  border-radius: 999px;
  overflow: hidden;
`

export const AvatarImg = styled.Image`
  height: 100%;
  width: 100%;
`

export const AvatarFallback = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
