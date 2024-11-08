import React from 'react'
import Login from './components/Auth/Login'
import StudentDashboard from './components/Dashboard/studentDashboard'
import AdminDashboard from './components/Dashboard/adminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  

  const AuthData = useContext(AuthContext)
  console.log(AuthData)

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  useEffect(() => {
    if(AuthData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
    
  }, [AuthData])
  const handleLogin = (email,password)=>{
    if(email=="admin@me.com"&& password=="123"){
      setUser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(AuthData && AuthData.studentdata.find((e)=>email==e.email && e.password==password)){
      setUser("student")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'student'}))
    }else{
      console.log("invalid credentials")
    }

  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user=="admin" ? <AdminDashboard/>:<StudentDashboard/>}
      {/* <StudentDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
