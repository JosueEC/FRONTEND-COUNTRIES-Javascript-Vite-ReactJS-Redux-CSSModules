/* eslint-disable react/prop-types */
import styles from './InputValidate.module.css'

export default function InputValidate ({ inputType, inputName, inputText, onChange, onBlur, value, errorMessage }) {
  return (
    <div className={styles.inputBox}>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        onChange={onChange}
        onBlur={onBlur} required
      />
      <label htmlFor={inputName}>{inputText}</label>
      <span className={styles.messageError}>{errorMessage}</span>
    </div>
  )
}
