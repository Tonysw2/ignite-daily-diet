import { Image } from 'react-native'
import Logo from '../../../../assets/Logo2.png'
import { Avatar } from '../../../../components/Avatar'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <Image source={Logo} />
      <Avatar avatarUrl={''} />
    </Container>
  )
}
