import dayjs from 'dayjs'

export function formatDate(date: string) {
  const formattedDate = dayjs(date).format('DD/MM/YYYY')
  return formattedDate
}
