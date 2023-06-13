/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../services/redux/actions'

import styles from './ContainerCards.module.css'
import CardCountry from '../CardCountry/CardCountry'
import Paginator from '../Paginator/Paginator'

export default function ContainerCards () {
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  const countriesPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(countries.length / countriesPerPage)
  const pages = [...Array(totalPages + 1).keys()].slice(1)

  const lastIndexPage = currentPage * countriesPerPage
  const firstIndexPage = lastIndexPage - countriesPerPage

  const visibleCountries = countries.slice(firstIndexPage, lastIndexPage)

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries())
    }
  }, [])

  return (
    <div className={styles.containerCards}>
      <h1>Flags of the World</h1>
      <Paginator totalPages={totalPages} pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className={styles.contentBox}>
        {
        (visibleCountries)
          ? (
              visibleCountries.map(({ id, name, region, capital, population, continent, image }) => {
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
