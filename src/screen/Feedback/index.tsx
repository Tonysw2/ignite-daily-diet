import { Image } from 'react-native'
import NegativeFeedback from '../../assets/negative-feedback.png'
import PositiveFeedback from '../../assets/positive-feedback.png'
import {
  Container,
  HighlightContainer,
  HighlightSubtitle,
  HighlightTitle,
} from './styles'

export function Feedback() {
  return (
    <Container>
      <HighlightContainer>
        <HighlightTitle>Continue assim!</HighlightTitle>
        <HighlightSubtitle>
          Você continua dentro da dieta. Muito bem!
        </HighlightSubtitle>
      </HighlightContainer>

      <Image source={true ? PositiveFeedback : NegativeFeedback} />
    </Container>
  )
}
