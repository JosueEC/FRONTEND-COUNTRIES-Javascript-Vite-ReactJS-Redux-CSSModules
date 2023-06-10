// import React from 'react'
import styles from './Landing.module.css'
import earth from './assets/earth.png'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'

export default function Landing () {
  return (
    <section className={styles.containerLanding}>
      <div className={styles.content}>
        <h3 className={styles.title}>FLAGS OF THE WORLD</h3>
        <p>Discover the flags of the world!</p>
        <p>Explore the 250 world flags. Filter by name, population, continent and even create tourist activities in many of them.</p>
        <Link to={ROUTES.HOME}><button className={styles.button}>Let's Start!</button></Link>
      </div>
      <div className={styles.containerImage}>
        <img src={earth} alt='world' />
      </div>
    </section>
  )
}