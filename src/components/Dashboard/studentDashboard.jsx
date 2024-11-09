import React from 'react'
import Header from '../others/header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const studentDashboard = (props) => {
  console.log(props.data,"dashboard")
  return (
    
      <div className='p-10 bg-[#1C1C1C] h-screen'>
      {/* <h1>{data.studentId}</h1> */}
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    
  )
}

export default studentDashboard
