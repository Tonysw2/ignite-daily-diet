export type MealTypeDTO = {
  id: string
  food: string
  description: string
  date: string
  time: string
  isHealthy: boolean
}

export type AllMealsTypeDTO = {
  title: string
  data: MealTypeDTO[]
}[]
