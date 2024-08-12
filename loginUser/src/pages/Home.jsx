import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='relative h-screen w-full box-border bg-gray-400 flex items-center justify-center rounded-sm m-0 p-0'>
    <img
                src="https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nature Background"
                className="absolute inset-0 object-cover w-full h-full opacity-90"
            />
        <div className='relative border flex items-center justify-center flex-col border-slate-500 rounded-md max-w-md'>
          <div className='flex items-center justify-center flex-col'>
            <h1 className='font-semibold text-3xl text-white mt-6 mb-3 mr-3 ml-3'>Welcome to our Website</h1>
            <p className='text-white text-base mr-3 ml-3 mt-4 mb-4'>We are thrilled to have you here! Explore our platform and take advantage of the features we offer. Get started by logging in or signing up.
            </p>
          </div>

          <div className='flex flex-col mt-3 mb-5'>
            <Link to="/login">
                <button className='w-40 mt-2 px-10 py-1 bg-blue-500 rounded hover:bg-blue-600' >Login</button>
            </Link>
            
            <Link to="/signup">
                <button className='w-40 mt-5 mb-4 px-10 py-1 bg-pink-400 rounded hover:bg-pink-500' >signup</button>
            </Link>
          </div>
        </div>
        


    </div>
    </>
  )
}

export default Home