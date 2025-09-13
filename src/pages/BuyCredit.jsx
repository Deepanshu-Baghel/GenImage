import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"


const BuyCredit = () => {

  const {user} = useContext(AppContext);


  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='min-h-[90vh] text-center pt-14 mb-10 px-4 flex flex-col gap-1 items-center'>
      <button 
      className='border border-gray-400 px-10 py-2 rounded-full mb-6 hover:scale-105 transition-all duration-300s hover:bg-blue-600 hover:text-white'>
          Our Plans
      </button>

      <h1 className='text-center text-5xl font-medium mb-4 sm:mb-5'>
        Choose The Plans </h1>
      <p className='text-sm text-gray-600 max-w-md text-center mb-6'>
        Choose the best plan that fits your needs and start generating amazing images with our AI-powered tool. Whether you're a casual user or a professional designer, we have a plan for you.</p>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item,index) => (
          <div key={index}
          className='bg-white drop-shadow-sm border text-gray-600 rounded-lg py-10 px-5 flex flex-col gap-4 hover:scale-105 transition-all duration-500 cursor-pointer'>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>₹{item.price} </span> / {item.credits} Credits</p>

          <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started' }
            
          </button>
            

            </div>
          ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit;
