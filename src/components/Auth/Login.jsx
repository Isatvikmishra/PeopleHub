import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
            e.preventDefault();
            console.log("Hello")
            setEmail('')
            setPassword('')
    }

  return (
    
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-400 p-20 rounded-xl'>
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

                className='text-lg text-white outline-none font-medium bg-transparent placeholder:text-gray-300 px-6 py-2 border-2 border-red-400 rounded-full' type="email" placeholder='Email'/>
                
            <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required
                className='text-lg text-white outline-none font-medium bg-transparent placeholder:text-gray-300 px-6 py-2 border-2 mt-4 border-red-400 rounded-full' type="password" placeholder='Password'/>
                <button className='w-full rounded-full mt-7 px-8 py-2 text-lg text-white bg-red-400  hover:bg-red-500 font-semibold '>Login</button>
            </form>
        </div>

    </div>


  )
}

export default Login