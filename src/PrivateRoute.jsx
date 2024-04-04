import React, { useContext } from 'react'
import { authContext } from './Pages/ContextProvider'
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(authContext);
  const location = useLocation();
  console.log('location: ', location);

  if(loading && user) {
    return <h1 className='text-7xl font-semibold'>Loading</h1>
  }

  if(user) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoute