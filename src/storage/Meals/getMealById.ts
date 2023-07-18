import { getAllMealsFromAsyncStorage } from './getAllMeals'

export async function getMealByIdFromAsyncStorage(id: string) {
  try {
    const allSectionMeals = await getAllMealsFromAsyncStorage()

    const meal = allSectionMeals
      .flatMap((section) => section.data)
      .find((meal) => meal.id === id)

    if (meal === undefined) {
      throw { message: 'Não foi possível obter essa refeição' }
    }

    return meal
  } catch (error) {
    console.log(error)
    throw error
  }
}
