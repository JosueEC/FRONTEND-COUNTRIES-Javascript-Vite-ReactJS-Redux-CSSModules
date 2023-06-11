import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../services/redux/actions'

import styles from './ContainerCards.module.css'
import CardCountry from '../CardCountry/CardCountry'

export default function ContainerCards () {
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries())
    }
  }, [])

  return (
    <div className={styles.containerCards}>
      <h1>Flags of the World</h1>
      <div className={styles.contentBox}>
        {
        (countries)
          ? (
              countries.map(({ id, name, region, capital, population, continent, image }) => {
                return (
                  <CardCountry
                    key={id}
                    id={id}
                    name={name}
                    region={region}
                    capital={capital}
                    population={population}
                    continent={continent}
                    image={image}
                  />
                )
              })
            )
          : (
            <h2>Loading Cards...</h2>
            )
      }
        <CardCountry />
      </div>
    </div>
  )
}
