import './App.css'
import { lazy, Suspense, useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './utils/constants'

import ToolBar from './components/ToolBar/ToolBar'

const SideBar = lazy(() => import('./components/SideBar/SideBar'))
const Backdrop = lazy(() => import('./components/Backdrop/Backdrop'))

const Landing = lazy(() => import('./pages/Landing/Landing'))
const Home = lazy(() => import('./pages/Home/Home'))
const Details = lazy(() => import('./pages/Details/Details'))
const FormNewActivity = lazy(() => import('./pages/FormNewActivity/FormNewActivity'))

function App () {
  const [sidebar, setSidebar] = useState(false)

  function toogleSidebar () {
    setSidebar((prevState) => !prevState)
  }

  return (
    <main>
      <ToolBar openSidebar={toogleSidebar} />
      <Suspense fallback={<div className='containerLoader'><div className='spinner' /></div>}>
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
      </Suspense>
    </main>
  )
}

export default App
