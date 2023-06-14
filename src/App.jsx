import './App.css'
import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './utils/constants'

import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import FormNewActivity from './pages/FormNewActivity/FormNewActivity'

import ToolBar from './components/ToolBar/ToolBar'
import SideBar from './components/SideBar/SideBar'
import Backdrop from './components/Backdrop/Backdrop'

function App () {
  const [sidebar, setSidebar] = useState(false)

  function toogleSidebar () {
    setSidebar((prevState) => !prevState)
  }

  return (
    <main>
      <ToolBar openSidebar={toogleSidebar} />
      <SideBar closeSidebar={toogleSidebar} sidebar={sidebar} />
      <Backdrop closeSidebar={toogleSidebar} sidebar={sidebar} />
      <Routes>
        <Route
          path={ROUTES.LANDING}
          element={<Landing />}
        />
        <Route
          path={ROUTES.HOME}
          element={<Home />}
        />
        <Route
          path={ROUTES.DETAIL}
          element={<Details />}
        />
        <Route
          path={ROUTES.FORM}
          element={<FormNewActivity />}
        />
      </Routes>
    </main>
  )
}

export default App
