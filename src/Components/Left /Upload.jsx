import React from 'react'

const Upload = () => {
  return (
    <>
    <div className='flex items-center px-20 '>
      <h1 className='font-bold text-blue-950'>
    Select a manifest you'd like to import
      </h1>
    </div>
     <div className='relative w-[500px] h-[200px] border-2 active:border-gray-300 mx-20 mt-1 rounded-lg'>
      <div className='relative w-[100px] h-[30px] border-2 active:border-gray-300 mx-20 rounded-md'>

      </div>
     </div>
      <hr className='w-[490px] m-4 self-center border-[1px]'/>
    </>
  )
}

export default Upload