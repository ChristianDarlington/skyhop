import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faClock } from '@fortawesome/free-solid-svg-icons'

const TestingCenter = () => {
  return (
    <>
    <div className="absolute top-[355px] right-[355px] ">

      <h1 className="font-bold text-blue-950 mb-7">Client:</h1>
      
      <div className='flex justify-center items-center h-1  gap-2'>
        <button className="rounded-full w-5 h-5 border-gray-500 border-2 "></button>
        <p className="text-blue-950 font-medium">Single</p>
        <button className="rounded-full w-5 h-5 border-gray-500 border-2 ml-6"></button>
        <p className="text-blue-950 font-medium ">Multiple</p>
      </div>
      
        {/* Testing Center */}

        
    </div>
      <div className='absolute right-[200px] space-y-2 bottom-24 '>

        <div className='flex justify-center items-center'>
          <p className='text-blue-950 p-4'>Testing Center 1</p>
      <button className='relative p-4 rounded-lg w-[170px] h-14 flex justify-between items-center border-2 active:border-gray-500 duration-300'>
     <span className='text-blue-950 pt-3'>Select Client</span>
     <FontAwesomeIcon icon={faCaretDown} className='h-4'/>
     </button>
     <FontAwesomeIcon icon={faClock} className='size-6 p-5 text-blue-950'/>
          </div>  


        <div className='flex justify-center items-center'>
          <p className='text-blue-950 p-4'>Testing Center 2</p>
      <button className='relative p-4 rounded-lg w-[170px] h-14 flex justify-between items-center border-2 active:border-gray-500 duration-300'>
     <span className='text-blue-950 pt-3'>Select Client</span>
     <FontAwesomeIcon icon={faCaretDown} className='h-4'/>
     </button>
     <FontAwesomeIcon icon={faClock} className='size-6 p-5 text-blue-950'/>
          </div> 


        <div className='flex justify-center items-center'>
          <p className='text-blue-950 p-4'>Testing Center 3</p>
      <button className='relative p-4 rounded-lg w-[170px] h-14 flex justify-between items-center border-2 active:border-gray-500 duration-300'>
     <span className='text-blue-950 pt-3'>Select Client</span>
     <FontAwesomeIcon icon={faCaretDown} className='h-4'/>
     </button>
     <FontAwesomeIcon icon={faClock} className='size-6 p-5 text-blue-950'/>
          </div>  


        <div className='flex justify-center items-center'>
          <p className='text-blue-950 p-4'>Testing Center 4</p>
      <button className='relative p-4 rounded-lg w-[170px] h-14 flex justify-between items-center border-2 active:border-gray-500 duration-300'>
     <span className='text-blue-950 pt-3'>Select Client</span>
     <FontAwesomeIcon icon={faCaretDown} className='h-4'/>
     </button>
     <FontAwesomeIcon icon={faClock} className='size-6 p-5 text-blue-950'/>
          </div>  

     

        </div>  
    </>
  )
}

export default TestingCenter
