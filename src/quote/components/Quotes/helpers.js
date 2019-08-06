export const formattedDate = (date) => {
  const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  }
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString(undefined, options)
}
