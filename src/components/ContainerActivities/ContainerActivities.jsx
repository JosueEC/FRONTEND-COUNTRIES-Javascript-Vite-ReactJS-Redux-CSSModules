/* eslint-disable react/prop-types */
import CardActivity from '../CardActivity/CardActivity'
import styles from './ContainerActivities.module.css'

export default function ContainerActivities ({ activities }) {
  return (
    <div className={styles.containerCards}>
      {
        activities.map(({ id, name, difficulty, duration, season, image }) => {
          return (
            <CardActivity
              key={id}
              id={id}
              name={name}
              difficulty={difficulty}
              duration={duration}
              season={season}
              image={image}
            />
          )
        })
      }
    </div>
  )
}
