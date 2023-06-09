import './App.css'

import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './utils/constants'

import ToolBar from './components/ToolBar/ToolBar'

function App () {
  return (
    <main>
      <ToolBar />
      <Routes>
        <Route
          path={ROUTES.LANDING}
          element={<h2>Landing Page</h2>}
        />
        <Route
          path={ROUTES.HOME}
          element={<h2>Home</h2>}
        />
        <Route
          path={ROUTES.DETAIL}
          element={<h2>Detail</h2>}
        />
        <Route
          path={ROUTES.FORM}
          element={<h2>Form</h2>}
        />
      </Routes>
    </main>
  )
}

export default App
