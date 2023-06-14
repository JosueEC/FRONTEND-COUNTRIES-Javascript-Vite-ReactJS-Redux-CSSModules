/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../utils/constants'

import FlagCountry from '../../components/FlagCountry/FlagCountry'
import TagCountry from '../../components/TagCountry/TagCountry'
import ContainerActivities from '../../components/ContainerActivities/ContainerActivities'

import styles from './Details.module.css'

export default function Details () {
  const { countryID } = useParams()
  const [country, setCountry] = useState()

  useEffect(() => {
    fetch(`${API.DOMAIN}/countries/${countryID}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        return response.json()
      })
      .then((results) => {
        console.info('fetch-country-by-ID')
        setCountry(results.data)
      })
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <section>
      {
        (country)
          ? (
            <div className={styles.containerDetails}>
              <div className={styles.countryInformation}>
                <FlagCountry imageFlag={country.image} nameCountry={country.name} />
                <div className={styles.content}>
                  <TagCountry tagName='Name' tagData={country.name} />
                  <TagCountry tagName='Official Name' tagData={country.official_name} />
                  <TagCountry tagName='Region' tagData={country.region} />
                  <TagCountry tagName='Sub-Region' tagData={country.subregion} />
                  <TagCountry tagName='Capital City' tagData={country.capital} />
                  <TagCountry tagName='Continent' tagData={country.continent} />
                  <TagCountry tagName='Population' tagData={country.population} />
                  <TagCountry tagName='Total Area' tagData={country.area} />
                </div>
              </div>
              <ContainerActivities activities={country.activities} />
            </div>
            )
          : (
            <p>Loading Country...</p>
            )
      }
    </section>
  )
}
