import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='flex justify-center bg-transparent border-black border-2 m-6 rounded-lg flex-col w-min '>
        <h1 className='text-3xl m-5 text-slate-900 rounded-md p-2'>Sign-Up</h1>
        <div className='flex-col ml-5 mb-5 '>
          <div>
            <h3 className='text-lg p-2 mb-1'>Full Name</h3>
            <input className=' border-black border  rounded-sm w-96 p-2 ml-2' placeholder='Enter Full Name' />
          </div>
          <div>
            <h3 className=' text-lg p-2 mb-1'>Email</h3>
            <input className=' border-black border rounded-sm w-96 p-2 ml-2 mr-5' placeholder='Enter Email' />
          </div>
          <div>
            <h3 className=' text-lg p-2 mb-1 mr-5'>Password</h3>
            <input className=' border-black border rounded-sm w-96 p-2 ml-2' placeholder='Enter Password' />
          </div>
          <div>
            <h3 className=' text-lg p-2 mb-1 mr-5'>I am a ?</h3>
            <input type="radio" name="role" value={1} className='m-5 text-lg text-black' />
            <label>Teacher</label>
            <input type="radio" name="role" value={0} className='m-5 text-lg text-black' />
            <label>Student</label>
          </div>
        </div>
        <div className='justify-center flex  mb-5'>
            <button class=" mt-4 bg-transparent font-semibold  py-2 px-4 border border-black rounded">
              Create Account
            </button>
        </div>
      </div>

    </>
  )
}

export default Signup