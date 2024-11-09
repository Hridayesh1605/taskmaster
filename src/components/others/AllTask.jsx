import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {

    const AuthData = useContext(AuthContext)
    console.log(AuthData, "alltask")
    return (
        <div className='bg-[1C1C1C] p-5 rounded mt-5 h-60 ' id='alltask'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
                <h2 className='w-1/5'>
                    Student Name
                </h2>
                <h5 className='w-1/5'>Active Task</h5>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>

            <div className='h-[80%] overflow-auto'>
                {AuthData.studentdata.map((elem, idx) => {
                    return <div className='border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between' key={idx}>
                        <h2 className='w-1/5'>
                            {elem.firstName}
                        </h2>
                        <h3 className='w-1/5 text-blue-600'>{elem.taskCount.active}</h3>
                        <h5 className='w-1/5 text-yellow-400'>{elem.taskCount.newTask}</h5>
                        <h5 className='w-1/5 text-white-600'>{elem.taskCount.completed}</h5>
                        <h5 className='w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
                    </div>

                })}

            </div>



        </div>
    )
}

export default AllTask
