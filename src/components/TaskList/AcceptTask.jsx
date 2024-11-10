import React ,{useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data,userId}) => {
    const [userData,setUserData] = useContext(AuthContext)

    const completeHandler = ()=>{
        const updateUserData2 = userData.map(user=>{
            if(user.id === userId.id){
                const updatedTask2 = user.tasks.map(task=>{
                    if(task.taskTitle === data.taskTitle){
                        return{
                            ...task,
                            active:false,
                            completed:true
                        }
                        
                    }
                    return task
                })
                const updatedTaskCount2 = {
                    ...user.taskCount,
                    active:user.taskCount.active - 1,
                    completed: user.taskCount.completed + 1
                };
                return { ...user, tasks: updatedTask2, taskCount: updatedTaskCount2 };
            }
            return user;

        })
        setUserData(updateUserData2)
        userId.taskCount.active=userId.taskCount.active - 1;
        userId.taskCount.completed=userId.taskCount.completed + 1;
        userId.tasks.map((task)=>{
            if(task.taskTitle === data.taskTitle){
                task.active=false;
                task.completed=true;
            }
        })
        localStorage.setItem('student', JSON.stringify(updateUserData2));
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'student',data:userId }))
    }

    const failedHandler =()=>{
        const updateUserData1 = userData.map(user=>{
            if(user.id === userId.id){
                const updatedTask1 = user.tasks.map(task=>{
                    if(task.taskTitle === data.taskTitle){
                        return{
                            ...task,
                            active:false,
                            completed:false,
                            failed:true
                        }
                        
                    }
                    return task
                })
                const updatedTaskCount1 = {
                    ...user.taskCount,
                    active:user.taskCount.active - 1,
                    completed: user.taskCount.failed + 1
                };
                return { ...user, tasks: updatedTask1, taskCount: updatedTaskCount1 };
            }
            return user;

        })
        setUserData(updateUserData1)
        userId.taskCount.active=userId.taskCount.active - 1;
        userId.taskCount.failed=userId.taskCount.failed + 1;
        userId.tasks.map((task)=>{
            if(task.taskTitle === data.taskTitle){
                task.active=false;
                task.completed=false;
                task.failed=true;
            }
        })
        localStorage.setItem('student', JSON.stringify(updateUserData1));
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'student',data:userId }))
        console.log("clicked")

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
                <button className='bg-green-600 text-white px-3 py-1 rounded' onClick={completeHandler}>Completed Task</button>
                <button className='bg-red-600 text-white px-3 py-1 rounded' onClick={failedHandler} >Failed Task</button>

            </div>

        </div>
    )
}

export default AcceptTask
