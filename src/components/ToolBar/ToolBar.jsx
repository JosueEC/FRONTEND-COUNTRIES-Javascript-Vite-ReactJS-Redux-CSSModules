// import React from 'react'
import styles from './ToolBar.module.css'

export default function ToolBar ({ openSidebar }) {
  return (
    <div className={styles.containerNavbar}>
      <nav className={styles.toolbar}>
        <div className={styles.burger} onClick={openSidebar}>
          <i className='fas fa-bars' />
        </div>
        <div className={styles.title}>FLAGSPEDIA</div>
      </nav>
    </div>
  )
}
