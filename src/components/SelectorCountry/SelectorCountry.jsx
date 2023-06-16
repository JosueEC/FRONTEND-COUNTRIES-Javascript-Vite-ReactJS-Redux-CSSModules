import { lazy, Suspense } from 'react'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'

import { useFetch } from '../../hooks/useFetch'
import { API } from '../../utils/constants'
import './SelectorCountry.css'

const SelectorBox = lazy(() => import('../SelectorBox/SelectorBox'))

export default function SelectorCountry () {
  const { data, isLoading } = useFetch(`${API.DOMAIN}/countries/all/flags`)

  return (
    <div className='containerOptions'>
      {
        (isLoading)
          ? <p>Loading Flags</p>
          : (
              data.map(({ id, name, image }) => {
                return (
                  <Suspense key={id} fallback={<LoaderSpinner />}>
                    <SelectorBox
                      key={id}
                      id={id}
                      imageFlag={image}
                      countryName={name}
                    />
                  </Suspense>
                )
              })
            )
      }
    </div>
  )
}
