import React from 'react'

const TestingCenter = () => {
  return (
    <div className="absolute top-[355px] right-[355px] ">

      <h1 className="font-bold text-blue-950 mb-8">Client:</h1>
      
      <div className='flex justify-center items-center h-1  gap-2'>
        <button className="rounded-full w-5 h-5 border-gray-500 border-2 "></button>
        <p className="text-blue-950 font-medium">Single</p>
        <button className="rounded-full w-5 h-5 border-gray-500 border-2 ml-6"></button>
        <p className="text-blue-950 font-medium ">Multiple</p>
      </div>
        
        
    </div>
  )
}

export default TestingCenter
