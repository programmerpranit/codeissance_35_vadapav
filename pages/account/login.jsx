import React from 'react'

const Login = () => {
  return (
    <>
  <div className='flex justify-center bg-transparent  border-black border-2 m-6 rounded-lg flex-col w-min'>
    <h1 className='text-slate-900 rounded-md text-3xl m-5 p-2'>Login</h1>
    <div className='flex-col ml-5 mb-5'>
      <div className=''>
      <h3 className='text-slate-900 text-lg p-2 mb-1'>Username</h3>
        <input className='rounded-sm border-black border w-96 p-2 ml-2 mr-7' type="text" placeholder='Enter Username' />
      </div>
      <div className=''>
        <h3 className='text-slate-900 text-lg p-2 mb-1'>Password</h3>
        <input className='rounded-sm border-black border w-96 p-2 ml-2 mr-7' type="password" placeholder='Enter Password' />
    </div>
    </div>
    <div className='justify-center flex  mb-5'>
        <Link href={'/todos'}>
          <button class=" mt-4 bg-transparent text-slate-900 font-semibold  py-2 px-4 border border-black rounded">
              Login
          </button>
        </Link>
    </div>
  </div>
   
  </>
  )
}

export default Login