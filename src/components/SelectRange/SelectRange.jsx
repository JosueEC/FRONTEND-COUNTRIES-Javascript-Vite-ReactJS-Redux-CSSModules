/* eslint-disable react/prop-types */
import styles from './SelectRange.module.css'

export default function SelectRange ({ name, handleChange, handleBlur, selectText, options }) {
  return (
    <select
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      defaultValue={0}
      className={styles.selectRange}
      required
    >
      <option value={0}>{selectText}</option>
      {
      options.map((option) => {
        return (<option key={option} value={option}>{option}</option>)
      })
    }
    </select>
  )
}
