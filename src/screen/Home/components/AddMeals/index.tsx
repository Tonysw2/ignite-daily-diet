import { useNavigation } from '@react-navigation/native'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { Button, ButtonText, Container, Label } from './styles'

export function AddMeals() {
  const navigation = useNavigation()
  const theme = useTheme()

  return (
    <Container>
      <Label>Refeições</Label>

      <Button
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate('register', {
            pageTitle: 'Nova refeição',
          })
        }
      >
        <Plus size={16} color={theme.colors.white} />
        <ButtonText>Nova Refeição</ButtonText>
      </Button>
    </Container>
  )
}
