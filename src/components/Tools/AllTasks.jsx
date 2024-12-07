import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltasks = () => {

    const [userData, setUserData] = useContext(AuthContext)
    

  return (
    <div id='taskList' className='p-4 bg-[#1C1C1C] mt-5'>
        <div className='bg-red-400  mb-2 py-2 px-4 flex  justify-between rounded '>
                <h3 className='text-lg font-semibold w-1/5'>Name</h3>
                <h3 className='text-lg font-semibold w-1/5'>New Task</h3>
                <h3 className='text-lg font-semibold w-1/5'>Active Task</h3>
                <h3 className='text-lg font-semibold w-1/5'>Completed</h3>
                <h3 className='text-lg font-semibold w-1/5'>Failed</h3>

        </div>
        <div className='mt-2'>
            {userData.map((elem,idx)=>{
                return  <div key ={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h3 className='text-lg font-medium  w-1/5'>{elem.firstName}</h3>
                    <h3 className='text-lg font-medium text-blue-400  w-1/5'>{elem.taskCounts.newTask}</h3>
                    <h3 className='text-lg font-medium text-yellow-400  w-1/5'>{elem.taskCounts.active}</h3>
                    <h3 className='text-lg font-medium text-green-400  w-1/5'>{elem.taskCounts.completed}</h3>
                    <h3 className='text-lg font-medium text-red-400  w-1/5'>{elem.taskCounts.failed}</h3>

            </div> })}
        </div>    
    </div>
   
  )
}

export default Alltasks