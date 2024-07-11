import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLoggedInUser, logout } from '../redux/auth/authSlice'
import { Cursor } from 'mongoose'
import { removeMovie, removeMovies } from '../redux/movie/movieSlice'

function Layout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(getLoggedInUser)
           
    const handleLogout = () => {
        if  (confirm("Confirm logout")) {
            dispatch(logout(localStorage.getItem('accessToken')))
            dispatch(removeMovies())
            dispatch(removeMovie())

            navigate('/login')
        }
    
    }
    return (
        <div>
          <header style={{
            backgroundColor: '#6366F1',
            padding: '30px 20px'
          }}>
            <div style={{
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center',
                // gap: 10,
                // width: '100%',
                // height: '100%',
                // padding: '0 20px'
            }}>
                <Link style={{
                color: 'white'
                }}
                title='Home'
                to={ 
                    user?.email ? "/" : "/login"
                }
                className='fa-solid fa-house'
                />
        
                {
                user?.email && (<div style={{
                    display: 'flex',
                    justifyContent:'flex-end',
                    alignItems: 'center',
                    gap: 5
                }}>
                    {
                    user?.role === "admin" &&
                    <Link
                        style={{
                        color: 'white',
                        cursor: 'pointer'
                        }}
                        title='Edit movie'
                        to='/admin' className='fa-solid fa-pen-to-square'
                    />
                    }
                    <button style={{
                    cursor: 'pointer'
                    }} 
                    title='logout' 
                    onClick={handleLogout} 
                    className='fa-solid fa-right-from-bracket' />
                </div>)
                }
            </div>
            
          </header>
        </div>
      )
    }

export default Layout