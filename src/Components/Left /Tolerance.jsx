import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faClock } from '@fortawesome/free-solid-svg-icons'

const Tolerance = () => {
  return (
    <>
    <div className='flex justify-center items-end w-[320px]'>
     <p className='font-bold text-blue-950'>Tolerance Window:</p>
    </div>
     <div className='flex justify-center items-center w-[520px]'>
     <FontAwesomeIcon icon={faToggleOn} className='size-8'/>
      <p className='text-blue-950 p-4'>Toggle ON</p>
      <h1 className=' font-bold'>|</h1>
     <FontAwesomeIcon icon={faClock} className='size-6 p-4'/>
     <p>Select Tolerance Level</p>
     </div>   
    </>
  )
}

export default Tolerance