import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return ( 
    <>
    <div className='relative h-screen w-full bg-gray-400 flex items-center justify-center'>
    <img
                src="https://i.pinimg.com/originals/0a/77/a4/0a77a4981adca68e5f236af4ab186371.png"
                alt="Nature Background"
                className="absolute inset-0 object-cover w-full h-full opacity-90"
            />
        <div className='relative flex items-center justify-center flex-col h-auto w-96 border border-white rounded-sm'>
            <h1 className='font-bold text-3xl mt-3'>Sign Up</h1>

            <div className='flex justify-center items-center flex-col'>
            
            <div className='mb-2 mt-2 flex justify-center items-center flex-col'>
                <label htmlFor="email" className='font-semibold text-2xl'>Name</label>
                <input type='Name' name='Name' placeholder='enter your Name' className='bg-slate-500 rounded-sm  mr-5 ml-5 mt-2 mb-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 border border-gray-300'></input>
            </div>


            <div className='mb-2 mt-2 flex justify-center items-center flex-col'>
                <label htmlFor="email" className='font-semibold text-2xl'>Email</label>
                <input type='email' name='email' placeholder='enter your email' className='bg-slate-500 rounded-sm  mr-5 ml-5 mt-2 mb-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 border border-gray-300'></input>
            </div>

            <div className='mb-2 mt-2 flex justify-center items-center flex-col'>
                <label htmlFor="username" className='font-semibold text-2xl ml-10 mr-10'>password</label>
                <input type='password' name='username' placeholder='enter your password' className='bg-slate-500 rounded-sm mr-5 ml-5 mt-2 mb-5 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500'></input>
            </div>
            </div>

            

            <button className='bg-blue-600 w-48 h-8 rounded-sm'>Submit</button>

            <div className='ml-5 mr-5 mb-5 mt-5 flex flex-row items-center justify-center'>
            <p>Don't have account?</p>
            <Link to='/login' className='text-blue-600 hover:underline'>
                login
            </Link>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Signup