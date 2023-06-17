export const formatNumber = (number) => {
  let parsedNumber = parseInt(number, 10)
  if (parsedNumber < 0) {
    parsedNumber = Math.abs(parsedNumber)
  }

  let formattedNumber = parsedNumber.toString()
  if (formattedNumber.length > 3) {
    // Itera desde el final de la cadena hacia el principio, insertando comas cada 3 dígitos
    for (let i = formattedNumber.length - 3; i > 0; i -= 3) {
      formattedNumber = formattedNumber.slice(0, i) + ',' + formattedNumber.slice(i)
    }
  }

  return formattedNumber
}
