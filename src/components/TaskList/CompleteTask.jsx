import React from 'react'

const CompleteTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='text-sm mt-2'>lorem15 hdfkhdsfkk khfkdhfk hksffhkf jkhdkshfksh ksdfkhdf kjhdksf  hd fk kjhskfd k sdfhsd  jkjhfskd  kjjhfds  hlakdshf  lkaddhhfs </p>
            <div className='flex justify-between items-center mt-5'>
            <button className='bg-red-600 px-3 py-1 rounded text-sm'>Completed</button>
            </div>

        </div>
    )
}

export default CompleteTask
