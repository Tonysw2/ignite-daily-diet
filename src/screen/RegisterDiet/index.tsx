import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import {
  Alert,
  Keyboard,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { v4 as uuid } from 'uuid'
import { Input } from '../../components/Input'
import { Status } from '../../components/Status'
import { addMealToAsyncStorage } from '../../storage/Meals/addMeal'
import { formatDate } from '../../utils/formatDate'
import { formatTime } from '../../utils/formatTime'
import {
  ButtonIOS,
  ButtonRegister,
  ButtonRegisterText,
  ButtonTextIOS,
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

export function RegisterDiet() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const [isHealthy, setIsHealthy] = useState(true)
  const [showDateTimePicker, setShowDateTimePicker] = useState({
    date: false,
    time: false,
  })
  console.log(showDateTimePicker)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [food, setFood] = useState('')
  const [description, setDescription] = useState('')

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
      if (Platform.OS === 'android') {
        toggleDatePickerVisibility()
        selectDate ? setDate(selectDate) : null
        return
      }

      selectDate ? setDate(selectDate) : null
    } else {
      toggleDatePickerVisibility()
    }
  }
  function handleChangeTimePicker(
    { type }: DateTimePickerEvent,
    selectDate: Date | undefined
  ) {
    if (type === 'set') {
      if (Platform.OS === 'android') {
        toggleTimePickerVisibility()
        selectDate ? setTime(selectDate) : null
        return
      }

      selectDate ? setTime(selectDate) : null
    } else {
      toggleTimePickerVisibility()
    }
  }
  function handleNewFoodChangeText(text: string) {
    setFood(text)
  }
  function handleDescriptionChangeText(text: string) {
    setDescription(text)
  }

  async function handleSubmit() {
    if (food.length === 0 || description.length === 0) {
      Alert.alert(
        'Atenção',
        'Insira um nome ou descrição para poder adicionar a refeição.'
      )

      return
    }

    await addMealToAsyncStorage({
      id: uuid(),
      food,
      description,
      date: String(date),
      time: String(time),
      isHealthy,
    })

    navigation.navigate('home')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Label>
          <LabelText>Nome</LabelText>
          <Input onChangeText={handleNewFoodChangeText} value={food} />
        </Label>

        <Label>
          <LabelText>Descrição</LabelText>
          <Input
            onChangeText={handleDescriptionChangeText}
            value={description}
            textarea
          />
        </Label>

        <LabelDateTimeContainer>
          {!showDateTimePicker.time ? (
            <LabelDateTime>
              <LabelText>Data</LabelText>

              {!showDateTimePicker.date ? (
                <Pressable onPress={toggleDatePickerVisibility}>
                  <InputDateTime
                    value={formatDate(String(date))}
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
                    value={formatTime(String(time))}
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
              style={{ height: 125 }}
              themeVariant="dark"
              value={date ?? new Date()}
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
              value={date}
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
            isSelected={isHealthy}
            onPress={() => setIsHealthy(true)}
          >
            <Status size={8} type="primary" />
            <SelectButtonText>Sim</SelectButtonText>
          </SelectButton>

          <SelectButton
            type="secondary"
            isSelected={!isHealthy}
            onPress={() => setIsHealthy(false)}
          >
            <Status size={8} type="secondary" />
            <SelectButtonText>Não</SelectButtonText>
          </SelectButton>
        </SelectButtonContainer>

        <ButtonRegister
          style={{ marginBottom: insets.bottom }}
          onPress={handleSubmit}
        >
          <ButtonRegisterText>Cadastrar refeição</ButtonRegisterText>
        </ButtonRegister>
      </Container>
    </TouchableWithoutFeedback>
  )
}
