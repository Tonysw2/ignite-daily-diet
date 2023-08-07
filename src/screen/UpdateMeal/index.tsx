import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import dayjs from 'dayjs'
import { useCallback, useState } from 'react'
import {
  Alert,
  Keyboard,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Input } from '../../components/Input'
import { Status } from '../../components/Status'
import { getMealByIdFromAsyncStorage } from '../../storage/Meals/getMealById'
import { MealTypeDTO } from '../../storage/Meals/mealsStorageDTO'
import { updateMealFromAsyncStorage } from '../../storage/Meals/updateMeal'
import { formatDate } from '../../utils/formatDate'
import { formatTime } from '../../utils/formatTime'
import {
  ButtonIOS,
  ButtonTextIOS,
  ButtonUpdate,
  ButtonUpdateText,
  ButtonsContainerIOS,
  Container,
  InputDateTime,
  Label,
  LabelDateTime,
  LabelDateTimeContainer,
  LabelText,
  SelectButton,
  SelectButtonContainer,
  SelectButtonText,
} from './styles'

export function UpdateMeal() {
  const [mealInfo, setMealInfo] = useState<MealTypeDTO>({} as MealTypeDTO)
  const [showDateTimePicker, setShowDateTimePicker] = useState({
    date: false,
    time: false,
  })

  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as { id: string }

  async function getMealInfo() {
    const meal = await getMealByIdFromAsyncStorage(id)
    setMealInfo(meal)
  }

  function toggleDatePickerVisibility() {
    setShowDateTimePicker((prev) => ({
      date: !prev.date,
      time: false,
    }))
  }

  function toggleTimePickerVisibility() {
    setShowDateTimePicker((prev) => ({
      date: false,
      time: !prev.time,
    }))
  }

  function handleChangeDatePicker(
    { type }: DateTimePickerEvent,
    selectDate: Date | undefined
  ) {
    if (type === 'set') {
      selectDate
        ? setMealInfo((prev) => ({
            ...prev,
            date: dayjs(selectDate).toString(),
          }))
        : null
    } else {
      toggleDatePickerVisibility()
    }
  }

  function handleChangeTimePicker(
    { type }: DateTimePickerEvent,
    selectDate: Date | undefined
  ) {
    if (type === 'set') {
      selectDate
        ? setMealInfo((prev) => ({
            ...prev,
            time: dayjs(selectDate).toString(),
          }))
        : null
    } else {
      toggleDatePickerVisibility()
    }
  }

  function handleNewFoodChangeText(text: string) {
    setMealInfo((prev) => ({ ...prev, food: text }))
  }

  function handleDescriptionChangeText(text: string) {
    setMealInfo((prev) => ({ ...prev, description: text }))
  }

  async function handleSubmit() {
    if (mealInfo.food.length === 0 || mealInfo.description.length === 0) {
      Alert.alert(
        'Atenção',
        'Insira um nome ou descrição para poder adicionar a refeição.'
      )

      return
    }

    await updateMealFromAsyncStorage(mealInfo)

    navigation.navigate('home')
  }

  useFocusEffect(
    useCallback(() => {
      getMealInfo()
    }, [])
  )

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Label>
          <LabelText>Nome</LabelText>
          <Input onChangeText={handleNewFoodChangeText} value={mealInfo.food} />
        </Label>

        <Label>
          <LabelText>Descrição</LabelText>
          <Input
            onChangeText={handleDescriptionChangeText}
            value={mealInfo.description}
            textarea
          />
        </Label>

        <LabelDateTimeContainer>
          {!showDateTimePicker.time ? (
            <LabelDateTime>
              <LabelText>Data</LabelText>

              {!showDateTimePicker.date ? (
                <Pressable>
                  <InputDateTime
                    value={formatDate(mealInfo.date)}
                    editable={false}
                    onPressIn={toggleDatePickerVisibility}
                  />
                </Pressable>
              ) : null}
            </LabelDateTime>
          ) : null}

          {!showDateTimePicker.date ? (
            <LabelDateTime>
              <LabelText>Hora</LabelText>

              {!showDateTimePicker.time ? (
                <Pressable onPress={toggleTimePickerVisibility}>
                  <InputDateTime
                    value={formatTime(mealInfo.time)}
                    editable={false}
                    onPressIn={toggleTimePickerVisibility}
                  />
                </Pressable>
              ) : null}
            </LabelDateTime>
          ) : null}
        </LabelDateTimeContainer>

        {showDateTimePicker.date ? (
          <>
            <DateTimePicker
              display="spinner"
              themeVariant="dark"
              style={{ height: 125 }}
              value={dayjs(mealInfo.date).toDate()}
              onChange={handleChangeDatePicker}
            />

            {Platform.OS === 'ios' ? (
              <ButtonsContainerIOS>
                <ButtonIOS onPress={toggleDatePickerVisibility}>
                  <ButtonTextIOS>Cancelar</ButtonTextIOS>
                </ButtonIOS>
                <ButtonIOS onPress={toggleDatePickerVisibility}>
                  <ButtonTextIOS>Confirmar</ButtonTextIOS>
                </ButtonIOS>
              </ButtonsContainerIOS>
            ) : null}
          </>
        ) : null}

        {showDateTimePicker.time ? (
          <>
            <DateTimePicker
              mode="time"
              display="spinner"
              themeVariant="dark"
              style={{ height: 125 }}
              value={dayjs(mealInfo.time).toDate()}
              onChange={handleChangeTimePicker}
            />

            {Platform.OS === 'ios' ? (
              <ButtonsContainerIOS>
                <ButtonIOS onPress={toggleTimePickerVisibility}>
                  <ButtonTextIOS>Cancelar</ButtonTextIOS>
                </ButtonIOS>
                <ButtonIOS onPress={toggleTimePickerVisibility}>
                  <ButtonTextIOS>Confirmar</ButtonTextIOS>
                </ButtonIOS>
              </ButtonsContainerIOS>
            ) : null}
          </>
        ) : null}

        <SelectButtonContainer>
          <SelectButton
            type="primary"
            isSelected={mealInfo.isHealthy}
            onPress={() =>
              setMealInfo((prev) => ({ ...prev, isHealthy: true }))
            }
          >
            <Status size={8} type="primary" />
            <SelectButtonText>Sim</SelectButtonText>
          </SelectButton>

          <SelectButton
            type="secondary"
            isSelected={!mealInfo.isHealthy}
            onPress={() =>
              setMealInfo((prev) => ({ ...prev, isHealthy: false }))
            }
          >
            <Status size={8} type="secondary" />
            <SelectButtonText>Não</SelectButtonText>
          </SelectButton>
        </SelectButtonContainer>

        <ButtonUpdate
          style={{ marginBottom: insets.bottom }}
          onPress={handleSubmit}
        >
          <ButtonUpdateText>Salvar alterações</ButtonUpdateText>
        </ButtonUpdate>
      </Container>
    </TouchableWithoutFeedback>
  )
}
11
