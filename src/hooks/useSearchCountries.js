import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName } from '../services/redux/actions'

export const useSearchCountries = () => {
  const [queryName, setQueryName] = useState('')
  const dispatch = useDispatch()

  function handleChange (event) {
    const queryText = event.target.value
    setQueryName(queryText)
  }

  function handleSearch (event) {
    if (queryName !== '') {
      dispatch(getCountriesByName(queryName))
    }
  }

  function handleKeyDown (event) {
    const pressedKey = event.key
    if (pressedKey === 'Enter') {
      handleSearch()
    }
  }

  return {
    handleChange,
    handleSearch,
    handleKeyDown
  }
}
