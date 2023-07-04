import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useTheme } from 'styled-components/native'
import { AvatarFallback, AvatarImg, Container } from './styles'

type AvatarProps = {
  avatarUrl: string | null | undefined
}

export function Avatar({ avatarUrl }: AvatarProps) {
  const { colors } = useTheme()

  return (
    <Container>
      {avatarUrl ? (
        <AvatarImg source={{ uri: avatarUrl }} />
      ) : (
        <AvatarFallback>
          <MaterialIcons name="person" size={24} color={colors.white} />
        </AvatarFallback>
      )}
    </Container>
  )
}
