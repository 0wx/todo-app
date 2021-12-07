export const dateFormater = (_date: Date): string => {
  const date = new Date(_date)

  const day = date.getDate()
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][date.getMonth()]
  const year = date.getUTCFullYear()

  return `${day} ${month} ${year}`
}
