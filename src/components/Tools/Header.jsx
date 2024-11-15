import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Satvik👋</span></h1>
        <button className='bg-red-500 hover:bg-red-600 shadow-md text-white text-lg font-medium px-5 py-2 rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>Logout</button>


    </div>
    </>
  )
}

export default Header