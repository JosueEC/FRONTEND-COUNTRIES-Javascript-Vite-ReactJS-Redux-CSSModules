import { useDispatch } from 'react-redux'
import { orderCountriesHigherPopulation, orderCountriesLowerPopulation, getCountries } from '../../services/redux/actions'
import styles from './ListOrderPopulation.module.css'

export default function ListOrderPopulation () {
  const dispatch = useDispatch()

  function handleSelect (event) {
    const orderSelected = event.target.value
    switch (orderSelected) {
      case 'higher-population':
        dispatch(orderCountriesHigherPopulation())
        break
      case 'lower-population':
        dispatch(orderCountriesLowerPopulation())
        break
      default:
        dispatch(getCountries())
        break
    }
  }
  return (
    <select name='selectPopulation' onChange={handleSelect} defaultValue='random-population' className={styles.selectPopulation}>
      <option value='random-population'>Random Population</option>
      <option value='higher-population'>Higher Population</option>
      <option value='lower-population'>Lower Population</option>
    </select>
  )
}
