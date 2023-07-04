import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${(props) => props.theme.colors.gray_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const Title = styled.Text`
  margin-bottom: 24px;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.gray_100};
`
export const Card = styled.View`
  width: 100%;
  margin-bottom: 12px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.gray_500};
  border-radius: 8px;
`

export const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
`

type InfoType = 'positive' | 'negative'

type InfoCardStyleProps = {
  type: InfoType
}

export const InfoCard = styled.View<InfoCardStyleProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'positive' ? theme.colors.green_mid : theme.colors.red_mid};
`

export const GapHorizontal = styled.View`
  width: 12px;
`
