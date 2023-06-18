/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { getCountries } from '../../services/redux/actions'
import { usePaginate } from '../../hooks/usePaginate'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'
import Paginator from '../Paginator/Paginator'
import styles from './ContainerCards.module.css'
const CardCountry = lazy(() => import('../CardCountry/CardCountry'))

export default function ContainerCards () {
  const countries = useSelector((state) => state.countries)
  const { totalPages, pages, currentPage, setCurrentPage, visibleData } = usePaginate(countries, getCountries, 10)

  return (
    <div className={styles.containerCards}>
      <Paginator totalPages={totalPages} pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className={styles.contentBox}>
        {
        (visibleData)
          ? (
              visibleData.map(({ id, name, region, capital, population, continent, image }) => {
                if (typeof image !== 'undefined') {
                  return (
                    <Suspense key={id} fallback={<LoaderSpinner />}>
                      <CardCountry
                        key={id}
                        id={id}
                        name={name}
                        region={region}
                        capital={capital}
                        population={population}
                        continent={continent}
                        image={image}
                      />
                    </Suspense>
                  )
                } else { return '' }
              })
            )
          : (
            <LoaderSpinner />
            )
      }
      </div>
    </div>
  )
}
