import React from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle,FaFacebook ,FaGithub  } from "react-icons/fa";

const SignUp = () => {
  return (
     <div>
          <form className='bg-slate-900 text-white w-1/2 mx-auto my-5 p-10 shadow-2xl rounded-lg'>
            <h2 className='text-center text-3xl underline mb-3'>Login</h2>
            <input className='block w-full p-2 border' type="email" name="" id="" placeholder='Email' />
            <input className='block w-full p-2 border my-5' type="text" name="" id="" placeholder='Password' />
            <input type="submit" value="Login" className='block w-full bg-cyan-900 my-3 hover:bg-cyan-950 cursor-pointer p-2 rounded-lg' />
            <div className='flex justify-center items-center gap-3'>
              <hr className='border-gray-400 w-1/4'/>
              <span>or continue with</span>
              <hr className='border-gray-400 w-1/4'/>
            </div>
            <p className='mt-5'>
              <button className='flex gap-2 items-center justify-center w-full hover:bg-gray-500 border p-1 rounded cursor-pointer my-2'> <FaGoogle className='text-orange-400' /> <span>Login with Google</span> 
              </button>
              <button className='flex gap-2 items-center justify-center w-full hover:bg-gray-500 border p-1 rounded cursor-pointer my-2'> <FaFacebook className='text-orange-400' /> <span>Login with Facbook</span> 
              </button>
              <button className='flex gap-2 items-center justify-center w-full hover:bg-gray-500 border p-1 rounded cursor-pointer my-2'> <FaGithub className='text-orange-400' /> <span>Login with Github</span> 
              </button>
            </p>
            <p className='text-center mt-5'>Already Have an Account? <Link className='bg-cyan-900 my-3 hover:bg-cyan-950 cursor-pointer p-2 rounded' to={'/login'}>Login</Link> </p>
          </form>
        </div>
  )
}

export default SignUp