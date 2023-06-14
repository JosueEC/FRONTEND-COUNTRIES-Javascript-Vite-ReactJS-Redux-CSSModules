const validateActivityName = (activityName, setErrorData) => {
  const cadena = activityName.length
  if (cadena < 5 || cadena > 50) {
    setErrorData('this field must be between 5 and 50 characters in length')
  } else {
    setErrorData('')
  }
}

const validateDifficultyActivity = (difficulty, setErrorData) => {
  if (difficulty < 1 || difficulty > 5) {
    setErrorData('activity difficulty must be between 1 and 5 range.')
  } else {
    setErrorData('')
  }
}

const validateActivityDuration = (duration, setErrorData) => {
  if (duration < 1 || duration > 5) {
    setErrorData('activity duration must be less than equal to 5 hours.')
  } else {
    setErrorData('')
  }
}

const validateActivitySeason = (season, setErrorData) => {
  const acceptedSeasons = ['verano', 'otoño', 'invierno', 'primavera']
  if (!acceptedSeasons.includes(season)) {
    setErrorData('activity season must be a valid season of the year.')
  } else {
    setErrorData('')
  }
}

const validateActivityImage = (imageURL, setErrorData) => {
  const regexURL = /^(https?:\/\/)/
  if (!regexURL.test(imageURL)) {
    setErrorData('invalid URL format, must be an URL image')
  } else {
    setErrorData('')
  }
}

export {
  validateActivityName,
  validateDifficultyActivity,
  validateActivityDuration,
  validateActivitySeason,
  validateActivityImage
}
