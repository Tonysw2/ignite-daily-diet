import { PencilLine, Trash } from 'phosphor-react-native'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import {
  Button,
  ButtonText,
  Container,
  DateTime,
  DateTimeTitle,
  MealDescription,
  MealName,
  Status,
  Tag,
  TagText,
} from './styles'

export function MealDetails() {
  const theme = useTheme()

  return (
    <Container>
      <View style={{ gap: 24 }}>
        <View style={{ gap: 8 }}>
          <MealName>Sanduíche</MealName>
          <MealDescription>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealDescription>
        </View>

        <View style={{ gap: 8 }}>
          <DateTimeTitle>Sanduíche</DateTimeTitle>
          <DateTime>12/08/2022 às 16:00</DateTime>
        </View>

        <Tag>
          <Status />
          <TagText>dentro da dieta</TagText>
        </Tag>
      </View>

      <View style={{ marginTop: 'auto', gap: 12 }}>
        <Button type="primary">
          <PencilLine size={18} color={theme.colors.gray_100} />
          <ButtonText>Editar refeição</ButtonText>
        </Button>

        <Button type="secondary">
          <Trash size={18} color={theme.colors.gray_100} />
          <ButtonText>Excluir refeição</ButtonText>
        </Button>
      </View>
    </Container>
  )
}
