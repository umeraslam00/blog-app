import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import React, { useEffect, useState } from 'react'
import { auth } from "./appwrite/auth"
import { useDispatch } from "react-redux"
import { login, logout } from "./store/authSlice"
import { Outlet } from "react-router-dom"

const App = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <div>loading...</div>
  } else {

    return (
      <div>
        <Header />
          <Outlet />
        <Footer />
      </div>
    )

  }

  
}

export default App
