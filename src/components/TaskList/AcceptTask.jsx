import React from 'react'

export const AcceptTask = ({data}) => {

    console.log(data);
    
  return (
        <div className='h-full relative flex-shrink-0 w-[340px] p-5 bg-red-400 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 font-medium py-1 rounded '>{data.category}</h3>
                <h4 className='text-sm '>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className='absolute bottom-6 gap-4 flex justify-between  mt-6'>
                <button className='bg-green-500 font-medium text-md px-2 py-1 rounded'>Mark as Completed</button>
                <button className='bg-red-500 font-medium text-md px-2 py-1 rounded'>Mark as Failed</button>
            </div>
        </div>  
    )
}

export default AcceptTask