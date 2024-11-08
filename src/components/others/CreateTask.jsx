import React from 'react'

const CreateTask = () => {
  return (
    <div>
                <form className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input type="text" placeholder='' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>

                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>

                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input type='text' placeholder='student Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>

                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input type='text' placeholder='design-dev,etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>

                        </div>


                    </div>

                    <div className='w-2/5 flex-col items-center'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                        <textarea placeholder='' rows='7' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                        <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full w-[30%] h-[42px]'>Create task</button>

                    </div>





                    
                </form>
            </div>
  )
}

export default CreateTask
