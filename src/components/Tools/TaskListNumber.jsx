import React from 'react'

const TaskListNumber = () => {
  return (
    <div>
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className=' bg-green-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-white font-extrabold'>0</h2>
                <h3 className='text-xl text-white mt-0.5 font-medium'>New Task</h3>
            </div>
            <div className=' bg-yellow-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-black font-extrabold'>3</h2>
                <h3 className='text-xl text-black font-medium'>Completed Task</h3>
            </div>
            <div className=' bg-blue-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-white font-extrabold'>1</h2>
                <h3 className='text-xl text-white font-medium'>Accepted Task</h3>
            </div>
            <div className=' bg-red-400 py-6 px-9 w-[45%] rounded-xl'>
                <h2 className='text-3xl text-white  font-extrabold'>0</h2>
                <h3 className='text-xl text-white font-medium'>Failed Task</h3>
            </div>



        </div>

    </div>
  )
}

export default TaskListNumber