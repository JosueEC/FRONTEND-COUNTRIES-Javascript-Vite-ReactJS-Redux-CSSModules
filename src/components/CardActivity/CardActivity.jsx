/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import FlagCountry from '../FlagCountry/FlagCountry'
import TagCountry from '../TagCountry/TagCountry'
import styles from './CardActivity.module.css'

export default function CardActivity ({ id, name, difficulty, duration, season, image }) {
  return (
    <div className={styles.cardActivity} key={id}>
      <FlagCountry imageFlag={image} nameCountry={name} />
      <div className={styles.content}>
        <div className={styles.tags}>
          <TagCountry tagName='Difficulty' tagData={difficulty} />
          <TagCountry tagName='Duration' tagData={duration} />
          <TagCountry tagName='Season' tagData={season} />
        </div>
        <div className={styles.bannerActivity}>{name}</div>
      </div>
    </div>
  )
}
