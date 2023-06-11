import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import styles from './CardCountry.module.css'

import TagCountry from '../TagCountry/TagCountry'

export default function CardCountry () {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/countries/MDG')
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
              <h3 className={styles.title}>{country.name}</h3>
              <TagCountry tagName='Region' tagData={country.region} />
              <TagCountry tagName='Capital' tagData={country.capital} />
              <TagCountry tagName='Population' tagData={country.population} />
              <TagCountry tagName='Continent' tagData={country.continent} />
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
