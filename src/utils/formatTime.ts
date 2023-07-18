import dayjs from 'dayjs'

export function formatTime(date: string) {
  const formattedTime = dayjs(date).format('HH:mm')
  return formattedTime
}
