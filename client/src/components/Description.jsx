import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-26 p-6 md:px-30'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn Your Imagination Into Visiuals </p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
            <img src={assets.sample_img_1} alt="" className='w-100 xl:w-96 rounded-lg hover:scale-105 transition-all duration-500' />
            <div >
                <h2 className='text-3xl font-medium max-w-lg mb-4 ' >
                    Introducing The AI-Powered Text to Image Generator
                </h2>

                <p className='text-gray-600 mb-4'>
                    Easily bring your ides to life with our free Ai image generator. Whether you need Stunning visuals or unique imagery, Our tool transforms your text itno eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to 2D life instantly
                </p>
                <p className='text-gray-600'>Simply type in a text prompt, and our cutting-edge AI will genrate high Quality images in seconds. from product visuals to character designs and portraits, even concepts that don't yet exits can be visualized effortlessly. powered by Advanced Ai technology, the creative possibilites are limitless ! </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description