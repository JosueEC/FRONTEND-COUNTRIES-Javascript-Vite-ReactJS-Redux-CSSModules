import styles from './SearchBar.module.css'

export default function SearchBar () {
  return (
    <div className={styles.containerSearchbar}>
      <input type='search' placeholder='Search country' className={styles.searchInput} />
      <button className={styles.button}>Search</button>
    </div>
  )
}
