// import React from 'react'
import './SideBar.css'

import { ROUTES } from '../../utils/constants'

import LinkRoute from '../LinkRoute/LinkRoute'

export default function SideBar ({ closeSidebar, sidebar }) {
  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
      <li onClick={closeSidebar} className='burger'><i className='fas fa-bars' /></li>
      <LinkRoute textLink='Landing' route={ROUTES.LANDING} />
      <LinkRoute textLink='Home' route={ROUTES.HOME} />
      <LinkRoute textLink='Form' route={ROUTES.FORM} />
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
