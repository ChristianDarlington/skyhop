import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'





const Header = () => {
  return (
    <>
  <div className='flex justify-between items-center h-40'> 
    <FontAwesomeIcon icon={faSquareXmark} style={{color: "#043b5c"}} className=' text-5xl font-bold pb-20 px-4'/>
      <h1 className='font-bold text-4xl text-center flex-grow pr-14 tracking-wide text-slate-800'>Document Upload</h1>
    </div>
    </>
  )
}

export default Header