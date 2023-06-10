import { Link } from 'react-router-dom'
import styles from './CardCountry.module.css'
import { useEffect, useState } from 'react'

export default function CardCountry () {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/countries/COL')
      .then((response) => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        return response.json()
      })
      .then((results) => {
        console.info('fetch-country-card')
        setCountry(results.data)
      })
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <Link to='/detail/MEX' className={styles.linkCard}>
      {
      country
        ? (
          <div className={styles.card}>
            <div className={styles.containerImage}>
              <img src={country.image} alt='country flag' />
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

          )
        : (
          <h2>Loading...</h2>
          )
    }
    </Link>
  )
}
