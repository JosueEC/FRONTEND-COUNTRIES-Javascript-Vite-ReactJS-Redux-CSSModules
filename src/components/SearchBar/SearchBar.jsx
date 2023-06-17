import { Toaster } from 'sonner'
import { useSearchCountries } from '../../hooks/useSearchCountries'
import styles from './SearchBar.module.css'

export default function SearchBar () {
  const { handleChange, handleGetCountries, handleSearch, handleKeyDown } = useSearchCountries()

  return (
    <div className={styles.containerSearchbar}>
      <Toaster richColors position='bottom-right' />
      <input
        type='search'
        placeholder='Search Country'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />
      <button className={styles.button} onClick={handleSearch}>Search</button>
      <button className={styles.button} onClick={handleGetCountries}>All Countries</button>
    </div>
  )
}
