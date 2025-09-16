
import {assets} from '../assets/assets'
import { Link, useNavigate  } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'


const Navbar = () => {
  const {user, setShowLogin} = useContext(AppContext)

  



  const navigate =useNavigate()
  return (
    <div className='flex items-center justify-between py-4'>
      <Link to={'/'}>
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
      </Link>

    <div>
      {
      user ? 

      <div className='flex items-center gap-2 sm:gap-2'> 
        <button onClick={()=>('/buycredit')} className='flex items-center gap-2 sm:gap-2 bg-blue-100 px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-full hover:scale-105 transition-all duration-700 '><img className='w-5' src={assets.credit_star}/>
        <p className='text-xs sm:text-sm font-medium text-gray-700'>Creadits left : 50</p>
        </button>
        <p className='text-gray-600 max-sm:hidden pl-3 '> hii, deepanshu</p>
        <div className='relative group'>
          <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
          <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded py-12'>
            <ul className='list-none m-0 p-4 bg-white rounded-md border text-sm shadow-lg'>
              <li className='py-1 px-2 cursor-pointer pr-10' >Logout</li>
            </ul>
          </div>

        </div>
      </div>
      :
      <div className='flex items-center gap-2 sm:gap-5'> 
        <p onClick={() => navigate('/buycredit')} className='cursor-pointer'>Pricing</p>

        <button onClick={()=>setShowLogin(true)}
         className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>
          Login
        </button>
      </div>
    }
      
     
        </div>
    </div> 
  )
}

export default Navbar