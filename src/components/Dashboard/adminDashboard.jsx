import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const adminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser} data={{firstName:"admin"}}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default adminDashboard
