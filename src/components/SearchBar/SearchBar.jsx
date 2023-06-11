import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName } from '../../services/redux/actions'

import styles from './SearchBar.module.css'

export default function SearchBar () {
  const [queryName, setQueryName] = useState('')
  const dispatch = useDispatch()

  function handleChange (event) {
    const queryText = event.target.value
    setQueryName(queryText)
  }

  function handleSearch (event) {
    dispatch(getCountriesByName(queryName))
  }

  return (
    <div className={styles.containerSearchbar}>
      <input type='search' placeholder='Search country' onChange={handleChange} className={styles.searchInput} />
      <button className={styles.button} onClick={handleSearch}>Search</button>
    </div>
  )
}
