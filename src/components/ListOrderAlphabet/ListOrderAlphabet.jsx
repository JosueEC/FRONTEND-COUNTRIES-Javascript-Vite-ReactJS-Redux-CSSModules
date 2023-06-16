import { useDispatch } from 'react-redux'
import { orderCountriesAtoZ, orderCountriesZtoA, getCountries } from '../../services/redux/actions'
import styles from './ListOrderAlphabet.module.css'

export default function ListOrderAlphabet () {
  const dispatch = useDispatch()

  function handleOrder (event) {
    const orderSelected = event.target.value
    switch (orderSelected) {
      case 'a-z':
        dispatch(orderCountriesAtoZ())
        break
      case 'z-a':
        dispatch(orderCountriesZtoA())
        break
      default:
        dispatch(getCountries())
        break
    }
  }

  return (
    <select
      name='selectAlphabet'
      onChange={handleOrder}
      defaultValue='Random Alphabet'
      className={styles.selectAlphabet}
    >
      <option value='random'>Random Alphabet</option>
      <option value='a-z'>A - Z</option>
      <option value='z-a'>Z - A</option>
    </select>
  )
}
