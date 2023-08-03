import { getAllMealsFromAsyncStorage } from './getAllMeals'

export async function getMealsStatisticsFromAsyncStorage() {
  try {
    const storageMeals = await getAllMealsFromAsyncStorage()

    if (storageMeals.length === 0) {
      return {
        totalMeals: 0,
        healthyMealCount: 0,
        unhealthyMealCount: 0,
        longestHealthySequence: 0,
        percentage: 0,
      }
    }

    let totalMeals = 0
    let healthyMealCount = 0
    let unhealthyMealCount = 0
    let currentHealthySequence = 0
    let longestHealthySequence = 0

    for (const section of storageMeals) {
      totalMeals += section.data.length

      for (const meal of section.data) {
        if (meal.isHealthy) {
          healthyMealCount++
          currentHealthySequence++
        } else {
          unhealthyMealCount++
          if (currentHealthySequence > longestHealthySequence) {
            longestHealthySequence = currentHealthySequence
          }
          currentHealthySequence = 0
        }
      }
    }

    if (currentHealthySequence > longestHealthySequence) {
      longestHealthySequence = currentHealthySequence
    }

    return {
      totalMeals,
      healthyMealCount,
      unhealthyMealCount,
      longestHealthySequence,
      percentage: healthyMealCount / totalMeals,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
