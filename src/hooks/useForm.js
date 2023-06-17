import { toast } from 'sonner'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postFormNewActivity } from '../services/redux/actions'

export function useForm (initialForm, validateForm) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const selectedCountries = useSelector((state) => state.selectedCountriesForm)
  const dispatch = useDispatch()

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
      toast.error('You must select at least one country')
    } else {
      if (Object.keys(errors).length === 0 && selectedCountries.length !== 0) {
        dispatch(postFormNewActivity(completeForm))
        const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))

        toast.promise(promise, {
          loading: 'Creating Activity...',
          success: () => {
            return 'The activity has been created'
          },
          error: 'Something went wrong, try again later.'
        })
      } else {
        toast.error('There are wrong fields in the form')
      }
    }
  }

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
