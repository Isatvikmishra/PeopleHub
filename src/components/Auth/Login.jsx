import React, { useState } from 'react'
import { getLocalStorage } from '../../utils/localStorage'
import { AuthContext } from '../../context/AuthProvider'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
            e.preventDefault();
            handleLogin(email, password)
            setEmail('')
            setPassword('')
    }


  return (
    
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-400 shadow-lg rounded-lg p-20 rounded-xl  '>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
            <input
                value={email}

                onChange={(e)=>{
                   setEmail(e.target.value)     
                }}  

                required

                className='text-lg text-white outline-none font-medium bg-transparent placeholder:text-gray-300 px-6 py-2 border-2 border-red-400 rounded-full  focus:border-2 focus:border-red-500 transition duration-200' type="email" placeholder='Email'/>
                
            <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required
                className='text-lg text-white outline-none font-medium bg-transparent placeholder:text-gray-300 px-6 py-2 border-2 mt-4 border-red-400 rounded-full focus:border-2 focus:border-red-500 transition duration-200' type="password" placeholder='Password'/>
                <button className='w-full rounded-full mt-7 px-8 py-2 text-lg shadow-md shadow-zinc-600/50 hover:shadow-zinc-800/50	 text-white bg-red-400  hover:bg-red-500 font-semibold '>Login</button>
            </form>
        </div>

    </div>


  )
}

export default Login