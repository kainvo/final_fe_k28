import React from 'react'
import { useSelector } from 'react-redux'
import { getLoggedInUser } from '../redux/auth/authSlice'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ element }) {
  const user = useSelector(getLoggedInUser)

  return Object.keys(user).length !== 0 ? element : <Navigate to="/login" />
}

export default PrivateRoute