import styles from './TagCountry.module.css'

export default function TagCountry ({ tagName, tagData }) {
  return (
    <p className={styles.tagCountry}><span>{tagName}</span>{tagData}</p>
  )
}
