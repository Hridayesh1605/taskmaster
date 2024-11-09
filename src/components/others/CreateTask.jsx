import React from 'react'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    // const [taskTitle, setTaskTitle] = useState("")
    // const [taskDescription, setTaskDescription] = useState("")
    // const [taskDate, setTaskDate] = useState("")
    // const [category, setCategory] = useState("")
    const [assignTo, setAssignTo] = useState("")

    const [newtask, setNewTask] = useState({
       taskTitle: '',
    taskDate: '',
    taskDescription: '',
    category: '',
    active: false,
    newTask: true,
    failed: false,
    completed: false, 
    })

    useEffect(() => {
        console.log("Updated task:", newtask);
      }, [newtask]);


    const [userData,setUserData] = useContext(AuthContext)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTask((prevTask) => ({
          ...prevTask,
          [name]: value,
        }));
      };

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Task submitted:", newtask);
        
        // console.log("created",taskTitle,taskDescription,taskDate,category)

        // setNewTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})
        

        // console.log(newtask,"hridayesh")

        const data = userData
        console.log(data,"submit")

        data.forEach((element) => {
            if(assignTo==element.firstName){
                
                console.log("hiiiiiiiii")
                element.tasks.push(newtask)
                element.taskCount.newTask = element.taskCount.newTask + 1

            }
            
        });
        
        setUserData(data)
        console.log(data,"newTask")

        localStorage.setItem('student',JSON.stringify(data))
        // localStorage.setItem('student',JSON.stringify(student))

        setNewTask({
            taskTitle: '',
            taskDate: '',
            taskDescription: '',
            category: '',
            active: false,
            newTask: true,
            failed: false,
            completed: false,
          });


        // setAssignTo("")
        // setCategory("")
        // setTaskDate("")
        // setTaskDescription("")
        // setTaskTitle("")



    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input name="taskTitle"
        value={newtask.taskTitle}
        onChange={handleInputChange}type="text" placeholder='' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />

                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="taskDate"
        value={newtask.taskDate}
        onChange={handleInputChange}/>

                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input type='text' placeholder='student Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' value={assignTo} onChange={(e)=>{
                            setAssignTo(e.target.value)

                        }}/>

                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input type='text' placeholder='design-dev,etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="category"
        value={newtask.category}
        onChange={handleInputChange}/>

                    </div>


                </div>

                <div className='w-2/5 flex-col items-center'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                    <textarea placeholder='' rows='7' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="taskDescription"
        value={newtask.taskDescription}
        onChange={handleInputChange}/>
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full w-[30%] h-[42px]'>Create task</button>

                </div>






            </form>
        </div>
    )
}

export default CreateTask
