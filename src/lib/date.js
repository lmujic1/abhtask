import dayjs from 'dayjs'
require('dayjs/locale/bs')

export const getDate = ({ date, format = 'D. MMMM YYYY HH:mm:ss', locale = 'bs' }) => {
  dayjs.locale(locale)
  if (date) {
    return dayjs(date).format(format)
  }
  return dayjs().format(format)
}
