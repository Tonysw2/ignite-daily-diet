export function formatAsPercenatage(number: number) {
  const percentage = number * 100
  return percentage === 100
    ? '100%'
    : percentage % 1 === 0
    ? percentage + '%'
    : percentage.toFixed(2) + '%'
}
