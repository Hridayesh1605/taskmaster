import React, { useState } from 'react'

const header = (props) => {
  // const [username, setUsername] = useState("")

  // if(!data){
  //   setUsername("admin")
  // }else{
  //   setUsername(data.firstName)
  // }
  // console.log(props.data.firstName,"header")
  
  const loggedInUser =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{props.data.firstName}</span> </h1>
    <button className='bg-red-600 text-lg font-medium text-white px-5 py-2' onClick={loggedInUser}>Log Out</button>
      
    </div>
  )
}

export default header
