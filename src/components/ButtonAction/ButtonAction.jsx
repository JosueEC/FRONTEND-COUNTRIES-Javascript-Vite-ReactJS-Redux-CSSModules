import styles from './ButtonAction.module.css'

export default function ButtonAction ({ textButton }) {
  return (
    <button className={styles.buttonAction}>{textButton}</button>
  )
}
