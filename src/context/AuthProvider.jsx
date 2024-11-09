import React, { createContext,useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
  

    const [userData, setuserData] = useState(null)
    useEffect(() => {
        const {studentdata,admindata} = getLocalStorage()
    setuserData({studentdata,admindata})
    
    },[])
    
    // const data=getLocalStorage()
    // console.log(data)
  return (
    <div>
    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
