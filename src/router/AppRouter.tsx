import React from 'react'
import { publicRoutes } from './Routes'
import { Route, Routes } from 'react-router'

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({Component, path}) => <Route key={path} path={path} element={<Component />} />)}
    </Routes>
  )
}

export default AppRouter