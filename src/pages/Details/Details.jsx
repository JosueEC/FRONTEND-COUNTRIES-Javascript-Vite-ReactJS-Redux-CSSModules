import FlagCountry from '../../components/FlagCountry/FlagCountry'
import TagCountry from '../../components/TagCountry/TagCountry'
import ContainerActivities from '../../components/ContainerActivities/ContainerActivities'
import styles from './Details.module.css'

export default function Details () {
  return (
    <section>
      <div className={styles.containerDetails}>
        <div className={styles.countryInformation}>
          <FlagCountry imageFlag='https://flagcdn.com/w320/mx.png' nameCountry='mexico' />
          <div className={styles.content}>
            <TagCountry tagName='Name' tagData='Mexico' className={styles.tagCountry} />
            <TagCountry tagName='Official Name' tagData='United Mexican States' />
            <TagCountry tagName='Region' tagData='Americas' />
            <TagCountry tagName='Sub-Region' tagData='North America' />
            <TagCountry tagName='Capital City' tagData='Mexico City' />
            <TagCountry tagName='Continent' tagData='North America' />
            <TagCountry tagName='Population' tagData='126,577,691' />
            <TagCountry tagName='Total Area' tagData='1, 964, 380 km2' />
          </div>
        </div>
        <ContainerActivities />
      </div>
    </section>
  )
}
