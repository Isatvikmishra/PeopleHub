import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskCategory, setTaskCategory] = useState('')
    const [taskAssigned, setTaskAssigned] = useState('')

    const [newTask, setNewTask] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        setNewTask({taskTitle, taskDescription,taskDate,taskCategory,active:false, completed:false, newTask:true, failed:false})


        const data = JSON.parse(localStorage.getItem('employees'))  
        data.forEach((elem)=>{
           if(taskAssigned == elem.firstName){
            elem.tasks.push(newTask)
            console.log(elem)
           }
        })

        setTaskTitle('')
        setTaskAssigned('')
        setTaskCategory('')
        setTaskDate('')
        setTaskDescription('')
    }

    

  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-md px-1 text-gray-300 mb-0.5'>Task Title</h3>
                    <input
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    className='w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 font-medium  placeholder:text-gray-400 rounded-lg px-4 py-1 outline-none' placeholder='Make a UI' type="text"
                    />
                </div>   
                <div>
                    <h3 className='text-md px-1 text-gray-300 mb-0.5'>Date</h3>
                    <input
                    value={taskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }}
                    className='w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 font-medium  placeholder:text-gray-400 rounded-lg px-4 py-1 outline-none'  type="date"/>
                </div>
                <div>
                    <h3 className='text-md px-1 text-gray-300 mb-0.5'>Assign To</h3>
                    <input 
                    value={taskAssigned}
                    onChange={(e)=>{
                        setTaskAssigned(e.target.value)
                    }}
                    className='w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 font-medium  placeholder:text-gray-400 rounded-lg px-4 py-1 outline-none'  type="text" placeholder='Employee Name ' />
                </div>
                <div>
                    <h3 className='text-md px-1 text-gray-300 mb-0.5'>Category</h3>
                    <input
                    value={taskCategory}
                    onChange={(e)=>{
                        setTaskCategory(e.target.value)
                    }}
                    className='w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 font-medium  placeholder:text-gray-400 rounded-lg px-4 py-1 outline-none'  type="text" placeholder='design, dev..' />
                </div>
            </div>

            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-md px-1 text-gray-300 mb-0.5'>Description</h3>
                <textarea
                value={taskDescription}
                onChange={(e)=>{
                    setTaskDescription(e.target.value)
                }}
                className='w-full h-44 bg-transparent border-[1px] border-gray-400 mb-4 font-medium  placeholder:text-gray-400 rounded-lg px-4 py-2 outline-none' placeholder='Detailed description about the task' ></textarea>
                <button className='bg-emerald-400 py-3 hover:bg-emerald-500 px-5 rounded-md text-sm mt-4 w-full'>Create Task</button>
            </div> 
        </form>
    </div>
  )
}

export default CreateTask