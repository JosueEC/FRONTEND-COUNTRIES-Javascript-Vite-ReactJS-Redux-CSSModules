/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFieldForm } from '../../services/redux/actions'
import styles from './InputValidate.module.css'

export default function InputValidate ({ inputType, nameLabel, textLabel, validateFunction }) {
  const [data, setData] = useState('')
  const [errorData, setErrorData] = useState('')
  const dispatch = useDispatch()

  function handleInputChange (event) {
    const { value, name } = event.target

    setData(value)
    validateFunction(data, setErrorData)
    dispatch(setFieldForm(name, data))
  }

  return (
    <div className={styles.inputBox}>
      <input type={inputType} name={nameLabel} id={nameLabel} onChange={handleInputChange} onBlur={handleInputChange} required />
      <label htmlFor={nameLabel}>{textLabel}</label>
      <span className={styles.messageError}>{errorData}</span>
    </div>
  )
}
