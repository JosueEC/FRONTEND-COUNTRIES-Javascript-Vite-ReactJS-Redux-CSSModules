import { lazy, Suspense } from 'react'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'
import styles from './ContainerActivities.module.css'

const CardActivity = lazy(() => import('../CardActivity/CardActivity'))

export default function ContainerActivities ({ activities }) {
  return (
    <div className={styles.containerCards}>
      {
        activities.map(({ id, name, difficulty, duration, season, image }) => {
          return (
            <Suspense key={id} fallback={<LoaderSpinner />}>
              <CardActivity
                key={id}
                id={id}
                name={name}
                difficulty={difficulty}
                duration={duration}
                season={season}
                image={image}
              />
            </Suspense>
          )
        })
      }
    </div>
  )
}
