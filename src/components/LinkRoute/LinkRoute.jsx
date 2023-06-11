import { Link } from 'react-router-dom'
import styles from './LinkRoute.module.css'

export default function LinkRoute ({ textLink, route }) {
  return (
    <Link to={route} className={styles.link}>{textLink}</Link>
  )
}
