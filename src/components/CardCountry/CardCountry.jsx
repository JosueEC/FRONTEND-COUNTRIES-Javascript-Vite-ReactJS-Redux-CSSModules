/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import FlagCountry from '../FlagCountry/FlagCountry'
import TagCountry from '../TagCountry/TagCountry'
import { formatNumber } from '../../services/validators/formatNumber'
import styles from './CardCountry.module.css'

export default function CardCountry ({ id, name, region, capital, population, continent, image }) {
  return (
    <Link to={(id === 'NO RESULT') ? '/notfound' : `/detail/${id}`} className={styles.linkCard}>
      <div className={styles.card}>
        <FlagCountry imageFlag={image} nameCountry={name} />
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <TagCountry tagName='Region' tagData={region} />
          <TagCountry tagName='Capital' tagData={capital} />
          <TagCountry tagName='Population' tagData={formatNumber(population)} />
          <TagCountry tagName='Continent' tagData={continent} />
          <button>Click to see more details...</button>
        </div>
      </div>
    </Link>
  )
}
