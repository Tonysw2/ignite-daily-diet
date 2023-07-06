import { format } from 'date-fns'
import parseISO from 'date-fns/parseISO'

export function formatDate(date: string) {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'dd/mm/yyyy')

  return formattedDate
}

export function formatTime(date: string) {
  const parsedDate = parseISO(date)
  const formattedTime = format(parsedDate, 'HH:mm')

  return formattedTime
}
