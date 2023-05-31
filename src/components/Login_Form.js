import React from 'react'
import login from '../images/login.jpg'

const Login_Form = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block relative'>
          <img className='w-full h-full object-cover bg-gradient-to-t' src={login} alt='login' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-800 text-5xl font-bold text-center'>
            Welcome Back ! <p className='text-2xl'>Glad to See You</p>
          </div>
        </div>
        <div className='bg-gray-800 flex flex-col justify-center'>
          <form className='max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
            <h2 className='text-4xl dark:text-white text-white font-bold text-center'>Sign In</h2>
            <div className='flex flex-col text-gray-400 py-2'>
              <label>Username</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text'></input>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
              <label>Password</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password'></input>
            </div>
            <div className='flex justify-between text-gray-400 py-2'>
              <p className='flex items-center'><input className='mr-2' type='checkbox'></input>Remember Me</p>
              <p>Forgot Password?</p>
            </div>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
          </form>
          <div className='text-center text-gray-400 py-4'>
          Don't have an account yet? <button className='text-teal-500'>Sign Up</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login_Form
