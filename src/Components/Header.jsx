import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'





const Header = () => {
  return (
    <>
  <div className='flex justify-between items-center h-[180px]'> 
    <FontAwesomeIcon icon={faSquareXmark} style={{color: "#043b5c"}} className=' text-5xl font-bold pb-28 px-4'/>
     <div className='w-full'>
      <h1 className='font-bold text-4xl text-center flex-grow pr-14 tracking-wide text-blue-950 '>Document Upload</h1>
      <div className='mt-3'>
      <hr className='border-[1px] border-gray-300 w-[28%] ml-[400px] mb-4'/>
      </div>
     </div>
    </div>
    </>
  )
}

export default Header