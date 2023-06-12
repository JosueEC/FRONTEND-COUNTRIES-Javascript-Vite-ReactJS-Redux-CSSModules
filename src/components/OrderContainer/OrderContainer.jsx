import ListOrderPopulation from '../ListOrderPopulation/ListOrderPopulation'
import ListOrderAlphabet from '../ListOrderAlphabet/ListOrderAlphabet'
import styles from './OrderContainer.module.css'

export default function OrderContainer () {
  return (
    <div className={styles.containerLists}>
      <ListOrderPopulation />
      <ListOrderAlphabet />
    </div>
  )
}
