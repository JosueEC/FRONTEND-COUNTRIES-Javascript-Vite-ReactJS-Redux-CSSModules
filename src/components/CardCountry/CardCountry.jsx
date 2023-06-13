import { Link } from 'react-router-dom'
import styles from './CardCountry.module.css'

import FlagCountry from '../FlagCountry/FlagCountry'
import TagCountry from '../TagCountry/TagCountry'

export default function CardCountry ({ id, name, region, capital, population, continent, image }) {
  return (
    <Link to={`/detail/${id}`} className={styles.linkCard} key={id}>
      <div className={styles.card}>
        <FlagCountry imageFlag={image} nameCountry={name} />
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <TagCountry tagName='Region' tagData={region} />
          <TagCountry tagName='Capital' tagData={capital} />
          <TagCountry tagName='Population' tagData={population} />
          <TagCountry tagName='Continent' tagData={continent} />
          <button>Click to see more details...</button>
        </div>
      </div>
    </Link>
  )
}
