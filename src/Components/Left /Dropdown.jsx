import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = () => {
  return (
    <div className='relative w-[690px] flex flex-col items-center px-20 '>
     <button className='relative p-4 mx-4 rounded-lg w-full h-12 flex justify-between items-center border-2 active:border-gray-500 duration-300'>
     <span className='text-blue-950'>Select Import Name:</span>
     <FontAwesomeIcon icon={faCaretDown} className='h-4'/>
     </button>   
     <hr className='w-[490px] m-4 border-[1px]'/>
    </div>
  )
}

export default Dropdown