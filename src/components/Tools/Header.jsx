import React from 'react'

const Header = (props) => {

const logOutUser = ()=>{
  localStorage.setItem('loggedInUser', '')
  // window.location.reload()
  props.changeUser('')
  
}

  
  return (
    <>
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 hover:bg-red-600 shadow-md text-white text-lg font-medium px-5 py-2 rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>Logout</button>

    </div>
    </>
  )
}

export default Header