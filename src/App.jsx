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
  // setLocalStorage()


  const [userData,setUserData] = useContext(AuthContext)
  // console.log(AuthData)

  // useEffect(()=>{
  //   setLocalStorage()
  //   // getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  // useEffect(() => {
  //   if(AuthData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }

  // }, [AuthData])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      console.log(userData,"hiiidSHASVDJB")
    }
  }, [])
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {
      const student = userData.find((e) => email == e.email && e.password == password)
      if (student) {
        setUser("student")
        setLoggedInUserData(student)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'student',data:student }))

      }

    } else {
      console.log("invalid credentials")
    }

  }
  console.log(loggedInUserData)
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <AdminDashboard changeUser={setUser}/> : (user == 'student' ? <StudentDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
      
    </>
  )
}

export default App
