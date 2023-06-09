// import React from 'react'
import './SideBar.css'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'

export default function SideBar ({ closeSidebar, sidebar }) {
  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
      <li onClick={closeSidebar} className='burger'><i className='fas fa-bars' /></li>
      <Link to={ROUTES.LANDING} className='link'>Landing</Link>
      <Link to={ROUTES.HOME} className='link'>Home</Link>
      <Link to={ROUTES.FORM} className='link'>Form</Link>
      <br />
      <label>Continents</label>
      <li>America</li>
      <li>Africa</li>
      <li>Europa</li>
      <li>Asia</li>
      <li>Oceania</li>
    </div>
  )
}
