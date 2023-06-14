/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './InputValidate.module.css'

export default function InputValidate ({ inputType, nameLabel, textLabel, validateFunction }) {
  const [data, setData] = useState('')
  const [errorData, setErrorData] = useState('')

  function handleInputChange (event) {
    const { value } = event.target
    setData(value)
    validateFunction(data, setErrorData)
  }

  return (
    <div className={styles.inputBox}>
      <input type={inputType} name={nameLabel} id={nameLabel} onChange={handleInputChange} required />
      <label htmlFor={nameLabel}>{textLabel}</label>
      <span className={styles.messageError}>{errorData}</span>
    </div>
  )
}
