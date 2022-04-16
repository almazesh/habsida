import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Routeauth, RoutePage } from '../utils/Routelist';

const Layout = () => {
  const user = true  
  return (
    <React.Fragment>
      <Routes>
        {
          user && (
            RoutePage.map(item => {
              if(item.auth){
                return (
                  <Route key={item.auth} path={item.path} element={<item.element />} />
                )
              }
            })
          )
        }
        {
          !user && (
            Routeauth.map(route => {
              if(route.auth){
                return false
              }
              
              return (
                <Route path={route.path} element={<route.element />} key={route.path}  />
              )
            })
          )
        }
        <Route path='*' element={<Navigate to={user ? '/' : 'registration'}/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default Layout