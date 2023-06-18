import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addCountryForm, removeCountryForm } from '../../services/redux/actions'
import './SelectorBox.css'

export default function SelectorBox ({ id, imageFlag, countryName }) {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()

  function handleSelected () {
    setSelected((prevState) => !prevState)
    if (selected) {
      dispatch(removeCountryForm(id))
    } else {
      dispatch(addCountryForm(id))
    }
  }

  return (
    <div className={(selected) ? 'box-selector box-selector--selected' : 'box-selector'} onClick={handleSelected}>
      <img src={imageFlag} alt={`${countryName} flag`} />
      <span>{countryName}</span>
    </div>
  )
}
