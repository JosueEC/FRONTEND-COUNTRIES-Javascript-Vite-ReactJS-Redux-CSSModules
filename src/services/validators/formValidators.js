const validateActivityName = (activityName, setErrorData) => {
  const cadena = activityName.length
  if (cadena < 5 || cadena > 50) {
    setErrorData('this field must be between 5 and 50 characters in length')
  } else {
    setErrorData('')
  }
}

export {
  validateActivityName
}
