import React from 'react'
import { auth } from '../../appwrite/auth'
import { useDispatch } from 'react-redux'

const LogoutBtn = () => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        auth.logout().then(
            dispatch(logout())
        )
    }

  return (
    <button onClick={logoutHandler} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn