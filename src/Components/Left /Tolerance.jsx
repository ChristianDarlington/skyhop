import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faClock } from '@fortawesome/free-solid-svg-icons'

const Tolerance = () => {
  return (
    <>
    <div className='flex justify-center items-end w-[320px] '>
     <p className='font-bold text-blue-950'>Tolerance Window:</p>
    </div>
     <div className='flex justify-center items-center w-[520px] h-12'>
     <FontAwesomeIcon icon={faToggleOn} className='size-8 text-blue-950'/>
      <p className='text-blue-950 p-4'>Toggle ON</p>
      <div className='border-r-2 border-blue-950  h-[40px]'></div>
     <FontAwesomeIcon icon={faClock} className='size-6 p-4 text-blue-950'/>
     <p>Select Tolerance Level</p>
     </div>   
    </>
  )
}

export default Tolerance