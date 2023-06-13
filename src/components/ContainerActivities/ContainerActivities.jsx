import CardActivity from '../CardActivity/CardActivity'
import styles from './ContainerActivities.module.css'

export default function ContainerActivities () {
  return (
    <div className={styles.containerCards}>
      <CardActivity />
    </div>
  )
}
