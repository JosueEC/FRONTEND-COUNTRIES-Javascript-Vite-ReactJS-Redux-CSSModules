import { useSearchCountries } from '../../hooks/useSearchCountries'
import styles from './SearchBar.module.css'

export default function SearchBar () {
  const { handleChange, handleSearch, handleKeyDown } = useSearchCountries()

  return (
    <div className={styles.containerSearchbar}>
      <input
        type='search'
        placeholder='Search Country'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />
      <button className={styles.button} onClick={handleSearch}>Search</button>
    </div>
  )
}
