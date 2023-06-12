import ListOrderPopulation from '../ListOrderPopulation/ListOrderPopulation'
import styles from './OrderContainer.module.css'

export default function OrderContainer () {
  return (
    <div className={styles.containerLists}>
      <ListOrderPopulation />
    </div>
  )
}
