import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { motion } from "motion/react"

const Login = () => {

  const [state, setState] = useState('Login');
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [])

  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 flex backdrop-blur-sm bg-black/30 justify-center items-center z-50'>

        <motion.form
        initial={{ opacity: 0.2, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='bg-white p-10 rounded-xl relative text-slate-700 '>
            <h1 className='text-center text-3xl text-neutral-700 font-medium'>{state}</h1>
            <p className='text-sm '>Welcome back! Please Sign In To Continue </p>

            {state!=='Login' &&

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.profile_icon_1} alt="" className="w-8 h-8" />
                <input type="text" className='outline-none text-sm' placeholder='Full Name' required />
            </div>  }

              <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-3'>
                <img src={assets.email_icon} alt="" className="w-8 h-8" />
                <input type="email" className='outline-none text-sm' placeholder='Email ID' required />
            </div>
              <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-3'>
                <img src={assets.lock_icon} alt="" className="w-8 h-8" />
                <input type="password" className='outline-none text-sm' placeholder='Password' required />
            </div>
            <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget password</p>

            <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Login' : 'Create Account'}</button>
          {state === 'Login' ? 
            <p className='mt-5 text-center'>Don't Have An Account ? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p> :
          <p className='mt-5 text-center'>Already Have An Account ? <span className='text-blue-600 cursor-pointer'onClick={()=>setState('Login')}>Login</span></p>
          }
          <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" className='w-6 h-6 absolute top-3 right-3 cursor-pointer' />

        </motion.form>

    </div>
  )
}

export default Login