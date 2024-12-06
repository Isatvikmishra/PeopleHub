import React from 'react'

const FailedTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[340px] p-5 bg-green-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 font-medium py-1 rounded '>{data.category}</h3>
            <h4 className='text-sm '>{data.taskDate}</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
        <p className='text-sm mt-3'>{data.taskDescription}</p>
        <div className='absolute bottom-6 mt-6'>
            <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-md'>Failed</button>
        </div>    
    </div>
  )
}

export default FailedTask