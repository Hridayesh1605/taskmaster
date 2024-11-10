import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // localStorage.clear()


  const [userData, setuserData] = useState(null)
  useEffect(() => {
    setLocalStorage()
    const { studentdata} = getLocalStorage()
    setuserData(studentdata)

  }, [])

  console.log(userData,"provider")

  // const data=getLocalStorage()
  // console.log(data)
  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
