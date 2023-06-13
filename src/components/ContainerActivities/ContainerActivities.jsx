import FlagCountry from '../FlagCountry/FlagCountry'
import TagCountry from '../TagCountry/TagCountry'
import styles from './ContainerActivities.module.css'

export default function ContainerActivities () {
  return (
    <div className={styles.containerCards}>
      <div className={styles.cardActivity}>
        <FlagCountry imageFlag='https://koa.com/blog/images/family-camping-at-sunset.jpg?preset=heroimagecropped' nameCountry='camping' />
        <div className={styles.content}>
          <div className={styles.tags}>
            <TagCountry tagName='Difficulty' tagData='2' />
            <TagCountry tagName='Duration' tagData='3' />
            <TagCountry tagName='Season' tagData='Otoño' />
          </div>
          <div className={styles.bannerActivity}>CAMPING</div>
        </div>
      </div>
    </div>
  )
}
