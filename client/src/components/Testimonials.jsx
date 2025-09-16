import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-10 md:my-22 p-6 md:p-12'>

    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-2'>Customers Testimonials</h1>
        <p className='text-gray-500 mb-8 md:mb-12'>What Our Users Saying </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index}
                className='bg-white/20 p-6 md:p-12 rounded-lg shadow-md cursor-pointer hover:scale-[1.02] transition-all'>

                    <div className='flex flex-col items-center '>
                        <img src={testimonial.image} alt="" className='rounded-full w-16 md:w-20 lg:w-24' />
                        <h2 className='text-lg md:text-xl font-semibold mt-2'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm md:text-base'>{testimonial.role}</p>
                        <div className='flex mb-4'>
                            {Array(testimonial.stars).fill().map((items,index)=>(
                                <img key={index} src={assets.rating_star} alt="" className='w-4 h-4 md:w-5 md:h-5' />
                            ))}

                        </div>
                        <p className='text-center text-xs md:text-sm text-gray-600'>{testimonial.text}</p>
                    </div>
                </div>
            ))}

        </div>
    </motion.div>
  )
}

export default Testimonials
