import React from 'react'

const Import = () => {
  return (
    <>
    <div className='flex justify-center items-center h-12 w-[1310px]'>
      <p className='font-extrabold text-blue-950'>Data in the import is Correct. Please press Continue to import.</p>
    </div>
      <div className='flex justify-center'>
        <button className='bg-blue-950 text-white p-2 rounded-lg w-[200px] h-[45px]'>Continue Import</button>
        <button className=' text-yellow-500 p-2 rounded-lg w-[200px] h-[45px] border-yellow-500 border-2'>Cancel</button>
      </div>
    </>
  )
}

export default Import