import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto mt-10 flex items-center flex-nowrap py-5 justify-start gap-5 rounded-xl'>
        
       {data.tasks.map((elem,idx) => {
        
            if(elem.active){
                return <AcceptTask key={idx} data = {elem}/>
            }   
            
            if(elem.newTask){
                return <NewTask key={idx} data = {elem}/>

            }

            if(elem.completed){
                return <CompleteTask key={idx} data = {elem}/>
            }

            if(elem.failed){
                return <FailedTask key={idx} data = {elem}/>
            }
       })} 

    </div>
  )
}

export default TaskList