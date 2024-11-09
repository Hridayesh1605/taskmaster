import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data,"tasklist")
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto py-5 w-full mt-10 flex items-center justify-start gap-5 flex-nowrap'>
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem} userId = {data}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem} userId = {data}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} userId = {data}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem} userId = {data}/>
            }
        })}
            


        </div>

    )
}

export default TaskList
