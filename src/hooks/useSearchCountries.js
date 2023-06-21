// import { toast } from 'sonner'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName, getCountries } from '../services/redux/actions'

export const useSearchCountries = () => {
  const [queryName, setQueryName] = useState('')
  const dispatch = useDispatch()

  function handleChange (event) {
    const queryText = event.target.value
    setQueryName(queryText)
  }

  function handleGetCountries () {
    // toast('Searching All Countries...')
    dispatch(getCountries())
  }

  function handleSearch (event) {
    if (queryName !== '') {
      // toast(`Searching ${queryName}...`)
      dispatch(getCountriesByName(queryName))
    } else {
      // toast('Searching All Countries...')
      dispatch(getCountries())
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
    handleGetCountries,
    handleSearch,
    handleKeyDown
  }
}
