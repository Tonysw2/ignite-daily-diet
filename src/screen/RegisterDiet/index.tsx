import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import { useState } from 'react'
import {
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Label } from '../../components/Label'
import { Status } from '../../components/Status'
import {
  ButtonIOS,
  ButtonRegister,
  ButtonRegisterText,
  ButtonTextIOS,
  ButtonsContainerIOS,
  Container,
  LabelDateTime,
  LabelDateTimeContainer,
  LabelDateTimeInput,
  LabelDateTimeText,
  SelectButton,
  SelectButtonText,
} from './styles'

export function RegisterDiet() {
  const [selected, setSelected] = useState<'primary' | 'secondary' | null>(null)
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  function toggleDatePickerVisibility() {
    console.log('dalhe')
    setShowDatePicker((prev) => !prev)
  }

  function handleChangeDatePicker(
    { type }: DateTimePickerEvent,
    selectDate: Date | undefined
  ) {
    console.log(type, selectDate)
    if (type === 'set') {
      selectDate ? setDate(selectDate) : null
    } else {
      toggleDatePickerVisibility()
    }
  }

  function toggleTimePickerVisibility() {
    setShowTimePicker((prev) => !prev)
  }

  function handleChangeTimePicker(
    { type }: DateTimePickerEvent,
    selectDate: Date | undefined
  ) {
    console.log(type, selectDate)
    if (type === 'set') {
      selectDate ? setDate(selectDate) : null
    } else {
      toggleDatePickerVisibility()
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Label title="Novo" />
        <Label title="Descrição" textarea />

        <LabelDateTimeContainer>
          <LabelDateTime>
            <LabelDateTimeText>Data</LabelDateTimeText>

            <Pressable>
              <LabelDateTimeInput
                value={format(date, 'dd/MM/yyyy')}
                editable={false}
                onPressIn={toggleDatePickerVisibility}
              />
            </Pressable>
          </LabelDateTime>

          <LabelDateTime>
            <LabelDateTimeText>Hora</LabelDateTimeText>

            {!showTimePicker ? (
              <Pressable onPress={toggleTimePickerVisibility}>
                <LabelDateTimeInput
                  value={format(date, 'HH:mm')}
                  editable={false}
                  onPressIn={toggleTimePickerVisibility}
                />
              </Pressable>
            ) : null}
          </LabelDateTime>
        </LabelDateTimeContainer>

        {showDatePicker ? (
          <>
            <DateTimePicker
              display="spinner"
              themeVariant="dark"
              style={{ height: 125 }}
              value={date}
              onChange={handleChangeDatePicker}
            />

            <ButtonsContainerIOS>
              <ButtonIOS onPress={toggleDatePickerVisibility}>
                <ButtonTextIOS>Cancelar</ButtonTextIOS>
              </ButtonIOS>
              <ButtonIOS onPress={toggleDatePickerVisibility}>
                <ButtonTextIOS>Confirmar</ButtonTextIOS>
              </ButtonIOS>
            </ButtonsContainerIOS>
          </>
        ) : null}

        {showTimePicker ? (
          <>
            <DateTimePicker
              mode="time"
              display="spinner"
              themeVariant="dark"
              style={{ height: 125 }}
              value={date}
              onChange={handleChangeTimePicker}
            />

            <ButtonsContainerIOS>
              <ButtonIOS onPress={toggleTimePickerVisibility}>
                <ButtonTextIOS>Cancelar</ButtonTextIOS>
              </ButtonIOS>
              <ButtonIOS onPress={toggleTimePickerVisibility}>
                <ButtonTextIOS>Confirmar</ButtonTextIOS>
              </ButtonIOS>
            </ButtonsContainerIOS>
          </>
        ) : null}

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <SelectButton
            type="primary"
            isSelected={selected === 'primary'}
            onPress={() => setSelected('primary')}
          >
            <Status size={8} type="primary" />
            <SelectButtonText>Sim</SelectButtonText>
          </SelectButton>

          <SelectButton
            type="secondary"
            isSelected={selected === 'secondary'}
            onPress={() => setSelected('secondary')}
          >
            <Status size={8} type="secondary" />
            <SelectButtonText>Não</SelectButtonText>
          </SelectButton>
        </View>

        <ButtonRegister
          style={{ marginBottom: insets.bottom }}
          onPress={() => {
            navigation.navigate('feedback')
          }}
        >
          <ButtonRegisterText>Cadastrar refeição</ButtonRegisterText>
        </ButtonRegister>
      </Container>
    </TouchableWithoutFeedback>
  )
}
