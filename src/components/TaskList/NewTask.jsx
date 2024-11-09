import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='text-sm mt-2'>lorem15 hdfkhdsfkk khfkdhfk hksffhkf jkhdkshfksh ksdfkhdf kjhdksf  hd fk kjhskfd k sdfhsd  jkjhfskd  kjjhfds  hlakdshf  lkaddhhfs </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-600 text-white px-3 py-1 rounded'>Accept Task</button>
                

            </div>

        </div>
    )
}

export default NewTask
