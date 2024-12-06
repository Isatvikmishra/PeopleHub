import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div>
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className=' bg-green-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-white font-extrabold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl text-white mt-0.5 font-medium'>New Task</h3>
            </div>
            <div className=' bg-yellow-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-black font-extrabold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl text-black font-medium'>Completed Task</h3>
            </div>
            <div className=' bg-blue-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-white font-extrabold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl text-white font-medium'>Accepted Task</h3>
            </div>
            <div className=' bg-red-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-white  font-extrabold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl text-white font-medium'>Failed Task</h3>
            </div>



        </div>

    </div>
  )
}

export default TaskListNumber