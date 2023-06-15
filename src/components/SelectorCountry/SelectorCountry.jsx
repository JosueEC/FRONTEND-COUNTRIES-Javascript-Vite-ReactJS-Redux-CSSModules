import { useFetch } from '../../hooks/useFetch'
import { API } from '../../utils/constants'
import SelectorBox from '../SelectorBox/SelectorBox'
import './SelectorCountry.css'

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
                  <SelectorBox
                    key={id}
                    id={id}
                    imageFlag={image}
                    countryName={name}
                  />
                )
              })
            )
      }
    </div>
  )
}
