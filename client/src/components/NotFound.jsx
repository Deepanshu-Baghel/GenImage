import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
      <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-600 mb-4'>Page Not Found</h2>
      <p className='text-lg text-gray-500 mb-6'>This page is currently in development. Please go through the other features of our website.</p>
      <a href="/" className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors'>Go to Home</a>
    </div>
  )
}

export default NotFound
