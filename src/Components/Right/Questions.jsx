import React from 'react'



const Questions = () => {
  return (
    <div className='absolute top-[115px] right-[200px] p-10'>
    <div className='flex justify-end items-center '>
      <p className='font-bold text-blue-950 tracking-wide'>Split schedule using social distancing?</p>
    </div>
    <div className='flex p-4 gap-2 items-baseline m-1 '>
    <button className='rounded-full w-5 h-5 border-gray-500 border-2 '></button>
    <p className='text-blue-950 font-medium'>Yes</p>
    <button className='rounded-full w-5 h-5 border-gray-500 border-2 ml-6'></button>
    <p className='text-blue-950 font-medium'>No</p>
    </div>
    <hr className='border-[1px] m-3'/>


    <div className=' text-left p-1'>
      <p className='font-bold text-blue-950 tracking-wide'>Location Checking:</p>
      <p className='font-bold text-green-600 tracking-wide'>All Available!</p>
    </div>
    <hr className='border-[1px] m-3 '/>
    </div>
  )
}

export default Questions