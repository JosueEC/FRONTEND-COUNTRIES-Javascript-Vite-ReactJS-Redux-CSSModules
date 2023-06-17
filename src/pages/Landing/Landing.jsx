import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import ButtonAction from '../../components/ButtonAction/ButtonAction'
import styles from './Landing.module.css'
import earth from './assets/earth.png'

export default function Landing () {
  return (
    <section className={styles.containerLanding}>
      <div className={styles.content}>
        <h3 className={styles.title}>FLAGS OF THE WORLD</h3>
        <p className={styles.slogan}>Discover the flags of the world!</p>
        <p>Explore the 250 world flags. Filter by name, population, continent and even create tourist activities in many of them.</p>
        <Link to={ROUTES.HOME}><ButtonAction textButton='Lets Start!' /></Link>
      </div>
      <div className={styles.containerImage}>
        <img src={earth} alt='world' />
      </div>
    </section>
  )
}
