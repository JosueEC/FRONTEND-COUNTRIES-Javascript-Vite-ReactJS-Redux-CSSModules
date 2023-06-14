import { useState } from 'react'
import './SelectorBox.css'

export default function SelectorBox () {
  const [selected, setSelected] = useState(false)

  function handleSelected () {
    setSelected((prevState) => !prevState)
  }

  return (
    <div className={(selected) ? 'box-selector box-selector--selected' : 'box-selector'} onClick={handleSelected}>
      <img src='https://flagcdn.com/w320/mx.png' alt='mexico flag' />
      <span>Mexico</span>
    </div>
  )
}
