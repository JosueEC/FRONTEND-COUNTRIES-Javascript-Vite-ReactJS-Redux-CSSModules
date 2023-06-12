import { filterCountriesByContinent, getCountries } from '../../services/redux/actions'
import { useDispatch } from 'react-redux'

import { ROUTES } from '../../utils/constants'
import LinkRoute from '../LinkRoute/LinkRoute'

import './SideBar.css'

export default function SideBar ({ closeSidebar, sidebar }) {
  const dispatch = useDispatch()

  function handleFilter (event) {
    const continent = event.target.id

    if (continent !== 'all countries') {
      dispatch(filterCountriesByContinent(continent))
    } else {
      dispatch(getCountries())
    }
  }

  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
      <li onClick={closeSidebar} className='burger'><i className='fas fa-bars' /></li>
      <LinkRoute textLink='Landing' route={ROUTES.LANDING} />
      <LinkRoute textLink='Home' route={ROUTES.HOME} />
      <LinkRoute textLink='Form' route={ROUTES.FORM} />
      <br />
      <label>Continents</label>
      <li id='all countries' onClick={handleFilter}>All Countries</li>
      <li id='south america' onClick={handleFilter}>South America</li>
      <li id='north america' onClick={handleFilter}>North America</li>
      <li id='africa' onClick={handleFilter}>Africa</li>
      <li id='europe' onClick={handleFilter}>Europa</li>
      <li id='asia' onClick={handleFilter}>Asia</li>
      <li id='oceania' onClick={handleFilter}>Oceania</li>
      <li id='antarctica' onClick={handleFilter}>Antarctica</li>
    </div>
  )
}
