/* eslint-disable react/prop-types */
import { useState } from 'react'
import './SelectorBox.css'

export default function SelectorBox ({ imageFlag, countryName }) {
  const [selected, setSelected] = useState(false)

  function handleSelected () {
    setSelected((prevState) => !prevState)
  }

  return (
    <div className={(selected) ? 'box-selector box-selector--selected' : 'box-selector'} onClick={handleSelected}>
      <img src={imageFlag} alt={`${countryName} flag`} />
      <span>{countryName}</span>
    </div>
  )
}
