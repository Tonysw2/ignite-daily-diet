import { SectionList } from 'react-native'
import { v4 as uuid } from 'uuid'
import { EmptyMeals } from '../../../../components/EmptyMeals'
import { AddMeals } from '../AddMeals'
import { Meal } from '../Meal'
import { Container, Date } from './styles'

const data = [
  {
    date: '12.12.12',
    data: [
      {
        id: uuid(),
        time: '8:00 AM',
        food: 'Breakfast',
        date: 'Mon Jul 03 2023 15:59:28 GMT-0300',
        details: 'detalhes dos alimentos',
      },
      {
        id: uuid(),
        time: '12:00 PM',
        food: 'Lunch',
        date: 'Mon Jul 03 2023 15:59:28 GMT-0300',
        details: 'detalhes dos alimentos',
      },
      {
        id: uuid(),
        time: '3:00 PM',
        food: 'Snack',
        date: 'Mon Jul 03 2023 15:59:28 GMT-0300',
        details: 'detalhes dos alimentos',
      },
      {
        id: uuid(),
        time: '6:00 PM',
        food: 'Dinner',
        date: 'Mon Jul 03 2023 15:59:28 GMT-0300',
        details: 'detalhes dos alimentos',
      },
      {
        id: uuid(),
        time: '9:00 PM',
        food: 'Evening Snack',
        date: 'Mon Jul 03 2023 15:59:28 GMT-0300',
        details: 'detalhes dos alimentos',
      },
    ],
  },
]

export function Meals() {
  return (
    <Container>
      <AddMeals />

      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Meal title={item.time} meal={item.food} />}
        renderSectionHeader={({ section: { data } }) => <Date>12.12.12</Date>}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1, gap: 8 }}
        ListEmptyComponent={EmptyMeals}
      />
    </Container>
  )
}
