import React from 'react'
import Header from '../Tools/Header'
import CreateTask from '../Tools/CreateTask'
import Alltasks from '../Tools/Alltasks'


const AdminDashboard = (props) => {
  return (
    <div className='bg-[#121212] h-full w-full p-10'>
      
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <Alltasks />
        
        
     </div>
  )
}

export default AdminDashboard