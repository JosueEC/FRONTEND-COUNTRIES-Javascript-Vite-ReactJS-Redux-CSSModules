import { useState } from 'react'
import { useSelector } from 'react-redux'

export function useForm (initialForm, validateForm) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  // const [response, setResponse] = useState(null)
  const selectedCountries = useSelector((state) => state.selectedCountriesForm)

  const completeForm = {
    ...form,
    countries: selectedCountries
  }

  function handleChange (event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleBlur (event) {
    handleChange(event)
    setErrors(validateForm(form))
  }

  function handleSubmit (event) {
    event.preventDefault()
    setErrors(validateForm(form))
    if (selectedCountries.length === 0) {
      alert('You must select at least one country')
    } else {
      if (Object.keys(errors).length === 0 && selectedCountries.length !== 0) {
        setIsLoading(true)
        alert('Valid Form')
        console.info(completeForm)
      } else {
        alert('There are wrong fields in the form')
      }
    }
  }

  return {
    form,
    errors,
    isLoading,
    // response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
