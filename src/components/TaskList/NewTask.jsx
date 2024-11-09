import React ,{useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data,userId}) => {

    const [userData,setUserData] = useContext(AuthContext)
    console.log(userId.id,"hi")
    console.log(userId,"zsdcf")

    const btnHandler = ()=>{
        const updatedUserData = userData.map(user => {
            if(user.id === userId.id){
                const updatedTasks = user.tasks.map(task => {
                    if (task.taskTitle === data.taskTitle) {
                        return { ...task, active: true, newTask: false };
                    }
                    return task;
                })
                const updatedTaskCount = {
                    ...user.taskCount,
                    active: user.taskCount.active + 1,
                    newTask: user.taskCount.newTask - 1
                };
                return { ...user, tasks: updatedTasks, taskCount: updatedTaskCount };
            }
            return user;
        })
        setUserData(updatedUserData);

        userId.taskCount.active = userId.taskCount.active+ 1;
        userId.taskCount.newTask =userId.taskCount.newTask- 1;
        userId.tasks.map((task)=>{
            if(task.taskTitle === data.taskTitle){
                task.active = true;
                task.newTask = false;
            }
        })

        console.log(updatedUserData,"qwertyu")
        localStorage.setItem('student', JSON.stringify(updatedUserData));
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'student',data:userId }))



    }
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
            {data.taskTitle}
            </h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-600 text-white px-3 py-1 rounded' onClick={btnHandler}>Accept Task</button>
                

            </div>

        </div>
    )
}

export default NewTask
