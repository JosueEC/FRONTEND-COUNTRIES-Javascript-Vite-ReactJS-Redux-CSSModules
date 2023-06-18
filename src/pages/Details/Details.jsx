import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { API } from '../../utils/constants'
import FlagCountry from '../../components/FlagCountry/FlagCountry'
import TagCountry from '../../components/TagCountry/TagCountry'
import ContainerActivities from '../../components/ContainerActivities/ContainerActivities'
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner'
import styles from './Details.module.css'

export default function Details () {
  const { countryID } = useParams()
  const { data, isLoading } = useFetch(`${API.DOMAIN}/countries/${countryID}`)

  return (
    <section>
      {
        (isLoading)
          ? <LoaderSpinner />
          : (
            <div className={styles.containerDetails}>
              <div className={styles.countryInformation}>
                <FlagCountry imageFlag={data.image} nameCountry={data.name} />
                <div className={styles.content}>
                  <TagCountry tagName='Name' tagData={data.name} />
                  <TagCountry tagName='Official Name' tagData={data.official_name} />
                  <TagCountry tagName='Region' tagData={data.region} />
                  <TagCountry tagName='Sub-Region' tagData={data.subregion} />
                  <TagCountry tagName='Capital City' tagData={data.capital} />
                  <TagCountry tagName='Continent' tagData={data.continent} />
                  <TagCountry tagName='Population' tagData={data.population} />
                  <TagCountry tagName='Total Area' tagData={data.area} />
                </div>
              </div>
              <ContainerActivities activities={data.activities} />
            </div>
            )
      }
    </section>
  )
}
