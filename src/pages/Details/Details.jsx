import FlagCountry from '../../components/FlagCountry/FlagCountry'
import TagCountry from '../../components/TagCountry/TagCountry'
import MapCountry from '../../components/MapCountry/MapCountry'
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
        <MapCountry mapLink='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14980704.286144285!2d-102.62050004999999!3d23.554126900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses!2smx!4v1686680560152!5m2!1ses!2smx' />
      </div>
    </section>
  )
}
