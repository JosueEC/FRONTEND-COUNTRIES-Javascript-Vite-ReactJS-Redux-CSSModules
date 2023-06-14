import { useState, useEffect } from 'react'
import { API } from '../../utils/constants'
import SelectorBox from '../SelectorBox/SelectorBox'
import './SelectorCountry.css'

export default function SelectorCountry () {
  const [countryIDS, setCountryIDS] = useState([])

  useEffect(() => {
    fetch(`${API.DOMAIN}/countries/all/flags`)
      .then((response) => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        return response.json()
      })
      .then((results) => {
        console.info('fetch-all-country-IDs')
        setCountryIDS(results.data)
      })
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <div className='containerOptions'>
      {
        (countryIDS)
          ? (
              countryIDS.map(({ id, name, image }) => {
                return (
                  <SelectorBox
                    key={id}
                    imageFlag={image}
                    countryName={name}
                  />
                )
              })
            )
          : (
            <p>Loading Flags</p>
            )
      }
    </div>
  )
}
