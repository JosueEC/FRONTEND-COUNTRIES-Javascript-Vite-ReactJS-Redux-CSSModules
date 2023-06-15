import { useState } from 'react'

export function useForm (initialForm, validateForm) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)

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

    if (Object.keys(errors).length === 0) {
      alert('Enviando Formulario')
      setIsLoading(true)
    } else {
      alert('Hay campos erroneos en el fromulario')
    }
  }

  return {
    form,
    errors,
    isLoading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
