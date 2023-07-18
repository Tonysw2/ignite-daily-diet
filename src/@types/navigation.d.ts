export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      feedback: undefined
      statistics: undefined
      register: { pageTitle: string }
      update: { pageTitle: string; id: string }
      mealDetails: { pageTitle: string; id: string }
    }
  }
}
