import styles from './FlagCountry.module.css'

export default function FlagCountry ({ imageFlag, nameCountry }) {
  return (
    <div className={styles.containerImageFlag}>
      <img src={imageFlag} alt={`${nameCountry} flag`} />
    </div>
  )
}
