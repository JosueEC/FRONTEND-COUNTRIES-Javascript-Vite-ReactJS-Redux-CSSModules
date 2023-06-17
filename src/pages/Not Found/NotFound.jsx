import LinkRoute from '../../components/LinkRoute/LinkRoute'
import { ROUTES } from '../../utils/constants'
import styles from './NotFound.module.css'

export default function NotFound () {
  return (
    <section>
      <h2 className={styles.labelNotFound}>NOT FOUND</h2>
      <LinkRoute textLink='Click to back to Home' route={ROUTES.HOME} />
    </section>
  )
}
