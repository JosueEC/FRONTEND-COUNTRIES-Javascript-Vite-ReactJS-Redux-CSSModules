export const validationForm = (form) => {
  const errors = {}
  const regexTtext = /[a-zA-Z ]{2,254}/
  const regexNumber = /^[1-5]{1}$/
  const regexURL = /^(https?:\/\/)/

  if (!form.name.trim()) {
    errors.name = 'this field is required'
  } else if (!regexTtext.test(form.name)) {
    errors.name = 'activity name can only contain letters and spaces'
  } else {
    delete errors.name
  }

  if (form.difficulty < 1 || form.difficulty > 5) {
    errors.difficulty = 'activity difficulty must be between 1 and 5 range.'
  } else if (!regexNumber.test(form.difficulty)) {
    errors.difficulty = 'activity difficulty must be between 1 and 5 range.'
  } else {
    delete errors.difficulty
  }

  if (form.duration < 1 || form.duration > 5) {
    errors.duration = 'activity duration must be less than equal to 5 hours.'
  } else if (!regexNumber.test(form.duration)) {
    errors.duration = 'activity duration must be less than equal to 5 hours.'
  } else {
    delete errors.duration
  }

  if (!form.image.trim()) {
    errors.image = 'this fields is required'
  } else if (!regexURL.test(form.image)) {
    errors.image = 'invalid URL format, must be an URL image'
  } else {
    delete errors.image
  }

  return errors
}
