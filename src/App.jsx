import React from 'react'
import Login from './components/Auth/Login'
import StudentDashboard from './components/Dashboard/studentDashboard'
import AdminDashboard from './components/Dashboard/adminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },)
  return (
    <>
      <Login/>
      {/* <StudentDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
