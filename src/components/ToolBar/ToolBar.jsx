import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import styles from './ToolBar.module.css'

export default function ToolBar ({ openSidebar }) {
  return (
    <div className={styles.containerNavbar}>
      <nav className={styles.toolbar}>
        <div className={styles.burger} onClick={openSidebar}>
          <i className='fas fa-bars' />
        </div>
        <Link to={ROUTES.LANDING}><div className={styles.title}>FLAGSPEDIA</div></Link>
      </nav>
    </div>
  )
}
