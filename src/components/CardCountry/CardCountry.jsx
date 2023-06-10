import { Link } from 'react-router-dom'
import styles from './CardCountry.module.css'

export default function CardCountry () {
  return (
    <Link to='/detail/MEX' className={styles.linkCard}>
      <div className={styles.card}>
        <div className={styles.containerImage}>
          <img src='https://flagcdn.com/w320/mx.png' alt='country flag' />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>Mexico</h3>
          <p><span>Region:</span>americas</p>
          <p><span>Capital:</span>mexico city</p>
          <p><span>Population:</span>128932753</p>
          <p><span>Continent:</span>north america</p>
          <button>Click to see more details...</button>
        </div>
      </div>
    </Link>
  )
}
