import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'


const Upload = () => {
  return (
    <>
    <div className='flex items-center px-20 mt-[-35px]'>
      <h1 className='font-bold text-blue-950'>
    Select a manifest you'd like to import
      </h1>
    </div>
     <div className='relative w-[535px] h-[255px] border-2 border-gray-300 mx-20 mt-2 rounded-lg'>
      <div className='relative w-[490px] h-[130px] border-2 border-gray-300  my-6 mx-[21px] rounded-md'>
        <div className='flex justify-center items-center h-16 pt-6'>
      <FontAwesomeIcon icon={faFileLines} style={{color: "#FFD43B",}} className=' size-6'/>
        </div>
      <h1 className='text-blue-950 flex justify-center items-center'>Drag & Drop Here or <span className='font-bold text-blue-950 ps-1'>Browse</span></h1>
      </div>
      <div className='flex justify-center items-center h-8 ps-1'>
      <button className='bg-blue-950 text-white p-2 rounded-lg w-[300px] h-[55px]'>Upload Manifest</button>
      </div>
      <div className='flex justify-center items-center mt-6'>
      <hr className='w-[300px] m-8 border-[1px]'/>
      </div>
     </div>
    </>
  )
}

export default Upload