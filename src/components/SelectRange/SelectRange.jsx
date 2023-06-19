import styles from './SelectRange.module.css'

export default function SelectRange ({ name, handleChange, handleBlur, selectText, options, value }) {
  return (
    <select
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      defaultValue={value}
      className={styles.selectRange}
      required
    >
      <option value={value}>{selectText}</option>
      {
      options.map((option) => {
        return (<option key={option} value={option}>{option}</option>)
      })
    }
    </select>
  )
}
