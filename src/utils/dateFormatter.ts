import moment from 'moment'

export function formatDate(date: string) {
  if (date) {
    return moment(date).format('DD-MM-YYYY').replaceAll('-', '/')
  }

  return ''
}
